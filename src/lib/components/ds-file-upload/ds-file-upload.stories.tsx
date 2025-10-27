import type { Meta, StoryObj } from '@storybook/react';
import DsButton from '../ds-button/ds-button';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks/use-file-upload';
import { createTestPlayFunction } from './ds-file-upload.stories.util';
import { MockAdapterPresets } from './adapters/mock-file-upload-adapter';
import { FileUpload } from './components/file-upload';

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
		autoUpload: true,
		showProgress: true,
		onFilesAdded: (files) => {
			console.log(
				'📁 Files added:',
				files.map((f) => f.name),
			);
		},
		onUploadComplete: (fileId, result) => {
			console.log('✅ Upload complete:', fileId, result.url);
		},
		onUploadError: (fileId, error) => {
			console.error('❌ Upload failed:', fileId, error);
		},
		onFileRemoved: (fileId) => {
			console.log('🗑️ File removed:', fileId);
		},
		onAllUploadsComplete: () => {
			console.log('🎉 All uploads complete!');
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
		adapter: MockAdapterPresets.normal(),
		autoUpload: false,
		showProgress: true,
		style: { width: '500px' },
	},
	render: function Render(args) {
		const fileUpload = useFileUpload({
			adapter: MockAdapterPresets.normal(),
			autoUpload: false, // Manual upload
		});

		return (
			<div style={{ width: '500px' }}>
				<FileUpload
					{...args}
					files={fileUpload.files}
					acceptedFiles={fileUpload.acceptedFiles}
					onFileAccept={(details) => fileUpload.addFiles(details.files)}
					onFileReject={(details) =>
						fileUpload.addRejectedFiles(
							details.files.map((f) => ({
								file: f.file,
								errors: f.errors,
							})),
						)
					}
					onFileRemove={(fileId) => fileUpload.removeFile(fileId)}
				/>

				{fileUpload.hasFiles && (
					<div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
						<DsButton
							design="v1.2"
							size="small"
							onClick={() => fileUpload.uploadAll()}
							disabled={fileUpload.isUploading}
						>
							{fileUpload.isUploading ? 'Uploading...' : 'Upload All'}
						</DsButton>
						<DsButton
							design="v1.2"
							variant="ghost"
							size="small"
							onClick={() => fileUpload.clearFiles()}
							disabled={fileUpload.isUploading}
						>
							Clear All
						</DsButton>
					</div>
				)}
			</div>
		);
	},
};

/**
 * Compact mode for inline or constrained layouts
 */
export const Compact: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		autoUpload: true,
		compact: true,
		maxFiles: 1,
		showProgress: true,
		dropzoneText: 'Drag and drop your document here or',
		triggerText: 'Choose document',
		style: { width: '400px' },
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
		autoUpload: true,
		showProgress: true,
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
		autoUpload: true,
		showProgress: true,
		style: { width: '500px' },
	},
	play: createTestPlayFunction('interrupted'),
};
