import { useEffect, type RefObject } from 'react';

const OVERLAY_SCOPES = '[data-scope="popover"], [data-scope="menu"], [data-scope="dialog"]';

const isPickerDismissTarget = (event: Event, triggerEl: HTMLElement | null) => {
	const path = event.composedPath();

	if (triggerEl && path.includes(triggerEl)) {
		return true;
	}

	return path.some((node) => node instanceof Element && Boolean(node.closest(OVERLAY_SCOPES)));
};

/**
 * Closes the picker on a real outside pointer.
 * Ark interact-outside is suppressed so portaled menus/dialogs stay usable;
 * this restores dismiss without treating those layers as outside.
 */
export const usePickerOutsideDismiss = (
	enabled: boolean,
	triggerEl: RefObject<HTMLElement | null>,
	onDismiss: () => void,
) => {
	useEffect(() => {
		if (!enabled) {
			return;
		}

		const onPointerDown = (event: PointerEvent) => {
			if (isPickerDismissTarget(event, triggerEl.current)) {
				return;
			}

			onDismiss();
		};

		document.addEventListener('pointerdown', onPointerDown);

		return () => document.removeEventListener('pointerdown', onPointerDown);
	}, [enabled, triggerEl, onDismiss]);
};
