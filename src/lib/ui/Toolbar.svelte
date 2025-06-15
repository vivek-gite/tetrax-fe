<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import {
    MessageSquareIcon,
    PlusCircleIcon,
    SettingsIcon,
    WifiIcon,
    ChevronDownIcon,
  } from "svelte-feather-icons";

  import logo from "$lib/assets/logo.svg";
  import ShellSelector from "./ShellSelector.svelte";

  export let connected: boolean;
  export let newMessages: boolean;
  export let availableShells: string[] = [];

  let showShellSelector = false;

  const dispatch = createEventDispatcher<{
    create: string;
    chat: void;
    settings: void;
    networkInfo: void;
  }>();

  function handleCreateClick() {
    if (availableShells.length <= 1) {
      // If there's only one shell or no shells, create directly
      dispatch("create", availableShells[0] || "");
    } else {
      // Show shell selector
      showShellSelector = !showShellSelector;
    }
  }

  function handleShellSelect(event: CustomEvent<string>) {
    dispatch("create", event.detail);
    showShellSelector = false;
  }
</script>

<div class="panel inline-block px-3 py-2">
  <div class="flex items-center select-none">
    <a href="/" class="flex-shrink-0"
      ><img src={logo} alt="tetrax logo" class="h-10" /></a
    >
    <p class="ml-1.5 mr-2 font-medium">tetrax</p>

    <div class="v-divider" />    <div class="flex space-x-1">
      <div class="relative">
        <button
          class="icon-button flex items-center gap-1"
          class:bg-zinc-700={showShellSelector}
          on:click={handleCreateClick}
          disabled={!connected}
        >
          <PlusCircleIcon strokeWidth={1.5} class="p-0.5" />
          {#if availableShells.length > 1}
            <ChevronDownIcon 
              strokeWidth={1.5} 
              class="w-3 h-3 transition-transform {showShellSelector ? 'rotate-180' : ''}"
            />
          {/if}
        </button>
        
        <ShellSelector
          {availableShells}
          show={showShellSelector}
          on:select={handleShellSelect}
          on:close={() => showShellSelector = false}
        />
      </div>
      <button class="icon-button" on:click={() => dispatch("chat")}>
        <MessageSquareIcon strokeWidth={1.5} class="p-0.5" />
        {#if newMessages}
          <div class="activity" />
        {/if}
      </button>
      <button class="icon-button" on:click={() => dispatch("settings")}>
        <SettingsIcon strokeWidth={1.5} class="p-0.5" />
      </button>
    </div>

    <div class="v-divider" />

    <div class="flex space-x-1">
      <button class="icon-button" on:click={() => dispatch("networkInfo")}>
        <WifiIcon strokeWidth={1.5} class="p-0.5" />
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  .v-divider {
    @apply h-5 mx-2 border-l-4 border-zinc-800;
  }

  .icon-button {
    @apply relative rounded-md p-1 hover:bg-zinc-700 active:bg-indigo-700 transition-colors;
    @apply disabled:opacity-50 disabled:bg-transparent;
  }

  .activity {
    @apply absolute top-1 right-0.5 text-xs p-[4.5px] bg-red-500 rounded-full;
  }
</style>
