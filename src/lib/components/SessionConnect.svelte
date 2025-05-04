<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  // Define message type interface
  interface Message {
    type: 'system' | 'received' | 'sent' | 'error';
    text: string;
  }
  
  let sessionId = '';
  let socket: WebSocket | null = null;
  let connectionStatus = 'Disconnected';
  let messages: Message[] = [];
  let inputMessage = '';
  
  // Function to establish WebSocket connection
  function connect() {
    if (!sessionId.trim()) {
      connectionStatus = 'Please enter a valid session ID';
      return;
    }
    
    try {
      // Close existing connection if any
      if (socket) {
        socket.close();
      }
      
      const wsUrl = `ws://0.0.0.0:8000/ws/${sessionId}`;
      connectionStatus = `Connecting to ${wsUrl}...`;
      socket = new WebSocket(wsUrl);
      
      socket.onopen = () => {
        connectionStatus = `Connected with session ID: ${sessionId}`;
        messages = [...messages, { type: 'system', text: 'Connection established' }];
      };
      
      socket.onmessage = (event) => {
        const message = event.data;
        messages = [...messages, { type: 'received', text: message }];
      };
      
      socket.onerror = (event) => {
        connectionStatus = 'Error: Connection failed';
        messages = [...messages, { type: 'error', text: 'Connection error occurred' }];
      };
      
      socket.onclose = () => {
        connectionStatus = 'Disconnected';
        messages = [...messages, { type: 'system', text: 'Connection closed' }];
      };
    } catch (error: unknown) {
      connectionStatus = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }
  
  // Function to send a message through the WebSocket
  function sendMessage() {
    if (socket && socket.readyState === WebSocket.OPEN && inputMessage.trim()) {
      socket.send(inputMessage);
      messages = [...messages, { type: 'sent', text: inputMessage }];
      inputMessage = '';
    }
  }
  
  // Clean up the WebSocket connection when the component is destroyed
  onDestroy(() => {
    if (socket) {
      socket.close();
    }
  });
</script>

<div class="p-6 max-w-md mx-auto bg-[#222222] rounded-lg shadow-lg">
  <h2 class="text-xl mb-4 text-white">WebSocket Connection</h2>
  
  <div class="mb-4">
    <label for="session-id" class="block text-sm font-medium text-white mb-1">Session ID:</label>
    <div class="flex">
      <input 
        id="session-id"
        type="text" 
        bind:value={sessionId} 
        placeholder="Enter session ID" 
        class="flex-1 p-2 bg-[#333333] text-white border border-gray-700 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button 
        on:click={connect} 
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors"
      >
        Connect
      </button>
    </div>
  </div>
  
  <div class="mb-4 p-2 bg-[#333333] rounded text-sm">
    <p class:text-green-400={connectionStatus.startsWith('Connected')} 
       class:text-red-400={connectionStatus.startsWith('Error')} 
       class:text-yellow-400={connectionStatus === 'Connecting...'} 
       class:text-white={connectionStatus === 'Disconnected'}>
      Status: {connectionStatus}
    </p>
  </div>
  
  <div class="mb-4 h-48 overflow-y-auto p-2 bg-[#333333] rounded">
    {#if messages.length === 0}
      <p class="text-gray-400 text-sm italic">No messages</p>
    {:else}
      {#each messages as message}
        <div class="mb-1 text-sm" class:text-blue-400={message.type === 'system'} 
             class:text-green-400={message.type === 'received'} 
             class:text-red-400={message.type === 'error'} 
             class:text-white={message.type === 'sent'}>
          {message.text}
        </div>
      {/each}
    {/if}
  </div>
  
  <div class="flex">
    <input 
      type="text" 
      bind:value={inputMessage} 
      placeholder="Type a message" 
      class="flex-1 p-2 bg-[#333333] text-white border border-gray-700 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
      on:keydown={(e) => e.key === 'Enter' && sendMessage()}
      disabled={!socket || socket.readyState !== WebSocket.OPEN}
    />
    <button 
      on:click={sendMessage} 
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors"
      disabled={!socket || socket.readyState !== WebSocket.OPEN}
    >
      Send
    </button>
  </div>
</div>