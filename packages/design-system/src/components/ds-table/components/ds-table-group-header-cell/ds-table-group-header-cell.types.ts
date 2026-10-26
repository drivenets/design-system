import type { Header, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Props for the grouping column header cell.
 */
export interface DsTableGroupHeaderCellProps<TData extends RowData, TValue> {
	/**
	 * The grouping header from `@tanstack/react-table` (a header whose column nests
	 * child columns).
	 */
	header: Header<DsTableFeatures, TData, TValue>;
}
