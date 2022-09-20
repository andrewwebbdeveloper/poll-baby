import { guesses } from './guesses.js';
import { scoreByDates } from './scoreByDates.js';
import { scoreByTime } from './scoreByTime.js';
import { scoreByGender } from './scoreByGender.js';
import { scoreTotal } from './scoreTotal.js';

export default function (guesses, date, time, gender) {
	let guessArray = guesses
	guessArray = scoreByDates(guessArray, date);
	guessArray = scoreByTime(guessArray, time);
	guessArray = scoreByGender(guessArray, gender);

	return scoreTotal(guessArray);
}
