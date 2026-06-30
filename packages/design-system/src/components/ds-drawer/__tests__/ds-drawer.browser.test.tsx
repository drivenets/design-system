import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsDrawer from '../ds-drawer';
import type { DsDrawerProps } from '../ds-drawer.types';

const ControlledDrawer = (props: Partial<DsDrawerProps>) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open Drawer
			</button>
			<DsDrawer open={open} onOpenChange={setOpen} {...props}>
				<DsDrawer.Header>
					<DsDrawer.Title>Test Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body>{props.children ?? <p>Body content</p>}</DsDrawer.Body>
			</DsDrawer>
		</>
	);
};

const TypeAheadDrawer = (props: Partial<DsDrawerProps>) => {
	const [query, setQuery] = useState('');

	return (
		<>
			<input
				type="text"
				aria-label="Search"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
			<DsDrawer open={query.length > 0} onOpenChange={(open) => !open && setQuery('')} {...props}>
				<DsDrawer.Header>
					<DsDrawer.Title>Suggestions</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body>
					<p>Body content</p>
				</DsDrawer.Body>
			</DsDrawer>
		</>
	);
};

const UnmountWhileOpenDrawer = (props: Partial<DsDrawerProps>) => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(true);

	if (!mounted) {
		return <div>unmounted</div>;
	}

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open Drawer
			</button>
			<DsDrawer open={open} onOpenChange={setOpen} backdrop portal {...props}>
				<DsDrawer.Body>
					<button
						type="button"
						onClick={() => {
							setOpen(false);
							setMounted(false);
						}}
					>
						Close and Unmount
					</button>
				</DsDrawer.Body>
			</DsDrawer>
		</>
	);
};

