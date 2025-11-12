import { FileUploadFileMimeType } from '@ark-ui/react';

/**
 * Default allowed file types for the file upload component
 */
export const DEFAULT_ALLOWED_FILE_TYPES: Record<FileUploadFileMimeType, string[]> = {
	'application/pdf': ['.pdf'],
	'text/csv': ['.csv'],
	'application/zip': ['.zip'],
	'application/x-zip-compressed': ['.zip'],
} as const;

/**
 * Default maximum file size in bytes (25MB)
 */
export const DEFAULT_MAX_FILE_SIZE = 25_000_000;

/**
 * Default maximum number of files allowed
 */
export const DEFAULT_MAX_FILES = 5;
