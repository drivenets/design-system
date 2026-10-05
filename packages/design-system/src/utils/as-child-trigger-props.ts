import type {
	AriaAttributes,
	FocusEventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
	PointerEventHandler,
	Ref,
} from 'react';

/**
 * Props a wrapping `asChild` trigger (`DsPopover.Trigger`, `DsTooltip`, `DsDropdownMenu.Trigger`)
 * injects onto the element it wraps. Components that sit inside such a trigger forward these
 * so the wrapper actually wires up instead of silently doing nothing.
 */
export interface DsAsChildTriggerProps<T extends HTMLElement = HTMLElement> {
	id?: string;
	ref?: Ref<T>;
	dir?: 'ltr' | 'rtl';
	tabIndex?: number;
	'aria-haspopup'?: AriaAttributes['aria-haspopup'];
	'aria-expanded'?: AriaAttributes['aria-expanded'];
	'aria-controls'?: string;
	'aria-describedby'?: string;
	'data-state'?: string;
	onClick?: MouseEventHandler<T>;
	onPointerDown?: PointerEventHandler<T>;
	onPointerEnter?: PointerEventHandler<T>;
	onPointerLeave?: PointerEventHandler<T>;
	onPointerMove?: PointerEventHandler<T>;
	onPointerOver?: PointerEventHandler<T>;
	onPointerCancel?: PointerEventHandler<T>;
	onFocus?: FocusEventHandler<T>;
	onBlur?: FocusEventHandler<T>;
	onKeyDown?: KeyboardEventHandler<T>;
}
