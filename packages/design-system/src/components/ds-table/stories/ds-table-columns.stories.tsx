import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsCheckbox } from '../../ds-checkbox';
import { DsStack } from '../../ds-stack';
import DsTable from '../ds-table';
import type { DsTableStickyColumns } from '../ds-table.types';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator, openColumnDisplayDecorator } from './common/story-decorators';
import { ProgressInfographic } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Columns',
	tags: ['visual'],
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const WithProgressInfographic: Story = {
	name: 'Progress as Infographic',
	args: {
		columns: columns.map((col) => {
			if ('accessorKey' in col && col.accessorKey === 'progress') {
				return {
					...col,
					header: 'Profile Progress',
					cell: (info) => <ProgressInfographic value={info.getValue() as number} />,
				};
			} else if ('accessorKey' in col && col.accessorKey === 'status') {
				return {
					...col,
					header: 'Status',
					cell: (info) => (
						<span
							className={classnames(styles.statusCell, styles[`statusCell--${info.getValue() as Status}`])}
						>
							{info.getValue() as string}
						</span>
					),
				};
			}
			return col;
		}),
		data: defaultData,
	},
};

/**
 * Show or hide columns dynamically via the controlled `columnVisibility` /
 * `onColumnVisibilityChange` props — useful for customizable table views or
 * responsive layouts. Toggle a checkbox to add or remove the matching column.
 */
export const ColumnHiding: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const columnsToToggle = [
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'status', label: 'Status' },
			{ id: 'progress', label: 'Profile Progress' },
		];
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
			age: true,
			visits: true,
			status: true,
			progress: true,
		});

		const toggleColumn = (columnId: string) => {
			setColumnVisibility((prev) => ({
				...prev,
				[columnId]: !prev[columnId],
			}));
		};

		return (
			<DsStack direction="column" gap={16}>
				<DsStack direction="row" gap={16} flexWrap="wrap">
					{columnsToToggle.map((column) => (
						<DsCheckbox
							key={column.id}
							label={column.label}
							checked={columnVisibility[column.id]}
							onCheckedChange={() => toggleColumn(column.id)}
						/>
					))}
				</DsStack>

				<DsTable
					{...args}
					columnVisibility={columnVisibility}
					onColumnVisibilityChange={setColumnVisibility}
				/>
			</DsStack>
		);
	},
};

/**
 * The header ends with a tertiary icon-only Columns button. Its popup lists
 * every column with a checkbox (checked columns stay visible) and an "All
 * columns" checkbox that toggles every column at once.
 */
export const ColumnDisplay: Story = {
	args: {
		columnDisplay: true,
	},
};

/**
 * Control the visible columns from outside with `columnVisibility` and
 * `onColumnVisibilityChange`, e.g. to persist the user's choice or reset it.
 */
export const ColumnDisplayControlled: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ age: false, visits: false });

		return (
			<DsStack direction="column" gap={16}>
				<DsStack direction="row">
					<DsButtonV3 variant="secondary" size="small" onClick={() => setColumnVisibility({})}>
						Show all columns
					</DsButtonV3>
				</DsStack>

				<DsTable
					{...args}
					columnDisplay
					columnVisibility={columnVisibility}
					onColumnVisibilityChange={setColumnVisibility}
				/>
			</DsStack>
		);
	},
};

/**
 * Add `reorderableColumns` to let users drag columns by their handle in the
 * Columns popup. Columns move within their own group, and groups (with all
 * their columns) and top-level columns among themselves. Sticky columns are
 * listed first and reorder only among themselves; making a column sticky moves
 * it to the end of that block, and right-sticky columns stay at the right edge.
 * Locked columns (`enableHiding: false`) can still be reordered. Store
 * `columnOrder` from `onColumnOrderChange` to persist the order; columns missing
 * from it later stay inside their group, and an empty array restores the
 * `columns` order.
 */
export const ColumnReorder: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [columnOrder, setColumnOrder] = useState<string[]>([]);
		const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({ left: ['identity'] });

		const [reorderColumns] = useState<ColumnDef<Person>[]>(() => [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{ accessorKey: 'firstName', header: 'First Name', enableHiding: false },
					{ accessorKey: 'lastName', header: 'Last Name' },
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{
						id: 'engagement',
						header: 'Engagement',
						columns: [
							{ accessorKey: 'visits', header: 'Visits' },
							{ accessorKey: 'progress', header: 'Profile Progress' },
						],
					},
					{ accessorKey: 'status', header: 'Status' },
				],
			},
			{ accessorKey: 'age', header: 'Age' },
		]);

		return (
			<DsStack direction="column" gap={16}>
				<DsStack direction="row">
					<DsButtonV3 variant="secondary" size="small" onClick={() => setColumnOrder([])}>
						Reset column order
					</DsButtonV3>
				</DsStack>

				<DsTable
					{...args}
					columns={reorderColumns}
					columnDisplay
					reorderableColumns
					columnOrder={columnOrder}
					onColumnOrderChange={setColumnOrder}
					stickyColumns={stickyColumns}
					onStickyColumnsChange={setStickyColumns}
				/>
			</DsStack>
		);
	},
};

/**
 * The minimal opt-in: `columnDisplay` adds the Columns popup and `reorderableColumns`
 * a drag handle to each of its rows.
 */
export const ColumnReorderBasic: Story = {
	name: 'Column reorder basic',
	// The popover starts closed, so its screenshot would repeat Column Display's
	tags: ['!visual'],
	args: {
		columnDisplay: true,
		reorderableColumns: true,
	},
};

/**
 * The Columns popover of the reorder story, open, for its visual test.
 */
export const ColumnReorderPopoverOpen: Story = {
	name: 'Column reorder, popover open',
	tags: ['!manifest', '!autodocs'],
	decorators: [openColumnDisplayDecorator],
	parameters: {
		chromatic: { delay: 500 },
	},
	render: ColumnReorder.render,
};
