import '@tanstack/react-table';
import type { ColumnFilterMeta, ResolvedColumnFilter } from './filter-adapter.types';

/**
 * Adds `column.meta.filter`. Consumers set `ColumnFilterMeta`;
 * `useTableFilters` swaps it for `ResolvedColumnFilter` on `enhancedColumns`
 * so the header can render the trigger + popover. The header narrows the
 * union by checking for `render`.
 */
declare module '@tanstack/react-table' {
	// `TData` / `TValue` must mirror the original `ColumnMeta` signature for
	// the augmentation to merge.
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ColumnMeta<TData, TValue> {
		filter?: ColumnFilterMeta | ResolvedColumnFilter;
	}
}

export {};
