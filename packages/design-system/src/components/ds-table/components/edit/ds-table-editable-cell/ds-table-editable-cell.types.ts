import type { Cell } from '@tanstack/react-table';
import type { MouseEventHandler, ReactNode } from 'react';

export interface DsTableEditableCellProps<TData, TValue> {
	cell: Cell<TData, TValue>;
	children: ReactNode;
}

export interface DsTableEditableCellEditButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
}
