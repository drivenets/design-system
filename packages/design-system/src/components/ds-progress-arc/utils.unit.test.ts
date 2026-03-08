import { describe, expect, it } from 'vitest';
import { ARC_RATIO, getArcGeometry, getProgressDasharray, getTrackDasharray } from './utils';

describe('Progress Arc Utils', () => {
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
