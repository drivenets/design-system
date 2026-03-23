import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsDateRangePicker from '../ds-date-range-picker';
import type { DateRangeValue } from '../ds-date-range-picker.types';

describe('DsDateRangePicker', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2026-01-15T12:00:00'));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should select start and end dates via calendar', async () => {
		function Wrapper() {
			const [value, setValue] = useState<DateRangeValue>([null, null]);

			return <DsDateRangePicker value={value} onChange={setValue} disablePortal />;
		}

		await page.render(<Wrapper />);

		const startInput = page.getByLabelText('Start date');
		const endInput = page.getByLabelText('End date');
		const calendarButtons = page.getByRole('button', { name: /open calendar/i }).elements();
		const startCalendarButton = calendarButtons[0] as HTMLElement;
		const endCalendarButton = calendarButtons[1] as HTMLElement;

		await userEvent.click(startCalendarButton);

		const jan10Button = page.getByRole('button', { name: /Choose.*January 10, 2026/i });
		await jan10Button.click();
		await userEvent.keyboard('{Escape}');

		expect(startInput).toHaveValue('01/10/2026');

		await userEvent.click(endCalendarButton);

		const jan20Button = page.getByRole('button', { name: /Choose.*January 20, 2026/i }).nth(1);
		await jan20Button.click();
		await userEvent.keyboard('{Escape}');

		expect(endInput).toHaveValue('01/20/2026');
	});

	it('should render time inputs when withTime is enabled', async () => {
		function Wrapper() {
			const [value, setValue] = useState<DateRangeValue>([null, null]);

			return <DsDateRangePicker value={value} onChange={setValue} withTime />;
		}

		await page.render(<Wrapper />);

		const inputs = page.getByPlaceholder('mm/dd/yyyy, hh:mm AM/PM').elements();
		expect(inputs).toHaveLength(2);
	});

	it('should render two date inputs in vertical orientation', async () => {
		function Wrapper() {
			const [value, setValue] = useState<DateRangeValue>([null, null]);

			return <DsDateRangePicker value={value} onChange={setValue} orientation="vertical" />;
		}

		await page.render(<Wrapper />);

		const inputs = page.getByPlaceholder('mm/dd/yyyy').elements();
		expect(inputs).toHaveLength(2);
	});

	it('should show calendar with min/max constraints', async () => {
		function Wrapper() {
			const [value, setValue] = useState<DateRangeValue>([null, null]);

			return (
				<DsDateRangePicker
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

		const calendarButtons = page.getByRole('button', { name: /open calendar/i }).elements();
		const startCalendarButton = calendarButtons[0] as HTMLElement;
		await userEvent.click(startCalendarButton);

		expect(page.getByRole('button', { name: /Choose.*January 15, 2026/i })).toBeVisible();

		await userEvent.keyboard('{Escape}');
	});

	it('should support disabled state', async () => {
		await page.render(
			<DsDateRangePicker
				value={[new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]}
				disabled
			/>,
		);

		const inputs = page.getByPlaceholder('mm/dd/yyyy').elements();
		expect(inputs[0]).toBeDisabled();
		expect(inputs[1]).toBeDisabled();
	});

	it('should hide clear all button when hideClearAll is true', async () => {
		function Wrapper() {
			const [value, setValue] = useState<DateRangeValue>([
				new Date('2026-01-10T00:00:00'),
				new Date('2026-01-20T00:00:00'),
			]);

			return <DsDateRangePicker value={value} onChange={setValue} hideClearAll />;
		}

		await page.render(<Wrapper />);

		expect(page.getByRole('button', { name: /clear all/i }).query()).toBeNull();
	});
});
