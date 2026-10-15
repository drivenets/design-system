import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useId, useRef, useState } from 'react';
import { fn } from 'storybook/test';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import DsTable from '../ds-table';
import type { DsTableApi, DsTableStickyColumns } from '../ds-table.types';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsCheckbox } from '../../ds-checkbox';
import { DsDivider } from '../../ds-divider';
import { DsIcon } from '../../ds-icon';
import { DsPinToggle } from '../../ds-pin-toggle';
import { DsPopover } from '../../ds-popover';
import { DsStack } from '../../ds-stack';
import { DsTextInput } from '../../ds-text-input';
import { DsTypography } from '../../ds-typography';
import { defaultData, type Person } from './common/story-data';
import { generatePersonData } from './common/story-data-generator';
import { fullHeightDecorator } from './common/story-decorators';
import styles from './ds-table-sticky-columns.stories.module.scss';

const wideColumns: ColumnDef<Person>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 180 },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 180 },
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 140 },
	{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue(), size: 160 },
	{
		accessorKey: 'progress',
		header: 'Profile Progress',
		cell: (info) => `${String(info.getValue())}%`,
		size: 200,
	},
	{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue(), size: 160 },
];

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Sticky Columns',
	tags: ['visual'],
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns: wideColumns,
		data: defaultData,
		onRowClick: fn(),
	},
	decorators: [
		(Story) =>
			fullHeightDecorator(() => (
				<div className={styles.wrapper}>
					<Story />
				</div>
			)),
	],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

/**
 * Keep key columns in view while the table scrolls horizontally. `left`
 * columns stick to the left edge and `right` columns to the right edge, in
 * array order. A divider shows on a sticky edge only while content is
 * scrolled under it. Passing `stickyColumns` controls the state; omit it to
 * let the table keep its own. Sticky columns wider than the visible width are
 * not supported.
 */
export const Default: Story = {
	args: {
		stickyColumns: { left: ['firstName'], right: ['status'] },
	},
};

/**
 * Utility columns are always sticky: selection and expansion stay on the left
 * before the consumer columns, and row actions stay on the right after them.
 */
export const WithRowActions: Story = {
	args: {
		stickyColumns: { left: ['firstName'], right: ['status'] },
		selectable: true,
		primaryRowActions: [
			{ icon: 'edit', label: 'Edit', onClick: fn() },
			{ icon: 'download', label: 'Download', onClick: fn() },
		],
		secondaryRowActions: [{ icon: 'delete', label: 'Delete', onClick: fn() }],
	},
};

/**
 * A column manager that combines column visibility and sticky columns, composed
 * from `DsPopover`, `DsTextInput`, `DsCheckbox` and `DsPinToggle` in the
 * `controls` slot. Each checkbox shows or hides a column through
 * `columnVisibility`; the pin in its `actions` slot adds or removes the column in
 * `stickyColumns.left`. The pin appears on hover and stays visible while the
 * column is pinned. Row actions are always visible and sticky, so their entry
 * is locked. Hiding a pinned column keeps its pin, and the column is sticky
 * again once shown. For visibility alone, use the built-in `columnDisplay`.
 */
