import { type RefObject, type ReactNode } from 'react';
import { type RowSelectionState, type Table } from '@tanstack/react-table';

export interface DsTableBodyVirtualizedProps<TData> {
	/**
	 * TanStack Table instance driving the body. Provides row models, visible rows,
	 * and column state.
	 */
	table: Table<TData>;
	/**
	 * Ref to the scrollable container that hosts the virtualized rows. Required by
	 * the virtualizer to measure viewport size and listen for scroll events.
	 */
	tableContainerRef: RefObject<HTMLDivElement | null>;
	/**
	 * Optional content rendered in place of rows when the table has no data.
	 */
	emptyState?: ReactNode;
	/**
	 * Initial estimated row height in pixels. Used before actual rows are measured
	 * to compute the virtual scroll size.
	 */
	estimateSize: number;
	/**
	 * Number of rows to render above and below the visible viewport to reduce
	 * flicker during fast scrolling.
	 * @default 5
	 */
	overscan?: number;
	/**
	 * Called on every scroll event with the current scroll metrics. Useful for
	 * infinite-scroll hooks and scroll-position indicators.
	 */
	onScroll?: (params: ScrollParams) => void;
	/**
	 * Current row selection state from TanStack Table. Used to style selected rows.
	 */
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
