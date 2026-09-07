import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsBotButton from '../ds-bot-button';

describe('DsBotButton', () => {
	it('names itself from the bot label and reports the unpressed toggle state', async () => {
		await page.render(<DsBotButton />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await expect.element(button).toHaveAttribute('aria-pressed', 'false');
		await expect.element(button).not.toBeDisabled();
	});

	it('fires onClick and follows the open state the caller feeds back', async () => {
		const onClick = vi.fn();

		const Harness = () => {
			const [open, setOpen] = useState(false);

			return (
				<DsBotButton
					selected={open}
					onClick={() => {
						onClick();
						setOpen((wasOpen) => !wasOpen);
					}}
				/>
			);
		};

		await page.render(<Harness />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await button.click();

		expect(onClick).toHaveBeenCalledOnce();
		await expect.element(button).toHaveAttribute('aria-pressed', 'true');

		await button.click();

		await expect.element(button).toHaveAttribute('aria-pressed', 'false');
	});

	it('blocks clicks and advertises itself as busy while loading', async () => {
		const onClick = vi.fn();

		await page.render(<DsBotButton loading onClick={onClick} />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('aria-busy', 'true');

		await button.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
	});

	/**
	 * `loading` blocks interaction without clearing the pressed state: the panel can be open while
	 * the bot is still answering, so the button has to keep reporting it as open.
	 */
	it('keeps the pressed state while loading when selected', async () => {
		await page.render(<DsBotButton selected loading />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await expect.element(button).toHaveAttribute('data-loading', '');
		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('aria-pressed', 'true');
		await expect.element(button).toHaveAttribute('data-selected', 'true');
	});

	it('blocks clicks when disabled', async () => {
		const onClick = vi.fn();

		await page.render(<DsBotButton disabled onClick={onClick} />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await expect.element(button).toBeDisabled();
		await expect.element(button).not.toHaveAttribute('aria-busy');

		await button.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
	});

	it('takes its accessible name from the localized label', async () => {
		await page.render(<DsBotButton locale={{ label: 'NetGen (DE)' }} />);

		await expect.element(page.getByRole('button', { name: 'NetGen (DE)' })).toBeVisible();
	});

	/**
	 * Caller-supplied ARIA is additive, not a replacement: the launcher is a toggle, so
	 * `aria-pressed` stays put alongside anything a shell adds for its own panel wiring.
	 */
	it('forwards caller ARIA alongside its own toggle semantics', async () => {
		await page.render(<DsBotButton aria-controls="net-gen-panel" />);

		const button = page.getByRole('button', { name: 'NetGen' });

		await expect.element(button).toHaveAttribute('aria-controls', 'net-gen-panel');
		await expect.element(button).toHaveAttribute('aria-pressed', 'false');
	});
});
