import type React from 'react';
import type { DsFileUploadProps } from './ds-file-upload.types';
import { FileUpload } from './components/file-upload';
import { useFileUpload } from './hooks';

/**
 * Design system File Upload component (with state management)
 */
const DsFileUpload: React.FC<DsFileUploadProps> = ({
	adapter,
	autoUpload = true,
	maxConcurrent = 3,
	metadata,
	onFileUploadComplete,
	onFileUploadError,
	onFilesAdded,
	onFileRemoved,
	onFileDeleted,
	onFileUploadCanceled,
	onFileUploadRetried,
	onAllFileUploadsComplete,
	...props
}) => {
	const { getProps } = useFileUpload({
		adapter,
		autoUpload,
		maxConcurrent,
		maxFiles: props.maxFiles,
		metadata,
		onFileUploadComplete,
		onFileUploadError,
		onAllFileUploadsComplete,
	});

	const fileUploadProps = getProps({
		onFilesAdded,
		onFileRemoved,
		onFileDeleted,
		onFileUploadCanceled,
		onFileUploadRetried,
	});

	return <FileUpload {...fileUploadProps} {...props} />;
};

export default DsFileUpload;
