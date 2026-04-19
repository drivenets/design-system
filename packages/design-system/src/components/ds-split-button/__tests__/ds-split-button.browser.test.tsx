import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsSplitButton from '../ds-split-button';
import type { DsSelectProps } from '../../ds-select';

const refreshOptions = [
	{ label: '30s', value: '30' },
	{ label: '1m', value: '60' },
	{ label: '5m', value: '300' },
];

const defaultSelect = {
	options: refreshOptions,
	value: '30',
	onValueChange: vi.fn(),
	multiple: false,
} satisfies DsSelectProps;

describe('DsSplitButton', () => {
	it('calls slotProps.button.onClick when primary action is clicked', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsSplitButton
				slotProps={{
					button: {
						icon: 'refresh',
						'aria-label': 'Refresh',
						onClick,
					},
					select: defaultSelect,
				}}
			/>,
		);

		await page.getByRole('button', { name: 'Refresh' }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('updates select value when an option is chosen', async () => {
		const onValueChange = vi.fn();

		function Controlled() {
			const [value, setValue] = useState('30');

			return (
				<DsSplitButton
					slotProps={{
						button: {
							icon: 'refresh',
							'aria-label': 'Refresh',
							onClick: vi.fn(),
						},
						select: {
							options: refreshOptions,
							value,
							onValueChange: (v) => {
								onValueChange(v);
								setValue(v);
							},
							multiple: false,
						},
					}}
				/>
			);
		}

		await page.render(<Controlled />);

		await page.getByRole('combobox').click();
		await page.getByRole('option', { name: /1m/i }).click();

		expect(onValueChange).toHaveBeenCalledWith('60');

		const combobox = page.getByRole('combobox');
		await expect.element(combobox).toHaveTextContent(/1m/);
	});

	it('disables primary button and select when disabled', async () => {
		const onClick = vi.fn();
		const onValueChange = vi.fn();

		await page.render(
			<DsSplitButton
				disabled
				slotProps={{
					button: {
						icon: 'refresh',
						'aria-label': 'Refresh',
						onClick,
					},
					select: {
						options: refreshOptions,
						value: '30',
						onValueChange,
						multiple: false,
					},
				}}
			/>,
		);

		const primary = page.getByRole('button', { name: 'Refresh', disabled: true });
		const combobox = page.getByRole('combobox', { disabled: true });

		await expect.element(primary).toBeDisabled();
		await expect.element(combobox).toBeDisabled();

		await primary.click({ force: true });
		await combobox.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('sets loading state on primary button and blocks click', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsSplitButton
				slotProps={{
					button: {
						loading: true,
						icon: 'refresh',
						'aria-label': 'Refresh',
						onClick,
					},
					select: defaultSelect,
				}}
			/>,
		);

		const primary = page.getByRole('button', { name: 'Refresh' });

		await expect.element(primary).toHaveAttribute('aria-busy', 'true');
		await expect.element(primary).toHaveAttribute('data-loading', '');

		await primary.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
	});

	it('keeps primary button and select the same height at medium size', async () => {
		await page.render(
			<DsSplitButton
				size="medium"
				slotProps={{
					button: {
						icon: 'refresh',
						'aria-label': 'Refresh',
					},
					select: defaultSelect,
				}}
			/>,
		);

		const buttonHeight = page
			.getByRole('button', { name: 'Refresh' })
			.element()
			.getBoundingClientRect().height;
		const selectControl = page.getByRole('combobox').element().parentElement as HTMLElement;
		const selectHeight = selectControl.getBoundingClientRect().height;

		expect(buttonHeight).toBe(selectHeight);
	});

	it('keeps primary button and select the same height at small size', async () => {
		await page.render(
			<DsSplitButton
				size="small"
				slotProps={{
					button: {
						icon: 'refresh',
						'aria-label': 'Refresh',
					},
					select: defaultSelect,
				}}
			/>,
		);

		const buttonHeight = page
			.getByRole('button', { name: 'Refresh' })
			.element()
			.getBoundingClientRect().height;
		const selectControl = page.getByRole('combobox').element().parentElement as HTMLElement;
		const selectHeight = selectControl.getBoundingClientRect().height;

		expect(buttonHeight).toBe(selectHeight);
	});
});
