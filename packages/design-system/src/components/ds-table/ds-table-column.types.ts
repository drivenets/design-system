import type { ReactNode } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
	interface ColumnDefBase<TData extends RowData, TValue> {
		/**
		 * Renders the cell editor when the cell enters edit mode.
		 * When omitted, the column is not editable.
		 */
		editCell?: (context: CellContext<TData, TValue>) => ReactNode;
	}
}
