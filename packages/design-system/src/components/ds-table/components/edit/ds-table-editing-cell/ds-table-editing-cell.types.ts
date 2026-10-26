import type { Cell, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../../ds-table-features';

export interface DsTableEditingCellProps<TData extends RowData, TValue> {
	cell: Cell<DsTableFeatures, TData, TValue>;
}
