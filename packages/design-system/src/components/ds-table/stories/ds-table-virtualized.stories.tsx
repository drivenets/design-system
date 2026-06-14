import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useMemo, useState } from 'react';
import type { CellContext, ColumnDef, SortingState } from '@tanstack/react-table';
import { keepPreviousData, QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import DsTable from '../ds-table';
import {
	DsTableEditCellNumber,
	DsTableEditCellSelect,
	DsTableEditCellText,
} from '../components/edit/cell-editors';
import { DsSpinner } from '../../ds-spinner';
import { generatePersonData, simulateApiCall } from './common/story-data-generator';
import styles from './ds-table.stories.module.scss';
import editableStyles from './ds-table-editable.stories.module.scss';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Virtualized',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		data: [],
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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			gcTime: 10 * 60 * 1000,
			refetchOnWindowFocus: false,
		},
	},
});

const fetchData = async (start: number, size: number, sorting: SortingState, totalRows?: number) => {
	return simulateApiCall(() => generatePersonData(start, size, sorting, totalRows));
};

export const EmptyState: Story = {
	args: {
		virtualized: true,
		data: [],
	},
};

export const VirtualizedSelectable: Story = {
	name: 'Virtualized Selectable Table',
	render: function Render(args) {
		const pageSize = 10;
		const [sorting, setSorting] = useState<SortingState>([]);

		const {
			data: infiniteQueryData,
			fetchNextPage,
			isFetching,
			isLoading,
		} = useInfiniteQuery(
			{
				queryKey: ['people', sorting],
				queryFn: async ({ pageParam }) => {
					const start = pageParam * pageSize;
					return await fetchData(start, pageSize, sorting);
				},
				initialPageParam: 0,
				getNextPageParam: (_lastGroup, groups) => groups.length,
				placeholderData: keepPreviousData,
			},
			queryClient,
		);

		const flatData = useMemo(
			() => infiniteQueryData?.pages.flatMap((page) => page.data) ?? [],
			[infiniteQueryData],
		);

		const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
		const hasMore = flatData.length < totalRows;

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

				<div className={styles.virtualizedTableWrapper}>
					<DsTable
						{...args}
						data={flatData}
						onSortingChange={setSorting}
						virtualized={true}
						infiniteScroll={{
							hasMore,
							isLoadingMore: isFetching,
							onLoadMore: fetchNextPage,
						}}
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
				};
			}
			return col;
		}),
		onScroll: fn(),
	},
};

export const VirtualizedExpandable: Story = {
	name: 'Virtualized Expandable Table',
	render: function Render(args) {
		const pageSize = 10;
		const [sorting, setSorting] = useState<SortingState>([]);

		const {
			data: infiniteQueryData,
			fetchNextPage,
			isFetching,
			isLoading,
		} = useInfiniteQuery(
			{
				queryKey: ['people-expandable', sorting],
				queryFn: async ({ pageParam }) => {
					const start = pageParam * pageSize;
					return await fetchData(start, pageSize, sorting);
				},
				initialPageParam: 0,
				getNextPageParam: (_lastGroup, groups) => groups.length,
				placeholderData: keepPreviousData,
			},
			queryClient,
		);

		const flatData = useMemo(
			() => infiniteQueryData?.pages.flatMap((page) => page.data) ?? [],
			[infiniteQueryData],
		);

		const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
		const hasMore = flatData.length < totalRows;

		return (
			<div className={styles.virtualizedDemoContainer}>
				<div className={styles.virtualizedDemoHeader}>
					<h4 className={styles.virtualizedDemoHeader__title}>Virtualized Table with Expandable Rows</h4>
					<p className={styles.virtualizedDemoHeader__description}>
						This table combines virtualization for large datasets with expandable rows. Click the chevron to
						expand rows and see additional details.
					</p>
					<p className={styles.virtualizedDemoHeader__stats}>
						({flatData.length} of {totalRows} rows fetched)
					</p>
				</div>

				<div className={styles.virtualizedTableWrapper}>
					<DsTable
						{...args}
						data={flatData}
						onSortingChange={setSorting}
						virtualized={true}
						expandable={true}
						infiniteScroll={{
							hasMore,
							isLoadingMore: isFetching,
							onLoadMore: fetchNextPage,
						}}
						renderExpandedRow={(row) => (
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
						)}
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
				};
			}
			return col;
		}),
		onScroll: fn(),
	},
};

