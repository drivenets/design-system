import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsSlider from '../ds-slider';
import type { DsSliderValue } from '../ds-slider.types';

function focus(locator: ReturnType<typeof page.getByRole>) {
	(locator.element() as HTMLElement).focus();
}

describe('DsSlider', () => {
	it('renders the label and the numeric output', async () => {
		await page.render(<DsSlider label="Input label" defaultValue={36} />);

		await expect.element(page.getByText('Input label')).toBeVisible();
		await expect
			.element(page.getByRole('slider', { name: /Input label/i }))
			.toHaveAttribute('aria-valuenow', '36');
	});

	it('steps the value with the keyboard and reports the change', async () => {
		const onValueChange = vi.fn();

		await page.render(<DsSlider label="Level" defaultValue={36} onValueChange={onValueChange} />);

		const slider = page.getByRole('slider', { name: /Level/i });
		focus(slider);

		await userEvent.keyboard('{ArrowRight}');
		await expect.element(slider).toHaveAttribute('aria-valuenow', '37');
		await expect.element(page.getByText('37')).toBeVisible();
		expect(onValueChange).toHaveBeenLastCalledWith(37);

		await userEvent.keyboard('{End}');
		await expect.element(slider).toHaveAttribute('aria-valuenow', '100');
		expect(onValueChange).toHaveBeenLastCalledWith(100);
	});

	it('renders two clamped thumbs and a range output for type="range"', async () => {
		await page.render(
			<DsSlider label="Interval" type="range" defaultValue={[36, 60]} thumbLabels={['Minimum', 'Maximum']} />,
		);

		const min = page.getByRole('slider', { name: 'Minimum' });
		const max = page.getByRole('slider', { name: 'Maximum' });

		await expect.element(min).toHaveAttribute('aria-valuenow', '36');
		await expect.element(max).toHaveAttribute('aria-valuenow', '60');
		await expect.element(page.getByText('36-60')).toBeVisible();
	});

	it('does not change when disabled', async () => {
		const onValueChange = vi.fn();

		await page.render(<DsSlider label="Level" defaultValue={36} disabled onValueChange={onValueChange} />);

		const slider = page.getByRole('slider', { name: /Level/i });
		focus(slider);
		await userEvent.keyboard('{ArrowRight}');

		await expect.element(slider).toHaveAttribute('aria-valuenow', '36');
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('respects a controlled value', async () => {
		function Controlled() {
			const [value, setValue] = useState<DsSliderValue>(20);

			return <DsSlider label="Volume" value={value} onValueChange={setValue} />;
		}

		await page.render(<Controlled />);

		const slider = page.getByRole('slider', { name: /Volume/i });
		await expect.element(slider).toHaveAttribute('aria-valuenow', '20');

		focus(slider);
		await userEvent.keyboard('{ArrowRight}');
		await expect.element(slider).toHaveAttribute('aria-valuenow', '21');
	});

	it('formats the output with formatValue', async () => {
		await page.render(
			<DsSlider label="Volume" defaultValue={40} formatValue={(current) => `${String(current)}%`} />,
		);

		await expect.element(page.getByText('40%')).toBeVisible();
	});
});
