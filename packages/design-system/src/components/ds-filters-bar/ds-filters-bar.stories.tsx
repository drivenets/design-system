import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';
import { DsTable } from '../ds-table';
import {
	DsFiltersBar,
	emptyFilterDocument,
	filtersBarViews,
	useFilteredRows,
	type DsFilterDocument,
	type DsFilterPin,
	type DsFiltersBarSavedFilter,
} from './index';
import {
	deviceColumns,
	deviceFields,
	devices,
	deviceSavedFilters,
	STORY_NOW,
} from './stories/common/story-data';

const meta: Meta<typeof DsFiltersBar> = {
	title: 'Components/FiltersBar',
	component: DsFiltersBar,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
Filters a table or list. One component renders every part: the collapsed summary, and when expanded
the saved-filters picker, search, view switch, the active view (filter chips, query builder or
advanced query), save and clear all, with the pinned row below. Every view edits one **Filter
document**, \`{ conditions, query }\`, checked against \`fields\`.

A field lists \`operators\` only to narrow its type's built-in set, by value; their words come from
\`locale.operators\`. A date field lists built-in \`presets\` such as \`'last7Days'\` by value. A
document you pass in may leave out \`query\` and condition ids; the bar always reports full ones.

The bar never filters rows. Evaluate the document yourself, or with \`useFilteredRows\` for data held
on the client, and pass back \`resultCount\` and \`getPinCount\`. Persist **Saved filters** through
the \`savedFilters\` callbacks; the bar loads, counts and marks them dirty. Every state prop is
controlled or uncontrolled (\`default…\`). Strings go in the nested \`locale\`, per-part props in
\`slotProps\`.
				`,
			},
		},
	},
	argTypes: {
		view: { control: 'select', options: filtersBarViews },
		defaultView: { control: 'select', options: filtersBarViews },
		views: { control: 'check', options: filtersBarViews },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFiltersBar>;

/**
 * The full bar. It keeps the **Filter document** itself; the story only persists the **Saved
 * filters** it hands back. Load one, edit it to make it dirty, then update it or save a new one.
 * The result count is fixed here; **With Table** computes it.
 */
export const Default: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [savedFilters, setSavedFilters] = useState<ReadonlyArray<DsFiltersBarSavedFilter>>([
			{
				id: 'saved-core',
				name: 'Active core',
				document: {
					conditions: [
						{ kind: 'field', field: 'status', operator: '=', value: ['active'] },
						{ kind: 'field', field: 'role', operator: 'IN', value: ['core'] },
					],
				},
			},
			{
				id: 'saved-attention',
				name: 'Needs attention',
				document: { query: 'status = "inactive" OR ports > 40' },
			},
		]);

		return (
			<DsFiltersBar
				fields={[
					{ type: 'text', id: 'name', label: 'Name' },
					{
						type: 'enum',
						id: 'status',
						label: 'Status',
						options: [
							{ value: 'active', label: 'Active' },
							{ value: 'inactive', label: 'Inactive' },
							{ value: 'deprecated', label: 'Deprecated' },
						],
					},
					{
						type: 'enum',
						id: 'role',
						label: 'Role',
						operators: ['IN', 'NOT IN'],
						options: [
							{ value: 'core', label: 'Core' },
							{ value: 'edge', label: 'Edge' },
						],
					},
					{ type: 'number', id: 'ports', label: 'Ports' },
					{ type: 'date', id: 'lastSeen', label: 'Last seen', presets: ['today', 'last7Days'] },
				]}
				defaultValue={{
					conditions: [
						{ kind: 'search', text: 'router' },
						{ kind: 'field', field: 'status', operator: '!=', value: ['deprecated'] },
					],
				}}
				defaultPins={[
					{ field: 'status', value: 'active' },
					{ field: 'role', value: 'core' },
				]}
				defaultExpanded
				resultCount={18}
				savedFilters={{
					items: savedFilters,
					onSaveAs: (name, document) => {
						const id = `saved-${String(Date.now())}`;

						setSavedFilters((items) => [...items, { id, name, document }]);

						return id;
					},
					onUpdate: (id, document) =>
						setSavedFilters((items) => items.map((item) => (item.id === id ? { ...item, document } : item))),
					onRename: (id, name) =>
						setSavedFilters((items) => items.map((item) => (item.id === id ? { ...item, name } : item))),
					onDelete: (id) => setSavedFilters((items) => items.filter((item) => item.id !== id)),
				}}
			/>
		);
	},
};

