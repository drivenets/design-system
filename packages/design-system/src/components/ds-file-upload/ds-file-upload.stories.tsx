import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsButton } from '../ds-button';
import { DsStack } from '../ds-stack';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks';
import { MockAdapterPresets } from './stories/adapters/mock-file-upload-adapter';
import { FileUpload } from './components/file-upload';
import DocsPage from './stories/adapters/simple-file-upload-adapter.docs.mdx';

const meta: Meta<typeof DsFileUpload> = {
	title: 'Components/FileUpload',
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
	decorators: [
		(Story) => (
			<DsStack width="31.25rem">
				<Story />
			</DsStack>
		),
	],
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
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFileUpload>;

/**
 * Default auto-upload behavior: files upload as soon as they are dropped or
 * selected. Provide an `adapter` to connect the component to your upload
 * backend; the `onFile*` callbacks report progress and lifecycle events.
 */
export const Default: Story = {
	args: {
		adapter: MockAdapterPresets.normal(),
	},
};

/**
 * Manual upload mode (`autoUpload={false}`): files wait until the user triggers
 * the upload. This advanced example composes the base `FileUpload` with the
 * `useFileUpload` hook to drive "Upload all" and "Clear all" actions.
 */
export const Manual: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		autoUpload: false,
		hideProgress: false,
	},
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render(args) {
		const { getProps, files, uploadAll, clearFiles } = useFileUpload({
			adapter: args.adapter,
			autoUpload: args.autoUpload,
		});

		const isUploading = files.some((file) => file.status === 'uploading');
		const hasFiles = files.length > 0;

		return (
			<DsStack direction="column" gap="var(--sm)">
				<FileUpload {...getProps()} {...args} />
				{hasFiles && (
					<DsStack gap="var(--2xs)">
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
					</DsStack>
				)}
			</DsStack>
		);
	},
};

/**
 * Compact layout for tight spaces, limited to a single file and a restricted set
 * of document types via `accept`.
 */
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
	},
};

/**
 * Disabled state — the dropzone and trigger cannot be interacted with.
 */
export const Disabled: Story = {
	args: {
		adapter: MockAdapterPresets.normal(),
		disabled: true,
	},
};

/**
 * Upload error scenario where a file fails validation immediately, showing the
 * error state and message.
 */
export const UploadError: Story = {
	args: {
		adapter: MockAdapterPresets.error('Unsupported file type'),
	},
};

/**
 * Interrupted upload where the network fails mid-transfer, surfacing the retry
 * affordance.
 */
export const UploadInterrupted: Story = {
	args: {
		adapter: MockAdapterPresets.interrupted(30),
	},
};

/**
 * Limit the number of files with `maxFiles`.
 */
export const MaxFiles: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		maxFiles: 1,
	},
};

/**
 * Duplicate detection: uploading the same file twice raises a `FILE_EXISTS`
 * error instead of adding a second entry.
 */
export const DuplicateFiles: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
	},
};

/**
 * Hide the file-type and size-limit hint with `hideInfoText`.
 */
export const HiddenInfoText: Story = {
	args: {
		adapter: MockAdapterPresets.fast(),
		hideInfoText: true,
	},
};

/**
 * Cancel an in-progress upload, demonstrating the cancellation flow with a slow
 * adapter.
 */
export const CancelUpload: Story = {
	args: {
		adapter: MockAdapterPresets.slow(),
	},
};
