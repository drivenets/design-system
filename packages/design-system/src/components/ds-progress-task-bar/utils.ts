interface CountUnit {
	value: number;
	suffix: string;
}

const COUNT_UNITS: readonly CountUnit[] = [
	{ value: 1_000_000_000, suffix: 'B' },
	{ value: 1_000_000, suffix: 'M' },
	{ value: 1_000, suffix: 'K' },
];

// Counts below this are shown verbatim; at or above it they are abbreviated.
const ABBREVIATION_FLOOR = 1_000;

// Below this multiple of a unit, show one decimal place (e.g. 1.1K); at or
// above it, show a whole number (e.g. 87K).
const DECIMAL_THRESHOLD = 10;

const stripTrailingZero = (value: number): string =>
	value % 1 === 0 ? String(value) : value.toFixed(1);

/**
 * Format a task count for the legend, following the design's abbreviation rules:
 * - `< 1000` → exact number (e.g. `999`)
 * - single-digit unit → one decimal (e.g. `1.1K`, `1.2M`)
 * - multi-digit unit → whole number, truncated so `999,999 → 999K`
 */
export const formatCount = (count: number): string => {
	if (!Number.isFinite(count)) {
		return '0';
	}

	const rounded = Math.max(0, Math.round(count));

	if (rounded < ABBREVIATION_FLOOR) {
		return String(rounded);
	}

	const unit = COUNT_UNITS.find(({ value }) => rounded >= value);

	if (unit === undefined) {
		return String(rounded);
	}

	const scaled = rounded / unit.value;

	if (scaled < DECIMAL_THRESHOLD) {
		return `${stripTrailingZero(Math.round(scaled * 10) / 10)}${unit.suffix}`;
	}

	return `${String(Math.floor(scaled))}${unit.suffix}`;
};