export const ColumnManager: Story = {
	args: {
		primaryRowActions: [
			{ icon: 'edit', label: 'Edit', onClick: fn() },
			{ icon: 'download', label: 'Download', onClick: fn() },
		],
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const managedColumns = [
			{ id: 'firstName', label: 'First Name' },
			{ id: 'lastName', label: 'Last Name' },
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'progress', label: 'Profile Progress' },
			{ id: 'status', label: 'Status' },
		];
		const searchId = useId();
		const [search, setSearch] = useState('');
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({});

		const pinnedIds = stickyColumns.left ?? [];
		const isVisible = (id: string) => columnVisibility[id] !== false;
		const visibleCount = managedColumns.filter(({ id }) => isVisible(id)).length;
		const allColumnsChecked =
			visibleCount === managedColumns.length ? true : visibleCount > 0 && 'indeterminate';
		const query = search.trim().toLowerCase();
		const matchingColumns = managedColumns.filter(({ label }) => label.toLowerCase().includes(query));

		const setPinned = (id: string, pinned: boolean) =>
			setStickyColumns({
				...stickyColumns,
				left: pinned ? [...pinnedIds, id] : pinnedIds.filter((pinnedId) => pinnedId !== id),
			});

		const setAllVisible = (visible: boolean) =>
			setColumnVisibility(Object.fromEntries(managedColumns.map(({ id }) => [id, visible])));

		return (
			<DsTable
				{...args}
				columnVisibility={columnVisibility}
				onColumnVisibilityChange={setColumnVisibility}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={setStickyColumns}
				controls={
					<DsStack direction="row" justifyContent="flex-end" width="100%">
						<DsPopover.Root align="end" gutter={4}>
							<DsPopover.Trigger>
								<DsButtonV3 variant="tertiary" size="tiny" icon="view_column" aria-label="Columns" />
							</DsPopover.Trigger>
							<DsPopover.Panel width={240} aria-label="Columns" className={styles.columnManager}>
								<label htmlFor={searchId} className={styles.visuallyHidden}>
									Search columns
								</label>
								<DsTextInput
									id={searchId}
									placeholder="Search"
									value={search}
									onValueChange={setSearch}
									slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
								/>
								<DsStack direction="column" className={styles.columnList}>
									{matchingColumns.map(({ id, label }) => (
										<DsCheckbox
											key={id}
											size="large"
											className={styles.columnRow}
											label={label}
											checked={isVisible(id)}
											onCheckedChange={(checked) =>
												setColumnVisibility({ ...columnVisibility, [id]: checked === true })
											}
											actions={
												<DsPinToggle
													className={styles.pinToggle}
													itemLabel={label}
													pinned={pinnedIds.includes(id)}
													onPinnedChange={(pinned) => setPinned(id, pinned)}
												/>
											}
										/>
									))}
									<DsCheckbox
										size="large"
										label="Row actions"
										checked
										disabled
										actions={<DsIcon icon="lock" size="tiny" color="secondary" aria-hidden />}
									/>
								</DsStack>
								<DsDivider className={styles.divider} />
								<DsCheckbox
									size="large"
									label="All columns"
									checked={allColumnsChecked}
									onCheckedChange={() => setAllVisible(allColumnsChecked !== true)}
								/>
							</DsPopover.Panel>
						</DsPopover.Root>
					</DsStack>
				}
			/>
		);
	},
};

/**
 * The same column manager starting from saved preferences: First Name and
 * Last Name are pinned, and Last Name is hidden. A hidden column keeps its pin,
 * so showing Last Name again makes it sticky right away without pinning it
 * twice.
 */
export const ColumnManagerWithSavedState: Story = {
	args: {
		primaryRowActions: [
			{ icon: 'edit', label: 'Edit', onClick: fn() },
			{ icon: 'download', label: 'Download', onClick: fn() },
		],
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const managedColumns = [
			{ id: 'firstName', label: 'First Name' },
			{ id: 'lastName', label: 'Last Name' },
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'progress', label: 'Profile Progress' },
			{ id: 'status', label: 'Status' },
		];
		const searchId = useId();
		const [search, setSearch] = useState('');
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ lastName: false });
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({
			left: ['firstName', 'lastName'],
		});

		const pinnedIds = stickyColumns.left ?? [];
		const isVisible = (id: string) => columnVisibility[id] !== false;
		const visibleCount = managedColumns.filter(({ id }) => isVisible(id)).length;
		const allColumnsChecked =
			visibleCount === managedColumns.length ? true : visibleCount > 0 && 'indeterminate';
		const query = search.trim().toLowerCase();
		const matchingColumns = managedColumns.filter(({ label }) => label.toLowerCase().includes(query));

		const setPinned = (id: string, pinned: boolean) =>
			setStickyColumns({
				...stickyColumns,
				left: pinned ? [...pinnedIds, id] : pinnedIds.filter((pinnedId) => pinnedId !== id),
			});

		const setAllVisible = (visible: boolean) =>
			setColumnVisibility(Object.fromEntries(managedColumns.map(({ id }) => [id, visible])));

		return (
			<DsTable
				{...args}
				columnVisibility={columnVisibility}
				onColumnVisibilityChange={setColumnVisibility}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={setStickyColumns}
				controls={
					<DsStack direction="row" justifyContent="flex-end" width="100%">
						<DsPopover.Root align="end" gutter={4}>
							<DsPopover.Trigger>
								<DsButtonV3 variant="tertiary" size="tiny" icon="view_column" aria-label="Columns" />
							</DsPopover.Trigger>
							<DsPopover.Panel width={240} aria-label="Columns" className={styles.columnManager}>
								<label htmlFor={searchId} className={styles.visuallyHidden}>
									Search columns
								</label>
								<DsTextInput
									id={searchId}
									placeholder="Search"
									value={search}
									onValueChange={setSearch}
									slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
								/>
								<DsStack direction="column" className={styles.columnList}>
									{matchingColumns.map(({ id, label }) => (
										<DsCheckbox
											key={id}
											size="large"
											className={styles.columnRow}
											label={label}
											checked={isVisible(id)}
											onCheckedChange={(checked) =>
												setColumnVisibility({ ...columnVisibility, [id]: checked === true })
											}
											actions={
												<DsPinToggle
													className={styles.pinToggle}
													itemLabel={label}
													pinned={pinnedIds.includes(id)}
													onPinnedChange={(pinned) => setPinned(id, pinned)}
												/>
											}
										/>
									))}
									<DsCheckbox
										size="large"
										label="Row actions"
										checked
										disabled
										actions={<DsIcon icon="lock" size="tiny" color="secondary" aria-hidden />}
									/>
								</DsStack>
								<DsDivider className={styles.divider} />
								<DsCheckbox
									size="large"
									label="All columns"
									checked={allColumnsChecked}
									onCheckedChange={() => setAllVisible(allColumnsChecked !== true)}
								/>
							</DsPopover.Panel>
						</DsPopover.Root>
					</DsStack>
				}
			/>
		);
	},
};

