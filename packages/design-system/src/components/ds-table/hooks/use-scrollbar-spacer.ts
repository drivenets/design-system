import { useLayoutEffect, useState, type RefObject } from 'react';
import { SCROLLBAR_SPACER_WIDTH } from '../utils/constants';

export type ScrollbarSpacerWidth = 0 | typeof SCROLLBAR_SPACER_WIDTH;

const BODY_SCROLLBAR_COMPENSATION_CSS_VAR = '--ds-table-body-scrollbar-compensation';

const bodyOverflowsVertically = (body: HTMLElement): boolean => body.scrollHeight > body.clientHeight;

const verticalScrollbarOccupancy = (body: HTMLElement): number =>
	Math.max(0, body.offsetWidth - body.clientWidth);

/**
 * Extra `padding-inline-end` on body rows so Fill columns match the header
 * **Scrollbar spacer** when the vertical scrollbar occupies no layout (overlay).
 * Classic scrollbars already inset `clientWidth`; do not add that occupancy twice.
 */
export const getBodyScrollbarCompensation = (
	occupancyPx: number,
	spacerWidth: ScrollbarSpacerWidth,
): number => Math.max(0, spacerWidth - occupancyPx);

const syncBodyScrollbarCompensation = (
	container: HTMLElement,
	body: HTMLElement | null,
	spacerWidth: ScrollbarSpacerWidth,
): void => {
	if (!body) {
		container.style.removeProperty(BODY_SCROLLBAR_COMPENSATION_CSS_VAR);
		return;
	}

	container.style.setProperty(
		BODY_SCROLLBAR_COMPENSATION_CSS_VAR,
		`${String(getBodyScrollbarCompensation(verticalScrollbarOccupancy(body), spacerWidth))}px`,
	);
};

/**
 * Overflow-only **Scrollbar spacer** width: `SCROLLBAR_SPACER_WIDTH` while the
 * body scroll container overflows vertically, otherwise 0.
 *
 * Observes container/tbody size and tbody children (rows added/removed). Does
 * not watch `style` attributes — virtualized rows rewrite `transform` on scroll.
 */
export const useScrollbarSpacer = (
	containerRef: RefObject<HTMLElement | null>,
	overflowKey: number,
): ScrollbarSpacerWidth => {
	const [width, setWidth] = useState<ScrollbarSpacerWidth>(0);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const read = () => {
			const body = container.querySelector('tbody');
			if (!(body instanceof HTMLElement)) {
				setWidth(0);
				syncBodyScrollbarCompensation(container, null, 0);
				return;
			}

			const nextWidth = bodyOverflowsVertically(body) ? SCROLLBAR_SPACER_WIDTH : 0;
			setWidth(nextWidth);
			syncBodyScrollbarCompensation(container, body, nextWidth);
		};

		const resizeObserver = new ResizeObserver(read);
		const bodyChildObserver = new MutationObserver(read);
		resizeObserver.observe(container);

		let observedBody: HTMLElement | null = null;

		const bindBody = () => {
			const body = container.querySelector('tbody');
			if (!(body instanceof HTMLElement) || body === observedBody) {
				return;
			}

			bodyChildObserver.disconnect();
			observedBody = body;
			resizeObserver.observe(body);
			bodyChildObserver.observe(body, { childList: true });
			read();
		};

		bindBody();
		read();

		const table = container.querySelector('table');
		const tableChildObserver = new MutationObserver(bindBody);
		if (table) {
			tableChildObserver.observe(table, { childList: true });
		}

		return () => {
			resizeObserver.disconnect();
			bodyChildObserver.disconnect();
			tableChildObserver.disconnect();
			container.style.removeProperty(BODY_SCROLLBAR_COMPENSATION_CSS_VAR);
		};
	}, [containerRef, overflowKey]);

	return width;
};
