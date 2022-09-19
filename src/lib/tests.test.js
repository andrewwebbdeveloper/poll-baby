import { guesses } from './guesses.js';
import { byClosestDates } from './byClosestDates.js';
import { describe, it, expect } from 'vitest';

describe('byClosestDates', () => {
	it('logs', () => {
		byClosestDates(guesses.T, Date.now());
	});
});
