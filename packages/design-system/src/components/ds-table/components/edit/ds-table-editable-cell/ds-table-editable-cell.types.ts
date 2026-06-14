import type { Cell } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export interface DsTableEditableCellProps<TData, TValue> {
	cell: Cell<TData, TValue>;
	children: ReactNode;
}
