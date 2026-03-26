import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
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
};

export const SearchMode: Story = {
	render: (args) => <DsAutocomplete {...args} />,
	args: {
		options: mockOptions,
		showTrigger: false,
		placeholder: 'Start typing to search...',
		style: { width: '300px' },
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
};
