<script lang="ts" context="module">
  import type {ws_protocol} from '$lib/proto/generated/web_protocol_pb';
  
  export type ChatMessage = ws_protocol.WsServer.ChatBroadcast;
</script>

<script lang="ts">
  import { createEventDispatcher, tick, onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { SendIcon, BoldIcon, ItalicIcon, CodeIcon, LinkIcon } from "svelte-feather-icons";
  import { marked } from 'marked';
  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import python from 'highlight.js/lib/languages/python';
  import html from 'highlight.js/lib/languages/xml';
  import css from 'highlight.js/lib/languages/css';
  import json from 'highlight.js/lib/languages/json';
  import CircleButton from "./CircleButton.svelte";

  const dispatch = createEventDispatcher<{ chat: string; close: void }>();

  export let userId: number;
  export let messages: ChatMessage[];

  let showMarkdownHelp = false;
  let isTyping = false;
  let isMaximized = false;
  onMount(() => {
    // Register languages for syntax highlighting
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('html', html);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('json', json);

    // Configure marked
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  });
  function parseMarkdown(text: string): string {
    try {
      const result = marked(text);
      let html = typeof result === 'string' ? result : text;
      
      // Post-process to add syntax highlighting to code blocks
      html = html.replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g, (match, lang, code) => {
        try {
          const decodedCode = code.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
          const highlighted = hljs.highlight(decodedCode, { language: lang }).value;
          return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
        } catch {
          return match;
        }
      });
      
      // Highlight code blocks without language specification
      html = html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
        try {
          const decodedCode = code.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
          const highlighted = hljs.highlightAuto(decodedCode).value;
          return `<pre><code class="hljs">${highlighted}</code></pre>`;
        } catch {
          return match;
        }
      });
      
      return html;
    } catch (error) {
      return text; // Fallback to plain text if parsing fails
    }
  }let groupedMessages: ChatMessage[][];
  $: {
    groupedMessages = [];
    let lastSender = -1;
    for (const chat of messages) {
      if (chat.userId === lastSender) {
        groupedMessages[groupedMessages.length - 1].push(chat);
      } else {
        groupedMessages.push([chat]);
        lastSender = chat.userId;
      }
    }
  }

  let scroller: HTMLElement;
  $: if (scroller && groupedMessages.length) {
    tick().then(() => {
      scroller.scroll({ top: scroller.scrollHeight, behavior: 'smooth' });
    });
  }

  let text: string = "";
  let textarea: HTMLTextAreaElement;

  function handleSubmit() {
    if (text.trim()) {
      dispatch("chat", text.trim());
      text = "";
      autoResize();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
    // Auto-resize textarea
    setTimeout(autoResize, 0);
  }

  function autoResize() {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  function insertMarkdown(prefix: string, suffix: string = '') {
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    
    const newText = text.substring(0, start) + prefix + selectedText + suffix + text.substring(end);
    text = newText;
    
    // Set cursor position after insertion
    tick().then(() => {
      const newCursorPos = start + prefix.length + selectedText.length + suffix.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
      autoResize();
    });
  }
  
  
  function getRelativeTime(sentAt: number | any): { relative: string; local: string } {
    const now = new Date();
    // Handle both number and Long types
    let timestamp: number;
    if (typeof sentAt === 'number') {
      timestamp = sentAt;
    } else if (sentAt && typeof sentAt.toNumber === 'function') {
      timestamp = sentAt.toNumber();
    } else if (sentAt && typeof sentAt.toString === 'function') {
      timestamp = parseInt(sentAt.toString());
    } else {
      // Fallback to current time if we can't parse the timestamp
      timestamp = now.getTime();
    }
    // timestamp is in seconds (less than year 2002), convert to ms
    timestamp = timestamp * 1000;

    const messageDate = new Date(timestamp);
    const diff = now.getTime() - messageDate.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    let relative: string;
    if (minutes < 1) relative = 'just now';
    else if (minutes < 60) relative = `${minutes}m ago`;
    else if (hours < 24) relative = `${hours}h ago`;
    else relative = `${days}d ago`;

    // Format local time string
    const local = messageDate.toLocaleString();
    return { relative, local };
  }

  function toggleMaximize() {
    isMaximized = !isMaximized;
  }
</script>

<div
  class="panel flex flex-col h-full {isMaximized ? 'max-h-[90vh] w-[90vw] fixed top-4 left-1/2 -translate-x-1/2 z-50' : 'max-h-[600px]'} bg-gradient-to-b from-zinc-900/95 to-zinc-800/95 backdrop-blur-sm border border-zinc-700/50 shadow-2xl"
  in:fade|local={{ duration: 150 }}
  out:fade|local={{ duration: 100 }}
>  <!-- Header -->
  <div class="flex items-center justify-between p-4 border-b border-zinc-700/50 bg-zinc-800/50">
    <div class="flex items-center space-x-3">
      <div class="flex space-x-2">
        <CircleButton kind="red" on:click={() => dispatch("close")} />
        <CircleButton kind="green" on:click={toggleMaximize} />
        <CircleButton kind="white" on:click={() => showMarkdownHelp = !showMarkdownHelp} />
      </div>
      <div class="text-zinc-200 text-sm font-semibold tracking-wide">Chat Messages</div>
    </div>
    <div class="flex items-center space-x-2 text-xs text-zinc-400">
      <span>{messages.length} messages</span>
      {#if isTyping}
        <div class="flex space-x-1">
          <div class="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
          <div class="w-1 h-1 bg-green-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
          <div class="w-1 h-1 bg-green-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Markdown Help Panel -->
  {#if showMarkdownHelp}
    <div class="p-3 bg-zinc-800/80 border-b border-zinc-700/50 text-xs" transition:fly|local={{ y: -20 }}>
      <div class="grid grid-cols-2 gap-2 text-zinc-300">
        <div><code>**bold**</code> → <strong>bold</strong></div>
        <div><code>*italic*</code> → <em>italic</em></div>
        <div><code>`code`</code> → <code class="bg-zinc-700 px-1 rounded">code</code></div>
        <div><code>```language</code> → code block</div>
        <div><code>[link](url)</code> → link</div>
        <div><code>> quote</code> → blockquote</div>
      </div>
    </div>
  {/if}

  <!-- Messages -->
  <div class="flex-1 overflow-y-auto p-4 space-y-4" bind:this={scroller}>
    {#each groupedMessages as chatGroup (chatGroup[0].userId + chatGroup[0].message)}
      <div class="message-group" class:from-me={userId === chatGroup[0].userId}>
        <div class="flex items-center space-x-2 mb-2">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            {chatGroup[0].userName?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <div class="text-xs text-zinc-400">
            <span class="font-medium text-zinc-300">{chatGroup[0].userName || 'Anonymous'}</span>
            <span class="mx-1">•</span>
            <span title={getRelativeTime(chatGroup[0].sentAt || Date.now()).local}>
              {getRelativeTime(chatGroup[0].sentAt || Date.now()).relative}
            </span>
          </div>
        </div>        <div class="ml-10 space-y-2 message-container-wrapper">
          {#each chatGroup as chat (chat.message + chat.userId)}
            <div class="chat-message-container" class:own-message-container={userId === chat.userId}>
              <div class="chat-message" class:own-message={userId === chat.userId}>
                <div class="message-content">
                  {@html parseMarkdown(chat.message)}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
    
    {#if messages.length === 0}
      <div class="flex flex-col items-center justify-center h-32 text-zinc-500">
        <div class="text-2xl mb-2">💬</div>
        <div class="text-sm">No messages yet</div>
        <div class="text-xs">Start a conversation!</div>
      </div>
    {/if}
  </div>

  <!-- Input Area -->
  <div class="border-t border-zinc-700/50 bg-zinc-800/50 p-4">
    <!-- Formatting Toolbar -->
    <div class="flex items-center space-x-2 mb-3 pb-2 border-b border-zinc-700/30">
      <button
        class="p-1.5 rounded hover:bg-zinc-700/50 text-zinc-400 hover:text-zinc-200 transition-colors"
        on:click={() => insertMarkdown('**', '**')}
        title="Bold"
      >
        <BoldIcon size="14" />
      </button>
      <button
        class="p-1.5 rounded hover:bg-zinc-700/50 text-zinc-400 hover:text-zinc-200 transition-colors"
        on:click={() => insertMarkdown('*', '*')}
        title="Italic"
      >
        <ItalicIcon size="14" />
      </button>
      <button
        class="p-1.5 rounded hover:bg-zinc-700/50 text-zinc-400 hover:text-zinc-200 transition-colors"
        on:click={() => insertMarkdown('`', '`')}
        title="Inline code"
      >
        <CodeIcon size="14" />
      </button>
      <button
        class="p-1.5 rounded hover:bg-zinc-700/50 text-zinc-400 hover:text-zinc-200 transition-colors"
        on:click={() => insertMarkdown('```\n', '\n```')}
        title="Code block"
      >
        <div class="text-xs font-mono">{'{}'}</div>
      </button>
      <button
        class="p-1.5 rounded hover:bg-zinc-700/50 text-zinc-400 hover:text-zinc-200 transition-colors"
        on:click={() => insertMarkdown('[', '](url)')}
        title="Link"
      >
        <LinkIcon size="14" />
      </button>
      <div class="flex-1"></div>
      <div class="text-xs text-zinc-500">
        <span class:text-amber-400={text.length > 500}>{text.length}</span>/1000
      </div>
    </div>

    <!-- Text Input -->
    <form on:submit|preventDefault={handleSubmit}>
      <div class="relative">
        <textarea
          bind:this={textarea}
          bind:value={text}
          on:keydown={handleKeydown}
          on:input={() => { isTyping = text.length > 0; autoResize(); }}
          class="w-full resize-none rounded-xl bg-zinc-700/50 border border-zinc-600/50 px-4 py-3 pr-12 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 min-h-[44px] max-h-[120px]"
          placeholder="Type your message... (Markdown supported)"
          maxlength="1000"
          rows="1"
        ></textarea>
        
        {#if text.trim()}
          <button
            type="submit"
            class="absolute right-3 bottom-3 p-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-colors duration-200 disabled:opacity-50"
            transition:fly|local={{ x: 20, duration: 150 }}
            disabled={!text.trim()}
          >
            <SendIcon size="16" />
          </button>
        {/if}
      </div>
      
      <div class="flex justify-between items-center mt-2 text-xs text-zinc-500">
        <span>Press <kbd class="px-1 py-0.5 bg-zinc-700 rounded text-zinc-300">Enter</kbd> to send, <kbd class="px-1 py-0.5 bg-zinc-700 rounded text-zinc-300">Shift+Enter</kbd> for new line</span>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
  .message-group {
    @apply mb-6;
  }

  .message-group.from-me {
    @apply text-right;
  }

  .message-container-wrapper {
    max-width: calc(100% - 2.5rem); /* 10px for ml-10 */
    overflow: hidden;
  }

  /* This line is no longer needed as we use the container
  .message-group.from-me .chat-message {
    @apply ml-auto;
  }
  */.chat-message {
    @apply inline-block break-words mb-2;
    width: auto;
    max-width: 100%;
  }.message-content {
    @apply px-4 py-3 rounded-2xl text-sm leading-relaxed inline-block;
    @apply bg-zinc-700/50 text-zinc-100 backdrop-blur-sm;
    @apply border border-zinc-600/30;
    width: fit-content;
    max-width: 100%; /* Ensure content doesn't overflow container */
    overflow-wrap: break-word; /* Ensure long words break */
    word-break: break-word; /* Handle edge cases for very long text */
  }

  .own-message .message-content {
    @apply bg-gradient-to-r from-indigo-600 to-purple-600 text-white;
    @apply border-indigo-500/30;
  }

  /* Markdown content styling */
  .message-content :global(p) {
    @apply mb-2 last:mb-0;
  }

  .message-content :global(strong) {
    @apply font-semibold text-white;
  }

  .message-content :global(em) {
    @apply italic;
  }

  .message-content :global(code) {
    @apply px-1.5 py-0.5 bg-zinc-800/80 text-zinc-200 rounded text-xs font-mono;
    @apply border border-zinc-600/50;
  }

  .own-message .message-content :global(code) {
    @apply bg-black/30 text-indigo-100 border-indigo-400/30;
  }

  .message-content :global(pre) {
    @apply mt-2 mb-2 p-3 bg-zinc-900/90 rounded-lg overflow-x-auto;
    @apply border border-zinc-600/50;
  }

  .message-content :global(pre code) {
    @apply p-0 bg-transparent border-0 text-zinc-200;
  }

  .own-message .message-content :global(pre) {
    @apply bg-black/40 border-indigo-400/30;
  }

  .own-message .message-content :global(pre code) {
    @apply text-indigo-100;
  }

  .message-content :global(blockquote) {
    @apply border-l-4 border-zinc-500 pl-4 italic text-zinc-300 my-2;
  }

  .own-message .message-content :global(blockquote) {
    @apply border-indigo-300 text-indigo-100;
  }

  .message-content :global(a) {
    @apply text-blue-400 hover:text-blue-300 underline transition-colors;
  }

  .own-message .message-content :global(a) {
    @apply text-indigo-200 hover:text-white;
  }

  .message-content :global(ul), .message-content :global(ol) {
    @apply ml-4 mb-2;
  }

  .message-content :global(li) {
    @apply mb-1;
  }

  .message-content :global(h1), .message-content :global(h2), 
  .message-content :global(h3), .message-content :global(h4),
  .message-content :global(h5), .message-content :global(h6) {
    @apply font-semibold mb-2 text-white;
  }

  /* Syntax highlighting */
  .message-content :global(.hljs) {
    @apply bg-transparent;
  }

  .message-content :global(.hljs-keyword) {
    @apply text-purple-400;
  }

  .message-content :global(.hljs-string) {
    @apply text-green-400;
  }

  .message-content :global(.hljs-number) {
    @apply text-orange-400;
  }

  .message-content :global(.hljs-comment) {
    @apply text-zinc-500 italic;
  }

  .message-content :global(.hljs-function) {
    @apply text-blue-400;
  }

  .message-content :global(.hljs-variable) {
    @apply text-cyan-400;
  }

  /* Custom scrollbar */
  .overflow-y-auto::-webkit-scrollbar {
    @apply w-2;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    @apply bg-zinc-800/50;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    @apply bg-zinc-600/50 rounded-full;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    @apply bg-zinc-500/70;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .chat-message-container {
    animation: fadeInUp 0.3s ease-out;
  }

  /* Focus states */
  textarea:focus {
    @apply shadow-lg shadow-indigo-500/20;
  }
  /* Responsive adjustments */
  @media (max-width: 640px) {
    .chat-message-container {
      @apply max-w-full;
    }
    
    .message-content {
      @apply px-3 py-2 text-xs;
      max-width: 90%;
    }
    
    .message-content :global(pre) {
      @apply text-xs;
      max-width: 100%;
      overflow-x: auto;
    }
    
    .message-container-wrapper {
      max-width: calc(100% - 1.5rem);
    }
  }/* Message container styles */
  .chat-message-container {
    @apply flex justify-start mb-2;
    width: 100%;
    max-width: 100%;
  }

  .own-message-container {
    @apply justify-end;
  }

  /* Force the message content to wrap properly on pre and code elements */
  .message-content :global(pre) {
    white-space: pre-wrap;
    max-width: 100%;
  }

  .message-content :global(code) {
    white-space: pre-wrap;
    word-break: break-all;
  }
</style>
