import type { Meta, StoryObj } from '@storybook/react';
import { FileUploadFileAcceptDetails } from '@ark-ui/react';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks/use-file-upload';

const meta: Meta<typeof DsFileUpload> = {
	title: 'Design System/FileUpload',
	component: DsFileUpload,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		helperText: { control: 'text' },
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
		label: 'S3 Upload Example (Auto)',
		helperText: 'This shows automatic S3 upload integration - uploads start immediately',
		showProgress: true,
	},
	render: function Render(args) {
		const { files, addFiles, removeFile, updateFileProgress, updateFileStatus } = useFileUpload();

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

		const handleFileAccept = async (details: FileUploadFileAcceptDetails) => {
			try {
				// Add files to state and get the file states back
				const newFileStates = addFiles(details.files);

				// Start upload immediately for each new file
				for (const fileState of newFileStates) {
					try {
						updateFileStatus(fileState.id, 'uploading');

						await uploadToS3(fileState.file, (progress) => {
							updateFileProgress(fileState.id, progress);
						});

						updateFileStatus(fileState.id, 'completed');
					} catch (error) {
						const errorMessage = error instanceof Error ? error.message : 'unknown error';
						updateFileStatus(fileState.id, 'error', `Upload failed: ${errorMessage}`);
					}
				}
			} catch (error) {
				console.error('File validation failed:', error);
			}
		};

		return (
			<div>
				<DsFileUpload {...args} files={files} onFileAccept={handleFileAccept} onRemove={removeFile} />
			</div>
		);
	},
};

export const Manual: Story = {
	args: {
		label: 'S3 Upload Example (Manual)',
		helperText: 'This shows manual S3 upload integration with upload button',
		showProgress: true,
	},
	render: function Render(args) {
		const { files, addFiles, removeFile, updateFileProgress, updateFileStatus } = useFileUpload();

		const handleFileAccept = (details: FileUploadFileAcceptDetails) => {
			try {
				addFiles(details.files);
			} catch (error) {
				console.error('File validation failed:', error);
			}
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
			for (const fileState of files) {
				try {
					updateFileStatus(fileState.id, 'uploading');

					await uploadToS3(fileState.file, (progress) => {
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
				<DsFileUpload {...args} files={files} onFileAccept={handleFileAccept} onRemove={removeFile} />
				{files.length > 0 && (
					<div style={{ marginTop: '16px' }}>
						<button onClick={handleS3Upload}>Upload to S3</button>
					</div>
				)}
			</div>
		);
	},
};

export const SingleFile: Story = {
	args: {
		label: 'Upload Document',
		helperText: 'Choose a single document file',
		maxFiles: 1,
		dropzoneText: 'Drop your document here',
		triggerText: 'Choose document',
	},
};

export const WithError: Story = {
	args: {
		label: 'Upload Files',
		errorText: 'File size exceeds the maximum limit of 25MB',
		hasError: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Upload Files',
		helperText: 'File upload is currently disabled',
		disabled: true,
	},
};
/*
export const NoDropzone: Story = {
	args: {
		label: 'Upload Files (Click only)',
		helperText: 'Drag and drop is disabled, click to select files',
		allowDrop: false,
		dropzoneText: 'Click to select files',
	},
};
*/
/*
export const Interactive: Story = {
	args: {
		label: 'Interactive Upload',
		helperText: 'Try uploading files',
		maxFiles: 3,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for the component to be rendered
		await waitFor(() => {
			expect(canvas.getByText('Interactive Upload')).toBeInTheDocument();
		});

		// Find and click the trigger button
		const trigger = canvas.getByRole('button', { name: /choose files/i });
		await userEvent.click(trigger);

		// Verify the hidden input exists (file selection would happen here in real usage)
		const hiddenInput = canvasElement.querySelector('input[type="file"]');
		expect(hiddenInput).toBeInTheDocument();
	},
};
*/
