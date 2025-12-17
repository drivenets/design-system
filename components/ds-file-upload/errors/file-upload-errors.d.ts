/**
 * Base class for file upload errors
 */
export declare abstract class FileUploadError extends Error {
    abstract readonly isRetryable: boolean;
    constructor(message: string);
}
/**
 * Retryable file upload error - indicates the upload can be retried
 * Examples: network errors, timeouts, temporary server errors (503), user cancellation
 */
export declare class RetryableFileUploadError extends FileUploadError {
    readonly isRetryable = true;
}
/**
 * Fatal file upload error - indicates the upload should not be retried
 * Examples: file type not allowed, file too large, invalid credentials, malformed response
 */
export declare class FatalFileUploadError extends FileUploadError {
    readonly isRetryable = false;
}
//# sourceMappingURL=file-upload-errors.d.ts.map