<script>
import Results from '$lib/Results.svelte'
import {guesses} from '$lib/guesses.js'
</script>

<svelte:head>
	<title>Baby T</title>
	<meta name="description" content="Civil competition to guess things Baby T" />
</svelte:head>

<div>
<h1><Results guesses={guesses.T}/></h1>
</div>

<style>
	
</style>
