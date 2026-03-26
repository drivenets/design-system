import { type DateValue } from '@ark-ui/react/date-picker';
import { fromDate, getLocalTimeZone } from '@internationalized/date';

export const toIntlDate = <T extends Date | null | undefined>(date: T): T extends Date ? DateValue : T =>
	date ? (fromDate(date, getLocalTimeZone()) as never) : (date as never);

export const fromIntlDate = <T extends DateValue | null | undefined>(
	date: T,
): T extends DateValue ? Date : T => (date ? (date.toDate(getLocalTimeZone()) as never) : (date as never));

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
 * Parse a date string (MM/DD/YYYY or MM/DD/YYYY, hh:mm AM/PM) to DateValue
 */
export const parseDate = (dateStr: string): DateValue | null => {
	const parsed = new Date(dateStr);
	if (isNaN(parsed.getTime())) {
		return null;
	}

	return fromDate(parsed, getLocalTimeZone());
};

/**
 * Validate date string
 */
export const validateDateString = ({
	text,
	min,
	max,
}: {
	text: string;
	min?: DateValue | null;
	max?: DateValue | null;
	withTime?: boolean;
}): boolean => {
	if (!text.trim()) {
		return true;
	}

	const date = parseDate(text);
	if (!date) {
		return false;
	}

	if (min && date.compare(min) < 0) {
		return false;
	}
	if (max && date.compare(max) > 0) {
		return false;
	}

	return true;
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
