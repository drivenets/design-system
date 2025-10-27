import React from 'react';
import {
	FileUploadFileAcceptDetails,
	FileUploadFileError,
	FileUploadFileMimeType,
	FileUploadFileRejectDetails,
} from '@ark-ui/react';
import { UploadFileMeta } from '../../hooks/use-file-upload';

export type FileError = FileUploadFileError;

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
	 * Whether to show upload progress
	 * @default false
	 */
	showProgress?: boolean;
	/**
	 * Whether to allow drag and drop
	 * @default true
	 */
	allowDrop?: boolean;
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
	style?: React.CSSProperties;
	/**
	 * The file types that are accepted
	 */
	accept?: Record<string, string[]> | FileUploadFileMimeType | FileUploadFileMimeType[] | undefined;
	/**
	 * File states to display (managed externally)
	 */
	files?: UploadFileMeta[];
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
	 * Callback when files upload is paused
	 */
	onFilePause?: (fileId: string) => void;
	/**
	 * Callback when files upload is resumed
	 */
	onFileResume?: (fileId: string) => void;
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
