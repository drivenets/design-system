import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsNumberInput from './ds-number-input';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsNumberInput> = {
	title: 'Components/NumberInput',
	component: DsNumberInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A numeric input with increment/decrement steppers and optional min/max clamping. Use it for quantities, ports, or any value constrained to a numeric range.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="12rem">
				<Story />
			</DsStack>
		),
	],
	argTypes: {
		size: {
			control: 'select',
			options: ['default', 'small'],
			description: 'The size of the input field',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the input',
		},
		defaultValue: {
			control: 'number',
			description: 'Default value of the number input (uncontrolled)',
		},
		min: {
			control: 'number',
			description: 'Minimum value allowed',
		},
		max: {
			control: 'number',
			description: 'Maximum value allowed',
		},
		step: {
			control: 'number',
			description: 'Step value for increment/decrement',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		onChange: { table: { disable: true } },
		onValueChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsNumberInput>;

/**
 * The default numeric input with steppers. Use `defaultValue` for uncontrolled
 * usage when the parent does not need to track the value.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter number',
		defaultValue: 0,
	},
};

/**
 * Constrain input to a range with `min`, `max`, and `step`. Values are clamped
 * on blur and the steppers disable at the range bounds.
 */
export const WithMinMax: Story = {
	args: {
		placeholder: 'Enter number',
		defaultValue: 50,
		min: 0,
		max: 100,
		step: 1,
	},
};

/**
 * Controlled input where the parent owns the value via `value` and
 * `onValueChange`. Use when other UI must react to the number.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState(42);

		return (
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsNumberInput
					placeholder="Enter number"
					min={0}
					max={100}
					step={1}
					value={value}
					onValueChange={setValue}
				/>
				<DsStack gap="var(--2xs)">
					<button type="button" onClick={() => setValue(0)}>
						Reset to 0
					</button>
					<button type="button" onClick={() => setValue(100)}>
						Set to 100
					</button>
				</DsStack>
			</DsStack>
		);
	},
};

/**
 * Compact size for dense forms and toolbars.
 */
export const Small: Story = {
	args: {
		size: 'small',
		placeholder: 'Small number input',
		defaultValue: 10,
	},
};

/**
 * Disabled input that cannot be focused, edited, or stepped.
 */
export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		defaultValue: 25,
		disabled: true,
	},
};
