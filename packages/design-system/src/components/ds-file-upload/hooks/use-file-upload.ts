import { useState } from 'react';
import type {
	FileUploadFileAcceptDetails,
	FileUploadFileRejectDetails,
	FileUploadFileRejection,
} from '@ark-ui/react';
import { createUploadedFile } from '../utils/file-factory';
import { isFileEqual } from '../utils/is-file-equal';
import type {
	FileError,
	FileMetadata,
	FileUploadAdapter,
	FileUploadResult,
	UploadedFile,
	UploadFileStatus,
} from '../ds-file-upload-api.types';
import { FileUploadError } from '../errors/file-upload-errors';
import type { FileUploadProps } from '../components/file-upload';

export interface UseFileUploadConfig {
	adapter: FileUploadAdapter;
	autoUpload?: boolean;
	maxConcurrent?: number;
	maxFiles?: number;
	metadata?: FileMetadata;
	onFileUploadComplete?: (fileId: string, result: FileUploadResult) => void;
	onFileUploadError?: (fileId: string, error: string) => void;
	onAllFileUploadsComplete?: () => void;
}

export interface UseFileUploadUserCallbacks {
	onFilesAdded?: (files: File[]) => void;
	onFileRemoved?: (fileId: string) => void;
	onFileDeleted?: (fileId: string) => void;
	onFileUploadCanceled?: (fileId: string) => void;
	onFileUploadRetried?: (fileId: string) => void;
}

export interface UseFileUploadReturn {
	files: UploadedFile[];
	acceptedFiles: UploadedFile[];
	addFiles: (newFiles: File[]) => UploadedFile[];
	addRejectedFiles: (filesWithErrors: { file: File; errors: FileError[] }[]) => void;
	removeFile: (fileId: string) => void;
	deleteFile: (fileId: string) => Promise<void>;
	uploadFile: (fileId: string) => Promise<void>;
	uploadAll: () => Promise<void>;
	cancelUpload: (fileId: string) => Promise<void>;
	retryUpload: (fileId: string) => Promise<void>;
	clearFiles: () => void;
	/**
	 * Get props for FileUpload component with callback composition
	 * @param userCallbacks Optional user callbacks to compose with internal logic
	 * @returns Props ready to spread onto FileUpload component
	 */
	getProps: (
		userCallbacks?: UseFileUploadUserCallbacks,
	) => Pick<
		FileUploadProps,
		| 'files'
		| 'acceptedFiles'
		| 'onFileAccept'
		| 'onFileReject'
		| 'onFileRemove'
		| 'onFileDelete'
		| 'onFileCancel'
		| 'onFileRetry'
	>;
}

/**
 * File upload state management hook
 */
