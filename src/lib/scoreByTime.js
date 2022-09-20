import { differenceInMinutes } from 'date-fns';

// rank determined by the closest minute
// score determined by the rank, weighted by the amount of participants

// TOB: {hour, minute}
export function scoreByTime(guessArray, TOB) {
	const result = guessArray
		.sort((a, b) => {
			return smallestDiff(a, TOB) - smallestDiff(b, TOB);
		})
		.reduce((acc, person, index, array) => {
			const participants = array.length;
			const isFirstPerson = index === 0;
			const previousPerson = !isFirstPerson ? acc[index - 1] : null;

			const timeFromTOB = smallestDiff(person, TOB);
			const previousPersonTimefromTOB = previousPerson && smallestDiff(previousPerson, TOB);
			const previousPersonSameTime = timeFromTOB === previousPersonTimefromTOB;

			const score = previousPersonSameTime ? previousPerson['timeScore'] : participants - index;

			return [...acc, { ...person, timeScore: score, minutesFromTOB: timeFromTOB }];
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