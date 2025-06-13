<script lang="ts">
  export let href: string = '';
  export let variant: 'filled' | 'outline' = 'outline';
  export let className: string = '';

  $: buttonClasses = `
    inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors
    ${variant === 'filled' 
      ? 'border-transparent text-white bg-termlyPurple-500 hover:bg-termlyPurple-700 focus:ring-termlyPurple-500' 
      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-termlyPurple-500'
    }
    ${className}
  `.trim();
</script>

{#if href}
  <a {href} class={buttonClasses}>
    <slot />
  </a>
{:else}
  <button class={buttonClasses}>
    <slot />
  </button>
{/if}
