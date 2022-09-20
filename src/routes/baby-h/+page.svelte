<script>
import Results from '$lib/Results.svelte'
import {guesses} from '$lib/guesses.js'
</script>

<svelte:head>
	<title>Baby H</title>
	<meta name="description" content="Civil competition to guess things Baby H" />
</svelte:head>

<div class="container">
<div></div>
<Results guesses={guesses.H}/>
<div></div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	  grid-template-columns: 1fr minmax(25rem, 1fr) 1fr;
		margin: 0 auto;

	}
</style>
