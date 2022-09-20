<script>
import Results from '$lib/Results.svelte'
import {guesses} from '$lib/guesses.js'
</script>

<svelte:head>
	<title>Baby T</title>
	<meta name="description" content="Civil competition to guess things Baby T" />
</svelte:head>

<div class="container">
<div></div>
<Results guesses={guesses.T}/>
<div></div>
</div>

<style>
	.container {
		display: grid;
	  grid-template-columns: 1fr minmax(25rem, 1fr) 1fr;

	}
</style>
