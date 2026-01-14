import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { controlStatuses } from '../ds-form-control.types';
import DsFormControl from '../ds-form-control';
import { DefaultDescription } from './ds-form-control-stories-shared';
import styles from './ds-form-control.stories.module.scss';
import { DsIcon } from '../../ds-icon';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/DateInput',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Additional styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

const sanityCheckSingle = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText('MM/DD/YYYY');

	// Test typing a date
	await userEvent.click(input);
	await userEvent.type(input, '12/25/2024');
	await waitFor(async () => {
		await expect(input).toHaveValue('12/25/2024');
	});

	// Test clearing the input
	await userEvent.clear(input);
	await expect(input).toHaveValue('');
};

const sanityCheckRange = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText('MM/DD/YYYY - MM/DD/YYYY');

	// Test typing a date range
	await userEvent.click(input);
	await userEvent.type(input, '12/01/2024 - 12/31/2024');
	await waitFor(async () => {
		await expect(input).toHaveValue('12/01/2024 - 12/31/2024');
	});
};

const checkDisabled = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText<HTMLInputElement>('MM/DD/YYYY');
	const calendarButton = canvas.getByRole('button', { name: /open calendar/i });

	// Assert that the input and button are disabled
	await expect(input).toBeDisabled();
	await expect(calendarButton).toBeDisabled();

	// Attempt to type into the disabled input
	await userEvent.type(input, '12/25/2024');

	// Assert that the input value remains unchanged
	await expect(input.value).toBe('');
};

export const Default: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: { width: '400px' },
		message: 'Select a date for your event',
		children: <DsFormControl.DateInput />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheckSingle(canvasElement);
	},
};

export const WithCustomWidth: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: { width: '400px' },
		children: <DsFormControl.DateInput />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheckSingle(canvasElement);
	},
};

export const WithCustomStyles: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: {
			width: '400px',
			padding: '16px',
			border: '2px solid #e0e0e0',
			borderRadius: '8px',
			backgroundColor: '#f9f9f9',
		},
		children: <DsFormControl.DateInput />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheckSingle(canvasElement);
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: { width: '400px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DateInput />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheckSingle(canvasElement);
	},
};

export const WithHelpIcon: Story = {
	args: {
		label: 'Event Date',
		required: true,
		style: { width: '400px' },
		slots: {
			endAdornment: (
				<button
					type="button"
					className={styles.helpIcon}
					onClick={() => alert('Help clicked!')}
					aria-label="Help"
				>
					<DsIcon icon="info" size="small" />
				</button>
			),
		},
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DateInput />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheckSingle(canvasElement);
	},
};

export const Success: Story = {
	render: function Render() {
		const [value] = useState<string>('2024-12-25');

		return (
			<div style={{ width: '400px' }}>
				<DsFormControl
					status="success"
					label="Event Date"
					message="Valid date selected."
					messageIcon="check_circle"
				>
					<DsFormControl.Description>
						<DefaultDescription />
					</DsFormControl.Description>
					<DsFormControl.DateInput value={value} />
				</DsFormControl>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('MM/DD/YYYY');
		await waitFor(async () => {
			await expect(input).toHaveValue('12/25/2024');
		});
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		label: 'Event Date',
		required: true,
		message: 'Date is required.',
		messageIcon: 'error',
		style: { width: '400px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DateInput />
			</>
		),
	},
};

export const Warning: Story = {
	render: function Render() {
		const [value] = useState<string>('2024-12-25');

		return (
			<div style={{ width: '400px' }}>
				<DsFormControl
					status="warning"
					label="Event Date"
					message="Date is approaching deadline."
					messageIcon="info"
				>
					<DsFormControl.Description>
						<DefaultDescription />
					</DsFormControl.Description>
					<DsFormControl.DateInput value={value} />
				</DsFormControl>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		label: 'Event Date',
		style: { width: '400px' },
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.DateInput disabled />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};

export const RangeMode: Story = {
	args: {
		label: 'Date Range',
		required: true,
		message: 'Select start and end dates',
		style: { width: '400px' },
		children: <DsFormControl.DateInput range />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheckRange(canvasElement);
	},
};

export const RangeWithValidation: Story = {
	render: function Render() {
		const [value, setValue] = useState<[string, string]>();
		const [touched, setTouched] = useState(false);
		const error = touched && !value ? 'Start and end dates are required' : undefined;

		return (
			<div style={{ width: '400px' }}>
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
			</div>
		);
	},
};

export const WithValidation: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>();
		const [touched, setTouched] = useState(false);
		const error = touched && !value ? 'Date is required' : undefined;

		return (
			<div style={{ width: '400px' }}>
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
			</div>
		);
	},
};
