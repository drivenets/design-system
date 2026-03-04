import { describe, expect, it, vi } from 'vitest';
import DsButton from '../ds-button-new';
import { page } from 'vitest/browser';

describe('DsButton', () => {
	it('should trigger onClick handler when clicked', async () => {
		// Arrange.
		const onClick = vi.fn();

		await page.render(<DsButton onClick={onClick}>Click me</DsButton>);

		// Act.
		await page.getByRole('button', { name: 'Click me' }).click();

		// Assert.
		expect(onClick).toHaveBeenCalled();
	});

	it('should support disabled state', async () => {
		// Arrange.
		const onClick = vi.fn();

		await page.render(
			<DsButton onClick={onClick} disabled>
				Click me
			</DsButton>,
		);

		const button = page.getByRole('button', { name: 'Click me', disabled: true });

		// Act.
		await button.click({ force: true });

		// Assert.
		expect(onClick).not.toHaveBeenCalled();
		await expect.element(button).toBeDisabled();
	});

	it('should support custom class names', async () => {
		// Arrange.
		const className = 'custom-class';

		// Act.
		await page.render(<DsButton className={className}>Click me</DsButton>);

		// Assert.
		await expect.element(page.getByRole('button', { name: 'Click me' })).toHaveClass(className);
	});
});
