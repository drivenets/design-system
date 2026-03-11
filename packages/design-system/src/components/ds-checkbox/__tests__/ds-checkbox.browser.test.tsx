import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsCheckbox from '../ds-checkbox';

describe('DsCheckbox', () => {
	it('should toggle checked state when clicked', async () => {
		// Arrange.
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" className="custom-checkbox" />);

		const checkbox = page.getByRole('checkbox');

		// Assert.
		await expect.element(checkbox).not.toBeChecked();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		// Act & Assert.
		await checkbox.click();
		await expect.element(checkbox).toBeChecked();

		// Act & Assert.
		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should render in indeterminate state', async () => {
		// Arrange.
		function IndeterminateCheckbox() {
			const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

			return (
				<DsCheckbox
					label="label"
					labelInfo="labelInfo"
					checked={checked}
					onCheckedChange={(newState) => setChecked(newState)}
				/>
			);
		}

		// Act.
		await page.render(<IndeterminateCheckbox />);

		// Assert.
		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).toHaveAttribute('data-state', 'indeterminate');
	});

	it('should support disabled state', async () => {
		// Arrange.
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" disabled />);

		const checkbox = page.getByRole('checkbox', { disabled: true });

		// Assert.
		await expect.element(checkbox).toBeDisabled();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		// Act & Assert.
		await checkbox.click({ force: true });
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should call onCheckedChange when toggled', async () => {
		// Arrange.
		const onCheckedChange = vi.fn();

		await page.render(<DsCheckbox onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		// Act & Assert.
		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);

		// Act & Assert.
		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(false);
	});

	it('should support warning variant', async () => {
		// Arrange.
		const onCheckedChange = vi.fn();

		await page.render(
			<DsCheckbox variant="warning" label="label" labelInfo="labelInfo" onCheckedChange={onCheckedChange} />,
		);

		const checkbox = page.getByRole('checkbox');

		// Assert.
		await expect.element(checkbox).not.toBeChecked();
		await expect.element(page.getByText('label')).toBeVisible();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		// Act & Assert.
		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('should toggle when clicking the label', async () => {
		// Arrange.
		const onCheckedChange = vi.fn();

		await page.render(<DsCheckbox label="label" onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		// Assert.
		await expect.element(checkbox).not.toBeChecked();

		// Act & Assert.
		await page.getByText('label').click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});
});
