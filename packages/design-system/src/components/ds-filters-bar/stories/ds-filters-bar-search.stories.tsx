import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Search',
	component: DsFiltersBar.Root,
	subcomponents: { 'DsFiltersBar.Search': DsFiltersBar.Search },
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Search\` is the free-text input of the toolbar. Enter adds the trimmed text to the
**Filter document** as a search condition, shown as a chip by \`Conditions\`, and clears the input;
the same search is not added twice. \`/\` focuses it from anywhere outside a text field or dialog.
The pending text is uncontrolled by default; pair \`value\` with \`onValueChange\` to control it.
It is disabled while an **Advanced query** is the source.
				`,
			},
		},
	},
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onConditionsChange: { table: { disable: true } },
		onQueryChange: { table: { disable: true } },
		onPinsChange: { table: { disable: true } },
		onExpandedChange: { table: { disable: true } },
		onViewChange: { table: { disable: true } },
	},
	args: {
		onConditionsChange: fn(),
		onQueryChange: fn(),
		onPinsChange: fn(),
		onExpandedChange: fn(),
		onViewChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsFiltersBar.Root>;

/**
 * Type and press Enter to add a search chip after the "+" button. Clicking a chip moves its text
 * back into the input for editing; its × removes it.
 */
export const Default: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals', symbol: '=' }],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
		],
		defaultConditions: [{ kind: 'search', id: 'c1', text: 'AAA' }],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={7} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * `disabled` blocks typing, for example while the data is loading. The bar also disables the input
 * on its own while an **Advanced query** is the source.
 */
export const Disabled: Story = {
	args: {
		defaultExpanded: true,
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search disabled />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
