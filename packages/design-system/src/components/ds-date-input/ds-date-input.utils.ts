import { type DateValue } from '@ark-ui/react/date-picker';
import { CalendarDate, parseDate } from '@internationalized/date';

/**
 * Validation result for date input
 */
interface DateInputValidation {
	isValid: boolean;
	error?: string;
}

/**
 * Parsed date range result
 */
interface ParsedDateRange {
	start: string | null;
	end: string | null;
	isValid: boolean;
}

/**
 * Convert ISO date string to DateValue
 */
export const isoStringToDateValue = (isoDate: string): DateValue | undefined => {
	try {
		return parseDate(isoDate) as unknown as DateValue;
	} catch {
		return undefined;
	}
};

/**
 * Convert string or tuple to DateValue array (for internal use with Ark UI)
 */
export const stringToDateValue = (dates: string | [string, string]): DateValue[] => {
	const dateArray = Array.isArray(dates) ? dates : [dates];

	return dateArray.map(isoStringToDateValue).filter((d) => !!d);
};

/**
 * Convert DateValue array to string or tuple (for public API)
 */
export const dateValuesToStrings = (dates: DateValue[], range: boolean): string | [string, string] => {
	const values = dates.map((date) => date.toString());

	if (range) {
		return [values[0] ?? '', values[1] ?? ''];
	}

	return values[0] ?? '';
};

/**
 * Format a DateValue to string (MM/DD/YYYY)
 */
const formatDateValue = (date: DateValue): string => {
	const paddedMonth = String(date.month).padStart(2, '0');
	const paddedDay = String(date.day).padStart(2, '0');

	return `${paddedMonth}/${paddedDay}/${String(date.year)}`;
};

/**
 * Format an array of DateValues to a unified string
 * Single: "12/25/2024"
 * Range: "12/01/2024 - 12/31/2024"
 */
export const formatDateInputValue = (value: DateValue[], range: boolean): string => {
	if (value.length === 0) {
		return '';
	}
	const newValue = value.map(formatDateValue);

	return range ? newValue.join(' - ') : (newValue[0] ?? '');
};

/**
 * Parse a date string (MM/DD/YYYY) to DateValue
 */
const parseDateString = (dateStr: string): DateValue | null => {
	if (!dateStr || !dateStr.trim()) {
		return null;
	}

	// Try MM/DD/YYYY format
	const match = dateStr.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
	if (!match) {
		return null;
	}

	const [, month, day, year] = match;

	if (!month || !day || !year) {
		return null;
	}

	const monthNum = parseInt(month, 10);
	const dayNum = parseInt(day, 10);
	const yearNum = parseInt(year, 10);

	// Use native Date for proper validation (handles leap years, month lengths, etc.)
	// Note: Date months are 0-indexed, so subtract 1
	const date = new Date(yearNum, monthNum - 1, dayNum);

	// Check if the date is valid and matches what we parsed
	// (e.g., 02/31/2024 would roll over to 03/02/2024, so we detect that)
	if (date.getFullYear() !== yearNum || date.getMonth() !== monthNum - 1 || date.getDate() !== dayNum) {
		return null;
	}

	return new CalendarDate(yearNum, monthNum, dayNum) as unknown as DateValue;
};

/**
 * Parse a range input string (MM/DD/YYYY - MM/DD/YYYY)
 */
const parseRangeInput = (text: string): ParsedDateRange => {
	if (!text.trim()) {
		return { start: null, end: null, isValid: true }; // Empty is valid
	}

	// Check if it contains a dash separator
	if (!text.includes('-')) {
		// Single date format, treat as incomplete range
		const date = parseDateString(text.trim());
		return {
			start: date ? formatDateValue(date) : null,
			end: null,
			isValid: false, // Incomplete range
		};
	}

	// Split by dash
	const parts = text.split('-').map((p) => p.trim());
	if (parts.length !== 2) {
		return { start: null, end: null, isValid: false };
	}

	const [startStr, endStr] = parts;

	if (!startStr || !endStr) {
		return { start: null, end: null, isValid: false };
	}

	const startDate = parseDateString(startStr);
	const endDate = parseDateString(endStr);

	// Both must be valid dates
	if (!startDate || !endDate) {
		return {
			start: startDate ? formatDateValue(startDate) : null,
			end: endDate ? formatDateValue(endDate) : null,
			isValid: false,
		};
	}

	return {
		start: formatDateValue(startDate),
		end: formatDateValue(endDate),
		isValid: true,
	};
};

/**
 * Parse input text based on range flag
 */
export const parseInputText = (text: string, range: boolean): DateValue[] => {
	if (!range) {
		const date = parseDateString(text);
		return date ? [date] : [];
	}

	// Range mode
	const parsed = parseRangeInput(text);
	if (!parsed.isValid || !parsed.start || !parsed.end) {
		return [];
	}

	const startDate = parseDateString(parsed.start);
	const endDate = parseDateString(parsed.end);

	if (!startDate || !endDate) {
		return [];
	}

	return [startDate, endDate];
};

/**
 * Validate date input
 */
export const validateDateString = ({
	text,
	range,
	min,
	max,
}: {
	text: string;
	range: boolean;
	min?: DateValue;
	max?: DateValue;
}): DateInputValidation => {
	if (!text.trim()) {
		return { isValid: true }; // Empty is valid (let required validation handle it)
	}

	if (!range) {
		const date = parseDateString(text);
		if (!date) {
			return { isValid: false, error: 'Invalid date format. Use MM/DD/YYYY' };
		}

		// Check min/max
		if (min && date.compare(min) < 0) {
			return { isValid: false, error: 'Date is before minimum allowed date' };
		}
		if (max && date.compare(max) > 0) {
			return { isValid: false, error: 'Date is after maximum allowed date' };
		}

		return { isValid: true };
	}

	// Range mode validation
	const parsed = parseRangeInput(text);
	if (!parsed.isValid) {
		return { isValid: false, error: 'Invalid date range format. Use MM/DD/YYYY - MM/DD/YYYY' };
	}

	if (!parsed.start || !parsed.end) {
		return { isValid: false, error: 'Both start and end dates are required' };
	}

	const startDate = parseDateString(parsed.start);
	const endDate = parseDateString(parsed.end);

	if (!startDate || !endDate) {
		return { isValid: false, error: 'Invalid date format. Use MM/DD/YYYY' };
	}

	// Validate start <= end
	if (startDate.compare(endDate) > 0) {
		return { isValid: false, error: 'Start date must be before or equal to end date' };
	}

	// Check min/max
	if (min && startDate.compare(min) < 0) {
		return { isValid: false, error: 'Start date is before minimum allowed date' };
	}
	if (max && endDate.compare(max) > 0) {
		return { isValid: false, error: 'End date is after maximum allowed date' };
	}

	return { isValid: true };
};
