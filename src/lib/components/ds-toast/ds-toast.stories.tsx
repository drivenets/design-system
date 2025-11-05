import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode, useState } from 'react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { DsToast } from './ds-toast';
import { DsToastProvider, useToaster } from './ds-toast-context';
import { DsButton } from '../ds-button';
import { DsToastProps, ToastVariant, toastVariants } from './ds-toast.types';
import styles from './ds-toast.stories.module.scss';

const meta: Meta<typeof DsToast> = {
	title: 'Design System/Toast',
	component: DsToast,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A toast component for displaying temporary messages with different variants and actions.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: toastVariants,
			description: 'The visual variant of the toast',
		},
		title: {
			control: { type: 'text' },
			description: 'The title of the toast',
		},
		description: {
			control: { type: 'text' },
			description: 'The description text of the toast',
		},
		persistent: {
			control: { type: 'boolean' },
			description: 'Whether the toast should persist until manually dismissed',
		},
		duration: {
			control: { type: 'number' },
			description: 'Duration in milliseconds before auto-dismiss (ignored if persistent is true)',
		},
		onDismiss: {
			control: false,
			description: 'Callback function called when the toast is dismissed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsToast>;

const ToastDemo = ({
	variant,
	title,
	description,
	persistent,
	actions,
}: {
	variant: ToastVariant;
	title?: string;
	description: string;
	persistent?: boolean;
	actions?: ReactNode;
}) => {
	const { createToast } = useToaster();

	const showToast = () => {
		createToast({
			variant,
			title,
			description,
			persistent,
			actions,
		});
	};

	return (
		<div className={styles.demoContainer}>
			<h3>{variant.charAt(0).toUpperCase() + variant.slice(1)} Toast</h3>
			<DsButton design="v1.2" onClick={showToast} variant="filled">
				Show {variant.charAt(0).toUpperCase() + variant.slice(1)} Toast
			</DsButton>
		</div>
	);
};

export const Success: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo variant="success" title="Success!" description="Your action was completed successfully." />
		</DsToastProvider>
	),
};

export const Info: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo variant="info" title="Information" description="Here is some helpful information for you." />
		</DsToastProvider>
	),
};

export const Warning: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo variant="warning" title="Warning" description="Please be aware of this important notice." />
		</DsToastProvider>
	),
};

export const WarningNoTitle: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo variant="warning" description="Something went wrong. Please try again." persistent />
		</DsToastProvider>
	),
};

export const WarningNoTitleAction: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo
				variant="warning"
				description="Something went wrong. Please try again."
				actions={
					<DsButton design="v1.2" variant="danger">
						Restart
					</DsButton>
				}
				persistent
			></ToastDemo>
		</DsToastProvider>
	),
};

