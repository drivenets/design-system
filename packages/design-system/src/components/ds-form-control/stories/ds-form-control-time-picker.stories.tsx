import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';
import DsFormControl from '../ds-form-control';
import { controlStatuses } from '../ds-form-control.types';
import { DefaultDescription } from './ds-form-control-stories-shared';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/TimePicker',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		status: {
			control: { type: 'select' },
			options: controlStatuses,
		},
		label: { control: 'text' },
		required: { control: 'boolean' },
		message: { control: 'text' },
		messageIcon: { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

export const Default: Story = {
	args: {
		label: 'Start Time',
		required: true,
		message: 'Select a time',
		style: { width: '300px' },
		children: <DsFormControl.TimePicker onChange={fn()} />,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Start Time');

		await expect(input).toBeVisible();
		await expect(input).toHaveAttribute('placeholder', 'hh:mm AM/PM');
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Start Time',
		required: true,
		style: { width: '300px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.TimePicker onChange={fn()} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Start Time')).toBeVisible();
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		label: 'Start Time',
		required: true,
		message: 'Time is required.',
		messageIcon: 'error',
		style: { width: '300px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.TimePicker onChange={fn()} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Time is required.')).toBeVisible();
	},
};

export const Disabled: Story = {
	args: {
		label: 'Start Time',
		style: { width: '300px' },
		children: <DsFormControl.TimePicker disabled />,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Start Time');

		await expect(input).toBeDisabled();
	},
};

export const WithMinMax: Story = {
	args: {
		label: 'Business Hours',
		message: 'Select a time between 9:00 AM and 5:00 PM',
		style: { width: '300px' },
	},
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(null);

		return (
			<DsFormControl {...args}>
				<DsFormControl.TimePicker
					value={value}
					onChange={setValue}
					min={new Date('2026-01-15T09:00:00')}
					max={new Date('2026-01-15T17:00:00')}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Business Hours');

		await expect(input).toBeVisible();
	},
};

export const WithValidation: Story = {
	render: function Render() {
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Start Time');

		await userEvent.click(input);
		await userEvent.type(input, '2:30 PM');
		await userEvent.tab();

		await expect(input).toHaveValue('2:30 PM');
	},
};
