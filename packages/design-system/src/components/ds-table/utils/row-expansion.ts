import type { RowData } from '@tanstack/react-table';
import type { DsRow } from '../ds-table-features';

// `toggleAllRowsExpanded(true)` marks every row expanded, including rows `expandable` excludes.
export const isRowExpanded = <TData extends RowData>(row: DsRow<TData>): boolean =>
	row.getCanExpand() && row.getIsExpanded();
