import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';
import type { DsFilterCondition } from '../ds-filters-bar.types';
import { serializeFilterQuery } from '../query-language';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Saved Filters',
	component: DsFiltersBar.Root,
	subcomponents: {
		'DsFiltersBar.SavedFilters': DsFiltersBar.SavedFilters,
		'DsFiltersBar.SaveFilter': DsFiltersBar.SaveFilter,
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.SavedFilters\` is the picker of **Saved filters**, named snapshots of the **Filter
document**; \`DsFiltersBar.SaveFilter\` saves the current document, as an update of the **Active saved
filter** or as a new one. Place the picker first in the toolbar and Save after the views.

**The consumer owns saved filters.** Keep the snapshots, pass \`items\` (\`count\` is how many
**Filter conditions** a snapshot holds) and the active id as \`value\`, and set \`dirty\` when the
current document differs from the active snapshot. Loading one needs controlled \`conditions\` and
\`query\` on \`Root\`: set them in \`onValueChange\`. Clearing the active saved filter clears the
document before \`onClear\` runs. \`SaveFilter\` is disabled while the document is empty unless
\`disabled\` says otherwise.
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
 * A working picker. Load a saved filter to replace the conditions, edit them to make it dirty,
 * then update it or save a new one. Rename and delete from a row's menu.
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
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
					{ value: 'deprecated', label: 'Deprecated' },
				],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'manual', label: 'Manual' },
					{ value: 'scheduled', label: 'Scheduled' },
				],
			},
		],
	},
	parameters: {
		docs: {
			source: { type: 'code' },
			// The picker and dialogs are position:fixed; an iframe keeps them inside this story.
			story: { inline: false, height: '420px' },
		},
	},
	render: function Render(args) {
		const [conditions, setConditions] = useState<ReadonlyArray<DsFilterCondition>>([]);
		const [query, setQuery] = useState<string | null>(null);
		const [savedFilters, setSavedFilters] = useState<
			ReadonlyArray<{
				id: string;
				name: string;
				conditions: ReadonlyArray<DsFilterCondition>;
				query: string | null;
			}>
		>([
			{
				id: 'active-scheduled',
				name: 'Active, scheduled',
				conditions: [
					{ kind: 'field', id: 's1', field: 'status', operator: '=', value: ['active'] },
					{ kind: 'field', id: 's2', field: 'trigger', operator: '=', value: ['scheduled'] },
				],
				query: null,
			},
			{
				id: 'not-deprecated',
				name: 'Not deprecated',
				conditions: [{ kind: 'field', id: 's3', field: 'status', operator: '!=', value: ['deprecated'] }],
				query: null,
			},
		]);
		const [activeId, setActiveId] = useState<string | null>(null);

		const active = savedFilters.find((item) => item.id === activeId);
		const documentKey = (document: { conditions: ReadonlyArray<DsFilterCondition>; query: string | null }) =>
			document.query ?? serializeFilterQuery(document.conditions);
		const dirty = !!active && documentKey(active) !== documentKey({ conditions, query });
		const items = savedFilters.map((item) => ({
			id: item.id,
			name: item.name,
			...(item.query === null && { count: item.conditions.length }),
		}));

		return (
			<DsFiltersBar.Root
				{...args}
				conditions={conditions}
				query={query}
				onConditionsChange={setConditions}
				onQueryChange={setQuery}
			>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Summary count={12} activeSavedFilterName={active?.name} />
				<DsFiltersBar.Toolbar>
					<DsFiltersBar.SavedFilters
						items={items}
						value={activeId}
						dirty={dirty}
						onValueChange={(id) => {
							const saved = savedFilters.find((item) => item.id === id);

							setActiveId(saved?.id ?? null);

							if (saved) {
								setConditions(saved.conditions);
								setQuery(saved.query);
							}
						}}
						onClear={() => setActiveId(null)}
						onRename={(id, name) =>
							setSavedFilters((current) => current.map((item) => (item.id === id ? { ...item, name } : item)))
						}
						onDelete={(id) => {
							setSavedFilters((current) => current.filter((item) => item.id !== id));
							setActiveId((current) => (current === id ? null : current));
						}}
					/>
					<DsFiltersBar.View value="filters">
						<DsFiltersBar.Conditions />
					</DsFiltersBar.View>
					<DsFiltersBar.SaveFilter
						items={items}
						value={activeId}
						onUpdate={() =>
							setSavedFilters((current) =>
								current.map((item) => (item.id === activeId ? { ...item, conditions, query } : item)),
							)
						}
						onSaveAs={(name) => {
							const id = `saved-${String(Date.now())}`;

							setSavedFilters((current) => [...current, { id, name, conditions, query }]);
							setActiveId(id);
						}}
					/>
					<DsFiltersBar.ClearAll onClick={() => setActiveId(null)} />
				</DsFiltersBar.Toolbar>
			</DsFiltersBar.Root>
		);
	},
};

/**
 * No saved filters yet: the picker shows its empty state, and Save stays disabled until the
 * document has a condition.
 */
export const Empty: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.SavedFilters
					items={[]}
					value={null}
					onValueChange={fn()}
					onClear={fn()}
					onRename={fn()}
					onDelete={fn()}
				/>
				<DsFiltersBar.Search />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.SaveFilter items={[]} value={null} onUpdate={fn()} onSaveAs={fn()} />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
