import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useMemo, useState } from 'react';
import type { ColumnDef, ColumnFiltersState } from '@tanstack/react-table';
import { DsIcon, type IconType } from '../../ds-icon';
import { DsSmartTabs } from '../../ds-smart-tabs';
import { DsStack } from '../../ds-stack';
import { DsTextInput } from '../../ds-text-input';
import DsTable from '../ds-table';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { StatusItem, TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Filters',
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
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

/**
 * Global search across every column, owned by the consumer. Keep the query in
 * state, derive the filtered rows, and pass them to `data` — the table stays a
 * pure presentational view of whatever rows you hand it.
 */
export const AdvancedSearch: Story = {
	name: 'Search — Global Input',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [globalFilter, setGlobalFilter] = useState('');

		const filteredData = useMemo(() => {
			if (!globalFilter) {
				return args.data;
			}

			const lowercasedFilter = globalFilter.toLowerCase();

			return args.data.filter((row) => {
				return Object.values(row).some((value) => String(value).toLowerCase().includes(lowercasedFilter));
			});
		}, [globalFilter, args.data]);

		return (
			<DsStack direction="column" gap={16}>
				<DsStack width="300px">
					<DsTextInput
						value={globalFilter}
						onValueChange={setGlobalFilter}
						placeholder="Search all columns..."
						slots={{ startAdornment: <DsIcon icon="search" size="small" /> }}
					/>
				</DsStack>
				<DsTable {...args} data={filteredData} />
			</DsStack>
		);
	},
};

/**
 * Drive a column filter from a tab bar. `DsSmartTabs` owns the active tab; each
 * tab maps to a `columnFilters` entry (or clears it for "All"). The table is
 * controlled via `columnFilters` / `onColumnFiltersChange`.
 */
export const TabFilters: Story = {
	name: 'Tabs — Status Filter',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
		const [activeTab, setActiveTab] = useState<Status | 'all'>('all');

		const handleTabClick = (tabValue: string) => {
			const typedValue = tabValue as Status | 'all';
			setActiveTab(typedValue);
			if (typedValue === 'all') {
				setColumnFilters([]);
			} else {
				setColumnFilters([{ id: 'status', value: typedValue }]);
			}
		};

		const getStatusIcon = (status: Status): IconType => {
			switch (status) {
				case 'relationship':
					return 'favorite';
				case 'complicated':
					return 'psychology';
				default:
					return 'person';
			}
		};

		const statusColumnDef: ColumnDef<Person> = {
			accessorKey: 'status',
			header: 'Status',
			cell: (info) => {
				const status = info.getValue() as Status;
				const icon = getStatusIcon(status);
				return <StatusItem icon={icon} label={status} />;
			},
		};

		const tableColumns = args.columns.map((col) =>
			(col as { accessorKey: string }).accessorKey === 'status' ? statusColumnDef : col,
		);

		return (
			<DsStack direction="column" gap={16} flex="1">
				<DsSmartTabs activeTab={activeTab} onTabClick={handleTabClick}>
					<DsSmartTabs.Tab
						label="All People"
						value="all"
						icon="groups"
						color="dark-blue"
						content={defaultData.length}
					/>
					<DsSmartTabs.Tab
						label="In a Relationship"
						value={'relationship'}
						icon="favorite"
						color="green"
						content={defaultData.filter((row) => row.status === 'relationship').length}
					/>
					<DsSmartTabs.Tab
						label="It's Complicated"
						value={'complicated'}
						icon="psychology"
						color="red"
						content={defaultData.filter((row) => row.status === 'complicated').length}
					/>
					<DsSmartTabs.Tab
						label="Single"
						value={'single'}
						icon="person"
						color="gray"
						content={defaultData.filter((row) => row.status === 'single').length}
					/>
				</DsSmartTabs>
				<DsTable
					{...args}
					columns={tableColumns}
					columnFilters={columnFilters}
					onColumnFiltersChange={setColumnFilters}
				/>
			</DsStack>
		);
	},
};
