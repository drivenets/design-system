import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsToastProvider, useToaster } from '../ds-toast-context';
import { DsButton } from '../../ds-button';
import { DsStack } from '../../ds-stack';

describe('DsToast', () => {
	it('renders a toast with actions and dismisses it when an action is clicked', async () => {
		const onAbort = vi.fn();

		const Harness = () => {
			const { createToast, dismissToast } = useToaster();
			const [lastAction, setLastAction] = useState<string>();

			const showToast = () => {
				const id = createToast({
					variant: 'warning',
					title: 'File upload failed',
					description: 'Your file could not be uploaded.',
					persistent: true,
					actions: (
						<DsStack direction="row" gap="var(--xs)">
							<DsButton
								design="v1.2"
								variant="ghost"
								onClick={() => {
									onAbort();
									setLastAction('abort');
									dismissToast(id);
								}}
							>
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
				<>
					<DsButton design="v1.2" variant="filled" onClick={showToast}>
						Show toast
					</DsButton>
					{lastAction && <span data-testid="last-action">{lastAction}</span>}
				</>
			);
		};

		await page.render(
			<DsToastProvider>
				<Harness />
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();

		await expect.element(page.getByText('File upload failed')).toBeVisible();
		await expect.element(page.getByText('Your file could not be uploaded.')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Abort' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Re-try' })).toBeVisible();

		await page.getByRole('button', { name: 'Abort' }).click();

		expect(onAbort).toHaveBeenCalledOnce();
		await expect.element(page.getByTestId('last-action')).toHaveTextContent('abort');
		await expect.element(page.getByText('File upload failed')).not.toBeInTheDocument();
	});

	it('stacks multiple toasts and clears them with Dismiss all', async () => {
		const Harness = () => {
			const { createToast, dismissAllToasts, getToastsCount } = useToaster();
			const [count, setCount] = useState(0);

			useEffect(() => {
				const id = setInterval(() => setCount(getToastsCount()), 50);
				return () => clearInterval(id);
			}, [getToastsCount]);

			const showToasts = () => {
				createToast({ variant: 'success', title: 'First toast', description: 'First message.' });
				createToast({ variant: 'info', title: 'Second toast', description: 'Second message.' });
				createToast({ variant: 'warning', title: 'Third toast', description: 'Third message.' });
			};

			// Toasts render fixed at the top, so keep the controls clear of that overlay
			// to ensure the "Dismiss all" trigger stays clickable while toasts are shown.
			return (
				<div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 9999 }}>
					<DsButton design="v1.2" variant="filled" onClick={showToasts}>
						Show multiple toasts
					</DsButton>
					<DsButton design="v1.2" variant="ghost" onClick={() => dismissAllToasts()}>
						Dismiss all
					</DsButton>
					<span data-testid="toast-count">{count}</span>
				</div>
			);
		};

		await page.render(
			<DsToastProvider>
				<Harness />
			</DsToastProvider>,
		);

		await expect.element(page.getByTestId('toast-count')).toHaveTextContent('0');

		await page.getByRole('button', { name: 'Show multiple toasts' }).click();

		await expect.element(page.getByTestId('toast-count')).toHaveTextContent('3');

		await page.getByRole('button', { name: 'Dismiss all' }).click();

		await expect.element(page.getByTestId('toast-count')).toHaveTextContent('0');
	});
});
