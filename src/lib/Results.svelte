<script>
import { lightFormat, toDate, format } from 'date-fns'

  import getTotal from './totalHelper.js'
  import {formatOrdinals} from '$lib/formatOrdinals.js'

  
  export let guesses;
  export let date = new Date();
  export let time = '12:00';
  export let gender = 'boy';

  

  function hoursAndMinutesText(person, minutes) {
    const hours = Math.floor(person.minutesFromTOB / 60)
    const remainingMins = minutes - (hours * 60)

    return `${hours ? `${hours} hour${hours > 1 ? 's' : ''} and` : ''} ${remainingMins ? `${remainingMins} minute${remainingMins > 1 ? 's' : ''}` : ''}`
  }

  function formatTimeStringToObject(timeString) {
    return !timeString ? '' : {hour: Number(timeString.substring(0,2)), minute: Number(timeString.substring(3))}
  }

  $: total = getTotal(guesses, toDate(new Date(date)), formatTimeStringToObject(time), gender).sort((a,b) => a.rank - b.rank)
  // const total = getTotal(guesses, new Date(`10/2/2022`), {hour: 4, minute: 15}, 'girl').sort((a,b) => a.rank - b.rank)

  $: {
    console.table(total)
  }

</script>
{#each total as person}
<div class="container left-align">
  <div class="card-header">
  <h3 class="left-align card-name">
 {person.name}
  </h3>
  <h3>{formatOrdinals(person.rank)}</h3>
  </div>
  <ul>
  <li>
   <p class="" >🗓 {person.daysFromDOB} days from D.O.B.<br> <em>({lightFormat(person.date, 'MM-dd-yyyy')})</em></p>
  </li>
  <li>
   <p class="" >⏰ {hoursAndMinutesText(person, person.minutesFromTOB)} from T.O.B.
   <br> <em>({person.time.hour > 12 ? person.time.hour -  12:person.time.hour}:{`${person.time.minute}`.padStart(2, '0')} {person.time.hour > 12 ? 'pm':'am'})</em></p>
  </li>
  <li>
   <p class="" >{`${person.gender === 'girl' ? '💃' : '🕺🏼'}`} guessed {person.gender}</p>
  </li>
  </ul>
</div>
{/each}
<style>
p {
  font-size: 1rem;
}
.left-align {

  text-align: left;
}
.container {
  margin: 0.5rem;
  background-color: var(--tertiary-color);
  box-shadow: 1px 2px 3px var(--primary-color);
  border-radius: 5px;
  padding: 1rem;

  transition: scale 0.2s ease;
}

.container:hover {
  scale: 1.01;
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