export type TimePeriod = 'AM' | 'PM';

export interface TimeScrollerProps {
	open: boolean;
	hour?: number;
	minute?: number;
	period?: TimePeriod;
	isHourDisabled?: (hour: number) => boolean;
	isMinuteDisabled?: (minute: number) => boolean;
	isPeriodDisabled?: (period: TimePeriod) => boolean;
	onHourChange?: (hour: number) => void;
	onMinuteChange?: (minute: number) => void;
	onPeriodChange?: (period: TimePeriod) => void;
	className?: string;
}
