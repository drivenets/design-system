import { useEffect, type RefObject } from 'react';

const MAX_TEXTAREA_HEIGHT = 480;

export const useAutoResize = (ref: RefObject<HTMLTextAreaElement | null>, value: string): void => {
	useEffect(() => {
		const textarea = ref.current;
		if (!textarea) {
			return;
		}

		textarea.style.height = 'auto';
		textarea.style.height = `${String(Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT))}px`;
	}, [ref, value]);
};
