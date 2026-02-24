import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { fitTagsInRow, getContainerAvailableWidth, getElementMeasurements } from './utils';

/**
 * Tests here heavily test implementation details.
 * Required to ensure proper calculations.
 */

describe('Tag Filter Utils', () => {
	describe('fitTagsInRow', () => {
		it('should return count 0 for empty tag array', () => {
			const result = fitTagsInRow([], 100, 8);

			expect(result.count).toBe(0);
			expect(result.usedWidth).toBe(0);
		});

		it('should fit all tags when they all fit in available width', () => {
			const tagWidths = [50, 60, 70]; // total: 180 + 2 gaps (16) = 196
			const availableWidth = 200;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			expect(result.count).toBe(3);
			expect(result.usedWidth).toBe(196); // 50 + 8 + 60 + 8 + 70 = 196
		});

		it('should return partial count when not all tags fit', () => {
			const tagWidths = [50, 60, 70, 80];
			const availableWidth = 150;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			// 50 = 50, 50 + 8 + 60 = 118, 118 + 8 + 70 = 196 (exceeds 150)
			expect(result.count).toBe(2);
			expect(result.usedWidth).toBe(118); // 50 + 8 + 60 = 118
		});

		it('should not add gap before the first tag', () => {
			const tagWidths = [100];
			const availableWidth = 100;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			expect(result.count).toBe(1);
			expect(result.usedWidth).toBe(100); // No gap added for first tag
		});

		it('should handle exact fit edge case', () => {
			const tagWidths = [40, 52]; // 40 + 8 + 52 = 100
			const availableWidth = 100;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			expect(result.count).toBe(2);
			expect(result.usedWidth).toBe(100);
		});

		it('should return 0 when first tag exceeds available width', () => {
			const tagWidths = [150, 50, 60];
			const availableWidth = 100;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			expect(result.count).toBe(0);
			expect(result.usedWidth).toBe(0);
		});

		it('should handle zero gap correctly', () => {
			const tagWidths = [30, 30, 30];
			const availableWidth = 90;
			const gap = 0;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			expect(result.count).toBe(3);
			expect(result.usedWidth).toBe(90);
		});

		it('should account for gap in width calculation', () => {
			const tagWidths = [45, 45]; // 45 + 8 + 45 = 98
			const availableWidth = 95;
			const gap = 8;

			const result = fitTagsInRow(tagWidths, availableWidth, gap);

			// First tag: 45, second would be 45 + 8 = 53, total = 98 > 95
			expect(result.count).toBe(1);
			expect(result.usedWidth).toBe(45);
		});
	});

	describe('getContainerAvailableWidth', () => {
		let mockContainer: HTMLDivElement;

		beforeEach(() => {
			mockContainer = document.createElement('div');
		});

		afterEach(() => {
			vi.restoreAllMocks();
		});

		it('should calculate available width without padding', () => {
			vi.spyOn(mockContainer, 'getBoundingClientRect').mockReturnValue({
				width: 500,
				height: 100,
				top: 0,
				left: 0,
				bottom: 100,
				right: 500,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				paddingLeft: '0px',
				paddingRight: '0px',
			} as CSSStyleDeclaration);

			const result = getContainerAvailableWidth(mockContainer);

			expect(result).toBe(500);
		});

		it('should subtract padding from container width', () => {
			vi.spyOn(mockContainer, 'getBoundingClientRect').mockReturnValue({
				width: 500,
				height: 100,
				top: 0,
				left: 0,
				bottom: 100,
				right: 500,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				paddingLeft: '20px',
				paddingRight: '30px',
			} as CSSStyleDeclaration);

			const result = getContainerAvailableWidth(mockContainer);

			expect(result).toBe(450); // 500 - 20 - 30 = 450
		});

		it('should handle string padding values with decimals', () => {
			vi.spyOn(mockContainer, 'getBoundingClientRect').mockReturnValue({
				width: 500,
				height: 100,
				top: 0,
				left: 0,
				bottom: 100,
				right: 500,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				paddingLeft: '15.5px',
				paddingRight: '24.5px',
			} as CSSStyleDeclaration);

			const result = getContainerAvailableWidth(mockContainer);

			expect(result).toBe(460); // 500 - 15.5 - 24.5 = 460
		});

		it('should default to 0 for invalid padding values', () => {
			vi.spyOn(mockContainer, 'getBoundingClientRect').mockReturnValue({
				width: 500,
				height: 100,
				top: 0,
				left: 0,
				bottom: 100,
				right: 500,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				paddingLeft: '',
				paddingRight: '',
			} as CSSStyleDeclaration);

			const result = getContainerAvailableWidth(mockContainer);

			expect(result).toBe(500); // No padding subtracted
		});
	});

	describe('getElementMeasurements', () => {
		let mockContainer: HTMLDivElement;

		beforeEach(() => {
			mockContainer = document.createElement('div');
			document.body.appendChild(mockContainer);
		});

		afterEach(() => {
			document.body.removeChild(mockContainer);
			vi.restoreAllMocks();
		});

		it('should measure tag widths and gap', () => {
			const tag1 = document.createElement('div');
			tag1.setAttribute('data-measure-tag', '');
			const tag2 = document.createElement('div');
			tag2.setAttribute('data-measure-tag', '');

			mockContainer.appendChild(tag1);
			mockContainer.appendChild(tag2);

			vi.spyOn(tag1, 'getBoundingClientRect').mockReturnValue({
				width: 80,
				height: 30,
				top: 0,
				left: 0,
				bottom: 30,
				right: 80,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(tag2, 'getBoundingClientRect').mockReturnValue({
				width: 90,
				height: 30,
				top: 0,
				left: 0,
				bottom: 30,
				right: 90,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				gap: '8px',
			} as CSSStyleDeclaration);

			const result = getElementMeasurements(mockContainer);

			expect(result.tagWidths).toEqual([80, 90]);
			expect(result.gap).toBe(8);
		});

		it('should use fallback gap when gap is invalid', () => {
			const tag1 = document.createElement('div');
			tag1.setAttribute('data-measure-tag', '');
			mockContainer.appendChild(tag1);

			vi.spyOn(tag1, 'getBoundingClientRect').mockReturnValue({
				width: 80,
				height: 30,
				top: 0,
				left: 0,
				bottom: 30,
				right: 80,
				x: 0,
				y: 0,
				toJSON: () => ({}),
			});

			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				gap: '',
			} as CSSStyleDeclaration);

			const result = getElementMeasurements(mockContainer);

			expect(result.gap).toBe(8);
		});

		it('should handle no tags present', () => {
			vi.spyOn(window, 'getComputedStyle').mockReturnValue({
				gap: '10px',
			} as CSSStyleDeclaration);

			const result = getElementMeasurements(mockContainer);

			expect(result.tagWidths).toEqual([]);
			expect(result.gap).toBe(10);
		});
	});
});
