import type { Meta, StoryObj } from '@storybook/react';
import { FileUploadFileAcceptDetails, FileUploadFileRejectDetails } from '@ark-ui/react';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks/use-file-upload';
import { createTestPlayFunction, createUploadHandler } from './ds-file-upload.stories.util';

const meta: Meta<typeof DsFileUpload> = {
	title: 'Design System/FileUpload',
	component: DsFileUpload,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		errorText: { control: 'text' },
		dropzoneText: { control: 'text' },
		triggerText: { control: 'text' },
		showProgress: { control: 'boolean' },
		allowDrop: { control: 'boolean' },
		maxFiles: { control: 'number' },
		accept: { control: 'object' },
		disabled: { control: 'boolean' },
		hasError: { control: 'boolean' },
		onFileAccept: { action: 'fileAccepted' },
		onFileReject: { action: 'fileRejected' },
	},
};

export default meta;
type Story = StoryObj<typeof DsFileUpload>;

export const Default: Story = {
	args: {
		showProgress: true,
	},
	render: function Render(args) {
		const hook = useFileUpload();
		const { files, acceptedFiles, removeFile } = hook;
		const { handleFileAccept, handleFileReject } = createUploadHandler(hook, {
			scenario: 'normal',
			duration: 2000 + Math.random() * 3000,
			steps: 20,
		});

		return (
			<div>
				<DsFileUpload
					{...args}
					files={files}
					acceptedFiles={acceptedFiles}
					onFileAccept={handleFileAccept}
					onFileReject={handleFileReject}
					onFileRemove={removeFile}
				/>
			</div>
		);
	},
};

export const Manual: Story = {
	args: {
		showProgress: true,
	},
	render: function Render(args) {
		const {
			files,
			acceptedFiles,
			addFiles,
			addRejectedFiles,
			removeFile,
			updateFileProgress,
			updateFileStatus,
		} = useFileUpload();

		const handleFileAccept = (details: FileUploadFileAcceptDetails) => {
			try {
				addFiles(details.files);
			} catch (error) {
				console.error('File validation failed:', error);
			}
		};

		const handleFileReject = (details: FileUploadFileRejectDetails) => {
			addRejectedFiles(details.files);
		};

		const uploadToS3 = async (file: File, onProgress: (progress: number) => void) => {
			// Simulate S3 upload with progress
			const uploadDuration = 2000 + Math.random() * 3000;
			const steps = 20;
			const stepDuration = uploadDuration / steps;

			for (let i = 0; i <= steps; i++) {
				await new Promise((resolve) => setTimeout(resolve, stepDuration));
				const progress = Math.min((i / steps) * 100, 100);
				onProgress(progress);
			}
		};

		const handleS3Upload = async () => {
			// User's S3 upload logic
			for (const fileState of acceptedFiles) {
				try {
					updateFileStatus(fileState.id, 'uploading');

					await uploadToS3(fileState, (progress) => {
						updateFileProgress(fileState.id, progress);
					});

					updateFileStatus(fileState.id, 'completed');
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'unknown error';
					updateFileStatus(fileState.id, 'error', `Upload failed: ${errorMessage}`);
				}
			}
		};

		return (
			<div>
				<DsFileUpload
					{...args}
					files={files}
					acceptedFiles={acceptedFiles}
					onFileAccept={handleFileAccept}
					onFileReject={handleFileReject}
					onFileRemove={removeFile}
				/>
				{files.length > 0 && (
					<div style={{ marginTop: '16px' }}>
						<button onClick={handleS3Upload}>Upload to S3</button>
					</div>
				)}
			</div>
		);
	},
};

export const Compact: Story = {
	args: {
		style: { width: '500px' },
		compact: true,
		maxFiles: 1,
		dropzoneText: 'Drag and drop your document here or',
		triggerText: 'Choose document',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		style: { width: '300px' },
	},
};

export const UploadError: Story = {
	args: {
		showProgress: true,
	},
	render: function Render(args) {
		const hook = useFileUpload();
		const { files, acceptedFiles, removeFile } = hook;
		const { handleFileAccept, handleFileReject } = createUploadHandler(hook, {
			scenario: 'error',
		});

		return (
			<DsFileUpload
				{...args}
				files={files}
				acceptedFiles={acceptedFiles}
				onFileAccept={handleFileAccept}
				onFileReject={handleFileReject}
				onFileRemove={removeFile}
			/>
		);
	},
	play: createTestPlayFunction('error'),
};

export const UploadInterrupted: Story = {
	args: {
		showProgress: true,
	},
	render: function Render(args) {
		const hook = useFileUpload();
		const { files, acceptedFiles, removeFile } = hook;
		const { handleFileAccept, handleFileReject, handleFileRetry } = createUploadHandler(hook, {
			scenario: 'interrupted',
		});

		return (
			<DsFileUpload
				{...args}
				files={files}
				acceptedFiles={acceptedFiles}
				onFileAccept={handleFileAccept}
				onFileReject={handleFileReject}
				onFileRetry={handleFileRetry}
				onFileDelete={removeFile}
			/>
		);
	},
	play: createTestPlayFunction('interrupted'),
};