/**
 * The full loop, with the bar as a sibling above `DsTable`. The story controls the document and the
 * active toggles, and `useFilteredRows` turns them into the table's rows, the summary count and
 * each pin's count. Every edit — a chip, a builder condition, a typed query, a loaded **Saved
 * filter**, a pinned toggle, Clear all — changes the table.
 *
 * Keep the matcher's inputs stable: `fields` and `now` live at module scope, the document and
 * toggles in state. The matcher resolves the built-in `lastSeen` presets itself, counting from
 * `now`, which is fixed here so the rows never change; omit it to count from the current time.
 */
export const WithTable: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [value, setValue] = useState<DsFilterDocument>(emptyFilterDocument);
		const [activeToggles, setActiveToggles] = useState<ReadonlyArray<DsFilterPin>>([]);
		const [savedFilters, setSavedFilters] = useState(deviceSavedFilters);

		const { rows, getPinCount } = useFilteredRows(devices, {
			fields: deviceFields,
			value,
			activeToggles,
			now: STORY_NOW,
		});

		return (
			<DsStack direction="column" gap="var(--standard)">
				<DsFiltersBar
					fields={deviceFields}
					value={value}
					activeToggles={activeToggles}
					defaultPins={[
						{ field: 'status', value: 'active' },
						{ field: 'status', value: 'pending' },
						{ field: 'role', value: 'core' },
						{ field: 'role', value: 'edge' },
					]}
					defaultExpanded
					resultCount={rows.length}
					getPinCount={getPinCount}
					savedFilters={{
						items: savedFilters,
						onSaveAs: (name, document) => {
							const id = `saved-${String(Date.now())}`;

							setSavedFilters((items) => [...items, { id, name, document }]);

							return id;
						},
						onUpdate: (id, document) =>
							setSavedFilters((items) =>
								items.map((item) => (item.id === id ? { ...item, document } : item)),
							),
						onRename: (id, name) =>
							setSavedFilters((items) => items.map((item) => (item.id === id ? { ...item, name } : item))),
						onDelete: (id) => setSavedFilters((items) => items.filter((item) => item.id !== id)),
					}}
					onValueChange={setValue}
					onActiveTogglesChange={setActiveToggles}
				/>

				<DsTable columns={deviceColumns} data={rows} stickyHeader bordered fullWidth />
			</DsStack>
		);
	},
};

/**
 * `locale` is nested by part. Each section is merged over its defaults, so set only the strings
 * you change. Strings that depend on a value, such as the result count, are functions. Operator
 * words go in `locale.operators` by field type, and built-in date preset labels in
 * `locale.datePresets`.
 */
