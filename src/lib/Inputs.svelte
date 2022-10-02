<script>
import { onMount } from 'svelte';
import { lightFormat, toDate, format } from 'date-fns'

export let date
export let time
export let gender

export let birthday = {}

onMount(() => {
	const today = new Date()
	date = birthday?.date ? format(birthday.date, 'yyyy-MM-dd') : format(today, 'yyyy-MM-dd')
	time = birthday?.time ? birthday.time :`${today.getHours().toString().padStart(2, 0)}:${today.getMinutes().toString().padStart(2, 0)}`
	gender = birthday?.gender ? birthday.gender : today.getSeconds() % 2 === 0 ?'boy' : 'girl'
})

</script>

<div class="input-container">
<input type="date" bind:value={date} on:input={ (e) => (date = e.target.value)}>
<input type="time" bind:value={time}>
<select name="" bind:value={gender}>
	<option value="girl">girl 💃</option>
	<option value="boy">boy 🕺🏼</option>
</select>
</div>

<style>

input, select {
  font-size: inherit;
}
.input-container {
	display: flex;
	justify-content: center;
}
</style>