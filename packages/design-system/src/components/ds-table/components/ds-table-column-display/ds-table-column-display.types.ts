import type { Table } from '@tanstack/react-table';

export interface DsTableColumnDisplayProps<TData> {
	/**
	 * TanStack Table instance. Supplies the column tree and applies visibility
	 * changes through the table's `onColumnVisibilityChange`.
	 */
	table: Table<TData>;
}

export type ColumnDisplayCheckedState = boolean | 'indeterminate';

/**
 * One row of the column display list: a leaf column or a column group.
 */
export interface ColumnDisplayNode {
	id: string;
	label: string;
	/**
	 * Leaf column ids the row toggles. A hideable leaf lists itself; a group lists
	 * its hideable descendants. Empty when every leaf has `enableHiding: false`.
	 */
	hideableLeafIds: string[];
	checked: ColumnDisplayCheckedState;
	/**
	 * No hideable leaves, so the row renders checked, disabled, and with a lock.
	 */
	locked: boolean;
	children: ColumnDisplayNode[];
}

export type ColumnDisplayToggleTarget = Pick<ColumnDisplayNode, 'hideableLeafIds' | 'checked' | 'locked'>;
