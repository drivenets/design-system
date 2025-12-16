import type { AcceptedFileType } from '../types/accept-types';
import { getFileExtensions } from './accept-utils';
import { formatFileSize } from './format-file-size';

/**
 * Generate helper text based on validation props
 */
export function generateHelperText(
	accept: AcceptedFileType[],
	maxFileSize: number,
	maxFiles: number,
): string {
	// Extract file extensions from accept configuration
	const extensions = accept ? getFileExtensions(accept) : [];
	const uniqueExtensions = [...new Set(extensions)];
	const fileTypes = uniqueExtensions.map((ext) => ext.toUpperCase()).join(', ');

	// Format file size
	const maxSizeText = formatFileSize(maxFileSize);

	// Build helper text
	const parts: string[] = [];

	if (fileTypes) {
		parts.push(`Only ${fileTypes} files`);
	}

	if (maxFileSize < Infinity) {
		parts.push(`File size ${maxSizeText} max`);
	}

	if (maxFiles === 1) {
		parts.push('Only 1 file');
	} else if (maxFiles > 1) {
		parts.push(`Up to ${maxFiles} files`);
	}

	return parts.join('. ') + '.';
}
