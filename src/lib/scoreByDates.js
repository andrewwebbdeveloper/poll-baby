import { differenceInDays } from 'date-fns';
//
// score derived from days from DOB
//
export function scoreByDates(guessArray, DOB) {
	const result = guessArray
		.sort((a, b) => {
			// Least amount of days first
			return absoluteDifferenceInDays(a.date, DOB) - absoluteDifferenceInDays(b.date, DOB);
		})
		.reduce((acc, person) => {
			const daysFromDOB = absoluteDifferenceInDays(person.date, DOB);

			return [...acc, { ...person, daysFromDOB }];
		}, []);

	// console.log(result);
	return result;
}

const absoluteDifferenceInDays = (dateLeft, dateRight) =>
	Math.abs(differenceInDays(dateLeft, dateRight));
