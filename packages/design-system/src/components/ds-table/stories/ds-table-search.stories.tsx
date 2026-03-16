import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { useMemo, useState } from 'react';
import type { ColumnDef, ColumnFiltersState } from '@tanstack/react-table';
import type { IconType } from '../../ds-icon';
import { DsSmartTabs } from '../../ds-smart-tabs';
import DsTable from '../ds-table';
import styles from './ds-table.stories.module.scss';
import { StatusItem } from './components/status-item/status-item';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Search and Filtering',
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

export const AdvancedSearch: Story = {
	name: 'With External Global Search',
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
			<div>
				<div style={{ marginBottom: '1rem' }}>
					<input
						type="text"
						value={globalFilter}
						onChange={(e) => setGlobalFilter(e.target.value)}
						placeholder="Search all columns..."
						style={{ padding: '0.5rem', width: '300px' }}
					/>
				</div>
				<DsTable {...args} data={filteredData} />
			</div>
		);
	},
	args: {},
	play: async ({ canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(15);

		const searchInput = canvas.getByPlaceholderText(/search all columns/i);
		await userEvent.type(searchInput, 'Tanner');

		await expect(getDataRows(canvas)).toHaveLength(1);
		await expect(getDataRows(canvas)[0]).toHaveTextContent('Tanner');

		await userEvent.clear(searchInput);

		await expect(getDataRows(canvas)).toHaveLength(15);
	},
};

export const TabFilters: Story = {
	name: 'With Tab Filters',
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
			<div className={styles.tableFilterContainer}>
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
			</div>
		);
	},
	args: {},
	play: async ({ canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(15);

		const singleTab = canvas.getByRole('button', { name: /single/i });
		await userEvent.click(singleTab);

		const singleRowCount = defaultData.filter((row) => row.status === 'single').length;
		await expect(getDataRows(canvas)).toHaveLength(singleRowCount);

		const allTab = canvas.getByRole('button', { name: /all people/i });
		await userEvent.click(allTab);

		await expect(getDataRows(canvas)).toHaveLength(15);
	},
};
