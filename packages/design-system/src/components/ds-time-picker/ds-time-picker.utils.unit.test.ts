import { describe, expect, it, vi } from 'vitest';
import { clampTime, formatTime, parseTime, timeScrollerAdapter } from './ds-time-picker.utils';

const makeDate = (h: number, m: number) => {
	const d = new Date(2025, 0, 1);
	d.setHours(h, m, 0, 0);
	return d;
};

function assertDate(value: unknown): asserts value is Date {
	expect(value).toBeInstanceOf(Date);
}

function assertDefined<T>(value: T | undefined): asserts value is T {
	expect(value).toBeDefined();
}

describe('Time Picker Utils', () => {
	describe('clampTime', () => {
		it('should return the original date when within bounds', () => {
			const date = makeDate(10, 30);
			const result = clampTime(date, makeDate(8, 0), makeDate(18, 0));

			expect(result).toBe(date);
		});

		it('should clamp to min when time is before min', () => {
			const date = makeDate(6, 0);
			const min = makeDate(8, 0);
			const result = clampTime(date, min);

			expect(result.getHours()).toBe(8);
			expect(result.getMinutes()).toBe(0);
		});

		it('should clamp to max when time is after max', () => {
			const date = makeDate(20, 0);
			const max = makeDate(18, 30);
			const result = clampTime(date, undefined, max);

			expect(result.getHours()).toBe(18);
			expect(result.getMinutes()).toBe(30);
		});

		it('should not clamp when min and max are undefined', () => {
			const date = makeDate(12, 0);
			const result = clampTime(date);

			expect(result).toBe(date);
		});

		it('should preserve the date portion when clamping', () => {
			const date = new Date(2025, 5, 15, 6, 0, 0, 0);
			const min = makeDate(8, 0);
			const result = clampTime(date, min);

			expect(result.getFullYear()).toBe(2025);
			expect(result.getMonth()).toBe(5);
			expect(result.getDate()).toBe(15);
		});
	});

	describe('formatTime', () => {
		it('should return empty string for undefined', () => {
			expect(formatTime(undefined)).toBe('');
		});

		it('should return empty string for null', () => {
			expect(formatTime(null)).toBe('');
		});

		it('should format midnight as 12:00 AM', () => {
			expect(formatTime(makeDate(0, 0))).toBe('12:00 AM');
		});

		it('should format noon as 12:00 PM', () => {
			expect(formatTime(makeDate(12, 0))).toBe('12:00 PM');
		});

		it('should format afternoon time', () => {
			expect(formatTime(makeDate(14, 30))).toBe('02:30 PM');
		});

		it('should format morning time', () => {
			expect(formatTime(makeDate(9, 5))).toBe('09:05 AM');
		});

		it('should pad single-digit hours', () => {
			expect(formatTime(makeDate(1, 0))).toBe('01:00 AM');
		});

		it('should pad single-digit minutes', () => {
			expect(formatTime(makeDate(10, 3))).toBe('10:03 AM');
		});

		it('should format 11:59 PM', () => {
			expect(formatTime(makeDate(23, 59))).toBe('11:59 PM');
		});
	});

	describe('parseTime', () => {
		it('should parse valid AM time', () => {
			expect(parseTime('09:30 AM')).toEqual({ hours: 9, minutes: 30 });
		});

		it('should parse valid PM time', () => {
			expect(parseTime('02:45 PM')).toEqual({ hours: 14, minutes: 45 });
		});

		it('should convert 12 AM to hour 0', () => {
			expect(parseTime('12:00 AM')).toEqual({ hours: 0, minutes: 0 });
		});

		it('should keep 12 PM as hour 12', () => {
			expect(parseTime('12:00 PM')).toEqual({ hours: 12, minutes: 0 });
		});

		it('should handle case-insensitive period', () => {
			expect(parseTime('09:30 am')).toEqual({ hours: 9, minutes: 30 });
			expect(parseTime('09:30 Am')).toEqual({ hours: 9, minutes: 30 });
		});

		it('should parse single-digit hour', () => {
			expect(parseTime('1:00 AM')).toEqual({ hours: 1, minutes: 0 });
		});

		it('should return null for empty string', () => {
			expect(parseTime('')).toBeNull();
		});

		it('should return null for garbage input', () => {
			expect(parseTime('not a time')).toBeNull();
		});

		it('should return null for missing period', () => {
			expect(parseTime('09:30')).toBeNull();
		});

		it('should return null for hour 0', () => {
			expect(parseTime('00:30 AM')).toBeNull();
		});

		it('should return null for hour 13', () => {
			expect(parseTime('13:00 PM')).toBeNull();
		});

		it('should return null for minute 60', () => {
			expect(parseTime('09:60 AM')).toBeNull();
		});
	});

	describe('timeScrollerAdapter', () => {
		it('should extract hour, minute, period from a PM date', () => {
			const adapter = timeScrollerAdapter(makeDate(14, 30));

			expect(adapter.hour).toBe(2);
			expect(adapter.minute).toBe(30);
			expect(adapter.period).toBe('PM');
		});

		it('should extract hour, minute, period from an AM date', () => {
			const adapter = timeScrollerAdapter(makeDate(9, 15));

			expect(adapter.hour).toBe(9);
			expect(adapter.minute).toBe(15);
			expect(adapter.period).toBe('AM');
		});

		it('should return 12 for midnight', () => {
			const adapter = timeScrollerAdapter(makeDate(0, 0));

			expect(adapter.hour).toBe(12);
			expect(adapter.period).toBe('AM');
		});

		it('should return 12 for noon', () => {
			const adapter = timeScrollerAdapter(makeDate(12, 0));

			expect(adapter.hour).toBe(12);
			expect(adapter.period).toBe('PM');
		});

		it('should return undefined fields when no date', () => {
			const adapter = timeScrollerAdapter(null);

			expect(adapter.hour).toBeUndefined();
			expect(adapter.minute).toBeUndefined();
			expect(adapter.period).toBeUndefined();
		});

		describe('onHourChange', () => {
			it('should call setDate with the correct 24h hour', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const adapter = timeScrollerAdapter(makeDate(14, 30), setDate);

				assertDefined(adapter.onHourChange);
				adapter.onHourChange(5);

				expect(setDate).toHaveBeenCalledOnce();
				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(17);
				expect(result.getMinutes()).toBe(30);
			});

			it('should default to AM when no date is provided', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const adapter = timeScrollerAdapter(undefined, setDate);

				assertDefined(adapter.onHourChange);
				adapter.onHourChange(9);

				expect(setDate).toHaveBeenCalledOnce();
				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(9);
				expect(result.getMinutes()).toBe(0);
			});
		});

		describe('onMinuteChange', () => {
			it('should call setDate with the new minute', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const adapter = timeScrollerAdapter(makeDate(14, 30), setDate);

				assertDefined(adapter.onMinuteChange);
				adapter.onMinuteChange(45);

				expect(setDate).toHaveBeenCalledOnce();
				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(14);
				expect(result.getMinutes()).toBe(45);
			});
		});

		describe('onPeriodChange', () => {
			it('should toggle from PM to AM', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const adapter = timeScrollerAdapter(makeDate(14, 30), setDate);

				assertDefined(adapter.onPeriodChange);
				adapter.onPeriodChange('AM');

				expect(setDate).toHaveBeenCalledOnce();
				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(2);
				expect(result.getMinutes()).toBe(30);
			});

			it('should toggle from AM to PM', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const adapter = timeScrollerAdapter(makeDate(9, 15), setDate);

				assertDefined(adapter.onPeriodChange);
				adapter.onPeriodChange('PM');

				expect(setDate).toHaveBeenCalledOnce();
				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(21);
				expect(result.getMinutes()).toBe(15);
			});
		});

		describe('validation callbacks', () => {
			it('should not include validation callbacks when no min/max', () => {
				const adapter = timeScrollerAdapter(makeDate(10, 0));

				expect(adapter.isHourDisabled).toBeUndefined();
				expect(adapter.isMinuteDisabled).toBeUndefined();
				expect(adapter.isPeriodDisabled).toBeUndefined();
			});

			it('should disable AM when min is in PM range', () => {
				const min = makeDate(13, 0);
				const adapter = timeScrollerAdapter(makeDate(14, 0), undefined, min);

				assertDefined(adapter.isPeriodDisabled);
				expect(adapter.isPeriodDisabled('AM')).toBe(true);
				expect(adapter.isPeriodDisabled('PM')).toBe(false);
			});

			it('should disable PM when max is in AM range', () => {
				const max = makeDate(11, 0);
				const adapter = timeScrollerAdapter(makeDate(9, 0), undefined, undefined, max);

				assertDefined(adapter.isPeriodDisabled);
				expect(adapter.isPeriodDisabled('PM')).toBe(true);
				expect(adapter.isPeriodDisabled('AM')).toBe(false);
			});

			it('should disable hours outside min/max range', () => {
				const min = makeDate(9, 0);
				const max = makeDate(17, 0);
				const adapter = timeScrollerAdapter(makeDate(10, 0), undefined, min, max);

				assertDefined(adapter.isHourDisabled);
				expect(adapter.isHourDisabled(8)).toBe(true);
				expect(adapter.isHourDisabled(10)).toBe(false);
			});

			it('should disable minutes outside min/max range', () => {
				const min = makeDate(9, 30);
				const adapter = timeScrollerAdapter(makeDate(9, 45), undefined, min);

				assertDefined(adapter.isMinuteDisabled);
				expect(adapter.isMinuteDisabled(15)).toBe(true);
				expect(adapter.isMinuteDisabled(30)).toBe(false);
				expect(adapter.isMinuteDisabled(45)).toBe(false);
			});

			it('should clamp setDate result to min/max', () => {
				const setDate = vi.fn<(date: Date | null) => void>();
				const min = makeDate(9, 0);
				const max = makeDate(17, 0);
				const adapter = timeScrollerAdapter(makeDate(10, 0), setDate, min, max);

				assertDefined(adapter.onHourChange);
				adapter.onHourChange(7);

				const result = setDate.mock.calls[0]?.[0];
				assertDate(result);
				expect(result.getHours()).toBe(9);
				expect(result.getMinutes()).toBe(0);
			});
		});
	});
});
