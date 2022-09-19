import { differenceInCalendarDays } from 'date-fns';

export function byClosestDates(guessArray, dob) {
	const tally = {};
	let low = 0;
	let high = 0;

	guessArray.forEach(({ name, date }) => {
		const daysAway = daysFromBirth(date, dob);

		tally[name] = daysAway;

		if (daysAway < low) {
			low = daysAway;
		}

		if (daysAway > high) {
			high = daysAway;
		}
	});

	for (const person in tally) {
		console.log(person, tally[person]);
	}
}

export function daysFromBirth(dateGuess, dob) {
	return differenceInCalendarDays(dateGuess, dob);
}
