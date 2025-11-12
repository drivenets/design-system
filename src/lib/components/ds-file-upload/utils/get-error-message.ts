import { FileError } from '../ds-file-upload-api.types';

const FILE_ERROR_MESSAGES: Record<FileError, string> = {
	FILE_TOO_LARGE: 'File size exceeds the maximum limit',
	FILE_INVALID_TYPE: 'File type is not allowed',
	TOO_MANY_FILES: 'Too many files selected',
	FILE_TOO_SMALL: 'File size is too small',
	FILE_INVALID: 'File is invalid',
	FILE_EXISTS: 'File already exists',
};

/**
 * Map FileUploadFileError to user-friendly error message
 */
export function getErrorMessage(error: FileError): string {
	return FILE_ERROR_MESSAGES[error] || error || 'File validation failed';
}
