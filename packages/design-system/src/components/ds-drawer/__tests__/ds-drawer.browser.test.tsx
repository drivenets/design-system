import { useState } from 'react';
import { describe, expect, it } from 'vitest';
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

describe('DsDrawer', () => {
	it('should open and close', async () => {
		await page.render(<ControlledDrawer />);

		await page.getByRole('button', { name: /open drawer/i }).click();

		const drawer = page.getByRole('dialog');
		await expect.element(drawer).toHaveAttribute('data-state', 'open');

		await page.getByRole('button', { name: /close/i }).click();
		await expect.element(drawer).toHaveAttribute('data-state', 'closed');
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
});
