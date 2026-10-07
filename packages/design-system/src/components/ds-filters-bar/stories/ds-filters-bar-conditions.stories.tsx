import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Conditions',
	component: DsFiltersBar.Root,
	subcomponents: { 'DsFiltersBar.Conditions': DsFiltersBar.Conditions },
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Conditions\` is the filters view: a "+" button that opens the filters dialog, then
one chip per **Filter condition** in the **Filter document**. Place it inside
\`<DsFiltersBar.View value="filters">\`. While an **Advanced query** is the source, the chips and
the "+" button are hidden; they come back when the query is cleared.
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
 * Every condition shows as a chip after the "+" button: the field, its operator and the value, with
 * `Input › Name` for a compound field's subfield. When the field has more than one operator, the
 * operator is a menu that switches it in place; a field with one operator shows it as text, and a
 * range shows none, since it means "within". Clicking a chip opens the filters dialog on that field;
 * × removes a condition.
 */
export const Default: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
					{ value: 'pending', label: 'Pending' },
				],
			},
			{
				type: 'enum',
				id: 'lastRunResult',
				label: 'Last run result',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'succeeded', label: 'Succeeded' },
					{ value: 'failed', label: 'Failed' },
				],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'manual', label: 'Manual' },
					{ value: 'scheduled', label: 'Scheduled' },
				],
			},
			{
				type: 'number',
				id: 'parents',
				label: 'Parents',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '>', label: 'greater than', symbol: '>' },
					{ value: '<', label: 'less than', symbol: '<' },
				],
			},
			{
				type: 'date',
				id: 'lastRun',
				label: 'Last run',
				operators: [
					{ value: '=', label: 'is', symbol: '=' },
					{ value: '>', label: 'after', symbol: '>' },
					{ value: '<', label: 'before', symbol: '<' },
				],
				presets: [
					{ value: 'today', label: 'Today' },
					{ value: 'last7Days', label: 'Last 7 days' },
				],
			},
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [
					{
						type: 'text',
						id: 'name',
						label: 'Name',
						operators: [
							{ value: '~', label: 'contains' },
							{ value: '!~', label: 'does not contain' },
						],
					},
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['active', 'pending'] },
			{ kind: 'field', id: 'c2', field: 'lastRunResult', operator: '!=', value: ['succeeded'] },
			{ kind: 'field', id: 'c3', field: 'trigger', operator: '=', value: ['scheduled'] },
			{ kind: 'field', id: 'c4', field: 'parents', operator: '=', value: { from: 1, to: 5 } },
			{ kind: 'field', id: 'c5', field: 'lastRun', operator: '>', value: 'last7Days' },
			{ kind: 'field', id: 'c6', field: 'input', subfield: 'name', operator: '~', value: 'WF456' },
			{ kind: 'search', id: 'c7', text: 'AAA' },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={9} />
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
 * The "+" button opens the filters dialog, with one tab per field and per compound subfield. An
 * enum tab has an operator, an option search, and a checkbox and pin per option. Text, number and
 * date tabs have an operator and a value; number and date tabs add **between** for a range, and a
 * date tab lists its presets. Edits stay a draft until **Save filters** writes one condition per tab
 * with a value, and the pins, back to the document; closing any other way drops the draft. Search
 * conditions are left as they are.
 */
export const FiltersDialog: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
					{ value: 'inactive', label: 'Inactive' },
					{ value: 'pending', label: 'Pending' },
					{ value: 'draft', label: 'Draft' },
				],
			},
			{
				type: 'enum',
				id: 'workflow',
				label: 'Workflow',
				operators: [
					{ value: 'IN', label: 'is any of', symbol: '∈' },
					{ value: 'NOT IN', label: 'is none of', symbol: '∉' },
				],
				options: [
					{ value: 'deploy', label: 'Deploy' },
					{ value: 'backup', label: 'Backup' },
					{ value: 'upgrade', label: 'Upgrade' },
					{ value: 'rollback', label: 'Rollback' },
					{ value: 'healthCheck', label: 'Health check' },
					{ value: 'provision', label: 'Provision' },
				],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'manual', label: 'Manual' },
					{ value: 'scheduled', label: 'Scheduled' },
					{ value: 'api', label: 'API' },
					{ value: 'webhook', label: 'Webhook' },
				],
			},
			{
				type: 'number',
				id: 'parents',
				label: 'Parents',
				operators: [
					{ value: '=', label: 'equals', symbol: '=' },
					{ value: '>', label: 'greater than', symbol: '>' },
					{ value: '<', label: 'less than', symbol: '<' },
				],
			},
			{
				type: 'date',
				id: 'lastRun',
				label: 'Last run',
				operators: [
					{ value: '=', label: 'is', symbol: '=' },
					{ value: '>', label: 'after', symbol: '>' },
					{ value: '<', label: 'before', symbol: '<' },
				],
				presets: [
					{ value: 'today', label: 'Today' },
					{ value: 'last7Days', label: 'Last 7 days' },
				],
			},
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [
					{
						type: 'text',
						id: 'name',
						label: 'Name',
						operators: [
							{ value: '~', label: 'contains' },
							{ value: '!~', label: 'does not contain' },
						],
					},
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated', 'draft'] },
			{ kind: 'field', id: 'c2', field: 'trigger', operator: '=', value: ['scheduled'] },
			{ kind: 'field', id: 'c3', field: 'parents', operator: '=', value: { from: 1, to: 5 } },
		],
		defaultPins: [
			{ field: 'status', value: 'active' },
			{ field: 'workflow', value: 'deploy' },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={42} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
