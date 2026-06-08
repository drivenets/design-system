import { Component, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';

import DsWorkspaceLayout from '../ds-workspace-layout';

describe('DsWorkspaceLayout', () => {
	it('renders all compound parts in vertical order', async () => {
		await page.render(
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Header>
					<span>Top bar</span>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.SubHeader>
					<span>Secondary bar</span>
				</DsWorkspaceLayout.SubHeader>
				<DsWorkspaceLayout.Content>
					<span>Main area</span>
				</DsWorkspaceLayout.Content>
				<DsWorkspaceLayout.Footer>
					<span>Bottom bar</span>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>,
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
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Header>
					<span>Header</span>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Content>
					<span>Content</span>
				</DsWorkspaceLayout.Content>
				<DsWorkspaceLayout.Footer>
					<span>Footer</span>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>,
		);

		const header = page.getByRole('banner').element();
		const footer = page.getByRole('contentinfo').element();

		expect(header.tagName).toBe('HEADER');
		expect(footer.tagName).toBe('FOOTER');
	});

	it('content creates a stacking context for drawer containment', async () => {
		await page.render(
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Content>
					<span>Content</span>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout>,
		);

		const contentEl = page.getByText('Content').element().parentElement as HTMLElement;
		const style = getComputedStyle(contentEl);

		expect(style.position).toBe('relative');
	});

	it('fills viewport height by default', async () => {
		await page.render(
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<span>Header</span>
				</DsWorkspaceLayout.Header>
			</DsWorkspaceLayout>,
		);

		const root = page.getByRole('banner').element().parentElement as HTMLElement;
		const style = getComputedStyle(root);

		expect(style.height).toBe(`${String(window.innerHeight)}px`);
	});

	it('fills parent height when fillParent is true', async () => {
		const parentHeight = 400;

		await page.render(
			<div style={{ height: parentHeight }}>
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Header>
						<span>Header</span>
					</DsWorkspaceLayout.Header>
				</DsWorkspaceLayout>
			</div>,
		);

		const root = page.getByRole('banner').element().parentElement as HTMLElement;
		const { height } = root.getBoundingClientRect();

		expect(Math.round(height)).toBe(parentHeight);
	});

	it('forwards ref to root element', async () => {
		let refElement: HTMLDivElement | null = null;

		await page.render(
			<DsWorkspaceLayout
				fillParent
				ref={(el) => {
					refElement = el;
				}}
			>
				<DsWorkspaceLayout.Header>
					<span>Header</span>
				</DsWorkspaceLayout.Header>
			</DsWorkspaceLayout>,
		);

		await expect.element(page.getByRole('banner')).toBeVisible();
		expect(refElement).toBeInstanceOf(HTMLDivElement);
	});

	it('merges custom className on root', async () => {
		await page.render(
			<DsWorkspaceLayout fillParent className="my-workspace">
				<DsWorkspaceLayout.Header>
					<span>Header</span>
				</DsWorkspaceLayout.Header>
			</DsWorkspaceLayout>,
		);

		const root = page.getByRole('banner').element().parentElement;
		expect(root?.classList.contains('my-workspace')).toBe(true);
	});

	it('works with only header and content (optional parts)', async () => {
		await page.render(
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Header>
					<span>Header</span>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Content>
					<span>Content</span>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout>,
		);

		await expect.element(page.getByRole('banner')).toBeVisible();
		await expect.element(page.getByText('Content')).toBeVisible();
	});

	it('drawer inside content is positioned below header', async () => {
		await page.render(
			<div style={{ height: 500 }}>
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Header>
						<span>Header</span>
					</DsWorkspaceLayout.Header>
					<DsWorkspaceLayout.Content>
						<div style={{ position: 'absolute', inset: 0 }} role="dialog" aria-label="Drawer">
							Drawer
						</div>
						<span>Content</span>
					</DsWorkspaceLayout.Content>
					<DsWorkspaceLayout.Footer>
						<span>Footer</span>
					</DsWorkspaceLayout.Footer>
				</DsWorkspaceLayout>
			</div>,
		);

		const headerRect = page.getByRole('banner').element().getBoundingClientRect();
		const dialogRect = page.getByRole('dialog').element().getBoundingClientRect();
		const footerRect = page.getByRole('contentinfo').element().getBoundingClientRect();

		expect(dialogRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
		expect(dialogRect.bottom).toBeLessThanOrEqual(footerRect.top + 1);
	});

	it('applies content-area layout on Content', async () => {
		await page.render(
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Content data-testid="content">
					<span>Content area</span>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout>,
		);

		const content = page.getByTestId('content').element();
		const style = getComputedStyle(content);

		expect(content.className).not.toMatch(/contentWithLeftPanel/);
		expect(style.flexDirection).toBe('column');
		expect(style.paddingLeft).toBe('40px');
		expect(style.paddingRight).toBe('40px');
		expect(style.paddingTop).toBe('24px');
		expect(style.paddingBottom).toBe('24px');
		expect(style.gap).toBe('16px');
	});

	describe('extended shell', () => {
		it('applies content-area margins when Body contains only Content', async () => {
			await page.render(
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.Content data-testid="content">
							<span>Content area</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</DsWorkspaceLayout>,
			);

			const content = page.getByTestId('content').element();
			const style = getComputedStyle(content);

			expect(content.className).not.toMatch(/contentWithLeftPanel/);
			expect(style.paddingLeft).toBe('40px');
			expect(style.paddingRight).toBe('40px');
			expect(style.paddingTop).toBe('24px');
			expect(style.paddingBottom).toBe('24px');
			expect(style.gap).toBe('16px');
		});

		it('applies reduced horizontal margins when LeftPanel is mounted', async () => {
			await page.render(
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.LeftPanel>
							<span>Left panel</span>
						</DsWorkspaceLayout.LeftPanel>
						<DsWorkspaceLayout.Content data-testid="content">
							<span>Content area</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</DsWorkspaceLayout>,
			);

			const content = page.getByTestId('content').element();
			const style = getComputedStyle(content);

			expect(content.className).toMatch(/contentWithLeftPanel/);
			expect(style.paddingLeft).toBe('24px');
			expect(style.paddingRight).toBe('24px');
		});

		it('toggles Content margin class when LeftPanel is mounted and unmounted', async () => {
			const WorkspaceWithOptionalLeftPanel = ({ showLeftPanel }: { showLeftPanel: boolean }) => (
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Body>
						{showLeftPanel ? (
							<DsWorkspaceLayout.LeftPanel>
								<span>Left panel</span>
							</DsWorkspaceLayout.LeftPanel>
						) : null}
						<DsWorkspaceLayout.Content data-testid="content">
							<span>Content area</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</DsWorkspaceLayout>
			);

			const { rerender } = await page.render(<WorkspaceWithOptionalLeftPanel showLeftPanel={false} />);

			let content = page.getByTestId('content').element();
			expect(content.className).not.toMatch(/contentWithLeftPanel/);
			expect(getComputedStyle(content).paddingLeft).toBe('40px');

			await rerender(<WorkspaceWithOptionalLeftPanel showLeftPanel={true} />);

			content = page.getByTestId('content').element();
			expect(content.className).toMatch(/contentWithLeftPanel/);
			expect(getComputedStyle(content).paddingLeft).toBe('24px');

			await rerender(<WorkspaceWithOptionalLeftPanel showLeftPanel={false} />);

			content = page.getByTestId('content').element();
			expect(content.className).not.toMatch(/contentWithLeftPanel/);
			expect(getComputedStyle(content).paddingLeft).toBe('40px');
		});

		it('does not change Content horizontal margins when SideMenu is present', async () => {
			await page.render(
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.SideMenu>
							<span>Nav</span>
						</DsWorkspaceLayout.SideMenu>
						<DsWorkspaceLayout.Content data-testid="content">
							<span>Content area</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</DsWorkspaceLayout>,
			);

			const content = page.getByTestId('content').element();
			const style = getComputedStyle(content);

			expect(content.className).not.toMatch(/contentWithLeftPanel/);
			expect(style.paddingLeft).toBe('40px');
			expect(style.paddingRight).toBe('40px');
		});

		it('content in Body creates a stacking context for drawer containment', async () => {
			await page.render(
				<DsWorkspaceLayout fillParent>
					<DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.Content data-testid="content">
							<span>Content area</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</DsWorkspaceLayout>,
			);

			const contentEl = page.getByTestId('content').element();
			const style = getComputedStyle(contentEl);

			expect(style.position).toBe('relative');
		});

		it('drawer inside Body Content is positioned below header', async () => {
			await page.render(
				<div style={{ height: 500 }}>
					<DsWorkspaceLayout fillParent>
						<DsWorkspaceLayout.Header>
							<span>Header</span>
						</DsWorkspaceLayout.Header>
						<DsWorkspaceLayout.Body>
							<DsWorkspaceLayout.Content>
								<div style={{ position: 'absolute', inset: 0 }} role="dialog" aria-label="Drawer">
									Drawer
								</div>
								<span>Main area</span>
							</DsWorkspaceLayout.Content>
						</DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.Footer>
							<span>Footer</span>
						</DsWorkspaceLayout.Footer>
					</DsWorkspaceLayout>
				</div>,
			);

			const headerRect = page.getByRole('banner').element().getBoundingClientRect();
			const dialogRect = page.getByRole('dialog').element().getBoundingClientRect();
			const footerRect = page.getByRole('contentinfo').element().getBoundingClientRect();

			expect(dialogRect.top).toBeGreaterThanOrEqual(headerRect.bottom);
			expect(dialogRect.bottom).toBeLessThanOrEqual(footerRect.top + 1);
		});

		it('throws when extended compound parts are used outside DsWorkspaceLayout', async () => {
			class TestErrorBoundary extends Component<
				{ children: ReactNode; onError: (error: Error) => void },
				{ error: Error | null }
			> {
				override state = { error: null as Error | null };

				static getDerivedStateFromError(error: Error) {
					return { error };
				}

				override componentDidCatch(error: Error) {
					this.props.onError(error);
				}

				override render() {
					if (this.state.error) {
						return null;
					}

					return this.props.children;
				}
			}

			const onError = vi.fn<(error: Error) => void>();

			await page.render(
				<TestErrorBoundary onError={onError}>
					<DsWorkspaceLayout.Body>
						<DsWorkspaceLayout.Content>
							<span>Content only</span>
						</DsWorkspaceLayout.Content>
					</DsWorkspaceLayout.Body>
				</TestErrorBoundary>,
			);

			expect(onError).toHaveBeenCalledOnce();
			expect(onError.mock.calls[0]?.[0]?.message).toBe(
				'DsWorkspaceLayout compound components must be used within DsWorkspaceLayout',
			);
		});
	});
});
