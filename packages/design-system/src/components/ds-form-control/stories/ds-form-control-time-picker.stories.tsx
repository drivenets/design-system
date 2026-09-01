import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsFormControl from '../ds-form-control';
import { DsStack } from '../../ds-stack';
import { controlStatuses } from '../ds-form-control.types';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/TimePicker',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a time picker.',
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

/** Baseline time picker with a label, required marker, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Start Time',
		required: true,
		message: 'Select a time',
		children: <DsFormControl.TimePicker />,
	},
};

/** Adds a description above the picker to explain the field before the user selects. */
export const WithDescription: Story = {
	args: {
		label: 'Start Time',
		required: true,
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.TimePicker />
		</DsFormControl>
	),
};

/** Error status flags a missing time and pairs the message with an error icon. */
export const Error: Story = {
	args: {
		status: 'error',
		label: 'Start Time',
		required: true,
		message: 'Time is required.',
		messageIcon: 'error',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.TimePicker />
		</DsFormControl>
	),
};

/** Disabled state prevents interaction while keeping the field visible. */
export const Disabled: Story = {
	args: {
		label: 'Start Time',
		children: <DsFormControl.TimePicker disabled />,
	},
};

/** Constrains selectable times to a business-hours window via min and max. */
export const WithMinMax: Story = {
	args: {
		label: 'Business Hours',
		message: 'Select a time between 9:00 AM and 5:00 PM',
	},
	parameters: { docs: { source: { type: 'code' } } },
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
};

/** Controlled picker that surfaces a required-field error once the field is touched. */
export const WithValidation: Story = {
	parameters: { docs: { source: { type: 'code' } } },
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
};
