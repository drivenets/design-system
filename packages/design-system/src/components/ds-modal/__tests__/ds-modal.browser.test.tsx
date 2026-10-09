import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsModal from '../ds-modal';
import type { DsModalProps } from '../ds-modal.types';
import styles from '../ds-modal.module.scss';

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

const FullScreenModal = (props: Partial<DsModalProps>) => (
	<DsModal open onOpenChange={vi.fn()} {...props}>
		<DsModal.Header>
			<DsModal.Title>Full screen modal</DsModal.Title>
			<DsModal.FullScreenTrigger aria-label="Toggle full screen" />
			<DsModal.CloseTrigger />
		</DsModal.Header>
		<DsModal.Body>
			<p>Body content</p>
		</DsModal.Body>
		<DsModal.Footer>
			<DsModal.Actions>
				<button type="button">Save</button>
			</DsModal.Actions>
		</DsModal.Footer>
	</DsModal>
);

const fullScreenTrigger = () => page.getByRole('button', { name: 'Toggle full screen' });

const getModal = () => page.getByRole('dialog').element() as HTMLElement;

const getModalStyle = () => getComputedStyle(getModal());

const viewportWidth = () => `${String(document.documentElement.clientWidth)}px`;
const viewportHeight = () => `${String(document.documentElement.clientHeight)}px`;

const waitForModalAnimations = () =>
	expect
		.poll(
			() =>
				getModal()
					.getAnimations()
					.filter((animation) => animation.playState === 'running').length,
		)
		.toBe(0);

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

	it('stays open on an outside click by default', async () => {
		const onOpenChange = vi.fn();
		await page.render(<ModalExample onOpenChange={onOpenChange} />);

		await page.getByRole('button', { name: /open modal/i }).click();
		await expect.element(page.getByRole('dialog')).toBeVisible();

		// The open modal disables pointer events outside it, backdrop included, so a click in the
		// viewport corner lands on <html> — outside the dialog, as a real click would.
		await page.elementLocator(document.documentElement).click({ position: { x: 1, y: 1 } });

		await expect.element(page.getByRole('dialog')).toBeVisible();
		expect(onOpenChange).not.toHaveBeenCalled();
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

describe('DsModal full screen', () => {
	it('fills the viewport when fullScreen', async () => {
		await page.render(<FullScreenModal fullScreen />);
		await expect.element(page.getByRole('dialog')).toBeVisible();

		await expect
			.poll(() => {
				const style = getModalStyle();
				return [style.width, style.height];
			})
			.toEqual([viewportWidth(), viewportHeight()]);
	});

	it('toggles full screen and its icon in uncontrolled mode and calls onFullScreenChange with the new value', async () => {
		const onFullScreenChange = vi.fn();
		await page.render(<FullScreenModal onFullScreenChange={onFullScreenChange} />);

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'false');
		await expect.element(fullScreenTrigger()).toHaveTextContent('open_in_full');

		await fullScreenTrigger().click();

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'true');
		await expect.element(fullScreenTrigger()).toHaveTextContent('close_fullscreen');
		expect(onFullScreenChange).toHaveBeenLastCalledWith(true);
		await expect.poll(() => getModalStyle().width).toBe(viewportWidth());

		await fullScreenTrigger().click();

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'false');
		await expect.element(fullScreenTrigger()).toHaveTextContent('open_in_full');
		await expect.poll(() => getModalStyle().width).not.toBe(viewportWidth());
		expect(onFullScreenChange).toHaveBeenLastCalledWith(false);
		expect(onFullScreenChange).toHaveBeenCalledTimes(2);
	});

	it('starts full screen when defaultFullScreen is set', async () => {
		await page.render(<FullScreenModal defaultFullScreen />);

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => getModalStyle().width).toBe(viewportWidth());
	});

	it('returns to defaultFullScreen when reopened after closing', async () => {
		const { rerender } = await page.render(<FullScreenModal />);

		await fullScreenTrigger().click();
		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'true');

		await rerender(<FullScreenModal open={false} />);
		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();

		await rerender(<FullScreenModal open />);

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'false');
		await expect.poll(() => getModalStyle().width).not.toBe(viewportWidth());
	});

	it('calls onFullScreenChange but follows only the fullScreen prop in controlled mode', async () => {
		const onFullScreenChange = vi.fn();
		const { rerender } = await page.render(
			<FullScreenModal fullScreen={false} onFullScreenChange={onFullScreenChange} />,
		);

		await fullScreenTrigger().click();

		expect(onFullScreenChange).toHaveBeenCalledExactlyOnceWith(true);
		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'false');
		expect(getModalStyle().width).not.toBe(viewportWidth());

		await rerender(<FullScreenModal fullScreen onFullScreenChange={onFullScreenChange} />);

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => getModalStyle().width).toBe(viewportWidth());

		await fullScreenTrigger().click();

		expect(onFullScreenChange).toHaveBeenLastCalledWith(false);
		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'true');
		expect(getModalStyle().width).toBe(viewportWidth());
	});

	it('stays controlled when fullScreen is passed without onFullScreenChange', async () => {
		await page.render(<FullScreenModal fullScreen={false} />);

		await fullScreenTrigger().click();

		await expect.element(fullScreenTrigger()).toHaveAttribute('aria-pressed', 'false');
		expect(getModalStyle().width).not.toBe(viewportWidth());
	});

	it('keeps the footer at the bottom edge while resizing to full screen', async () => {
		await page.render(<FullScreenModal />);
		await expect.element(page.getByRole('dialog')).toBeVisible();
		await waitForModalAnimations();

		await fullScreenTrigger().click();

		// Freeze the resize halfway to inspect a mid-transition frame
		const transitions = getModal()
			.getAnimations()
			.filter((animation) => animation instanceof CSSTransition);
		expect(transitions.length).toBeGreaterThan(0);
		transitions.forEach((transition) => {
			transition.pause();
			transition.currentTime = 100;
		});

		const modalRect = getModal().getBoundingClientRect();
		const footer = styles.footer ? getModal().getElementsByClassName(styles.footer).item(0) : null;

		expect(modalRect.width).toBeGreaterThan(0);
		expect(modalRect.width).toBeLessThan(document.documentElement.clientWidth);
		expect(footer?.getBoundingClientRect().bottom).toBeCloseTo(modalRect.bottom, 0);
	});

	it('ignores columns while full screen and restores the columns width when toggled back', async () => {
		const { rerender } = await page.render(<FullScreenModal columns={3} />);
		await expect.element(page.getByRole('dialog')).toBeVisible();
		await waitForModalAnimations();

		const columnsWidth = getModalStyle().width;
		expect(columnsWidth).not.toBe(viewportWidth());

		await fullScreenTrigger().click();
		await expect.poll(() => getModalStyle().width).toBe(viewportWidth());

		await rerender(<FullScreenModal columns={8} />);
		await waitForModalAnimations();
		expect(getModalStyle().width).toBe(viewportWidth());

		await rerender(<FullScreenModal columns={3} />);
		await fullScreenTrigger().click();
		await expect.poll(() => getModalStyle().width).toBe(columnsWidth);
	});
});
