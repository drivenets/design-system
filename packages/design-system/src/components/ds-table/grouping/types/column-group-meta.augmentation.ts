import '@tanstack/react-table';
import type { DsColumnGroupMeta } from './column-group.types';

/**
 * Adds grouping fields to `column.meta`:
 * - `group` on a grouping column def (one that nests `columns`) configures the
 *   group header and its collapse behavior.
 * - `keepVisibleWhenCollapsed` on a leaf column keeps it visible while its parent
 *   group is collapsed.
 */
declare module '@tanstack/react-table' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ColumnMeta<TData, TValue> {
		group?: DsColumnGroupMeta;
		keepVisibleWhenCollapsed?: boolean;
	}
}

export {};
