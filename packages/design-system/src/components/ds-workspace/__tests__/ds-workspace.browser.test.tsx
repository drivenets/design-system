import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import DsWorkspace from '../ds-workspace';

describe('DsWorkspace', () => {
	it('renders all compound parts in vertical order', async () => {
		await page.render(
			<DsWorkspace fillParent>
				<DsWorkspace.Header>
					<span>Top bar</span>
				</DsWorkspace.Header>
				<DsWorkspace.SubHeader>
					<span>Secondary bar</span>
				</DsWorkspace.SubHeader>
				<DsWorkspace.Content>
					<span>Main area</span>
				</DsWorkspace.Content>
				<DsWorkspace.Footer>
					<span>Bottom bar</span>
				</DsWorkspace.Footer>
			</DsWorkspace>,
		);

		const header = page.getByRole('banner');
		const footer = page.getByRole('contentinfo');

		await expect.element(header).toBeVisible();
		await expect.element(page.getByText('Secondary bar')).toBeVisible();
		await expect.element(page.getByText('Main area')).toBeVisible();
		await expect.element(footer).toBeVisible();

		const headerRect = header.element().getBoundingClientRect();
		const subHeaderRect = page.getByText('Secondary bar').element().getBoundingClientRect();
		const contentRect = page.getByText('Main area').element().getBoundingClientRect();
		const footerRect = footer.element().getBoundingClientRect();

		expect(subHeaderRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
		expect(contentRect.top).toBeGreaterThanOrEqual(subHeaderRect.bottom);
		expect(footerRect.top).toBeGreaterThanOrEqual(contentRect.bottom);
	});

	it('uses semantic HTML elements for header and footer', async () => {
		await page.render(
			<DsWorkspace fillParent>
				<DsWorkspace.Header>
					<span>Header</span>
				</DsWorkspace.Header>
				<DsWorkspace.Content>
					<span>Content</span>
				</DsWorkspace.Content>
				<DsWorkspace.Footer>
					<span>Footer</span>
				</DsWorkspace.Footer>
			</DsWorkspace>,
		);

		const header = page.getByRole('banner').element();
		const footer = page.getByRole('contentinfo').element();

		expect(header.tagName).toBe('HEADER');
		expect(footer.tagName).toBe('FOOTER');
	});

	it('content creates a stacking context for drawer containment', async () => {
		await page.render(
			<DsWorkspace fillParent>
				<DsWorkspace.Content>
					<span>Content</span>
				</DsWorkspace.Content>
			</DsWorkspace>,
		);

		const contentEl = page.getByText('Content').element().parentElement as HTMLElement;
		const style = getComputedStyle(contentEl);

		expect(style.position).toBe('relative');
	});

	it('fills viewport height by default', async () => {
		await page.render(
			<DsWorkspace>
				<DsWorkspace.Header>
					<span>Header</span>
				</DsWorkspace.Header>
			</DsWorkspace>,
		);

		const root = page.getByRole('banner').element().parentElement as HTMLElement;
		const style = getComputedStyle(root);

		expect(style.height).toBe(`${String(window.innerHeight)}px`);
	});

	it('fills parent height when fillParent is true', async () => {
		const parentHeight = 400;

		await page.render(
			<div style={{ height: parentHeight }}>
				<DsWorkspace fillParent>
					<DsWorkspace.Header>
						<span>Header</span>
					</DsWorkspace.Header>
				</DsWorkspace>
			</div>,
		);

		const root = page.getByRole('banner').element().parentElement as HTMLElement;
		const { height } = root.getBoundingClientRect();

		expect(Math.round(height)).toBe(parentHeight);
	});

	it('forwards ref to root element', async () => {
		let refElement: HTMLDivElement | null = null;

		await page.render(
			<DsWorkspace
				fillParent
				ref={(el) => {
					refElement = el;
				}}
			>
				<DsWorkspace.Header>
					<span>Header</span>
				</DsWorkspace.Header>
			</DsWorkspace>,
		);

		await expect.element(page.getByRole('banner')).toBeVisible();
		expect(refElement).toBeInstanceOf(HTMLDivElement);
	});

	it('merges custom className on root', async () => {
		await page.render(
			<DsWorkspace fillParent className="my-workspace">
				<DsWorkspace.Header>
					<span>Header</span>
				</DsWorkspace.Header>
			</DsWorkspace>,
		);

		const root = page.getByRole('banner').element().parentElement;
		expect(root?.classList.contains('my-workspace')).toBe(true);
	});

	it('works with only header and content (optional parts)', async () => {
		await page.render(
			<DsWorkspace fillParent>
				<DsWorkspace.Header>
					<span>Header</span>
				</DsWorkspace.Header>
				<DsWorkspace.Content>
					<span>Content</span>
				</DsWorkspace.Content>
			</DsWorkspace>,
		);

		await expect.element(page.getByRole('banner')).toBeVisible();
		await expect.element(page.getByText('Content')).toBeVisible();
	});

	it('drawer inside content is positioned below header', async () => {
		await page.render(
			<div style={{ height: 500 }}>
				<DsWorkspace fillParent>
					<DsWorkspace.Header>
						<span>Header</span>
					</DsWorkspace.Header>
					<DsWorkspace.Content>
						<div style={{ position: 'absolute', inset: 0 }} role="dialog" aria-label="Drawer">
							Drawer
						</div>
						<span>Content</span>
					</DsWorkspace.Content>
					<DsWorkspace.Footer>
						<span>Footer</span>
					</DsWorkspace.Footer>
				</DsWorkspace>
			</div>,
		);

		const headerRect = page.getByRole('banner').element().getBoundingClientRect();
		const dialogRect = page.getByRole('dialog').element().getBoundingClientRect();
		const footerRect = page.getByRole('contentinfo').element().getBoundingClientRect();

		expect(dialogRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
		expect(dialogRect.bottom).toBeLessThanOrEqual(footerRect.top + 1);
	});
});
