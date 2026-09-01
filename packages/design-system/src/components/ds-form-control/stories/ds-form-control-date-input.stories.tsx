import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { controlStatuses } from '../ds-form-control.types';
import DsFormControl from '../ds-form-control';
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/DateInput (Deprecated)',
	component: DsFormControl.DateInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'**Deprecated**: DsFormControl.DateInput is deprecated. Please use `DsFormControl.DsDatePicker` for single date selection or `DsFormControl.DsDateRangePicker` for date range selection instead.',
			},
		},
	},
	tags: ['deprecated'],
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
			description: 'Form control color status',
			table: {
				defaultValue: {
					summary: controlStatuses[0],
				},
			},
		},
		label: {
			control: 'text',
			description: 'Label for the form control',
		},
		required: {
			control: 'boolean',
			description: 'Indicates if the field is required',
		},
		message: {
			control: 'text',
			description: 'Message to display below the form control',
		},
		messageIcon: {
			control: 'text',
			description: 'Icon to display in the message',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

/** Baseline single-date input with a label, required marker, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Event Date',
		required: true,
		message: 'Select a date for your event',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.DateInput />
		</DsFormControl>
	),
};

/** Adds a description above the input to explain the field before the user types. */
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
			<DsFormControl.DateInput />
		</DsFormControl>
	),
};

/** Surfaces contextual help through an end-adornment button beside the field. */
export const WithHelpIcon: Story = {
	args: {
		label: 'Event Date',
		required: true,
		slots: {
			endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Help" />,
		},
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.DateInput />
		</DsFormControl>
	),
};

/** Success status confirms the selected date passed validation. */
export const Success: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState<string | undefined>('2024-12-25');

		return (
			<DsFormControl
				status="success"
				label="Event Date"
				message="Valid date selected."
				messageIcon="check_circle"
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.DateInput value={value} onValueChange={setValue} />
			</DsFormControl>
		);
	},
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
			<DsFormControl.DateInput />
		</DsFormControl>
	),
};

/** Warning status highlights a date that needs attention without blocking submission. */
export const Warning: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState<string | undefined>('2024-12-25');

		return (
			<DsFormControl
				status="warning"
				label="Event Date"
				message="Date is approaching deadline."
				messageIcon="info"
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.DateInput value={value} onValueChange={setValue} />
			</DsFormControl>
		);
	},
};

/** Disabled state prevents interaction while keeping the field visible. */
export const Disabled: Story = {
	args: {
		label: 'Event Date',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Optional helper text that describes the field in up to two lines.
			</DsFormControl.Description>
			<DsFormControl.DateInput disabled />
		</DsFormControl>
	),
};

/** Range mode lets the user pick a start and end date in a single input. */
export const RangeMode: Story = {
	args: {
		label: 'Date Range',
		required: true,
		message: 'Select start and end dates',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.DateInput range />
		</DsFormControl>
	),
};

/** Range input wired to controlled state that surfaces a required-field error once touched. */
export const RangeWithValidation: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState<[string, string]>();
		const [touched, setTouched] = useState(false);
		const error = touched && !value ? 'Start and end dates are required' : undefined;

		return (
			<DsFormControl
				label="Date Range"
				required
				status={error ? 'error' : undefined}
				messageIcon="cancel"
				message={error}
			>
				<DsFormControl.DateInput
					value={value}
					onValueChange={(value) => {
						setValue(value);
						setTouched(true);
					}}
					range
				/>
			</DsFormControl>
		);
	},
};

/** Single-date input wired to controlled state that surfaces a required-field error once touched. */
export const WithValidation: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState<string>();
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
				<DsFormControl.DateInput
					value={value}
					onValueChange={(value) => {
						setValue(value);
						setTouched(true);
					}}
				/>
			</DsFormControl>
		);
	},
};
