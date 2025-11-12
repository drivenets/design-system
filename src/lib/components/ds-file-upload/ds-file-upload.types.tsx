import { FileUploadProps } from './components/file-upload';
import { FileMetadata, FileUploadAdapter, FileUploadResult } from './ds-file-upload-api.types';

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
		| 'uploadProgress'
	> {
	/** Upload adapter implementation */
	adapter: FileUploadAdapter;

	/**
	 * Whether to start upload automatically when files are added
	 * @default true
	 */
	autoUpload?: boolean;

	/** Maximum number of concurrent uploads */
	maxConcurrent?: number;

	/** Additional metadata to attach to uploads */
	metadata?: FileMetadata;

	/** Called when a file upload completes successfully */
	onFileUploadComplete?: (fileId: string, result: FileUploadResult) => void;

	/** Called when a file upload fails */
	onFileUploadError?: (fileId: string, error: string) => void;

	/** Called when files are added (before upload) */
	onFilesAdded?: (files: File[]) => void;

	/** Called when a file is removed */
	onFileRemoved?: (fileId: string) => void;

	/** Called when a file is deleted */
	onFileDeleted?: (fileId: string) => void;

	/** Called when a file upload is canceled */
	onFileUploadCanceled?: (fileId: string) => void;

	/** Called when a file upload is retried */
	onFileUploadRetried?: (fileId: string) => void;

	/** Called when all file uploads are complete */
	onAllFileUploadsComplete?: () => void;
}
