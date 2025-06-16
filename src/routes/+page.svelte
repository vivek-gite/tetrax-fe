<script lang="ts">
  import ChatBubbleLeftIcon from '$lib/ui/icons/ChatBubbleLeftIcon.svelte';
  import GitHubIcon from '$lib/ui/icons/GitHubIcon.svelte';
  import Button from '$lib/ui/Button.svelte';
  
  let downloading = false;
  let downloadingUnix = false;
  let showCommands = false;
  let unixDownloadUrl = '';
  let unixFileName = '';
  let commandCopied = false;
  let showUseCases = false;

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

  const handleUnixDownload = async () => {
    try {
      downloadingUnix = true;
      
      // Fetch the latest release info from GitHub API
      const response = await fetch('https://api.github.com/repos/vivek-gite/terminalez/releases/latest');
      const releaseData = await response.json();
      
      // Find the Unix/Linux/Mac executable asset (usually the one without .exe)
      const unixAsset = releaseData.assets.find((asset: any) => 
        (asset.name.toLowerCase().includes('linux') || 
         asset.name.toLowerCase().includes('mac') ||
         asset.name.toLowerCase().includes('darwin') ||
         asset.name.toLowerCase().includes('unix')) &&
        !asset.name.endsWith('.exe')
      ) || releaseData.assets.find((asset: any) => 
        !asset.name.endsWith('.exe') && 
        !asset.name.endsWith('.zip') &&
        !asset.name.endsWith('.tar.gz') &&
        asset.name !== 'Source code (zip)' &&
        asset.name !== 'Source code (tar.gz)'
      );
      
      if (unixAsset) {
        unixDownloadUrl = unixAsset.browser_download_url;
        unixFileName = unixAsset.name;
        
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = unixAsset.browser_download_url;
        link.download = unixAsset.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show the commands after download starts
        showCommands = true;
      } else {
        // Fallback: open the releases page
        window.open('https://github.com/vivek-gite/terminalez/releases/latest', '_blank');
      }
    } catch (err) {
      console.error('Failed to download: ', err);
      // Fallback: open the releases page
      window.open('https://github.com/vivek-gite/terminalez/releases/latest', '_blank');
    } finally {
      downloadingUnix = false;
    }
  };

  const copyCommand = async () => {
    const commands = `chmod +x ${unixFileName}\n./${unixFileName}`;
    try {
      await navigator.clipboard.writeText(commands);
      commandCopied = true;
      setTimeout(() => {
        commandCopied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy commands: ', err);
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
    
    <!-- Use Cases Section -->
    <div class="mx-5 md:mx-0 border-t border-l border-r shadow-sm">
      <div class="p-5 py-10 bg-gradient-to-r from-blue-50 to-purple-50">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-koulen mb-4">Why choose Termly?</h2>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how Termly solves real-world collaboration challenges that developers and teams face every day.
          </p>
          <button 
            class="bg-white text-gray-700 px-6 py-3 rounded-lg shadow-sm border hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto font-medium"
            on:click={() => showUseCases = !showUseCases}
          >
            {showUseCases ? 'Hide' : 'Show'} Use Cases & Benefits
            <svg 
              class="w-4 h-4 transition-transform duration-200 {showUseCases ? 'rotate-180' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>

        {#if showUseCases}
          <div class="mt-10 animate-in slide-in-from-top-4 duration-300">
            <p class="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Remote work and collaboration present unique challenges. Termly solves real problems that developers and teams face every day.
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <!-- Debugging Together -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">Remote Debugging</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> "It works on my machine" but fails in production. Remote debugging sessions require screen sharing, which is slow and limited.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> Share your actual terminal session instantly. Everyone sees the same commands and output in real-time.
                </p>
              </div>

              <!-- Pair Programming -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">Pair Programming</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> Remote pair programming tools are complex, require setup, or don't support terminal work effectively.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> No setup required. Share a link and start collaborating immediately on command-line tasks.
                </p>
              </div>

              <!-- Teaching & Learning -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">Teaching & Learning</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> Teaching command-line tools remotely is difficult. Students can't see exactly what the instructor is typing.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> Perfect for coding bootcamps, tutorials, and mentoring. Students see every keystroke and can follow along.
                </p>
              </div>

              <!-- DevOps & System Administration -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">DevOps & SysAdmin</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> Server maintenance and deployments require multiple team members to coordinate complex terminal operations.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> Multiple team members can monitor critical operations in real-time, ensuring transparency and quick response to issues.
                </p>
              </div>

              <!-- Technical Support -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">Technical Support</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> Helping colleagues or clients with command-line issues over chat or video calls is frustrating and time-consuming.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> Share your terminal directly. No more "type this command" back-and-forth. Just show them exactly what to do.
                </p>
              </div>

              <!-- Code Reviews & Demos -->
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 class="font-koulen text-xl mb-3">Live Demos</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  <strong>The Problem:</strong> Demonstrating CLI tools, build processes, or deployment scripts in meetings requires complex screen sharing setups.
                </p>
                <p class="text-sm text-gray-700 leading-relaxed mt-2">
                  <strong>Termly Solution:</strong> Share a simple link for instant terminal access. Perfect for code reviews, demos, and showcasing your work.
                </p>
              </div>
            </div>

            <div class="text-center mt-10">
              <div class="bg-white p-6 rounded-lg shadow-sm border max-w-4xl mx-auto">
                <h3 class="font-koulen text-2xl mb-4">Why not just use screen sharing?</h3>
                <div class="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 class="font-semibold text-red-600 mb-2">Screen Sharing Problems:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Low resolution and compression artifacts</li>
                      <li>• Network lag affects real-time collaboration</li>
                      <li>• Requires video conferencing software</li>
                      <li>• Viewers can't interact or copy commands</li>
                      <li>• Bandwidth intensive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-green-600 mb-2">Termly Advantages:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Crystal clear text, no compression</li>
                      <li>• Minimal latency, true real-time</li>
                      <li>• Works in any web browser</li>
                      <li>• Viewers can copy/paste and interact</li>
                      <li>• Lightweight, minimal bandwidth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div class="mx-5 md:mx-0 h-5 border-l border-r shadow-sm"></div>
    
    <div class="mx-5 md:mx-0 border-t border-l border-r shadow-sm">
      <div class="md:flex">
        <div class="px-5 py-10 border-b md:border-r md:w-5/12">
          <h2 class="text-4xl text-zinc-700 font-koulen">Terminal sharing<br />doesn't need to be complicated</h2>
          <p class="mt-5 text-md leading-relaxed text-gray-500">
            It's like <span class="font-mono bg-zinc-100 px-1 py-0.5 rounded">screen</span> or <span class="font-mono bg-zinc-100 px-1 py-0.5 rounded">tmux</span> for collaboration. 
            Run the termly app on your machine, and it will generate a shareable link that you can send to anyone who needs to access your terminal. 
            termly connects participants in real-time without any complex setup or configuration.
          </p>
        </div>

        <div class="px-5 py-10 border-b flex-1 md:w-7/12">
          <h3 class="text-3xl font-koulen">Download & Run</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Download the termly application for your platform:</p>
          
          <div class="flex flex-wrap gap-2 mt-2">
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
            
            <button 
              class="text-xs md:text-sm rounded bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors flex items-center gap-2 w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              on:click={handleUnixDownload}
              disabled={downloadingUnix}
            >
              <div class="font-mono">
                {#if downloadingUnix}
                  Downloading...
                {:else}
                  Download Mac/Linux
                {/if}
              </div>
              {#if downloadingUnix}
                <div class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              {:else}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              {/if}
            </button>
          </div>
          
          {#if showCommands && unixFileName}
            <div class="mt-3 p-3 bg-gray-50 rounded border">
              <p class="text-sm font-medium text-gray-700 mb-2">After download, run these commands:</p>
              <div class="bg-black text-green-400 p-2 rounded font-mono text-sm mb-2">
                <div>chmod +x {unixFileName}</div>
                <div>./{unixFileName}</div>
              </div>
              <button 
                class="text-xs bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
                on:click={copyCommand}
              >
                {#if commandCopied}
                  <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Copied!
                {:else}
                  <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  Copy Commands
                {/if}
              </button>
            </div>
          {/if}
          
          <p class="mt-3 text-sm leading-relaxed text-gray-500">The shareable generated link will look like this:</p>
          
          <div class="text-xs md:text-sm rounded bg-zinc-100 p-2 mt-2 w-full">
            <div class="font-mono text-zinc-600">https://termly.live/s/abc123def456</div>
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
        <h3 class="font-koulen text-zinc-600 text-xl">USING termly:</h3>
      </div>
      
      <div class="md:flex sm:gap-5 border-b">
        <div class="md:w-1/3 p-5 pb-10">
          <div class="relative rounded border border-zinc-300 bg-zinc-100 p-2 py-8 h-40 mb-5">
            <div class="absolute top-0 left-0 p-2 flex gap-1">
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
              <div class="border border-zinc-400 w-3 h-3 rounded-full"></div>
            </div>
            <p class="font-mono font-bold text-sm">> $ ./termly</p>
            <p class="font-mono text-zinc-400 text-sm">Session started</p>
            <p class="font-mono text-zinc-400 text-sm">Share: termly.live/s/abc123def</p>
          </div>
          <h3 class="font-koulen text-3xl">1. Run App</h3>
          <p class="mt-1 text-sm leading-relaxed text-gray-500">Download and run the termly executable on your machine. It generates a unique shareable link.</p>
        </div>
        
        <div class="md:w-1/3 p-5 pb-10">
          <div class="relative p-2 flex h-40 mb-5">
            <ChatBubbleLeftIcon className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
            <div class="rounded-tr-lg rounded-br-lg rounded-bl-lg border bg-zinc-50 p-2 pb-10 mb-2 h-20 text-sm">
              hey, want to debug this issue together?
              termly.live/s/abc123def
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
        <p class="mt-1 text-sm leading-relaxed text-gray-500">termly works by connecting participants through secure WebSocket connections, enabling real-time collaboration without limits!</p>
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
        <h2 class="text-2xl font-bold font-mono">termly is built with modern web technologies</h2>
        <p class="md:max-w-lg mt-5">
          termly leverages <a class="text-termlyPurple-500" href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSockets</a> for real-time communication, 
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
