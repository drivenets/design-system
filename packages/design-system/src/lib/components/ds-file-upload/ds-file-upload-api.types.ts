import type { FileUploadFileError } from '@ark-ui/react';

export type FileError = FileUploadFileError;
export type UploadFileStatus = 'pending' | 'uploading' | 'interrupted' | 'completed' | 'error' | 'cancelled';
export type FileMetadata = Record<string, unknown>;

export interface UploadedFile extends File {
	id: string;
	progress: number;
	status: UploadFileStatus;
	errors?: FileError[];
}

export interface FileUploadOptions {
	file: File;
	fileId: string;
	metadata?: FileMetadata;
	onProgress?: (progress: number) => void;
	signal?: AbortSignal;
}

export interface FileUploadResult {
	url: string;
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
	upload: (options: FileUploadOptions) => Promise<FileUploadResult>;
	cancel?: (fileId: string) => Promise<void>;
	delete?: (fileId: string) => Promise<void>;
}
