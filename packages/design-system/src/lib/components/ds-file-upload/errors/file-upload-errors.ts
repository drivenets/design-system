/**
 * Base class for file upload errors
 */
export abstract class FileUploadError extends Error {
	abstract readonly isRetryable: boolean;

	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;
	}
}

/**
 * Retryable file upload error - indicates the upload can be retried
 * Examples: network errors, timeouts, temporary server errors (503), user cancellation
 */
export class RetryableFileUploadError extends FileUploadError {
	readonly isRetryable = true;
}

/**
 * Fatal file upload error - indicates the upload should not be retried
 * Examples: file type not allowed, file too large, invalid credentials, malformed response
 */
export class FatalFileUploadError extends FileUploadError {
	readonly isRetryable = false;
}
