<script lang="ts">
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import Session from "$lib/Session.svelte";
  
    let title: string = "Remote Terminal | tetrax";
    let sessionId = "";

    // Only access page store on the client side
    $: if (browser) {
      sessionId = $page.params.id;
    }
  </script>
  
  <svelte:head>
    <title>{title}</title>
  
    <style>
      body {
        overscroll-behavior: none;
      }
    </style>
  </svelte:head>
  
  {#if browser}
    <Session
      id={sessionId}
      on:receiveName={({ detail: sessionName }) => {
        if (sessionName) {
          title = `${sessionName} | tetrax`;
        }
      }}
    />
  {/if}
  