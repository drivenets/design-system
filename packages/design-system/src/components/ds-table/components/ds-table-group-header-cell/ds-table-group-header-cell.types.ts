import type { RowData } from '@tanstack/react-table';
import type { DsHeader } from '../../ds-table-features';

/**
 * Props for the grouping column header cell.
 */
export interface DsTableGroupHeaderCellProps<TData extends RowData, TValue> {
	/**
	 * The grouping header from `@tanstack/react-table` (a header whose column nests
	 * child columns).
	 */
	header: DsHeader<TData, TValue>;
}
