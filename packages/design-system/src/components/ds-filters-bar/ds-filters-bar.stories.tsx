import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsStack } from '../ds-stack';
import { DsTable } from '../ds-table';
import { DsFiltersBar } from './index';
import { filtersBarViews, type DsFilterCondition, type DsFilterPin } from './ds-filters-bar.types';
import { serializeFilterQuery } from './query-language';
import { matchRows } from './stories/common/match-rows';
import {
	deviceColumns,
	deviceFields,
	devices,
	deviceSavedFilters,
	type DeviceSavedFilter,
} from './stories/common/story-data';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar',
	component: DsFiltersBar.Root,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
A compound toolbar above a table or list: filter chips, a query builder, a typed query, **Saved
filters** and pinned toggles. Every view edits one **Filter document**, \`conditions\` or (for
\`OR\` and parentheses) a \`query\`, checked against \`fields\`. Each state prop is controlled or uncontrolled
(\`default…\`). The bar never filters rows: evaluate the document, pass result counts to
\`Summary\` and \`PinnedToggle\`, and keep saved filters and toggle states yourself.
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
 * Every part in its canonical place. The story controls `conditions` and `query` so a loaded
 * **Saved filter** can replace them; the result count and pinned counts are fixed. See
 * **With Table** for a full loop that filters rows.
 */
export const Default: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [conditions, setConditions] = useState<ReadonlyArray<DsFilterCondition>>([
			{ kind: 'search', id: 'c1', text: 'router' },
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
			{ kind: 'field', id: 'c3', field: 'hardware', subfield: 'model', operator: '~', value: 'mx' },
			{ kind: 'field', id: 'c4', field: 'lastSeen', operator: '=', value: 'last7Days' },
		]);
		const [query, setQuery] = useState<string | null>(null);
		const [savedFilters, setSavedFilters] = useState<ReadonlyArray<DeviceSavedFilter>>(deviceSavedFilters);
		const [activeSavedFilterId, setActiveSavedFilterId] = useState<string | null>(null);

		const documentKey = (document: { conditions: ReadonlyArray<DsFilterCondition>; query: string | null }) =>
			document.query ?? serializeFilterQuery(document.conditions);

		const activeSavedFilter = savedFilters.find((item) => item.id === activeSavedFilterId);
		const dirty =
			!!activeSavedFilter && documentKey(activeSavedFilter) !== documentKey({ conditions, query });
		const savedFilterItems = savedFilters.map((item) => ({
			id: item.id,
			name: item.name,
			...(item.query === null && { count: item.conditions.length }),
		}));

		const loadSavedFilter = (id: string | null) => {
			const saved = savedFilters.find((item) => item.id === id);

			setActiveSavedFilterId(saved?.id ?? null);

			if (saved) {
				setConditions(saved.conditions);
				setQuery(saved.query);
			}
		};

		return (
			<DsFiltersBar.Root
				fields={deviceFields}
				conditions={conditions}
				query={query}
				defaultPins={[
					{ field: 'status', value: 'active' },
					{ field: 'status', value: 'pending' },
				]}
				defaultExpanded
				onConditionsChange={setConditions}
				onQueryChange={setQuery}
			>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Summary count={18} activeSavedFilterName={activeSavedFilter?.name} />

				<DsFiltersBar.Toolbar>
					<DsFiltersBar.SavedFilters
						items={savedFilterItems}
						value={activeSavedFilterId}
						dirty={dirty}
						onValueChange={loadSavedFilter}
						onClear={() => setActiveSavedFilterId(null)}
						onRename={(id, name) =>
							setSavedFilters((current) => current.map((item) => (item.id === id ? { ...item, name } : item)))
						}
						onDelete={(id) => {
							setSavedFilters((current) => current.filter((item) => item.id !== id));
							setActiveSavedFilterId((current) => (current === id ? null : current));
						}}
					/>
					<DsFiltersBar.Search />
					<DsFiltersBar.ViewSwitch />
					<DsFiltersBar.View value="filters">
						<DsFiltersBar.Conditions />
					</DsFiltersBar.View>
					<DsFiltersBar.View value="builder">
						<DsFiltersBar.Builder suggestedFields={['status', 'hardware']} />
					</DsFiltersBar.View>
					<DsFiltersBar.View value="advanced">
						<DsFiltersBar.Query />
					</DsFiltersBar.View>
					<DsFiltersBar.SaveFilter
						items={savedFilterItems}
						value={activeSavedFilterId}
						onUpdate={() =>
							setSavedFilters((current) =>
								current.map((item) =>
									item.id === activeSavedFilterId ? { ...item, conditions, query } : item,
								),
							)
						}
						onSaveAs={(name) => {
							const id = `saved-${String(Date.now())}`;

							setSavedFilters((current) => [...current, { id, name, conditions, query }]);
							setActiveSavedFilterId(id);
						}}
					/>
					<DsFiltersBar.ClearAll onClick={() => setActiveSavedFilterId(null)} />
				</DsFiltersBar.Toolbar>

				<DsFiltersBar.Pinned>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle label="Active" count={10} active={false} />
						<DsFiltersBar.PinnedToggle label="Pending" count={0} active={false} />
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>
		);
	},
};

/**
 * The full loop, with the bar as a sibling above `DsTable`. The story controls `conditions` and
 * `query` and filters the rows itself (`matchRows` is example code, not a design-system API), so
 * every edit — a chip, a builder condition, a typed query, a loaded **Saved filter**, a pinned
 * toggle, Clear all — changes the table, the `Summary` count and the pinned counts.
 *
 * - **Saved filters:** the story keeps each snapshot, the **Active saved filter** id, and `dirty`
 *   by comparing the current document with the snapshot. Loading one sets `conditions` and
 *   `query`; Save updates the active snapshot or adds a new one.
 * - **Pins:** the `Pinned` row is built from `pins` and `fields`; each toggle's count is how many
 *   rows the document matched with that option. Toggles in one group widen each other, groups
 *   narrow each other, and Clear all also turns them off.
 */
export const WithTable: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render() {
		const [conditions, setConditions] = useState<ReadonlyArray<DsFilterCondition>>([]);
		const [query, setQuery] = useState<string | null>(null);
		const [pins, setPins] = useState<ReadonlyArray<DsFilterPin>>([
			{ field: 'status', value: 'active' },
			{ field: 'status', value: 'pending' },
			{ field: 'role', value: 'core' },
			{ field: 'role', value: 'edge' },
		]);
		const [activeToggles, setActiveToggles] = useState<ReadonlyArray<DsFilterPin>>([]);
		const [savedFilters, setSavedFilters] = useState<ReadonlyArray<DeviceSavedFilter>>(deviceSavedFilters);
		const [activeSavedFilterId, setActiveSavedFilterId] = useState<string | null>(null);

		const isSamePin = (a: DsFilterPin, b: DsFilterPin) => a.field === b.field && a.value === b.value;
		const documentKey = (document: { conditions: ReadonlyArray<DsFilterCondition>; query: string | null }) =>
			document.query ?? serializeFilterQuery(document.conditions);

		const activeSavedFilter = savedFilters.find((item) => item.id === activeSavedFilterId);
		const dirty =
			!!activeSavedFilter && documentKey(activeSavedFilter) !== documentKey({ conditions, query });
		const savedFilterItems = savedFilters.map((item) => ({
			id: item.id,
			name: item.name,
			...(item.query === null && { count: item.conditions.length }),
		}));

		// Toggles of options the user unpinned no longer apply
		const effectiveToggles = activeToggles.filter((toggle) => pins.some((pin) => isSamePin(pin, toggle)));
		const documentRows = matchRows(devices, { fields: deviceFields, conditions, query });
		const rows = matchRows(documentRows, { fields: deviceFields, activeToggles: effectiveToggles });

		const pinnedGroups = deviceFields.flatMap((field) => {
			const options =
				field.type === 'enum' ? field.options : field.type === 'date' ? (field.presets ?? []) : [];
			const toggles = pins
				.filter((pin) => pin.field === field.id)
				.map((pin) => ({
					pin,
					label: options.find((option) => option.value === pin.value)?.label ?? pin.value,
					count: matchRows(documentRows, { fields: deviceFields, activeToggles: [pin] }).length,
					active: effectiveToggles.some((toggle) => isSamePin(toggle, pin)),
				}));

			return toggles.length > 0 ? [{ field, toggles }] : [];
		});

		const setToggle = (pin: DsFilterPin, active: boolean) =>
			setActiveToggles((current) =>
				active ? [...current, pin] : current.filter((toggle) => !isSamePin(toggle, pin)),
			);

		const loadSavedFilter = (id: string | null) => {
			const saved = savedFilters.find((item) => item.id === id);

			setActiveSavedFilterId(saved?.id ?? null);

			if (saved) {
				setConditions(saved.conditions);
				setQuery(saved.query);
			}
		};

		return (
			<DsStack direction="column" gap="var(--standard)">
				<DsFiltersBar.Root
					fields={deviceFields}
					conditions={conditions}
					query={query}
					pins={pins}
					defaultExpanded
					onConditionsChange={setConditions}
					onQueryChange={setQuery}
					onPinsChange={setPins}
				>
					<DsFiltersBar.Disclosure />
					<DsFiltersBar.Summary count={rows.length} activeSavedFilterName={activeSavedFilter?.name} />

					<DsFiltersBar.Toolbar>
						<DsFiltersBar.SavedFilters
							items={savedFilterItems}
							value={activeSavedFilterId}
							dirty={dirty}
							onValueChange={loadSavedFilter}
							onClear={() => setActiveSavedFilterId(null)}
							onRename={(id, name) =>
								setSavedFilters((current) =>
									current.map((item) => (item.id === id ? { ...item, name } : item)),
								)
							}
							onDelete={(id) => {
								setSavedFilters((current) => current.filter((item) => item.id !== id));
								setActiveSavedFilterId((current) => (current === id ? null : current));
							}}
						/>
						<DsFiltersBar.Search />
						<DsFiltersBar.ViewSwitch />
						<DsFiltersBar.View value="filters">
							<DsFiltersBar.Conditions />
						</DsFiltersBar.View>
						<DsFiltersBar.View value="builder">
							<DsFiltersBar.Builder suggestedFields={['status', 'role', 'hardware']} />
						</DsFiltersBar.View>
						<DsFiltersBar.View value="advanced">
							<DsFiltersBar.Query />
						</DsFiltersBar.View>
						<DsFiltersBar.SaveFilter
							items={savedFilterItems}
							value={activeSavedFilterId}
							onUpdate={() =>
								setSavedFilters((current) =>
									current.map((item) =>
										item.id === activeSavedFilterId ? { ...item, conditions, query } : item,
									),
								)
							}
							onSaveAs={(name) => {
								const id = `saved-${String(Date.now())}`;

								setSavedFilters((current) => [...current, { id, name, conditions, query }]);
								setActiveSavedFilterId(id);
							}}
						/>
						<DsFiltersBar.ClearAll
							onClick={() => {
								setActiveToggles([]);
								setActiveSavedFilterId(null);
							}}
						/>
					</DsFiltersBar.Toolbar>

					{pinnedGroups.length > 0 && (
						<DsFiltersBar.Pinned>
							{pinnedGroups.map(({ field, toggles }) => (
								<DsFiltersBar.PinnedGroup key={field.id} label={field.label}>
									{toggles.map(({ pin, label, count, active }) => (
										<DsFiltersBar.PinnedToggle
											key={pin.value}
											label={label}
											count={count}
											active={active}
											onActiveChange={(next) => setToggle(pin, next)}
										/>
									))}
								</DsFiltersBar.PinnedGroup>
							))}
						</DsFiltersBar.Pinned>
					)}
				</DsFiltersBar.Root>

				<DsTable columns={deviceColumns} data={rows} stickyHeader bordered fullWidth />
			</DsStack>
		);
	},
};

/**
 * `Root` takes its own strings through `locale`, and each part takes its own `locale` too, so
 * every built-in string can be replaced.
 */
export const Localized: Story = {
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
		defaultConditions: [{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] }],
		locale: { label: 'Refine results', expand: 'Show refinements', collapse: 'Hide refinements' },
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary
				count={3}
				locale={{
					resultCount: (count) => `${String(count)} matches`,
					activeSavedFilter: 'Preset',
					emptyLabel: 'Showing',
					emptyValue: 'Everything',
					search: 'Text',
					advancedQuery: 'Custom query',
				}}
			/>
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.SavedFilters
					items={[{ id: '1', name: 'Only active', count: 1 }]}
					value={null}
					locale={{ savedFilters: 'Presets', noSavedFilters: 'No presets yet' }}
					onValueChange={fn()}
					onClear={fn()}
					onRename={fn()}
					onDelete={fn()}
				/>
				<DsFiltersBar.Search
					locale={{ label: 'Find', placeholder: 'Press ‘/’ to find', clear: 'Clear text' }}
				/>
				<DsFiltersBar.ViewSwitch
					locale={{
						label: 'Presentation',
						views: { filters: 'Quick filters', builder: 'Guided query', advanced: 'Query editor' },
						lockedView: 'Remove the custom query to switch',
					}}
				/>
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions locale={{ addFilter: 'Add refinement', saveFilters: 'Apply' }} />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder locale={{ title: 'Build a condition', save: 'Add condition' }} />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query
						locale={{ label: 'Query editor', placeholder: 'status = "Active"', help: 'Syntax' }}
					/>
				</DsFiltersBar.View>
				<DsFiltersBar.SaveFilter
					items={[{ id: '1', name: 'Only active', count: 1 }]}
					value={null}
					locale={{ saveFilter: 'Save preset', saveAsNew: 'Save as a new preset' }}
					onUpdate={fn()}
					onSaveAs={fn()}
				/>
				<DsFiltersBar.ClearAll locale={{ label: 'Reset' }} />
			</DsFiltersBar.Toolbar>

			<DsFiltersBar.Pinned locale={{ label: 'Shortcuts' }}>
				<DsFiltersBar.PinnedGroup label="Status">
					<DsFiltersBar.PinnedToggle label="Active" count={3} active={false} />
				</DsFiltersBar.PinnedGroup>
			</DsFiltersBar.Pinned>
		</DsFiltersBar.Root>
	),
};
