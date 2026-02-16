import { describe, expect, it } from 'vitest';

import { calculatePercentage } from './utils';

describe('calculatePercentage', () => {
	it('should return 0 when max equals min', () => {
		expect(calculatePercentage(50, 100, 100)).toBe(0);
	});

	it('should return 0 when max is less than min', () => {
		expect(calculatePercentage(50, 100, 50)).toBe(0);
	});

	it('should calculate 0% for value at minimum', () => {
		expect(calculatePercentage(0, 0, 100)).toBe(0);
	});

	it('should calculate 100% for value at maximum', () => {
		expect(calculatePercentage(100, 0, 100)).toBe(100);
	});

	it('should calculate 50% for value at midpoint', () => {
		expect(calculatePercentage(50, 0, 100)).toBe(50);
	});

	it('should round to nearest integer for fractional percentages', () => {
		expect(calculatePercentage(33, 0, 100)).toBe(33);
		expect(calculatePercentage(66, 0, 100)).toBe(66);
		expect(calculatePercentage(67, 0, 100)).toBe(67);
	});

	it('should handle non-zero minimum values', () => {
		expect(calculatePercentage(50, 25, 75)).toBe(50);
		expect(calculatePercentage(25, 25, 75)).toBe(0);
		expect(calculatePercentage(75, 25, 75)).toBe(100);
	});

	it('should handle negative values', () => {
		expect(calculatePercentage(-50, -100, 0)).toBe(50);
		expect(calculatePercentage(-100, -100, 0)).toBe(0);
		expect(calculatePercentage(0, -100, 0)).toBe(100);
	});

	it('should handle decimal values and round correctly', () => {
		expect(calculatePercentage(33.3, 0, 100)).toBe(33);
		expect(calculatePercentage(33.5, 0, 100)).toBe(34);
		expect(calculatePercentage(33.7, 0, 100)).toBe(34);
	});

	it('should handle value below minimum (clamping not enforced)', () => {
		// Component doesn't clamp values, so negative percentages are possible
		expect(calculatePercentage(-10, 0, 100)).toBe(-10);
	});

	it('should handle value above maximum (clamping not enforced)', () => {
		// Component doesn't clamp values, so > 100% is possible
		expect(calculatePercentage(150, 0, 100)).toBe(150);
	});

	it('should handle large numbers', () => {
		expect(calculatePercentage(5000, 0, 10000)).toBe(50);
		expect(calculatePercentage(1000000, 0, 2000000)).toBe(50);
	});

	it('should handle small decimal ranges', () => {
		expect(calculatePercentage(0.5, 0, 1)).toBe(50);
		expect(calculatePercentage(0.25, 0, 1)).toBe(25);
		expect(calculatePercentage(0.75, 0, 1)).toBe(75);
	});
});
