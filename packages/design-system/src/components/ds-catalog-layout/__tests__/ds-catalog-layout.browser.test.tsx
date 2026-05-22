import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import DsCatalogLayout from '../ds-catalog-layout';

describe('DsCatalogLayout', () => {
	it('renders compound parts in the expected vertical order', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Header>
					<span>App header</span>
				</DsCatalogLayout.Header>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu>
						<span>Side menu</span>
					</DsCatalogLayout.SideMenu>
					<DsCatalogLayout.Content>
						<DsCatalogLayout.ContentHeader title={<span>Page title</span>}>
							<span>Smart tabs</span>
						</DsCatalogLayout.ContentHeader>
						<span>Results</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		await expect.element(page.getByText('App header')).toBeVisible();
		await expect.element(page.getByText('Side menu')).toBeVisible();
		await expect.element(page.getByText('Page title')).toBeVisible();
		await expect.element(page.getByText('Smart tabs')).toBeVisible();
		await expect.element(page.getByText('Results')).toBeVisible();

		const headerRect = page.getByText('App header').element().getBoundingClientRect();
		const titleRect = page.getByText('Page title').element().getBoundingClientRect();
		const tabsRect = page.getByText('Smart tabs').element().getBoundingClientRect();

		expect(titleRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
		expect(tabsRect.top).toBeGreaterThanOrEqual(titleRect.bottom);
	});

	it('uses semantic HTML for the top header region', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Header>
					<span>App header</span>
				</DsCatalogLayout.Header>
			</DsCatalogLayout>,
		);

		const header = page.getByText('App header').element().parentElement;

		expect(header?.tagName).toBe('HEADER');
	});

	it('fills the viewport height by default', async () => {
		await page.render(
			<DsCatalogLayout>
				<DsCatalogLayout.Header>
					<span>App header</span>
				</DsCatalogLayout.Header>
			</DsCatalogLayout>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement as HTMLElement;
		const style = getComputedStyle(root);

		expect(parseFloat(style.height)).toBeCloseTo(window.innerHeight, 0);
	});

	it('fills the parent height when fillParent is true', async () => {
		const parentHeight = 400;

		await page.render(
			<div style={{ height: parentHeight }}>
				<DsCatalogLayout fillParent>
					<DsCatalogLayout.Header>
						<span>App header</span>
					</DsCatalogLayout.Header>
				</DsCatalogLayout>
			</div>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement as HTMLElement;
		const { height } = root.getBoundingClientRect();

		expect(Math.round(height)).toBe(parentHeight);
	});

	it('forwards ref to the root element', async () => {
		let refElement: HTMLDivElement | null = null;

		await page.render(
			<DsCatalogLayout
				fillParent
				ref={(el) => {
					refElement = el;
				}}
			>
				<DsCatalogLayout.Header>
					<span>App header</span>
				</DsCatalogLayout.Header>
			</DsCatalogLayout>,
		);

		await expect.element(page.getByText('App header')).toBeVisible();
		expect(refElement).toBeInstanceOf(HTMLDivElement);
	});

	it('merges custom className on the root', async () => {
		await page.render(
			<DsCatalogLayout fillParent className="my-catalog">
				<DsCatalogLayout.Header>
					<span>App header</span>
				</DsCatalogLayout.Header>
			</DsCatalogLayout>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement;
		expect(root?.classList.contains('my-catalog')).toBe(true);
	});

	it('applies 40px horizontal padding on content when there is no side menu', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.Content data-testid="content">
						<span>Content</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const content = page.getByTestId('content').element();
		const style = getComputedStyle(content);

		expect(content.className).not.toMatch(/contentWithSideMenu/);
		expect(style.paddingLeft).toBe('40px');
		expect(style.paddingRight).toBe('40px');
	});

	it('applies 24px horizontal padding on content when a side menu is present', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu>
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
					<DsCatalogLayout.Content data-testid="content">
						<span>Content</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const content = page.getByTestId('content').element();
		const style = getComputedStyle(content);

		expect(content.className).toMatch(/contentWithSideMenu/);
		expect(style.paddingLeft).toBe('24px');
		expect(style.paddingRight).toBe('24px');
	});

	it('uses 24px vertical padding on content', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.Content data-testid="content">
						<span>Content</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const content = page.getByTestId('content').element();
		const style = getComputedStyle(content);

		expect(style.paddingTop).toBe('24px');
		expect(style.paddingBottom).toBe('24px');
	});

	it('applies 256px width on a pinned side menu', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu pinned data-testid="side-menu">
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
					<DsCatalogLayout.Content>
						<span>Content</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const sideMenu = page.getByTestId('side-menu').element();
		expect(sideMenu.getAttribute('data-pinned')).toBe('');
		expect(parseFloat(getComputedStyle(sideMenu).width)).toBeCloseTo(256, 0);
	});

	it('applies 60px collapsed width on the side menu by default', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu data-testid="side-menu">
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
					<DsCatalogLayout.Content>
						<span>Content</span>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const sideMenu = page.getByTestId('side-menu').element();
		expect(sideMenu.getAttribute('data-pinned')).toBeNull();
		expect(getComputedStyle(sideMenu).width).toBe('60px');
	});

	it('renders the optional content-header item below the title row', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.Content>
						<DsCatalogLayout.ContentHeader
							title={<span>Title</span>}
							headerActions={<button type="button">Action</button>}
						>
							<span>Tabs item</span>
						</DsCatalogLayout.ContentHeader>
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		await expect.element(page.getByText('Title')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Action' })).toBeVisible();
		await expect.element(page.getByText('Tabs item')).toBeVisible();

		const titleRect = page.getByText('Title').element().getBoundingClientRect();
		const tabsRect = page.getByText('Tabs item').element().getBoundingClientRect();
		expect(tabsRect.top).toBeGreaterThanOrEqual(titleRect.bottom);
	});

	it('omits the content-header item slot when no children are provided', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.Content>
						<DsCatalogLayout.ContentHeader title={<span>Just a title</span>} />
					</DsCatalogLayout.Content>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		const titleRow = page.getByText('Just a title').element().parentElement;
		const contentHeader = titleRow?.parentElement;
		expect(contentHeader?.children.length).toBe(1);
	});

	it('renders the pin button only when onPinnedChange is provided', async () => {
		const { rerender } = await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu>
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		expect(page.getByRole('button', { name: /pin side menu/i, includeHidden: true }).query()).toBeNull();

		await rerender(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu onPinnedChange={() => {}}>
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		await expect
			.element(page.getByRole('button', { name: 'Pin side menu', includeHidden: true }))
			.toBeInTheDocument();
	});

	it('toggles the side menu between pinned (256px push) and collapsed (60px) states', async () => {
		const ControlledLayout = () => {
			const [pinned, setPinned] = useState(true);

			return (
				<DsCatalogLayout fillParent>
					<DsCatalogLayout.Body>
						<DsCatalogLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} data-testid="side-menu">
							<span>Nav</span>
						</DsCatalogLayout.SideMenu>
					</DsCatalogLayout.Body>
				</DsCatalogLayout>
			);
		};

		await page.render(<ControlledLayout />);

		const sideMenu = page.getByTestId('side-menu');
		const unpinButton = page.getByRole('button', { name: 'Unpin side menu' });

		await expect.element(unpinButton).toBeVisible();
		expect(sideMenu.element().getAttribute('data-pinned')).toBe('');
		expect(parseFloat(getComputedStyle(sideMenu.element()).width)).toBeCloseTo(256, 0);

		await unpinButton.click();

		const pinButton = page.getByRole('button', { name: 'Pin side menu', includeHidden: true });
		await expect.element(pinButton).toBeInTheDocument();
		expect(pinButton.element().getAttribute('aria-pressed')).toBe('false');
		expect(sideMenu.element().getAttribute('data-pinned')).toBeNull();
		expect(parseFloat(getComputedStyle(sideMenu.element()).width)).toBeCloseTo(60, 0);
	});

	it('uses the localized pin button label when provided', async () => {
		await page.render(
			<DsCatalogLayout fillParent>
				<DsCatalogLayout.Body>
					<DsCatalogLayout.SideMenu
						pinned
						onPinnedChange={() => {}}
						locale={{ unpinButtonLabel: 'Detacher' }}
					>
						<span>Nav</span>
					</DsCatalogLayout.SideMenu>
				</DsCatalogLayout.Body>
			</DsCatalogLayout>,
		);

		await expect.element(page.getByRole('button', { name: 'Detacher' })).toBeVisible();
	});
});