export const Localized: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [savedFilters, setSavedFilters] = useState<ReadonlyArray<DsFiltersBarSavedFilter>>([
			{
				id: 'only-active',
				name: 'Only active',
				document: { conditions: [{ kind: 'field', field: 'status', operator: '=', value: ['active'] }] },
			},
		]);

		return (
			<DsFiltersBar
				fields={[
					{
						type: 'enum',
						id: 'status',
						label: 'Status',
						operators: ['=', '!='],
						options: [
							{ value: 'active', label: 'Active' },
							{ value: 'pending', label: 'Pending' },
						],
					},
					{ type: 'date', id: 'lastSeen', label: 'Last seen', presets: ['today', 'last7Days'] },
				]}
				defaultValue={{
					conditions: [
						{ kind: 'field', field: 'status', operator: '!=', value: ['pending'] },
						{ kind: 'field', field: 'lastSeen', operator: '=', value: 'last7Days' },
					],
				}}
				defaultPins={[
					{ field: 'status', value: 'active' },
					{ field: 'lastSeen', value: 'today' },
				]}
				defaultExpanded
				resultCount={3}
				savedFilters={{
					items: savedFilters,
					onSaveAs: (name, document) => {
						const id = `preset-${String(Date.now())}`;

						setSavedFilters((items) => [...items, { id, name, document }]);

						return id;
					},
					onUpdate: (id, document) =>
						setSavedFilters((items) => items.map((item) => (item.id === id ? { ...item, document } : item))),
					onRename: (id, name) =>
						setSavedFilters((items) => items.map((item) => (item.id === id ? { ...item, name } : item))),
					onDelete: (id) => setSavedFilters((items) => items.filter((item) => item.id !== id)),
				}}
				locale={{
					label: 'Refine results',
					expand: 'Show refinements',
					collapse: 'Hide refinements',
					summary: {
						resultCount: (count) => `${String(count)} matches`,
						activeSavedFilter: 'Preset',
						emptyLabel: 'Showing',
						emptyValue: 'Everything',
					},
					search: { label: 'Find', placeholder: 'Press ‘/’ to find', clear: 'Clear text' },
					viewSwitch: {
						label: 'Presentation',
						views: { filters: 'Quick filters', builder: 'Guided query', advanced: 'Query editor' },
						lockedView: 'Remove the custom query to switch',
					},
					chips: { addFilter: 'Add refinement' },
					conditions: { title: 'Refinements', save: 'Apply' },
					builder: { title: 'Build a condition', save: 'Add condition' },
					query: { label: 'Query editor', help: 'Syntax' },
					savedFilters: {
						savedFilters: 'Presets',
						saveFilter: 'Save preset',
						saveAsNew: 'Save as a new preset',
					},
					clearAll: { label: 'Reset' },
					pinned: { label: 'Shortcuts' },
					operators: {
						enum: { '=': { label: 'matches' }, '!=': { label: 'excludes', symbol: '∌' } },
						date: { '=': { label: 'within' } },
					},
					datePresets: { today: 'Since midnight', last7Days: 'This past week' },
				}}
			/>
		);
	},
};

/**
 * Collapsed, the bar reads as one line: each condition as `Label operator: value;`, a search as
 * `Search: text;`, then `resultCount`. It starts collapsed unless `defaultExpanded` is set.
 */
export const Collapsed: Story = {
	args: {
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'deprecated', label: 'Deprecated' },
				],
			},
		],
		defaultValue: {
			conditions: [
				{ kind: 'search', text: 'router' },
				{ kind: 'field', field: 'status', operator: '!=', value: ['deprecated'] },
			],
		},
		resultCount: 12,
	},
};

/**
 * Without `fields`, the bar filters by free text only: Enter adds the typed text as a search chip.
 * `/` focuses the search from anywhere outside a text field or dialog.
 */
export const SearchOnly: Story = {
	args: {
		defaultExpanded: true,
		defaultValue: { conditions: [{ kind: 'search', text: 'router' }] },
	},
};

/**
 * `views` limits the view switch to the listed views, in their usual order. With one view the
 * switch is hidden.
 */
export const Views: Story = {
	args: {
		defaultExpanded: true,
		views: ['filters', 'advanced'],
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: ['='],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
		],
		defaultValue: {
			conditions: [{ kind: 'field', field: 'status', operator: '=', value: ['active'] }],
		},
	},
};

/**
 * A query with `OR` or parentheses cannot be shown as conditions, so it becomes the document's
 * only source: the bar shows the advanced view, disables search, and locks the filters and builder
 * views until the query is cleared.
 */
export const AdvancedQuery: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'inactive', label: 'Inactive' },
				],
			},
			{ type: 'number', id: 'ports', label: 'Ports', operators: ['=', '>', '<'] },
		],
		defaultValue: { query: 'status = "inactive" OR ports > 40' },
	},
};

/**
 * `pins` build the pinned row below the bar: one group per field, one toggle per enum option or
 * date preset. Pin more from the filters dialog. `getPinCount` shows each toggle's count and
 * disables a toggle with none; see **With Table** for counts from `useFilteredRows`.
 */
