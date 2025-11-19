import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import DsSelect from './ds-select';
import { DsSelectProps } from '@design-system/ui';

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
		multiple: {
			control: 'boolean',
			description: 'Whether multiple selections are allowed',
		},
		clearable: {
			control: 'boolean',
			description: 'Whether the selection can be cleared',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSelect>;

const ControlledSelectWrapper = ({
	options,
	style,
	size,
	placeholder,
	clearable,
	multiple,
	disabled,
}: DsSelectProps) => {
	const [value, setValue] = useState<string | string[]>('');

	const handleValueChange = (newValue: string | string[]) => {
		setValue(newValue);
	};

	return (
		<DsSelect
			options={options}
			value={value as never}
			onValueChange={handleValueChange as never}
			style={style}
			size={size}
			placeholder={placeholder}
			disabled={disabled}
			multiple={multiple as never}
			clearable={clearable as never}
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

const mockOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'date', label: 'Date' },
	{ value: 'elderberry', label: 'Elderberry' },
	{ value: 'fig', label: 'Fig' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'honeydew', label: 'Honeydew' },
	{ value: 'indian-fig', label: 'Indian fig' },
	{ value: 'jackfruit', label: 'Jackfruit' },
	{ value: 'kiwi', label: 'Kiwi' },
	{ value: 'lemon', label: 'Lemon' },
];

export const Default: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions,
		style: {
			width: '250px',
		},
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

export const MultiSelect: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions,
		style: {
			width: '250px',
		},
		multiple: true,
		clearable: true,
	},
};

export const MultiSelectWithSearch: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			...mockOptions,
			{
				value: 'melon',
				label: 'Melon',
			},
		],
		style: {
			width: '250px',
		},
		multiple: true,
		clearable: true,
	},
};
