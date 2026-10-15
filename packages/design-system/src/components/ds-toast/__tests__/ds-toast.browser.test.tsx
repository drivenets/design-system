import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsToastProvider, useToaster } from '../ds-toast-context';
import type { DsToastProps } from '../ds-toast.types';

const LONG_DESCRIPTION =
	'Template render failed: GetRelatedNode returned no match for the requested node. '.repeat(40);

const ToastTrigger = (props: DsToastProps) => {
	const { createToast } = useToaster();

	return (
		<button type="button" onClick={() => createToast(props)}>
			Show toast
		</button>
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
