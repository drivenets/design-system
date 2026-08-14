import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsStack } from '../../ds-stack';
import { DsTypography } from '../../ds-typography';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Resizable Columns',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		data: defaultData,
		columns,
		resizableColumns: true,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		emptyState: <TableEmptyState />,
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

/**
 * Drag the right edge of any header cell to resize its column. Widths are
 * snapshotted from the first layout, then update live while dragging. A
 * full-height indicator marks the boundary. Double-click a handle to restore
 * the snapshotted width.
 */
export const Default: Story = {
	args: {
		resizableColumns: true,
	},
};

/**
 * A mix of fixed-width and fill columns. `Visits` opts out of resizing via
 * `enableResizing: false`, so it has no handle. `Status` has no explicit size
 * and is snapshotted from its filled width when resizing is enabled.
 */
export const FixedAndFill: Story = {
	args: {
		columns: [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 200 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
			{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 120 },
			{
				accessorKey: 'visits',
				header: 'Visits',
				cell: (info) => info.getValue(),
				enableResizing: false,
				size: 120,
			},
			{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue() },
		],
	},
};

/**
 * Resizing works on grouped headers too. Leaves without an explicit `size`
 * fill the table on first layout, then snapshot to pixels. Dragging a leaf
 * boundary resizes that column; dragging a group-header boundary scales its
 * leaf columns proportionally. `First Name` has `minSize` / `maxSize` so that
 * leaf (and the group, when it hits that bound) stop independently of siblings.
 */
export const GroupedColumns: Story = {
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
						minSize: 80,
						maxSize: 280,
					},
					{
						accessorKey: 'lastName',
						header: 'Last Name',
						cell: (info) => info.getValue<string>(),
					},
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue<number>() },
					{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue<string>() },
					{
						accessorKey: 'progress',
						header: 'Progress',
						cell: (info) => `${String(info.getValue<number>())}%`,
					},
				],
			},
		],
	},
};

/**
 * Leaf columns may set `minSize` and `maxSize` (px). Dragging stops at those
 * bounds; the default min is 52px when `minSize` is omitted. Group-level
 * min/max is ignored — each leaf clamps independently.
 */
export const MinAndMaxSize: Story = {
	args: {
		columns: [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 200,
				minSize: 80,
				maxSize: 280,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 200,
				minSize: 120,
			},
			{
				accessorKey: 'age',
				header: 'Age',
				cell: (info) => info.getValue(),
				size: 120,
				maxSize: 180,
			},
			{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue(), size: 120 },
			{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue() },
		],
	},
};

/**
 * Sizing is owned by the table while it is mounted — there is no controlled
 * `columnSizing` prop. Persist the map from `onColumnSizingChange`, then stamp
 * those pixels onto each leaf `columnDef.size` on the next mount so widths
 * survive a reload. Resize a column, refresh the story, and the widths come
 * back. Reset stored widths remounts from the default layout.
 */
export const PersistedWidths: Story = {
	name: 'Persisted widths',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const STORAGE_KEY = 'storybook.ds-table.resizable.persisted-widths';
		const [tableKey, setTableKey] = useState(0);

		let columnSizes: Record<string, number>;
		try {
			columnSizes = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, number>;
		} catch {
			columnSizes = {};
		}

		const persistedColumns: ColumnDef<Person>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: columnSizes['firstName'],
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: columnSizes['lastName'],
			},
			{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: columnSizes['age'] },
			{
				accessorKey: 'visits',
				header: 'Visits',
				cell: (info) => info.getValue(),
				size: columnSizes['visits'],
			},
			{
				accessorKey: 'status',
				header: 'Status',
				cell: (info) => info.getValue(),
				size: columnSizes['status'],
			},
			{
				accessorKey: 'progress',
				header: 'Profile Progress',
				cell: (info) => `${String(info.getValue())}%`,
				size: columnSizes['progress'],
			},
		];

		return (
			<DsStack direction="column" gap={16} width="100%">
				<DsStack direction="column" gap={8}>
					<DsTypography variant="heading4">Persisted widths</DsTypography>
					<DsTypography variant="body-sm-reg" color="secondary">
						Resize a column, then refresh. Widths are written to localStorage on drag end and
						restored through columnDef.size on the next mount.
					</DsTypography>
				</DsStack>

				<DsStack direction="row">
					<DsButtonV3
						variant="secondary"
						size="small"
						onClick={() => {
							localStorage.removeItem(STORAGE_KEY);
							setTableKey((key) => key + 1);
						}}
					>
						Reset stored widths
					</DsButtonV3>
				</DsStack>

				<DsTable
					{...args}
					key={tableKey}
					columns={persistedColumns}
					onColumnSizingChange={(columnSizing) => {
						localStorage.setItem(STORAGE_KEY, JSON.stringify(columnSizing));
					}}
				/>
			</DsStack>
		);
	},
};
