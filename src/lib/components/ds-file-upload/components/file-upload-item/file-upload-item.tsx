import React from 'react';
import classNames from 'classnames';
import { Progress } from '@ark-ui/react';
import { DsTooltip } from '@design-system/ui';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { getErrorMessage } from '../../utils/get-error-message';
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
	hideProgress = false,
	status,
	errors,
	onCancel,
	onRetry,
	onRemove,
	onDelete,
}) => {
	const fileItemClass = classNames(styles.fileItemContent, {
		[styles.fileItemError]: status === 'error',
		[styles.fileItemCompleted]: status === 'completed',
		[styles.fileItemUploading]: status === 'uploading',
		[styles.fileItemInterrupted]: status === 'interrupted' || status === 'cancelled',
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

				{(status === 'interrupted' || status === 'cancelled') && onRetry && (
					<DsTooltip content="Retry">
						<DsButton
							type="button"
							design="v1.2"
							buttonType="tertiary"
							aria-label={`Retry ${name} upload`}
							onClick={() => onRetry(id)}
						>
							<DsIcon icon="refresh" size="small" />
						</DsButton>
					</DsTooltip>
				)}

				{(status === 'pending' || status === 'error' || status === 'interrupted') && (
					<DsTooltip content="Remove">
						<DsButton
							type="button"
							design="v1.2"
							buttonType="tertiary"
							aria-label={`Remove ${name} upload`}
							onClick={() => onRemove?.(id)}
						>
							<DsIcon icon="do_not_disturb_on" size="small" />
						</DsButton>
					</DsTooltip>
				)}

				{status === 'uploading' && onCancel && (
					<DsTooltip content="Cancel">
						<DsButton
							type="button"
							design="v1.2"
							buttonType="tertiary"
							aria-label={`Cancel ${name} upload`}
							onClick={() => onCancel(id)}
						>
							<DsIcon icon="close" size="small" />
						</DsButton>
					</DsTooltip>
				)}

				{status === 'completed' && (
					<DsTooltip content="Delete">
						<DsButton
							type="button"
							design="v1.2"
							buttonType="tertiary"
							aria-label={`Delete ${name}`}
							onClick={() => onDelete?.(id)}
						>
							<DsIcon icon="delete" size="small" />
						</DsButton>
					</DsTooltip>
				)}
			</div>

			{status === 'completed' && (
				<div className={styles.completedText}>
					<DsIcon icon="check_circle" size="tiny" filled />
					Upload complete
				</div>
			)}

			{status === 'interrupted' && (
				<div className={styles.interruptedText}>
					<DsIcon icon="info" size="tiny" filled />
					Upload interrupted
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

			{!hideProgress && status === 'uploading' && (
				<span className={styles.progressText}>Uploading...({Math.round(progress)}%)</span>
			)}
		</div>
	);
};
