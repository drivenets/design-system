import * as React from 'react';
import { useImperativeHandle, useMemo } from 'react';
import {
	type RowSelectionState,
	type ColumnFiltersState,
	getCoreRowModel,
	getExpandedRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	type SortingState,
	type Table as TanstackTable,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table';
import classnames from 'classnames';
import { Table, TableBody, TableCell, TableRow } from './components/core-table';
import { DsTableBulkActions } from './components/ds-table-bulk-actions';
import { DsTableHeader } from './components/ds-table-header';
import { DsTableResizeOverlay } from './components/ds-table-resize-overlay';
import styles from './ds-table.module.scss';
import type { DsDataTableProps, DsTableRowSize } from './ds-table.types';
import { applyDsTableDefaults } from './ds-table-defaults';
import { DsTableRow } from './components/ds-table-row';
import { useDragAndDrop } from './hooks/use-drag-and-drop';
import { useColumnResize } from './hooks/use-column-resize';
import { DsTableContextProvider } from './context/ds-table-context';
import { DsTableBodyVirtualized } from './components/ds-table-body-virtualized';
import { useColumnGroups } from './grouping';
import { EMPTY_TABLE_STATE_TEXT } from './utils/constants';
import { createSkeletonRows, getAugmentedColumns, toSkeletonColumns } from './utils/table-columns';
import { createTableApi } from './utils/table-api';

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
		columns: columnsProp,
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
		onColumnSizingChange,
	} = tableProps;
	const [data, setData] = React.useState(tableData);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [internalColumnFilters, setInternalColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [internalColumnVisibility, setInternalColumnVisibility] = React.useState<VisibilityState>({});
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
		updaterOrValue: VisibilityState | ((old: VisibilityState) => VisibilityState),
	) => {
		const newVisibility =
			typeof updaterOrValue === 'function' ? updaterOrValue(baseColumnVisibility) : updaterOrValue;

		if (onColumnVisibilityChange) {
			onColumnVisibilityChange(newVisibility);
		} else {
			setInternalColumnVisibility(newVisibility);
		}
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

	const columns = useMemo(
		() =>
			getAugmentedColumns(columnsProp, {
				selectable,
				expandable,
				reorderable,
				virtualized,
				showSelectAllCheckbox,
			}),
		[columnsProp, selectable, expandable, reorderable, virtualized, showSelectAllCheckbox],
	);

	const skeletonColumns = useMemo(() => toSkeletonColumns(columns), [columns]);
	const skeletonData = useMemo(() => createSkeletonRows<TData>(), []);

	const resize = useColumnResize({
		enabled: resizableColumns,
		onColumnSizingChange,
		columns,
		columnVisibility,
	});

	const table = useReactTable({
		data: loading ? skeletonData : reorderable ? data : tableData,
		columns: loading ? skeletonColumns : columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: handleSortingChange,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: handleColumnFiltersChange, // TODO: looks like this is not used, since filters are handled from the outside
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: handleColumnVisibilityChange, // TODO: looks like this is not used, since visibility is handled from the outside
		onRowSelectionChange: handleRowSelectionChange,
		getRowId: (row) => row.id,
		getExpandedRowModel: getExpandedRowModel(),
		getRowCanExpand: typeof expandable === 'function' ? (row) => expandable(row.original) : () => expandable,
		...resize.tableOptions,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			...resize.state,
		},
		enableRowSelection: typeof selectable === 'function' ? (row) => selectable(row.original) : selectable,
	});

	const { columnSizeVars, activeResize, context: resizeContext } = resize.bind(table);

	useImperativeHandle(ref, () => createTableApi(table), [table]);

	const { rowsById } = table.getRowModel();

	const selectedRows = Object.entries(rowSelection)
		.filter(([, selected]) => selected)
		.map(([key]) => rowsById[key]?.original)
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
			}}
		>
			<div
				className={classnames(styles.container, isBulkActionsVisible && styles.bulkActionsVisible, className)}
			>
				{controls && <div className={styles.controls}>{controls}</div>}
				<div
					ref={resizeContext.resizeContainerRef}
					className={classnames(
						!virtualized && styles.dataTableContainer,
						virtualized && styles.virtualizedContainer,
					)}
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
									emptyState={emptyState}
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
									emptyState={emptyState}
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
					<DsTableBulkActions
						numSelectedRows={selectedRows.length}
						actions={actions.map((action) => ({
							...action,
							onClick: () => action.onClick(selectedRows),
						}))}
						onClearSelection={table.resetRowSelection}
					/>
				)}
			</div>
		</DsTableContextProvider>
	);
};

interface DsTableRowsBodyProps<TData extends { id: string }> {
	table: TanstackTable<TData>;
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
					<TableRow>
						<TableCell colSpan={columnCount} className={styles.emptyState}>
							{emptyState || EMPTY_TABLE_STATE_TEXT}
						</TableCell>
					</TableRow>
				)}
			</SortableWrapper>
		</TableBody>
	);
};

// table is a stable mutable object; return false when not resizing so row updates are not skipped.
const areBodiesFrozen = <T,>(prev: { table: TanstackTable<T> }, next: { table: TanstackTable<T> }): boolean =>
	Boolean(next.table.getState().columnSizingInfo.isResizingColumn) &&
	prev.table.options.data === next.table.options.data;

const MemoizedDsTableRowsBody = React.memo(DsTableRowsBody, areBodiesFrozen) as typeof DsTableRowsBody;

const MemoizedDsTableBodyVirtualized = React.memo(
	DsTableBodyVirtualized,
	areBodiesFrozen,
) as typeof DsTableBodyVirtualized;

DsTable.displayName = 'DsTable';

export default DsTable;
