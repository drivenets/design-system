import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsCheckbox from '../ds-checkbox';

const checkboxRoot = (idx = 0) =>
	page.elementLocator(
		document.querySelectorAll<HTMLElement>('[data-scope="checkbox"][data-part="root"]')[idx] as HTMLElement,
	);

describe('DsCheckbox', () => {
	it('should toggle checked state when clicked', async () => {
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" className="custom-checkbox" />);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();

		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should render in indeterminate state', async () => {
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

		await page.render(<IndeterminateCheckbox />);

		await expect.element(checkboxRoot()).toHaveAttribute('data-state', 'indeterminate');
	});

	it('should support disabled state', async () => {
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" disabled />);

		const checkbox = page.getByRole('checkbox', { disabled: true });

		await expect.element(checkbox).toBeDisabled();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		await checkbox.click({ force: true });
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should call onCheckedChange when toggled', async () => {
		const onCheckedChange = vi.fn();

		await page.render(<DsCheckbox label="label" onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);

		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(false);
	});

	it('should support warning variant', async () => {
		const onCheckedChange = vi.fn();

		await page.render(
			<DsCheckbox variant="warning" label="label" labelInfo="labelInfo" onCheckedChange={onCheckedChange} />,
		);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();
		await expect.element(page.getByText('label', { exact: true })).toBeVisible();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('should toggle when clicking the label', async () => {
		const onCheckedChange = vi.fn();

		await page.render(<DsCheckbox label="label" onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();

		await page.getByText('label').click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});
});
