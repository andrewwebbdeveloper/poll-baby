import { guesses } from './guesses.js';
import { scoreByDates } from './scoreByDates.js';
import { scoreByTime } from './scoreByTime.js';
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