export const WarningWithActions: Story = {
	render: () => {
		const WithActionsDemo = () => {
			const { createToast, dismissToast } = useToaster();
			const [action, setAction] = useState<string>();

			const showToastWithAction = () => {
				const toastId = createToast({
					title: 'File upload failed',
					description: 'Your file could not be uploaded.',
					variant: 'warning',
					actions: (
						<div className={styles.actionButtonsContainer}>
							<DsButton
								data-testid="abort-button"
								design="v1.2"
								onClick={() => {
									setAction('abort');
									dismissToast(toastId);
								}}
								variant="ghost"
							>
								Abort
							</DsButton>
							<DsButton
								data-testid="retry-button"
								design="v1.2"
								onClick={() => {
									setAction('retry');
									dismissToast(toastId);
								}}
								variant="danger"
							>
								Re-try
							</DsButton>
						</div>
					),
					persistent: true, // No auto-dismiss
				});
			};

			return (
				<div className={styles.demoContainer}>
					<h3>Toast with Action</h3>
					<DsButton
						data-testid="show-toast-button"
						design="v1.2"
						onClick={showToastWithAction}
						variant="filled"
					>
						Show Toast with Actions
					</DsButton>
					{action && <p data-testid="action-result">{action}</p>}
				</div>
			);
		};

		return (
			<DsToastProvider>
				<WithActionsDemo />
			</DsToastProvider>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test toast creation with actions
		await userEvent.click(canvas.getByTestId('show-toast-button'));

		// Wait for toast to appear and verify content
		await waitFor(() => {
			expect(canvas.getByText('File upload failed')).toBeInTheDocument();
			expect(canvas.getByText('Your file could not be uploaded.')).toBeInTheDocument();
		});

		// Verify action buttons are present
		await expect(canvas.getByTestId('abort-button')).toBeInTheDocument();
		await expect(canvas.getByTestId('retry-button')).toBeInTheDocument();

		// Test abort button functionality
		await userEvent.click(canvas.getByTestId('abort-button'));

		// Verify toast is dismissed and action is recorded
		await waitFor(() => {
			expect(canvas.getByTestId('action-result')).toHaveTextContent('abort');
		});

		// Wait a bit to ensure toast is dismissed
		await waitFor(
			() => {
				expect(canvas.queryByText('File upload failed')).not.toBeInTheDocument();
			},
			{ timeout: 1000 },
		);
	},
};

export const Error: Story = {
	render: () => (
		<DsToastProvider>
			<ToastDemo
				variant="error"
				title="Error"
				description="Something went wrong. Please try again."
				persistent // No auto-dismiss
			/>
		</DsToastProvider>
	),
};

export const LongContent: Story = {
	render: () => {
		const LongContentDemo = () => {
			const { createToast } = useToaster();

			const showLongToast = () => {
				createToast({
					title: 'Important Notice',
					description:
						'This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.',
					variant: 'warning',
					duration: 8000,
				});
			};

			return (
				<div className={styles.demoContainer}>
					<h3>Long Content Toast</h3>
					<DsButton design="v1.2" onClick={showLongToast} variant="filled">
						Show Long Content Toast
					</DsButton>
				</div>
			);
		};

		return (
			<DsToastProvider>
				<LongContentDemo />
			</DsToastProvider>
		);
	},
};

const MultipleToastsDemo = () => {
	const { createToast, dismissAllToasts, getToastsCount } = useToaster();
	const [count, setCount] = useState(getToastsCount());

	const createToastWithDelay = (toast: DsToastProps, delay: number = 0) => {
		setTimeout(() => {
			createToast(toast);
			setCount(getToastsCount());
		}, delay);
	};

	const dismissAllVisibleToasts = () => {
		dismissAllToasts();
		setTimeout(() => {
			setCount(getToastsCount());
		}, 500);
	};

	const createMultipleToasts = () => {
		createToastWithDelay({
			variant: 'success',
			title: 'First Toast',
			description: 'This is the first toast message.',
		});

		createToastWithDelay(
			{
				variant: 'info',
				title: 'Second Toast',
				description: 'This is the second toast message.',
			},
			500,
		);

		createToastWithDelay(
			{
				variant: 'warning',
				title: 'Third Toast',
				description: 'This is the third toast message.',
			},
			1000,
		);
	};

	return (
		<div className={styles.demoContainer}>
			<h3>Multiple Toasts Demo</h3>
			<div className={styles.buttonGroup}>
				<DsButton
					data-testid="create-multiple-button"
					design="v1.2"
					onClick={createMultipleToasts}
					variant="filled"
				>
					Create Multiple Toasts
				</DsButton>
				<DsButton
					design="v1.2"
					onClick={dismissAllVisibleToasts}
					variant="ghost"
					data-testid="dismiss-all-button"
				>
					Dismiss All
				</DsButton>
			</div>
			Count: <span data-testid="toast-count">{count}</span>
		</div>
	);
};

export const MultipleToasts: Story = {
	render: () => (
		<DsToastProvider>
			<MultipleToastsDemo />
		</DsToastProvider>
	),
	parameters: {
		docs: {
			description: {
				story: 'Demo showing multiple toasts stacked together with dismiss all functionality.',
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Verify initial state
		await expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');

		// Test creating multiple toasts
		await userEvent.click(canvas.getByTestId('create-multiple-button'));

		// First toast should appear immediately
		await waitFor(() => {
			expect(canvas.getByText('First Toast')).toBeInTheDocument();
		});

		// Wait for second toast (500ms delay)
		await waitFor(
			() => {
				expect(canvas.getByText('Second Toast')).toBeInTheDocument();
			},
			{ timeout: 1000 },
		);

		// Wait for third toast (1000ms delay)
		await waitFor(
			() => {
				expect(canvas.getByText('Third Toast')).toBeInTheDocument();
			},
			{ timeout: 1500 },
		);

		// Verify all toasts are visible
		await expect(canvas.getByText('First Toast')).toBeInTheDocument();
		await expect(canvas.getByText('Second Toast')).toBeInTheDocument();
		await expect(canvas.getByText('Third Toast')).toBeInTheDocument();

		// Verify count shows 3 toasts
		await expect(canvas.getByTestId('toast-count')).toHaveTextContent('3');

		// Test dismiss all functionality
		await userEvent.click(canvas.getByTestId('dismiss-all-button'));

		// Verify all toasts are dismissed
		await waitFor(() => {
			expect(canvas.queryByText('First Toast')).not.toBeInTheDocument();
			expect(canvas.queryByText('Second Toast')).not.toBeInTheDocument();
			expect(canvas.queryByText('Third Toast')).not.toBeInTheDocument();
		});

		// Verify count is back to 0
		await waitFor(
			() => {
				expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');
			},
			{ timeout: 1000 },
		);
	},
};
