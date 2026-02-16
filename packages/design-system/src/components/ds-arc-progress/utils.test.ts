import { describe, expect, it } from 'vitest';
import {
	ARC_RATIO,
	clampValue,
	getArcGeometry,
	getEffectiveValue,
	getProgressDasharray,
	getTrackDasharray,
} from './utils';

describe('Arc Progress Utils', () => {
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

	describe('getEffectiveValue', () => {
		it('should return 100 for success variant regardless of value', () => {
			expect(getEffectiveValue('success', 0)).toBe(100);
			expect(getEffectiveValue('success', 50)).toBe(100);
		});

		it('should return clamped value for default variant', () => {
			expect(getEffectiveValue('default', 50)).toBe(50);
			expect(getEffectiveValue('default', -10)).toBe(0);
			expect(getEffectiveValue('default', 200)).toBe(100);
		});

		it('should return clamped value for failed variant', () => {
			expect(getEffectiveValue('failed', 75)).toBe(75);
			expect(getEffectiveValue('failed', -5)).toBe(0);
		});
	});

	describe('getArcGeometry', () => {
		it('should return correct geometry for small size', () => {
			const geo = getArcGeometry('small');

			expect(geo.containerSize).toBe(80);
			expect(geo.strokeWidth).toBe(4);
			expect(geo.radius).toBe(38);
			expect(geo.center).toBe(40);
			expect(geo.startRotation).toBe(135);
			expect(geo.circumference).toBeCloseTo(2 * Math.PI * 38);
			expect(geo.arcLength).toBeCloseTo(ARC_RATIO * geo.circumference);
		});

		it('should return correct geometry for medium size', () => {
			const geo = getArcGeometry('medium');

			expect(geo.containerSize).toBe(120);
			expect(geo.strokeWidth).toBe(6);
			expect(geo.radius).toBe(57);
			expect(geo.center).toBe(60);
			expect(geo.startRotation).toBe(135);
			expect(geo.circumference).toBeCloseTo(2 * Math.PI * 57);
			expect(geo.arcLength).toBeCloseTo(ARC_RATIO * geo.circumference);
		});

		it('should have arcLength as 3/4 of circumference', () => {
			const geo = getArcGeometry('medium');

			expect(geo.arcLength / geo.circumference).toBeCloseTo(ARC_RATIO);
		});
	});

	describe('getTrackDasharray', () => {
		it('should format arcLength and circumference as space-separated string', () => {
			const result = getTrackDasharray(100, 200);

			expect(result).toBe('100 200');
		});

		it('should handle decimal values', () => {
			const geo = getArcGeometry('small');
			const result = getTrackDasharray(geo.arcLength, geo.circumference);

			expect(result).toBe(`${String(geo.arcLength)} ${String(geo.circumference)}`);
		});
	});

	describe('getProgressDasharray', () => {
		it('should return zero progress length for value 0', () => {
			const result = getProgressDasharray(0, 100, 200);

			expect(result).toBe('0 200');
		});

		it('should return full arc length for value 100', () => {
			const result = getProgressDasharray(100, 100, 200);

			expect(result).toBe('100 200');
		});

		it('should return half arc length for value 50', () => {
			const result = getProgressDasharray(50, 100, 200);

			expect(result).toBe('50 200');
		});

		it('should calculate correctly with real geometry values', () => {
			const geo = getArcGeometry('medium');
			const result = getProgressDasharray(75, geo.arcLength, geo.circumference);
			const expectedProgress = (75 / 100) * geo.arcLength;

			expect(result).toBe(`${String(expectedProgress)} ${String(geo.circumference)}`);
		});
	});
});
