import { differenceInCalendarDays } from 'date-fns';

// rank determined by the closest date
// score determined by the rank, weighted by the amount of participants

export function scoreByDates(guessArray, DOB) {
	const result = guessArray
		.sort((a, b) => {
			// Least amount of days first
			return absoluteDifferenceInDays(a.date, DOB) - absoluteDifferenceInDays(b.date, DOB);
		})
		.reduce((acc, person, index, array) => {
			const participants = array.length;
			const isFirstPerson = index === 0;
			const previousPerson = !isFirstPerson ? acc[index - 1] : null;

			const daysFromDOB = absoluteDifferenceInDays(person.date, DOB);
			const previousPersonDaysFromDOB = previousPerson && absoluteDifferenceInDays(previousPerson.date, DOB);
			const previousPersonSameDate = daysFromDOB === previousPersonDaysFromDOB;

			const score = previousPersonSameDate ? previousPerson['dateScore'] : participants - index;

			return [...acc, { ...person, dateScore: score, daysFromDOB }];
		}, []);

	// console.log(result);
	return result;
}

const absoluteDifferenceInDays = (dateLeft, dateRight) =>
	Math.abs(differenceInCalendarDays(dateLeft, dateRight));
