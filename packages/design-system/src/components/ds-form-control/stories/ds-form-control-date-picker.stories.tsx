import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsFormControl from '../ds-form-control';
import { controlStatuses } from '../ds-form-control.types';
import { DefaultDescription } from './ds-form-control-stories-shared';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/DatePicker',
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
		label: 'Event Date',
		required: true,
		message: 'Select a date for your event',
		style: { width: '300px' },
		children: <DsFormControl.DatePicker />,
	},
};

export const WithTime: Story = {
	args: {
		label: 'Appointment',
		required: true,
		message: 'Select date and time',
		style: { width: '300px' },
		children: <DsFormControl.DatePicker withTime />,
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: { width: '300px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DatePicker />
			</>
		),
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		label: 'Event Date',
		required: true,
		message: 'Date is required.',
		messageIcon: 'error',
		style: { width: '300px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DatePicker />
			</>
		),
	},
};

export const Disabled: Story = {
	args: {
		label: 'Event Date',
		style: { width: '300px' },
		children: <DsFormControl.DatePicker disabled />,
	},
};

export const WithValidation: Story = {
	render: function Render() {
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
				/>
			</DsFormControl>
		);
	},
};
