import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useRef, useState } from 'react';
import { ColumnDef, ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { keepPreviousData, QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import classnames from 'classnames';
import DsIcon from '../ds-icon/ds-icon';
import { IconType } from '../ds-icon/ds-icon.types';
import { DsSmartTabs } from '../ds-smart-tabs';
import DsTable from './ds-table';
import { DsTableApi, ScrollParams } from './ds-table.types';
import { DsSpinner } from '../ds-spinner';
import { generatePersonData, simulateApiCall } from './utils/story-data-generator';
import styles from './ds-table.stories.module.scss';

export enum Status {
	Relationship = 'relationship',
	Complicated = 'complicated',
	Single = 'single',
}

type Person = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: Status;
	progress: number;
};

const ProgressInfographic = ({ value }: { value: number }) => {
	const barClass = classnames(styles.bar, {
		[styles['bar--high']]: value > 70,
		[styles['bar--medium']]: value > 40 && value <= 70,
		[styles['bar--low']]: value <= 40,
	});

	return (
		<div className={styles.progressInfographic}>
			<div className={barClass} style={{ width: `${value}%` }}>
				{value}%
			</div>
		</div>
	);
};

const columns: ColumnDef<Person>[] = [
	{
		accessorKey: 'firstName',
		header: 'First Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'age',
		header: 'Age',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'visits',
		header: 'Visits',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'progress',
		header: 'Profile Progress',
		cell: (info) => `${info.getValue()}%`,
	},
];

const defaultData: Person[] = [
	{
		id: '1',
		firstName: 'Tanner',
		lastName: 'Linsley',
		age: 33,
		visits: 100,
		status: Status.Single,
		progress: 75,
	},
	{
		id: '2',
		firstName: 'Kevin',
		lastName: 'Vonderheide',
		age: 28,
		visits: 200,
		status: Status.Relationship,
		progress: 50,
	},
	{
		id: '3',
		firstName: 'John',
		lastName: 'Doe',
		age: 45,
		visits: 50,
		status: Status.Complicated,
		progress: 90,
	},
	{
		id: '4',
		firstName: 'Jane',
		lastName: 'Smith',
		age: 30,
		visits: 150,
		status: Status.Single,
		progress: 60,
	},
	{
		id: '5',
		firstName: 'Peter',
		lastName: 'Jones',
		age: 22,
		visits: 250,
		status: Status.Relationship,
		progress: 30,
	},
	{
		id: '6',
		firstName: 'Mary',
		lastName: 'Jane',
		age: 38,
		visits: 80,
		status: Status.Complicated,
		progress: 85,
	},
	{
		id: '7',
		firstName: 'David',
		lastName: 'Williams',
		age: 50,
		visits: 120,
		status: Status.Single,
		progress: 40,
	},
	{
		id: '8',
		firstName: 'Sarah',
		lastName: 'Brown',
		age: 25,
		visits: 180,
		status: Status.Relationship,
		progress: 70,
	},
	{
		id: '9',
		firstName: 'Michael',
		lastName: 'Davis',
		age: 41,
		visits: 95,
		status: Status.Complicated,
		progress: 20,
	},
	{
		id: '10',
		firstName: 'Emily',
		lastName: 'Miller',
		age: 36,
		visits: 110,
		status: Status.Single,
		progress: 55,
	},
	{
		id: '11',
		firstName: 'Daniel',
		lastName: 'Wilson',
		age: 29,
		visits: 220,
		status: Status.Relationship,
		progress: 80,
	},
	{
		id: '12',
		firstName: 'Olivia',
		lastName: 'Moore',
		age: 48,
		visits: 65,
		status: Status.Complicated,
		progress: 15,
	},
	{
		id: '13',
		firstName: 'James',
		lastName: 'Taylor',
		age: 31,
		visits: 135,
		status: Status.Single,
		progress: 95,
	},
	{
		id: '14',
		firstName: 'Sophia',
		lastName: 'Anderson',
		age: 27,
		visits: 170,
		status: Status.Relationship,
		progress: 25,
	},
	{
		id: '15',
		firstName: 'Robert',
		lastName: 'Thomas',
		age: 43,
		visits: 88,
		status: Status.Complicated,
		progress: 50,
	},
];

// --- Storybook Meta ---
const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table',
	component: DsTable,
	parameters: {
		layout: 'fullscreen', // Use fullscreen for tables usually
	},
	tags: ['autodocs'],
	argTypes: {
		// Define argTypes based on DsTable props if needed for controls
		// Example:
		// zebra: { control: 'boolean' },
		// bordered: { control: 'boolean' },
		// highlightOnHover: { control: 'boolean' },
	},
	args: {
		// Default args for all stories
		columns: columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		highlightOnHover: true,
		expandable: false,
		emptyState: <div>No data available</div>,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [
		(Story) => (
			<div className={styles.storyPadding}>
				<style>
					{`
            #storybook-root, html, body { height: 100%; }
          `}
				</style>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

// --- Stories ---

export const Default: Story = {
	args: {
		// Override default args here if needed
	},
};

export const Sortable: Story = {
	args: {
		// Sorting is enabled by default based on component code (getSortedRowModel)
		// No specific args needed unless you want to set initial sort state
	},
};

export const Expandable: Story = {
	args: {
		data: defaultData.slice(0, 5),
		expandable: (row) => row.firstName !== 'Tanner',
		renderExpandedRow: (row) => (
			<div className={styles.expandedRowDetails}>
				<h4>Expanded Details for {row.firstName}</h4>
				<p>ID: {row.id}</p>
				<p>
					Full Name: {row.firstName} {row.lastName}
				</p>
				<p>Status: {row.status}</p>
			</div>
		),
	},
};

export const EmptyState: Story = {
	args: {
		data: [], // Provide empty data array
		emptyState: (
			<div className={styles.emptyStateContainer}>
				<DsIcon icon="info" size="large" />
				<p className={styles.emptyStateContainer__text}>No matching records found.</p>
			</div>
		),
	},
};

export const NoBorder: Story = {
	args: {
		bordered: false,
	},
};

export const Selectable: Story = {
	args: {
		selectable: true,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
	},
};

export const ProgrammaticRowSelection: Story = {
	args: {
		selectable: true,
		showSelectAllCheckbox: false,
		stickyHeader: true,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
	},
	render: function Render(args) {
		const tableRef = useRef<DsTableApi<Person>>(null);
		const [selectedRows, setSelectedRows] = useState<string[]>([]);

		const selectRow = (rowId: string) => {
			tableRef.current?.selectRow(rowId);
		};

		const selectAllRows = () => {
			tableRef.current?.selectAllRows();
		};

		const deselectAllRows = () => {
			tableRef.current?.deselectAllRows();
		};

		const selectSpecificRows = () => {
			tableRef.current?.selectRows(['1', '2', '3']);
		};

		const handleSelectionChange = (selection: Record<string, boolean>) => {
			const selectedIds = Object.keys(selection);
			setSelectedRows(selectedIds);
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Selection Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.
					</p>
					<p className={styles.programmaticSelectionDemo__selectedRows}>
						Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
					</p>
				</div>

				<div className={styles.programmaticSelectionControls}>
					<button onClick={() => selectRow('1')} className={styles.programmaticSelectionButton}>
						Select Row 1
					</button>
					<button onClick={() => selectRow('2')} className={styles.programmaticSelectionButton}>
						Select Row 2
					</button>
					<button onClick={() => selectRow('3')} className={styles.programmaticSelectionButton}>
						Select Row 3
					</button>
					<button onClick={selectAllRows} className={styles.programmaticSelectionButton}>
						Select All
					</button>
					<button onClick={deselectAllRows} className={styles.programmaticSelectionButton}>
						Deselect All
					</button>
					<button onClick={selectSpecificRows} className={styles.programmaticSelectionButton}>
						Select First 3 Rows
					</button>
				</div>

				<DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
			</div>
		);
	},
};

export const Reorderable: Story = {
	args: {
		data: defaultData.slice(0, 5),
		reorderable: true,
		onOrderChange: (rows) => console.log('Reordered row:', rows),
	},
};

export const WithRowActions: Story = {
	args: {
		primaryRowActions: [
			{
				icon: 'visibility',
				label: 'Edit',
				disabled: (data) => {
					return data.firstName === 'Tanner'; // Example condition to disable action
				},
				onClick: (data) => {
					console.log('Row clicked', data);
					alert(`Row clicked ${JSON.stringify(data)}`);
				},
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				disabled: (data) => data.status === Status.Single,
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

export const WithProgressInfographic: Story = {
	name: 'Progress as Infographic',
	args: {
		columns: columns.map((col) => {
			if ('accessorKey' in col && col.accessorKey === 'progress') {
				return {
					...col,
					header: 'Profile Progress',
					cell: (info) => <ProgressInfographic value={info.getValue() as number} />,
				} as ColumnDef<Person>;
			} else if ('accessorKey' in col && col.accessorKey === 'status') {
				return {
					...col,
					header: 'Status',
					cell: (info) => (
						<span
							className={classnames(styles.statusCell, styles[`statusCell--${info.getValue() as string}`])}
						>
							{info.getValue() as string}
						</span>
					),
				} as ColumnDef<Person>;
			}
			return col;
		}),
		data: defaultData,
	},
};

export const AdvancedSearch: Story = {
	name: 'With External Global Search',
	render: function Render(args) {
		const [globalFilter, setGlobalFilter] = useState('');

		const filteredData = useMemo(() => {
			if (!globalFilter) return args.data;

			const lowercasedFilter = globalFilter.toLowerCase();

			return (args.data as Person[]).filter((row) => {
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
				case Status.Relationship:
					return 'favorite';
				case Status.Complicated:
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
				return (
					<div className={styles.customTabRow}>
						<DsIcon icon={icon} size="small" />
						<span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
					</div>
				);
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
						value={Status.Relationship}
						icon="favorite"
						color="green"
						content={defaultData.filter((row) => row.status === Status.Relationship).length}
					/>
					<DsSmartTabs.Tab
						label="It's Complicated"
						value={Status.Complicated}
						icon="psychology"
						color="red"
						content={defaultData.filter((row) => row.status === Status.Complicated).length}
					/>
					<DsSmartTabs.Tab
						label="Single"
						value={Status.Single}
						icon="person"
						color="gray"
						content={defaultData.filter((row) => row.status === Status.Single).length}
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
};

export const Virtualized: Story = {
	name: 'Virtualized Table (Large Dataset)',
	render: function Render(args) {
		// Simulate API call using the utility function
		const fetchData = async (start: number, size: number, sorting: SortingState) => {
			return simulateApiCall(() => generatePersonData(start, size, sorting));
		};

		const pageSize = 50;
		const [sorting, setSorting] = useState<SortingState>([]);

		const {
			data: infiniteQueryData,
			fetchNextPage,
			isFetching,
			isLoading,
		} = useInfiniteQuery(
			{
				queryKey: [
					'people',
					sorting, // refetch when sorting changes
				],
				queryFn: async ({ pageParam = 0 }) => {
					const start = (pageParam as number) * pageSize;
					return await fetchData(start, pageSize, sorting);
				},
				initialPageParam: 0,
				getNextPageParam: (_lastGroup, groups) => groups.length,
				placeholderData: keepPreviousData,
			},
			// assuming the app is wrapped inside QueryClientProvider below is no longer needed
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000, // 5 minutes
						gcTime: 10 * 60 * 1000, // 10 minutes
						refetchOnWindowFocus: false,
					},
				},
			}),
		);

		const flatData = useMemo(
			() => infiniteQueryData?.pages.flatMap((page) => page.data) ?? [],
			[infiniteQueryData],
		);

		const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
		const totalFetched = flatData.length;

		const fetchMoreOnBottomReached = async ({
			scrollOffset,
			totalContentHeight,
			viewportHeight,
		}: ScrollParams) => {
			const finishedFetching = totalFetched >= totalRows;

			const scrollThreshold = 500;
			const distanceFromBottom = totalContentHeight - scrollOffset - viewportHeight;
			const shouldFetchMore = distanceFromBottom <= scrollThreshold;

			if (!isFetching && !finishedFetching && shouldFetchMore) {
				fetchNextPage();
			}
		};

		return (
			<div className={styles.virtualizedDemoContainer}>
				<div className={styles.virtualizedDemoHeader}>
					<h4 className={styles.virtualizedDemoHeader__title}>Virtualized Table Demo</h4>
					<p className={styles.virtualizedDemoHeader__description}>
						This table uses infinite query to fetch data as you scroll, making it performant even with large
						datasets. Try scrolling to see the data loading!
					</p>
					<p className={styles.virtualizedDemoHeader__stats}>
						({flatData.length} of {totalRows} rows fetched)
					</p>
				</div>

				{process.env.NODE_ENV === 'development' && (
					<p className={styles.developmentNotice}>
						<strong>Notice:</strong> You are currently running React in development mode. Virtualized
						rendering performance will be slightly degraded until this application is built for production.
					</p>
				)}

				<div className={styles.virtualizedTableWrapper}>
					<DsTable
						{...args}
						data={flatData}
						onSortingChange={setSorting}
						onScroll={fetchMoreOnBottomReached}
						virtualized={true}
					/>
					{isLoading && (
						<div className={styles.loadingOverlay}>
							<div className={styles.loadingContent}>
								<DsSpinner size="small" />
								<span className={styles.loadingText}>Loading data...</span>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	},
	args: {
		columns: columns.map((col) => {
			if ('accessorKey' in col && col.accessorKey === 'age') {
				return {
					...col,
					size: 100,
				} as ColumnDef<Person>;
			}
			return col;
		}),
	},
};
