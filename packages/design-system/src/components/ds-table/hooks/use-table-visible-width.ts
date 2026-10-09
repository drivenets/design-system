import { useLayoutEffect, type RefObject } from 'react';

const VISIBLE_WIDTH_CSS_VAR = '--ds-table-visible-width';

/**
 * Syncs the scroll container's visible width to `--ds-table-visible-width`, so
 * the sticky empty body centers the Empty state on screen instead of across the
 * full horizontally-scrollable column track. Computed width keeps the sub-pixel
 * precision that `clientWidth` rounds away.
 */
export const useTableVisibleWidth = (containerRef: RefObject<HTMLElement | null>): void => {
	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		let syncedWidth: string | null = null;

		const sync = () => {
			const width = getComputedStyle(container).width;
			if (width === syncedWidth) {
				return;
			}

			syncedWidth = width;
			container.style.setProperty(VISIBLE_WIDTH_CSS_VAR, width);
		};

		sync();

		const resizeObserver = new ResizeObserver(sync);
		resizeObserver.observe(container);

		return () => {
			resizeObserver.disconnect();
			container.style.removeProperty(VISIBLE_WIDTH_CSS_VAR);
		};
	}, [containerRef]);
};
