import { type ReactNode, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsDateInput } from '../index';
import { DsDialog } from '../../ds-dialog';
import { DsModal } from '../../ds-modal';

interface ModalContainerProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: ReactNode;
}

// A modal aria-hides content already portalled to <body> when it opens, so it must mount after.
describe.each([
	{
		container: 'DsModal',
		Container: ({ open, onOpenChange, children }: ModalContainerProps) => (
			<DsModal open={open} onOpenChange={onOpenChange}>
				<DsModal.Body>{children}</DsModal.Body>
			</DsModal>
		),
	},
	{
		container: 'DsDialog',
		Container: ({ open, onOpenChange, children }: ModalContainerProps) => (
			<DsDialog open={open} onOpenChange={onOpenChange} title="Schedule">
				{children}
			</DsDialog>
		),
	},
])('DsDateInput inside $container', ({ Container }) => {
	const ModalHarness = () => {
		const [open, setOpen] = useState(true);
		const [value, setValue] = useState<string | undefined>('2026-01-10');

		return (
			<>
				<button type="button" onClick={() => setOpen(true)}>
					Open modal
				</button>
				<Container open={open} onOpenChange={setOpen}>
					<DsDateInput value={value} onValueChange={setValue} />
					<button type="button" onClick={() => setOpen(false)}>
						Close modal
					</button>
				</Container>
			</>
		);
	};

	it('should expose the calendar by role and select a date', async () => {
		await page.render(<ModalHarness />);

		await page.getByRole('button', { name: 'Open calendar' }).click();

		await expect.element(page.getByRole('grid')).toBeVisible();
		await page.getByRole('button', { name: /Choose.*January 15, 2026/i }).click();

		await expect.element(page.getByPlaceholder('MM/DD/YYYY')).toHaveValue('01/15/2026');
	});

	it('should expose the calendar by role after the modal is closed and reopened', async () => {
		await page.render(<ModalHarness />);

		await page.getByRole('button', { name: 'Open calendar' }).click();
		await page.getByRole('button', { name: /Choose.*January 15, 2026/i }).click();
		await expect.element(page.getByRole('grid')).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Close modal' }).click();
		await page.getByRole('button', { name: 'Open modal' }).click();

		await page.getByRole('button', { name: 'Open calendar' }).click();
		await page.getByRole('button', { name: /Choose.*January 20, 2026/i }).click();

		await expect.element(page.getByPlaceholder('MM/DD/YYYY')).toHaveValue('01/20/2026');
	});
});
