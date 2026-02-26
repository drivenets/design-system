import * as React from 'react';
import { useImperativeHandle } from 'react';
import {
	type RowSelectionState,
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table';
import classnames from 'classnames';
import { Table, TableBody, TableCell, TableRow } from './components/core-table';
import { DsTableBulkActions } from './components/ds-table-bulk-actions';
import { DsTableHeader } from './components/ds-table-header';
import styles from './ds-table.module.scss';
import type { DsDataTableProps, DsTableRowSize } from './ds-table.types';
import { DsTableRow } from './components/ds-table-row';
import { useDragAndDrop } from './hooks/use-drag-and-drop';
import { type DsTableContextType, DsTableContext } from './context/ds-table-context';
import { DsTableBodyVirtualized } from './components/ds-table-body-virtualized';
import { EMPTY_TABLE_STATE_TEXT } from './utils/constants';

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
	data: tableData,
	virtualized = false,
	virtualizedOptions,
	className,
	onRowClick,
	emptyState,
	stickyHeader = true,
	bordered = true,
	fullWidth = true,
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
	columnVisibility: externalColumnVisibility,
	onColumnVisibilityChange,
	activeRowId,
}: DsDataTableProps<TData, TValue>) => {
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

	const columnVisibility = externalColumnVisibility ?? internalColumnVisibility;
	const handleColumnVisibilityChange = (
		updaterOrValue: VisibilityState | ((old: VisibilityState) => VisibilityState),
	) => {
		const newVisibility =
			typeof updaterOrValue === 'function' ? updaterOrValue(columnVisibility) : updaterOrValue;

		if (onColumnVisibilityChange) {
			onColumnVisibilityChange(newVisibility);
		} else {
			setInternalColumnVisibility(newVisibility);
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
		onColumnFiltersChange: handleColumnFiltersChange, // TODO: looks like this is not used, since filters are handled from the outside
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: handleColumnVisibilityChange, // TODO: looks like this is not used, since visibility is handled from the outside
		onRowSelectionChange: handleRowSelectionChange,
		getRowId: (row) => row.id,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
		enableRowSelection: typeof selectable === 'function' ? (row) => selectable(row.original) : selectable,
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

	const renderEmptyState = () => (
		<TableRow>
			<TableCell
				colSpan={columns.length + (expandable ? 1 : 0) + (selectable ? 1 : 0)}
				className={styles.emptyState}
			>
				{emptyState || EMPTY_TABLE_STATE_TEXT}
			</TableCell>
		</TableRow>
	);

	const selectedRows = Object.entries(rowSelection)
		.filter(([, selected]) => selected)
		.map(([key]) => rowsById[key]?.original)
		.filter((v) => !!v);

	const contextValue: DsTableContextType<TData, TValue> = {
		stickyHeader,
		bordered,
		fullWidth,
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
		activeRowId,
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
					<Table
						className={classnames(
							fullWidth && styles.fullWidth,
							!bordered && styles.tableNoBorder,
							virtualized && styles.virtualized,
						)}
					>
						<DsTableHeader table={table} />
						{virtualized ? (
							<DsTableBodyVirtualized
								table={table}
								tableContainerRef={tableContainerRef}
								emptyState={emptyState}
								estimateSize={virtualizedOptions?.estimateSize || ROW_SIZE_HEIGHT_MAP[rowSize]}
								overscan={virtualizedOptions?.overscan}
								onScroll={onScroll}
							/>
						) : (
							<TableBody>
								<SortableWrapper>
									{rows.length
										? rows.map((row) => <DsTableRow key={row.id} row={row} />)
										: renderEmptyState()}
								</SortableWrapper>
							</TableBody>
						)}
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
