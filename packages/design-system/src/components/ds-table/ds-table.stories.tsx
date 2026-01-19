import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useRef, useState } from 'react';
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import { keepPreviousData, QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import classnames from 'classnames';
import DsIcon from '../ds-icon/ds-icon';
import type { IconType } from '../ds-icon';
import { DsSmartTabs } from '../ds-smart-tabs';
import { DsCheckbox } from '../ds-checkbox';
import { DsDrawer } from '../ds-drawer';
import DsTable from './ds-table';
import type { DsTableApi, ScrollParams } from './ds-table.types';
import { DsSpinner } from '../ds-spinner';
import { generatePersonData, simulateApiCall } from './utils/story-data-generator';
import styles from './ds-table.stories.module.scss';
import { StatusItem } from './stories/components/status-item/status-item';

export type Status = 'relationship' | 'complicated' | 'single';

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
			<div className={barClass} style={{ width: `${String(value)}%` }}>
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
		cell: (info) => `${String(info.getValue())}%`,
	},
];

const defaultData: Person[] = [
	{
		id: '1',
		firstName: 'Tanner',
		lastName: 'Linsley',
		age: 33,
		visits: 100,
		status: 'single',
		progress: 75,
	},
	{
		id: '2',
		firstName: 'Kevin',
		lastName: 'Fine',
		age: 28,
		visits: 200,
		status: 'relationship',
		progress: 50,
	},
	{
		id: '3',
		firstName: 'John',
		lastName: 'Doe',
		age: 45,
		visits: 50,
		status: 'complicated',
		progress: 90,
	},
	{
		id: '4',
		firstName: 'Jane',
		lastName: 'Smith',
		age: 30,
		visits: 150,
		status: 'single',
		progress: 60,
	},
	{
		id: '5',
		firstName: 'Peter',
		lastName: 'Jones',
		age: 22,
		visits: 250,
		status: 'relationship',
		progress: 30,
	},
	{
		id: '6',
		firstName: 'Mary',
		lastName: 'Jane',
		age: 38,
		visits: 80,
		status: 'complicated',
		progress: 85,
	},
	{
		id: '7',
		firstName: 'David',
		lastName: 'Williams',
		age: 50,
		visits: 120,
		status: 'single',
		progress: 40,
	},
	{
		id: '8',
		firstName: 'Sarah',
		lastName: 'Brown',
		age: 25,
		visits: 180,
		status: 'relationship',
		progress: 70,
	},
	{
		id: '9',
		firstName: 'Michael',
		lastName: 'Davis',
		age: 41,
		visits: 95,
		status: 'complicated',
		progress: 20,
	},
	{
		id: '10',
		firstName: 'Emily',
		lastName: 'Miller',
		age: 36,
		visits: 110,
		status: 'single',
		progress: 55,
	},
	{
		id: '11',
		firstName: 'Daniel',
		lastName: 'Wilson',
		age: 29,
		visits: 220,
		status: 'relationship',
		progress: 80,
	},
	{
		id: '12',
		firstName: 'Olivia',
		lastName: 'Moore',
		age: 48,
		visits: 65,
		status: 'complicated',
		progress: 15,
	},
	{
		id: '13',
		firstName: 'James',
		lastName: 'Taylor',
		age: 31,
		visits: 135,
		status: 'single',
		progress: 95,
	},
	{
		id: '14',
		firstName: 'Sophia',
		lastName: 'Anderson',
		age: 27,
		visits: 170,
		status: 'relationship',
		progress: 25,
	},
	{
		id: '15',
		firstName: 'Robert',
		lastName: 'Thomas',
		age: 43,
		visits: 88,
		status: 'complicated',
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
	},
	args: {
		// Default args for all stories
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: (
			<div className={styles.emptyStateContainer}>
				<DsIcon icon="info" size="large" />
				<p className={styles.emptyStateContainer__text}>No matching records found.</p>
			</div>
		),
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
			<>
				<div className={styles.expandedRowDetails}>
					<h4>Expanded Details for {row.firstName}</h4>
					<p>ID: {row.id}</p>
					<p>
						Full Name: {row.firstName} {row.lastName}
					</p>
					<p>Status: {row.status}</p>
				</div>

				<DsTable
					columns={[
						{
							accessorKey: 'id',
							header: 'ID',
						},
						{
							accessorKey: 'firstName',
							header: 'First Name',
						},
						{
							accessorKey: 'lastName',
							header: 'Last Name',
						},
					]}
					data={defaultData.slice(0, 3)}
				/>
			</>
		),
	},
};

export const EmptyState: Story = {
	args: {
		data: [], // Provide empty data array
	},
};

