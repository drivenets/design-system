import { createContext, useContext } from 'react';
import { DataTableProps } from '@design-system/ui';

export interface DsTableContextType<TData, TValue> extends Partial<DataTableProps<TData, TValue>> {
	expandedRows: Record<string, boolean>;
	toggleRowExpanded: (rowId: string) => void;
}

export const DsTableContext = createContext<DsTableContextType<any, any> | undefined>(undefined);

export const useDsTableContext = <TData, TValue>(): DsTableContextType<TData, TValue> => {
	const context = useContext(DsTableContext);
	if (!context) {
		throw new Error('useDsTableContext must be used within DsTable');
	}
	return context as DsTableContextType<TData, TValue>;
};
