import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import DsButton from '../ds-button/ds-button';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks/use-file-upload';
import { createTestPlayFunction, getMockFile } from './ds-file-upload.stories.util';
import { MockAdapterPresets } from './stories/adapters/mock-file-upload-adapter';
import { FileUpload } from './components/file-upload';
import DocsPage from './stories/adapters/simple-file-upload-adapter.docs.mdx';
import type { FileMetadata } from './ds-file-upload-api.types';

const meta: Meta<typeof DsFileUpload> = {
	title: 'Design System/FileUpload',
	component: DsFileUpload,
	parameters: {
		layout: 'centered',
		docs: {
			page: DocsPage,
			source: {
				code: `
const adapter = getSimpleFileUploadAdapter('/api/upload');

return (
	<DsFileUpload
		adapter={adapter}
		onFilesAdded={(files) => console.log('Files added:', files.map((f) => f.name))}
		onFileUploadComplete={(fileId, result) => console.log('File upload complete:', fileId, result.url)}
		onFileUploadError={(fileId, error) => console.error('File upload failed:', fileId, error)}
		onFileRemoved={(fileId) => console.log('File removed:', fileId)}
		onFileDeleted={(fileId) => console.log('File deleted:', fileId)}
		onFileUploadCanceled={(fileId) => console.log('File upload canceled:', fileId)}
		onFileUploadRetried={(fileId) => console.log('File upload retried:', fileId)}
		onAllFileUploadsComplete={() => console.log('All file uploads complete!')}
	/>
);`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		errorText: { control: 'text' },
		dropzoneText: { control: 'text' },
		triggerText: { control: 'text' },
		hideProgress: { control: 'boolean' },
		disableDrop: { control: 'boolean' },
		maxFiles: { control: 'number' },
		accept: { control: 'object' },
		disabled: { control: 'boolean' },
		compact: { control: 'boolean' },
	},
};

export default meta;
type Story = StoryObj<typeof DsFileUpload>;

/**
 * Default auto-upload behavior
 * Files automatically upload when dropped or selected
 */
export const Default: Story = {
	args: {
		adapter: MockAdapterPresets.normal(),
		style: { width: '500px' },
		onFilesAdded: (files) => {
			console.log(
				'Files added:',
				files.map((f) => f.name),
			);
		},
		onFileUploadComplete: (fileId, result) => {
			console.log('File upload complete:', fileId, result.url);
		},
		onFileUploadError: (fileId, error) => {
			console.error('File upload failed:', fileId, error);
		},
		onFileRemoved: (fileId) => {
			console.log('File removed:', fileId);
		},
		onFileDeleted: (fileId) => {
			console.log('File deleted:', fileId);
		},
		onFileUploadCanceled: (fileId) => {
			console.log('File upload canceled:', fileId);
		},
		onFileUploadRetried: (fileId) => {
			console.log('File upload retried:', fileId);
		},
		onAllFileUploadsComplete: () => {
			console.log('All file uploads complete!');
		},
	},
};

/**
 * Manual upload mode - files must be uploaded manually
 * Good for review workflows or batch operations
 * Advance use case which demonstrates use of (base) FileUpload with useFileUpload
 */
export const Manual: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		autoUpload: false,
		hideProgress: false,
		style: { width: '500px' },
		onFilesAdded: fn(),
		onFileUploadComplete: fn(),
		onAllFileUploadsComplete: fn(),
	},
	render: function Render(args) {
		const { getProps, files, uploadAll, clearFiles } = useFileUpload({
			adapter: args.adapter,
			autoUpload: args.autoUpload,
			onFileUploadComplete: args.onFileUploadComplete,
			onAllFileUploadsComplete: args.onAllFileUploadsComplete,
		});

		const isUploading = files.some((file) => file.status === 'uploading');
		const hasFiles = files.length > 0;

		return (
			<div style={{ width: '500px' }}>
				<FileUpload {...getProps({ onFilesAdded: args.onFilesAdded })} {...args} />

				{hasFiles && (
					<div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
						<DsButton design="v1.2" size="small" onClick={() => uploadAll()} disabled={isUploading}>
							{isUploading ? 'Uploading...' : 'Upload All'}
						</DsButton>
						<DsButton
							design="v1.2"
							variant="ghost"
							size="small"
							onClick={() => clearFiles()}
							disabled={isUploading}
						>
							Clear All
						</DsButton>
					</div>
				)}
			</div>
		);
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const file1 = getMockFile({ name: 'document-1.pdf' });
		const file2 = getMockFile({ name: 'document-2.pdf' });

		const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
		if (!fileInput) {
			throw new Error('File input not found');
		}

		// Upload 2 files at once
		await userEvent.upload(fileInput, [file1, file2]);

		// Wait for files to appear in the list (they should be pending)
		await waitFor(async () => {
			await expect(canvas.getByText(file1.name)).toBeInTheDocument();
			await expect(canvas.getByText(file2.name)).toBeInTheDocument();
		});

		// Find and click "Upload All" button
		const uploadAllButton = canvas.getByRole('button', { name: /upload all/i });
		await userEvent.click(uploadAllButton);

		// Wait for all uploads to complete
		await waitFor(
			async () => {
				const completeTexts = canvas.queryAllByText(/complete/i);
				await expect(completeTexts.length).toBe(2);

				await expect(args.onFileUploadComplete).toHaveBeenCalledWith(
					expect.any(String),
					expect.objectContaining({
						metadata: expect.objectContaining({
							fileName: file1.name,
						}) as FileMetadata,
					}),
				);
				await expect(args.onFileUploadComplete).toHaveBeenCalledWith(
					expect.any(String),
					expect.objectContaining({
						metadata: expect.objectContaining({
							fileName: file2.name,
						}) as FileMetadata,
					}),
				);

				await expect(args.onAllFileUploadsComplete).toHaveBeenCalled();
			},
			{ timeout: 10000 },
		);
	},
};

