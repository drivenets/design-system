export type TimePeriod = 'AM' | 'PM';

export interface TimeScrollerProps {
	/**
	 * Additional CSS class name applied to the scroller wrapper.
	 */
	className?: string;
	/**
	 * Whether the parent popover is open. Used to snap the scrollers to their
	 * selected values when the popover is shown.
	 */
	open: boolean;
	/**
	 * Props for each scroller sub-slot (hour, minute, period).
	 */
	slotProps: {
		/**
		 * Hour scroller state and handlers.
		 */
		hour: TimeScrollerSlotProps<number>;
		/**
		 * Minute scroller state and handlers.
		 */
		minute: TimeScrollerSlotProps<number>;
		/**
		 * AM/PM period scroller state and handlers.
		 */
		period: TimeScrollerSlotProps<TimePeriod>;
	};
}

export interface TimeScrollerSlotProps<TValue> {
	/**
	 * Currently selected value on this scroller.
	 */
	value?: TValue;
	/**
	 * Called when the user changes the selection. Receives the new value.
	 */
	onChange?: (value: TValue) => void;
	/**
	 * Predicate that marks a value as disabled. Receives the candidate value and
	 * returns `true` to disable selecting it.
	 */
	isDisabled?: (value: TValue) => boolean;
}
