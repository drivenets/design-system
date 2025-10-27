import React from 'react';
import classNames from 'classnames';
import { Progress } from '@ark-ui/react';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { getErrorMessage } from '../../utils';
import { FileUploadItemProps } from './file-upload-item.types';
import styles from './file-upload-item.module.scss';

/**
 * Individual file upload item component
 * Displays a single file with its upload status, progress, and action buttons
 */
export const FileUploadItem: React.FC<FileUploadItemProps> = ({
	id,
	name,
	progress,
	showProgress = true,
	status,
	errors,
	onCancel,
	onRetry,
	onRemove,
	onDelete,
	onPause,
	onResume,
}) => {
	const fileItemClass = classNames(styles.fileItemContent, {
		[styles.fileItemError]: status === 'error',
		[styles.fileItemCompleted]: status === 'completed',
		[styles.fileItemUploading]: status === 'uploading',
		// [styles.fileItemPaused]: status === 'paused',
		[styles.fileItemInterrupted]: status === 'cancelled',
	});

	return (
		<div className={styles.fileItem}>
			<div className={fileItemClass}>
				<DsIcon className={styles.filePreview} icon="upload_file" size="tiny" />

				<div className={styles.fileInfo}>
					<div className={styles.fileName} title={name}>
						{name}
					</div>

					<Progress.Root value={status === 'error' ? 1 : progress} className={styles.progressBar}>
						<Progress.Track className={styles.progressTrack}>
							<Progress.Range className={styles.progressRange} />
						</Progress.Track>
					</Progress.Root>
				</div>

				{(status === 'pending' || status === 'error' || status === 'cancelled') && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Remove ${name} upload`}
						onClick={() => onRemove?.(id)}
					>
						<DsIcon icon="do_not_disturb_on" size="small" />
					</DsButton>
				)}

				{status === 'uploading' && onPause && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Pause ${name} upload`}
						onClick={() => onPause(id)}
					>
						<DsIcon icon="pause" size="small" />
					</DsButton>
				)}

				{status === 'paused' && onResume && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Resume ${name} upload`}
						onClick={() => onResume(id)}
					>
						<DsIcon icon="play_arrow" size="small" />
					</DsButton>
				)}

				{(status === 'error' || status === 'cancelled') && onRetry && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Retry ${name} upload`}
						onClick={() => onRetry(id)}
					>
						<DsIcon icon="refresh" size="small" />
					</DsButton>
				)}

				{(status === 'uploading' || status === 'paused') && onCancel && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Cancel ${name} upload`}
						onClick={() => onCancel(id)}
					>
						<DsIcon icon="close" size="small" />
					</DsButton>
				)}

				{status === 'completed' && (
					<DsButton
						type="button"
						design="v1.2"
						buttonType="tertiary"
						aria-label={`Delete ${name}`}
						onClick={() => onDelete?.(id)}
					>
						<DsIcon icon="delete" size="small" />
					</DsButton>
				)}
			</div>

			{status === 'completed' && (
				<div className={styles.completedText}>
					<DsIcon icon="check_circle" size="tiny" filled />
					Upload complete
				</div>
			)}

			{status === 'cancelled' && (
				<div className={styles.interruptedText}>
					<DsIcon icon="info" size="tiny" filled />
					Upload cancelled
				</div>
			)}

			{status === 'error' &&
				errors?.length &&
				errors.map((error) => (
					<div key={error} className={styles.errorMessage}>
						<DsIcon icon="cancel" size="tiny" filled />
						{getErrorMessage(error)}
					</div>
				))}

			{showProgress && status === 'uploading' && (
				<span className={styles.progressText}>Uploading...({Math.round(progress)}%)</span>
			)}
		</div>
	);
};
