import { useState, useLayoutEffect, type RefObject } from 'react';

export const useScrollOverflow = (ref: RefObject<HTMLElement | null>, dependency: number): boolean => {
	const [hasOverflow, setHasOverflow] = useState(false);

	useLayoutEffect(() => {
		const container = ref.current;
		if (!container) {
			return;
		}

		const checkOverflow = () => {
			const isOverflowing = container.scrollHeight > container.clientHeight;
			const isScrolled = container.scrollTop > 0;
			setHasOverflow(isOverflowing && isScrolled);
		};

		checkOverflow();
		container.addEventListener('scroll', checkOverflow, { passive: true });

		return () => {
			container.removeEventListener('scroll', checkOverflow);
		};
	}, [ref, dependency]);

	return hasOverflow;
};
