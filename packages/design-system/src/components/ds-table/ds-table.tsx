/* eslint-disable react-hooks/preserve-manual-memoization -- `ds-table/` is excluded from the React Compiler build. */
import * as React from 'react';
import { useImperativeHandle, useMemo } from 'react';
import {
	type RowSelectionState,
	type ColumnFiltersState,
	type ColumnPinningState,
	type SortingState,
	useTable,
	type ColumnVisibilityState,
} from '@tanstack/react-table';
import classnames from 'classnames';
import { Table, TableBody, TableCell, TableRow } from './components/core-table';
import { DsBulkActions } from '../ds-bulk-actions';
import { DsTableHeader } from './components/ds-table-header';
import { DsTableResizeOverlay } from './components/ds-table-resize-overlay';
import styles from './ds-table.module.scss';
import type { DsDataTableProps, DsTableRowSize, DsTableStickyColumns } from './ds-table.types';
import { applyDsTableDefaults } from './ds-table-defaults';
import { dsTableFeatures, type DsColumnDef, type DsTableInstance } from './ds-table-features';
import { DsTableRow } from './components/ds-table-row';
import { useDragAndDrop } from './hooks/use-drag-and-drop';
import { useColumnResize } from './hooks/use-column-resize';
import { useTableVisibleWidth } from './hooks/use-table-visible-width';
import { useStickyScrollState } from './hooks/use-sticky-scroll-state';
import { DsTableContextProvider } from './context/ds-table-context';
import { DsTableBodyVirtualized } from './components/ds-table-body-virtualized';
import { useColumnGroups } from './grouping';
import { DsEmptyState } from '../ds-empty-state';
import { getRowActionsColumnWidth, getUtilityColumnSizing } from './utils/column-size';
import { createSkeletonRows, getAugmentedColumns, toSkeletonColumns } from './utils/table-columns';
import { createTableApi } from './utils/table-api';
import { areBodiesFrozen } from './utils/frozen-body';
import { resolveColumnPinning, toStickyColumns } from './utils/sticky-columns';

// Row size to pixel height mapping (matches CSS variables)
const ROW_SIZE_HEIGHT_MAP: Record<DsTableRowSize, number> = {
	small: 36,
	medium: 48,
	large: 64,
};

/**
 * Design system Table component
 */
