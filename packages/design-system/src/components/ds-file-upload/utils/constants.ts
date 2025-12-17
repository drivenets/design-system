import type { AcceptedFileType } from '../types/accept-types';

/**
 * Default allowed file types for the file upload component
 */
export const DEFAULT_ALLOWED_FILE_TYPES: AcceptedFileType[] = [
	'application/pdf',
	'text/csv',
	'application/zip',
	'application/x-zip-compressed',
];

/**
 * Default maximum file size in bytes (25MB)
 */
export const DEFAULT_MAX_FILE_SIZE = 25_000_000;

/**
 * Default maximum number of files allowed
 */
export const DEFAULT_MAX_FILES = 5;
