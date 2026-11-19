import { useState } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsDialog from '../ds-dialog';
import type { DsDialogProps } from '../ds-dialog.types';
import styles from '../ds-dialog.module.scss';
import { findElement, readZIndex, resetZIndexTiers, setZIndexTier } from '../../../../vitest/z-index-tiers';

const ControlledDialog = (props: Partial<DsDialogProps>) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open Dialog
			</button>
			<DsDialog
				open={open}
				onOpenChange={setOpen}
				title="Test Dialog"
				description="Dialog description"
				{...props}
			>
				{props.children ?? <p>Dialog body</p>}
			</DsDialog>
		</>
	);
};

describe('DsDialog', () => {
	it('opens on trigger click and closes on Escape', async () => {
		await page.render(<ControlledDialog />);

		await page.getByRole('button', { name: /open dialog/i }).click();

		const dialog = page.getByRole('dialog', { name: /test dialog/i });
		await expect.element(dialog).toBeVisible();
		await expect.element(dialog.getByText(/dialog body/i)).toBeVisible();

		await userEvent.keyboard('{Escape}');

		await expect.element(page.getByRole('dialog', { name: /test dialog/i })).not.toBeInTheDocument();
	});

	it('renders at a custom fixed position', async () => {
		await page.render(<ControlledDialog customPosition={{ top: 60, left: 20 }} />);

		await page.getByRole('button', { name: /open dialog/i }).click();

		const dialog = page.getByRole('dialog', { name: /test dialog/i });
		await expect.element(dialog).toBeVisible();

		const dialogElement = dialog.element() as HTMLElement;
		expect(dialogElement.style.position).toBe('fixed');
		expect(dialogElement.style.top).toBe('60px');
		expect(dialogElement.style.left).toBe('20px');
	});
});

const byClass = (className: string | undefined) => `.${className ?? ''}`;

describe('DsDialog stacking', () => {
	afterEach(resetZIndexTiers);

	const renderOpenDialog = async () => {
		await page.render(
			<DsDialog open title="Settings">
				<p>Dialog body</p>
			</DsDialog>,
		);
		await expect.element(page.getByRole('dialog', { name: 'Settings' })).toBeVisible();

		return {
			content: page.getByRole('dialog', { name: 'Settings' }).element(),
			backdrop: await findElement(byClass(styles.overlay)),
		};
	};

	it('stacks the content at 1200 and the backdrop just below it by default', async () => {
		const { content, backdrop } = await renderOpenDialog();

		expect(readZIndex(content)).toBe(1200);
		expect(readZIndex(backdrop)).toBe(1199);
	});

	it('moves the content and backdrop with --z-index-modal', async () => {
		setZIndexTier('modal', 1500);

		const { content, backdrop } = await renderOpenDialog();

		expect(readZIndex(content)).toBe(1500);
		expect(readZIndex(backdrop)).toBe(1499);
	});
});
