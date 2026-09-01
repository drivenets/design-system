import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsTextarea from '../ds-textarea';

describe('DsTextarea', () => {
	it('updates the value as the user types', async () => {
		function ControlledTextarea() {
			const [value, setValue] = useState('');

			return (
				<DsTextarea
					placeholder="Enter your text here..."
					rows={3}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			);
		}

		await page.render(<ControlledTextarea />);

		const textarea = page.getByRole('textbox');
		await userEvent.type(textarea, 'Hello world Design System!');

		await expect.element(textarea).toHaveValue('Hello world Design System!');
	});

	it('does not accept input when disabled', async () => {
		const onChange = vi.fn();

		await page.render(<DsTextarea value="This textarea is disabled" disabled onChange={onChange} />);

		const textarea = page.getByRole('textbox', { disabled: true });
		await expect.element(textarea).toBeDisabled();

		await textarea.click({ force: true });

		await expect.element(textarea).toHaveValue('This textarea is disabled');
		expect(onChange).not.toHaveBeenCalled();
	});

	it('truncates typed input to maxLength characters', async () => {
		const maxLength = 50;

		function ControlledTextarea() {
			const [value, setValue] = useState('');

			return (
				<DsTextarea
					placeholder="Maximum 50 characters allowed"
					maxLength={maxLength}
					rows={3}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			);
		}

		await page.render(<ControlledTextarea />);

		const longText = 'This is a very long text that should be truncated at 50 characters';
		const textarea = page.getByRole('textbox');
		await userEvent.type(textarea, longText);

		await expect.element(textarea).toHaveValue(longText.slice(0, maxLength));
	});
});
