<script>
import { onMount } from 'svelte';
import { lightFormat, toDate, format } from 'date-fns'
import Results from '$lib/Results.svelte'
import {guesses} from '$lib/guesses.js'

let date
let time
let gender

onMount(() => {
	const today = new Date()
	date = format(today, 'yyyy-MM-dd')
	time = `${today.getHours().toString().padStart(2, 0)}:${today.getMinutes().toString().padStart(2, 0)}`
	gender = 'boy'
})

</script>

<svelte:head>
	<title>Baby T</title>
	<meta name="description" content="Civil competition to guess things Baby T" />
</svelte:head>

<div class="container">
<div></div>
<div>
<div class="input-container">
<input type="date" bind:value={date} on:input={ (e) => (date = e.target.value)}>
<input type="time" bind:value={time}>
<select name="" id="" bind:value={gender}>
	<option value="girl">girl</option>
	<option value="boy">boy</option>
</select>
</div>
<Results guesses={guesses.T} gender={gender} time={time} date={date}/>
</div>
<div></div>
</div>

<style>
.input-container {
	display: flex;
	justify-content: center;
}
	.container {
		display: flex;
		flex-direction: column;
	  grid-template-columns: 1fr minmax(25rem, 1fr) 1fr;
		margin: 0 auto;

	}
</style>
