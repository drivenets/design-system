import type { DsDatePickerProps } from '../ds-date-picker';
import type { DsFormControlProps } from '../ds-form-control';

export type DateRangeValue = [Date | null, Date | null];

export const dateRangePickerOrientations = ['horizontal', 'vertical'] as const;
export type DateRangePickerOrientation = (typeof dateRangePickerOrientations)[number];

export interface DsDateRangePickerLocale {
	clearAllLabel?: string;
}

export type DateRangeFormControlSlotProps = Partial<Omit<DsFormControlProps, 'children'>>;

export interface DsDateRangePickerSlotProps {
	startDatePicker?: DsDatePickerProps;
	endDatePicker?: DsDatePickerProps;
	startDateFormControl?: DateRangeFormControlSlotProps;
	endDateFormControl?: DateRangeFormControlSlotProps;
}

export interface DsDateRangePickerProps {
	/**
	 * Controlled value as a tuple of [startDate, endDate].
	 * `null` for either element means that date is empty.
	 * `undefined` means the component is uncontrolled.
	 */
	value?: DateRangeValue;

	/**
	 * Default value for uncontrolled mode
	 */
	defaultValue?: DateRangeValue;

	/**
	 * Callback when either date changes
	 */
	onChange?: (value: DateRangeValue) => void;

	/**
	 * Minimum allowed datetime for both pickers
	 */
	min?: Date;

	/**
	 * Maximum allowed datetime for both pickers
	 */
	max?: Date;

	/**
	 * Whether to show date pickers with time
	 * @default false
	 */
	withTime?: boolean;

	/**
	 * Layout orientation of the two pickers
	 * @default 'horizontal'
	 */
	orientation?: DateRangePickerOrientation;

	/**
	 * Whether to hide the "Clear all" button
	 * @default false
	 */
	hideClearAll?: boolean;

	/**
	 * Whether to close the calendar when a date is selected. This is ignored when withTime is true.
	 * @default true
	 */
	closeOnSelect?: boolean;

	disabled?: boolean;

	readOnly?: boolean;

	className?: string;

	/**
	 * Whether to disable the portal for both calendar popups
	 * @default false
	 */
	disablePortal?: boolean;

	/**
	 * Localizable labels and text
	 */
	locale?: DsDateRangePickerLocale;

	/**
	 * Props forwarded to sub-component slots
	 */
	slotProps?: DsDateRangePickerSlotProps;
}
