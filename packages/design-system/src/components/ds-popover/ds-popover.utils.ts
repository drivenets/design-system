import type { DsPopoverAlign, DsPopoverSide } from './ds-popover.types';

/**
 * Collapses a side plus alignment into the single placement string Ark expects.
 * `center` is the implicit alignment, so it carries no suffix.
 */
export const toPlacement = (side: DsPopoverSide, align: DsPopoverAlign) =>
	align === 'center' ? side : (`${side}-${align}` as const);

/**
 * Whether a pointer can hover at all. Touch fires enter/leave around a tap, which
 * would open and immediately re-toggle the panel — on those the click owns opening.
 */
export const isHoverPointer = (pointerType: string) => pointerType !== 'touch';

/**
 * Adapts a cancelable DS focus handler into Ark's `initialFocusEl` / `finalFocusEl`.
 * `preventDefault` keeps the current focus; otherwise Ark picks the default target.
 */
export const toFocusEl = (handler: ((event: Event) => void) | undefined, eventName: string) =>
	handler
		? () => {
				const event = new Event(eventName, { cancelable: true });
				handler(event);

				return event.defaultPrevented ? (document.activeElement as HTMLElement | null) : undefined;
			}
		: undefined;

/**
 * Body and the document element dump keyboard users at the top of the page,
 * so they are not useful restore targets.
 */
const isRestorableFocusTarget = (el: EventTarget | null): el is HTMLElement =>
	el instanceof HTMLElement && el.isConnected && el !== document.body && el !== document.documentElement;

/**
 * Runs `onCloseAutoFocus` when Ark's restore is disabled. If the handler
 * prevents default, focus stays on the element that had it at close time.
 */
export const invokeCloseAutoFocus = (handler: (event: Event) => void) => {
	const event = new Event('closeAutoFocus', { cancelable: true });
	handler(event);

	if (!event.defaultPrevented) {
		return;
	}

	const focused = document.activeElement;

	if (!isRestorableFocusTarget(focused)) {
		return;
	}

	requestAnimationFrame(() => {
		if (focused.isConnected) {
			focused.focus({ preventScroll: true });
		}
	});
};
