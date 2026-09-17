import type { FocusEvent, PointerEvent } from 'react';
import { usePopoverContext } from '@ark-ui/react/popover';
import { useDsPopoverContext } from './ds-popover.context';
import { isHoverPointer } from './ds-popover.utils';

export const DEFAULT_OPEN_DELAY_MS = 200;
export const DEFAULT_CLOSE_DELAY_MS = 150;

export interface HoverIntent {
	openDelay: number;
	closeDelay: number;
	setFocusInPanel: (inPanel: boolean) => void;
	/** True once if the trigger is about to be re-focused by Ark's close-time restore. */
	consumeFocusRestore: () => boolean;
	/** Owns one shared timer */
	schedule: (action: () => void, delay: number) => void;
}

const useHoverIntent = () => useDsPopoverContext().hoverIntent;

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
			// Closing with focus inside the panel makes Ark re-focus the trigger
			if (intent.consumeFocusRestore()) {
				return;
			}

			if (event.target.matches(':focus-visible')) {
				setOpen(true);
			}
		},
	};
};
