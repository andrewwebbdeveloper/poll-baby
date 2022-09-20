export function scoreTotal(guessArray) {
	const result = guessArray
		.reduce((acc, person) => {
			return [...acc, { ...person, totalScore: altScore(person) }];
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

// These are too close together ( too many ties )
const sumScores = (person) => {
	let total = 0;

	for (let key in person) {
		switch (key) {
			case 'dateScore':
			case 'timeScore':
			case 'genderScore':
				total += person[key];
		}
	}

	return total;
};

// Lowest score wins, indicates closeness to actual date / time / gender
const altScore = (person) => {
	let total = 0;

	for (let key in person) {
		switch (key) {
			case 'daysFromDOB':
				total += person[key] * 100; // makes category points closer
				break;
			case 'minutesFromTOB':
				total += person[key];
				break;
			case 'genderScore':
				total -= person[key] * 100; // makes category points closer
				break;
		}
	}

	return total;
};
