import { UploadFileStatus } from '../../hooks/use-file-upload';

export interface FileUploadItemProps {
	/** Unique identifier for the file */
	id: string;
	/** Name of the file */
	name: string;
	/** Upload progress percentage (0-100) */
	progress: number;
	/** Current status of the file upload */
	status: UploadFileStatus;
	/** Array of error messages if any */
	errors?: string[];

	/** Whether to show progress bar */
	showProgress?: boolean;

	/** Callback when cancel button is clicked */
	onCancel?: (fileId: string) => void;
	/** Callback when retry button is clicked */
	onRetry?: (fileId: string) => void;
	/** Callback when remove button is clicked (for pending/error states) */
	onRemove?: (fileId: string) => void;
	/** Callback when delete button is clicked (for completed state) */
	onDelete?: (fileId: string) => void;
	/** Callback when pause button is clicked */
	onPause?: (fileId: string) => void;
	/** Callback when resume button is clicked */
	onResume?: (fileId: string) => void;
}
