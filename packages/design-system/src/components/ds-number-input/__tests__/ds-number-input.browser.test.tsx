import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsNumberInput from '../ds-number-input';
import { DsFormControl } from '../../ds-form-control';

describe('DsNumberInput id forwarding', () => {
	it('forwards an explicit id to the underlying input', async () => {
		await page.render(<DsNumberInput id="ports" placeholder="Enter number" />);

		await expect.element(page.getByPlaceholder('Enter number')).toHaveAttribute('id', 'ports');
	});

	it('associates the DsFormControl label with the input', async () => {
		await page.render(
			<DsFormControl id="number-of-ports" label="Number of ports">
				<DsFormControl.NumberInput placeholder="Enter number" />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Number of ports');
		await expect.element(input).toBeVisible();
		await expect.element(input).toHaveAttribute('id', 'number-of-ports');
	});
});

describe('DsNumberInput behavior', () => {
	it('clamps a value above max down to max on blur', async () => {
		await page.render(
			<DsNumberInput placeholder="Enter number" defaultValue={50} min={0} max={100} step={1} />,
		);

		const input = page.getByPlaceholder('Enter number');
		await input.fill('150');
		await userEvent.tab();

		await expect.element(input).toHaveValue('100');
	});

	it('clamps a value below min up to min on blur', async () => {
		await page.render(
			<DsNumberInput placeholder="Enter number" defaultValue={50} min={0} max={100} step={1} />,
		);

		const input = page.getByPlaceholder('Enter number');
		await input.fill('-10');
		await userEvent.tab();

		await expect.element(input).toHaveValue('0');
	});

	it('increments and decrements the value by step', async () => {
		await page.render(
			<DsNumberInput placeholder="Enter number" defaultValue={50} min={0} max={100} step={1} />,
		);

		const input = page.getByPlaceholder('Enter number');
		const decrement = page.getByRole('button', { name: /decrease/i });
		const increment = page.getByRole('button', { name: /increase/i });

		await increment.click();
		await expect.element(input).toHaveValue('51');

		await decrement.click();
		await expect.element(input).toHaveValue('50');
	});

	it('disables the decrement button at min', async () => {
		await page.render(
			<DsNumberInput placeholder="Enter number" defaultValue={0} min={0} max={100} step={1} />,
		);

		await expect.element(page.getByRole('button', { name: /decrease/i })).toBeDisabled();
		await expect.element(page.getByRole('button', { name: /increase/i })).not.toBeDisabled();
	});

	it('disables the increment button at max', async () => {
		await page.render(
			<DsNumberInput placeholder="Enter number" defaultValue={100} min={0} max={100} step={1} />,
		);

		await expect.element(page.getByRole('button', { name: /increase/i })).toBeDisabled();
		await expect.element(page.getByRole('button', { name: /decrease/i })).not.toBeDisabled();
	});

	it('reflects external state changes in the controlled input', async () => {
		function ControlledNumberInput() {
			const [value, setValue] = useState(42);

			return (
				<>
					<DsNumberInput
						placeholder="Enter number"
						min={0}
						max={100}
						step={1}
						value={value}
						onValueChange={setValue}
					/>
					<button type="button" onClick={() => setValue(0)}>
						Reset to 0
					</button>
					<button type="button" onClick={() => setValue(100)}>
						Set to 100
					</button>
				</>
			);
		}

		await page.render(<ControlledNumberInput />);

		const input = page.getByPlaceholder('Enter number');
		await expect.element(input).toHaveValue('42');

		await page.getByRole('button', { name: 'Reset to 0' }).click();
		await expect.element(input).toHaveValue('0');

		await page.getByRole('button', { name: 'Set to 100' }).click();
		await expect.element(input).toHaveValue('100');
	});

	it('updates controlled state when the user types and blurs', async () => {
		function ControlledNumberInput() {
			const [value, setValue] = useState(42);

			return (
				<>
					<DsNumberInput
						placeholder="Enter number"
						min={0}
						max={100}
						step={1}
						value={value}
						onValueChange={setValue}
					/>
					<span>Current value: {value}</span>
				</>
			);
		}

		await page.render(<ControlledNumberInput />);

		const input = page.getByPlaceholder('Enter number');
		await input.fill('50');
		await userEvent.tab();

		await expect.element(input).toHaveValue('50');
		await expect.element(page.getByText('Current value: 50')).toBeVisible();
	});
});
