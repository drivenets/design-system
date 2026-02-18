import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import DsSelect from './ds-select';
import type { DsSelectOption, DsSelectProps } from './ds-select.types';
import styles from './ds-select.stories.module.scss';

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

	const firstOption = mockOptions[0];
	const secondOption = mockOptions[1];

	if (!firstOption || !secondOption) {
		throw new Error('mockOptions must have at least 2 items');
	}

	// Open the select dropdown
	await userEvent.click(trigger);

	// Verify that the first item is not selected initially
	const option1 = screen.getByRole('option', { name: firstOption.label });
	await expect(option1).not.toHaveAttribute('data-state', 'checked');

	// Select the first item
	await userEvent.click(option1);
	await expect(trigger).toHaveTextContent(firstOption.label);

	// Open the select dropdown again
	await userEvent.click(trigger);

	// Select the second item
	const option2 = screen.getByRole('option', { name: secondOption.label });
	await userEvent.click(option2);
	await expect(trigger).toHaveTextContent(secondOption.label);

	// Open the select dropdown again to verify selection states
	await userEvent.click(trigger);

	// Verify that the first item is no longer selected
	const updatedOption1 = screen.getByRole('option', { name: firstOption.label });
	await expect(updatedOption1).not.toHaveAttribute('data-state', 'checked');

	// Verify that the second item is now selected
	const updatedOption2 = screen.getByRole('option', { name: secondOption.label });
	await expect(updatedOption2).toHaveAttribute('data-state', 'checked');

	// Close the dropdown
	await userEvent.click(trigger);

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
] satisfies DsSelectOption[];

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

export const Sizes: Story = {
	render: (args) => (
		<div className={styles.sizesContainer}>
			<div className={styles.sizeItem}>
				<div className={styles.sizeLabel}>Default</div>
				<ControlledSelectWrapper {...args} size="default" />
			</div>
			<div className={styles.sizeItem}>
				<div className={styles.sizeLabel}>Small</div>
				<ControlledSelectWrapper {...args} size="small" />
			</div>
		</div>
	),
	args: {
		options: mockOptions.slice(0, 5),
		clearable: true,
		style: {
			width: '200px',
		},
	},
	argTypes: {
		size: {
			table: {
				disable: true,
			},
		},
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');

		// Open the dropdown to access multi-select options
		await userEvent.click(trigger);

		// Click "All" to select all available options
		const allOption = screen.getByRole('option', { name: 'All' });
		await userEvent.click(allOption);

		// Click the "+7" chip to expand and show all selected items
		const expandChip = screen.getByRole('button', { name: /^\+\d+$/ });
		await userEvent.click(expandChip);

		// Verify all options from mockOptions are displayed as chips
		for (const option of mockOptions) {
			const chip = screen.getByRole('button', { name: option.label });
			await expect(chip).toBeInTheDocument();
		}

		// Close the dropdown by clicking the trigger
		await userEvent.click(trigger);

		// Verify the trigger contains all selected option labels (text may have ellipsis in UI but full text is in DOM)
		for (const option of mockOptions) {
			await expect(trigger).toHaveTextContent(option.label);
		}

		// Open the dropdown again
		await userEvent.click(trigger);

		// Delete the first option by clicking its delete button
		const firstOption = mockOptions[0] as DsSelectOption;
		const firstOptionChip = screen.getByRole('button', { name: firstOption.label });
		const deleteButton = within(firstOptionChip).getByRole('button', { name: 'Delete chip' });
		await userEvent.click(deleteButton);

		// Verify deleted option is no longer visible
		await expect(firstOptionChip).not.toBeInTheDocument();

		// Click the "Clear All" button
		const clearAllButton = screen.getByRole('button', { name: 'Clear All' });
		await userEvent.click(clearAllButton);

		// Close the dropdown
		await userEvent.click(trigger);

		// Verify the trigger is empty
		await expect(trigger).toHaveTextContent('Click to select a value');
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
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		const placeholder = 'Click to select a value';

		await step('Search input appears and filters items', async () => {
			await userEvent.click(trigger);

			// Verify search input is present
			const searchInput = screen.getByPlaceholderText('Search');
			await expect(searchInput).toBeInTheDocument();

			await userEvent.type(searchInput, 'berry');

			// Verify matching items are visible
			await expect(screen.getByRole('option', { name: 'Elderberry' })).toBeInTheDocument();

			// Verify non-matching items are not visible
			await expect(screen.queryByRole('option', { name: 'Apple' })).not.toBeInTheDocument();
			await expect(screen.queryByRole('option', { name: 'Banana' })).not.toBeInTheDocument();
			await expect(screen.queryByRole('option', { name: 'Date' })).not.toBeInTheDocument();

			await userEvent.clear(searchInput);
		});

		await step('Select multiple options', async () => {
			const appleOption = screen.getByRole('option', { name: 'Apple' });
			await userEvent.click(appleOption);

			const bananaOption = screen.getByRole('option', { name: 'Banana' });
			await userEvent.click(bananaOption);

			const cherryOption = screen.getByRole('option', { name: 'Cherry' });
			await userEvent.click(cherryOption);

			// Verify multiple selections in trigger
			await expect(trigger).toHaveTextContent('Apple');
			await expect(trigger).toHaveTextContent('Banana');
			await expect(trigger).toHaveTextContent('Cherry');
		});

		await step('Clear all selections with Backspace', async () => {
			await userEvent.keyboard('{Escape}');
			await userEvent.keyboard('{Backspace}');

			// Verify all values are cleared
			await expect(trigger).toHaveTextContent(placeholder);
			await expect(trigger).not.toHaveTextContent('Apple');
			await expect(trigger).not.toHaveTextContent('Banana');
			await expect(trigger).not.toHaveTextContent('Cherry');
		});
	},
};

export const KeyboardInteractions: Story = {
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
			width: '250px',
		},
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		const placeholder = 'Click to select a value';

		await step('Backspace key clears selected value', async () => {
			await userEvent.click(trigger);

			const appleOption = screen.getByRole('option', { name: 'Apple' });
			await userEvent.click(appleOption);
			await expect(trigger).toHaveTextContent('Apple');

			await userEvent.keyboard('{Escape}');
			await userEvent.keyboard('{Backspace}');

			await expect(trigger).toHaveTextContent(placeholder);
		});

		await step('Delete key clears selected value', async () => {
			await userEvent.click(trigger);

			const bananaOption = screen.getByRole('option', { name: 'Banana' });
			await userEvent.click(bananaOption);
			await expect(trigger).toHaveTextContent('Banana');

			await userEvent.keyboard('{Escape}');
			await userEvent.keyboard('{Delete}');

			await expect(trigger).toHaveTextContent(placeholder);
		});

		await step('Space key works normally in search input', async () => {
			await userEvent.click(trigger);

			const searchInput = screen.getByPlaceholderText('Search');
			await userEvent.click(searchInput);

			await userEvent.type(searchInput, 'indian fig');

			await expect(searchInput).toHaveValue('indian fig');

			const indianFigOption = screen.getByRole('option', { name: 'Indian fig' });
			await expect(indianFigOption).toBeInTheDocument();

			await userEvent.clear(searchInput);
			await userEvent.keyboard('{Escape}');
		});
	},
};
