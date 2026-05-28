import { type RefObject } from 'react';
import { type Row } from '@tanstack/react-table';
import { type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';

export interface DsTableRowVirtualizedProps<TData> {
	/**
	 * TanStack Table row model for this visual row.
	 */
	row: Row<TData>;
	/**
	 * Whether this row is currently part of the selection.
	 */
	isSelected: boolean;
	/**
	 * Shared ref that maps row ids to their rendered `<tr>` elements. The row
	 * registers itself here on mount so the virtualizer can measure heights and
	 * reference rows by id.
	 */
	rowsMapRef: RefObject<Map<string, HTMLTableRowElement>>;
	/**
	 * Shared ref that caches the measured height of each row by id, so the
	 * virtualizer can preserve layout across remounts.
	 */
	rowHeightsMapRef: RefObject<Map<string, number>>;
	/**
	 * TanStack virtualizer driving the scroll window for the table body.
	 */
	rowVirtualizer: Virtualizer<HTMLTableSectionElement, HTMLTableRowElement>;
	/**
	 * Virtual item descriptor for this row (index, start, size) from the virtualizer.
	 */
	virtualRow: VirtualItem;
	/**
	 * Whether this row renders expanded-row content (e.g., detail panel under the
	 * parent row) rather than a regular data row. Click handlers stop propagation
	 * when true to avoid triggering the parent's `onRowClick`.
	 * @default false
	 */
	isExpandedRowContent?: boolean;
}
