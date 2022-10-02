<script>

import { Confetti } from "svelte-confetti"


import Results from '$lib/Results.svelte'
import Inputs from '$lib/Inputs.svelte'
import {guesses} from '$lib/guesses.js'


let date
let time
let gender

let birthday = {
	date: new Date('10/1/2022'),
	time: '18:23',
	gender: 'boy',
}

</script>

<svelte:head>
	<title>Baby T</title>
	<meta name="description" content="Civil competition to guess things Baby T" />
</svelte:head>

<div style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;">
<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[250, 5000]} infinite duration=5000 amount=800 fallDistance="100vh" />
</div>
<div class="container">
	<div></div>
	<div>
		<Inputs
		birthday={birthday} 
		bind:date={date}
		bind:time={time}
		bind:gender={gender}
		/>
		
		<p class="baby-data">🕺🏼🎉 <strong>Aaron Lyle T. －  9lbs 5oz</strong> 🎉🕺🏼</p>
		
		<Results 
		guesses={guesses.T}
		gender={gender}
		time={time}
		date={date}
		/>
	</div>
<div></div>
</div>

<style>

	.baby-data {
		text-align: center;
	}

	.container {
		display: flex;
		flex-direction: column;
	  grid-template-columns: 1fr minmax(25rem, 1fr) 1fr;
		margin: 0 auto;

	}
</style>
