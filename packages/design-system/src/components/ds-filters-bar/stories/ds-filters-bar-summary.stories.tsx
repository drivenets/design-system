import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Summary',
	component: DsFiltersBar.Root,
	subcomponents: { 'DsFiltersBar.Summary': DsFiltersBar.Summary },
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Summary\` is the collapsed row: the **Filter summary**, a one-line, read-only
description of the **Filter document**, followed by the result count. It lists the conditions,
names the **Active saved filter** first when \`activeSavedFilterName\` is set, and shows a fixed
label instead of the query text while an **Advanced query** is the source. It renders nothing while
the bar is expanded. The consumer computes \`count\`.
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
 * Each condition reads as `Label operator: value;`, a search as `Search: text;`, after the name of
 * the **Active saved filter**. The count trails the line.
 */
export const Default: Story = {
	args: {
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equal' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated'] },
			{ kind: 'search', id: 'c2', text: 'AAA' },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={18} activeSavedFilterName="Ira123" />
		</DsFiltersBar.Root>
	),
};

/**
 * While an **Advanced query** is the source, the summary names it without repeating its text.
 */
export const AdvancedQuery: Story = {
	args: {
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
				],
			},
		],
		defaultQuery: 'status = "active" OR status = "deprecated"',
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={5} />
		</DsFiltersBar.Root>
	),
};

/**
 * With an empty document the summary reads `View: All;`.
 */
export const Empty: Story = {
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={726} />
		</DsFiltersBar.Root>
	),
};

/**
 * `Summary` takes its own strings through `locale`: the saved filter, search and advanced query
 * labels, the empty view and the announced result count.
 */
export const Localized: Story = {
	args: {
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equal' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated'] },
			{ kind: 'search', id: 'c2', text: 'AAA' },
		],
		locale: { label: 'Refine results', expand: 'Show refinements', collapse: 'Hide refinements' },
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary
				count={18}
				activeSavedFilterName="Ira123"
				locale={{
					resultCount: (count) => `${String(count)} matches`,
					activeSavedFilter: 'Preset',
					emptyLabel: 'Showing',
					emptyValue: 'Everything',
					search: 'Text',
					advancedQuery: 'Custom query',
				}}
			/>
		</DsFiltersBar.Root>
	),
};
