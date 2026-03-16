import type { Row } from '@tanstack/react-table';

export interface DsTableRowSelectableCellProps<TData> {
	row: Row<TData>;
	isSelected: boolean;
	className?: string;
}
