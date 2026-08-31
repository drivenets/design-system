import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTextarea from './ds-textarea';

const meta: Meta<typeof DsTextarea> = {
	title: 'Components/Textarea',
	component: DsTextarea,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A multi-line text input for longer free-form content such as comments or descriptions.',
			},
		},
	},
	argTypes: {
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
		onChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsTextarea>;

/**
 * The default multi-line input. Set `rows` to control the initial visible
 * height; the field still scrolls once content exceeds it.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter your text here...',
		rows: 3,
	},
};

/**
 * Disabled textarea that cannot be focused or edited. Use for content that is
 * temporarily unavailable.
 */
export const Disabled: Story = {
	args: {
		value: 'This textarea is disabled',
		disabled: true,
		placeholder: 'Disabled textarea',
	},
};

/**
 * Cap the amount of text with `maxLength`. The native input prevents typing
 * beyond the limit, which is useful for length-restricted fields.
 */
export const MaxLength: Story = {
	args: {
		placeholder: 'Maximum 50 characters allowed',
		maxLength: 50,
		rows: 3,
	},
};
