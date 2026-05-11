import { useEffect, useRef, type RefObject } from 'react';
import type { InfiniteScrollConfig } from './ds-table-body-virtualized.types';

const DEFAULT_THRESHOLD_PX = 500;
const DEFAULT_AUTO_FILL = true;

interface UseInfiniteScrollResult {
	/**
	 * Evaluates the current scroll position and, if appropriate, calls
	 * `onLoadMore`. Safe to call from scroll/`onChange` handlers and layout
	 * effects; internal guards prevent duplicate fires.
	 */
	loadDataIfNeeded: () => void;
}

/**
 * Owns the infinite-scroll trigger logic for `DsTableBodyVirtualized`:
 * threshold detection, the auto-fill loop when the viewport is not yet
 * scrollable, and an in-flight latch that closes the 1\u20132 frame window
 * between calling `onLoadMore` and the consumer's `isLoadingMore` flipping
 * to `true`.
 *
 * The consumer continues to own data fetching, pagination state, errors,
 * and retry.
 */
export const useInfiniteScroll = (
	scrollElementRef: RefObject<HTMLElement | null>,
	rowCount: number,
	config: InfiniteScrollConfig | undefined,
): UseInfiniteScrollResult => {
	const inFlightRef = useRef(false);

	const hasMore = config?.hasMore ?? false;
	const isLoadingMore = config?.isLoadingMore ?? false;
	const thresholdPx = config?.thresholdPx ?? DEFAULT_THRESHOLD_PX;
	const autoFill = config?.autoFill ?? DEFAULT_AUTO_FILL;

	useEffect(() => {
		if (isLoadingMore) {
			inFlightRef.current = false;
		}
	}, [isLoadingMore]);

	const loadDataIfNeeded = () => {
		if (!config) {
			return;
		}
		if (!hasMore) {
			return;
		}
		if (isLoadingMore) {
			return;
		}
		if (inFlightRef.current) {
			return;
		}

		const el = scrollElementRef.current;
		if (!el) {
			return;
		}

		const isScrollable = el.scrollHeight > el.clientHeight;
		const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
		const isNearBottom = isScrollable && distanceToBottom <= thresholdPx;
		const isNotScrollable = autoFill && !isScrollable;

		if (isNearBottom || isNotScrollable) {
			inFlightRef.current = true;
			void config.onLoadMore();
		}
	};

	useEffect(() => {
		loadDataIfNeeded();
		// loadDataIfNeeded reads the latest config values from closure; deps cover
		// the meaningful inputs (data growth, hasMore, loading state).
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rowCount, hasMore, isLoadingMore]);

	return { loadDataIfNeeded };
};