export function useFileUpload({
	adapter,
	autoUpload = true,
	maxConcurrent = 3,
	maxFiles,
	metadata,
	onFileUploadComplete,
	onFileUploadError,
	onAllFileUploadsComplete,
}: UseFileUploadConfig): UseFileUploadReturn {
	const [abortControllers] = useState(() => new Map<string, AbortController>());
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const acceptedFiles = files.filter((file) => file.status !== 'error');

	if (files.length && !files.some((f) => f.status === 'uploading')) {
		onAllFileUploadsComplete?.();
	}

	const getAddedFiles = (newFiles: File[]) =>
		newFiles.filter((file) => !acceptedFiles.some((existing) => isFileEqual(existing, file)));

	const getDuplicatedFiles = (newFiles: File[]) =>
		newFiles.filter((file) => {
			const uploadedFile = file as UploadedFile;
			if (uploadedFile.id) {
				return false;
			}
			const found = files.filter((existing) => isFileEqual(existing, file));
			if (found.length) {
				const alreadyAdded = found.some((existing) => existing.errors?.includes('FILE_EXISTS'));
				return !alreadyAdded;
			}
			return false;
		});

	const markDuplicates = (duplicates: File[]) => {
		const duplicateFilesWithErrors = duplicates.map((file) => ({
			file,
			errors: ['FILE_EXISTS'],
		}));
		if (duplicateFilesWithErrors.length) {
			addRejectedFiles(duplicateFilesWithErrors);
		}
	};

	const markMaxFiles = (files: File[]): File[] => {
		if (maxFiles === undefined) {
			return files;
		}

		const currentAcceptedCount = acceptedFiles.length;
		const availableSlots = maxFiles - currentAcceptedCount;

		let filesToAdd: File[];
		let rejectedFiles: File[];

		if (availableSlots <= 0) {
			filesToAdd = [];
			rejectedFiles = files;
		} else if (files.length > availableSlots) {
			filesToAdd = files.slice(0, availableSlots);
			rejectedFiles = files.slice(availableSlots);
		} else {
			return files;
		}

		const rejectedFilesWithErrors = rejectedFiles.map((file) => ({
			file,
			errors: ['TOO_MANY_FILES'],
		}));
		addRejectedFiles(rejectedFilesWithErrors);

		return filesToAdd;
	};

	const addNewFiles = (filesToUpload: File[]): UploadedFile[] => {
		const uploadedFiles = filesToUpload.map((file) => createUploadedFile(file, 'pending'));
		setFiles((prev) => [...prev, ...uploadedFiles]);
		return uploadedFiles;
	};

	const uploadNewFiles = (uploadedFiles: UploadedFile[]) => {
		if (autoUpload) {
			uploadedFiles.forEach((file) => {
				void uploadSingleFile(file);
			});
		}
	};

	const addFiles = (newFiles: File[]): UploadedFile[] => {
		const addedFiles = getAddedFiles(newFiles);
		const duplicateFiles = getDuplicatedFiles(newFiles);
		markDuplicates(duplicateFiles);
		const filesToAdd = markMaxFiles(addedFiles);
		const uploadedFiles = addNewFiles(filesToAdd);
		uploadNewFiles(uploadedFiles);
		return uploadedFiles;
	};

	const addRejectedFiles = (filesWithErrors: { file: File; errors: FileError[] }[]) => {
		const newFileStates = filesWithErrors.map(({ file, errors }) =>
			createUploadedFile(file, 'error', errors),
		);
		setFiles((prev) => [...prev, ...newFileStates]);
	};

	const updateFileProgress = (fileId: string, progress: number) => {
		setFiles((prev) => prev.map((file) => (file.id === fileId ? { ...file, progress } : file)));
	};

	const updateFileStatus = (fileId: string, status: UploadFileStatus, error?: string) => {
		setFiles((prev) =>
			prev.map((file) =>
				file.id === fileId
					? {
							...file,
							status,
							errors: error ? [...(file.errors || []), error] : file.errors,
						}
					: file,
			),
		);
	};

	const uploadFile = async (fileId: string) => {
		const file = acceptedFiles.find((f) => f.id === fileId);
		if (file) {
			await uploadSingleFile(file);
		}
	};

	const uploadSingleFile = async (file: UploadedFile) => {
		const fileId = file.id;
		const abortController = new AbortController();
		abortControllers.set(fileId, abortController);

		updateFileStatus(file.id, 'uploading');

		try {
			const result = await adapter.upload({
				file,
				fileId,
				metadata,
				signal: abortController.signal,
				onProgress: (progress) => {
					updateFileProgress(fileId, progress);
				},
			});

			updateFileStatus(fileId, 'completed');
			updateFileProgress(fileId, 100);
			onFileUploadComplete?.(fileId, result);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Upload failed';
			// Determine status based on error type
			// Unknown errors are treated as retryable (network errors, etc.)
			let status: UploadFileStatus = 'interrupted';
			if (error instanceof FileUploadError) {
				status = error.isRetryable ? 'interrupted' : 'error';
			}
			updateFileStatus(fileId, status, errorMessage);
			onFileUploadError?.(fileId, errorMessage);
		} finally {
			abortControllers.delete(fileId);
		}
	};

	const uploadAll = async () => {
		const pendingFiles = files.filter((f) => f.status === 'pending');

		for (let i = 0; i < pendingFiles.length; i += maxConcurrent) {
			const batch = pendingFiles.slice(i, i + maxConcurrent);
			await Promise.allSettled(batch.map((f) => uploadFile(f.id)));
		}
	};

	const cancelUpload = async (fileId: string) => {
		abortControllers.get(fileId)?.abort();
		abortControllers.delete(fileId);

		if (adapter.cancel) {
			await adapter.cancel(fileId);
		}

		updateFileStatus(fileId, 'cancelled');
	};

	const retryUpload = async (fileId: string) => {
		updateFileStatus(fileId, 'pending');
		updateFileProgress(fileId, 0);
		await uploadFile(fileId);
	};

	const removeFile = (fileId: string) => {
		abortControllers.get(fileId)?.abort();
		abortControllers.delete(fileId);

		setFiles((prev) => prev.filter((file) => file.id !== fileId));
	};

	const deleteFile = async (fileId: string) => {
		if (adapter.delete) {
			await adapter.delete(fileId);
		}

		removeFile(fileId);
	};

	const clearFiles = () => {
		abortControllers.forEach((controller) => controller.abort());
		abortControllers.clear();

		setFiles([]);
	};

	const getProps = (userCallbacks?: UseFileUploadUserCallbacks) => {
		const handleFileAccept = (details: FileUploadFileAcceptDetails) => {
			const addedFiles = addFiles(details.files);
			userCallbacks?.onFilesAdded?.(addedFiles);
		};

		const handleFileReject = (details: FileUploadFileRejectDetails) => {
			addRejectedFiles(
				details.files.map((f: FileUploadFileRejection) => ({
					file: f.file,
					errors: f.errors,
				})),
			);
		};

		const handleFileRemove = (fileId: string) => {
			removeFile(fileId);
			userCallbacks?.onFileRemoved?.(fileId);
		};

		const handleFileDelete = async (fileId: string) => {
			await deleteFile(fileId);
			userCallbacks?.onFileDeleted?.(fileId);
		};

		const handleFileUploadCanceled = async (fileId: string) => {
			await cancelUpload(fileId);
			userCallbacks?.onFileUploadCanceled?.(fileId);
		};

		const handleFileUploadRetried = async (fileId: string) => {
			await retryUpload(fileId);
			userCallbacks?.onFileUploadRetried?.(fileId);
		};

		return {
			files,
			acceptedFiles,
			onFileAccept: handleFileAccept,
			onFileReject: handleFileReject,
			onFileRemove: handleFileRemove,
			onFileDelete: handleFileDelete,
			onFileCancel: handleFileUploadCanceled,
			onFileRetry: handleFileUploadRetried,
		};
	};

	return {
		files,
		acceptedFiles,
		addFiles,
		addRejectedFiles,
		removeFile,
		deleteFile,
		uploadFile,
		uploadAll,
		cancelUpload,
		retryUpload,
		clearFiles,
		getProps,
	};
}
