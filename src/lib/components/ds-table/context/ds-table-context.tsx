import { createContext, useContext } from 'react';
import type { DsDataTableProps, DsTableRowSize } from '../ds-table.types';

export interface DsTableContextType<TData, TValue> extends Partial<DsDataTableProps<TData, TValue>> {
	/**
	 * The expanded rows
	 */
	expandedRows: Record<string, boolean>;
	/**
	 * Toggle the expanded state of a row
	 * @param rowId - The id of the row to toggle
	 */
	toggleRowExpanded: (rowId: string) => void;
	/**
	 * Whether the table is virtualized
	 * @default false
	 */
	virtualized?: boolean;
	/**
	 * Row size variant
	 * @default 'medium'
	 */
	rowSize: DsTableRowSize;
	/**
	 * ID of the currently active row
	 */
	activeRowId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DsTableContext = createContext<DsTableContextType<any, any> | null>(null);

export const useDsTableContext = <TData, TValue>(): DsTableContextType<TData, TValue> => {
	const context = useContext(DsTableContext);
	if (!context) {
		throw new Error('useDsTableContext must be used within DsTable');
	}
	return context;
};
