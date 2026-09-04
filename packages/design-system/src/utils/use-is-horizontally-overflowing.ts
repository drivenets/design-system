import { useEffect, useState } from 'react';

export const useIsHorizontallyOverflowing = <T extends HTMLElement = HTMLElement>(content?: string) => {
	const [element, setElement] = useState<T | null>(null);
	const [measuredOverflow, setMeasuredOverflow] = useState(false);

	useEffect(() => {
		if (!element || !content) {
			return;
		}

		const measure = () => {
			setMeasuredOverflow(element.scrollWidth > element.clientWidth);
		};

		measure();

		const resizeObserver = new ResizeObserver(measure);
		resizeObserver.observe(element);

		// document.fonts is missing in jsdom; `'fonts' in document` (not optional chaining) satisfies TS.
		const fonts = 'fonts' in document ? document.fonts : undefined;
		fonts?.addEventListener('loadingdone', measure);

		return () => {
			resizeObserver.disconnect();
			fonts?.removeEventListener('loadingdone', measure);
		};
	}, [content, element]);

	return {
		ref: setElement,
		isOverflowing: Boolean(content) && measuredOverflow,
	};
};
