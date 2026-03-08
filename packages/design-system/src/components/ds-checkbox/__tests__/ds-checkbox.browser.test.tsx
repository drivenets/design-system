import { useState } from 'react';
import { describe, expect, it } from 'vitest';
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
});
