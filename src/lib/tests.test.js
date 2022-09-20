import { guesses } from './guesses.js';
import { scoreByDates } from './scoreByDates.js';
import { scoreByTime } from './scoreByTime.js';
import { scoreByGender } from './scoreByGender.js';
import { scoreTotal } from './scoreTotal.js';
import { describe, it, expect } from 'vitest';

describe('scoreByDates', () => {
	it('logs', () => {
		scoreByDates(guesses.T, new Date('11/07/2022'));
	});
});

describe('scoreByTime', () => {
	it('logs', () => {
		scoreByTime(guesses.T, { hour: 20, minute: 38 });
	});
});

describe('scoreByGender', () => {
	it('logs', () => {
		scoreByGender(guesses.T, 'girl');
	});
});

describe('scoreTotal', () => {
	it('logs', () => {
		let guessArray = guesses.H;
		guessArray = scoreByDates(guessArray, new Date('11/07/2022'));
		guessArray = scoreByTime(guessArray, { hour: 20, minute: 38 });
		guessArray = scoreByGender(guessArray, 'boy');

		scoreTotal(guessArray);
		console.log(scoreTotal(guessArray));
	});
});
