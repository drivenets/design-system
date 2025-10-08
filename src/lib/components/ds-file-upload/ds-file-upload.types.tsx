import React from 'react';
import { FileUploadFileAcceptDetails, FileUploadFileRejectDetails, FileUploadRootProps } from '@ark-ui/react';
import { FileUploadState } from './hooks/use-file-upload';

export interface DsFileUploadProps extends Omit<FileUploadRootProps, 'children'> {
	/**
	 * Label text for the file upload
	 */
	label?: string;
	/**
	 * Helper text displayed below the upload area
	 */
	helperText?: string;
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
	 * Whether the component is in an error state
	 */
	hasError?: boolean;
	/**
	 * File states to display (managed externally)
	 */
	files?: FileUploadState[];
	/**
	 * Callback to remove a file
	 */
	onRemove?: (fileId: string) => void;
}
