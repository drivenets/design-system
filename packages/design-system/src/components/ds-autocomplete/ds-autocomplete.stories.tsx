import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, screen, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { DsIcon } from '../ds-icon';
import { DsAutocomplete } from './ds-autocomplete';
import type { DsAutocompleteProps } from './ds-autocomplete.types';

const meta: Meta<typeof DsAutocomplete> = {
	title: 'Design System/Autocomplete',
	component: DsAutocomplete,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		options: {
			control: 'object',
			description: 'Options to display in the autocomplete dropdown',
		},
		value: {
			control: 'text',
			description: 'Current value of the input',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text when input is empty',
		},
		highlightMatch: {
			control: 'boolean',
			description: 'Whether to highlight the matching text in the dropdown options',
		},
		showTrigger: {
			control: 'boolean',
			description: 'Whether to show the dropdown trigger (arrow) button',
		},
		startAdornment: {
			control: 'object',
			description: 'Content to display at the start of the input (e.g., a search icon)',
		},
		noMatchesMessage: {
			control: 'text',
			description: 'Message to display when no options match the input',
		},
	},
	args: {
		onValueChange: fn(),
		onInputValueChange: fn(),
		onOptionSelect: fn(),
		onOpenChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsAutocomplete>;

const ControlledWrapper = (props: Partial<DsAutocompleteProps>) => {
	const [value, setValue] = useState<string>('');

	const handleValueChange = (newValue: string) => {
		setValue(newValue);
	};

	return (
		<DsAutocomplete
			{...props}
			options={props.options || []}
			value={value}
			onValueChange={handleValueChange}
		/>
	);
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
	{ value: 'kiwi', label: 'Kiwi' },
	{ value: 'lemon', label: 'Lemon' },
	{ value: 'mango', label: 'Mango' },
	{ value: 'nectarine', label: 'Nectarine' },
];

const countries = [
	{ value: 'us', label: 'United States' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'au', label: 'Australia' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'it', label: 'Italy' },
	{ value: 'es', label: 'Spain' },
	{ value: 'jp', label: 'Japan' },
	{ value: 'cn', label: 'China' },
];

export const Default: Story = {
	render: (args) => <ControlledWrapper {...args} />,
	args: {
		options: mockOptions,
		showTrigger: true,
		placeholder: 'Select or type to search...',
		style: { width: '300px' },
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');
		const trigger = canvas.getByLabelText('Toggle dropdown');

		await expect(trigger).toBeInTheDocument();

		await userEvent.click(trigger);
		await expect(args.onOpenChange).toHaveBeenCalledWith(true);

		const appleOption = await screen.findByRole('option', { name: /Apple/i });
		await expect(appleOption).toBeInTheDocument();

		await userEvent.click(input);
		await expect(input).toHaveFocus();
		await userEvent.type(input, 'b');
		await expect(screen.queryByRole('option', { name: /Apple/i })).not.toBeInTheDocument();
		await expect(screen.getByRole('option', { name: /Banana/i })).toBeInTheDocument();
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('b');

		await userEvent.click(screen.getByRole('option', { name: /Banana/i }));
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Banana');
		await expect(args.onOptionSelect).toHaveBeenCalledWith({ value: 'banana', label: 'Banana' });

		const clearButton = canvas.getByLabelText('Clear');
		await userEvent.click(clearButton);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('');
	},
};

export const SearchMode: Story = {
	render: (args) => <ControlledWrapper {...args} />,
	args: {
		options: mockOptions,
		showTrigger: false,
		placeholder: 'Start typing to search...',
		style: { width: '300px' },
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');
		const trigger = canvas.queryByLabelText('Toggle dropdown');

		await expect(trigger).not.toBeInTheDocument();

		await userEvent.click(input);
		await expect(input).toHaveFocus();
		await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
		await expect(args.onOpenChange).not.toHaveBeenCalled();

		await userEvent.type(input, 'a');
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('a');
		await expect(args.onOpenChange).toHaveBeenCalledWith(true);

		const appleOption = await screen.findByRole('option', { name: /Apple/i });
		await expect(appleOption).toBeInTheDocument();

		await userEvent.click(appleOption);
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Apple');
		await expect(args.onOptionSelect).toHaveBeenCalledWith({ value: 'apple', label: 'Apple' });

		const clearButton = canvas.getByLabelText('Clear');
		await userEvent.click(clearButton);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('');
	},
};

export const SearchWithIcon: Story = {
	render: (args) => <ControlledWrapper {...args} />,
	args: {
		options: countries,
		showTrigger: false,
		startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
		placeholder: 'Search countries...',
		style: { width: '300px' },
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');
		const searchIcon = canvas.getByLabelText('search icon');

		await expect(searchIcon).toBeInTheDocument();

		await userEvent.type(input, 'Sta');
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Sta');
		await expect(args.onOpenChange).toHaveBeenCalledWith(true);

		const usOption = await screen.findByRole('option', { name: /United States/i });
		await expect(usOption).toBeInTheDocument();

		await userEvent.click(usOption);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('United States');
		await expect(args.onOptionSelect).toHaveBeenCalledWith({ value: 'us', label: 'United States' });
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div style={{ width: '300px' }}>
				<p>Default (with trigger)</p>
				<ControlledWrapper options={mockOptions} showTrigger placeholder="Select or type..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Search Mode (no trigger)</p>
				<ControlledWrapper options={mockOptions} showTrigger={false} placeholder="Start typing..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Search with Icon</p>
				<ControlledWrapper
					options={countries}
					showTrigger={false}
					startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />}
					placeholder="Search countries..."
				/>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const inputs = canvas.getAllByRole('combobox');

		await expect(inputs).toHaveLength(3);

		const defaultInput = inputs[0] as HTMLInputElement;
		await userEvent.click(defaultInput);
		await expect(defaultInput).toHaveFocus();
		await userEvent.type(defaultInput, 'ap');
		const appleOption = await screen.findByText('Apple');
		await expect(appleOption).toBeInTheDocument();
		await userEvent.clear(defaultInput);
		await userEvent.keyboard('{Escape}');

		const searchModeInput = inputs[1] as HTMLInputElement;
		await userEvent.click(searchModeInput);
		await userEvent.type(searchModeInput, 'ban');
		const bananaOption = await screen.findByText('Banana');
		await expect(bananaOption).toBeInTheDocument();
		await userEvent.clear(searchModeInput);
		await userEvent.keyboard('{Escape}');
	},
};

export const States: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div style={{ width: '300px' }}>
				<p>Disabled</p>
				<ControlledWrapper options={mockOptions} disabled placeholder="Disabled autocomplete..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Invalid</p>
				<ControlledWrapper options={mockOptions} invalid placeholder="Invalid autocomplete..." />
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const inputs = canvas.getAllByRole('combobox');

		await expect(inputs).toHaveLength(2);

		const disabledInput = inputs[0] as HTMLInputElement;
		await expect(disabledInput).toBeDisabled();

		const invalidInput = inputs[1] as HTMLInputElement;
		await expect(invalidInput).toBeInTheDocument();
		await expect(invalidInput).not.toBeDisabled();
	},
};
