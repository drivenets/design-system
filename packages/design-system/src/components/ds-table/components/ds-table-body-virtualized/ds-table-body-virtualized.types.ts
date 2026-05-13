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
	/**
	 * Optional infinite-scroll configuration. When provided, the body requests
	 * `onLoadMore` as the user nears the bottom of the scroll container and
	 * runs an auto-fill loop until the viewport becomes scrollable.
	 */
	infiniteScroll?: InfiniteScrollConfig;
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

/**
 * Configuration for infinite scroll on a virtualized table.
 *
 * The Table is responsible for detecting when more rows should be requested
 * (proximity to the bottom of the scroll container, and the auto-fill loop
 * when the rendered content does not fill the viewport). The consumer is
 * responsible for fetching, pagination cursors, error handling, retry, and
 * for reflecting loading state back via `isLoadingMore`.
 */
export interface InfiniteScrollConfig {
	/**
	 * Whether more rows can be loaded. When `false`, no further `onLoadMore`
	 * calls are made. Flip this off when the end of the data set is reached.
	 */
	hasMore: boolean;

	/**
	 * Called when the Table wants the next page of rows. May be synchronous or
	 * return a `Promise` (e.g. pass an async fetcher such as React Query's
	 * `fetchNextPage` directly); the Table does not await the return value.
	 * Reflect the loading state via `isLoadingMore` so the Table can guard
	 * against duplicate calls.
	 */
	onLoadMore: (() => void) | (() => Promise<unknown>);

	/**
	 * Whether a fetch is currently in flight. While `true`, the Table will not
	 * call `onLoadMore` again. Set this synchronously inside your handler (or
	 * track it with a state hook flipped before the fetch starts) if
	 * `onLoadMore` is not idempotent and you need one-call-per-page semantics;
	 * consumers using idempotent fetchers (e.g. React Query's `fetchNextPage`)
	 * can safely leave this unset.
	 *
	 * @default false
	 */
	isLoadingMore?: boolean;

	/**
	 * Distance in pixels from the bottom of the scroll container at which
	 * `onLoadMore` is requested.
	 *
	 * @default 500
	 */
	thresholdPx?: number;

	/**
	 * When `true`, the Table will continue to request more rows as long as the
	 * rendered content does not fill the viewport (so the user can actually
	 * start scrolling). Disable only when you want strictly user-driven loading.
	 *
	 * @default true
	 */
	autoFill?: boolean;
}
