export function calculatePercentage(value: number, min: number, max: number): number {
	if (max <= min) {
		return 0;
	}

	return Math.round(((value - min) / (max - min)) * 100);
}
