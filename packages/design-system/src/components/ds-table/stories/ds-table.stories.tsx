import type { ColumnDef } from '@tanstack/react-table';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';
import styles from './ds-table.stories.module.scss';

const horizontalScrollColumns: ColumnDef<Person>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 250 },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 250 },
	{ accessorKey: 'age', header: 'Age (years)', cell: (info) => info.getValue(), size: 200 },
	{
		accessorKey: 'visits',
		header: 'Number of Visits',
		cell: (info) => info.getValue(),
		size: 250,
	},
	{
		accessorKey: 'status',
		header: 'Relationship Status',
		cell: (info) => info.getValue(),
		size: 250,
	},
	{
		accessorKey: 'progress',
		header: 'Profile Progress',
		cell: (info) => `${String(info.getValue())}%`,
		size: 250,
	},
];

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: <TableEmptyState />,
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Default: Story = {
	args: {
		data: defaultData,
	},
};

export const EmptyState: Story = {
	args: {
		data: [],
	},
};

export const NoBorder: Story = {
	args: {
		data: defaultData,
		bordered: false,
	},
};

export const HorizontalScroll: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={styles.horizontalScrollWrapper}>
				<Story />
			</div>
		),
	],
	args: {
		data: defaultData,
		columns: horizontalScrollColumns,
	},
};
