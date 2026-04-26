import type { DatePickerRootProps } from '@ark-ui/react/date-picker';
import type { DsTextInputProps } from '../ds-text-input';
import type { DsTimePickerProps } from '../ds-time-picker';

export interface DsDatePickerLocale {
	/**
	 * aria-label for the button that opens the calendar popover
	 */
	openCalendarLabel?: string;
	/**
	 * aria-label for the button that reveals the time picker when `withTime` is set
	 */
	timeTriggerLabel?: string;
	/**
	 * aria-label for the clear button
	 */
	clearLabel?: string;
}

export interface DsDatePickerSlotProps {
	/**
	 * Props forwarded to the underlying `DsTextInput` that displays the selected date.
	 */
	input?: DsTextInputProps;
	/**
	 * Props forwarded to the nested `DsTimePicker` rendered when `withTime` is set.
	 */
	timePicker?: DsTimePickerProps;
}

export interface DsDatePickerProps extends Pick<
	DatePickerRootProps,
	'disabled' | 'readOnly' | 'id' | 'open' | 'name'
> {
	/**
	 * Controlled value as Date object.
	 * `null` means the date is empty.
	 * `undefined` means value is not provided, so component will be uncontrolled.
	 */
	value?: Date | null;

	/**
	 * Default value for uncontrolled mode
	 */
	defaultValue?: Date;

	/**
	 * Callback when the value changes
	 * @param value - Date object or null when cleared
	 */
	onChange?: (value: Date | null) => void;

	/**
	 * Callback when the calendar open state changes
	 */
	onOpenChange?: (open: boolean) => void;

	/**
	 * Callback when the input is blurred
	 */
	onBlur?: () => void;

	/**
	 * Minimum allowed datetime as Date object
	 */
	min?: Date;

	/**
	 * Maximum allowed datetime as Date object
	 */
	max?: Date;

	/**
	 * Whether to show the time picker alongside the date picker
	 * @default false
	 */
	withTime?: boolean;

	/**
	 * Placeholder text for the input
	 * @default 'mm/dd/yyyy'
	 */
	placeholder?: string;

	/**
	 * Whether to close the calendar when a date is selected. This is ignored when withTime is true.
	 * @default true
	 */
	closeOnSelect?: boolean;

	className?: string;

	/**
	 * Whether to disable the portal for the calendar content
	 * @default false
	 */
	disablePortal?: boolean;

	/**
	 * Whether to hide the clear button
	 * @default true
	 */
	hideClearButton?: boolean;

	/**
	 * Localizable aria-labels and text
	 */
	locale?: DsDatePickerLocale;

	/**
	 * Props forwarded to sub-component slots
	 */
	slotProps?: DsDatePickerSlotProps;
}