/**
 * Visual baseline for the open column manager menu: pinned rows, a hidden
 * pinned column, the locked row actions entry and a partial "All columns"
 * checkbox. It opens on mount, which would steal focus and float over the
 * docs page, so it is left out of Autodocs and the manifest; use
 * `ColumnManagerWithSavedState` as the example.
 */
export const ColumnManagerOpen: Story = {
	tags: ['!autodocs', '!manifest'],
	args: {
		primaryRowActions: [
			{ icon: 'edit', label: 'Edit', onClick: fn() },
			{ icon: 'download', label: 'Download', onClick: fn() },
		],
	},
	parameters: {
		chromatic: { delay: 300 },
	},
	render: function Render(args) {
		const managedColumns = [
			{ id: 'firstName', label: 'First Name' },
			{ id: 'lastName', label: 'Last Name' },
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'progress', label: 'Profile Progress' },
			{ id: 'status', label: 'Status' },
		];
		const searchId = useId();
		const [search, setSearch] = useState('');
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ lastName: false });
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({
			left: ['firstName', 'lastName'],
		});

		const pinnedIds = stickyColumns.left ?? [];
		const isVisible = (id: string) => columnVisibility[id] !== false;
		const visibleCount = managedColumns.filter(({ id }) => isVisible(id)).length;
		const allColumnsChecked =
			visibleCount === managedColumns.length ? true : visibleCount > 0 && 'indeterminate';
		const query = search.trim().toLowerCase();
		const matchingColumns = managedColumns.filter(({ label }) => label.toLowerCase().includes(query));

		const setPinned = (id: string, pinned: boolean) =>
			setStickyColumns({
				...stickyColumns,
				left: pinned ? [...pinnedIds, id] : pinnedIds.filter((pinnedId) => pinnedId !== id),
			});

		const setAllVisible = (visible: boolean) =>
			setColumnVisibility(Object.fromEntries(managedColumns.map(({ id }) => [id, visible])));

		return (
			<DsTable
				{...args}
				columnVisibility={columnVisibility}
				onColumnVisibilityChange={setColumnVisibility}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={setStickyColumns}
				controls={
					<DsStack direction="row" justifyContent="flex-end" width="100%">
						<DsPopover.Root
							defaultOpen
							align="end"
							gutter={4}
							// Keeps the caret out of the screenshot.
							onOpenAutoFocus={(event) => event.preventDefault()}
						>
							<DsPopover.Trigger>
								<DsButtonV3 variant="tertiary" size="tiny" icon="view_column" aria-label="Columns" />
							</DsPopover.Trigger>
							<DsPopover.Panel width={240} aria-label="Columns" className={styles.columnManager}>
								<label htmlFor={searchId} className={styles.visuallyHidden}>
									Search columns
								</label>
								<DsTextInput
									id={searchId}
									placeholder="Search"
									value={search}
									onValueChange={setSearch}
									slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
								/>
								<DsStack direction="column" className={styles.columnList}>
									{matchingColumns.map(({ id, label }) => (
										<DsCheckbox
											key={id}
											size="large"
											className={styles.columnRow}
											label={label}
											checked={isVisible(id)}
											onCheckedChange={(checked) =>
												setColumnVisibility({ ...columnVisibility, [id]: checked === true })
											}
											actions={
												<DsPinToggle
													className={styles.pinToggle}
													itemLabel={label}
													pinned={pinnedIds.includes(id)}
													onPinnedChange={(pinned) => setPinned(id, pinned)}
												/>
											}
										/>
									))}
									<DsCheckbox
										size="large"
										label="Row actions"
										checked
										disabled
										actions={<DsIcon icon="lock" size="tiny" color="secondary" aria-hidden />}
									/>
								</DsStack>
								<DsDivider className={styles.divider} />
								<DsCheckbox
									size="large"
									label="All columns"
									checked={allColumnsChecked}
									onCheckedChange={() => setAllVisible(allColumnsChecked !== true)}
								/>
							</DsPopover.Panel>
						</DsPopover.Root>
					</DsStack>
				}
			/>
		);
	},
};

