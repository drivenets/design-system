import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import DsSelect from './ds-select';
import type { DsSelectProps } from './ds-select.types';

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

	// Verify that the first item is not selected initially
	const option1 = screen.getByRole('option', { name: mockOptions[0].label });
	await expect(option1).not.toHaveAttribute('data-state', 'checked');

	// Select the first item
	await userEvent.click(option1);
	await expect(trigger).toHaveTextContent(mockOptions[0].label);

	// Open the select dropdown again
	await userEvent.click(trigger);

	// Select the second item
	const option2 = screen.getByRole('option', { name: mockOptions[1].label });
	await userEvent.click(option2);
	await expect(trigger).toHaveTextContent(mockOptions[1].label);

	// Open the select dropdown again to verify selection states
	await userEvent.click(trigger);

	// Verify that the first item is no longer selected
	const updatedOption1 = screen.getByRole('option', { name: mockOptions[0].label });
	await expect(updatedOption1).not.toHaveAttribute('data-state', 'checked');

	// Verify that the second item is now selected
	const updatedOption2 = screen.getByRole('option', { name: mockOptions[1].label });
	await expect(updatedOption2).toHaveAttribute('data-state', 'checked');

	// Close the dropdown first by pressing Escape
	await userEvent.keyboard('{Escape}');

	// Test clear value button functionality
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
	{ value: 'melon', label: 'Melon' },
];

export const Default: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions,
		clearable: true,
		style: {
			width: '200px',
		},
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithIcons: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions.slice(0, 3).map((item) => ({
			...item,
			icon: 'nutrition',
		})),
		style: {
			width: '200px',
		},
		clearable: true,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithSearch: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		],
		clearable: true,
		style: {
			width: '200px',
		},
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
				value: 'nectarine',
				label: 'Nectarine',
			},
		],
		style: {
			width: '250px',
		},
		multiple: true,
		clearable: true,
	},
};
