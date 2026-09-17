import { createContext, useContext, type FocusEvent, type PointerEvent } from 'react';
import { usePopoverContext } from '@ark-ui/react/popover';
import { isHoverPointer } from './ds-popover.utils';

export const DEFAULT_OPEN_DELAY_MS = 200;
/**
 * Non-zero on purpose: the pointer needs time to cross the `gutter` gap from the
 * trigger onto the portalled panel, and `0` loses that handoff.
 */
export const DEFAULT_CLOSE_DELAY_MS = 150;

export interface HoverIntent {
	openDelay: number;
	closeDelay: number;
	/** Lets the panel report whether focus is currently inside it. */
	setFocusInPanel: (inPanel: boolean) => void;
	/** True once if the trigger is about to be re-focused by Ark's close-time restore. */
	consumeFocusRestore: () => boolean;
	/** Owns one shared timer, so moving trigger -> panel cancels the pending close. */
	schedule: (action: () => void, delay: number) => void;
}

/** Null unless the root is in hover mode, which is what switches the behavior off. */
export const HoverIntentContext = createContext<HoverIntent | null>(null);

export const useHoverIntent = () => useContext(HoverIntentContext);

/**
 * Pointer handlers for the parts a hovering user can be over — the trigger and the
 * panel. Ark's popover machine has no hover support, so the intent timers live here;
 * opening still goes through the machine, so a controlled `open` keeps winning.
 */
export const useHoverIntentProps = () => {
	const intent = useHoverIntent();
	const { setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	const onPointerIntent = (event: PointerEvent, open: boolean, delay: number) => {
		if (!isHoverPointer(event.pointerType)) {
			return;
		}

		intent.schedule(() => setOpen(open), delay);
	};

	return {
		onPointerEnter: (event: PointerEvent) => onPointerIntent(event, true, intent.openDelay),
		onPointerLeave: (event: PointerEvent) => onPointerIntent(event, false, intent.closeDelay),
	};
};

/**
 * Trigger props for hover mode: pointer intent plus keyboard reveal. A tab to the
 * trigger opens the panel, so keyboard users get the same affordance as pointer
 * users. Gated on `:focus-visible` — a mouse click focuses the button without it,
 * so this never races the click toggle.
 */
export const useHoverTriggerProps = () => {
	const pointerProps = useHoverIntentProps();
	const intent = useHoverIntent();
	const { setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	return {
		...pointerProps,
		onFocus: (event: FocusEvent<HTMLElement>) => {
			// Closing with focus inside the panel makes Ark re-focus the trigger; that
			// is a restore, not the user tabbing in, and must not reopen the panel.
			if (intent.consumeFocusRestore()) {
				return;
			}

			if (event.target.matches(':focus-visible')) {
				setOpen(true);
			}
		},
	};
};
