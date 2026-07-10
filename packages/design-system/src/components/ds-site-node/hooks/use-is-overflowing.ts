import { useLayoutEffect, useRef, useState } from 'react';

export const useIsOverflowing = <T extends HTMLElement = HTMLElement>(text: string | undefined) => {
	const ref = useRef<T>(null);
	const [isOverflowing, setIsOverflowing] = useState(false);

	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) {
			return;
		}

		const measure = () => setIsOverflowing(element.scrollWidth > element.clientWidth);
		measure();

		const observer = new ResizeObserver(measure);
		observer.observe(element);

		const frame = requestAnimationFrame(measure);
		document.fonts.ready.then(measure).catch(() => undefined);
		document.fonts.addEventListener('loadingdone', measure);

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			document.fonts.removeEventListener('loadingdone', measure);
		};
	}, [text]);

	return { ref, isOverflowing };
};
