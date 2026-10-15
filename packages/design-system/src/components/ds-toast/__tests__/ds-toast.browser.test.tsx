import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsToastProvider, useToaster } from '../ds-toast-context';
import { DsButton } from '../../ds-button';
import { DsStack } from '../../ds-stack';
import type { DsToastProps } from '../ds-toast.types';

const LONG_DESCRIPTION =
	'Template render failed: GetRelatedNode returned no match for the requested node. '.repeat(40);

const ToastTrigger = (props: DsToastProps) => {
	const { createToast } = useToaster();

	return (
		<DsButton design="v1.2" variant="filled" onClick={() => createToast(props)}>
			Show toast
		</DsButton>
	);
};

const getPart = (part: string) =>
	document.querySelector<HTMLElement>(`[data-scope="toast"][data-part="${part}"]`);

const isInViewportHeight = (el: HTMLElement | null) => {
	if (!el) {
		return false;
	}

	const rect = el.getBoundingClientRect();

	return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

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

	describe.each([
		{ name: 'desktop', width: 1280, height: 720 },
		{ name: 'mobile', width: 375, height: 667 },
	])('long description ($name)', ({ width, height }) => {
		it('should keep the toast and close button inside the viewport', async () => {
			await page.viewport(width, height);
			await page.render(
				<DsToastProvider>
					<ToastTrigger variant="error" title="Error" description={LONG_DESCRIPTION} persistent />
				</DsToastProvider>,
			);

			await page.getByRole('button', { name: 'Show toast' }).click();

			await expect.poll(() => getPart('root')?.dataset.state).toBe('open');
			await expect.poll(() => isInViewportHeight(getPart('root'))).toBe(true);
			await expect.poll(() => isInViewportHeight(getPart('close-trigger'))).toBe(true);
		});

		it('should let the user scroll to the end of the description', async () => {
			await page.viewport(width, height);
			await page.render(
				<DsToastProvider>
					<ToastTrigger variant="error" title="Error" description={LONG_DESCRIPTION} persistent />
				</DsToastProvider>,
			);

			await page.getByRole('button', { name: 'Show toast' }).click();

			const description = page.getByText(LONG_DESCRIPTION.trim());
			await expect.element(description).toBeInTheDocument();

			await expect.poll(() => getPart('root')?.dataset.state).toBe('open');

			const el = description.element() as HTMLElement;
			const rootBottom = getPart('root')?.getBoundingClientRect().bottom ?? 0;
			expect(el.scrollHeight).toBeGreaterThan(el.clientHeight);
			expect(getComputedStyle(el).overflowY).toBe('auto');
			expect(el.getBoundingClientRect().bottom).toBeLessThanOrEqual(rootBottom);
		});

		it('should keep a toast without a title inside the viewport', async () => {
			await page.viewport(width, height);
			await page.render(
				<DsToastProvider>
					<ToastTrigger variant="error" description={LONG_DESCRIPTION} persistent />
				</DsToastProvider>,
			);

			await page.getByRole('button', { name: 'Show toast' }).click();

			await expect.poll(() => getPart('root')?.dataset.state).toBe('open');
			await expect.poll(() => isInViewportHeight(getPart('root'))).toBe(true);
			await expect.poll(() => isInViewportHeight(getPart('close-trigger'))).toBe(true);
		});
	});

	it('should let consumers set a lower max height', async () => {
		await page.viewport(1280, 720);
		await page.render(
			<DsToastProvider>
				<ToastTrigger
					variant="error"
					title="Error"
					description={LONG_DESCRIPTION}
					style={{ maxHeight: 200 }}
					persistent
				/>
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();

		await expect.poll(() => getPart('root')?.dataset.state).toBe('open');
		await expect.poll(() => getPart('root')?.getBoundingClientRect().height).toBe(200);

		const description = getPart('description');
		expect(description?.scrollHeight).toBeGreaterThan(description?.clientHeight ?? 0);
	});

	it('should not add a scrollbar to a short description', async () => {
		await page.viewport(1280, 720);
		await page.render(
			<DsToastProvider>
				<ToastTrigger variant="info" title="Info" description="Short message." />
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();

		const el = page.getByText('Short message.').element() as HTMLElement;
		expect(el.scrollHeight).toBe(el.clientHeight);
	});
});
