import { useLayoutEffect, useState, type RefObject } from 'react';
import { SCROLLBAR_SPACER_WIDTH } from '../utils/constants';

export type ScrollbarSpacerWidth = 0 | typeof SCROLLBAR_SPACER_WIDTH;

const bodyOverflowsVertically = (body: HTMLElement): boolean => body.scrollHeight > body.clientHeight;

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
				return;
			}

			setWidth(bodyOverflowsVertically(body) ? SCROLLBAR_SPACER_WIDTH : 0);
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
		};
	}, [containerRef, overflowKey]);

	return width;
};
