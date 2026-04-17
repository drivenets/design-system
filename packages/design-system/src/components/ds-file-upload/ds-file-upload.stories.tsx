import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsButton } from '../ds-button';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks';
import { MockAdapterPresets } from './stories/adapters/mock-file-upload-adapter';
import { FileUpload } from './components/file-upload';
import DocsPage from './stories/adapters/simple-file-upload-adapter.docs.mdx';

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
	argTypes: {
		errorText: { control: 'text' },
		dropzoneText: { control: 'text' },
		triggerText: { control: 'text' },
		hideProgress: { control: 'boolean' },
		hideInfoText: { control: 'boolean' },
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
						<DsButton variant="primary" size="small" onClick={() => uploadAll()} disabled={isUploading}>
							{isUploading ? 'Uploading...' : 'Upload All'}
						</DsButton>
						<DsButton variant="tertiary" size="small" onClick={() => clearFiles()} disabled={isUploading}>
							Clear All
						</DsButton>
					</div>
				)}
			</div>
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
};

export const MaxFiles: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		maxFiles: 1,
		style: { width: '400px' },
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
};

/**
 * Hidden info text - hides the file type and size limit information
 */
export const HiddenInfoText: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		hideInfoText: true,
		style: { width: '500px' },
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
};
