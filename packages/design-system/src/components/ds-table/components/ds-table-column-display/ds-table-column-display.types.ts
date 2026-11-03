import type { Table } from '@tanstack/react-table';
import type { DsTreeNode } from '../../../ds-tree';

export interface DsTableColumnDisplayProps<TData> {
	/**
	 * TanStack Table instance. Supplies the column tree and applies visibility
	 * changes through the table's `onColumnVisibilityChange`.
	 */
	table: Table<TData>;
}

export type ColumnDisplayCheckedState = boolean | 'indeterminate';

/** One row of the column display tree: a leaf column or a column group. */
export interface ColumnDisplayNode extends DsTreeNode {
	leafIds: string[];
	/** `leafIds` without the `enableHiding: false` ones. */
	leafIdsToToggle: string[];
	locked: boolean;
	// A group is sticky when any one of its leaves is
	sticky: boolean;
	children?: ColumnDisplayNode[];
}

export type ColumnDisplayToggleTarget = Pick<ColumnDisplayNode, 'leafIdsToToggle' | 'locked'> & {
	checked: ColumnDisplayCheckedState;
};
