import { type DateValue } from '@ark-ui/react/date-picker';
import { fromDate, getLocalTimeZone, CalendarDateTime } from '@internationalized/date';

export const toIntlDate = <T extends Date | null | undefined>(date: T): T extends Date ? DateValue : T => {
	if (!date) {
		return date as T extends Date ? DateValue : T;
	}

	return fromDate(date, getLocalTimeZone()) as T extends Date ? DateValue : T;
};

export const fromIntlDate = <T extends DateValue | null | undefined>(
	date: T,
): T extends DateValue ? Date : T => {
	if (!date) {
		return date as T extends DateValue ? Date : T;
	}

	return date.toDate(getLocalTimeZone()) as T extends DateValue ? Date : T;
};

/**
 * Format a DateValue to string (MM/DD/YYYY or MM/DD/YYYY hh:mm AM/PM)
 */
export const formatDate = (date: DateValue | null, withTime = false): string => {
	if (!date) {
		return '';
	}

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	};

	if (withTime) {
		options.hour = '2-digit';
		options.minute = '2-digit';
		options.hour12 = true;
	}

	return new Intl.DateTimeFormat('en-US', options).format(fromIntlDate(date));
};

/**
 * Parse a date string (MM/DD/YYYY or MM/DD/YYYY hh:mm AM/PM) to DateValue
 */
export const parseDate = (dateStr: string, withTime = false): DateValue | null => {
	if (!dateStr || !dateStr.trim()) {
		return null;
	}

	const match = dateStr
		.trim()
		.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:,?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s+(AM|PM))?$/i);
	if (!match) {
		return null;
	}

	const [, month, day, year, hours, minutes, , period] = match;

	if (!month || !day || !year) {
		return null;
	}

	const monthNum = parseInt(month, 10);
	const dayNum = parseInt(day, 10);
	const yearNum = parseInt(year, 10);

	let hoursNum = 0;
	let minutesNum = 0;

	if (withTime && hours !== undefined && period !== undefined) {
		const h12 = parseInt(hours, 10);

		if (h12 < 1 || h12 > 12) {
			return null;
		}

		hoursNum = period.toUpperCase() === 'AM' ? (h12 === 12 ? 0 : h12) : h12 === 12 ? 12 : h12 + 12;
		minutesNum = minutes !== undefined ? parseInt(minutes, 10) : 0;

		if (minutesNum < 0 || minutesNum > 59) {
			return null;
		}
	}

	// Use native Date for proper validation (handles leap years, month lengths, etc.)
	// Note: Date months are 0-indexed, so subtract 1
	const date = new Date(yearNum, monthNum - 1, dayNum);

	// Check if the date is valid and matches what we parsed
	// (e.g., 02/31/2024 would roll over to 03/02/2024, so we detect that)
	if (date.getFullYear() !== yearNum || date.getMonth() !== monthNum - 1 || date.getDate() !== dayNum) {
		return null;
	}

	return new CalendarDateTime(yearNum, monthNum, dayNum, hoursNum, minutesNum, 0);
};

/**
 * Validation result for date input
 */
interface DateInputValidation {
	isValid: boolean;
	error?: string;
}

/**
 * Validate date string
 */
export const validateDateString = ({
	text,
	min,
	max,
	withTime = false,
}: {
	text: string;
	min?: DateValue | null;
	max?: DateValue | null;
	withTime?: boolean;
}): DateInputValidation => {
	if (!text.trim()) {
		return { isValid: true };
	}

	const date = parseDate(text, withTime);
	if (!date) {
		const format = withTime ? 'MM/DD/YYYY hh:mm AM/PM' : 'MM/DD/YYYY';
		return { isValid: false, error: `Invalid date format. Use ${format}` };
	}

	if (min && date.compare(min) < 0) {
		return { isValid: false, error: 'Date is before minimum allowed date' };
	}
	if (max && date.compare(max) > 0) {
		return { isValid: false, error: 'Date is after maximum allowed date' };
	}

	return { isValid: true };
};

export const isSameDay = (
	date1: DateValue | null | undefined,
	date2: DateValue | null | undefined,
): boolean => {
	if (!date1 || !date2) {
		return false;
	}

	return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day;
};
