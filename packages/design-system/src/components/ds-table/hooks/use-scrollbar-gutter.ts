import { useLayoutEffect, useState, type RefObject } from 'react';
import { SCROLLBAR_GUTTER_WIDTH } from '../utils/constants';

const SCROLLBAR_GUTTER_PADDING_CSS_VAR = '--ds-table-scrollbar-gutter';

const verticalScrollbarOccupancy = (container: HTMLElement): number =>
	Math.max(0, container.offsetWidth - container.clientWidth);

const getGutterPadding = (container: HTMLElement): number =>
	parseFloat(container.style.getPropertyValue(SCROLLBAR_GUTTER_PADDING_CSS_VAR)) || 0;

/**
 * Row padding that completes the gutter when the scrollbar takes less layout
 * space than `gutterWidth` (overlay or hidden: all of it; classic: none).
 */
export const getScrollbarGutterPadding = (gutterWidth: number, scrollbarOccupancy: number): number =>
	Math.max(0, gutterWidth - scrollbarOccupancy);

/**
 * Width the column track can fill: the scroll container's content box minus
 * the gutter padding rows keep for a scrollbar that takes no layout space.
 */
export const getColumnTrackWidth = (container: HTMLElement): number =>
	container.clientWidth - getGutterPadding(container);

/**
 * Width currently reserved at the inline end for the vertical scrollbar:
 * what a classic scrollbar occupies plus the gutter padding.
 */
export const getReservedScrollbarWidth = (container: HTMLElement): number =>
	verticalScrollbarOccupancy(container) + getGutterPadding(container);

/**
 * Keeps `SCROLLBAR_GUTTER_WIDTH` free at the inline end of the rows while the
 * table overflows vertically. A classic scrollbar fills the gutter itself; an
 * overlay or hidden one gets the rest as row padding via
 * `--ds-table-scrollbar-gutter`. Returns the reserved width: scrollbar
 * occupancy plus padding (at least `SCROLLBAR_GUTTER_WIDTH` while overflowing).
 */
export const useScrollbarGutter = (containerRef: RefObject<HTMLElement | null>): number => {
	const [reservedWidth, setReservedWidth] = useState(0);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const sync = () => {
			const gutter = container.scrollHeight > container.clientHeight ? SCROLLBAR_GUTTER_WIDTH : 0;
			const occupancy = verticalScrollbarOccupancy(container);
			const padding = getScrollbarGutterPadding(gutter, occupancy);

			container.style.setProperty(SCROLLBAR_GUTTER_PADDING_CSS_VAR, `${String(padding)}px`);
			setReservedWidth(occupancy + padding);
		};

		sync();

		// Rows added or removed change the table height; a scrollbar appearing or
		// disappearing changes the container's content box.
		const resizeObserver = new ResizeObserver(sync);
		resizeObserver.observe(container);

		const table = container.querySelector('table');
		if (table) {
			resizeObserver.observe(table);
		}

		return () => {
			resizeObserver.disconnect();
			container.style.removeProperty(SCROLLBAR_GUTTER_PADDING_CSS_VAR);
		};
	}, [containerRef]);

	return reservedWidth;
};
