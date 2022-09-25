// score determined by the gender
// A correct guess equals half the number of participants
// An incorrect guess does not effect score

export function scoreByGender(guessArray, gender) {
	const result = guessArray.reduce((acc, person, index, array) => {
		const participants = array.length;
		const score = person.gender === gender ? participants / 2 : 0;

		return [...acc, { ...person }];
	}, []);

	// console.log(result);
	return result;
}
