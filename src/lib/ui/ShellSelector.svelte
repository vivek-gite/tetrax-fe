<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { TerminalIcon } from "svelte-feather-icons";

  export let availableShells: string[] = [];
  export let show: boolean = false;

  const dispatch = createEventDispatcher<{
    select: string;
    close: void;
  }>();

  // Parse shell info to get display name and executable
  function parseShellInfo(shellInfo: string): { name: string; executable: string } {
    const [name, executable] = shellInfo.split(';');
    return { name: name || executable, executable };
  }

  function handleShellSelect(shellInfo: string) {
    dispatch('select', shellInfo);
    show = false;
  }

  function handleClickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        dispatch('close');
      }
    };

    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

{#if show}
  <div
    class="absolute top-full left-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg min-w-48 z-20"
    transition:fade={{ duration: 150 }}
    use:handleClickOutside
  >
    <div class="p-2">
      <div class="text-xs text-zinc-400 font-medium mb-2 px-2">Select Shell Type</div>
      <div class="space-y-1">
        {#each availableShells as shellInfo}
          {@const shell = parseShellInfo(shellInfo)}
          <button
            class="w-full text-left px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors flex items-center gap-3"
            on:click={() => handleShellSelect(shellInfo)}
          >
            <TerminalIcon size="16" class="text-zinc-400 flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium text-zinc-200">{shell.name}</div>
              <div class="text-xs text-zinc-500 truncate">{shell.executable}</div>
            </div>
          </button>
        {/each}
      </div>
      
      {#if availableShells.length === 0}
        <div class="px-3 py-4 text-center text-zinc-500 text-sm">
          No shells available
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="postcss">
  /* Custom scrollbar for the shell list if it gets long */
  .space-y-1 {
    max-height: 300px;
    overflow-y: auto;
  }
  
  .space-y-1::-webkit-scrollbar {
    @apply w-2;
  }
  
  .space-y-1::-webkit-scrollbar-track {
    @apply bg-zinc-800;
  }
  
  .space-y-1::-webkit-scrollbar-thumb {
    @apply bg-zinc-600 rounded-full;
  }
  
  .space-y-1::-webkit-scrollbar-thumb:hover {
    @apply bg-zinc-500;
  }
</style>
