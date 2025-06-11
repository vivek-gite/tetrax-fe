<script lang="ts">
  import { MinusIcon, PlusIcon, XIcon, InfoIcon } from "svelte-feather-icons";

  export let kind: keyof typeof details;

  const details = {
    red: {
      cls: "bg-red-500 active:bg-red-700",
      icon: XIcon,
    },
    yellow: {
      cls: "bg-yellow-500 active:bg-yellow-700",
      icon: MinusIcon,
    },
    green: {
      cls: "bg-green-500 active:bg-green-700",
      icon: PlusIcon,
    },
    white: {
      cls: "bg-white-500 active:bg-white-700",
      icon: InfoIcon,
    },
  };
</script>

<button
  class="w-3 h-3 p-[1px] rounded-full {details[kind].cls}"
  on:mousedown|stopPropagation
  on:click
>
  <svelte:component
    this={details[kind].icon}
    class="w-full h-full"
    strokeWidth={3}
  />
</button>
