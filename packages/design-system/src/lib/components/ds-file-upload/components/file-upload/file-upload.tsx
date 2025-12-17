import type React from 'react';
import classNames from 'classnames';
import { FileUpload as ArkUiFileUpload } from '@ark-ui/react';
import { DsIcon } from '../../../ds-icon';
import { DsTypography } from '../../../ds-typography';
import { DsButton } from '../../../ds-button';
import { FileUploadItem } from '../file-upload-item';
import type { FileUploadProps } from './file-upload.types';
import { DEFAULT_ALLOWED_FILE_TYPES, DEFAULT_MAX_FILE_SIZE, DEFAULT_MAX_FILES } from '../../utils/constants';
import { generateHelperText } from '../../utils/generate-helper-text';
import { getMimeTypes } from '../../utils/accept-utils';
import styles from './file-upload.module.scss';

/**
 * Design system base File Upload component
 * Used in conjunction with the useFileUpload hook
 */
export const FileUpload: React.FC<FileUploadProps> = ({
	style = {},
	className,
	files,
	acceptedFiles,
	errorText,
	dropzoneText = 'Drag and drop files here or ',
	triggerText = 'Select file...',
	hideProgress = false,
	disableDrop = false,
	onFileAccept,
	onFileReject,
	onFileRemove,
	onFileDelete,
	onFileCancel,
	onFileRetry,
	accept = DEFAULT_ALLOWED_FILE_TYPES,
	maxFiles = DEFAULT_MAX_FILES,
	maxFileSize = DEFAULT_MAX_FILE_SIZE,
	compact = false,
	disabled = false,
}) => {
	const infoText = generateHelperText(accept, maxFileSize, maxFiles);

	return (
		<ArkUiFileUpload.Root
			style={style}
			className={classNames(styles.fileUploadRoot, className)}
			maxFiles={maxFiles}
			maxFileSize={maxFileSize}
			accept={getMimeTypes(accept)}
			disabled={disabled}
			allowDrop={!disableDrop}
			acceptedFiles={acceptedFiles}
			onFileAccept={onFileAccept}
			onFileReject={onFileReject}
		>
			<ArkUiFileUpload.Dropzone
				className={classNames(styles.dropzone, {
					[styles.dropzoneCompact]: compact,
				})}
			>
				<DsIcon icon="upload" className={styles.dropzoneIcon} />
				<DsTypography className={styles.dropzoneText} variant="body-xs-reg">
					{dropzoneText}
				</DsTypography>
				<ArkUiFileUpload.Trigger asChild>
					<DsButton design="v1.2" variant="ghost" size="small" disabled={disabled}>
						{triggerText}
					</DsButton>
				</ArkUiFileUpload.Trigger>
			</ArkUiFileUpload.Dropzone>

			{infoText && !disabled && !errorText && (
				<DsTypography className={styles.infoText} variant="body-xs-reg">
					{infoText}
				</DsTypography>
			)}
			{errorText && (
				<DsTypography className={styles.errorText} variant="body-xs-reg">
					<DsIcon icon="error" size="tiny" />
					{errorText}
				</DsTypography>
			)}

			{!!files?.length && (
				<div className={styles.fileList}>
					{files.map((uploadFile) => (
						<FileUploadItem
							key={uploadFile.id}
							id={uploadFile.id}
							name={uploadFile.name}
							progress={uploadFile.progress}
							hideProgress={hideProgress}
							status={uploadFile.status}
							errors={uploadFile.errors}
							onRemove={onFileRemove}
							onDelete={onFileDelete}
							onCancel={onFileCancel}
							onRetry={onFileRetry}
						/>
					))}
				</div>
			)}

			<ArkUiFileUpload.HiddenInput />
		</ArkUiFileUpload.Root>
	);
};
