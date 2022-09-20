<script>
import Results from '$lib/Results.svelte'
import {guesses} from '$lib/guesses.js'

let time
let gender
</script>

<svelte:head>
	<title>Baby T</title>
	<meta name="description" content="Civil competition to guess things Baby T" />
</svelte:head>

<div class="container">
<div></div>
<div>
<input type="date">
<input type="time" bind:value={time}>
<select name="" id="" bind:value={gender}>
	<option value="girl">girl</option>
	<option value="boy">boy</option>
</select>
<Results guesses={guesses.T} gender={gender} time={time}/>
</div>
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
