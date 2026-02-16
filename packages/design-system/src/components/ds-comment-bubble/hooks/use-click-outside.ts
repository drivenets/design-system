import { useEffect, type RefObject } from 'react';

export const useClickOutside = (
	ref: RefObject<HTMLElement | null>,
	onClickOutside: (() => void) | undefined,
	enabled: boolean = true,
): void => {
	useEffect(() => {
		if (!enabled || !onClickOutside) {
			return;
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [ref, onClickOutside, enabled]);
};
