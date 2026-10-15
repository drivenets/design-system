import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { fn } from 'storybook/test';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import type { DsTableApi, DsTableStickyColumns } from '../ds-table.types';
import { DsPinToggle } from '../../ds-pin-toggle';
import { DsStack } from '../../ds-stack';
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
 * A column manager built with `DsPinToggle`: control `stickyColumns` and pin or
 * unpin columns from outside the table. The table has no built-in column
 * manager.
 */
export const ColumnManager: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({ left: ['firstName'] });
		const pinnedIds = stickyColumns.left ?? [];
		const managedColumns = [
			{ id: 'firstName', label: 'First Name' },
			{ id: 'lastName', label: 'Last Name' },
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
		];

		const togglePin = (id: string, pinned: boolean) =>
			setStickyColumns({
				left: pinned ? [...pinnedIds, id] : pinnedIds.filter((pinnedId) => pinnedId !== id),
			});

		return (
			<DsTable
				{...args}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={setStickyColumns}
				controls={
					<DsStack direction="row" gap="var(--md)" alignItems="center" flexWrap="wrap">
						<DsTypography variant="body-sm-semi-bold">Pinned columns</DsTypography>
						{managedColumns.map(({ id, label }) => (
							<DsStack key={id} direction="row" gap="var(--3xs)" alignItems="center">
								<DsTypography variant="body-sm-reg">{label}</DsTypography>
								<DsPinToggle
									itemLabel={label}
									pinned={pinnedIds.includes(id)}
									onPinnedChange={(pinned) => togglePin(id, pinned)}
								/>
							</DsStack>
						))}
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
