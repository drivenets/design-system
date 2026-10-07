import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Advanced Query',
	component: DsFiltersBar.Root,
	subcomponents: { 'DsFiltersBar.Query': DsFiltersBar.Query },
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Query\` is the advanced view: the **Filter document** as text in the query language,
for example \`status IN ("active", "pending") AND input.vendor ~ "cisco"\`. Place it inside
\`<DsFiltersBar.View value="advanced">\`. What the user types is checked against \`fields\`, and
only a valid query reaches the document: one joined by \`AND\` becomes conditions, and one with
\`OR\` or parentheses becomes the **Advanced query** (\`query\` on \`Root\`), the only source
until it is cleared. Evaluate it with \`parseFilterQuery(query, fields)\`.
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
 * The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back
 * to the conditions, and one that breaks the rules shows why under the field.
 */
export const Default: Story = {
	args: {
		defaultExpanded: true,
		defaultView: 'advanced',
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equals' },
					{ value: 'IN', label: 'is one of' },
					{ value: 'NOT IN', label: 'is none of' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
					{ value: 'pending', label: 'Pending' },
				],
			},
			{
				type: 'number',
				id: 'parents',
				label: 'Parents',
				operators: [
					{ value: '>', label: 'greater than' },
					{ value: '<', label: 'less than' },
				],
			},
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [
					{
						type: 'text',
						id: 'vendor',
						label: 'Vendor',
						operators: [
							{ value: '=', label: 'equals' },
							{ value: '~', label: 'contains' },
						],
					},
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: 'IN', value: ['active', 'pending'] },
			{ kind: 'field', id: 'c2', field: 'input', subfield: 'vendor', operator: '~', value: 'cisco' },
			{ kind: 'search', id: 'c3', text: 'timeout' },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={5} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:
 * the conditions are ignored, the search is disabled, and the filters and builder views lock until
 * the query is cleared.
 */
export const LockedViews: Story = {
	args: {
		defaultExpanded: true,
		defaultView: 'advanced',
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [{ value: 'active', label: 'Active' }],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [{ value: '=', label: 'equals' }],
				options: [{ value: 'scheduled', label: 'Scheduled' }],
			},
		],
		defaultQuery: 'status = "active" OR trigger = "scheduled"',
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={5} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
