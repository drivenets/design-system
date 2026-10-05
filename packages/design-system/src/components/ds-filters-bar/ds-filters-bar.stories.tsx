import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from './index';
import { filtersBarViews } from './ds-filters-bar.types';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar',
	component: DsFiltersBar.Root,
	// Internal component, not exported from the package, so it stays out of the MCP manifest.
	tags: ['!manifest'],
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
**Work in progress — the API is wired, but only some parts render.** \`Root\`, \`Toolbar\`,
\`Search\`, \`Conditions\` (the add-filter button with its filters dialog, and a chip per
condition) and the advanced query view render; the other parts render nothing yet. Until \`ViewSwitch\` renders, the stories place the advanced view
directly under \`Root\`.

**Internal component.** Not exported from \`@drivenets/design-system\` while it is being built.

A toolbar above a table or list for narrowing the data with filters, a query builder or an advanced
query, with **Saved filters** and a pinned row of quick toggles.

**One filter document.** \`Root\` owns \`conditions\` and \`query\` (controlled or uncontrolled)
and describes what can be filtered through \`fields\`. Every view reads and writes that same
document, so a condition built in the query builder shows as a chip in the filters view and in the
collapsed summary.

**One query language.** The advanced view writes the conditions as query text and checks what the
user types against \`fields\`: \`status IN ("active", "pending") AND input.vendor ~ "cisco"\`.
Only a valid query reaches the document. One made of clauses joined by \`AND\` becomes conditions;
one with \`OR\` or parentheses becomes \`query\`, the only source, and the filters and builder
views lock until it is cleared. Evaluate such a query with \`parseFilterQuery(query, fields)\`.

**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves
them alone.

**Collapsed shows a summary, expanded shows the toolbar.** \`Summary\` renders while collapsed,
\`Toolbar\` while expanded; \`Pinned\` renders in both.
				`,
			},
		},
	},
	argTypes: {
		expanded: { control: 'boolean' },
		defaultExpanded: { control: 'boolean' },
		view: { control: 'select', options: filtersBarViews },
		defaultView: { control: 'select', options: filtersBarViews },
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
 * The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the
 * document with a search, an enum, a compound-field and a date-preset condition — one of each shape.
 * Only the advanced query renders for now; the other parts are in progress.
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
				type: 'number',
				id: 'parents',
				label: 'Parents',
				operators: [
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
					{ type: 'text', id: 'vendor', label: 'Vendor', operators: [{ value: '=', label: 'equals' }] },
				],
			},
		],
		defaultConditions: [
			{ kind: 'search', id: 'c1', text: 'AAA' },
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['active'] },
			{ kind: 'field', id: 'c3', field: 'input', subfield: 'name', operator: '~', value: 'WF456' },
			{ kind: 'field', id: 'c4', field: 'lastRun', operator: '=', value: 'last7Days' },
		],
		defaultPins: [
			{ field: 'status', value: 'active' },
			{ field: 'status', value: 'pending' },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Summary count={18} />

			<DsFiltersBar.Toolbar>
				<DsFiltersBar.SavedFilters
					items={[
						{ id: '1', name: 'MyFilter_1', count: 2 },
						{ id: '2', name: 'MyFilter_2', count: 1 },
					]}
					value={null}
					onValueChange={fn()}
					onClear={fn()}
					onRename={fn()}
					onDelete={fn()}
				/>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder suggestedFields={['input', 'status']} />
				</DsFiltersBar.View>
				<DsFiltersBar.SaveFilter
					items={[
						{ id: '1', name: 'MyFilter_1', count: 2 },
						{ id: '2', name: 'MyFilter_2', count: 1 },
					]}
					value={null}
					onUpdate={fn()}
					onSaveAs={fn()}
				/>
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Toolbar>

			{/* Moves back into Toolbar once Toolbar renders */}
			<DsFiltersBar.View value="advanced">
				<DsFiltersBar.Query />
			</DsFiltersBar.View>

			<DsFiltersBar.Pinned>
				<DsFiltersBar.PinnedGroup label="Status">
					<DsFiltersBar.PinnedToggle label="Active" count={10} active />
					<DsFiltersBar.PinnedToggle label="Pending" count={0} active={false} />
				</DsFiltersBar.PinnedGroup>
			</DsFiltersBar.Pinned>
		</DsFiltersBar.Root>
	),
};

/**
 * The "+" button in `Conditions` opens the filters dialog, with one tab per field and per compound
 * subfield. An enum tab has an operator, an option search, and a checkbox and pin per option. Text,
 * number and date tabs have an operator and a value; number and date tabs add **between** for a
 * range, and a date tab lists its presets. Edits stay a draft until **Save filters** writes one
 * condition per tab with a value, and the pins, back to the document; closing any other way drops
 * the draft. Search conditions are left as they are.
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
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Conditions />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * Enter adds the typed text as a search condition, shown as a chip after the "+" button, and clears
 * the input; the same search is not added twice. \`/\` focuses the input from anywhere outside a text
 * field or dialog. Clicking a chip moves its text back into the input for editing; its × removes it.
 * Search is disabled while an Advanced query is the source.
 */
export const Search: Story = {
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
 * Every condition shows as a chip after the "+" button: the field, its operator and the value, with
 * `Input › Name` for a compound field's subfield. When the field has more than one operator, the
 * operator is a menu that switches it in place; a field with one operator shows it as text, and a
 * range shows none, since it means "within". Clicking a chip opens the filters dialog on that field;
 * × removes a condition. While an Advanced query is the source, the chips and the "+" button are
 * hidden.
 */
export const SelectedFilters: Story = {
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
 * The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back
 * to the conditions, and one that breaks the rules shows why under the field.
 */
export const AdvancedQuery: Story = {
	args: {
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
			<DsFiltersBar.View value="advanced">
				<DsFiltersBar.Query />
			</DsFiltersBar.View>
		</DsFiltersBar.Root>
	),
};

/**
 * A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:
 * the conditions are ignored and the filters and builder views lock until the query is cleared.
 */
export const LockedViews: Story = {
	args: {
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
			<DsFiltersBar.View value="advanced">
				<DsFiltersBar.Query />
			</DsFiltersBar.View>
		</DsFiltersBar.Root>
	),
};

/**
 * `Root` takes its own strings through `locale`; each part takes its own `locale` too.
 */
export const Localized: Story = {
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
		],
		locale: { label: 'Refine results', expand: 'Show refinements', collapse: 'Hide refinements' },
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search locale={{ label: 'Find', placeholder: 'Press ‘/’ to find' }} />
				<DsFiltersBar.ViewSwitch
					locale={{ views: { filters: 'Quick filters', builder: 'Guided query', advanced: 'Query editor' } }}
				/>
				<DsFiltersBar.ClearAll locale={{ label: 'Reset' }} />
			</DsFiltersBar.Toolbar>

			{/* Moves back into Toolbar once Toolbar renders */}
			<DsFiltersBar.View value="advanced">
				<DsFiltersBar.Query
					locale={{ label: 'Query editor', placeholder: 'status = "Active"', help: 'Syntax' }}
				/>
			</DsFiltersBar.View>
		</DsFiltersBar.Root>
	),
};
