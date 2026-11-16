import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsToastProvider, useToaster } from '../ds-toast-context';
import { DsButton } from '../../ds-button';
import { DsButtonV3 } from '../../ds-button-v3';
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

const ToastWithActions = ({ onCancel, onRetry }: { onCancel?: () => void; onRetry?: () => void }) => {
	const { createToast, dismissToast } = useToaster();

	const showToast = () => {
		const id = createToast({
			variant: 'warning',
			title: 'File upload failed',
			description: 'Your file could not be uploaded.',
			persistent: true,
			actions: (
				<>
					<DsButtonV3
						variant="tertiary"
						color="light"
						size="small"
						onClick={() => {
							onCancel?.();
							dismissToast(id);
						}}
					>
						Cancel
					</DsButtonV3>
					<DsButtonV3
						variant="secondary"
						color="light"
						size="small"
						onClick={() => {
							onRetry?.();
							dismissToast(id);
						}}
					>
						Retry
					</DsButtonV3>
				</>
			),
		});
	};

	return (
		<DsButton design="v1.2" variant="filled" onClick={showToast}>
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
	it.each(['Cancel', 'Retry'])('runs the %s action handler and dismisses the toast', async (label) => {
		const onAction = vi.fn<(label: string) => void>();

		await page.render(
			<DsToastProvider>
				<ToastWithActions onCancel={() => onAction('Cancel')} onRetry={() => onAction('Retry')} />
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();
		await expect.element(page.getByText('File upload failed')).toBeVisible();
		await expect.element(page.getByText('Your file could not be uploaded.')).toBeVisible();

		await page.getByRole('button', { name: label }).click();

		expect(onAction).toHaveBeenCalledExactlyOnceWith(label);
		await expect.element(page.getByText('File upload failed')).not.toBeInTheDocument();
	});

	it('lays out actions right-aligned with a gap, without a consumer wrapper', async () => {
		await page.viewport(1280, 720);
		await page.render(
			<DsToastProvider>
				<ToastWithActions />
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();
		await expect.poll(() => getPart('root')?.dataset.state).toBe('open');

		const cancel = page.getByRole('button', { name: 'Cancel' }).element();
		const retry = page.getByRole('button', { name: 'Retry' }).element();

		await expect
			.poll(() => retry.getBoundingClientRect().left - cancel.getBoundingClientRect().right)
			.toBe(8);
		expect(retry.getBoundingClientRect().right).toBe(retry.parentElement?.getBoundingClientRect().right);
		expect(retry.getBoundingClientRect().top).toBe(cancel.getBoundingClientRect().top);
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
		{ name: 'short viewport', width: 1280, height: 360 },
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

	it.each([
		{ name: 'cap at 400px by default', style: undefined, expected: 400 },
		{ name: 'let consumers lower the cap', style: { maxHeight: 200 }, expected: 200 },
		{ name: 'let consumers raise the cap', style: { maxHeight: 600 }, expected: 600 },
	])('should $name', async ({ style, expected }) => {
		await page.viewport(1280, 720);
		await page.render(
			<DsToastProvider>
				<ToastTrigger variant="error" title="Error" description={LONG_DESCRIPTION} style={style} persistent />
			</DsToastProvider>,
		);

		await page.getByRole('button', { name: 'Show toast' }).click();

		await expect.poll(() => getPart('root')?.dataset.state).toBe('open');
		await expect.poll(() => getPart('root')?.getBoundingClientRect().height).toBe(expected);

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
