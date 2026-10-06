import type { FocusEvent, MouseEvent, PointerEvent } from 'react';
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
	/** Drops a pending open or close so a click's toggle is the final word. */
	cancel: () => void;
	/** A pinned panel was opened, or kept open, by a click — pointer leave no longer closes it. */
	isPinned: () => boolean;
	setPinned: (pinned: boolean) => void;
}

const useHoverIntent = () => useDsPopoverContext().hoverIntent;

const scheduleClose = (intent: HoverIntent, setOpen: (open: boolean) => void) =>
	intent.schedule(() => {
		if (!intent.isPinned()) {
			setOpen(false);
		}
	}, intent.closeDelay);

export const useHoverIntentProps = () => {
	const intent = useHoverIntent();
	const { setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	return {
		// Reaching the panel only cancels a pending close; it never (re)opens it.
		onPointerEnter: (event: PointerEvent) => {
			if (isHoverPointer(event.pointerType)) {
				intent.cancel();
			}
		},
		onPointerLeave: (event: PointerEvent) => {
			if (isHoverPointer(event.pointerType)) {
				scheduleClose(intent, setOpen);
			}
		},
	};
};

export const useHoverTriggerProps = () => {
	const intent = useHoverIntent();
	const { open, setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	const openUnpinned = () => {
		intent.setPinned(false);
		setOpen(true);
	};

	return {
		onPointerEnter: (event: PointerEvent) => {
			if (!isHoverPointer(event.pointerType)) {
				return;
			}

			if (open) {
				intent.cancel();
				return;
			}

			intent.schedule(openUnpinned, intent.openDelay);
		},
		onPointerLeave: (event: PointerEvent) => {
			if (isHoverPointer(event.pointerType)) {
				scheduleClose(intent, setOpen);
			}
		},
		onFocus: (event: FocusEvent<HTMLElement>) => {
			// Closing with focus inside the panel makes Ark re-focus the trigger
			if (intent.consumeFocusRestore()) {
				return;
			}

			if (!event.target.matches(':focus-visible')) {
				return;
			}

			intent.cancel();

			if (!open) {
				openUnpinned();
			}
		},
		// Runs before Ark's toggle, which skips a default-prevented click.
		onClick: (event: MouseEvent<HTMLElement>) => {
			intent.cancel();

			if (!open) {
				intent.setPinned(true);
				return;
			}

			if (!intent.isPinned()) {
				event.preventDefault();
				intent.setPinned(true);
			}
		},
	};
};
