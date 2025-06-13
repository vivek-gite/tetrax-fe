<script lang="ts">
  import ChatBubbleLeftIcon from '$lib/ui/icons/ChatBubbleLeftIcon.svelte';
  import GitHubIcon from '$lib/ui/icons/GitHubIcon.svelte';
  import Button from '$lib/ui/Button.svelte';
  
  let downloading = false;

  const handleDownload = async () => {
    try {
      downloading = true;
      
      // Fetch the latest release info from GitHub API
      const response = await fetch('https://api.github.com/repos/vivek-gite/terminalez/releases/latest');
      const releaseData = await response.json();
      
      // Find the Windows executable asset
      const windowsAsset = releaseData.assets.find((asset: any) => 
        asset.name.toLowerCase().includes('windows') || 
        asset.name.toLowerCase().includes('win') ||
        asset.name.endsWith('.exe')
      );
      
      if (windowsAsset) {
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = windowsAsset.browser_download_url;
        link.download = windowsAsset.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback: open the releases page
        window.open('https://github.com/vivek-gite/terminalez/releases/latest', '_blank');
      }
    } catch (err) {
      console.error('Failed to download: ', err);
      // Fallback: open the releases page
      window.open('https://github.com/vivek-gite/terminalez/releases/latest', '_blank');
    } finally {
      downloading = false;
    }
  };
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Koulen:wght@400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    background-color: white !important;
  }
</style>