export const EmptyStateVirtualized: Story = {
	args: {
		virtualized: true,
		data: [], // Provide empty data array
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

export const MaxSelectionLimit: Story = {
	name: 'Max N Selections',
	args: {
		showSelectAllCheckbox: false,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
	},
	render: function Render(args) {
		const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
		const maxSelections = 2;

		const selectedCount = Object.keys(rowSelection).filter((id) => rowSelection[id]).length;

		const handleSelectionChange = (selection: Record<string, boolean>) => {
			setRowSelection(selection);
			args.onSelectionChange?.(selection);
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Max Selection Limit Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						You can select at most {maxSelections} rows. Once the limit is reached, checkboxes for other rows
						are disabled.
					</p>
					<p className={styles.programmaticSelectionDemo__selectedRows}>
						Selected: {selectedCount} / {maxSelections}
					</p>
				</div>

				<DsTable
					{...args}
					onSelectionChange={handleSelectionChange}
					selectable={(rowData) => {
						return rowSelection[rowData.id] || selectedCount < maxSelections;
					}}
				/>
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

export const WithDrawerAndActiveRow: Story = {
	name: 'Active Row with Drawer',
	args: {
		data: defaultData.slice(0, 10),
	},
	render: function Render(args) {
		const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

		const activeRowId = selectedPerson?.id;
		const isDrawerOpen = !!activeRowId;

		const handleRowClick = (person: Person) => {
			const isSameRow = activeRowId === person.id;

			setSelectedPerson(isSameRow ? null : person);
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Active Row with Drawer Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Click on any row to open a drawer with detailed information. The clicked row will remain
						highlighted to indicate which record the drawer is displaying.
					</p>
				</div>

				<DsTable {...args} activeRowId={activeRowId} onRowClick={handleRowClick} />

				<DsDrawer
					open={isDrawerOpen}
					onOpenChange={(open) => {
						if (!open) {
							setSelectedPerson(null);
						}
					}}
					columns={4}
					position="end"
				>
					{selectedPerson && (
						<div className={styles.drawerContent}>
							<div className={styles.drawerHeader}>
								<h2 className={styles.drawerTitle}>Person Details</h2>
								<button
									onClick={() => setSelectedPerson(null)}
									className={styles.drawerCloseButton}
									aria-label="Close drawer"
								>
									<DsIcon icon="close" size="medium" />
								</button>
							</div>

							<div className={styles.drawerDetails}>
								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Full Name</strong>
									<p className={styles.drawerDetailValue}>
										{selectedPerson.firstName} {selectedPerson.lastName}
									</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Age</strong>
									<p className={styles.drawerDetailValue}>{selectedPerson.age} years old</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Visits</strong>
									<p className={styles.drawerDetailValue}>{selectedPerson.visits} visits</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Status</strong>
									<p className={classnames(styles.drawerDetailValue, styles.drawerDetailValueCapitalized)}>
										{selectedPerson.status}
									</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Profile Progress</strong>
									<div className={styles.drawerProgressContainer}>
										<ProgressInfographic value={selectedPerson.progress} />
									</div>
								</div>

								<div className={styles.drawerNote}>
									<p>
										<strong>Note:</strong> The row in the table remains highlighted while this drawer is open,
										helping you keep track of which record you&#39;re viewing.
									</p>
								</div>
							</div>
						</div>
					)}
				</DsDrawer>
			</div>
		);
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
							className={classnames(styles.statusCell, styles[`statusCell--${info.getValue() as Status}`])}
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
};

export const ColumnHiding: Story = {
	render: function Render(args) {
		const columnsToToggle = [
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'status', label: 'Status' },
			{ id: 'progress', label: 'Profile Progress' },
		];
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
			age: true,
			visits: true,
			status: true,
			progress: true,
		});

		const toggleColumn = (columnId: string) => {
			setColumnVisibility((prev) => ({
				...prev,
				[columnId]: !prev[columnId],
			}));
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Column Hiding Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Use the checkboxes below to show or hide specific columns dynamically. This is useful for
						customizable table views or responsive layouts.
					</p>
				</div>

				<div className={styles.programmaticSelectionControls}>
					{columnsToToggle.map((column) => (
						<DsCheckbox
							key={column.id}
							label={column.label}
							checked={columnVisibility[column.id]}
							onCheckedChange={() => toggleColumn(column.id)}
						/>
					))}
				</div>

				<DsTable
					{...args}
					columnVisibility={columnVisibility}
					onColumnVisibilityChange={setColumnVisibility}
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
				queryFn: async ({ pageParam }) => {
					const start = pageParam * pageSize;
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
				await fetchNextPage();
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

				{import.meta.env.NODE_ENV === 'development' && (
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
		selectable: true,
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
