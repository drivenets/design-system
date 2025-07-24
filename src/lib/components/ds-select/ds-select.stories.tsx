import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import DsSelect from './ds-select';

const meta: Meta<typeof DsSelect> = {
	title: 'Design System/Select',
	component: DsSelect,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		options: {
			control: 'object',
			description: 'Options to display in the select dropdown',
		},
		value: {
			control: 'text',
			description: 'Value of the selected option',
		},
		onValueChange: {
			action: 'value changed',
			description: 'Callback when the selected value changes',
			table: {
				disable: true,
			},
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text when no option is selected',
		},
		style: {
			control: 'object',
			description: 'Additional styles to apply to the select container',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSelect>;

const ControlledSelectWrapper = ({ options, style, size, placeholder }: any) => {
	const [value, setValue] = useState<string>('');

	const handleValueChange = (newValue: string) => {
		setValue(newValue);
	};

	const handleClearSelection = () => {
		setValue('');
	};

	return (
		<DsSelect
			options={options}
			value={value}
			onClear={handleClearSelection}
			onValueChange={handleValueChange}
			style={style}
			size={size}
			placeholder={placeholder}
		/>
	);
};

const sanityCheck = async (canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const trigger = canvas.getByRole('combobox');

	// Open the select dropdown
	await userEvent.click(trigger);

	// Verify that 'Option 1' is not selected initially
	const option1 = screen.getByRole('option', { name: 'Option 1' });
	await expect(option1).not.toHaveAttribute('data-state', 'checked');

	// Select 'Option 1'
	await userEvent.click(option1);
	await expect(trigger).toHaveTextContent('Option 1');

	// Open the select dropdown again
	await userEvent.click(trigger);

	// Select 'Option 2'
	const option2 = screen.getByRole('option', { name: 'Option 2' });
	await userEvent.click(option2);
	await expect(trigger).toHaveTextContent('Option 2');

	// Open the select dropdown again to verify selection states
	await userEvent.click(trigger);

	// Verify that 'Option 1' is no longer selected
	const updatedOption1 = screen.getByRole('option', { name: 'Option 1' });
	await expect(updatedOption1).not.toHaveAttribute('data-state', 'checked');

	// Verify that 'Option 2' is now selected
	const updatedOption2 = screen.getByRole('option', { name: 'Option 2' });
	await expect(updatedOption2).toHaveAttribute('data-state', 'checked');

	// Close the dropdown first by pressing Escape
	await userEvent.keyboard('{Escape}');

	// Test close button functionality
	// Find and click the close button (it should be visible when an option is selected)
	const closeButton = canvas.getByRole('button', { name: 'Clear value' });
	await userEvent.click(closeButton);

	// Verify that the selection is cleared
	await expect(trigger).toHaveTextContent('Click to select a value');
};

export const Default: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: Array.from({ length: 14 }, (_, i) => ({
			label: `Option ${i + 1}`,
			value: `option${i + 1}`,
		})),
		style: {
			width: '200px',
		},
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithIcons: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			{ label: 'Option 1', value: 'option1', icon: 'download' },
			{ label: 'Option 2', value: 'option2', icon: 'save' },
			{ label: 'Option 3', value: 'option3', icon: 'description' },
		],
		style: {
			width: '200px',
		},
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};
