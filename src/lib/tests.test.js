import { guesses } from './guesses.js';

import { describe, it, expect } from 'vitest';

describe('guesses', () => {
	it('has guesses', () => {
		expect(guesses['H']).to.have.length(guesses['H'].length);
	});
});
