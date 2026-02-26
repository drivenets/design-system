import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import { useMemo, useState } from 'react';
import type { ColumnDef, SortingState } from '@tanstack/react-table';
import { keepPreviousData, QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import DsTable from '../ds-table';
import type { ScrollParams } from '../';
import { DsSpinner } from '../../ds-spinner';
import { generatePersonData, simulateApiCall } from './common/story-data-generator';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Virtualized',
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

export const EmptyState: Story = {
	args: {
		virtualized: true,
		data: [],
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
	},
};

export const VirtualizedSelectable: Story = {
	name: 'Virtualized Selectable Table',
	render: function Render(args) {
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
				queryKey: ['people', sorting],
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
						staleTime: 5 * 60 * 1000,
						gcTime: 10 * 60 * 1000,
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

		const fetchMoreOnBottomReached = async (params: ScrollParams) => {
			args.onScroll?.(params);
			const { scrollOffset, totalContentHeight, viewportHeight } = params;

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
		onScroll: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await waitFor(
			() => {
				return expect(canvas.getByText(/of 10000 rows fetched/i)).toBeInTheDocument();
			},
			{ timeout: 5000 },
		);

		const dataRows = getDataRows(canvas);
		await expect(dataRows.length).toBeGreaterThan(0);

		const checkboxes = canvas.getAllByRole('checkbox');
		const firstRowCheckbox = checkboxes[1] as HTMLElement;
		await userEvent.click(firstRowCheckbox);
		await waitFor(() => expect(firstRowCheckbox).toBeChecked(), { timeout: 1000 });

		const scrollContainer = canvasElement.querySelector('[class*="virtualizedContainer"]') as Element;
		await expect(scrollContainer).toBeInTheDocument();

		scrollContainer.scrollTop = scrollContainer.scrollHeight;

		await waitFor(() => expect(args.onScroll).toHaveBeenCalled(), { timeout: 2000 });

		// check that the row with checked checkbox is unmounted (virtualized out)
		await waitFor(
			() => {
				return expect(canvas.queryAllByRole('checkbox', { checked: true })).toHaveLength(0);
			},
			{ timeout: 1000 },
		);

		scrollContainer.scrollTop = 0;

		// check that the first row is still checked after scrolling back to top
		await waitFor(
			() => {
				const checkboxesAfterScroll = canvas.getAllByRole('checkbox');
				return expect(checkboxesAfterScroll[1]).toBeChecked();
			},
			{ timeout: 1000 },
		);
	},
};

export const VirtualizedExpandable: Story = {
	name: 'Virtualized Expandable Table',
	render: function Render(args) {
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
				queryKey: ['people-expandable', sorting],
				queryFn: async ({ pageParam }) => {
					const start = pageParam * pageSize;
					return await fetchData(start, pageSize, sorting);
				},
				initialPageParam: 0,
				getNextPageParam: (_lastGroup, groups) => groups.length,
				placeholderData: keepPreviousData,
			},
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000,
						gcTime: 10 * 60 * 1000,
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

		const fetchMoreOnBottomReached = async (params: ScrollParams) => {
			args.onScroll?.(params);
			const { scrollOffset, totalContentHeight, viewportHeight } = params;

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
					<h4 className={styles.virtualizedDemoHeader__title}>Virtualized Table with Expandable Rows</h4>
					<p className={styles.virtualizedDemoHeader__description}>
						This table combines virtualization for large datasets with expandable rows. Click the chevron to
						expand rows and see additional details.
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
						expandable={true}
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
				} as ColumnDef<Person>;
			}
			return col;
		}),
		onScroll: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await waitFor(
			() => {
				return expect(canvas.getByText(/of 10000 rows fetched/i)).toBeInTheDocument();
			},
			{ timeout: 2000 },
		);

		const dataRows = getDataRows(canvas);
		await expect(dataRows.length).toBeGreaterThan(0);

		const expandButtons = canvas.getAllByRole('button', { name: /chevron_right/i });
		await expect(expandButtons.length).toBeGreaterThan(0);

		await userEvent.click(expandButtons[0] as HTMLElement);
		await waitFor(
			() => {
				return expect(canvas.getByText(/expanded details for/i)).toBeInTheDocument();
			},
			{ timeout: 1000 },
		);

		const scrollContainer = canvasElement.querySelector('[class*="virtualizedContainer"]') as Element;
		await expect(scrollContainer).toBeInTheDocument();

		scrollContainer.scrollTop = scrollContainer.scrollHeight;

		await waitFor(
			() => expect(args.onScroll).toHaveBeenCalled(),

			{ timeout: 1000 },
		);

		// check that the expanded row is unmounted
		await waitFor(
			() => {
				return expect(canvas.queryByText(/expanded details for/i)).not.toBeInTheDocument();
			},
			{ timeout: 1000 },
		);

		scrollContainer.scrollTop = 0;

		// check that the expanded row is still expanded after scrolling to the top
		await waitFor(
			() => {
				return expect(canvas.getByText(/expanded details for/i)).toBeInTheDocument();
			},
			{ timeout: 1000 },
		);
	},
};
