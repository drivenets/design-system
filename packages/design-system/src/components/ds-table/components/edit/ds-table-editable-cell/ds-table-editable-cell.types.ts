import type { Cell, RowData } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import type { DsTableFeatures } from '../../../ds-table-features';

export interface DsTableEditableCellProps<TData extends RowData, TValue> {
	cell: Cell<DsTableFeatures, TData, TValue>;
	children: ReactNode;
}
