<script>
  import getTotal from './totalHelper.js'

  
  export let guesses;
  export let date;
  export let time;
  export let gender;

  function hoursAndMinutesText(minutes) {
    const hours = Math.floor(total[0].minutesFromTOB / 60)
    const remainingMins = minutes - (hours * 60)

    return `${hours ? `${hours} hour${hours > 1 ? 's' : ''} and` : ''} ${remainingMins ? `${remainingMins} minute${remainingMins > 1 ? 's' : ''}` : ''}`
  }

  // const total = getTotal(guesses, date, time, gender)
  const total = getTotal(guesses, new Date(`10/2/2022`), {hour: 4, minute: 15}, 'girl').sort((a,b) => a.rank - b.rank)

</script>

<div class="container left-align">
  <div class="card-header">
  <h3 class="left-align card-name">
 {total[0].name}
  </h3>
  <h3>{total[0].rank}</h3>
  </div>
  <ul>
  <li>
   <p class="" >🗓 {total[0].daysFromDOB} days from D.O.B.</p>
  </li>
  <li>
   <p class="" >⏰ {hoursAndMinutesText(total[0].minutesFromTOB)} from T.O.B.</p>
  </li>
  <li>
   <p class="" >{`${total[0].gender === 'girl' ? '💃' : '🕺🏼'}`} guessed {total[0].gender}</p>
  </li>
  </ul>
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

.card-header > h3 {
  margin: 0;
 }
.card-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.card-name {
  font-size: 1.5rem;
  /* margin: 1rem; */
}
</style>