/**
 * A column manager for grouped columns. Each top-level entry (a group or an
 * ungrouped column) has one pin, because pinning any leaf pins its whole
 * top-level group; the pin lists the group id in `stickyColumns`. A group's
 * checkbox shows or hides all of its leaves and reads as partial when only
 * some are visible, while each leaf keeps its own checkbox.
 */
export const ColumnManagerWithColumnGroups: Story = {
	args: {
		columns: [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{
						accessorKey: 'firstName',
						header: 'First Name',
						cell: (info) => info.getValue<string>(),
						size: 160,
					},
					{
						accessorKey: 'lastName',
						header: 'Last Name',
						cell: (info) => info.getValue<string>(),
						size: 160,
					},
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue<number>(), size: 140 },
					{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue<number>(), size: 160 },
					{
						accessorKey: 'progress',
						header: 'Profile Progress',
						cell: (info) => `${String(info.getValue<number>())}%`,
						size: 200,
					},
				],
			},
			{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue(), size: 160 },
		],
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const managedColumns = [
			{
				id: 'identity',
				label: 'Identity',
				leaves: [
					{ id: 'firstName', label: 'First Name' },
					{ id: 'lastName', label: 'Last Name' },
				],
			},
			{
				id: 'activity',
				label: 'Activity',
				leaves: [
					{ id: 'age', label: 'Age' },
					{ id: 'visits', label: 'Visits' },
					{ id: 'progress', label: 'Profile Progress' },
				],
			},
			{ id: 'status', label: 'Status', leaves: [{ id: 'status', label: 'Status' }] },
		];
		const searchId = useId();
		const [search, setSearch] = useState('');
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ visits: false });
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({ left: ['identity'] });

		const pinnedIds = stickyColumns.left ?? [];
		const isVisible = (id: string) => columnVisibility[id] !== false;
		const getCheckedState = (ids: string[]) => {
			const visibleCount = ids.filter(isVisible).length;
			return visibleCount === ids.length ? true : visibleCount > 0 && 'indeterminate';
		};
		const allLeafIds = managedColumns.flatMap(({ leaves }) => leaves.map(({ id }) => id));
		const allColumnsChecked = getCheckedState(allLeafIds);
		const query = search.trim().toLowerCase();
		const matches = (label: string) => label.toLowerCase().includes(query);
		const matchingColumns = managedColumns
			.map((entry) => ({
				...entry,
				leaves: matches(entry.label) ? entry.leaves : entry.leaves.filter(({ label }) => matches(label)),
			}))
			.filter(({ leaves }) => leaves.length > 0);

		const setPinned = (id: string, pinned: boolean) =>
			setStickyColumns({
				...stickyColumns,
				left: pinned ? [...pinnedIds, id] : pinnedIds.filter((pinnedId) => pinnedId !== id),
			});

		const setVisible = (ids: string[], visible: boolean) =>
			setColumnVisibility({
				...columnVisibility,
				...Object.fromEntries(ids.map((id) => [id, visible])),
			});

		return (
			<DsTable
				{...args}
				columnVisibility={columnVisibility}
				onColumnVisibilityChange={setColumnVisibility}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={setStickyColumns}
				controls={
					<DsStack direction="row" justifyContent="flex-end" width="100%">
						<DsPopover.Root align="end" gutter={4}>
							<DsPopover.Trigger>
								<DsButtonV3 variant="tertiary" size="tiny" icon="view_column" aria-label="Columns" />
							</DsPopover.Trigger>
							<DsPopover.Panel width={240} aria-label="Columns" className={styles.columnManager}>
								<label htmlFor={searchId} className={styles.visuallyHidden}>
									Search columns
								</label>
								<DsTextInput
									id={searchId}
									placeholder="Search"
									value={search}
									onValueChange={setSearch}
									slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
								/>
								<DsStack direction="column" className={styles.columnList}>
									{matchingColumns.map(({ id, label, leaves }) => {
										const isGroup = leaves.length > 1 || leaves[0]?.id !== id;
										const leafIds = leaves.map((leaf) => leaf.id);
										const checked = getCheckedState(leafIds);

										return (
											<DsStack key={id} direction="column">
												<DsCheckbox
													size="large"
													className={styles.columnRow}
													label={label}
													checked={checked}
													onCheckedChange={() => setVisible(leafIds, checked !== true)}
													actions={
														<DsPinToggle
															className={styles.pinToggle}
															itemLabel={label}
															pinned={pinnedIds.includes(id)}
															onPinnedChange={(pinned) => setPinned(id, pinned)}
														/>
													}
												/>
												{isGroup && (
													<DsStack direction="column" className={styles.groupLeaves}>
														{leaves.map((leaf) => (
															<DsCheckbox
																key={leaf.id}
																size="large"
																label={leaf.label}
																checked={isVisible(leaf.id)}
																onCheckedChange={(next) => setVisible([leaf.id], next === true)}
															/>
														))}
													</DsStack>
												)}
											</DsStack>
										);
									})}
								</DsStack>
								<DsDivider className={styles.divider} />
								<DsCheckbox
									size="large"
									label="All columns"
									checked={allColumnsChecked}
									onCheckedChange={() => setVisible(allLeafIds, allColumnsChecked !== true)}
								/>
							</DsPopover.Panel>
						</DsPopover.Root>
					</DsStack>
				}
			/>
		);
	},
};

