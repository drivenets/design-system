import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsExpandableTextInput } from '../ds-expandable-text-input';

describe('DsExpandableTextInput', () => {
	it('should render icon button and input', async () => {
		await page.render(<DsExpandableTextInput icon="search" />);

		const iconButton = page.getByRole('button', { name: 'Open text input' });
		await expect.element(iconButton).toBeInTheDocument();
		await expect.element(iconButton).toHaveAttribute('aria-hidden', 'false');
		await expect.element(page.getByRole('textbox')).toBeInTheDocument();
	});

	it('should expand on click and focus input', async () => {
		const onExpandChange = vi.fn();

		await page.render(<DsExpandableTextInput icon="search" onExpandChange={onExpandChange} />);

		await page.getByRole('button', { name: 'Open text input' }).click();

		await expect.element(page.getByRole('textbox')).toHaveFocus();
		expect(onExpandChange).toHaveBeenLastCalledWith(true);
	});

	it('should clear with button', async () => {
		const onClear = vi.fn();
		const onExpandChange = vi.fn();

		await page.render(
			<DsExpandableTextInput icon="search" onClear={onClear} onExpandChange={onExpandChange} />,
		);

		await page.getByRole('button', { name: 'Open text input' }).click();
		await page.getByRole('textbox').fill('test text');
		await page.getByRole('button', { name: 'Clear' }).click();

		expect(onClear).toHaveBeenCalled();
		expect(onExpandChange).toHaveBeenLastCalledWith(false);
		await expect.element(page.getByRole('textbox')).toHaveValue('');
	});

	it('should clear with button at small size', async () => {
		const onClear = vi.fn();
		const onExpandChange = vi.fn();

		await page.render(
			<DsExpandableTextInput icon="search" size="small" onClear={onClear} onExpandChange={onExpandChange} />,
		);

		await page.getByRole('button', { name: 'Open text input' }).click();
		await page.getByRole('textbox').fill('test');
		await page.getByRole('button', { name: 'Clear' }).click();

		expect(onClear).toHaveBeenCalled();
		expect(onExpandChange).toHaveBeenLastCalledWith(false);
		await expect.element(page.getByRole('textbox')).toHaveValue('');
	});

	it('should collapse on blur when input is empty', async () => {
		const onExpandChange = vi.fn();

		await page.render(<DsExpandableTextInput icon="search" onExpandChange={onExpandChange} />);

		await page.getByRole('button', { name: 'Open text input' }).click();
		await page.getByRole('textbox').fill('test');
		await page.getByRole('textbox').clear();
		page.getByRole('textbox').element().blur();

		expect(onExpandChange).toHaveBeenLastCalledWith(false);
	});

	it('should collapse on blur without typing', async () => {
		const onExpandChange = vi.fn();

		await page.render(<DsExpandableTextInput icon="search" onExpandChange={onExpandChange} />);

		await page.getByRole('button', { name: 'Open text input' }).click();
		page.getByRole('textbox').element().blur();

		expect(onExpandChange).toHaveBeenLastCalledWith(false);
	});

	it('should stay expanded on blur when input has value', async () => {
		const onExpandChange = vi.fn();

		await page.render(<DsExpandableTextInput icon="search" onExpandChange={onExpandChange} />);

		await page.getByRole('button', { name: 'Open text input' }).click();
		await page.getByRole('textbox').fill('test text');
		page.getByRole('textbox').element().blur();

		expect(onExpandChange).toHaveBeenLastCalledWith(true);
	});

	it('should work in controlled mode', async () => {
		const onClear = vi.fn();
		const onExpandChange = vi.fn();

		function ControlledInput() {
			const [value, setValue] = useState('query');

			return (
				<DsExpandableTextInput
					icon="search"
					value={value}
					onExpandChange={onExpandChange}
					onChange={(e) => setValue(e.target.value)}
					onClear={() => {
						setValue('');
						onClear();
					}}
				/>
			);
		}

		await page.render(<ControlledInput />);

		await expect.element(page.getByRole('textbox')).toHaveValue('query');
		await expect.element(page.getByRole('button', { name: 'Clear' })).toBeVisible();

		await page.getByRole('button', { name: 'Clear' }).click();

		expect(onClear).toHaveBeenCalled();
		expect(onExpandChange).toHaveBeenLastCalledWith(false);
		await expect.element(page.getByRole('textbox')).toHaveValue('');
	});

	it('should start expanded with defaultValue', async () => {
		const onClear = vi.fn();
		const onExpandChange = vi.fn();

		await page.render(
			<DsExpandableTextInput
				icon="search"
				defaultValue="initial search"
				onClear={onClear}
				onExpandChange={onExpandChange}
			/>,
		);

		await expect.element(page.getByRole('textbox')).toHaveValue('initial search');
		await expect.element(page.getByRole('button', { name: 'Clear' })).toBeVisible();

		await page.getByRole('button', { name: 'Clear' }).click();

		expect(onClear).toHaveBeenCalled();
		expect(onExpandChange).toHaveBeenLastCalledWith(false);
		await expect.element(page.getByRole('textbox')).toHaveValue('');
	});
});
