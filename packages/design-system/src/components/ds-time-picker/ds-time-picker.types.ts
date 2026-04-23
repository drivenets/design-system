import type { RefObject } from 'react';
import type { DsTextInputProps } from '../ds-text-input';
import type { PopoverContentProps } from '@ark-ui/react/popover';

export interface DsTimePickerProps {
	/**
	 * Unique identifier for the input field
	 */
	id?: string;
	/**
	 * Ref forwarded to the time picker root element
	 */
	ref?: RefObject<HTMLDivElement>;
	/**
	 * Additional CSS class name applied to the root element
	 */
	className?: string;

	/**
	 * Current selected time (controlled). Use `null` to represent no selection.
	 * Pair with `onChange`.
	 */
	value?: Date | null;
	/**
	 * Initial time when uncontrolled.
	 */
	defaultValue?: Date;

	/**
	 * Whether the popover is open (controlled). Pair with `onOpenChange`.
	 */
	open?: boolean;
	/**
	 * Whether the popover is initially open when uncontrolled.
	 * @default false
	 */
	defaultOpen?: boolean;

	/**
	 * Placeholder text shown in the input when no time is selected.
	 */
	placeholder?: string;

	/**
	 * Earliest selectable time. Times before this are disabled.
	 */
	min?: Date;
	/**
	 * Latest selectable time. Times after this are disabled.
	 */
	max?: Date;

	/**
	 * Whether the picker is disabled and cannot be interacted with.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether the picker is read-only. The input is focusable but the value cannot
	 * be changed.
	 * @default false
	 */
	readOnly?: boolean;

	/**
	 * Whether to hide the clear button
	 * @default false
	 */
	hideClearButton?: boolean;

	/**
	 * Whether to disable the portal for the popover content
	 * @default false
	 */
	disablePortal?: boolean;

	/**
	 * Localized labels used in the picker UI and for accessibility.
	 */
	locale?: DsTimePickerLocale;
	/**
	 * Props forwarded to the internal input and popover slots.
	 */
	slotProps?: DsTimePickerSlotProps;

	/**
	 * Called when the selected time changes. Receives the new Date or `null` when
	 * cleared.
	 */
	onChange?: (value: Date | null) => void;
	/**
	 * Called when the popover opens or closes. Receives the next `open` state.
	 */
	onOpenChange?: (open: boolean) => void;
}

export interface DsTimePickerLocale {
	/**
	 * aria-label for the button that opens the popover
	 */
	openLabel?: string;
	/**
	 * aria-label for the clear button
	 */
	clearLabel?: string;
	/**
	 * aria-label for the hour scroller
	 */
	hourLabel?: string;
	/**
	 * aria-label for the minute scroller
	 */
	minuteLabel?: string;
	/**
	 * aria-label for the AM/PM period scroller
	 */
	periodLabel?: string;
}

export interface DsTimePickerSlotProps {
	/**
	 * Props forwarded to the underlying `DsTextInput` that displays the selected time.
	 */
	input?: DsTextInputProps;
	/**
	 * Props forwarded to the Ark popover content that hosts the time scrollers.
	 */
	popover?: PopoverContentProps;
}
