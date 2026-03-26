import { CalendarDate, CalendarDateTime, ZonedDateTime } from '@internationalized/date';
import { assert, describe, expect, it } from 'vitest';
import {
	formatDate,
	fromIntlDate,
	isSameDay,
	parseDate,
	toIntlDate,
	validateDateString,
} from './ds-date-picker.utils';

const createDate = (year: number, month: number, day: number, hours = 0, minutes = 0) => {
	const d = new Date(year, month - 1, day);
	d.setHours(hours, minutes, 0, 0);
	return d;
};

const createDateValue = (year: number, month: number, day: number, hours?: number, minutes?: number) => {
	if (hours !== undefined && minutes !== undefined) {
		return new CalendarDateTime(year, month, day, hours, minutes, 0);
	}
	return new CalendarDate(year, month, day);
};

function assertDateValue(value: unknown): asserts value is CalendarDate | CalendarDateTime {
	expect(value).toBeDefined();
	expect(value).toHaveProperty('year');
	expect(value).toHaveProperty('month');
	expect(value).toHaveProperty('day');
}

describe('Date Picker Utils', () => {
	describe('toIntlDate', () => {
		it('should return null for null input', () => {
			expect(toIntlDate(null)).toBeNull();
		});

		it('should return undefined for undefined input', () => {
			// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
			expect(toIntlDate(undefined)).toBeUndefined();
		});

		it('should convert valid Date to DateValue with correct year/month/day', () => {
			const date = createDate(2024, 3, 15);
			const result = toIntlDate(date);

			assertDateValue(result);
			expect(result.year).toBe(2024);
			expect(result.month).toBe(3);
			expect(result.day).toBe(15);
		});
	});

	describe('fromIntlDate', () => {
		it('should return null for null input', () => {
			expect(fromIntlDate(null)).toBeNull();
		});

		it('should return undefined for undefined input', () => {
			// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
			expect(fromIntlDate(undefined)).toBeUndefined();
		});

		it('should convert valid DateValue to Date with correct year/month/day', () => {
			const dateValue = createDateValue(2024, 3, 15);
			const result = fromIntlDate(dateValue);

			expect(result).toBeInstanceOf(Date);
			expect(result.getFullYear()).toBe(2024);
			expect(result.getMonth()).toBe(2);
			expect(result.getDate()).toBe(15);
		});

		it('should handle CalendarDateTime with time components', () => {
			const dateValue = createDateValue(2024, 3, 15, 14, 30);
			const result = fromIntlDate(dateValue);

			expect(result).toBeInstanceOf(Date);
			expect(result.getHours()).toBe(14);
			expect(result.getMinutes()).toBe(30);
		});
	});

	describe('formatDate', () => {
		it('should return empty string for null', () => {
			expect(formatDate(null)).toBe('');
		});

		it('should format date as MM/DD/YYYY with zero-padding', () => {
			const dateValue = createDateValue(2024, 1, 5);
			expect(formatDate(dateValue)).toBe('01/05/2024');
		});

		it('should format date with time when withTime=true', () => {
			const dateValue = createDateValue(2024, 3, 15, 14, 30);
			expect(formatDate(dateValue, true)).toBe('03/15/2024, 02:30 PM');
		});

		it('should format midnight and noon correctly', () => {
			expect(formatDate(createDateValue(2024, 3, 15, 0, 0), true)).toBe('03/15/2024, 12:00 AM');
			expect(formatDate(createDateValue(2024, 3, 15, 12, 0), true)).toBe('03/15/2024, 12:00 PM');
		});
	});

	describe('parseDate', () => {
		it('should return null for empty or whitespace string', () => {
			expect(parseDate('')).toBeNull();
			expect(parseDate('   ')).toBeNull();
		});

		it('should parse valid MM/DD/YYYY format', () => {
			const result = parseDate('03/15/2024');

			assertDateValue(result);
			expect(result.year).toBe(2024);
			expect(result.month).toBe(3);
			expect(result.day).toBe(15);
		});

		it('should parse valid MM/DD/YYYY hh:mm AM/PM format when withTime=true', () => {
			const result = parseDate('03/15/2024 02:30 PM');

			assertDateValue(result);
			assert(result instanceof ZonedDateTime);
			expect(result.hour).toBe(14);
			expect(result.minute).toBe(30);
		});

		it('should return null for invalid format', () => {
			expect(parseDate('not a date')).toBeNull();
		});

		it('should convert 12 AM to hour 0 and keep 12 PM as hour 12', () => {
			const midnight = parseDate('03/15/2024 12:00 AM');
			const noon = parseDate('03/15/2024 12:00 PM');

			assert(midnight instanceof ZonedDateTime);
			assert(noon instanceof ZonedDateTime);

			expect(midnight.hour).toBe(0);
			expect(noon.hour).toBe(12);
		});

		it('should return null for invalid hour or minute values', () => {
			expect(parseDate('03/15/2024 13:00 PM')).toBeNull();
			expect(parseDate('03/15/2024 09:60 AM')).toBeNull();
		});
	});

	describe('validateDateString', () => {
		it('should return true for empty string', () => {
			expect(validateDateString({ text: '' })).toBe(true);
		});

		it('should return false for invalid format', () => {
			expect(validateDateString({ text: 'not a date' })).toBe(false);
			expect(validateDateString({ text: 'not a date', withTime: true })).toBe(false);
		});

		it('should return false when date is before min', () => {
			const min = createDateValue(2024, 3, 1);

			expect(validateDateString({ text: '02/28/2024', min })).toBe(false);
		});

		it('should return false when date is after max', () => {
			const max = createDateValue(2024, 3, 31);

			expect(validateDateString({ text: '04/01/2024', max })).toBe(false);
		});

		it('should return true when date is within bounds', () => {
			const min = createDateValue(2024, 3, 1);
			const max = createDateValue(2024, 3, 31);

			expect(validateDateString({ text: '03/15/2024', min, max })).toBe(true);
		});
	});

	describe('isSameDay', () => {
		it('should return false for null or undefined inputs', () => {
			const date = createDateValue(2024, 3, 15);
			expect(isSameDay(null, date)).toBe(false);
			expect(isSameDay(date, null)).toBe(false);
			expect(isSameDay(null, null)).toBe(false);
		});

		it('should return true when dates have same year/month/day', () => {
			const date1 = createDateValue(2024, 3, 15);
			const date2 = createDateValue(2024, 3, 15);
			expect(isSameDay(date1, date2)).toBe(true);
		});

		it('should return false when dates differ', () => {
			const date1 = createDateValue(2024, 3, 15);
			expect(isSameDay(date1, createDateValue(2025, 3, 15))).toBe(false);
			expect(isSameDay(date1, createDateValue(2024, 4, 15))).toBe(false);
			expect(isSameDay(date1, createDateValue(2024, 3, 16))).toBe(false);
		});

		it('should ignore time components', () => {
			const date1 = createDateValue(2024, 3, 15, 9, 0);
			const date2 = createDateValue(2024, 3, 15, 17, 30);
			expect(isSameDay(date1, date2)).toBe(true);
		});
	});

	describe('round-trip conversion', () => {
		it('should preserve date through Date → DateValue → Date conversion', () => {
			const original = createDate(2024, 3, 15, 14, 30);
			const dateValue = toIntlDate(original);
			const result = fromIntlDate(dateValue);

			expect(result.getFullYear()).toBe(original.getFullYear());
			expect(result.getMonth()).toBe(original.getMonth());
			expect(result.getDate()).toBe(original.getDate());
			expect(result.getHours()).toBe(original.getHours());
			expect(result.getMinutes()).toBe(original.getMinutes());
		});

		it('should preserve date through string → DateValue → string conversion', () => {
			expect(formatDate(parseDate('03/15/2024'))).toBe('03/15/2024');
			expect(formatDate(parseDate('03/15/2024 02:30 PM'), true)).toBe('03/15/2024, 02:30 PM');
		});
	});
});