export const Compact: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		compact: true,
		maxFiles: 1,
		accept: [
			'application/pdf',
			'text/csv',
			{
				// cspell:disable-next-line
				mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				extensions: ['.xlsx'],
			},
		],
		dropzoneText: 'Drag and drop your document here or',
		triggerText: 'Choose document',
		style: { width: '400px' },
		onFilesAdded: fn(),
	},
};

/**
 * Disabled state
 */
export const Disabled: Story = {
	args: {
		adapter: MockAdapterPresets.normal(),
		disabled: true,
		style: { width: '500px' },
	},
};

/**
 * Upload error scenario - file fails validation immediately
 */
export const UploadError: Story = {
	args: {
		adapter: MockAdapterPresets.error('Unsupported file type'),
		style: { width: '500px' },
	},
	play: createTestPlayFunction('error'),
};

/**
 * Upload interrupted scenario - network fails mid-upload
 * Demonstrates retry functionality
 */
export const UploadInterrupted: Story = {
	args: {
		adapter: MockAdapterPresets.interrupted(30),
		style: { width: '500px' },
	},
	play: createTestPlayFunction('interrupted'),
};

export const MaxFiles: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		maxFiles: 1,
		style: { width: '400px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const file1 = getMockFile({ name: 'first-file.pdf' });
		const file2 = getMockFile({ name: 'second-file.pdf' });

		const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
		if (!fileInput) {
			throw new Error('File input not found');
		}

		// Upload first file
		await userEvent.upload(fileInput, file1);

		// Wait for first file to complete
		await waitFor(
			async () => {
				await expect(canvas.getByText('first-file.pdf')).toBeInTheDocument();
				await expect(canvas.queryByText(/complete/i)).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);

		// Attempt to upload second file (should be rejected due to maxFiles: 1)
		await userEvent.upload(fileInput, file2);

		// Wait for rejection error to appear
		await waitFor(async () => {
			await expect(canvas.getByText('second-file.pdf')).toBeInTheDocument();
			// Check for TOO_MANY_FILES error message
			const errorMessages = canvas.queryAllByText(/too many files|maximum|limit/i);
			return expect(errorMessages.length).toBeGreaterThan(0);
		});
	},
};

/**
 * Duplicate files scenario - uploading the same file twice
 * Demonstrates duplicate detection and FILE_EXISTS error
 */
export const DuplicateFiles: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		style: { width: '500px' },
		onFilesAdded: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const mockFile = getMockFile({ name: 'duplicate-test.pdf' });

		const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
		if (!fileInput) {
			throw new Error('File input not found');
		}

		// Upload first time
		await userEvent.upload(fileInput, mockFile);

		// Wait for upload to complete
		await waitFor(
			async () => {
				await expect(canvas.getByText('duplicate-test.pdf')).toBeInTheDocument();
				await expect(canvas.queryByText(/complete/i)).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);

		// Upload duplicate
		await userEvent.upload(fileInput, mockFile);

		// Wait for duplicate error to appear
		await waitFor(async () => {
			const allFileNames = canvas.queryAllByText('duplicate-test.pdf');
			// Should have 2 instances: one completed, one with error
			await expect(allFileNames.length).toBe(2);

			// Check for FILE_EXISTS error
			const errorMessages = canvas.queryAllByText(/already exists|file exists|duplicate/i);
			return expect(errorMessages.length).toBeGreaterThan(0);
		});
	},
};

/**
 * Cancel upload scenario - cancel an ongoing upload
 * Demonstrates upload cancellation functionality
 */
export const CancelUpload: Story = {
	args: {
		adapter: MockAdapterPresets.slow(),
		style: { width: '500px' },
		onFileUploadCanceled: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const mockFile = getMockFile({ name: 'cancel-test.pdf' });

		const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
		if (!fileInput) {
			throw new Error('File input not found');
		}

		// Upload file
		await userEvent.upload(fileInput, mockFile);

		// Wait for upload to start and reach some progress
		await waitFor(
			async () => {
				await expect(canvas.getByText('cancel-test.pdf')).toBeInTheDocument();
				await expect(canvas.queryByText(/uploading/i)).toBeInTheDocument();
			},
			{ timeout: 1000 },
		);

		// Wait a bit for progress
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Click cancel button
		const cancelButton = canvas.getByLabelText(/cancel/i);
		await userEvent.click(cancelButton);

		// Wait for cancelled status
		await waitFor(
			async () => {
				await expect(canvas.queryByText(/cancelled|canceled/i)).toBeInTheDocument();
			},
			{ timeout: 2000 },
		);
	},
};
