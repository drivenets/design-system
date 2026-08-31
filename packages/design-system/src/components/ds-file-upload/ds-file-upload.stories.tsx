import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo } from 'react';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';
import DsFileUpload from './ds-file-upload';
import { useFileUpload } from './hooks';
import { MockAdapterPresets } from './stories/adapters/mock-file-upload-adapter';
import { FileUpload } from './components/file-upload';
import adapterExampleCode from './stories/adapters/simple-file-upload-adapter.ts?raw';

const meta: Meta<typeof DsFileUpload> = {
	title: 'Components/FileUpload',
	component: DsFileUpload,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: [
					'Provide an `adapter` that implements the `FileUploadAdapter` interface — a single',
					'`upload(options): Promise<FileUploadResult>` method — to connect the component to your',
					'upload backend. Create the adapter once and pass it in:',
					'',
					'```tsx',
					"const adapter = getSimpleFileUploadAdapter('/api/upload');",
					'',
					'<DsFileUpload adapter={adapter} />;',
					'```',
					'',
					'`getSimpleFileUploadAdapter` below is a ready-to-copy implementation using the native',
					'[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API',
					'(fetch, axios, or any other transport works too).',
					'',
					'> The stories on this page pass an in-memory mock adapter so uploads run without a real',
					'> backend. In your app, use a real adapter like the one below.',
					'',
					'## Example FileUploadAdapter',
					'',
					'```ts',
					adapterExampleCode.trim(),
					'```',
				].join('\n'),
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
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.normal()} />,
};

/**
 * Manual upload mode (`autoUpload={false}`): files wait until the user triggers
 * the upload. This advanced example composes the base `FileUpload` with the
 * `useFileUpload` hook to drive "Upload all" and "Clear all" actions.
 */
export const Manual: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const adapter = useMemo(() => MockAdapterPresets.fast(), []);
		const { getProps, files, uploadAll, clearFiles } = useFileUpload({ adapter, autoUpload: false });

		const isUploading = files.some((file) => file.status === 'uploading');
		const hasFiles = files.length > 0;

		return (
			<DsStack direction="column" gap="var(--sm)">
				<FileUpload {...getProps()} hideProgress={false} />
				{hasFiles && (
					<DsStack gap="var(--2xs)">
						<DsButtonV3 variant="primary" size="small" onClick={() => uploadAll()} disabled={isUploading}>
							{isUploading ? 'Uploading...' : 'Upload All'}
						</DsButtonV3>
						<DsButtonV3 variant="tertiary" size="small" onClick={() => clearFiles()} disabled={isUploading}>
							Clear All
						</DsButtonV3>
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
	parameters: { docs: { source: { type: 'code' } } },
	render: () => (
		<DsFileUpload
			adapter={MockAdapterPresets.fast()}
			compact
			maxFiles={1}
			accept={[
				'application/pdf',
				'text/csv',
				{
					mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					extensions: ['.xlsx'],
				},
			]}
			dropzoneText="Drag and drop your document here or"
			triggerText="Choose document"
		/>
	),
};

/**
 * Disabled state — the dropzone and trigger cannot be interacted with.
 */
export const Disabled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.normal()} disabled />,
};

/**
 * Upload error scenario where a file fails validation immediately, showing the
 * error state and message.
 */
export const UploadError: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.error('Unsupported file type')} />,
};

/**
 * Interrupted upload where the network fails mid-transfer, surfacing the retry
 * affordance.
 */
export const UploadInterrupted: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.interrupted(30)} />,
};

/**
 * Limit the number of files with `maxFiles`.
 */
export const MaxFiles: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} maxFiles={1} />,
};

/**
 * Duplicate detection: uploading the same file twice raises a `FILE_EXISTS`
 * error instead of adding a second entry.
 */
export const DuplicateFiles: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} />,
};

/**
 * Hide the file-type and size-limit hint with `hideInfoText`.
 */
export const HiddenInfoText: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} hideInfoText />,
};

/**
 * Cancel an in-progress upload, demonstrating the cancellation flow with a slow
 * adapter.
 */
export const CancelUpload: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => <DsFileUpload adapter={MockAdapterPresets.slow()} />,
};
