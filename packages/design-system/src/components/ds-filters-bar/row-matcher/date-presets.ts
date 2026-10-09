import { dateFilterPresets, type DsFilterDatePresetValue } from '../ds-filters-bar.types';

/**
 * Inclusive, `null` for an open side, in epoch milliseconds of UTC days
 */
export interface DayInterval {
	from: number | null;
	to: number | null;
}

const MS_PER_DAY = 86_400_000;

/**
 * Days before today that each rolling preset starts on, so that it ends on today and includes it
 */
const ROLLING_DAYS_BEFORE = Object.freeze({
	last7Days: 6,
	last30Days: 29,
	last90Days: 89,
});

const isBuiltInPreset = (preset: string): preset is DsFilterDatePresetValue =>
	dateFilterPresets.some((item) => item === preset);

/**
 * The UTC calendar days a built-in date preset covers on the day of `now`, or `null` for any other
 * preset
 */
export const builtInPresetDays = (preset: string, now: Date): DayInterval | null => {
	if (!isBuiltInPreset(preset)) {
		return null;
	}

	const year = now.getUTCFullYear();
	const month = now.getUTCMonth();
	const today = Date.UTC(year, month, now.getUTCDate());

	switch (preset) {
		case 'today':
			return { from: today, to: today };
		case 'yesterday':
			return { from: today - MS_PER_DAY, to: today - MS_PER_DAY };
		case 'last7Days':
		case 'last30Days':
		case 'last90Days':
			return { from: today - ROLLING_DAYS_BEFORE[preset] * MS_PER_DAY, to: today };
		case 'thisMonth':
			return { from: Date.UTC(year, month, 1), to: today };
		case 'lastMonth':
			// Day 0 of a month is the last day of the month before.
			return { from: Date.UTC(year, month - 1, 1), to: Date.UTC(year, month, 0) };
		case 'thisYear':
			return { from: Date.UTC(year, 0, 1), to: today };
	}
};
