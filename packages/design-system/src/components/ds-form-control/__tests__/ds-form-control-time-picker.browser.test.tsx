import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsFormControl from '../ds-form-control';

describe('DsFormControl with TimePicker', () => {
	it('should render with label and placeholder', async () => {
		await page.render(
			<DsFormControl label="Start Time" required message="Select a time" style={{ width: '300px' }}>
				<DsFormControl.TimePicker />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Start Time');
		expect(input).toBeVisible();
		expect(input).toHaveAttribute('placeholder', 'hh:mm AM/PM');
	});

	it('should render with description', async () => {
		await page.render(
			<DsFormControl label="Start Time" required style={{ width: '300px' }}>
				<DsFormControl.Description>This is a description text.</DsFormControl.Description>
				<DsFormControl.TimePicker />
			</DsFormControl>,
		);

		expect(page.getByLabelText('Start Time')).toBeVisible();
	});

	it('should display error message', async () => {
		await page.render(
			<DsFormControl
				status="error"
				label="Start Time"
				required
				message="Time is required."
				messageIcon="error"
				style={{ width: '300px' }}
			>
				<DsFormControl.Description>This is a description text.</DsFormControl.Description>
				<DsFormControl.TimePicker />
			</DsFormControl>,
		);

		expect(page.getByText('Time is required.')).toBeVisible();
	});

	it('should support disabled state', async () => {
		await page.render(
			<DsFormControl label="Start Time" style={{ width: '300px' }}>
				<DsFormControl.TimePicker disabled />
			</DsFormControl>,
		);

		expect(page.getByLabelText('Start Time')).toBeDisabled();
	});

	it('should render with min/max constraints', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);

			return (
				<DsFormControl
					label="Business Hours"
					message="Select a time between 9:00 AM and 5:00 PM"
					style={{ width: '300px' }}
				>
					<DsFormControl.TimePicker
						value={value}
						onChange={setValue}
						min={new Date('2026-01-15T09:00:00')}
						max={new Date('2026-01-15T17:00:00')}
					/>
				</DsFormControl>
			);
		}

		await page.render(<Wrapper />);

		expect(page.getByLabelText('Business Hours')).toBeVisible();
	});

	it('should support validation with typing', async () => {
		function Wrapper() {
			const [value, setValue] = useState<Date | null>(null);
			const [touched, setTouched] = useState(false);
			const error = touched && !value ? 'Time is required' : undefined;

			return (
				<DsFormControl
					label="Start Time"
					required
					status={error ? 'error' : undefined}
					messageIcon="cancel"
					message={error}
					style={{ width: '300px' }}
				>
					<DsFormControl.TimePicker
						value={value}
						onChange={(v) => {
							setValue(v);
							setTouched(true);
						}}
					/>
				</DsFormControl>
			);
		}

		await page.render(<Wrapper />);

		const input = page.getByLabelText('Start Time');
		await input.click();
		await userEvent.fill(input.element(), '2:30 PM');
		await userEvent.tab();

		expect(input).toHaveValue('02:30 PM');
	});
});
