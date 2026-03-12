import type { TimePeriod, TimeScrollerProps } from './components/time-scroller';

const AM_END = 11 * 60 + 59;
const PM_START = 12 * 60;
const PM_END = 23 * 60 + 59;

const to24Hour = (hour12: number, period: TimePeriod): number => {
	if (period === 'AM') {
		return hour12 === 12 ? 0 : hour12;
	}

	return hour12 === 12 ? 12 : hour12 + 12;
};

const to12Hour = (hour24: number): number => {
	if (hour24 === 0) {
		return 12;
	}

	return hour24 > 12 ? hour24 - 12 : hour24;
};

const toMinutesSinceMidnight = (date: Date): number => {
	return date.getHours() * 60 + date.getMinutes();
};

/**
 * If the time is before the min or after the max, clamp it to the min or max
 */
export const clampTime = (date: Date, min?: Date, max?: Date): Date => {
	const time = toMinutesSinceMidnight(date);

	if (min && time < toMinutesSinceMidnight(min)) {
		const clamped = new Date(date);
		clamped.setHours(min.getHours(), min.getMinutes(), 0, 0);
		return clamped;
	}

	if (max && time > toMinutesSinceMidnight(max)) {
		const clamped = new Date(date);
		clamped.setHours(max.getHours(), max.getMinutes(), 0, 0);
		return clamped;
	}

	return date;
};

const getTimeRange = (min?: Date, max?: Date) => ({
	minTime: min ? toMinutesSinceMidnight(min) : 0,
	maxTime: max ? toMinutesSinceMidnight(max) : PM_END,
});

const validateMinMax = (
	hour?: number,
	period?: TimePeriod,
	min?: Date,
	max?: Date,
): Pick<TimeScrollerProps, 'isHourDisabled' | 'isMinuteDisabled' | 'isPeriodDisabled'> => {
	if (!min && !max) {
		return {};
	}

	const { minTime, maxTime } = getTimeRange(min, max);

	return {
		isPeriodDisabled: (p: TimePeriod) => {
			if (p === 'AM') {
				return AM_END < minTime;
			}

			return PM_END < minTime || PM_START > maxTime;
		},

		isHourDisabled: (h: number) => {
			if (!period) {
				return false;
			}

			const h24 = to24Hour(h, period);
			return h24 * 60 + 59 < minTime || h24 * 60 > maxTime;
		},

		isMinuteDisabled: (m: number) => {
			if (hour === undefined || !period) {
				return false;
			}

			const time = to24Hour(hour, period) * 60 + m;
			return time < minTime || time > maxTime;
		},
	};
};

/**
 * Format a Date to a 12-hour time string (hh:mm AM/PM)
 */
export const formatTime = (date?: Date | null): string => {
	if (!date) {
		return '';
	}

	const hour24 = date.getHours();
	const minute = date.getMinutes();
	const period = hour24 >= 12 ? 'PM' : 'AM';
	const paddedHour = String(to12Hour(hour24)).padStart(2, '0');
	const paddedMinute = String(minute).padStart(2, '0');

	return `${paddedHour}:${paddedMinute} ${period}`;
};

/**
 * Parse a 12-hour time string (hh:mm AM/PM) to an object with hours and minutes
 */
export const parseTime = (text: string) => {
	const match = text.match(/^(\d{1,2}):(\d{2})\s+(AM|PM)$/i);

	if (!match?.[1] || !match[2] || !match[3]) {
		return null;
	}

	const h12 = parseInt(match[1], 10);
	const minutes = parseInt(match[2], 10);
	const period = match[3].toUpperCase();

	if (h12 < 1 || h12 > 12 || minutes < 0 || minutes > 59) {
		return null;
	}

	const hours = period === 'AM' ? (h12 === 12 ? 0 : h12) : h12 === 12 ? 12 : h12 + 12;

	return { hours, minutes };
};

export const timeScrollerAdapter = (
	date?: Date | null,
	setDate?: (date: Date | null) => void,
	min?: Date,
	max?: Date,
): Omit<TimeScrollerProps, 'open'> => {
	const hour = date ? to12Hour(date.getHours()) : undefined;
	const minute = date?.getMinutes();
	const period = date ? (date.getHours() >= 12 ? 'PM' : 'AM') : undefined;

	const clampAndSet = (newDate: Date) => {
		setDate?.(clampTime(newDate, min, max));
	};

	return {
		hour,
		minute,
		period,
		...validateMinMax(hour, period, min, max),

		onHourChange: (h: number) => {
			const newDate = date ? new Date(date) : new Date();
			newDate.setHours(to24Hour(h, period ?? 'AM'), minute ?? 0, 0, 0);
			clampAndSet(newDate);
		},

		onMinuteChange: (m: number) => {
			const newDate = date ? new Date(date) : new Date();
			newDate.setHours(to24Hour(hour ?? 12, period ?? 'AM'), m, 0, 0);
			clampAndSet(newDate);
		},

		onPeriodChange: (p: TimePeriod) => {
			const newDate = date ? new Date(date) : new Date();
			newDate.setHours(to24Hour(hour ?? 12, p), minute ?? 0, 0, 0);
			clampAndSet(newDate);
		},
	};
};
