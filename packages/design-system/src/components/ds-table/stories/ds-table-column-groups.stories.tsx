import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const buildColumns = (identityDefaultCollapsed = false): ColumnDef<Person>[] => [
	{
		id: 'identity',
		header: 'Identity',
		meta: { group: { collapsible: true, defaultCollapsed: identityDefaultCollapsed } },
		columns: [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue<string>(),
				meta: { keepVisibleWhenCollapsed: true },
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue<string>(),
			},
			{
				accessorKey: 'age',
				header: 'Age',
				cell: (info) => info.getValue<number>(),
			},
		],
	},
	{
		id: 'activity',
		header: 'Activity',
		meta: { group: { collapsible: true } },
		columns: [
			{
				accessorKey: 'visits',
				header: 'Visits',
				cell: (info) => info.getValue<number>(),
				meta: { keepVisibleWhenCollapsed: true },
			},
			{
				accessorKey: 'status',
				header: 'Status',
				cell: (info) => info.getValue<string>(),
			},
			{
				accessorKey: 'progress',
				header: 'Profile Progress',
				cell: (info) => `${String(info.getValue<number>())}%`,
			},
		],
	},
];

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Column Groups',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns: buildColumns(),
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		selectable: true,
		emptyState: <TableEmptyState />,
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Default: Story = {
	args: {
		columns: buildColumns(),
	},
};

export const InitiallyCollapsed: Story = {
	args: {
		columns: buildColumns(true),
	},
};

export const Controlled: Story = {
	render: function Render(args) {
		const [collapsed, setCollapsed] = useState<string[]>(['activity']);

		return (
			<DsTable {...args} collapsedColumnGroups={collapsed} onColumnGroupsCollapsedChange={setCollapsed} />
		);
	},
};
