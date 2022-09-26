// Score closest to 0 wins ( points are negative )
// Ties are not broken

export function scoreTotal(guessArray) {
	const result = guessArray
		.reduce((acc, person) => {
			return [...acc, { ...person, totalScore: calculateTotals(person) }];
		}, [])
		.sort((a, b) => b.totalScore - a.totalScore)
		.reduce((acc, person, index, array) => {
			const participants = array.length;
			const isFirstPerson = index === 0;
			const previousPerson = !isFirstPerson ? acc[index - 1] : null;

			// Tie gives same rank
			const rank =
				previousPerson?.['totalScore'] === person['totalScore']
					? previousPerson['rank']
					: participants - index;

			return [...acc, { ...person, rank }];
		}, []);

	return result;
}

// Lowest score wins, indicates closeness to actual date / time / gender
const calculateTotals = (person) => {
	let total = 0;

	for (let key in person) {
		switch (key) {
			case 'daysFromDOB':
				total += person[key] * 75; // makes category points closer
				break;
			case 'minutesFromTOB':
				total += person[key] / 2;
				break;
			case 'genderScore':
				total -= person[key] === true ? 175 : 0 // makes category points closer
				break;
		}
	}

	return total;
};
