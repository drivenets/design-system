import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsPasswordInput from '../ds-password-input';

describe('DsPasswordInput', () => {
	it('toggles visibility between password and text', async () => {
		await page.render(<DsPasswordInput placeholder="Enter password" />);

		const input = page.getByPlaceholder('Enter password');
		const toggle = page.getByRole('button', { name: /toggle password visibility/i });

		await input.fill('secret-password');
		await expect.element(input).toHaveValue('secret-password');
		await expect.element(input).toHaveAttribute('type', 'password');

		await toggle.click();
		await expect.element(input).toHaveAttribute('type', 'text');

		await toggle.click();
		await expect.element(input).toHaveAttribute('type', 'password');
	});

	it('supports controlled value via onValueChange', async () => {
		function Controlled() {
			const [value, setValue] = useState('initial-password');

			return (
				<div>
					<DsPasswordInput placeholder="Enter password" value={value} onValueChange={setValue} />
					<div>Current value: {value}</div>
					<button type="button" onClick={() => setValue('new-password')}>
						Set new password
					</button>
					<button type="button" onClick={() => setValue('')}>
						Clear password
					</button>
				</div>
			);
		}

		await page.render(<Controlled />);

		const input = page.getByPlaceholder('Enter password');

		await expect.element(input).toHaveValue('initial-password');
		await expect.element(page.getByText('Current value: initial-password')).toBeVisible();

		await page.getByRole('button', { name: 'Set new password' }).click();
		await expect.element(input).toHaveValue('new-password');
		await expect.element(page.getByText('Current value: new-password')).toBeVisible();

		await input.fill('user-input');
		await expect.element(input).toHaveValue('user-input');
		await expect.element(page.getByText('Current value: user-input')).toBeVisible();

		await page.getByRole('button', { name: 'Clear password' }).click();
		await expect.element(input).toHaveValue('');
	});
});
