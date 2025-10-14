import { useState } from 'react';
import { FileError } from '../ds-file-upload.types';
import { isFileEqual } from '../utils';

export interface FileWithErrors {
	file: File;
	errors: FileError[];
}

export type UploadFileStatus = 'pending' | 'uploading' | 'interrupted' | 'completed' | 'error';
export type FileMeta = Pick<File, 'name' | 'type' | 'size'>;

export interface UploadFileMeta extends FileMeta {
	id: string;
	progress: number;
	status: UploadFileStatus;
	errors?: FileError[];
}

export interface UploadFile extends File {
	id: string;
}

export interface FileUploadState {
	id: string;
	file: File;
	progress: number;
	status: 'pending' | 'uploading' | 'completed' | 'error';
	errors?: FileError[];
}

export interface UseFileUploadReturn {
	files: UploadFileMeta[];
	acceptedFiles: UploadFile[];
	addFiles: (newFiles: File[]) => UploadFile[];
	addRejectedFiles: (files: FileWithErrors[]) => void;
	removeFile: (fileId: string) => void;
	updateFileProgress: (fileId: string, progress: number) => void;
	updateFileStatus: (fileId: string, status: UploadFileStatus, error?: string) => void;
	clearFiles: () => void;
	isUploading: boolean;
	hasFiles: boolean;
}

/**
 * Simple file state management hook
 * No upload logic - just file state
 * Validation is handled by Ark UI
 */
export function useFileUpload(): UseFileUploadReturn {
	const [files, setFiles] = useState<UploadFileMeta[]>([]);
	const [acceptedFiles, setAcceptedFiles] = useState<UploadFile[]>([]);

	const addFiles = (newFiles: File[]): UploadFile[] => {
		const newFilesOnly = newFiles.filter(
			(file) => !acceptedFiles.some((existing) => isFileEqual(existing, file)),
		);

		const duplicateFiles = newFiles.filter((file) => {
			const uploadFile = file as UploadFile;

			if (!uploadFile.id) {
				const found = files.filter((existing) => isFileEqual(existing, file));
				if (found.length) {
					const alreadyAdded = found.some((existing) => existing.errors?.includes('FILE_EXISTS'));
					return !alreadyAdded;
				}
			}
		});

		if (duplicateFiles.length > 0) {
			const duplicateFilesWithErrors = duplicateFiles.map((file) => ({
				file,
				errors: ['FILE_EXISTS'],
			}));
			addRejectedFiles(duplicateFilesWithErrors);
		}

		const newAcceptedFiles: UploadFile[] = newFilesOnly.map((file) => {
			Object.assign(file, {
				id: `${file.name}-${Date.now()}-${Math.random()}`,
			});
			return file as UploadFile;
		});
		setAcceptedFiles((prev) => [...prev, ...newAcceptedFiles]);

		const newUploadFiles: UploadFileMeta[] = newAcceptedFiles.map(
			(file) =>
				({
					id: file.id,
					name: file.name,
					size: file.size,
					type: file.type,
					progress: 0,
					status: 'pending',
				}) as UploadFileMeta,
		);
		setFiles((prev) => [...prev, ...newUploadFiles]);

		return newAcceptedFiles;
	};

	const addRejectedFiles = (filesWithErrors: FileWithErrors[]) => {
		const newFileStates: UploadFileMeta[] = filesWithErrors.map(
			({ file, errors }) =>
				({
					id: `${file.name}-${Date.now()}-${Math.random()}`,
					progress: 0,
					status: 'error',
					errors,
					name: file.name,
					size: file.size,
					type: file.type,
				}) as UploadFileMeta,
		);

		setFiles((prev) => [...prev, ...newFileStates]);
	};

	const removeFile = (fileId: string) => {
		setFiles((prev) => prev.filter((file) => file.id !== fileId));
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

	const clearFiles = () => {
		setFiles([]);
		setAcceptedFiles([]);
	};

	const isUploading = files.some((file) => file.status === 'uploading');
	const hasFiles = files.length > 0;

	return {
		files,
		acceptedFiles,
		addFiles,
		addRejectedFiles,
		removeFile,
		updateFileProgress,
		updateFileStatus,
		clearFiles,
		isUploading,
		hasFiles,
	};
}
