import React, { useEffect, useRef } from 'react';
import {
	FileUploadFileAcceptDetails,
	FileUploadFileRejectDetails,
	FileUploadFileRejection,
} from '@ark-ui/react';
import { DsFileUploadProps } from './ds-file-upload.types';
import { FileUpload } from './components/file-upload';
import { useFileUpload } from './hooks';

/**
 * Design system File Upload component (with state management)
 */
const DsFileUpload: React.FC<DsFileUploadProps> = ({
	adapter,
	autoUpload = true,
	maxConcurrent = 3,
	chunkSize,
	metadata,
	onUploadComplete,
	onUploadError,
	onFilesAdded,
	onFileRemoved,
	onAllUploadsComplete,
	...props
}) => {
	const fileUpload = useFileUpload({
		adapter,
		autoUpload,
		maxConcurrent,
		chunkSize,
		metadata,
		onUploadComplete,
		onUploadError,
	});
	const prevUploadingCount = useRef(0);

	useEffect(() => {
		const uploadingCount = fileUpload.files.filter((f) => f.status === 'uploading').length;

		if (prevUploadingCount.current > 0 && uploadingCount === 0 && fileUpload.files.length > 0) {
			const allComplete = fileUpload.files.every(
				(f) => f.status === 'completed' || f.status === 'error' || f.status === 'cancelled',
			);

			if (allComplete) {
				onAllUploadsComplete?.();
			}
		}

		prevUploadingCount.current = uploadingCount;
	}, [fileUpload.files, onAllUploadsComplete]);

	const handleFileAccept = (details: FileUploadFileAcceptDetails) => {
		const addedFiles = fileUpload.addFiles(details.files);
		onFilesAdded?.(addedFiles);
	};

	const handleFileReject = (details: FileUploadFileRejectDetails) => {
		fileUpload.addRejectedFiles(
			details.files.map((f: FileUploadFileRejection) => ({
				file: f.file,
				errors: f.errors,
			})),
		);
	};

	const handleFileRemove = (fileId: string) => {
		fileUpload.removeFile(fileId);
		onFileRemoved?.(fileId);
	};

	return (
		<FileUpload
			{...props}
			files={fileUpload.files}
			acceptedFiles={fileUpload.acceptedFiles}
			onFileAccept={handleFileAccept}
			onFileReject={handleFileReject}
			onFileRemove={handleFileRemove}
			onFileDelete={handleFileRemove}
			onFileCancel={fileUpload.cancelUpload}
			onFileRetry={fileUpload.retryUpload}
			onFilePause={fileUpload.pauseUpload}
			onFileResume={fileUpload.resumeUpload}
		/>
	);
};

export default DsFileUpload;
