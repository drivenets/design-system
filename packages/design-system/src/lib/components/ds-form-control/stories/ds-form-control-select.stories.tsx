import type { Meta, StoryObj } from '@storybook/react-vite';
import { controlStatuses } from '../ds-form-control.types';
import { DsIcon } from '../../ds-icon';
import DsFormControl from '../ds-form-control';
import { DefaultDescription } from './ds-form-control-stories-shared';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { useState } from 'react';
import styles from './ds-form-control.stories.module.scss';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/Select',
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
	const selectTrigger = canvas.getByRole('combobox', { name: 'Input' });

	// Testing-Library can't trigger a CSS hover event, which is needed to show the clear button,
	// so we're "hacking" it and showing the clear button by toggling the dropdown.
	const clearSelection = async () => {
		await userEvent.click(selectTrigger);

		const clearButton = canvas.getByRole('button', { name: 'Clear value' });
		await userEvent.click(clearButton);

		await userEvent.click(selectTrigger);
	};

	// Test initial state - should show placeholder
	await expect(selectTrigger).toHaveTextContent('Select an option');

	// Test opening the dropdown
	await userEvent.click(selectTrigger);

	// Wait for dropdown to appear and check options
	const option1 = screen.getByRole('option', { name: 'Option 1' });

	await expect(option1).toBeInTheDocument();
	await expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
	await expect(screen.getByRole('option', { name: 'Option 3' })).toBeInTheDocument();

	// Test selecting an option
	await userEvent.click(option1);

	// Verify the selected value is displayed
	await waitFor(async () => {
		await expect(selectTrigger).toHaveTextContent('Option 1');
	});

	// Test clearing the selection
	await clearSelection();

	// Verify placeholder is shown again
	await waitFor(async () => {
		await expect(selectTrigger).toHaveTextContent('Select an option');
	});

	// Test selecting another option
	await userEvent.click(selectTrigger);
	const option2 = screen.getByRole('option', { name: 'Option 2' });
	await userEvent.click(option2);

	await expect(selectTrigger).toHaveTextContent('Option 2');

	// Reset and verify clear button disappears - get fresh reference
	await clearSelection();
	await expect(selectTrigger).toHaveTextContent('Select an option');

	// Verify clear button is no longer in the document
	await expect(canvas.queryByRole('button', { name: 'Clear value' })).not.toBeInTheDocument();
};

const checkDisabled = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const selectTrigger = canvas.getByRole('combobox');

	// Assert that the select is disabled
	await expect(selectTrigger).toBeDisabled();

	// Attempt to click on the disabled select
	await userEvent.click(selectTrigger);

	// Verify that no dropdown appears (disabled state)
	await expect(canvas.queryByText('Option 1')).not.toBeVisible();
};

export const Default: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl label="Input" required={true} message="This is a message">
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomWidth: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl label="Input" required={true} style={{ width: '300px' }}>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomStyles: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl
				label="Input"
				required={true}
				style={{
					width: '400px',
					padding: '16px',
					border: '2px solid #e0e0e0',
					borderRadius: '8px',
					backgroundColor: '#f9f9f9',
				}}
			>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithDescription: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl label="Input" required={true} style={{ width: '300px' }}>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithHelpIcon: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl
				label="Input"
				required={true}
				slots={{
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
				}}
			>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ value: 'option1', label: 'Option 1' },
						{ value: 'option2', label: 'Option 2' },
						{ value: 'option3', label: 'Option 3' },
					]}
					placeholder="Select an option"
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Success: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl
				status="success"
				label="Input"
				message="This is a success caption under a select input."
				messageIcon="check_circle"
			>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Error: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl
				status="error"
				label="Input"
				message="This is an error caption under a select input."
				messageIcon="error"
			>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Warning: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl
				status="warning"
				label="Input"
				message="This is a warning caption under a select input."
				messageIcon="info"
			>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Disabled: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>('');

		return (
			<DsFormControl label="Input">
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Select an option"
					value={value}
					onValueChange={setValue}
					clearable
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
					disabled
				/>
			</DsFormControl>
		);
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};
