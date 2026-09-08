import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsModal from '../ds-modal';

const ModalExample = ({ onOpenChange }: { onOpenChange?: (open: boolean) => void } = {}) => {
	const [open, setOpen] = useState(false);

	const handleOpenChange = (next: boolean) => {
		setOpen(next);
		onOpenChange?.(next);
	};

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open modal
			</button>
			<DsModal open={open} columns={4} onOpenChange={handleOpenChange}>
				<DsModal.Header>
					<DsModal.Title>Modal title</DsModal.Title>
					<DsModal.CloseTrigger />
				</DsModal.Header>
				<DsModal.Body>
					<p>Modal body content.</p>
				</DsModal.Body>
				<DsModal.Footer>
					<DsModal.Actions>
						<button type="button" onClick={() => setOpen(false)}>
							Confirm
						</button>
					</DsModal.Actions>
				</DsModal.Footer>
			</DsModal>
		</>
	);
};

const UnmountWhileOpenModal = () => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(true);

	if (!mounted) {
		return <div>unmounted</div>;
	}

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open Modal
			</button>
			<DsModal open={open} onOpenChange={setOpen}>
				<DsModal.Body>
					<button
						type="button"
						onClick={() => {
							setOpen(false);
							setMounted(false);
						}}
					>
						Close and Unmount
					</button>
				</DsModal.Body>
			</DsModal>
		</>
	);
};

describe('DsModal', () => {
	it('opens from the trigger and shows the title', async () => {
		await page.render(<ModalExample />);

		await page.getByRole('button', { name: /open modal/i }).click();

		await expect.element(page.getByRole('dialog')).toBeVisible();
		await expect.element(page.getByRole('heading', { name: /modal title/i })).toBeVisible();
	});

	it('closes when a footer action is clicked', async () => {
		await page.render(<ModalExample />);

		await page.getByRole('button', { name: /open modal/i }).click();
		await expect.element(page.getByRole('dialog')).toBeVisible();

		await page
			.getByRole('dialog')
			.getByRole('button', { name: /confirm/i })
			.click();

		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();
	});

	it('closes when the close trigger is clicked', async () => {
		await page.render(<ModalExample />);

		await page.getByRole('button', { name: /open modal/i }).click();
		const dialog = page.getByRole('dialog');
		await expect.element(dialog).toBeVisible();

		await dialog.getByRole('button', { name: /close/i }).click();

		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();
	});

	it('closes and reports the change when Escape is pressed', async () => {
		const onOpenChange = vi.fn();
		await page.render(<ModalExample onOpenChange={onOpenChange} />);

		await page.getByRole('button', { name: /open modal/i }).click();
		await expect.element(page.getByRole('dialog')).toBeVisible();

		await userEvent.keyboard('{Escape}');

		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();
		expect(onOpenChange).toHaveBeenCalledWith(false);
	});

	it('should release body scroll-lock when unmounted while open', async () => {
		await page.render(<UnmountWhileOpenModal />);

		await page.getByRole('button', { name: /open modal/i }).click();
		await expect.element(page.getByRole('dialog')).toHaveAttribute('data-state', 'open');
		expect(document.body.hasAttribute('data-scroll-lock')).toBe(true);

		await page
			.getByRole('dialog')
			.getByRole('button', { name: /close and unmount/i })
			.click();
		await expect.element(page.getByText('unmounted')).toBeInTheDocument();

		await vi.waitFor(() => {
			expect(document.body.hasAttribute('data-scroll-lock')).toBe(false);
			expect(document.body.style.pointerEvents).not.toBe('none');
			expect(document.body.getAttribute('aria-hidden')).toBeNull();
		});
	});
});
