import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { DsAutocomplete } from './ds-autocomplete';
import type { DsAutocompleteOption } from './ds-autocomplete.types';
import styles from './ds-autocomplete.stories.module.scss';

const meta: Meta<typeof DsAutocomplete> = {
	title: 'Components/Autocomplete',
	component: DsAutocomplete,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className={styles.field}>
				<Story />
			</div>
		),
	],
	argTypes: {
		options: { control: 'object' },
		placeholder: { control: 'text' },
		highlightMatch: { control: 'boolean' },
		showTrigger: { control: 'boolean' },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		invalid: { control: 'boolean' },
		locale: { control: 'object' },
		startAdornment: { control: false },
		onValueChange: { action: 'valueChange' },
		onInputValueChange: { action: 'inputValueChange' },
		onOpenChange: { action: 'openChange' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsAutocomplete>;

/**
 * The default autocomplete opens its dropdown from the trigger arrow or by typing,
 * and highlights the matching text while the list is filtered. Reach for this when the
 * user should be able to both browse the full list and search within it.
 */
export const Default: Story = {
	args: {
		placeholder: 'Select or type to search...',
		options: [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		],
	},
};

/**
 * Search mode hides the trigger arrow so the list only opens while typing. Use it for
 * search-style inputs where a persistent dropdown affordance would imply a short, fixed list.
 */
export const SearchMode: Story = {
	render: () => (
		<DsAutocomplete
			showTrigger={false}
			placeholder="Start typing to search..."
			options={[
				{ value: 'apple', label: 'Apple' },
				{ value: 'banana', label: 'Banana' },
				{ value: 'cherry', label: 'Cherry' },
			]}
		/>
	),
};

/**
 * A `startAdornment` renders content before the input — most often a search icon — to
 * reinforce the search intent without adding a separate label.
 */
export const WithStartAdornment: Story = {
	args: {
		showTrigger: false,
		startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
		placeholder: 'Search countries...',
		options: [
			{ value: 'us', label: 'United States' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'ca', label: 'Canada' },
		],
	},
};

/**
 * Each option can carry an `icon` that renders alongside its label, useful for giving
 * options a recognizable visual anchor.
 */
export const WithOptionIcons: Story = {
	args: {
		placeholder: 'Select a fruit...',
		options: [
			{ value: 'apple', label: 'Apple', icon: 'nutrition' },
			{ value: 'banana', label: 'Banana', icon: 'nutrition' },
			{ value: 'cherry', label: 'Cherry', icon: 'nutrition' },
		],
	},
};

/**
 * Disable match highlighting when the emphasized `mark` styling would compete with the
 * option content, or when matches are handled server-side and no local query is available.
 */
export const WithoutHighlight: Story = {
	render: () => (
		<DsAutocomplete
			highlightMatch={false}
			placeholder="Select or type to search..."
			options={[
				{ value: 'apple', label: 'Apple' },
				{ value: 'banana', label: 'Banana' },
				{ value: 'cherry', label: 'Cherry' },
			]}
		/>
	),
};

/**
 * While `loading` is true a loading message replaces the option list, signalling that
 * results are being fetched. Pair it with server-driven `options` (see AsyncSearch).
 */
export const Loading: Story = {
	args: {
		loading: true,
		placeholder: 'Loading options...',
		options: [],
	},
};

/**
 * The disabled state blocks all interaction and dims the control. Use it when the field
 * depends on another selection that has not been made yet.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled autocomplete',
		options: [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		],
	},
};

/**
 * The invalid state applies an error border for use with external validation — the input
 * stays focusable so the user can correct their entry.
 */
export const Invalid: Story = {
	args: {
		invalid: true,
		placeholder: 'Invalid autocomplete',
		options: [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		],
	},
};

/**
 * The `locale` prop overrides the loading and empty-state messages so the component can be
 * translated. Only the strings passed are overridden; omitted keys keep their defaults.
 */
export const Localized: Story = {
	args: {
		locale: { loading: 'Fetching...', noMatches: 'No matching options found' },
		placeholder: 'Search or type...',
		options: [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		],
	},
};

/**
 * For server-driven search, keep the fetched results in local state and feed them back via
 * `options` while toggling `loading`. This is the recommended pattern for large or remote
 * datasets that should not be filtered on the client.
 */
export const AsyncSearch: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: (args) => {
		const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
		const [loading, setLoading] = useState(false);

		const handleInputValueChange = async (value: string) => {
			if (!value) {
				setOptions([]);
				return;
			}

			setLoading(true);
			const countries: DsAutocompleteOption[] = [
				{ value: 'us', label: 'United States' },
				{ value: 'uk', label: 'United Kingdom' },
				{ value: 'ca', label: 'Canada' },
			];
			await new Promise((resolve) => setTimeout(resolve, 150));
			setOptions(countries.filter((c) => c.label.toLowerCase().includes(value.toLowerCase())));
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
			/>
		);
	},
};

/**
 * When the full option set is fetched once on mount, start in a `loading` state and swap in
 * the results when the request resolves. After that the component filters locally.
 */
export const AsyncOptions: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: (args) => {
		const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			const load = async () => {
				await new Promise((resolve) => setTimeout(resolve, 150));
				setOptions([
					{ value: 'us', label: 'United States' },
					{ value: 'uk', label: 'United Kingdom' },
					{ value: 'ca', label: 'Canada' },
				]);
				setLoading(false);
			};

			void load();
		}, []);

		return <DsAutocomplete {...args} options={options} loading={loading} placeholder="Select a country..." />;
	},
};

/**
 * Visual comparison of the disabled and invalid states side by side. Reference only —
 * behavior for each state is covered by the individual stories and browser tests.
 */
export const States: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => {
		const options: DsAutocompleteOption[] = [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		];

		return (
			<DsStack direction="column" gap="var(--standard)" width="320px">
				<DsStack direction="column" gap="var(--2xs)">
					<DsTypography variant="body-xs-reg" color="secondary">
						Disabled
					</DsTypography>
					<DsAutocomplete options={options} disabled placeholder="Disabled autocomplete" />
				</DsStack>
				<DsStack direction="column" gap="var(--2xs)">
					<DsTypography variant="body-xs-reg" color="secondary">
						Invalid
					</DsTypography>
					<DsAutocomplete options={options} invalid placeholder="Invalid autocomplete" />
				</DsStack>
			</DsStack>
		);
	},
};
