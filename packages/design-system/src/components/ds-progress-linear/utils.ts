/**
 * Calculate percentage from value within a range (min to max)
 *
 * @param value - The current value
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns The percentage value (0-100) rounded to nearest integer
 */
export function calculatePercentage(value: number, min: number, max: number): number {
	if (max <= min) {
		return 0;
	}

	return Math.round(((value - min) / (max - min)) * 100);
}
