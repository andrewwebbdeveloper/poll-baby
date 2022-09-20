<script>
  import getTotal from './totalHelper.js'

  
  export let guesses;
  export let date;
  export let time;
  export let gender;

  // const total = getTotal(guesses, date, time, gender)
  const total = getTotal(guesses, new Date(`10/2/2022`), {hour: 4, minute: 15}, 'girl')

</script>

<div class="container">
  <h3 class="left-align card-name">
 Something to show
  </h3>
  <p class="left-align" >{JSON.stringify(total[0])}</p>
</div>

<style>
p {
  font-size: 1rem;
}
.left-align {

  text-align: left;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--tertiary-color);
  border-radius: 5px;
  padding: 1rem;
}

.card-name {
  font-size: 1.5rem;
}
</style>