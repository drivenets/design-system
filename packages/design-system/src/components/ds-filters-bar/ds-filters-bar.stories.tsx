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
**Work in progress — the API is wired, the parts render nothing yet.**

**Internal component.** Not exported from \`@drivenets/design-system\` while it is being built.

A toolbar above a table or list for narrowing the data with filters, a query builder or an advanced
query, with **Saved filters** and a pinned row of quick toggles.

**One filter document.** \`Root\` owns \`conditions\` and \`query\` (controlled or uncontrolled)
and describes what can be filtered through \`fields\`. Every view reads and writes that same
document, so a condition built in the query builder shows as a chip in the filters view and in the
collapsed summary.

**One source at a time.** While \`query\` is \`null\` the conditions filter the data and the
advanced view shows them through \`formatQuery\`. Once the user edits the query it becomes the only
source, the conditions are ignored, and the filters and builder views lock. Clearing hands control
back to the conditions.

**The bar does not own the query language.** It never parses \`query\`; \`formatQuery\` renders
conditions in the consumer's syntax.

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
					{ value: 'between', label: 'between' },
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
							{ value: '^', label: 'starts with' },
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
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
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
 * An edited advanced query is the only source: the conditions are ignored and the filters and
 * builder views lock until the query is cleared.
 */
export const LockedViews: Story = {
	args: {
		defaultExpanded: true,
		defaultView: 'advanced',
		defaultQuery: 'status = "Active" OR trigger = "Scheduled"',
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * `Root` takes its own strings through `locale`; each part takes its own `locale` too.
 */
export const Localized: Story = {
	args: {
		defaultExpanded: true,
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
		</DsFiltersBar.Root>
	),
};
