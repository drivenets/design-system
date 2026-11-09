import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsDateRangePicker from '../ds-date-range-picker';
import { modalContainers } from '../../../../vitest/modal-containers';

describe('DsDateRangePicker', () => {
	beforeEach(() => {
		vi.useFakeTimers({ toFake: ['Date'] });
		vi.setSystemTime(new Date('2026-01-15T12:00:00'));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should select start and end dates via calendar', async () => {
		function Wrapper() {
			return <DsDateRangePicker disablePortal />;
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

		const jan20Button = page.getByRole('button', { name: /Choose.*January 20, 2026/i }).last();
		await jan20Button.click();
		await userEvent.keyboard('{Escape}');

		expect(endInput).toHaveValue('01/20/2026');
	});

	it('should render time inputs when withTime is enabled', async () => {
		function Wrapper() {
			return <DsDateRangePicker withTime />;
		}

		await page.render(<Wrapper />);

		const inputs = page.getByPlaceholder('mm/dd/yyyy, hh:mm AM/PM');
		expect(inputs.elements()).toHaveLength(2);

		const startInput = inputs.nth(0);
		const endInput = inputs.nth(1);

		await userEvent.type(startInput, '01/10/2026 09:30 AM');
		await userEvent.type(endInput, '01/20/2026 05:45 PM');
		endInput.element().blur();

		await expect.element(startInput).toHaveValue('01/10/2026, 09:30 AM');
		await expect.element(endInput).toHaveValue('01/20/2026, 05:45 PM');
	});

	it('should show calendar with min/max constraints', async () => {
		function Wrapper() {
			return (
				<DsDateRangePicker
					withTime
					min={new Date('2026-01-15T00:30:00')}
					max={new Date('2026-03-31T23:20:00')}
					disablePortal
				/>
			);
		}

		await page.render(<Wrapper />);

		const calendarButtons = page.getByRole('button', { name: /open calendar/i }).elements();
		const startCalendarButton = calendarButtons[0] as HTMLElement;
		await userEvent.click(startCalendarButton);

		expect(page.getByRole('button', { name: /Choose.*January 15, 2026/i })).toBeEnabled();
		expect(page.getByRole('button', { name: /Not available.*January 1, 2026/i })).toBeDisabled();
		expect(page.getByRole('button', { name: /Not available.*January 10, 2026/i })).toBeDisabled();
		expect(page.getByRole('button', { name: /Not available.*January 14, 2026/i })).toBeDisabled();

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
			return (
				<DsDateRangePicker
					defaultValue={[new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]}
					hideClearAll
				/>
			);
		}

		await page.render(<Wrapper />);

		expect(page.getByRole('button', { name: /clear all/i }).query()).toBeNull();
	});
});

// A modal aria-hides content already portalled to <body> when it opens, so it must mount after.
// Real timers: the modal's exit animation must finish before it can reopen.
describe.each(modalContainers)('DsDateRangePicker inside $container', ({ Container }) => {
	const ModalHarness = () => {
		const [open, setOpen] = useState(true);

		return (
			<>
				<button type="button" onClick={() => setOpen(true)}>
					Open modal
				</button>
				<Container open={open} onOpenChange={setOpen}>
					<DsDateRangePicker
						defaultValue={[new Date('2026-01-10T12:00:00'), new Date('2026-01-20T12:00:00')]}
					/>
					<button type="button" onClick={() => setOpen(false)}>
						Close modal
					</button>
				</Container>
			</>
		);
	};

	const getCalendarTriggers = () => page.getByRole('button', { name: /open calendar/i });

	it('should expose the calendar by role and select a start date', async () => {
		await page.render(<ModalHarness />);

		await getCalendarTriggers().first().click();

		await expect.element(page.getByRole('grid')).toBeVisible();
		await page.getByRole('button', { name: /Choose.*January 12, 2026/i }).click();

		await expect.element(page.getByLabelText('Start date')).toHaveValue('01/12/2026');
	});

	it('should expose the calendar by role after the modal is closed and reopened', async () => {
		await page.render(<ModalHarness />);

		await getCalendarTriggers().first().click();
		await page.getByRole('button', { name: /Choose.*January 12, 2026/i }).click();
		await expect.element(page.getByRole('grid')).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Close modal' }).click();
		await page.getByRole('button', { name: 'Open modal' }).click();

		await getCalendarTriggers().first().click();

		await expect.element(page.getByRole('grid')).toBeVisible();
		await expect.element(page.getByRole('button', { name: /Choose.*January 5, 2026/i })).toBeVisible();
	});
});
