<script>
  import getTotal from './totalHelper.js'

  
  export let guesses;
  export let date;
  export let time;
  export let gender;

  // const total = getTotal(guesses, date, time, gender)
  const total = getTotal(guesses, new Date(`10/2/2022`), {hour: 4, minute: 15}, 'girl')

</script>

<div>
  <h1>
 Something to show
  </h1>
  <p style="font-size: 1rem">{JSON.stringify(total[0])}</p>
</div>