import type { Row } from '@tanstack/react-table';

export interface DsTableRowSelectableCellProps<TData> {
	row: Row<TData>;
	className?: string;
}
