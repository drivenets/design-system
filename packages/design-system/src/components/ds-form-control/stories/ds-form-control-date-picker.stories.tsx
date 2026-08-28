import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsFormControl from '../ds-form-control';
import { DsStack } from '../../ds-stack';
import { controlStatuses } from '../ds-form-control.types';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/DatePicker',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a date picker.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="19rem">
				<Story />
			</DsStack>
		),
	],
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

/** Baseline date picker with a label, required marker, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Event Date',
		required: true,
		message: 'Select a date for your event',
		children: <DsFormControl.DatePicker />,
	},
};

/** Enables time selection alongside the date for appointment-style fields. */
export const WithTime: Story = {
	args: {
		label: 'Appointment',
		message: 'Select date and time',
		children: <DsFormControl.DatePicker withTime />,
	},
};

/** Adds a description above the picker to explain the field before the user selects. */
export const WithDescription: Story = {
	args: {
		label: 'Event Date',
		required: true,
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.DatePicker />
		</DsFormControl>
	),
};

/** Error status flags a missing date and pairs the message with an error icon. */
export const Error: Story = {
	args: {
		status: 'error',
		label: 'Event Date',
		required: true,
		message: 'Date is required.',
		messageIcon: 'error',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.DatePicker />
		</DsFormControl>
	),
};

/** Disabled state prevents interaction while keeping the field visible. */
export const Disabled: Story = {
	args: {
		label: 'Event Date',
		children: <DsFormControl.DatePicker disabled />,
	},
};

/** Controlled picker that surfaces a required-field error once the field is touched. */
export const WithValidation: Story = {
	parameters: { docs: { source: { type: 'code' } } },
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
