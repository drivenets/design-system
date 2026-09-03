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
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsTypography } from '../../ds-typography';
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
		onRowClick: fn(),
	},
	decorators: [
		(Story) =>
			fullHeightDecorator(() => (
				<div className={styles.virtualizedStoryHeight}>
					<Story />
				</div>
			)),
	],
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

/**
 * Row virtualization with selection, backed by TanStack Query infinite scroll.
 * Keep the flattened pages in `data`, wire `infiniteScroll` to the query's
 * `fetchNextPage` / loading flags, and the table renders only visible rows —
 * performant even for very large datasets.
 */
export const VirtualizedSelectable: Story = {
	name: 'Virtualized Selectable Table',
	parameters: {
		docs: { source: { type: 'code' } },
	},
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
						<DsStack direction="column" gap={8} alignItems="center">
							<DsSpinner size="small" />
							<DsTypography variant="body-sm-reg" color="secondary">
								Loading data...
							</DsTypography>
						</DsStack>
					</div>
				)}
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

/**
 * Combine row virtualization with expandable rows. `renderExpandedRow` supplies
 * the detail content for each expanded row while the body stays virtualized.
 */
export const VirtualizedExpandable: Story = {
	name: 'Virtualized Expandable Table',
	parameters: {
		docs: { source: { type: 'code' } },
	},
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
						<DsStack direction="column" gap={8}>
							<DsStack direction="column" gap={4}>
								<DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
								<DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
								<DsTypography variant="body-sm-reg">
									Full Name: {row.firstName} {row.lastName}
								</DsTypography>
								<DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
							</DsStack>

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
						</DsStack>
					)}
				/>
				{isLoading && (
					<div className={styles.loadingOverlay}>
						<DsStack direction="column" gap={8} alignItems="center">
							<DsSpinner size="small" />
							<DsTypography variant="body-sm-reg" color="secondary">
								Loading data...
							</DsTypography>
						</DsStack>
					</div>
				)}
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

/**
 * When the first page returns too few rows to fill the viewport, `autoFill`
 * (on by default) keeps requesting pages until the content becomes scrollable,
 * so infinite scroll can take over. Wire `infiniteScroll` to your query's
 * `fetchNextPage` and loading flags.
 */
export const InfiniteScroll: Story = {
	name: 'Virtualized Infinite Scroll',
	parameters: {
		docs: { source: { type: 'code' } },
	},
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

/**
 * Inline editing works with row virtualization for large datasets. Scroll
 * through thousands of rows and double-click any editable cell to edit in place;
 * `onCellEdit` reports the row, column, and new value to persist.
 */
export const VirtualizedEditable: Story = {
	name: 'Virtualized Editable Table',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data, setData] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);

		return (
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
		);
	},
};

/**
 * The pinned `controls` bar stays fixed above the header while the virtualized
 * body scrolls through a large dataset.
 */
export const VirtualizedWithControls: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);

		return <DsTable {...args} data={data} virtualized />;
	},
	args: {
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
 * Row virtualization and column resize work together. Scroll a large
 * dataset and drag a header edge to resize; widths apply to virtualized
 * rows. Double-click a handle to restore the snapshotted width.
 */
export const VirtualizedResizable: Story = {
	name: 'Virtualized Resizable Columns',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);

		return (
			<div className={styles.virtualizedTableWrapper}>
				<DsTable {...args} data={data} />
			</div>
		);
	},
	args: {
		virtualized: true,
		resizableColumns: true,
	},
};
