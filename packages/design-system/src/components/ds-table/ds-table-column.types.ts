import type { ReactNode } from 'react';
import type { CellContext, CellData, RowData, TableFeature, TableFeatures } from '@tanstack/react-table';

/**
 * Result of a column's `editDisabled` resolver for a single cell.
 *
 * - `false` (or `undefined`) keeps the cell editable.
 * - `true` locks the cell with no tooltip.
 * - `{ reason }` locks the cell and shows `reason` in a tooltip on hover.
 */
export type DsTableEditDisabledResult = boolean | { reason?: ReactNode };

// Method-typed like React's event handlers, so narrower-`TValue` callbacks fit value-agnostic defs.
type ColumnDefCallback<TContext, TResult> = { callback(context: TContext): TResult }['callback'];

export interface DsColumnDefExtras<
	TFeatures extends TableFeatures,
	TData extends RowData,
	TValue extends CellData,
> {
	/**
	 * Renders the cell editor when the cell enters edit mode.
	 * When omitted, the column is not editable.
	 */
	editCell?: ColumnDefCallback<CellContext<TFeatures, TData, TValue>, ReactNode>;

	/**
	 * Locks individual cells of an otherwise editable column (one that defines
	 * `editCell`). When this returns a truthy value for a cell, that cell shows a
	 * lock icon instead of the edit affordance and cannot enter edit mode. Return
	 * `{ reason }` to surface an optional tooltip explaining why. Has no effect on
	 * columns without `editCell`.
	 */
	editDisabled?: ColumnDefCallback<CellContext<TFeatures, TData, TValue>, DsTableEditDisabledResult>;

	/**
	 * Renders this column's cell content while the table is `loading`.
	 * When omitted, a default text skeleton is rendered.
	 */
	loadingCell?: ColumnDefCallback<CellContext<TFeatures, TData, TValue>, ReactNode>;
}

// `ColumnDefBase` is a type alias, so column-def fields are added through a feature map entry.
declare module '@tanstack/react-table' {
	interface Plugins {
		dsColumnDefFeature: TableFeature;
	}

	// eslint-disable-next-line @typescript-eslint/naming-convention -- TanStack's interface name.
	interface ColumnDef_FeatureMap<
		in out TFeatures extends TableFeatures,
		in out TData extends RowData,
		TValue extends CellData,
	> {
		dsColumnDefFeature: DsColumnDefExtras<TFeatures, TData, TValue>;
	}
}
