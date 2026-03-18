export type TimePeriod = 'AM' | 'PM';

export interface TimeScrollerProps {
	className?: string;
	open: boolean;
	slotProps: {
		hour: TimeScrollerSlotProps<number>;
		minute: TimeScrollerSlotProps<number>;
		period: TimeScrollerSlotProps<TimePeriod>;
	};
}

export interface TimeScrollerSlotProps<TValue> {
	value?: TValue;
	onChange?: (value: TValue) => void;
	isDisabled?: (value: TValue) => boolean;
}
