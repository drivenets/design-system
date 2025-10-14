import { FileUploadFileAcceptDetails, FileUploadFileRejectDetails } from '@ark-ui/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { useFileUpload } from './hooks/use-file-upload';

export type UploadScenario = 'normal' | 'interrupted' | 'error';

export interface UploadConfig {
	scenario: UploadScenario;
	duration?: number;
	steps?: number;
	interruptAt?: number;
	errorMessage?: string;
}

export const createMockFile = (name: string, type: string = 'text/plain', size: number = 1024) => {
	const file = new File(['test content'], name, { type });
	Object.defineProperty(file, 'size', {
		value: size,
		writable: false,
	});
	return file;
};

export const createUploadHandler = (hook: ReturnType<typeof useFileUpload>, config: UploadConfig) => {
	const { addFiles, addRejectedFiles, updateFileProgress, updateFileStatus } = hook;

	const uploadToS3 = async (
		file: File,
		onProgress: (progress: number) => void,
		shouldInterrupt = false,
		shouldError = false,
	) => {
		const duration = config.duration || 2000;
		const steps = config.steps || 10;
		const stepDuration = duration / steps;

		for (let i = 0; i <= steps; i++) {
			await new Promise((resolve) => setTimeout(resolve, stepDuration));
			const progress = Math.min((i / steps) * 100, 100);
			onProgress(progress);

			// Interrupt upload at specified progress
			if (shouldInterrupt && progress >= (config.interruptAt || 30)) {
				throw new Error(config.errorMessage || 'Network connection lost');
			}

			// Error immediately
			if (shouldError) {
				throw new Error(config.errorMessage || 'Unsupported file type');
			}
		}
	};

	const handleFileAccept = async (details: FileUploadFileAcceptDetails) => {
		const uploadFiles = addFiles(details.files);
		const uploadPromises = uploadFiles.map(async (uploadFile) => {
			try {
				updateFileStatus(uploadFile.id, 'uploading');

				await uploadToS3(
					uploadFile,
					(progress) => {
						updateFileProgress(uploadFile.id, progress);
					},
					config.scenario === 'interrupted',
					config.scenario === 'error',
				);

				updateFileStatus(uploadFile.id, 'completed');
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : 'unknown error';

				if (config.scenario === 'interrupted') {
					updateFileStatus(uploadFile.id, 'interrupted', `Upload interrupted: ${errorMessage}`);
				} else {
					updateFileStatus(uploadFile.id, 'error', `Upload failed: ${errorMessage}`);
				}
			}
		});
		await Promise.all(uploadPromises);
	};

	const handleFileReject = (details: FileUploadFileRejectDetails) => {
		addRejectedFiles(details.files);
	};

	const handleFileRetry = async (fileId: string) => {
		const { files, acceptedFiles } = hook;
		const fileToRetry = acceptedFiles.find((f) => f.id === fileId);
		if (!fileToRetry) return;

		try {
			updateFileStatus(fileId, 'uploading');
			updateFileProgress(fileId, 0);
			await uploadToS3(
				fileToRetry,
				(progress) => {
					updateFileProgress(fileId, progress);
				},
				false, // Don't interrupt retry
				false, // Don't error retry
			);
			updateFileStatus(fileId, 'completed');
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'unknown error';
			updateFileStatus(fileId, 'error', `Upload failed: ${errorMessage}`);
		}
	};

	return {
		handleFileAccept,
		handleFileReject,
		handleFileRetry,
	};
};

export const createTestPlayFunction = (scenario: UploadScenario) => {
	return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const mockFile = createMockFile('test-file.pdf', 'application/pdf');

		const fileInput = canvasElement.querySelector('input[type="file"]') as HTMLInputElement;
		await userEvent.upload(fileInput, mockFile);

		if (scenario === 'normal') {
			// Wait for upload to complete
			await waitFor(
				() => {
					expect(canvas.getByText('Upload complete')).toBeInTheDocument();
				},
				{ timeout: 5000 },
			);
		} else if (scenario === 'interrupted') {
			// Wait for upload to start
			await waitFor(
				() => {
					expect(canvas.getByText(/Uploading/)).toBeInTheDocument();
				},
				{ timeout: 3000 },
			);

			// Wait for upload to be interrupted
			await waitFor(
				() => {
					expect(canvas.getByText('Upload interrupted')).toBeInTheDocument();
				},
				{ timeout: 5000 },
			);

			// Test retry button
			const retryButton = canvas.getByLabelText(/Retry.*upload/);
			await userEvent.click(retryButton);

			// Wait for retry to complete
			await waitFor(
				() => {
					expect(canvas.getByText('Upload complete')).toBeInTheDocument();
				},
				{ timeout: 5000 },
			);
		} else if (scenario === 'error') {
			// Wait for error to appear immediately
			await waitFor(
				() => {
					expect(canvas.getByText(/Upload failed/)).toBeInTheDocument();
				},
				{ timeout: 3000 },
			);
		}

		if (scenario === 'error') {
			// Test remove button
			const removeButton = canvas.getByLabelText(/Remove.*upload/);
			await userEvent.click(removeButton);
		} else {
			// Test delete button
			const deleteButton = canvas.getByLabelText(/Delete.*/);
			await userEvent.click(deleteButton);
		}
	};
};
