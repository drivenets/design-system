import type { Meta, StoryObj } from '@storybook/react-vite';
import { controlStatuses } from '../ds-form-control.types';
import { DsIcon } from '../../ds-icon';
import { DsStack } from '../../ds-stack';
import DsFormControl from '../ds-form-control';
import { useState } from 'react';
import styles from './ds-form-control.stories.module.scss';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/Select',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a select.',
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

/** Baseline clearable select with a label, required marker, and a helper message. */
export const Default: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

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
};

/** Adds a description above the select to explain the field before the user chooses. */
export const WithDescription: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl label="Input" required={true}>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};

/** Surfaces contextual help through an end-adornment button beside the field. */
export const WithHelpIcon: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl
				label="Input"
				required={true}
				slots={{
					endAdornment: (
						<button type="button" className={styles.helpIcon} aria-label="Help">
							<DsIcon icon="info" size="small" />
						</button>
					),
				}}
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};

/** Success status confirms the chosen value passed validation. */
export const Success: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl
				status="success"
				label="Input"
				message="This is a success caption under a select input."
				messageIcon="check_circle"
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};

/** Error status flags an invalid choice and pairs the message with an error icon. */
export const Error: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl
				status="error"
				label="Input"
				message="This is an error caption under a select input."
				messageIcon="error"
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};

/** Warning status highlights a choice that needs attention without blocking submission. */
export const Warning: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl
				status="warning"
				label="Input"
				message="This is a warning caption under a select input."
				messageIcon="info"
			>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};

/** Disabled state prevents opening the dropdown while keeping the field visible. */
export const Disabled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsFormControl label="Input">
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
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
};
