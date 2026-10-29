import type { RowData } from '@tanstack/react-table';
import type { DsCell } from '../../../ds-table-features';

export interface DsTableEditingCellProps<TData extends RowData, TValue> {
	cell: DsCell<TData, TValue>;
}
