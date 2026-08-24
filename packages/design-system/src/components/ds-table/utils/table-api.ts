import type { Table } from '@tanstack/react-table';
import type { DsTableApi } from '../ds-table.types';

export const createTableApi = <TData>(table: Table<TData>): DsTableApi<TData> => ({
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
});
