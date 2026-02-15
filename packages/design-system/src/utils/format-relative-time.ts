const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = 30;
const MONTHS_PER_YEAR = 12;
const MS_PER_SECOND = 1000;

const JUST_NOW_THRESHOLD_SECONDS = 60;

export const formatRelativeTime = (date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();

	if (diffMs < 0) {
		return 'Just now';
	}

	const diffSeconds = Math.floor(diffMs / MS_PER_SECOND);
	const diffMinutes = Math.floor(diffSeconds / SECONDS_PER_MINUTE);
	const diffHours = Math.floor(diffMinutes / MINUTES_PER_HOUR);
	const diffDays = Math.floor(diffHours / HOURS_PER_DAY);
	const diffWeeks = Math.floor(diffDays / DAYS_PER_WEEK);
	const diffMonths = Math.floor(diffDays / DAYS_PER_MONTH);
	const diffYears = Math.floor(diffMonths / MONTHS_PER_YEAR);

	if (diffSeconds < JUST_NOW_THRESHOLD_SECONDS) {
		return 'Just now';
	}

	if (diffMinutes < MINUTES_PER_HOUR) {
		return `${String(diffMinutes)}m ago`;
	}

	if (diffHours < HOURS_PER_DAY) {
		return `${String(diffHours)}h ago`;
	}

	if (diffDays < DAYS_PER_WEEK) {
		return `${String(diffDays)}d ago`;
	}

	if (diffWeeks < 4) {
		return `${String(diffWeeks)}w ago`;
	}

	if (diffYears >= 1) {
		return `${String(diffYears)}y ago`;
	}

	return `${String(diffMonths)}mo ago`;
};
