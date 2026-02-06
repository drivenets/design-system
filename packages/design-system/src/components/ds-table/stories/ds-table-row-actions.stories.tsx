import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { defaultEmptyState, fullHeightDecorator } from './common/story-decorators';

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
		emptyState: defaultEmptyState,
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
		onOrderChange: (rows) => console.log('Reordered row:', rows),
	},
};

export const WithRowActions: Story = {
	args: {
		onRowClick: (data) => {
			console.log('Row clicked', data);
		},
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: (data) => {
					alert(`Row edit ${JSON.stringify(data)}`);
				},
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				disabled: (data) => {
					return data.firstName === 'Tanner'; // Example condition to disable action
				},
				onClick: (data) => {
					console.log('Open in New Window', data);
					alert(`Open in New Window ${JSON.stringify(data)}`);
				},
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				disabled: (data) => data.status === 'single',
				onClick: (data) => {
					alert(`Delete action for ${data.firstName}`);
				},
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: (data) => {
					alert(`Details for ${data.firstName}`);
				},
			},
			{
				icon: 'call',
				label: (row) => `Call ${row.firstName}`,
				onClick: (data) => {
					alert(`Calling ${data.firstName} ${data.lastName}`);
				},
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
				onClick: (args) => {
					console.log('Bulk actions', args);
				},
			},
			{
				icon: 'folder_open',
				label: 'Folder',
				onClick: (args) => {
					console.log('Bulk actions', args);
				},
			},
			{
				icon: 'delete_outline',
				label: 'Delete',
				onClick: (args) => {
					console.log('Bulk actions', args);
				},
			},
		],
	},
};
