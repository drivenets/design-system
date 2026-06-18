import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsModal from '../ds-modal';

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
