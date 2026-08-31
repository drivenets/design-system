import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTextInput from '../ds-text-input';
import { DsIcon } from '../../ds-icon';

describe('DsTextInput', () => {
	it('updates the value when the user types', async () => {
		await page.render(<DsTextInput placeholder="Enter text..." />);

		const input = page.getByPlaceholder('Enter text...');
		await input.fill('Hello World');

		await expect.element(input).toHaveValue('Hello World');
	});

	it('supports external, typed, and cleared controlled updates', async () => {
		function Controlled() {
			const [value, setValue] = useState('initial value');

			return (
				<div>
					<DsTextInput placeholder="Controlled input" value={value} onValueChange={setValue} />
					<button type="button" onClick={() => setValue('updated value')}>
						Update value
					</button>
					<button type="button" onClick={() => setValue('')}>
						Clear value
					</button>
				</div>
			);
		}

		await page.render(<Controlled />);

		const input = page.getByPlaceholder('Controlled input');
		await expect.element(input).toHaveValue('initial value');

		await page.getByRole('button', { name: 'Update value' }).click();
		await expect.element(input).toHaveValue('updated value');

		await input.fill('user input');
		await expect.element(input).toHaveValue('user input');

		await page.getByRole('button', { name: 'Clear value' }).click();
		await expect.element(input).toHaveValue('');
	});

	it('accepts an email value and clears it via the end adornment', async () => {
		function Controlled() {
			const [value, setValue] = useState('');

			return (
				<DsTextInput
					type="email"
					placeholder="Enter email address..."
					value={value}
					onValueChange={setValue}
					slots={{
						endAdornment: (
							<button type="button" aria-label="Clear email" onClick={() => setValue('')}>
								<DsIcon icon="close" size="tiny" />
							</button>
						),
					}}
				/>
			);
		}

		await page.render(<Controlled />);

		const input = page.getByPlaceholder('Enter email address...');
		await input.fill('test@example.com');

		await expect.element(input).toHaveValue('test@example.com');
		await expect.element(input).toHaveAttribute('type', 'email');

		await page.getByRole('button', { name: 'Clear email' }).click();
		await expect.element(input).toHaveValue('');
	});

	it('shows a clear button only when there is a value and clears on click', async () => {
		function Interactive() {
			const [value, setValue] = useState('');

			return (
				<DsTextInput
					placeholder="Type something..."
					value={value}
					onValueChange={setValue}
					slots={{
						startAdornment: <DsIcon icon="search" size="tiny" />,
						endAdornment: value ? (
							<button type="button" aria-label="Clear input" onClick={() => setValue('')}>
								<DsIcon icon="close" size="tiny" />
							</button>
						) : undefined,
					}}
				/>
			);
		}

		await page.render(<Interactive />);

		const input = page.getByPlaceholder('Type something...');
		await expect.element(page.getByRole('button', { name: 'Clear input' })).not.toBeInTheDocument();

		await input.fill('Hello World');
		await expect.element(input).toHaveValue('Hello World');

		const clearButton = page.getByRole('button', { name: 'Clear input' });
		await expect.element(clearButton).toBeVisible();

		await clearButton.click();
		await expect.element(input).toHaveValue('');
	});
});
