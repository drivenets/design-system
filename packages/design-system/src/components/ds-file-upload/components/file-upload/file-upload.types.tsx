import type { CSSProperties } from 'react';
import type { FileUploadFileAcceptDetails, FileUploadFileRejectDetails } from '@ark-ui/react';
import type { UploadedFile } from '../../ds-file-upload-api.types';
import type { AcceptedFileType } from '../../types/accept-types';

export interface FileUploadProps {
	/**
	 * Error text displayed when validation fails
	 */
	errorText?: string;
	/**
	 * Text displayed in the dropzone area
	 */
	dropzoneText?: string;
	/**
	 * Text for the upload trigger button
	 */
	triggerText?: string;
	/**
	 * Whether to hide upload progress
	 * @default false
	 */
	hideProgress?: boolean;
	/**
	 * Whether to disable drag and drop functionality
	 * @default false
	 */
	disableDrop?: boolean;
	/**
	 * The maximum number of files that can be uploaded
	 */
	maxFiles?: number;
	/**
	 * Maximum file size in bytes
	 * @default 25MB
	 */
	maxFileSize?: number;
	/**
	 * Callback when files are accepted
	 */
	onFileAccept?: (details: FileUploadFileAcceptDetails) => void;
	/**
	 * Callback when files are rejected
	 */
	onFileReject?: (details: FileUploadFileRejectDetails) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles
	 */
	style?: CSSProperties;
	/**
	 * The file types that are accepted
	 * Use shorthand for common MIME types (extensions provided automatically)
	 * or explicit form for custom types
	 * @example ['application/pdf', 'image/png']
	 * @example ['application/pdf', { mimeType: 'application/x-custom', extensions: ['.custom'] }]
	 */
	accept?: AcceptedFileType[];
	/**
	 * File states to display (managed externally)
	 */
	files?: UploadedFile[];
	/**
	 * Callback when files are removed
	 */
	onFileRemove?: (fileId: string) => void;
	/**
	 * Callback when files are deleted
	 */
	onFileDelete?: (fileId: string) => void;
	/**
	 * Callback when files upload is canceled
	 */
	onFileCancel?: (fileId: string) => void;
	/**
	 * Callback when files upload is retried
	 */
	onFileRetry?: (fileId: string) => void;
	/**
	 * Controlled accepted files
	 */
	acceptedFiles?: File[];
	/**
	 * Whether the file upload is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the file upload layout is compact (inline)
	 */
	compact?: boolean;
}
