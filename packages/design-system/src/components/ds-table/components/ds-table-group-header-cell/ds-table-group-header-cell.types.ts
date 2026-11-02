import type { Header } from '@tanstack/react-table';

/**
 * Props for the grouping column header cell.
 */
export interface DsTableGroupHeaderCellProps<TData, TValue> {
	/**
	 * The grouping header from `@tanstack/react-table` (a header whose column nests
	 * child columns).
	 */
	header: Header<TData, TValue>;
	/**
	 * Leaf column ids that start at a group boundary, from `getGroupBoundaryColumnIds`.
	 */
	groupBoundaryIds: ReadonlySet<string>;
}
