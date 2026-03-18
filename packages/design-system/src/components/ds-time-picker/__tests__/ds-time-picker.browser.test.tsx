import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsTimePicker from '../ds-time-picker';

const createTime = (hours: number, minutes: number) => {
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
};

describe('DsTimePicker', () => {
	it('should open the time picker when trigger is clicked', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return <DsTimePicker value={value} onChange={setValue} disablePortal />;
		}

		await page.render(<Wrapper />);

		const trigger = page.getByRole('button', { name: /open time picker/i });
		await expect.element(trigger).toBeVisible();
		await trigger.click();

		await expect.element(page.getByRole('dialog')).toBeVisible();
	});

	it('should display formatted default value', async () => {
		await page.render(<DsTimePicker defaultValue={createTime(14, 30)} onChange={vi.fn()} />);

		const input = page.getByRole('textbox');
		await expect.element(input).toHaveValue('02:30 PM');
	});

	it('should display controlled value', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(createTime(9, 45));

			return <DsTimePicker value={value} onChange={setValue} />;
		}

		await page.render(<Wrapper />);

		const input = page.getByRole('textbox');
		await expect.element(input).toHaveValue('09:45 AM');
	});

	it('should support disabled state', async () => {
		await page.render(<DsTimePicker value={createTime(14, 30)} disabled />);

		const input = page.getByRole('textbox');
		await expect.element(input).toBeDisabled();
	});

	it('should support read-only state', async () => {
		await page.render(<DsTimePicker value={createTime(14, 30)} readOnly />);

		const input = page.getByRole('textbox');
		await expect.element(input).toHaveAttribute('readonly');
	});

	it('should enforce min/max constraints on time selection', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(createTime(13, 50));

			return (
				<div>
					<DsTimePicker
						value={value}
						onChange={setValue}
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

	it('should support full keyboard interaction', async () => {
		const tabTimes = async (n: number) => {
			for (let i = 0; i < n; i++) {
				await userEvent.tab();
			}
		};

		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return (
				<div>
					<DsTimePicker value={value} onChange={setValue} disablePortal />
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

		// Tab to the input, then Tab again to reach the trigger button
		await userEvent.tab();
		await userEvent.tab();
		await userEvent.keyboard('{Enter}');

		// Popover opens — Ark UI focuses first focusable element (hour 12)
		const hourListbox = page.getByRole('listbox', { name: 'Hour' });
		await expect.element(hourListbox).toBeVisible();

		// Tab to hour 01 and select it
		await userEvent.tab();
		await userEvent.keyboard('{Enter}');

		// Tab past remaining hours (02-11) + minutes (00, 01, 02) to reach minute 02
		await tabTimes(13);
		await userEvent.keyboard('{Enter}');

		// Tab past remaining minutes (03-59) + AM to reach AM
		await tabTimes(58);
		await userEvent.keyboard('{Enter}');

		// 1:02 AM = 01:02 in 24h format
		await expect.element(page.getByText('Value:')).toHaveTextContent('01:02');
	});

	it('should reset input to last valid value on blur', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(createTime(10, 15));

			return <DsTimePicker value={value} onChange={setValue} />;
		}

		await page.render(<Wrapper />);

		const input = page.getByRole('textbox');
		await expect.element(input).toHaveValue('10:15 AM');

		await input.clear();
		await userEvent.type(input, '02:30 PM');
		input.element().blur();

		await expect.element(input).toHaveValue('02:30 PM');

		await input.click();
		await userEvent.type(input, 'xyz');
		input.element().blur();

		await expect.element(input).toHaveValue('02:30 PM');
	});
});
