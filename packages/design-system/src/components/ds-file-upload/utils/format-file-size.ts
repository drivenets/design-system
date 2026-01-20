/**
 * Format file size to human-readable format using SI units (decimal base)
 */
export function formatFileSize(bytes: number): string {
	if (bytes === 0) {
		return '0 B';
	}

	const k = 1000; // Decimal base (SI standard)
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const size = bytes / Math.pow(k, i);

	return `${size.toFixed(2)} ${String(sizes[i])}`;
}