export const Pinned: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: () => (
		<DsFiltersBar
			fields={[
				{
					type: 'enum',
					id: 'status',
					label: 'Status',
					operators: ['='],
					options: [
						{ value: 'active', label: 'Active' },
						{ value: 'pending', label: 'Pending' },
						{ value: 'deprecated', label: 'Deprecated' },
					],
				},
				{
					type: 'date',
					id: 'lastSeen',
					label: 'Last seen',
					operators: ['='],
					presets: ['today', 'last7Days'],
				},
			]}
			defaultPins={[
				{ field: 'status', value: 'active' },
				{ field: 'status', value: 'deprecated' },
				{ field: 'lastSeen', value: 'today' },
			]}
			defaultActiveToggles={[{ field: 'status', value: 'active' }]}
			getPinCount={(pin) => (pin.value === 'deprecated' ? 0 : 8)}
		/>
	),
};

/**
 * The product owns the items and persists them; every callback may return a Promise, and the
 * control that launched it stays loading until it settles. Save as returns the new id, which
 * becomes the **Active saved filter**. A saved **Advanced query** loads into the advanced view.
 */
export const SavedFilters: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [items, setItems] = useState<ReadonlyArray<DsFiltersBarSavedFilter>>([
			{
				id: 'active',
				name: 'Active',
				document: { conditions: [{ kind: 'field', field: 'status', operator: '=', value: ['active'] }] },
			},
			{
				id: 'core-or-edge',
				name: 'Core or edge',
				document: { query: 'role = "core" OR role = "edge"' },
			},
		]);

		// Stands in for a request to the backend
		const persist = () => new Promise((resolve) => setTimeout(resolve, 600));

		return (
			<DsFiltersBar
				fields={[
					{
						type: 'enum',
						id: 'status',
						label: 'Status',
						operators: ['='],
						options: [
							{ value: 'active', label: 'Active' },
							{ value: 'pending', label: 'Pending' },
						],
					},
					{
						type: 'enum',
						id: 'role',
						label: 'Role',
						operators: ['='],
						options: [
							{ value: 'core', label: 'Core' },
							{ value: 'edge', label: 'Edge' },
						],
					},
				]}
				defaultExpanded
				savedFilters={{
					items,
					onSaveAs: async (name, document) => {
						await persist();
						const id = `saved-${String(Date.now())}`;

						setItems((current) => [...current, { id, name, document }]);

						return id;
					},
					onUpdate: async (id, document) => {
						await persist();
						setItems((current) => current.map((item) => (item.id === id ? { ...item, document } : item)));
					},
					onRename: async (id, name) => {
						await persist();
						setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
					},
					onDelete: async (id) => {
						await persist();
						setItems((current) => current.filter((item) => item.id !== id));
					},
				}}
			/>
		);
	},
};

/**
 * `slotProps` forwards props to one part. Here `search.ref` lets a button focus the search,
 * `builder.suggestedFields` lists Role first in the query builder, and `query.slots.help` replaces
 * the advanced view's syntax reference.
 */
export const SlotProps: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const searchRef = useRef<HTMLInputElement>(null);

		return (
			<DsStack direction="column" gap="var(--standard)">
				<DsButtonV3 variant="secondary" size="small" onClick={() => searchRef.current?.focus()}>
					Focus search
				</DsButtonV3>

				<DsFiltersBar
					fields={[
						{ type: 'text', id: 'name', label: 'Name', operators: ['~'] },
						{
							type: 'enum',
							id: 'status',
							label: 'Status',
							operators: ['='],
							options: [
								{ value: 'active', label: 'Active' },
								{ value: 'pending', label: 'Pending' },
							],
						},
						{
							type: 'enum',
							id: 'role',
							label: 'Role',
							operators: ['='],
							options: [
								{ value: 'core', label: 'Core' },
								{ value: 'edge', label: 'Edge' },
							],
						},
					]}
					defaultExpanded
					defaultView="builder"
					slotProps={{
						search: { ref: searchRef },
						builder: { suggestedFields: ['role', 'status'] },
						query: { slots: { help: 'Combine clauses with AND or OR. See the product docs for more.' } },
					}}
				/>
			</DsStack>
		);
	},
};
