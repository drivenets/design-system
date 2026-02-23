import type { Row } from '@tanstack/react-table';

export interface DsTableRowExpandableCellProps<TData> {
	row: Row<TData>;
	className?: string;
	buttonClassName?: string;
}
