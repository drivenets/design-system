/**
 * File validation utilities for the DsFileUpload component
 */

export interface FileValidationError {
	type: 'fileType' | 'fileSize' | 'fileCount';
	message: string;
}

export interface FileValidationResult {
	isValid: boolean;
	errors: FileValidationError[];
}

/**
 * Allowed file types for the file upload component
 */
export const ALLOWED_FILE_TYPES: Record<string, string[]> = {
	'application/pdf': ['.pdf'],
	'text/csv': ['.csv'],
	'application/zip': ['.zip'],
	'application/x-zip-compressed': ['.zip'],
} as const;

/**
 * Maximum file size in bytes (25MB)
 */
export const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

/**
 * Maximum number of files allowed
 */
export const MAX_FILES = 5;

/**
 * Validate a single file
 */
export function validateFile(file: File): FileValidationResult {
	const errors: FileValidationError[] = [];

	// Check file type
	const isValidType = Object.keys(ALLOWED_FILE_TYPES).some(
		(mimeType) =>
			file.type === mimeType ||
			ALLOWED_FILE_TYPES[mimeType as keyof typeof ALLOWED_FILE_TYPES].some((ext) =>
				file.name.toLowerCase().endsWith(ext),
			),
	);

	if (!isValidType) {
		errors.push({
			type: 'fileType',
			message: 'Only PDF, CSV, and ZIP files are allowed',
		});
	}

	// Check file size
	if (file.size > MAX_FILE_SIZE) {
		errors.push({
			type: 'fileSize',
			message: `File size must not exceed ${formatFileSize(MAX_FILE_SIZE)}`,
		});
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}

/**
 * Validate multiple files
 */
export function validateFiles(files: File[]): FileValidationResult {
	const errors: FileValidationError[] = [];

	// Check file count
	if (files.length > MAX_FILES) {
		errors.push({
			type: 'fileCount',
			message: `Maximum ${MAX_FILES} files allowed`,
		});
	}

	// Validate each file
	files.forEach((file) => {
		const fileValidation = validateFile(file);
		if (!fileValidation.isValid) {
			errors.push(...fileValidation.errors);
		}
	});

	return {
		isValid: errors.length === 0,
		errors,
	};
}

/**
 * Format file size to human-readable format
 */
export function formatFileSize(bytes: number): string {
	if (bytes === 0) return '0 B';
	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Get file type icon based on file extension
 */
export function getFileTypeIcon(fileName: string): string {
	const extension = fileName.toLowerCase().split('.').pop();

	switch (extension) {
		case 'pdf':
			return 'picture_as_pdf';
		case 'csv':
			return 'table_chart';
		case 'zip':
			return 'folder_zip';
		default:
			return 'insert_drive_file';
	}
}

/**
 * Check if file type is allowed
 */
export function isFileTypeAllowed(file: File): boolean {
	return Object.keys(ALLOWED_FILE_TYPES).some(
		(mimeType) =>
			file.type === mimeType ||
			ALLOWED_FILE_TYPES[mimeType as keyof typeof ALLOWED_FILE_TYPES].some((ext) =>
				file.name.toLowerCase().endsWith(ext),
			),
	);
}
