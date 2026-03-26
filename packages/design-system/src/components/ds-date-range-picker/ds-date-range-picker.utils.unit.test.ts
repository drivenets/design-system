import { describe, expect, it } from 'vitest';
import { earlierDate, laterDate } from './ds-date-range-picker.utils';

const createDate = (year: number, month: number, day: number) => new Date(year, month - 1, day);

describe('Date Range Picker Utils', () => {
	describe('earlierDate', () => {
		it('should return the earlier of two dates', () => {
			const jan = createDate(2024, 1, 1);
			const mar = createDate(2024, 3, 15);

			expect(earlierDate(jan, mar)).toBe(jan);
			expect(earlierDate(mar, jan)).toBe(jan);
		});

		it('should return the other date when one is undefined', () => {
			const date = createDate(2024, 6, 1);

			expect(earlierDate(undefined, date)).toBe(date);
			expect(earlierDate(date, undefined)).toBe(date);
		});

		it('should return undefined when both are undefined', () => {
			expect(earlierDate(undefined, undefined)).toBeUndefined();
		});
	});

	describe('laterDate', () => {
		it('should return the later of two dates', () => {
			const jan = createDate(2024, 1, 1);
			const mar = createDate(2024, 3, 15);

			expect(laterDate(jan, mar)).toBe(mar);
			expect(laterDate(mar, jan)).toBe(mar);
		});

		it('should return the other date when one is undefined', () => {
			const date = createDate(2024, 6, 1);

			expect(laterDate(undefined, date)).toBe(date);
			expect(laterDate(date, undefined)).toBe(date);
		});

		it('should return undefined when both are undefined', () => {
			expect(laterDate(undefined, undefined)).toBeUndefined();
		});
	});
});
