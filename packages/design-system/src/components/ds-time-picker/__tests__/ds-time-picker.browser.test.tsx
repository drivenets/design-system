import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTimePicker from '../ds-time-picker';

const createTime = (hours: number, minutes: number) => {
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
};

describe('DsTimePicker', () => {
	it('should open the time picker when trigger is clicked', async () => {
		// Arrange.
		const onOpenChange = vi.fn();

		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return <DsTimePicker value={value} onChange={setValue} onOpenChange={onOpenChange} disablePortal />;
		}

		await page.render(<Wrapper />);

		// Act.
		const trigger = page.getByRole('button', { name: /open time picker/i });
		await expect.element(trigger).toBeVisible();
		await trigger.click();

		// Assert.
		expect(onOpenChange).toHaveBeenCalledWith(true);
	});

	it('should display formatted default value', async () => {
		// Arrange.
		await page.render(<DsTimePicker defaultValue={createTime(14, 30)} onChange={vi.fn()} />);

		// Assert.
		const input = page.getByRole('textbox');
		await expect.element(input).toHaveValue('02:30 PM');
	});

	it('should display controlled value', async () => {
		// Arrange.
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(createTime(9, 45));

			return <DsTimePicker value={value} onChange={setValue} />;
		}

		await page.render(<Wrapper />);

		// Assert.
		const input = page.getByRole('textbox');
		await expect.element(input).toHaveValue('09:45 AM');
	});

	it('should support disabled state', async () => {
		// Arrange.
		await page.render(<DsTimePicker value={createTime(14, 30)} disabled />);

		// Assert.
		const input = page.getByRole('textbox');
		await expect.element(input).toBeDisabled();
	});

	it('should support read-only state', async () => {
		// Arrange.
		await page.render(<DsTimePicker value={createTime(14, 30)} readOnly />);

		// Assert.
		const input = page.getByRole('textbox');
		await expect.element(input).toHaveAttribute('readonly');
	});

	it('should enforce min/max constraints on time selection', async () => {
		// Arrange.
		const onOpenChange = vi.fn();

		function Wrapper() {
			const [value, setValue] = useState<Date | null>(createTime(13, 50));

			return (
				<div>
					<DsTimePicker
						value={value}
						onChange={setValue}
						onOpenChange={onOpenChange}
						min={createTime(9, 30)}
						max={createTime(17, 40)}
						disablePortal
					/>
					<p>
						Value:{' '}
						{value
							? `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
							: 'none'}
					</p>
				</div>
			);
		}

		await page.render(<Wrapper />);

		const trigger = page.getByRole('button', { name: /open time picker/i });
		await trigger.click();
		expect(onOpenChange).toHaveBeenCalledWith(true);

		const hourListbox = page.getByRole('listbox', { name: 'Hour' });
		const minuteListbox = page.getByRole('listbox', { name: 'Minute' });
		const periodListbox = page.getByRole('listbox', { name: 'AM/PM' });
		const valueDisplay = page.getByText(/Value:/);

		// Hours outside valid range are disabled (8 PM > max, 6 PM > max)
		await expect
			.element(hourListbox.getByRole('option', { name: '08' }))
			.toHaveAttribute('aria-disabled', 'true');

		await expect
			.element(hourListbox.getByRole('option', { name: '06' }))
			.toHaveAttribute('aria-disabled', 'true');

		// Hour 5 PM is within range
		const hour5PM = hourListbox.getByRole('option', { name: '05' });
		await expect.element(hour5PM).not.toHaveAttribute('aria-disabled', 'true');

		// Click hour 5 PM — minute 50 exceeds max 5:40 PM → clamp to 5:40 PM
		await hour5PM.click();
		await expect.element(valueDisplay).toHaveTextContent('17:40');

		// At 5:40 PM, minutes > 40 are disabled
		await expect
			.element(minuteListbox.getByRole('option', { name: '45' }))
			.toHaveAttribute('aria-disabled', 'true');

		// Minute 40 is at the boundary, should be enabled
		const minute40 = minuteListbox.getByRole('option', { name: '40' });
		await expect.element(minute40).not.toHaveAttribute('aria-disabled', 'true');
		await minute40.click();

		// Switch to AM — 5:40 PM → clamp to 9:30 AM (min)
		await periodListbox.getByRole('option', { name: 'AM' }).click();
		await expect.element(valueDisplay).toHaveTextContent('09:30');

		// At 9:30 AM, hours before 9 are disabled
		await expect
			.element(hourListbox.getByRole('option', { name: '08' }))
			.toHaveAttribute('aria-disabled', 'true');

		// Hour 9 AM is within range
		await expect
			.element(hourListbox.getByRole('option', { name: '09' }))
			.not.toHaveAttribute('aria-disabled', 'true');

		// At 9:30 AM, minutes < 30 are disabled
		await expect
			.element(minuteListbox.getByRole('option', { name: '25' }))
			.toHaveAttribute('aria-disabled', 'true');

		// Minute 30 is at the boundary, should be enabled
		await expect
			.element(minuteListbox.getByRole('option', { name: '30' }))
			.not.toHaveAttribute('aria-disabled', 'true');
	});
});
