import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsPanel } from '../';
import { DsButtonV3 } from '../../ds-button-v3';

function CollapsiblePanel({ variant }: { variant?: 'docked' | 'floating' }) {
	const [open, setOpen] = useState(true);

	return (
		<>
			{!open && <DsButtonV3 onClick={() => setOpen(true)}>Open Panel</DsButtonV3>}

			<DsPanel open={open} onOpenChange={setOpen} variant={variant}>
				<p>This is a panel</p>
			</DsPanel>
		</>
	);
}

describe('DsPanel', () => {
	describe('collapse and expand', () => {
		it('should collapse and reopen in docked variant', async () => {
			await page.render(<CollapsiblePanel variant="docked" />);

			await expect.element(page.getByText('This is a panel')).toBeVisible();

			await page.getByText('This is a panel').hover();
			await page.getByLabelText('Toggle panel').click();
			await expect.element(page.getByText('This is a panel')).not.toBeVisible();

			await page.getByText('Open Panel').click();
			await expect.element(page.getByText('This is a panel')).toBeVisible();
		});

		it('should collapse and reopen in floating variant', async () => {
			await page.render(
				<div style={{ position: 'relative', width: 600, height: 400 }}>
					<CollapsiblePanel variant="floating" />
				</div>,
			);

			await expect.element(page.getByText('This is a panel')).toBeVisible();

			await page.getByText('This is a panel').hover();
			await page.getByLabelText('Toggle panel').click();
			await expect.element(page.getByText('This is a panel')).not.toBeVisible();

			await page.getByText('Open Panel').click();
			await expect.element(page.getByText('This is a panel')).toBeVisible();
		});
	});

	describe('draggable', () => {
		function simulateDrag(target: HTMLElement, deltaX: number, deltaY: number) {
			const startX = 100;
			const startY = 100;

			target.dispatchEvent(new MouseEvent('mousedown', { clientX: startX, clientY: startY, bubbles: true }));
			document.dispatchEvent(
				new MouseEvent('mousemove', { clientX: startX + deltaX, clientY: startY + deltaY, bubbles: true }),
			);
			document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
		}

		it('should move panel when dragging by handle', async () => {
			await page.render(
				<div style={{ position: 'relative', width: 600, height: 500 }}>
					<DsPanel open variant="floating" draggable>
						<span data-drag-handle="">drag_indicator</span>
						<p>Panel content</p>
					</DsPanel>
				</div>,
			);

			const handle = page.getByText('drag_indicator').element() as HTMLElement;
			const panel = handle.closest('[data-state]') as HTMLElement;
			const rectBefore = panel.getBoundingClientRect();

			simulateDrag(handle, 100, 50);

			const rectAfter = panel.getBoundingClientRect();

			expect(Math.round(rectAfter.left - rectBefore.left)).toBe(100);
			expect(Math.round(rectAfter.top - rectBefore.top)).toBe(50);
		});

		it('should not drag when clicking outside the handle', async () => {
			await page.render(
				<div style={{ position: 'relative', width: 600, height: 500 }}>
					<DsPanel open variant="floating" draggable>
						<span data-drag-handle="">drag_indicator</span>
						<p>Panel content</p>
					</DsPanel>
				</div>,
			);

			const label = page.getByText('Panel content').element() as HTMLElement;
			const panel = label.closest('[data-state]') as HTMLElement;
			const rectBefore = panel.getBoundingClientRect();

			simulateDrag(label, 200, 200);

			const rectAfter = panel.getBoundingClientRect();

			expect(rectAfter.left).toBe(rectBefore.left);
			expect(rectAfter.top).toBe(rectBefore.top);
		});
	});

	describe('width', () => {
		it('should apply default responsive width when no width prop is provided', async () => {
			await page.render(<DsPanel open>Content</DsPanel>);

			const panel = page.getByText('Content').element().closest('[data-state]') as HTMLElement;
			const { width } = panel.getBoundingClientRect();

			const expectedWidth = Math.min(480, Math.max(240, window.innerWidth * 0.2));
			expect(Math.round(width)).toBe(Math.round(expectedWidth));
		});

		it('should apply explicit width when provided', async () => {
			await page.render(
				<DsPanel open width={350}>
					Content
				</DsPanel>,
			);

			const panel = page.getByText('Content').element().closest('[data-state]') as HTMLElement;
			const { width } = panel.getBoundingClientRect();

			expect(Math.round(width)).toBe(350);
		});
	});
});