export const InfiniteScroll: Story = {
	name: 'Virtualized Infinite Scroll',
	render: function Render(args) {
		const pageSize = 5;
		const totalRows = 60;
		const [sorting, setSorting] = useState<SortingState>([]);

		const {
			data: infiniteQueryData,
			fetchNextPage,
			isFetching,
		} = useInfiniteQuery(
			{
				queryKey: ['people-autofill', sorting],
				queryFn: async ({ pageParam }) => {
					const start = pageParam * pageSize;
					return await fetchData(start, pageSize, sorting, totalRows);
				},
				initialPageParam: 0,
				getNextPageParam: (_lastGroup, groups) => groups.length,
				placeholderData: keepPreviousData,
			},
			queryClient,
		);

		const flatData = useMemo(
			() => infiniteQueryData?.pages.flatMap((page) => page.data) ?? [],
			[infiniteQueryData],
		);

		const fetchedTotal = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? totalRows;
		const hasMore = flatData.length < fetchedTotal;

		return (
			<div className={styles.virtualizedDemoContainer}>
				<div className={styles.virtualizedDemoHeader}>
					<h4 className={styles.virtualizedDemoHeader__title}>Virtualized Infinite Scroll</h4>
					<p className={styles.virtualizedDemoHeader__description}>
						The first page only returns {pageSize} rows - too few to fill the viewport. With{' '}
						<code>autoFill: true</code> (the default), the Table keeps requesting pages until the content
						becomes scrollable.
					</p>
					<p className={styles.virtualizedDemoHeader__stats}>
						({flatData.length} of {fetchedTotal} rows fetched)
					</p>
				</div>

				<div className={styles.virtualizedTableWrapper}>
					<DsTable
						{...args}
						data={flatData}
						onSortingChange={setSorting}
						virtualized={true}
						infiniteScroll={{
							hasMore,
							isLoadingMore: isFetching,
							onLoadMore: fetchNextPage,
						}}
					/>
				</div>
			</div>
		);
	},
};

const statusOptions = [
	{ label: 'Single', value: 'single' },
	{ label: 'Relationship', value: 'relationship' },
	{ label: 'Complicated', value: 'complicated' },
];

const statusLabels: Record<Status, string> = {
	single: 'Single',
	relationship: 'Relationship',
	complicated: 'Complicated',
};

const VIRTUALIZED_ROW_COUNT = 1_000;

const updateRow = <K extends keyof Person>(
	rows: Person[],
	rowId: string,
	columnId: K,
	value: Person[K],
): Person[] => rows.map((row) => (row.id === rowId ? { ...row, [columnId]: value } : row));

const hasAccessorKey = <K extends keyof Person>(
	column: ColumnDef<Person>,
	key: K,
): column is ColumnDef<Person> & { accessorKey: K } => 'accessorKey' in column && column.accessorKey === key;

const baseColumn = (accessorKey: keyof Person): ColumnDef<Person> =>
	columns.find((column) => hasAccessorKey(column, accessorKey)) ?? {
		accessorKey,
		header: accessorKey,
		cell: (info) => info.getValue(),
	};

const editableColumns: ColumnDef<Person>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		size: 60,
		cell: (info) => <span className={editableStyles.readOnlyCell}>{info.getValue() as string}</span>,
	},
	{
		...baseColumn('firstName'),
		editCell: (info: CellContext<Person, string>) => (
			<DsTableEditCellText cellContext={info} placeholder="Enter first name" />
		),
	},
	{
		...baseColumn('lastName'),
		editCell: (info: CellContext<Person, string>) => (
			<DsTableEditCellText cellContext={info} placeholder="Enter last name" />
		),
	},
	{
		...baseColumn('age'),
		size: 100,
		editCell: (info: CellContext<Person, number>) => (
			<DsTableEditCellNumber cellContext={info} min={0} max={120} />
		),
	},
	{
		...baseColumn('visits'),
		size: 100,
		editCell: (info: CellContext<Person, number>) => <DsTableEditCellNumber cellContext={info} min={0} />,
	},
	{
		...baseColumn('status'),
		size: 160,
		cell: (info) => statusLabels[info.getValue() as Status],
		editCell: (info: CellContext<Person, string>) => (
			<DsTableEditCellSelect cellContext={info} options={statusOptions} />
		),
	},
	{
		...baseColumn('progress'),
		editCell: (info: CellContext<Person, number>) => (
			<DsTableEditCellNumber cellContext={info} min={0} max={100} />
		),
	},
];

export const VirtualizedEditable: Story = {
	name: 'Virtualized Editable Table',
	parameters: {
		docs: {
			description: {
				story:
					'Editable cells work with row virtualization for large datasets. Scroll through thousands of rows and double-click any editable cell to edit in place.',
			},
		},
	},
	render: function Render(args) {
		const [data, setData] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);

		return (
			<div className={styles.virtualizedDemoContainer}>
				<div className={styles.virtualizedDemoHeader}>
					<h4 className={styles.virtualizedDemoHeader__title}>Virtualized Editable Table</h4>
					<p className={styles.virtualizedDemoHeader__description}>
						Inline editing with row virtualization. Scroll through {VIRTUALIZED_ROW_COUNT.toLocaleString()}{' '}
						rows and double-click a cell to edit in place.
					</p>
					<p className={styles.virtualizedDemoHeader__stats}>({data.length.toLocaleString()} rows loaded)</p>
				</div>

				<div className={styles.virtualizedTableWrapper}>
					<DsTable
						{...args}
						data={data}
						columns={editableColumns}
						virtualized
						onCellEdit={(row: Person, columnId, value) => {
							setData((rows) => updateRow(rows, row.id, columnId as keyof Person, value as never));
						}}
					/>
				</div>
			</div>
		);
	},
};