/**
 * Listing a group id, or any leaf of a group, pins every leaf of that
 * top-level group. The group header renders once and sticks with its leaves.
 */
export const ColumnGroups: Story = {
	args: {
		columns: [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{
						accessorKey: 'firstName',
						header: 'First Name',
						cell: (info) => info.getValue<string>(),
						size: 160,
					},
					{
						accessorKey: 'lastName',
						header: 'Last Name',
						cell: (info) => info.getValue<string>(),
						size: 160,
					},
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue<number>(), size: 140 },
					{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue<number>(), size: 160 },
					{
						accessorKey: 'progress',
						header: 'Profile Progress',
						cell: (info) => `${String(info.getValue<number>())}%`,
						size: 200,
					},
				],
			},
			{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue(), size: 160 },
		],
		stickyColumns: { left: ['identity'] },
	},
};

/**
 * Sticky columns stay resizable. Resizing one moves the sticky columns after
 * it live during the drag.
 */
export const Resizable: Story = {
	args: {
		resizableColumns: true,
		stickyColumns: { left: ['firstName', 'lastName'], right: ['status'] },
	},
};

/**
 * Sticky columns work with virtualization and infinite scroll. A virtualized
 * table needs a parent with a bounded height; without one it renders every
 * row.
 */
export const Virtualized: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data] = useState(() => generatePersonData(0, 1_000, []).data);

		return (
			<DsTable
				{...args}
				data={data}
				virtualized
				selectable
				stickyColumns={{ left: ['firstName'], right: ['status'] }}
			/>
		);
	},
};

/**
 * Expanded row content stays in the visible area while the table scrolls
 * horizontally, and its background spans the full row. A nested table fits the
 * visible width, scrolls on its own and keeps its own sticky columns.
 */
export const Expandable: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const tableRef = useRef<DsTableApi<Person>>(null);

		useEffect(() => {
			tableRef.current?.expandRows(['1']);
		}, []);

		return (
			<DsTable
				{...args}
				ref={tableRef}
				stickyColumns={{ left: ['firstName'] }}
				expandable
				renderExpandedRow={(row) => (
					<DsStack direction="column" gap="var(--xs)">
						<DsTypography variant="body-sm-semi-bold">
							Recent visits for {row.firstName} {row.lastName}
						</DsTypography>
						<DsTable
							columns={[
								{ accessorKey: 'firstName', header: 'First Name', size: 180 },
								{ accessorKey: 'lastName', header: 'Last Name', size: 180 },
								{ accessorKey: 'age', header: 'Age', size: 140 },
								{ accessorKey: 'visits', header: 'Visits', size: 160 },
								{ accessorKey: 'status', header: 'Status', size: 160 },
							]}
							data={defaultData.slice(0, 2)}
							stickyColumns={{ left: ['firstName'] }}
						/>
					</DsStack>
				)}
			/>
		);
	},
};

/**
 * Drag-to-reorder keeps working: the drag handle column is sticky left, before
 * the consumer sticky columns.
 */
export const Reorderable: Story = {
	args: {
		stickyColumns: { left: ['firstName'] },
		reorderable: true,
		onOrderChange: fn(),
	},
};
