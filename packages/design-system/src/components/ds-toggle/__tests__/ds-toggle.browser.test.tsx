import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsToggle from '../ds-toggle';

const label = 'Text for label';
const labelInfo = 'Text for info';

describe('DsToggle', () => {
	it('toggles from unchecked to checked when clicked (uncontrolled)', async () => {
		const onValueChange = vi.fn();

		await page.render(<DsToggle label={label} labelInfo={labelInfo} onValueChange={onValueChange} />);

		const toggle = page.getByRole('checkbox', { name: label, exact: false });

		await expect.element(toggle).not.toBeChecked();
		await expect.element(page.getByText(labelInfo)).toBeVisible();

		await toggle.click();
		await expect.element(toggle).toBeChecked();
		expect(onValueChange).toHaveBeenCalledWith(true);
	});

	it('unchecks when clicked (controlled)', async () => {
		function ControlledToggle() {
			const [checked, setChecked] = useState(true);

			return <DsToggle label={label} labelInfo={labelInfo} checked={checked} onValueChange={setChecked} />;
		}

		await page.render(<ControlledToggle />);

		const toggle = page.getByRole('checkbox', { name: label, exact: false });

		await expect.element(toggle).toBeChecked();

		await toggle.click();
		await expect.element(toggle).not.toBeChecked();
	});

	it('does not change state when disabled and clicked', async () => {
		await page.render(<DsToggle label={label} labelInfo={labelInfo} disabled />);

		const toggle = page.getByRole('checkbox', { disabled: true });

		await expect.element(toggle).toBeDisabled();
		await expect.element(toggle).not.toBeChecked();
		await expect.element(page.getByText(labelInfo)).toBeVisible();

		await toggle.click({ force: true });
		await expect.element(toggle).not.toBeChecked();
	});

	it('uses aria-label as the accessible name when there is no label or children', async () => {
		await page.render(<DsToggle aria-label="Enable notifications" />);

		const toggle = page.getByRole('checkbox', { name: 'Enable notifications' });

		await expect.element(toggle).toHaveAccessibleName('Enable notifications');

		// Chromium falls back to aria-label when aria-labelledby resolves to empty text; jsdom
		// (consumer unit tests) does not, so there must be no empty label for it to point at.
		const labelledBy = toggle.element().getAttribute('aria-labelledby');
		expect(labelledBy ? document.getElementById(labelledBy) : null).toBeNull();

		await expect.element(toggle).not.toBeChecked();

		await toggle.click();
		await expect.element(toggle).toBeChecked();
	});

	it('uses custom children as the accessible label and toggles on click', async () => {
		await page.render(<DsToggle size="small">Custom label totally!</DsToggle>);

		const toggle = page.getByRole('checkbox', { name: 'Custom label totally!' });

		await expect.element(toggle).not.toBeChecked();

		await toggle.click();
		await expect.element(toggle).toBeChecked();
	});
});
