import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsButton } from '../index';

describe('DsButton', () => {
	it('calls onClick when clicked', async () => {
		const onClick = vi.fn();

		await page.render(<DsButton onClick={onClick}>Click me</DsButton>);

		await page.getByRole('button', { name: 'Click me' }).click();

		expect(onClick).toHaveBeenCalled();
	});

	it('does not call onClick when disabled', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButton onClick={onClick} disabled>
				Click me
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Click me', disabled: true });

		await button.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
		await expect.element(button).toBeDisabled();
	});

	it('applies selected state', async () => {
		await page.render(<DsButton selected>Label</DsButton>);

		const button = page.getByRole('button', { name: 'Label' });

		await expect.element(button).toHaveAttribute('data-selected', 'true');
	});

	it('sets data-color for error palette', async () => {
		await page.render(<DsButton color="error">Delete</DsButton>);

		const button = page.getByRole('button', { name: 'Delete' });

		await expect.element(button).toHaveAttribute('data-color', 'error');
	});

	it('applies iconOnly layout when icon is set without children', async () => {
		await page.render(<DsButton icon="check_circle" aria-label="Confirm" />);

		const button = page.getByRole('button', { name: 'Confirm' });

		await expect.element(button).toHaveAttribute('data-icon-only', 'true');
	});

	it('does not apply iconOnly layout when icon is set with children', async () => {
		await page.render(<DsButton icon="check_circle">Save</DsButton>);

		const button = page.getByRole('button', { name: 'Save' });

		await expect.element(button).not.toHaveAttribute('data-icon-only');
	});

	it('renders native submit button type', async () => {
		await page.render(<DsButton type="submit">Send</DsButton>);

		const button = page.getByRole('button', { name: 'Send' });

		await expect.element(button).toHaveAttribute('type', 'submit');
	});

	it('merges className', async () => {
		await page.render(<DsButton className="extra">X</DsButton>);

		await expect.element(page.getByRole('button', { name: 'X' })).toHaveClass('extra');
	});

	it('sets aria-busy and data-loading when loading', async () => {
		await page.render(<DsButton loading>Save</DsButton>);

		const button = page.getByRole('button', { name: 'Save' });

		await expect.element(button).toHaveAttribute('aria-busy', 'true');
		await expect.element(button).toHaveAttribute('data-loading', '');
	});

	it('renders spinner instead of icon when loading', async () => {
		await page.render(<DsButton loading icon="check_circle" aria-label="Saving" />);

		const button = page.getByRole('button', { name: 'Saving' });

		await expect.element(button).toHaveAttribute('aria-busy', 'true');

		const el = button.element();
		expect(el.querySelector('svg')).toBeTruthy();
		expect(el.querySelector('[aria-hidden]')).toBeNull();
	});

	it('does not call onClick when loading', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButton loading onClick={onClick}>
				Save
			</DsButton>,
		);

		await page.getByRole('button', { name: 'Save' }).click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
	});

	it('sets data-variant for each variant', async () => {
		for (const variant of ['primary', 'secondary', 'tertiary'] as const) {
			await page.render(
				<DsButton variant={variant} aria-label={variant}>
					Label
				</DsButton>,
			);

			await expect
				.element(page.getByRole('button', { name: variant }))
				.toHaveAttribute('data-variant', variant);
		}
	});

	it('applies default props when none are specified', async () => {
		await page.render(<DsButton>Default</DsButton>);

		const button = page.getByRole('button', { name: 'Default' });

		await expect.element(button).toHaveAttribute('data-color', 'default');
		await expect.element(button).toHaveAttribute('data-variant', 'primary');
		await expect.element(button).toHaveAttribute('data-size', 'medium');
	});

	it('forwards ref to the button element', async () => {
		const ref = createRef<HTMLButtonElement>();

		await page.render(<DsButton ref={ref}>Ref</DsButton>);

		expect(ref.current).toBeInstanceOf(HTMLButtonElement);
		expect(ref.current?.textContent).toBe('Ref');
	});

	it('loading without disabled keeps normal colors', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButton loading onClick={onClick}>
				Saving
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Saving', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('data-loading', '');
		await button.click({ force: true });
		expect(onClick).not.toHaveBeenCalled();
	});

	it('loading + disabled shows spinner with disabled styling', async () => {
		await page.render(
			<DsButton loading disabled>
				Saving
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Saving', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).not.toHaveAttribute('data-loading');
		await expect.element(button).toHaveAttribute('aria-busy', 'true');
	});

	it('selected + disabled does not remove selected styling', async () => {
		await page.render(
			<DsButton selected disabled>
				Toggle
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Toggle', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('aria-pressed', 'true');
		await expect.element(button).toHaveAttribute('data-selected', 'true');
	});

	it('spreads rest props onto the button element', async () => {
		await page.render(
			<DsButton data-testid="my-btn" aria-label="Spread">
				Rest
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Spread' });

		await expect.element(button).toHaveAttribute('data-testid', 'my-btn');
	});
});
