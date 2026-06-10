import { useEffect, type RefObject } from 'react';
import type { InfiniteScrollConfig } from './ds-table-body-virtualized.types';

const DEFAULT_THRESHOLD_PX = 500;
const DEFAULT_AUTO_FILL = true;

interface UseInfiniteScrollResult {
	/**
	 * Evaluates the current scroll position and, if appropriate, calls
	 * `onLoadMore`. Safe to call from scroll/`onChange` handlers and effects.
	 */
	loadDataIfNeeded: () => void;
}

/**
 * Owns the infinite-scroll trigger logic for `DsTable`:
 * threshold detection and the auto-fill loop for short initial pages.
 */
export const useInfiniteScroll = (
	scrollElementRef: RefObject<HTMLElement | null>,
	rowCount: number,
	config: InfiniteScrollConfig | undefined,
): UseInfiniteScrollResult => {
	const hasMore = config?.hasMore ?? false;
	const isLoadingMore = config?.isLoadingMore ?? false;
	const thresholdPx = config?.thresholdPx ?? DEFAULT_THRESHOLD_PX;
	const autoFill = config?.autoFill ?? DEFAULT_AUTO_FILL;

	const loadDataIfNeeded = () => {
		const el = scrollElementRef.current;

		if (!config || !hasMore || isLoadingMore || !el) {
			return;
		}

		const isScrollable = el.scrollHeight > el.clientHeight;
		const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
		const isNearBottom = isScrollable && distanceToBottom <= thresholdPx;
		const isNotScrollable = autoFill && !isScrollable;

		if (isNearBottom || isNotScrollable) {
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
