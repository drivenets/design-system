import type { DatePickerRootProps } from '@ark-ui/react/date-picker';
import type { DsTextInputProps } from '../ds-text-input';
import type { DsTimePickerProps } from '../ds-time-picker';

export interface DsDatePickerLocale {
	openCalendarLabel?: string;
	timeTriggerLabel?: string;
	clearLabel?: string;
}

export interface DsDatePickerSlotProps {
	input?: DsTextInputProps;
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
