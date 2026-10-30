import type { RowData, RowSelectionState } from '@tanstack/react-table';
import type { DsTableApi } from '../ds-table.types';
import type { DsTableInstance } from '../ds-table-features';

export const createTableApi = <TData extends RowData>(table: DsTableInstance<TData>): DsTableApi<TData> => ({
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
		const selection: RowSelectionState = {};
		rowIds.forEach((id) => (selection[id] = true));
		table.setRowSelection(selection);
	},
	getSelectedRows: () => {
		return table.getFilteredSelectedRowModel().rows.map((r) => r.original);
	},
	expandRow: (rowId: string) => {
		table.getRow(rowId).toggleExpanded(true);
	},
	collapseRow: (rowId: string) => {
		table.getRow(rowId).toggleExpanded(false);
	},
	expandAllRows: () => {
		table.toggleAllRowsExpanded(true);
	},
	collapseAllRows: () => {
		table.toggleAllRowsExpanded(false);
	},
	expandRows: (rowIds: string[]) => {
		const expansion: Record<string, boolean> = {};
		rowIds.forEach((id) => (expansion[id] = true));
		table.setExpanded(expansion);
	},
	getExpandedRowIds: () => {
		return table
			.getCoreRowModel()
			.flatRows.filter((row) => row.getCanExpand() && row.getIsExpanded())
			.map((row) => row.id);
	},
});
