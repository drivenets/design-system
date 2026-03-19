import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsDatePicker from '../ds-date-picker';

describe('DsDatePicker', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2026-01-15T12:00:00'));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should select a date via calendar', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return <DsDatePicker value={value} onChange={setValue} disablePortal />;
		}

		await page.render(<Wrapper />);

		const input = page.getByPlaceholder('mm/dd/yyyy');
		const calendarButton = page.getByRole('button', { name: /open calendar/i });

		await calendarButton.click();

		const jan15Button = page.getByRole('button', { name: /Choose.*January 15, 2026/i });
		await jan15Button.click();

		expect(input).toHaveValue('01/15/2026');

		await userEvent.keyboard('{Escape}');
	});

	it('should select a date with time via calendar', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return <DsDatePicker value={value} onChange={setValue} withTime disablePortal />;
		}

		await page.render(<Wrapper />);

		const input = page.getByPlaceholder('mm/dd/yyyy, hh:mm AM/PM');
		const calendarButton = page.getByRole('button', { name: /open calendar/i });

		await calendarButton.click();

		const jan15Button = page.getByRole('button', { name: /Choose.*January 15, 2026/i });
		await jan15Button.click();

		expect(input).toHaveValue('01/15/2026, 12:00 AM');

		await userEvent.keyboard('{Escape}');
	});

	it('should display default value', async () => {
		await page.render(<DsDatePicker defaultValue={new Date('2024-12-25T14:30:00')} withTime />);

		const input = page.getByPlaceholder('mm/dd/yyyy, hh:mm AM/PM');
		expect(input).toHaveValue('12/25/2024, 02:30 PM');
	});

	it('should display controlled value', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(new Date('2026-01-15T09:45:00'));

			return <DsDatePicker value={value} onChange={setValue} withTime />;
		}

		await page.render(<Wrapper />);

		const input = page.getByPlaceholder('mm/dd/yyyy, hh:mm AM/PM');
		expect(input).toHaveValue('01/15/2026, 09:45 AM');
	});

	it('should support disabled state', async () => {
		await page.render(<DsDatePicker value={new Date('2024-12-25T14:30:00')} disabled />);

		const input = page.getByPlaceholder('mm/dd/yyyy');
		expect(input).toBeDisabled();
	});

	it('should support read-only state', async () => {
		await page.render(<DsDatePicker value={new Date('2024-12-25T14:30:00')} readOnly />);

		const input = page.getByPlaceholder('mm/dd/yyyy');
		expect(input).toHaveAttribute('readonly');
	});

	it('should show calendar with min/max constraints', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return (
				<DsDatePicker
					value={value}
					onChange={setValue}
					withTime
					min={new Date('2026-01-01T00:30:00')}
					max={new Date('2026-03-31T23:20:00')}
					disablePortal
				/>
			);
		}

		await page.render(<Wrapper />);

		const calendarButton = page.getByRole('button', { name: /open calendar/i });
		await calendarButton.click();

		expect(page.getByRole('button', { name: /Choose.*January 15, 2026/i })).toBeVisible();

		await userEvent.keyboard('{Escape}');
	});

	it('should reset input to last valid value on blur after appending invalid characters', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(new Date('2026-01-15T00:00:00'));

			return <DsDatePicker value={value} onChange={setValue} />;
		}

		await page.render(<Wrapper />);

		const input = page.getByPlaceholder('mm/dd/yyyy');
		expect(input).toHaveValue('01/15/2026');

		await input.clear();
		await userEvent.type(input, '03/20/2026');
		input.element().blur();

		await expect.element(input).toHaveValue('03/20/2026');

		await input.click();
		await userEvent.type(input, 'xyz');
		input.element().blur();

		await expect.element(input).toHaveValue('03/20/2026');
	});
});
