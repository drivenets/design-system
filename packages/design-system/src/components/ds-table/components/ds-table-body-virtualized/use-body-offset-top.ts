import { useLayoutEffect, useState, type RefObject } from 'react';

/**
 * Offset of the body from the top of its scroll container (the header height),
 * kept in sync while the header or table resizes (e.g. column groups, wrapping labels, borders).
 */
export const useBodyOffsetTop = (bodyRef: RefObject<HTMLTableSectionElement | null>): number => {
	const [offsetTop, setOffsetTop] = useState(0);

	useLayoutEffect(() => {
		const body = bodyRef.current;
		const table = body?.parentElement;
		if (!body || !table) {
			return;
		}

		const sync = () => setOffsetTop(body.offsetTop);
		sync();

		const resizeObserver = new ResizeObserver(sync);
		resizeObserver.observe(table);

		const header = table.querySelector('thead');
		if (header) {
			resizeObserver.observe(header);
		}

		return () => resizeObserver.disconnect();
	}, [bodyRef]);

	return offsetTop;
};
