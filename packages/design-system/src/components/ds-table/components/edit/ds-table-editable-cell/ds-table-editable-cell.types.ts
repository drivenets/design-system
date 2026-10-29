import type { RowData } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import type { DsCell } from '../../../ds-table-features';

export interface DsTableEditableCellProps<TData extends RowData, TValue> {
	cell: DsCell<TData, TValue>;
	children: ReactNode;
}
