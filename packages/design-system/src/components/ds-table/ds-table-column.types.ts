import type { ReactNode } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';

/**
 * Result of a column's `editDisabled` resolver for a single cell.
 *
 * - `false` (or `undefined`) keeps the cell editable.
 * - `true` locks the cell with no tooltip.
 * - `{ reason }` locks the cell and shows `reason` in a tooltip on hover.
 */
export type DsTableEditDisabledResult = boolean | { reason?: ReactNode };

declare module '@tanstack/react-table' {
	interface ColumnDefBase<TData extends RowData, TValue> {
		/**
		 * Renders the cell editor when the cell enters edit mode.
		 * When omitted, the column is not editable.
		 */
		editCell?: (context: CellContext<TData, TValue>) => ReactNode;

		/**
		 * Locks individual cells of an otherwise editable column (one that defines
		 * `editCell`). When this returns a truthy value for a cell, that cell shows a
		 * lock icon instead of the edit affordance and cannot enter edit mode. Return
		 * `{ reason }` to surface an optional tooltip explaining why. Has no effect on
		 * columns without `editCell`.
		 */
		editDisabled?: (context: CellContext<TData, TValue>) => DsTableEditDisabledResult;

		/**
		 * Renders this column's cell content while the table is `loading`.
		 * When omitted, a default text skeleton is rendered.
		 */
		loadingCell?: (context: CellContext<TData, TValue>) => ReactNode;
	}
}
