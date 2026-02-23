import { describe, expect, it } from 'vitest';

import { clampValue } from './numbers';

describe('progress-utils', () => {
	describe('clampValue', () => {
		it('should return value within 0-100 unchanged', () => {
			expect(clampValue(50)).toBe(50);
		});

		it('should clamp value below 0 to 0', () => {
			expect(clampValue(-10)).toBe(0);
		});

		it('should clamp value above 100 to 100', () => {
			expect(clampValue(150)).toBe(100);
		});

		it('should handle boundary values', () => {
			expect(clampValue(0)).toBe(0);
			expect(clampValue(100)).toBe(100);
		});
	});
});
