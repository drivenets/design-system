import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import DsTextarea from './ds-textarea';

const meta: Meta<typeof DsTextarea> = {
	title: 'Design System/Textarea',
	component: DsTextarea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		value: {
			control: 'text',
			description: 'The current value',
		},
		rows: {
			control: { type: 'number', min: 1, max: 20 },
			description: 'Number of visible text lines',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the textarea is disabled',
		},
		maxLength: {
			control: { type: 'number', min: 1 },
			description: 'Maximum number of characters',
		},
		onChange: {
			action: 'changed',
			description: 'Function called when value changes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTextarea>;

export const Default: Story = {
	args: {
		placeholder: 'Enter your text here...',
		rows: 3,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Verify component renders correctly
		const textarea = canvas.getByRole('textbox');
		await expect(textarea).toBeTruthy();

		// Test typing in the textarea
		await userEvent.type(textarea, 'Hello world Design System!');
		await waitFor(() => {
			expect(textarea).toHaveValue('Hello world Design System!');
		});
	},
};

export const Disabled: Story = {
	args: {
		value: 'This textarea is disabled',
		disabled: true,
		placeholder: 'Disabled textarea',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox');
		await expect(textarea).toBeDisabled();
	},
};

export const MaxLength: Story = {
	args: {
		placeholder: 'Maximum 50 characters allowed',
		maxLength: 50,
		rows: 3,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox');

		// Test typing beyond max length
		const longText = 'This is a very long text that should be truncated at 50 characters';
		await userEvent.type(textarea, longText);
		await waitFor(() => {
			expect(textarea).toHaveValue(longText.substring(0, 50));
		});
	},
};
