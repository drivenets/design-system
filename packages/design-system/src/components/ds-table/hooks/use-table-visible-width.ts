import { useLayoutEffect, type RefObject } from 'react';

const VISIBLE_WIDTH_CSS_VAR = '--ds-table-visible-width';

/**
 * Syncs the scroll container's visible width to `--ds-table-visible-width`, so
 * the sticky empty body and expanded-row content fit the visible area instead
 * of the full horizontally-scrollable column track. `clientWidth` excludes the
 * vertical scrollbar, which lives in the same container.
 */
export const useTableVisibleWidth = (containerRef: RefObject<HTMLElement | null>): void => {
	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		let syncedWidth: number | null = null;

		const sync = () => {
			const width = container.clientWidth;
			if (width === syncedWidth) {
				return;
			}

			syncedWidth = width;
			container.style.setProperty(VISIBLE_WIDTH_CSS_VAR, `${String(width)}px`);
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
