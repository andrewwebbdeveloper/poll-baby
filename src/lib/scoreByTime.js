import { differenceInMinutes } from 'date-fns';

// Score derived from minutes from T.O.B.

// TOB: {hour, minute}
export function scoreByTime(guessArray, TOB) {
	const result = guessArray
		.sort((a, b) => {
			return smallestDiff(a, TOB) - smallestDiff(b, TOB);
		})
		.reduce((acc, person) => {
			const timeFromTOB = smallestDiff(person, TOB);

			return [...acc, { ...person, minutesFromTOB: timeFromTOB }];
		}, []);

	// console.log(result);
	return result;
}

// Used to calculate the smallest difference in minutes disregarding dates
// This means that round-the-clock closeness counts
// (i.e. 11pm is closer to 1am tommorrow than 1am today)
const smallestDiff = (guess, TOB) => {
	const yesterday = (hour, minute) => new Date(2022, 1, 9, hour, minute);
	const current = (hour, minute) => new Date(2022, 1, 10, hour, minute);
	const tomorrow = (hour, minute) => new Date(2022, 1, 11, hour, minute);
	return Math.min(
		...[
			Math.abs(
				differenceInMinutes(
					current(guess.time.hour, guess.time.minute),
					current(TOB.hour, TOB.minute)
				)
			),
			Math.abs(
				differenceInMinutes(
					current(guess.time.hour, guess.time.minute),
					yesterday(TOB.hour, TOB.minute)
				)
			),
			Math.abs(
				differenceInMinutes(
					current(guess.time.hour, guess.time.minute),
					tomorrow(TOB.hour, TOB.minute)
				)
			)
		]
	);
};
