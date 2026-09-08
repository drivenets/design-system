import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsToast } from './ds-toast';
import { DsToastProvider, useToaster } from './ds-toast-context';
import { toastVariants } from './ds-toast.types';
import { DsButton } from '../ds-button';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsToast> = {
	title: 'Components/Toast',
	component: DsToast,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. ' +
					'Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: toastVariants,
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsToast>;

/**
 * Confirms an action completed. Auto-dismisses after the default duration.
 */
export const Success: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'success',
							title: 'Success!',
							description: 'Your action was completed successfully.',
						})
					}
				>
					Show success toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Neutral, informational message.
 */
export const Info: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'info',
							title: 'Information',
							description: 'Here is some helpful information for you.',
						})
					}
				>
					Show info toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Draws attention to something that may need action but is not an error.
 */
export const Warning: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'warning',
							title: 'Warning',
							description: 'Please be aware of this important notice.',
						})
					}
				>
					Show warning toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Reports a failure. Errors are usually persistent so the user can read and act on them.
 */
export const Error: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'error',
							title: 'Error',
							description: 'Something went wrong. Please try again.',
							persistent: true,
						})
					}
				>
					Show error toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Omit `title` for a compact, single-line toast that shows only the description.
 */
export const NoTitle: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'warning',
							description: 'Something went wrong. Please try again.',
						})
					}
				>
					Show toast without title
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Pass `actions` to render buttons inside the toast. Action handlers typically dismiss the
 * toast with `dismissToast(id)` — pair actions with `persistent` so the toast waits for a choice.
 */
export const WithActions: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast, dismissToast } = useToaster();

			const showToast = () => {
				const id = createToast({
					variant: 'warning',
					title: 'File upload failed',
					description: 'Your file could not be uploaded.',
					persistent: true,
					actions: (
						<DsStack direction="row" gap="var(--xs)" justifyContent="flex-end">
							<DsButton design="v1.2" variant="ghost" onClick={() => dismissToast(id)}>
								Abort
							</DsButton>
							<DsButton design="v1.2" variant="danger" onClick={() => dismissToast(id)}>
								Re-try
							</DsButton>
						</DsStack>
					),
				});
			};

			return (
				<DsButton design="v1.2" variant="filled" onClick={showToast}>
					Show toast with actions
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Long descriptions wrap and the toast grows to fit while staying within its max width.
 */
export const LongContent: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'warning',
							title: 'Important notice',
							description:
								'This is a longer message that demonstrates how the toast handles extended content. ' +
								'The text wraps and stays readable while remaining within the toast boundaries.',
						})
					}
				>
					Show long content toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Set `persistent` to keep a toast open until the user dismisses it. Persistent toasts never
 * auto-dismiss, so they cannot also set `duration`.
 */
export const Persistent: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast } = useToaster();

			return (
				<DsButton
					design="v1.2"
					variant="filled"
					onClick={() =>
						createToast({
							variant: 'info',
							title: 'Sync in progress',
							description: 'This toast stays until you close it.',
							persistent: true,
						})
					}
				>
					Show persistent toast
				</DsButton>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};

/**
 * Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.
 */
export const MultipleToasts: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const ToastTrigger = () => {
			const { createToast, dismissAllToasts } = useToaster();

			const showToasts = () => {
				createToast({ variant: 'success', title: 'First toast', description: 'This is the first message.' });
				createToast({ variant: 'info', title: 'Second toast', description: 'This is the second message.' });
				createToast({ variant: 'warning', title: 'Third toast', description: 'This is the third message.' });
			};

			return (
				<DsStack direction="row" gap="var(--xs)">
					<DsButton design="v1.2" variant="filled" onClick={showToasts}>
						Show multiple toasts
					</DsButton>
					<DsButton design="v1.2" variant="ghost" onClick={() => dismissAllToasts()}>
						Dismiss all
					</DsButton>
				</DsStack>
			);
		};

		return (
			<DsToastProvider>
				<ToastTrigger />
			</DsToastProvider>
		);
	},
};
