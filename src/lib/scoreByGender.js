
export function scoreByGender(guessArray, gender) {
	
	const result = guessArray.map(guess => ({...guess, genderScore: guess.gender === gender}))

	// console.log(result);
	return result;
}
