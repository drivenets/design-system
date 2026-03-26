import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import MockDate from 'mockdate';
import DsFormControl from '../ds-form-control';

describe('DsFormControl with DatePicker', () => {
	beforeEach(() => {
		MockDate.set(new Date('2026-01-15T12:00:00'));
	});

	afterEach(() => {
		MockDate.reset();
	});

	it('should render with label and placeholder', async () => {
		await page.render(
			<DsFormControl
				label="Event Date"
				required
				message="Select a date for your event"
				style={{ width: '300px' }}
			>
				<DsFormControl.DatePicker />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Event Date');
		expect(input).toBeVisible();
		expect(input).toHaveAttribute('placeholder', 'mm/dd/yyyy');
	});

	it('should render with time placeholder', async () => {
		await page.render(
			<DsFormControl label="Appointment" required message="Select date and time" style={{ width: '300px' }}>
				<DsFormControl.DatePicker withTime />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Appointment');
		expect(input).toHaveAttribute('placeholder', 'mm/dd/yyyy, hh:mm AM/PM');
	});

	it('should render with description', async () => {
		await page.render(
			<DsFormControl label="Event Date" required style={{ width: '300px' }}>
				<DsFormControl.Description>This is a description text.</DsFormControl.Description>
				<DsFormControl.DatePicker />
			</DsFormControl>,
		);

		expect(page.getByLabelText('Event Date')).toBeVisible();
	});

	it('should display error message', async () => {
		await page.render(
			<DsFormControl
				status="error"
				label="Event Date"
				required
				message="Date is required."
				messageIcon="error"
				style={{ width: '300px' }}
			>
				<DsFormControl.Description>This is a description text.</DsFormControl.Description>
				<DsFormControl.DatePicker />
			</DsFormControl>,
		);

		expect(page.getByText('Date is required.')).toBeVisible();
	});

	it('should support disabled state', async () => {
		await page.render(
			<DsFormControl label="Event Date" style={{ width: '300px' }}>
				<DsFormControl.DatePicker disabled />
			</DsFormControl>,
		);

		expect(page.getByLabelText('Event Date')).toBeDisabled();
	});

	it('should support validation with calendar selection', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);
			const [touched, setTouched] = useState(false);
			const error = touched && !value ? 'Date is required' : undefined;

			return (
				<DsFormControl
					label="Event Date"
					required
					status={error ? 'error' : undefined}
					messageIcon="cancel"
					message={error}
					style={{ width: '300px' }}
				>
					<DsFormControl.DatePicker
						value={value}
						onChange={(v) => {
							setValue(v);
							setTouched(true);
						}}
						disablePortal
					/>
				</DsFormControl>
			);
		}

		await page.render(<Wrapper />);

		const calendarButton = page.getByRole('button', { name: /open calendar/i });
		await calendarButton.click();

		const jan15Button = page.getByRole('button', { name: /Choose.*January 15, 2026/i });
		await jan15Button.click();

		await userEvent.keyboard('{Escape}');

		expect(page.getByLabelText('Event Date')).toHaveValue('01/15/2026');
	});
});
