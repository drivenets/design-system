import { useLayoutEffect, useEffect, useRef } from 'react';

export const useScrollToSelected = (value: unknown, open: boolean) => {
	const columnRef = useRef<HTMLDivElement | null>(null);
	const selectedRef = useRef<HTMLButtonElement | null>(null);

	useLayoutEffect(() => {
		const column = columnRef.current;
		const selected = selectedRef.current;

		if (!column || !selected) {
			return;
		}

		scrollToCenter(column, selected, 'smooth');
	}, [value]);

	useEffect(() => {
		if (!open) {
			return;
		}

		// Ark UI removes `display: none` from Popover.Content after React's commit phase,
		// so layout measurements are only valid after the browser has painted.
		requestAnimationFrame(() => {
			const column = columnRef.current;
			const selected = selectedRef.current;

			if (!column || !selected) {
				return;
			}

			scrollToCenter(column, selected, 'instant');
		});
	}, [open]);

	return { columnRef, selectedRef };
};

const scrollToCenter = (column: HTMLDivElement, selected: HTMLButtonElement, behavior: ScrollBehavior) => {
	const columnCenter = column.offsetHeight / 2;
	const itemCenter = selected.offsetTop + selected.offsetHeight / 2;
	column.scrollTo({ top: itemCenter - columnCenter, behavior });
};
