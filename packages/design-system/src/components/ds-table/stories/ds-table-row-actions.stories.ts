import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator, narrowContainerDecorator } from './common/story-decorators';
import styles from './ds-table.stories.module.scss';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Row Actions',
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

export const Reorderable: Story = {
	args: {
		data: defaultData.slice(0, 5),
		reorderable: true,
		onOrderChange: fn(),
	},
};

/**
 * The reorder utility column is 60px by default. Pass a pixel width when the
 * drag-handle column needs more (or less) room. It is not user-resizable.
 */
export const CustomReorderColumnWidth: Story = {
	args: {
		data: defaultData.slice(0, 5),
		reorderable: true,
		reorderableColumnWidth: 80,
		onOrderChange: fn(),
	},
};

const editClickHandler = fn();
const openInNewWindowClickHandler = fn();

export const WithRowActions: Story = {
	args: {
		onRowClick: fn(),
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: editClickHandler,
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				disabled: (data) => data.firstName === 'Tanner',
				onClick: openInNewWindowClickHandler,
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				disabled: (data) => data.status === 'single',
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
			{
				icon: 'call',
				label: (row) => `Call ${row.firstName}`,
				onClick: fn(),
			},
		],
	},
};

/**
 * Row actions get their own trailing column sized to the declared actions, so they are never clipped. Drag the last column to its minimum: the actions keep their room.
 */
export const ResizableColumnsWithRowActions: Story = {
	decorators: [narrowContainerDecorator],
	args: {
		resizableColumns: true,
		columns: [
			{ accessorKey: 'id', header: 'Person ID', size: 100 },
			{ accessorKey: 'firstName', header: 'First Name', size: 140 },
			{ accessorKey: 'lastName', header: 'Last Name', size: 140 },
			{ accessorKey: 'age', header: 'Age' },
			{ accessorKey: 'visits', header: 'Visits' },
			{ accessorKey: 'status', header: 'Status', size: 140 },
			{ accessorKey: 'progress', header: 'Profile Progress', size: 60 },
		],
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: fn(),
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				onClick: fn(),
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
		],
	},
};

/**
 * Columns barely fit the container; the table scrolls horizontally instead of squeezing the row actions column.
 */
export const NonResizableColumnsWithRowActions: Story = {
	decorators: [narrowContainerDecorator],
	args: {
		resizableColumns: false,
		columns: [
			{ accessorKey: 'id', header: 'Person ID', size: 100 },
			{ accessorKey: 'firstName', header: 'First Name', size: 140 },
			{ accessorKey: 'lastName', header: 'Last Name', size: 140 },
			{ accessorKey: 'age', header: 'Age' },
			{ accessorKey: 'visits', header: 'Visits' },
			{ accessorKey: 'status', header: 'Status', size: 140 },
			{ accessorKey: 'progress', header: 'Profile Progress', size: 60 },
		],
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: fn(),
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				onClick: fn(),
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
		],
	},
};

export const WithConditionallyHiddenActions: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Row actions support a per-row `hidden: (row) => boolean` callback. Menus adapt to row state:\n\n' +
					'- `single` rows show **Approve** and **Delete**.\n' +
					'- `relationship` rows show **Archive** (Delete is hidden — cannot delete live records).\n' +
					'- `complicated` rows hide **Open in New Window**.\n' +
					'- **Edit** and **Details** are always visible.',
			},
		},
	},
	args: {
		onRowClick: fn(),
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: fn(),
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				// hidden on 'complicated' rows (e.g. cannot open a record in a bad state)
				hidden: (data) => data.status === 'complicated',
				onClick: fn(),
			},
		],
		secondaryRowActions: [
			{
				icon: 'check_circle',
				label: 'Approve',
				// only shown on 'single' rows (pending approval)
				hidden: (data) => data.status !== 'single',
				onClick: fn(),
			},
			{
				icon: 'inventory_2',
				label: 'Archive',
				// only shown on 'relationship' rows (live records)
				hidden: (data) => data.status !== 'relationship',
				onClick: fn(),
			},
			{
				icon: 'delete_outline',
				label: 'Delete',
				// hidden on 'relationship' rows (cannot delete live records)
				hidden: (data) => data.status === 'relationship',
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				onClick: fn(),
			},
		],
	},
};

