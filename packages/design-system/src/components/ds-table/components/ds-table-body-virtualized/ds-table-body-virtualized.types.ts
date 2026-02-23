import type { Table } from '@tanstack/react-table';

export interface DsTableBodyVirtualizedProps<TData> {
	table: Table<TData>;
	tableContainerRef: React.RefObject<HTMLDivElement | null>;
	emptyState?: React.ReactNode;
	estimateSize: number;
	overscan?: number;
	onScroll?: (params: ScrollParams) => void;
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
}
