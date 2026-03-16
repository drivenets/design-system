import { type RefObject, type ReactNode } from 'react';
import { type RowSelectionState, type Table } from '@tanstack/react-table';

export interface DsTableBodyVirtualizedProps<TData> {
	table: Table<TData>;
	tableContainerRef: RefObject<HTMLDivElement | null>;
	emptyState?: ReactNode;
	estimateSize: number;
	overscan?: number;
	onScroll?: (params: ScrollParams) => void;
	rowSelection: RowSelectionState;
}

/**
 * Parameters passed to the onScroll callback in virtualized tables.
 */
export interface ScrollParams {
	/** The current vertical scroll position from the top of the scrollable content (in pixels) */
	scrollOffset: number;
	/** The total height of all content in the virtualized table (in pixels) */
	totalContentHeight: number;
	/** The visible height of the table container (in pixels) */
	viewportHeight: number;
	/** The distance from the current scroll position to the bottom of the content (in pixels) */
	bottomOffset: number;
	/** The direction of the scroll movement */
	scrollDirection: 'forward' | 'backward' | null;
}
