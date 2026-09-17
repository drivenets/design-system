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