<div class="w-full min-h-screen bg-white text-zinc-700 font-koulen">
  <div class="pt-10 mx-auto lg:max-w-5xl">
    <div class="max-w-5xl mx-auto text-center mt-20">
      <p class="text-lg text-zinc-500 font-koulen">Need to share terminal sessions? Try</p>
      <h1 class="text-5xl lg:text-7xl font-koulen">Termly</h1>
      <p class="text-lg text-zinc-500">Real-time collaboration. No setup required.</p>
    </div>
    
    <img 
      src="/img/termly/termly_send_p2p.svg" 
      alt="one computer sending files to another computer through a pipe" 
      class="md:-mt-20 w-full h-auto max-w-full"
    />

    <div class="md:-mt-20 mx-5 md:mx-0 h-10 border-l border-r shadow-sm"></div>
    
    <div class="mx-5 md:mx-0 border-t border-l border-r shadow-sm">
      <div class="md:flex">
        <div class="px-5 py-10 border-b md:border-r md:w-5/12">
          <h2 class="text-4xl text-zinc-700 font-koulen">Terminal sharing<br />doesn't need to be complicated</h2>
          <p class="mt-5 text-md leading-relaxed text-gray-500">
            It's like <span class="font-mono bg-zinc-100 px-1 py-0.5 rounded">screen</span> or <span class="font-mono bg-zinc-100 px-1 py-0.5 rounded">tmux</span> for collaboration. 
            Run the Tetrax app on your machine, and it will generate a shareable link that you can send to anyone who needs to access your terminal. 
            Tetrax connects participants in real-time without any complex setup or configuration.
          </p>
        </div>

        <div class="px-5 py-10 border-b flex-1 md:w-7/12">
          <h3 class="text-3xl font-koulen">Download & Run</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Download the Tetrax application for your platform:</p>
          
          <div class="flex gap-2 mt-2">
            <button 
              class="text-xs md:text-sm rounded bg-termlyPurple-500 text-white px-4 py-2 hover:bg-termlyPurple-700 transition-colors flex items-center gap-2 w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              on:click={handleDownload}
              disabled={downloading}
            >
              <div class="font-mono">
                {#if downloading}
                  Downloading...
                {:else}
                  Download Windows
                {/if}
              </div>
              {#if downloading}
                <div class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              {:else}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              {/if}
            </button>
          </div>
          
          <p class="mt-3 text-sm leading-relaxed text-gray-500">The shareable generated link will look like this:</p>
          
          <div class="text-xs md:text-sm rounded bg-zinc-100 p-2 mt-2 w-full">
            <div class="font-mono text-zinc-600">https://tetrax.dev/s/abc123def456</div>
          </div>
          
          <div class="mt-2 text-xs leading-relaxed text-gray-500">
            <p>Run the app on your machine to generate a shareable link.<br />
            Others can join through any web browser - no installation required.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-5 md:mx-0 h-5 border-l border-r shadow-sm"></div>
    
    <div class="mx-5 md:mx-0 border-t border-l border-r shadow-sm">
      <div class="px-5 pt-10">
        <h3 class="font-koulen text-zinc-600 text-xl">USING TETRAX:</h3>
      </div>
      
      <div class="md:flex sm:gap-5 border-b">
        <div class="md:w-1/3 p-5 pb-10">
          <div class="relative rounded border border-zinc-300 bg-zinc-100 p-2 py-8 h-40 mb-5">
            <div class="absolute top-0 left-0 p-2 flex gap-1">
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
            </div>
            <p class="font-mono font-bold text-sm">> $ ./tetrax</p>
            <p class="font-mono text-zinc-400 text-sm">Session started</p>
            <p class="font-mono text-zinc-400 text-sm">Share: tetrax.dev/s/abc123def</p>
          </div>
          <h3 class="font-koulen text-3xl">1. Run App</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Download and run the Tetrax executable on your machine. It generates a unique shareable link.</p>
        </div>
        
        <div class="md:w-1/3 p-5 pb-10">
          <div class="relative p-2 flex h-40 mb-5">
            <ChatBubbleLeftIcon className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
            <div class="rounded-tr-lg rounded-br-lg rounded-bl-lg border bg-zinc-50 p-2 pb-10 mb-2 h-20 text-sm">
              hey, want to debug this issue together?
              tetrax.dev/s/abc123def
            </div>
          </div>
          <h3 class="font-koulen text-3xl">2. Share Link</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Copy-paste the session link to your collaborators. They can join instantly.</p>
        </div>
        
        <div class="md:w-1/3 p-5 pb-10">
          <div class="relative rounded border border-zinc-300 bg-zinc-100 p-2 py-8 h-40 mb-5">
            <div class="absolute top-0 left-0 p-2 flex gap-1">
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
            </div>
            <p class="font-mono font-bold text-sm">> $ npm run dev</p>
            <p class="font-mono text-zinc-400 text-sm">Alice joined the session</p>
            <p class="font-mono text-zinc-400 text-sm">Bob joined the session</p>
          </div>
          <h3 class="font-koulen text-3xl">3. Collaborate</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Everyone can see the same terminal in real-time. Perfect for pair programming and debugging.</p>
        </div>
      </div>
    </div>

    <div class="mx-5 md:mx-0 h-5 border-l border-r shadow-sm"></div>
    
    <div class="mx-5 md:mx-0 border-t border-l border-r shadow-sm">
      <div class="p-5">
        <h3 class="text-2xl md:text-3xl font-koulen">Free, for teams of any size</h3>
        <p class="mt-1 text-sm leading-relaxed text-gray-500">Tetrax works by connecting participants through secure WebSocket connections, enabling real-time collaboration without limits!</p>
      </div>
      
      <div class="md:flex border-t border-b">
        <div class="p-5 md:border-r">
          <h3 class="font-koulen text-3xl">Real-time</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">See every keystroke and command output instantly across all connected sessions.</p>
        </div>
        <div class="p-5 md:border-r">
          <h3 class="font-koulen text-3xl">Cross-platform</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Works on any device with a web browser. No native apps required.</p>
        </div>
        <div class="p-5">
          <h3 class="font-koulen text-3xl">Secure</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">End-to-end encrypted connections ensure your terminal sessions stay private.</p>
        </div>
      </div>

      <div class="border-t border-b bg-termly-hp-1 p-5 py-20">
        <h2 class="text-2xl font-bold font-mono">Tetrax is built with modern web technologies</h2>
        <p class="md:max-w-lg mt-5">
          Tetrax leverages <a class="text-termlyPurple-500" href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSockets</a> for real-time communication, 
          <a class="text-termlyPurple-700" href="https://xtermjs.org/">XTerm.js</a> for terminal emulation, 
          and <a class="text-termlyPurple-700" href="https://kit.svelte.dev/">SvelteKit</a> for a fast, responsive web experience.
        </p>
        <Button href="https://github.com/vivek-gite/terminalez" variant="filled" className="mt-5">
          <GitHubIcon className="w-4 h-4 mr-2" />
          VIEW ON GITHUB
        </Button>
      </div>
    </div>
    
    <div class="mx-5 mb-20 md:mx-0 h-5 border-l border-r"></div>
  </div>
</div>