describe('DsDrawer', () => {
	it('should open and close', async () => {
		await page.render(<ControlledDrawer />);

		await page.getByRole('button', { name: /open drawer/i }).click();

		const drawer = page.getByRole('dialog');
		await expect.element(drawer).toHaveAttribute('data-state', 'open');

		await page.getByRole('button', { name: /close/i }).click();
		await expect.element(drawer).toHaveAttribute('data-state', 'closed');
	});

	it('should not intercept pointer events on sibling UI once closed', async () => {
		const onSiblingClick = vi.fn();

		const InsetDrawerOverSibling = () => {
			const [open, setOpen] = useState(true);

			return (
				<div style={{ position: 'relative', width: '400px', height: '200px' }}>
					<button type="button" onClick={() => setOpen(false)}>
						Close drawer
					</button>
					<button
						type="button"
						onClick={onSiblingClick}
						style={{ position: 'absolute', top: '12px', right: '12px' }}
					>
						Sibling field
					</button>
					{/* Force the closed drawer to overlap the sibling (no slide-away) so the
					    test fails if a closed drawer keeps intercepting pointer events. */}
					<DsDrawer
						open={open}
						onOpenChange={setOpen}
						style={{ width: '200px', transform: 'translateX(0)', animation: 'none' }}
					>
						<DsDrawer.Body>Drawer content</DsDrawer.Body>
					</DsDrawer>
				</div>
			);
		};

		await page.render(<InsetDrawerOverSibling />);

		const drawer = page.getByRole('dialog');
		await expect.element(drawer).toHaveAttribute('data-state', 'open');

		await page.getByRole('button', { name: /close drawer/i }).click();
		await expect.element(drawer).toHaveAttribute('data-state', 'closed');

		await page.getByRole('button', { name: /sibling field/i }).click();
		expect(onSiblingClick).toHaveBeenCalledTimes(1);
	});

	it('should force closed pointer-events to none over an inline pointer-events:auto', async () => {
		await page.render(<ControlledDrawer />);

		await page.getByRole('button', { name: /open drawer/i }).click();
		const drawer = page.getByRole('dialog');
		await expect.element(drawer).toHaveAttribute('data-state', 'open');

		await page.getByRole('button', { name: /close/i }).click();
		await expect.element(drawer).toHaveAttribute('data-state', 'closed');

		// When this drawer is open in a multi-layer Ark dialog stack (e.g. a non-modal
		// drawer opened over another dialog, as in the workflow builder), Ark writes an
		// inline `pointer-events: auto` onto the content element. Inline normally beats a
		// class rule, so the closed drawer would keep swallowing clicks on neighboring UI.
		// Ark owns that inline value, so we can't feed it through `style`; instead set it
		// directly here and assert the closed-state rule still wins (this is what makes the
		// rule `!important`).
		const closedDrawer = drawer.element() as HTMLElement;
		closedDrawer.style.pointerEvents = 'auto';
		expect(closedDrawer.style.pointerEvents).toBe('auto');
		expect(getComputedStyle(closedDrawer).pointerEvents).toBe('none');
	});

	it('should keep its own controls interactive while open', async () => {
		const onInsideClick = vi.fn();

		await page.render(
			<DsDrawer open onOpenChange={() => {}}>
				<DsDrawer.Body>
					<button type="button" onClick={onInsideClick}>
						Inside action
					</button>
				</DsDrawer.Body>
			</DsDrawer>,
		);

		await page.getByRole('button', { name: /inside action/i }).click();
		expect(onInsideClick).toHaveBeenCalledTimes(1);
	});

	it('should render backdrop when enabled', async () => {
		await page.render(<ControlledDrawer backdrop />);

		await page.getByRole('button', { name: /open drawer/i }).click();

		const drawer = page.getByRole('dialog');
		await expect.element(drawer).toHaveAttribute('data-state', 'open');

		const backdrop = document.querySelector<HTMLElement>('[data-part="backdrop"]');
		await expect.element(backdrop).toBeInTheDocument();
		await expect.element(backdrop).toHaveAttribute('data-state', 'open');
	});

	it('should keep focus in the field when onOpenAutoFocus calls preventDefault', async () => {
		const onOpenAutoFocus = vi.fn((event: Event) => event.preventDefault());
		await page.render(<TypeAheadDrawer onOpenAutoFocus={onOpenAutoFocus} />);

		const input = page.getByRole('textbox', { name: /search/i });
		await input.fill('a');

		await expect.element(page.getByRole('dialog')).toHaveAttribute('data-state', 'open');
		await vi.waitFor(() => expect(onOpenAutoFocus).toHaveBeenCalled());
		await expect.element(input).toHaveFocus();
	});

	it('should move focus into the drawer on open by default', async () => {
		await page.render(<TypeAheadDrawer />);

		const input = page.getByRole('textbox', { name: /search/i });
		await input.fill('a');

		await expect.element(page.getByRole('dialog')).toHaveAttribute('data-state', 'open');
		await expect.element(input).not.toHaveFocus();
	});

	it('should release body scroll-lock when unmounted while open', async () => {
		await page.render(<UnmountWhileOpenDrawer />);

		await page.getByRole('button', { name: /open drawer/i }).click();
		await expect.element(page.getByRole('dialog')).toHaveAttribute('data-state', 'open');
		expect(document.body.hasAttribute('data-scroll-lock')).toBe(true);

		await page.getByRole('button', { name: /close and unmount/i }).click();
		await expect.element(page.getByText('unmounted')).toBeInTheDocument();

		await vi.waitFor(() => {
			expect(document.body.hasAttribute('data-scroll-lock')).toBe(false);
			expect(document.body.style.pointerEvents).not.toBe('none');
			expect(document.body.getAttribute('aria-hidden')).toBeNull();
		});
	});

	it('should release body scroll-lock when parent unmounts an open drawer', async () => {
		const OpenDrawer = () => (
			<DsDrawer open onOpenChange={() => {}} backdrop portal>
				<DsDrawer.Body>hello</DsDrawer.Body>
			</DsDrawer>
		);

		const { rerender } = await page.render(<OpenDrawer />);

		await expect.element(page.getByRole('dialog')).toHaveAttribute('data-state', 'open');
		await vi.waitFor(() => {
			expect(document.body.hasAttribute('data-scroll-lock')).toBe(true);
			expect(document.body.style.pointerEvents).toBe('none');
		});

		await rerender(<div>gone</div>);
		await expect.element(page.getByText('gone')).toBeInTheDocument();

		await vi.waitFor(() => {
			expect(document.body.hasAttribute('data-scroll-lock')).toBe(false);
			expect(document.body.style.pointerEvents).not.toBe('none');
			expect(document.body.getAttribute('aria-hidden')).toBeNull();
		});
	});
});
