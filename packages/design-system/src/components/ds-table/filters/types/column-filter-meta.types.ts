import type { ColumnFilterMeta, ResolvedColumnFilter } from './filter-adapter.types';

/**
 * Adds `column.meta.filter`. Consumers set `ColumnFilterMeta`;
 * `useTableFilters` swaps it for `ResolvedColumnFilter` on `enhancedColumns`
 * so the header can render the trigger + popover. The header narrows the
 * union by checking for `render`.
 */
export interface DsColumnFilteringMeta {
	filter?: ColumnFilterMeta | ResolvedColumnFilter;
}
