import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsTable from '../ds-table';
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';
import { defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { type DsColumnDef } from '../ds-table-features';

const buildColumns = (identityDefaultCollapsed = false): DsColumnDef<Person>[] => [
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
	tags: ['visual'],
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
			<DsTable {...args} collapsedColumnGroups={collapsed} onCollapsedColumnGroupsChange={setCollapsed} />
		);
	},
};

/**
 * The pinned `controls` slot renders above grouped, collapsible headers, confirming
 * the controls bar coexists with column groups and row selection.
 */
export const WithControls: Story = {
	args: {
		columns: buildColumns(),
		controls: (
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsButtonV3 variant="secondary" size="small">
					RED version V2
				</DsButtonV3>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" size="small">
						Import RED
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small">
						Export RED
					</DsButtonV3>
					<DsButtonV3 size="small">Actions</DsButtonV3>
				</DsStack>
			</DsStack>
		),
	},
};

/**
 * The Columns button sits at the end of the group headers row. Each group gets
 * a checkbox that toggles all of its columns and shows a partial state when
 * only some are visible. Columns with `enableHiding: false` are listed as locked.
 */
export const WithColumnDisplay: Story = {
	args: {
		columnDisplay: true,
		columns: [
			{
				id: 'identity',
				header: 'Identity',
				meta: { group: { collapsible: true } },
				columns: [
					{
						accessorKey: 'firstName',
						header: 'First Name',
						enableHiding: false,
						meta: { keepVisibleWhenCollapsed: true },
					},
					{ accessorKey: 'lastName', header: 'Last Name' },
					{ accessorKey: 'age', header: 'Age' },
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				meta: { group: { collapsible: true } },
				columns: [
					{ accessorKey: 'visits', header: 'Visits', meta: { keepVisibleWhenCollapsed: true } },
					{ accessorKey: 'status', header: 'Status' },
					{ accessorKey: 'progress', header: 'Profile Progress' },
				],
			},
		],
	},
};
