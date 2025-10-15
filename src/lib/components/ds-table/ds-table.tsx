import * as React from 'react';
import { useImperativeHandle } from 'react';
import {
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	RowSelectionState,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import classnames from 'classnames';
import { Table, TableBody, TableCell, TableRow } from './components/core-table';
import { DsTableBulkActions } from './components/ds-table-bulk-actions';
import { DsTableHeader } from './components/ds-table-header';
import styles from './ds-table.module.scss';
import type { DsDataTableProps, DsTableRowSize } from './ds-table.types';
import { DsTableRow } from './components/ds-table-row';
import { useDragAndDrop } from './hooks/use-drag-and-drop';
import { DsTableContext, DsTableContextType } from './context/ds-table-context';

// Row size to pixel height mapping (matches CSS variables)
const ROW_SIZE_HEIGHT_MAP: Record<DsTableRowSize, number> = {
	small: 36,
	medium: 48,
	large: 64,
};

/**
 * Design system Table component
 */
const DsTable = <TData extends { id: string }, TValue>({
	ref,
	columns,
	data: tableData = [],
	virtualized = false,
	virtualizedOptions,
	className,
	onRowClick,
	emptyState,
	stickyHeader = true,
	bordered = true,
	fullWidth = true,
	highlightOnHover = true,
	rowSize = 'medium',
	expandable = false,
	renderExpandedRow,
	selectable = false,
	showSelectAllCheckbox = true,
	onSelectionChange,
	onSortingChange,
	onScroll,
	actions = [],
	onRowDoubleClick,
	primaryRowActions = [],
	secondaryRowActions,
	reorderable = false,
	onOrderChange,
	columnFilters: externalColumnFilters,
	onColumnFiltersChange,
}: DsDataTableProps<TData, TValue>) => {
	const [data, setData] = React.useState(tableData);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [internalColumnFilters, setInternalColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
	const [expandedRows, setExpandedRows] = React.useState<Record<string, boolean>>({});

	const { DragWrapper, SortableWrapper } = useDragAndDrop<TData>({
		isDragEnabled: reorderable && !virtualized,
		onOrderChange: (newData) => {
			setData(newData);
			onOrderChange?.(newData);
		},
		items: data,
	});

	const tableContainerRef = React.useRef<HTMLDivElement>(null);

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

	const table = useReactTable({
		data: reorderable ? data : tableData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: handleSortingChange,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: handleColumnFiltersChange,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: handleRowSelectionChange,
		getRowId: (row) => row.id,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
		enableRowSelection: selectable,
	});

	useImperativeHandle(
		ref,
		() => ({
			selectRow: (rowId: string) => {
				table.getRow(rowId).toggleSelected(true);
			},
			deselectRow: (rowId: string) => {
				table.getRow(rowId).toggleSelected(false);
			},
			selectAllRows: () => {
				table.toggleAllRowsSelected(true);
			},
			deselectAllRows: () => {
				table.toggleAllRowsSelected(false);
			},
			selectRows: (rowIds: string[]) => {
				const selection: Record<string, boolean> = {};
				rowIds.forEach((id) => (selection[id] = true));
				table.setRowSelection(selection);
			},
			getSelectedRows: () => {
				return table.getFilteredSelectedRowModel().rows.map((r) => r.original);
			},
		}),
		[table],
	);

	const { rows, rowsById } = table.getRowModel();

	const rowVirtualizer = useVirtualizer({
		count: rows.length,
		getScrollElement: () => tableContainerRef.current,
		// estimate row height for accurate scrollbar dragging
		estimateSize: () => virtualizedOptions?.estimateSize || ROW_SIZE_HEIGHT_MAP[rowSize],
		overscan: virtualizedOptions?.overscan || 5,
		onChange: (instance, sync) => {
			if (sync && onScroll) {
				const scrollOffset = instance.scrollOffset || 0;
				const totalContentHeight = instance.getTotalSize();
				const viewportHeight = instance.scrollElement?.clientHeight;

				if (viewportHeight) {
					onScroll({ scrollOffset, totalContentHeight, viewportHeight });
				}
			}
		},
	});

	const toggleRowExpanded = (rowId: string) => {
		setExpandedRows((prev) => ({
			...prev,
			[rowId]: !prev[rowId],
		}));
	};

	const renderEmptyState = () => (
		<TableRow>
			<TableCell
				colSpan={columns.length + (expandable ? 1 : 0) + (selectable ? 1 : 0)}
				className={styles.emptyState}
			>
				{emptyState || 'No results.'}
			</TableCell>
		</TableRow>
	);

	const selectedRows = Object.entries(rowSelection)
		.filter(([, selected]) => selected)
		.map(([key]) => rowsById[key]?.original)
		.filter(Boolean);

	const contextValue: DsTableContextType<TData, TValue> = {
		stickyHeader,
		bordered,
		fullWidth,
		highlightOnHover,
		rowSize,
		expandable,
		selectable,
		reorderable,
		showSelectAllCheckbox,
		onRowClick,
		onRowDoubleClick,
		primaryRowActions,
		secondaryRowActions,
		renderExpandedRow,
		virtualized,
		expandedRows,
		toggleRowExpanded,
	};

	return (
		<DsTableContext.Provider value={contextValue}>
			<div
				ref={tableContainerRef}
				className={classnames(
					styles.container,
					!virtualized && styles.dataTableContainer,
					virtualized && styles.virtualizedContainer,
					className,
				)}
			>
				<DragWrapper>
					<Table className={classnames(fullWidth && styles.fullWidth, !bordered && styles.tableNoBorder)}>
						<DsTableHeader table={table} />
						<TableBody style={{ height: virtualized ? `${rowVirtualizer.getTotalSize()}px` : undefined }}>
							{virtualized ? (
								rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
									const row = rows[virtualRow.index];
									return <DsTableRow key={row.id} row={row} virtualRow={virtualRow} />;
								})
							) : (
								<SortableWrapper>
									{rows.length
										? rows.map((row) => <DsTableRow key={row.id} row={row} />)
										: renderEmptyState()}
								</SortableWrapper>
							)}
						</TableBody>
					</Table>
				</DragWrapper>
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
		</DsTableContext.Provider>
	);
};

export default DsTable;
