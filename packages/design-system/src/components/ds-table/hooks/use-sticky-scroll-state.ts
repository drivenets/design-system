import { useLayoutEffect, type RefObject } from 'react';

const SCROLL_EPSILON_PX = 1;

/**
 * Toggles `data-overflow-left` / `data-overflow-right` on the scroll container
 * while content sits under the left / right sticky columns, so the edge
 * dividers show only then. Writes attributes directly to avoid a React render
 * per scroll frame.
 *
 * Left sticky columns sit at the inline start (the right edge in RTL). In RTL
 * `scrollLeft` runs from 0 to negative values, so the distance scrolled from
 * the start is its absolute value.
 */
export const useStickyScrollState = (containerRef: RefObject<HTMLElement | null>): void => {
	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const sync = () => {
			const maxScroll = Math.max(container.scrollWidth - container.clientWidth, 0);
			const scrolledFromStart = Math.min(Math.abs(container.scrollLeft), maxScroll);

			container.toggleAttribute('data-overflow-left', scrolledFromStart > SCROLL_EPSILON_PX);
			container.toggleAttribute('data-overflow-right', maxScroll - scrolledFromStart > SCROLL_EPSILON_PX);
		};

		sync();

		container.addEventListener('scroll', sync, { passive: true });
		const resizeObserver = new ResizeObserver(sync);
		resizeObserver.observe(container);

		const table = container.querySelector('table');
		if (table) {
			resizeObserver.observe(table);
		}

		// Icon ligatures render as wide text until their font loads, overflowing the
		// last cell without resizing any observed box; re-measure once fonts settle.
		document.fonts.addEventListener('loadingdone', sync);

		return () => {
			container.removeEventListener('scroll', sync);
			resizeObserver.disconnect();
			document.fonts.removeEventListener('loadingdone', sync);
		};
	}, [containerRef]);
};
