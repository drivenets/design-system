import { FileUploadProps } from './components/file-upload';
import { FileUploadAdapter } from './adapters/file-upload-adapter.types';

export interface DsFileUploadProps
	extends Omit<
		FileUploadProps,
		| 'files'
		| 'acceptedFiles'
		| 'onFileAccept'
		| 'onFileReject'
		| 'onFileRemove'
		| 'onFileDelete'
		| 'onFileCancel'
		| 'onFileRetry'
		| 'onFilePause'
		| 'onFileResume'
		| 'uploadProgress'
	> {
	/** Upload adapter (S3, Azure, custom backend, etc.) */
	adapter: FileUploadAdapter;

	/**
	 * Whether to start upload automatically when files are added
	 * @default true
	 */
	autoUpload?: boolean;

	/** Maximum number of concurrent uploads */
	maxConcurrent?: number;

	/** Chunk size for multipart uploads (in bytes) */
	chunkSize?: number;

	/** Additional metadata to attach to uploads */
	metadata?: Record<string, string>;

	/** Called when a file upload completes successfully */
	onUploadComplete?: (fileId: string, result: { url?: string; metadata?: Record<string, any> }) => void;

	/** Called when a file upload fails */
	onUploadError?: (fileId: string, error: string) => void;

	/** Called when files are added (before upload) */
	onFilesAdded?: (files: File[]) => void;

	/** Called when a file is removed */
	onFileRemoved?: (fileId: string) => void;

	/** Called when all uploads are complete */
	onAllUploadsComplete?: () => void;
}