const DsTable = <TData extends { id: string }, TValue>(props: DsDataTableProps<TData, TValue>) => {
	const tableProps = applyDsTableDefaults(props);
	const {
		ref,
		columns: rawColumns,
		data: tableData,
		controls,
		virtualized,
		virtualizedOptions,
		className,
		emptyState,
		bordered,
		fullWidth,
		rowSize,
		loading,
		expandable,
		selectable,
		showSelectAllCheckbox,
		onSelectionChange,
		onSortingChange,
		onScroll,
		actions,
		reorderable,
		onOrderChange,
		columnFilters: externalColumnFilters,
		onColumnFiltersChange,
		columnVisibility: externalColumnVisibility,
		onColumnVisibilityChange,
		collapsedColumnGroups: externalCollapsedColumnGroups,
		onCollapsedColumnGroupsChange,
		infiniteScroll,
		resizableColumns,
		columnSizing,
		onColumnSizingChange,
		selectableColumnWidth,
		expandableColumnWidth,
		reorderableColumnWidth,
		primaryRowActions,
		secondaryRowActions,
		columnDisplay,
		stickyColumns: externalStickyColumns,
		onStickyColumnsChange,
	} = tableProps;
	// Column defs are invariant in `TValue`; widen like TanStack's `columnHelper.columns`.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const columnsProp: DsColumnDef<TData, any>[] = rawColumns;
	const [data, setData] = React.useState(tableData);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [internalColumnFilters, setInternalColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [internalColumnVisibility, setInternalColumnVisibility] = React.useState<ColumnVisibilityState>({});
	const [internalStickyColumns, setInternalStickyColumns] = React.useState<DsTableStickyColumns>({});
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

	const { DragWrapper, SortableWrapper } = useDragAndDrop<TData>({
		isDragEnabled: reorderable && !virtualized,
		onOrderChange: (newData) => {
			setData(newData);
			onOrderChange?.(newData);
		},
		items: data,
	});

	const columnFilters = externalColumnFilters ?? internalColumnFilters;
	const handleColumnFiltersChange = (
		updaterOrValue: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState),
	) => {
		const newFilters = typeof updaterOrValue === 'function' ? updaterOrValue(columnFilters) : updaterOrValue;
		if (onColumnFiltersChange) {
			onColumnFiltersChange(newFilters);
		} else {
			setInternalColumnFilters(newFilters);
		}
	};

	const baseColumnVisibility = externalColumnVisibility ?? internalColumnVisibility;
	const handleColumnVisibilityChange = (
		updaterOrValue: ColumnVisibilityState | ((old: ColumnVisibilityState) => ColumnVisibilityState),
	) => {
		const newVisibility =
			typeof updaterOrValue === 'function' ? updaterOrValue(baseColumnVisibility) : updaterOrValue;

		if (externalColumnVisibility === undefined) {
			setInternalColumnVisibility(newVisibility);
		}

		onColumnVisibilityChange?.(newVisibility);
	};

	const { collapsedColumnGroups, toggleColumnGroup, collapsedVisibility } = useColumnGroups({
		columns: columnsProp,
		collapsedColumnGroups: externalCollapsedColumnGroups,
		onCollapsedColumnGroupsChange,
	});

	const columnVisibility = useMemo(
		() => ({ ...baseColumnVisibility, ...collapsedVisibility }),
		[baseColumnVisibility, collapsedVisibility],
	);

	const handleSortingChange = (updaterOrValue: SortingState | ((old: SortingState) => SortingState)) => {
		const newSorting = typeof updaterOrValue === 'function' ? updaterOrValue(sorting) : updaterOrValue;
		setSorting(newSorting);
		onSortingChange?.(newSorting);
	};

	const handleRowSelectionChange = (
		updaterOrValue: RowSelectionState | ((old: RowSelectionState) => RowSelectionState),
	) => {
		const newRowSelection =
			typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection) : updaterOrValue;
		setRowSelection(newRowSelection);
		onSelectionChange?.(newRowSelection);
	};

	// Boolean flags only — an inline `selectable` / `expandable` callback must
	// not rebuild column defs (and remount cells) on every parent render.
	const hasSelectColumn = Boolean(selectable);
	const hasExpanderColumn = Boolean(expandable);
	// Width from counts only — inline action arrays must not rebuild column defs.
	const rowActionsColumnWidth = getRowActionsColumnWidth(
		primaryRowActions.length,
		(secondaryRowActions?.length ?? 0) > 0,
	);
	const columns = useMemo(
		() =>
			getAugmentedColumns(columnsProp, {
				selectable: hasSelectColumn,
				expandable: hasExpanderColumn,
				reorderable,
				virtualized,
				showSelectAllCheckbox,
				selectableColumnWidth,
				expandableColumnWidth,
				reorderableColumnWidth,
				rowActionsColumnWidth,
				columnDisplay,
			}),
		[
			columnsProp,
			hasSelectColumn,
			hasExpanderColumn,
			reorderable,
			virtualized,
			showSelectAllCheckbox,
			selectableColumnWidth,
			expandableColumnWidth,
			reorderableColumnWidth,
			rowActionsColumnWidth,
			columnDisplay,
		],
	);

	const stickyColumns = externalStickyColumns ?? internalStickyColumns;
	const stickyColumnsKey = JSON.stringify([stickyColumns.left, stickyColumns.right]);
	const columnPinning = useMemo(
		() => resolveColumnPinning(stickyColumns, columnsProp),
		// Keyed on content so an inline `stickyColumns` object doesn't re-pin every render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[stickyColumnsKey, columnsProp],
	);
	const handleColumnPinningChange = (
		updaterOrValue: ColumnPinningState | ((old: ColumnPinningState) => ColumnPinningState),
	) => {
		const nextPinning = typeof updaterOrValue === 'function' ? updaterOrValue(columnPinning) : updaterOrValue;
		const nextStickyColumns = toStickyColumns(nextPinning, stickyColumns, columnsProp);

		if (externalStickyColumns === undefined) {
			setInternalStickyColumns(nextStickyColumns);
		}

		onStickyColumnsChange?.(nextStickyColumns);
	};

	const skeletonColumns = useMemo(() => toSkeletonColumns(columns), [columns]);
	const skeletonData = useMemo(() => createSkeletonRows<TData>(), []);
	const utilityColumnSizing = useMemo(() => getUtilityColumnSizing(columns), [columns]);
	const sourceDataLength = (reorderable ? data : tableData).length;
	const inferredEmptyState = useMemo(
		() => <DsEmptyState variant={sourceDataLength === 0 ? 'noData' : 'noMatches'} />,
		[sourceDataLength],
	);
	const resolvedEmptyState = emptyState ?? inferredEmptyState;

	const resize = useColumnResize<TData>({
		enabled: resizableColumns,
		columnSizing,
		onColumnSizingChange,
		columns,
		columnVisibility,
		utilityColumnSizing,
	});

	const table = useTable({
		features: dsTableFeatures,
		data: loading ? skeletonData : reorderable ? data : tableData,
		columns: loading ? skeletonColumns : columns,
		onSortingChange: handleSortingChange,
		onColumnFiltersChange: handleColumnFiltersChange, // TODO: looks like this is not used, since filters are handled from the outside
		onColumnVisibilityChange: handleColumnVisibilityChange,
		onColumnPinningChange: handleColumnPinningChange,
		onRowSelectionChange: handleRowSelectionChange,
		getRowId: (row) => row.id,
		// TanStack resets expansion whenever `data` changes identity; keep it across re-renders.
		autoResetExpanded: false,
		getRowCanExpand: typeof expandable === 'function' ? (row) => expandable(row.original) : () => expandable,
		...resize.tableOptions,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			columnPinning,
			rowSelection,
			...resize.state,
		},
		enableRowSelection: typeof selectable === 'function' ? (row) => selectable(row.original) : selectable,
	});

	const { columnSizeVars, activeResize, context: resizeContext } = resize.bind(table);

	useTableVisibleWidth(resizeContext.scrollContainerRef);
	useStickyScrollState(resizeContext.scrollContainerRef);

	// `useTable` returns a new wrapper each render; the API only calls methods bound to the instance.
	const [tableApi] = React.useState(() => createTableApi(table));
	useImperativeHandle(ref, () => tableApi, [tableApi]);

	const { rowsById } = table.getRowModel();

	const selectedRows = Object.keys(rowSelection)
		.map((key) => rowsById[key]?.original)
		.filter((v) => !!v);

	const isBulkActionsVisible = selectable && actions.length > 0 && selectedRows.length > 0;

	return (
		<DsTableContextProvider
			tableProps={tableProps}
			derived={{
				grouping: {
					collapsedColumnGroups,
					onToggleColumnGroup: toggleColumnGroup,
				},
				resize: resizeContext,
				columnVisibility: baseColumnVisibility,
			}}
		>
			<div
				className={classnames(styles.container, isBulkActionsVisible && styles.bulkActionsVisible, className)}
			>
				{controls && <div className={styles.controls}>{controls}</div>}
				<div
					ref={resizeContext.scrollContainerRef}
					className={classnames(
						!virtualized && styles.dataTableContainer,
						virtualized && styles.virtualizedContainer,
					)}
					// Size containment drops the content width too; keep the column track as the
					// intrinsic width so a fit-content parent still sizes to the columns.
					style={virtualized ? { containIntrinsicInlineSize: table.getTotalSize() } : undefined}
				>
					<DragWrapper>
						<Table
							className={classnames(fullWidth && styles.fullWidth, !bordered && styles.tableNoBorder)}
							style={columnSizeVars}
						>
							<DsTableHeader table={table} />
							{virtualized ? (
								<MemoizedDsTableBodyVirtualized
									table={table}
									emptyState={resolvedEmptyState}
									estimateSize={virtualizedOptions?.estimateSize || ROW_SIZE_HEIGHT_MAP[rowSize]}
									overscan={virtualizedOptions?.overscan}
									onScroll={onScroll}
									rowSelection={rowSelection}
									infiniteScroll={infiniteScroll}
								/>
							) : (
								<MemoizedDsTableRowsBody
									table={table}
									rowSelection={rowSelection}
									emptyState={resolvedEmptyState}
									SortableWrapper={SortableWrapper}
								/>
							)}
						</Table>
					</DragWrapper>
					{activeResize ? (
						<DsTableResizeOverlay offset={activeResize.offset} phase={activeResize.phase} />
					) : null}
				</div>
				{selectable && actions.length > 0 && (
					<DsBulkActions
						placement="floating"
						selectedCount={selectedRows.length}
						onClearSelection={table.resetRowSelection}
					>
						{actions.map((action, index) => (
							<DsBulkActions.Item
								key={`${action.label}-${String(index)}`}
								icon={action.icon}
								label={action.label}
								onClick={() => action.onClick(selectedRows)}
							/>
						))}
					</DsBulkActions>
				)}
			</div>
		</DsTableContextProvider>
	);
};

