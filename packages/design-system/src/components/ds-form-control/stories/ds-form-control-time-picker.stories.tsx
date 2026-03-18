import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
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
		children: <DsFormControl.TimePicker />,
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
				<DsFormControl.TimePicker />
			</>
		),
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
				<DsFormControl.TimePicker />
			</>
		),
	},
};

export const Disabled: Story = {
	args: {
		label: 'Start Time',
		style: { width: '300px' },
		children: <DsFormControl.TimePicker disabled />,
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
};
