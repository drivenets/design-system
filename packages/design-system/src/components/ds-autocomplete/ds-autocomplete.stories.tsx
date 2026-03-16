import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, screen, userEvent, within } from 'storybook/test';
import { DsIcon } from '../ds-icon';
import { DsAutocomplete } from './ds-autocomplete';
import type { DsAutocompleteOption } from './ds-autocomplete.types';

const meta: Meta<typeof DsAutocomplete> = {
	title: 'Design System/Autocomplete',
	component: DsAutocomplete,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		options: {
			control: 'object',
			description: 'Options to display in the autocomplete dropdown',
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
		locale: {
			control: 'object',
			description: 'Locale strings for the autocomplete component',
		},
	},
	args: {
		onValueChange: fn(),
		onInputValueChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsAutocomplete>;

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
	render: (args) => <DsAutocomplete {...args} />,
	args: {
		options: mockOptions,
		showTrigger: true,
		placeholder: 'Select or type to search...',
		style: { width: '300px' },
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');
		const trigger = canvas.getByRole('button', { name: /toggle dropdown/i });

		await expect(trigger).toBeInTheDocument();

		await userEvent.click(trigger);

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
		await expect(args.onValueChange).toHaveBeenCalledWith('banana');

		const clearButton = canvas.getByLabelText('Clear');
		await userEvent.click(clearButton);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('');
	},
};

export const SearchMode: Story = {
	render: (args) => <DsAutocomplete {...args} />,
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

		await userEvent.type(input, 'a');
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('a');

		const appleOption = await screen.findByRole('option', { name: /Apple/i });
		await expect(appleOption).toBeInTheDocument();

		await userEvent.click(appleOption);
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Apple');
		await expect(args.onValueChange).toHaveBeenCalledWith('apple');

		const clearButton = canvas.getByLabelText('Clear');
		await userEvent.click(clearButton);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('');
	},
};

export const SearchWithIcon: Story = {
	render: (args) => <DsAutocomplete {...args} />,
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

		const usOption = await screen.findByRole('option', { name: /United States/i });
		await expect(usOption).toBeInTheDocument();

		await userEvent.click(usOption);
		await expect(args.onInputValueChange).toHaveBeenCalledWith('United States');
		await expect(args.onValueChange).toHaveBeenCalledWith('us');
		await expect(input).toHaveValue('United States');
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div style={{ width: '300px' }}>
				<p>Default (with trigger)</p>
				<DsAutocomplete options={mockOptions} showTrigger placeholder="Select or type..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Search Mode (no trigger)</p>
				<DsAutocomplete options={mockOptions} showTrigger={false} placeholder="Start typing..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Search with Icon</p>
				<DsAutocomplete
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
				<DsAutocomplete options={mockOptions} disabled placeholder="Disabled autocomplete..." />
			</div>
			<div style={{ width: '300px' }}>
				<p>Invalid</p>
				<DsAutocomplete options={mockOptions} invalid placeholder="Invalid autocomplete..." />
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

const ASYNC_DELAY_MS = 150;

const fetchCountries = async (query: string): Promise<DsAutocompleteOption[]> => {
	await new Promise((resolve) => setTimeout(resolve, ASYNC_DELAY_MS));

	return countries.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
};

const fetchAllCountries = async (): Promise<DsAutocompleteOption[]> => {
	await new Promise((resolve) => setTimeout(resolve, ASYNC_DELAY_MS));

	return countries;
};

export const AsyncSearch: Story = {
	render: (args) => {
		const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
		const [loading, setLoading] = useState(false);

		const handleInputValueChange = async (value: string) => {
			args.onInputValueChange?.(value);

			if (!value) {
				setOptions([]);
				return;
			}

			setLoading(true);
			const results = await fetchCountries(value);
			setOptions(results);
			setLoading(false);
		};

		return (
			<DsAutocomplete
				{...args}
				options={options}
				loading={loading}
				onInputValueChange={handleInputValueChange}
				showTrigger={false}
				startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />}
				placeholder="Search countries (async)..."
				locale={{ noMatches: 'No results found' }}
				style={{ width: '300px' }}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');

		await userEvent.type(input, 'Uni');

		const usOption = await screen.findByRole('option', { name: /United States/i });
		await expect(usOption).toBeInTheDocument();
		await expect(screen.getByRole('option', { name: /United Kingdom/i })).toBeInTheDocument();
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Uni');

		await userEvent.click(usOption);
		await expect(args.onValueChange).toHaveBeenCalledWith('us');
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('United States');
		await expect(input).toHaveValue('United States');

		const clearButton = canvas.getByLabelText('Clear');
		await userEvent.click(clearButton);
		await expect(args.onInputValueChange).toHaveBeenLastCalledWith('');
		await expect(input).toHaveValue('');

		await userEvent.type(input, 'zzz');
		await screen.findByText('No results found');
		await expect(screen.queryByRole('option')).not.toBeInTheDocument();

		await userEvent.clear(input);
		await userEvent.type(input, 'an');

		const options = await screen.findAllByRole('option');
		await expect(options.length).toBeGreaterThanOrEqual(2);
		await expect(screen.getByRole('option', { name: /Canada/i })).toBeInTheDocument();
		await expect(screen.getByRole('option', { name: /France/i })).toBeInTheDocument();

		await userEvent.type(input, 'ad');
		await screen.findByRole('option', { name: /Canada/i });
		await expect(screen.queryByRole('option', { name: /France/i })).not.toBeInTheDocument();
	},
};

export const AsyncOptions: Story = {
	render: (args) => {
		const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			void fetchAllCountries().then((results) => {
				setOptions(results);
				setLoading(false);
			});
		}, []);

		return (
			<DsAutocomplete
				{...args}
				options={options}
				loading={loading}
				placeholder="Select a country..."
				style={{ width: '300px' }}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox');
		const trigger = canvas.getByRole('button', { name: /toggle dropdown/i });

		await userEvent.click(trigger);

		const usOption = await screen.findByRole('option', { name: /United States/i });
		await expect(usOption).toBeInTheDocument();
		await expect(screen.getByRole('option', { name: /Japan/i })).toBeInTheDocument();

		await userEvent.type(input, 'Un');
		await expect(screen.getByRole('option', { name: /United States/i })).toBeInTheDocument();
		await expect(screen.getByRole('option', { name: /United Kingdom/i })).toBeInTheDocument();
		await expect(screen.queryByRole('option', { name: /Japan/i })).not.toBeInTheDocument();

		await userEvent.click(screen.getByRole('option', { name: /United States/i }));
		await expect(args.onValueChange).toHaveBeenCalledWith('us');
	},
};