interface DsTableRowsBodyProps<TData extends { id: string }> {
	table: DsTableInstance<TData>;
	rowSelection: RowSelectionState;
	emptyState?: React.ReactNode;
	SortableWrapper: React.ComponentType<React.PropsWithChildren>;
}

const DsTableRowsBody = <TData extends { id: string }>({
	table,
	rowSelection,
	emptyState,
	SortableWrapper,
}: DsTableRowsBodyProps<TData>) => {
	const { rows } = table.getRowModel();
	const columnCount = table.getVisibleLeafColumns().length;

	return (
		<TableBody>
			<SortableWrapper>
				{rows.length ? (
					rows.map((row) => <DsTableRow key={row.id} row={row} isSelected={!!rowSelection[row.id]} />)
				) : (
					<TableRow className={styles.emptyStateRow}>
						<TableCell colSpan={columnCount} className={styles.emptyState}>
							{emptyState}
						</TableCell>
					</TableRow>
				)}
			</SortableWrapper>
		</TableBody>
	);
};

const MemoizedDsTableRowsBody = React.memo(DsTableRowsBody, areBodiesFrozen) as typeof DsTableRowsBody;

const MemoizedDsTableBodyVirtualized = React.memo(
	DsTableBodyVirtualized,
	areBodiesFrozen,
) as typeof DsTableBodyVirtualized;

DsTable.displayName = 'DsTable';

export default DsTable;
