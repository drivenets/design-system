import { useEffect, type RefObject } from 'react';

export const useAutoResize = (
	ref: RefObject<HTMLTextAreaElement | null>,
	value: string,
	maxHeight: number = 480,
): void => {
	useEffect(() => {
		const textarea = ref.current;
		if (!textarea) {
			return;
		}

		textarea.style.height = 'auto';
		textarea.style.height = `${String(Math.min(textarea.scrollHeight, maxHeight))}px`;
	}, [ref, value, maxHeight]);
};
