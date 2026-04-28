import type { FileUploadFileError } from '@ark-ui/react';

export type FileError = FileUploadFileError;
export type UploadFileStatus = 'pending' | 'uploading' | 'interrupted' | 'completed' | 'error' | 'cancelled';
export type FileMetadata = Record<string, unknown>;

export interface UploadedFile extends File {
	/**
	 * Stable identifier assigned by the uploader. Used to correlate progress
	 * updates, retries, and deletions with this specific file.
	 */
	id: string;
	/**
	 * Current upload progress as a number between `0` and `1`.
	 */
	progress: number;
	/**
	 * Current lifecycle state of the upload.
	 */
	status: UploadFileStatus;
	/**
	 * Validation or upload errors associated with this file. Present when
	 * `status` is `error` or when the file fails client-side validation.
	 */
	errors?: FileError[];
	/**
	 * Native `File` the user selected. Kept alongside so consumers can access
	 * the original binary even after `UploadedFile` has been enriched.
	 */
	originalFile: File;
}

export interface FileUploadOptions {
	/**
	 * The file to upload.
	 */
	file: File;
	/**
	 * Stable identifier for this upload. Must match the `id` on the corresponding
	 * `UploadedFile` so progress and cancellation are routed correctly.
	 */
	fileId: string;
	/**
	 * Optional custom metadata forwarded by the consumer (e.g., tags, parent ids).
	 */
	metadata?: FileMetadata;
	/**
	 * Called by the adapter with upload progress updates as a number between `0`
	 * and `1`.
	 */
	onProgress?: (progress: number) => void;
	/**
	 * AbortSignal that fires when the consumer cancels the upload. Adapters should
	 * observe this and abort any in-flight network request.
	 */
	signal?: AbortSignal;
}

export interface FileUploadResult {
	/**
	 * URL of the successfully uploaded file, returned by the backend.
	 */
	url: string;
	/**
	 * Optional metadata returned by the backend alongside the URL.
	 */
	metadata?: FileMetadata;
}

/**
 * File upload adapter interface
 * The upload method should:
 * - resolve with FileUploadResult on success
 * - reject with RetryableFileUploadError for transient failures
 * - reject with FatalFileUploadError for permanent failures
 */
export interface FileUploadAdapter {
	/**
	 * Uploads a single file. Resolve with `FileUploadResult` on success; reject
	 * with `RetryableFileUploadError` for transient failures (will be retried) or
	 * `FatalFileUploadError` for permanent failures (surfaces to the user).
	 */
	upload: (options: FileUploadOptions) => FileUploadResult | Promise<FileUploadResult>;
	/**
	 * Optional hook called when the user cancels an in-flight upload. Implementations
	 * should abort any pending network work for the given `fileId`.
	 */
	cancel?: (fileId: string) => void | Promise<void>;
	/**
	 * Optional hook called when the user removes a previously uploaded file. Typically
	 * issues a delete request to the backend so stored files can be cleaned up.
	 */
	delete?: (fileId: string) => void | Promise<void>;
}
