<script>
	import '../app.css';
	import { onMount } from 'svelte';

	// Force dark mode on page load
	onMount(() => {
		document.documentElement.classList.add('dark');
	});
</script>

<slot />