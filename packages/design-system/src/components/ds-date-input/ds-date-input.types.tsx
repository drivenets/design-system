import { type DatePickerRootProps } from '@ark-ui/react/date-picker';

/**
 * Range-specific props with discriminated union for type safety
 */
type DsDateInputRangeProps =
	| {
			/**
			 * Whether to enable range selection
			 * @default false
			 */
			range?: false;

			/**
			 * Controlled value as ISO date string (YYYY-MM-DD)
			 * @example '2024-12-25'
			 */
			value?: string;

			/**
			 * Default value for uncontrolled mode
			 * @example '2024-12-25'
			 */
			defaultValue?: string;

			/**
			 * Callback when the value changes
			 * @param value - ISO date string (YYYY-MM-DD) or undefined when empty
			 * @example '2024-12-25'
			 */
			onValueChange?: (value: string | undefined) => void;
	  }
	| {
			/**
			 * Whether to enable range selection
			 */
			range: true;

			/**
			 * Controlled value as ISO date string tuple (YYYY-MM-DD)
			 * @example ['2024-12-01', '2024-12-31']
			 */
			value?: [string, string];

			/**
			 * Default value for uncontrolled mode
			 * @example ['2024-12-01', '2024-12-31']
			 */
			defaultValue?: [string, string];

			/**
			 * Callback when the value changes
			 * @param value - ISO date string tuple (YYYY-MM-DD) or undefined when empty
			 * @example ['2024-12-01', '2024-12-31']
			 */
			onValueChange?: (value: [string, string] | undefined) => void;
	  };

/**
 * Base props shared across all modes
 */
type DsDateInputBaseProps = Pick<
	DatePickerRootProps,
	'disabled' | 'readOnly' | 'id' | 'open' | 'name' | 'style'
> & {
	/**
	 * Callback when the open state changes
	 * @param open - Whether the calendar is open
	 */
	onOpenChange?: (open: boolean) => void;
	/**
	 * Minimum allowed date as ISO string (YYYY-MM-DD)
	 * @example '2024-01-01'
	 */
	min?: string;

	/**
	 * Maximum allowed date as ISO string (YYYY-MM-DD)
	 * @example '2024-12-31'
	 */
	max?: string;

	/**
	 * Placeholder text for the input
	 * @default 'MM/DD/YYYY' for single date, 'MM/DD/YYYY - MM/DD/YYYY' for range
	 */
	placeholder?: string;

	/**
	 * Custom class name for the root container
	 */
	className?: string;

	/**
	 * Whether to disable the portal for the calendar content
	 * @default false
	 */
	disablePortal?: boolean;
};

/**
 * Props for the DsDateInput component
 */
export type DsDateInputProps = DsDateInputBaseProps & DsDateInputRangeProps;
