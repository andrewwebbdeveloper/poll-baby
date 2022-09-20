import { guesses } from './guesses.js';
import { scoreByDates } from './scoreByDates.js';
import { describe, it, expect } from 'vitest';

describe('byClosestDates', () => {
	it('logs', () => {
		scoreByDates(guesses.T, new Date('11/07/2022'));
	});
});
