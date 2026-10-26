import type { Table, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

export interface DsTableColumnDisplayProps<TData extends RowData> {
	/**
	 * TanStack Table instance. Supplies the column tree and applies visibility
	 * changes through the table's `onColumnVisibilityChange`.
	 */
	table: Table<DsTableFeatures, TData>;
}

export type ColumnDisplayCheckedState = boolean | 'indeterminate';

/**
 * One row of the column display list: a leaf column or a column group.
 */
export interface ColumnDisplayNode {
	id: string;
	label: string;
	/**
	 * Leaf column ids the row toggles: the leaf itself, or a group's descendant
	 * leaves. Leaves with `enableHiding: false` are left out.
	 */
	leafIdsToToggle: string[];
	checked: ColumnDisplayCheckedState;
	/**
	 * Nothing to toggle, so the row renders checked, disabled, and with a lock.
	 */
	locked: boolean;
	children: ColumnDisplayNode[];
}

export type ColumnDisplayToggleTarget = Pick<ColumnDisplayNode, 'leafIdsToToggle' | 'checked' | 'locked'>;
