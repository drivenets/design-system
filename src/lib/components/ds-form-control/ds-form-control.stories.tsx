import type { Meta, StoryObj } from '@storybook/react';
import { controlSchemas, controlTypes } from '@design-system/ui';
import DsFormControl from './ds-form-control';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			control: { type: 'select' },
			options: controlTypes,
			description: 'Form control type',
			table: {
				defaultValue: {
					summary: controlTypes[0],
				},
			},
		},
		schema: {
			control: { type: 'select' },
			options: controlSchemas,
			description: 'Form control color schema',
			table: {
				defaultValue: {
					summary: controlSchemas[0],
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
		disabled: {
			control: 'boolean',
			description: 'Indicates if the field is disabled',
		},
		message: {
			control: 'text',
			description: 'Message to display below the form control',
		},
		messageIcon: {
			control: 'text',
			description: 'Icon to display in the message',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

const message = 'Hello world Design System!';

const sanityCheck = async <T extends HTMLInputElement | HTMLTextAreaElement>(canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText('Field Label') as T;

	// Simulate typing into the input field
	await userEvent.type(input, message);

	// Assert that the input value has been updated
	await expect(input.value).toBe(message);

	// Clear the input field
	await userEvent.clear(input);

	// Assert that the input value has been cleared
	await expect(input.value).toBe('');
};

const checkDisabled = async <T extends HTMLInputElement | HTMLTextAreaElement>(
	canvasElement: HTMLElement,
) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText('Field Label') as T;

	// Assert that the input is disabled
	await expect(input).toBeDisabled();

	// Attempt to type into the disabled input
	await userEvent.type(input, 'Should not type');

	// Assert that the input value remains unchanged
	await expect(input.value).toBe('');
};

export const Default: Story = {
	args: {
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		icon: 'call',
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Warning: Story = {
	args: {
		schema: 'warning',
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Disabled: Story = {
	args: {
		label: 'Field Label',
		placeholder: 'Disabled Input',
		required: true,
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};

export const Textarea: Story = {
	args: {
		as: 'textarea',
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaWithIcon: Story = {
	args: {
		as: 'textarea',
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		icon: 'call',
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaWarning: Story = {
	args: {
		as: 'textarea',
		schema: 'warning',
		label: 'Field Label',
		placeholder: 'Input',
		required: true,
		message: 'This is a message',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaDisabled: Story = {
	args: {
		as: 'textarea',
		label: 'Field Label',
		placeholder: 'Disabled Input',
		required: true,
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};

export const Select: Story = {
	args: {
		as: 'select',
		options: [
			{ label: 'Option 1', value: 'option1', icon: 'download' },
			{ label: 'Option 2', value: 'option2', icon: 'save' },
			{ label: 'Option 3', value: 'option3', icon: 'description' },
		],
		label: 'Select Option',
		placeholder: 'Input',
		required: true,
		style: {
			width: '200px',
		},
	},
};

export const SelectDisabled: Story = {
	args: {
		as: 'select',
		options: [
			{ label: 'Option 1', value: 'option1', icon: 'download' },
			{ label: 'Option 2', value: 'option2', icon: 'save' },
			{ label: 'Option 3', value: 'option3', icon: 'description' },
		],
		label: 'Select Option',
		placeholder: 'Input',
		required: true,
		disabled: true,
		style: {
			width: '200px',
		},
	},
};
