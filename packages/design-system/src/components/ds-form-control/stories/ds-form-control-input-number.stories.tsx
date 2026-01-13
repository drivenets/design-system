import type { Meta, StoryObj } from '@storybook/react-vite';
import { controlStatuses } from '../ds-form-control.types';
import { DsIcon } from '../../ds-icon';
import DsFormControl from '../ds-form-control';
import { DefaultDescription } from './ds-form-control-stories-shared';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import styles from './ds-form-control.stories.module.scss';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/Number',
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

const sanityCheck = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText('Enter number');
	const incrementButton = canvas.getByRole('button', { name: /increase/i });
	const decrementButton = canvas.getByRole('button', { name: /decrease/i });

	// Test initial value
	await expect(input).toHaveValue('10');

	// Test increment
	await userEvent.click(incrementButton);
	await waitFor(async () => {
		await expect(input).toHaveValue('11');
	});

	// Test decrement
	await userEvent.click(decrementButton);
	await waitFor(async () => {
		await expect(input).toHaveValue('10');
	});

	// Test typing
	await userEvent.clear(input);
	await userEvent.click(input); // ensure focus + caret placement
	await userEvent.type(input, '25');
	await waitFor(async () => {
		await expect(input).toHaveValue('25');
	});
};

const checkDisabled = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText<HTMLInputElement>('Disabled Input');
	const incrementButton = canvas.getByRole('button', { name: /increase/i });
	const decrementButton = canvas.getByRole('button', { name: /decrease/i });

	// Assert that the input and buttons is disabled
	await expect(input).toBeDisabled();
	await expect(incrementButton).toBeDisabled();
	await expect(decrementButton).toBeDisabled();

	// Attempt to type into the disabled input
	await userEvent.type(input, 'Should not type');

	// Assert that the input value remains unchanged
	await expect(input.value).toBe('10');
};

export const Default: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: (
			<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomWidth: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: { width: '300px' },
		children: (
			<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomStyles: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: {
			width: '400px',
			padding: '16px',
			border: '2px solid #e0e0e0',
			borderRadius: '8px',
			backgroundColor: '#f9f9f9',
		},
		children: (
			<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: {
			width: '300px',
		},
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithHelpIcon: Story = {
	args: {
		label: 'Input label',
		required: true,
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
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Success: Story = {
	args: {
		status: 'success',
		label: 'Input label',
		message: 'This is a success caption under a number input.',
		messageIcon: 'check_circle',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		label: 'Input label',
		message: 'This is an error caption under a number input.',
		messageIcon: 'error',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Warning: Story = {
	args: {
		status: 'warning',
		label: 'Input label',
		message: 'This is a warning caption under a number input.',
		messageIcon: 'info',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Disabled: Story = {
	args: {
		label: 'Input label',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.NumberInput
					placeholder="Disabled Input"
					disabled
					min={1}
					max={100}
					step={1}
					defaultValue={10}
				/>
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};
