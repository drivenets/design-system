import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import DsCatalog from '../ds-catalog';

describe('DsCatalog', () => {
	it('renders compound parts in vertical order', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Header>
					<span>App header</span>
				</DsCatalog.Header>
				<DsCatalog.Body>
					<DsCatalog.SideMenu>
						<span>Side menu</span>
					</DsCatalog.SideMenu>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<DsCatalog.ContentHeader title={<span>Page title</span>} />
							<DsCatalog.Controls>
								<span>Controls</span>
							</DsCatalog.Controls>
							<DsCatalog.Results>
								<span>Results</span>
							</DsCatalog.Results>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		await expect.element(page.getByText('App header')).toBeVisible();
		await expect.element(page.getByText('Side menu')).toBeVisible();
		await expect.element(page.getByText('Page title')).toBeVisible();
		await expect.element(page.getByText('Controls')).toBeVisible();
		await expect.element(page.getByRole('region')).toBeVisible();
		await expect.element(page.getByText('Results')).toBeVisible();

		const headerRect = page.getByText('App header').element().getBoundingClientRect();
		const sideMenuRect = page.getByText('Side menu').element().getBoundingClientRect();
		const titleRect = page.getByText('Page title').element().getBoundingClientRect();

		expect(sideMenuRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
		expect(titleRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
	});

	it('uses semantic HTML for header', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Header>
					<span>App header</span>
				</DsCatalog.Header>
			</DsCatalog>,
		);

		const header = page.getByText('App header').element().parentElement;

		expect(header?.tagName).toBe('HEADER');
	});

	it('fills viewport height by default', async () => {
		await page.render(
			<DsCatalog>
				<DsCatalog.Header>
					<span>App header</span>
				</DsCatalog.Header>
			</DsCatalog>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement as HTMLElement;
		const style = getComputedStyle(root);

		expect(parseFloat(style.height)).toBeCloseTo(window.innerHeight, 0);
	});

	it('fills parent height when fillParent is true', async () => {
		const parentHeight = 400;

		await page.render(
			<div style={{ height: parentHeight }}>
				<DsCatalog fillParent>
					<DsCatalog.Header>
						<span>App header</span>
					</DsCatalog.Header>
				</DsCatalog>
			</div>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement as HTMLElement;
		const { height } = root.getBoundingClientRect();

		expect(Math.round(height)).toBe(parentHeight);
	});

	it('forwards ref to root element', async () => {
		let refElement: HTMLDivElement | null = null;

		await page.render(
			<DsCatalog
				fillParent
				ref={(el) => {
					refElement = el;
				}}
			>
				<DsCatalog.Header>
					<span>App header</span>
				</DsCatalog.Header>
			</DsCatalog>,
		);

		await expect.element(page.getByText('App header')).toBeVisible();
		expect(refElement).toBeInstanceOf(HTMLDivElement);
	});

	it('merges custom className on root', async () => {
		await page.render(
			<DsCatalog fillParent className="my-catalog">
				<DsCatalog.Header>
					<span>App header</span>
				</DsCatalog.Header>
			</DsCatalog>,
		);

		const root = page.getByText('App header').element().parentElement?.parentElement;
		expect(root?.classList.contains('my-catalog')).toBe(true);
	});

	it('applies lg margins without side menu', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.Main>
						<DsCatalog.Content data-testid="content">
							<span>Content</span>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		const content = page.getByTestId('content').element();
		const style = getComputedStyle(content);

		expect(style.paddingInline).not.toBe('');
		expect(content.className).not.toMatch(/contentWithSideMenu/);
	});

	it('applies side-menu horizontal margins when side menu is present', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.SideMenu>
						<span>Nav</span>
					</DsCatalog.SideMenu>
					<DsCatalog.Main>
						<DsCatalog.Content data-testid="content">
							<span>Content</span>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		const content = page.getByTestId('content').element();
		expect(content.className).toMatch(/contentWithSideMenu/);
	});

	it('applies pinned width on side menu', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.SideMenu pinned data-testid="side-menu">
						<span>Nav</span>
					</DsCatalog.SideMenu>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<span>Content</span>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		const sideMenu = page.getByTestId('side-menu').element();
		expect(sideMenu.getAttribute('data-pinned')).toBe('');
		expect(parseFloat(getComputedStyle(sideMenu).width)).toBeCloseTo(256, 0);
	});

	it('collapsed side menu uses collapsed width', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.SideMenu data-testid="side-menu">
						<span>Nav</span>
					</DsCatalog.SideMenu>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<span>Content</span>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		const sideMenu = page.getByTestId('side-menu').element();
		expect(sideMenu.getAttribute('data-pinned')).toBeNull();
		expect(getComputedStyle(sideMenu).width).toBe('60px');
	});

	it('applies border on results region', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<DsCatalog.Results data-testid="results">
								<span>Table</span>
							</DsCatalog.Results>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		const results = page.getByTestId('results').element();
		expect(getComputedStyle(results).borderWidth).not.toBe('0px');
	});

	it('renders empty state illustration and children', async () => {
		await page.render(
			<DsCatalog fillParent>
				<DsCatalog.Body>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<DsCatalog.Empty>
								<span>No records found</span>
							</DsCatalog.Empty>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>,
		);

		await expect.element(page.getByRole('status')).toBeVisible();
		await expect.element(page.getByText('No records found')).toBeVisible();
		await expect.element(page.getByTestId('catalog-empty-illustration')).toBeVisible();
	});
});