export const WithConditionallyDisabledActions: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Row actions support a per-row `disabled: (row) => boolean` callback. Unlike `hidden`, disabled items remain visible but are not interactive:\n\n' +
					'- `Open in New Window` is disabled on rows where `firstName === "Tanner"`.\n' +
					'- `Delete` is disabled on rows where `status === "single"`.\n' +
					'- **Edit** and **Details** are always enabled.\n\n' +
					'The kebab trigger remains visible even when every secondary action on a row is disabled.',
			},
		},
	},
	args: {
		onRowClick: fn(),
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: fn(),
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				// disabled on Tanner's row (item stays visible but greyed out)
				disabled: (data) => data.firstName === 'Tanner',
				onClick: fn(),
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				// disabled on 'single' rows (destructive action guarded)
				disabled: (data) => data.status === 'single',
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
		],
	},
};

export const WithNestedSecondaryActions: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A secondary action can declare `children` instead of `onClick` to open a cascading submenu. Children support the same `hidden`, `disabled`, `tooltip` and `className` options, and receive the row data in `onClick`:\n\n' +
					'- `Review PR` opens `Visual` / `Code`.\n' +
					'- `Filter by workflow` opens the filter scopes; `Custom` is hidden on rows where `status === "single"`.\n\n' +
					'A parent whose children are all hidden is omitted from the menu.',
			},
		},
	},
	args: {
		onRowClick: fn(),
		secondaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: fn(),
			},
			{
				icon: 'code',
				label: 'Review PR',
				children: [
					{ label: 'Visual', onClick: fn() },
					{ label: 'Code', onClick: fn() },
				],
			},
			{
				icon: 'filter_list',
				label: 'Filter by workflow',
				children: [
					{ label: 'All versions', onClick: fn() },
					{ label: 'Direct parents', onClick: fn() },
					{ label: 'All parents', onClick: fn() },
					{ label: 'Direct children', onClick: fn() },
					{ label: 'All children', onClick: fn() },
					{
						label: 'Custom',
						hidden: (data) => data.status === 'single',
						onClick: fn(),
					},
				],
			},
		],
	},
};

export const WithDisabledActionReasons: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Pair `disabled` with `tooltip` to keep an unauthorized action visible while explaining why it is unavailable. The tooltip is shown on hover even when the item is disabled, and `tooltip` can be resolved per row:\n\n' +
					'- `Delete` is disabled on rows where `status === "single"`, with a per-row reason.\n' +
					'- `Review PR` (a submenu) is disabled on Tanner’s row; the submenu does not open.\n' +
					'- `Details` is always enabled and shows a static tooltip.',
			},
		},
	},
	args: {
		onRowClick: fn(),
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				disabled: (data) => data.status === 'single',
				tooltip: (data) =>
					data.status === 'single' ? `You don't have permission to delete ${data.firstName}` : undefined,
				className: styles.destructiveAction,
				onClick: fn(),
			},
			{
				icon: 'code',
				label: 'Review PR',
				disabled: (data) => data.firstName === 'Tanner',
				tooltip: (data) => (data.firstName === 'Tanner' ? 'No open pull request' : undefined),
				children: [
					{ label: 'Visual', onClick: fn() },
					{ label: 'Code', onClick: fn() },
				],
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
		],
	},
};

export const WithBulkActions: Story = {
	args: {
		selectable: true,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: fn(),
			},
			{
				icon: 'folder_open',
				label: 'Folder',
				onClick: fn(),
			},
			{
				icon: 'delete_outline',
				label: 'Delete',
				onClick: fn(),
			},
		],
	},
};
