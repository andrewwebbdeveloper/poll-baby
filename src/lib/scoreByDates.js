import { differenceInCalendarDays } from 'date-fns';

export function scoreByDates(guessArray, DOB) {
	const result = guessArray
		.sort((a, b) => {
			// Least amount of days first
			return (
				Math.abs(differenceInCalendarDays(a.date, DOB)) -
				Math.abs(differenceInCalendarDays(b.date, DOB))
			);
		})
		.reduce((acc, person, index, array) => {
			const participants = array.length;
			const isFirstPerson = index === 0;
			const previousPerson = !isFirstPerson ? acc[index - 1] : null;

			const daysFromDOB = differenceInCalendarDays(person.date, DOB);
			const previousPersonDaysFromDOB =
				previousPerson && differenceInCalendarDays(previousPerson.date, DOB);
			const previousPersonSameDate = daysFromDOB === previousPersonDaysFromDOB;

			const score = previousPersonSameDate ? previousPerson['dateScore'] : participants - index;

			return [...acc, { ...person, dateScore: score }];
		}, []);

	console.log(result);
	return result;
}
