import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';
import styles from './ds-table.stories.module.scss';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Row Actions',
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
		emptyState: <TableEmptyState />,
		onRowClick: (row) => console.log('Row clicked:', row),
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
