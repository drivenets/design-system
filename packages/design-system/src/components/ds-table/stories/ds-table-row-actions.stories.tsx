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
