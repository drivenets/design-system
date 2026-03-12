import type { RefObject } from 'react';
import type { DsTextInputProps } from '../ds-text-input';
import type { PopoverContentProps } from '@ark-ui/react/popover';

export interface DsTimePickerProps {
	ref?: RefObject<HTMLDivElement>;
	className?: string;

	value?: Date | null;
	defaultValue?: Date;

	min?: Date;
	max?: Date;

	disabled?: boolean;
	readOnly?: boolean;

	disablePortal?: boolean;

	locale?: DsTimePickerLocale;
	slotProps?: DsTimePickerSlotProps;

	onChange?: (value: Date | null) => void;
	onOpenChange?: (open: boolean) => void;
}

export interface DsTimePickerLocale {
	openLabel?: string;
	clearLabel?: string;
	hourLabel?: string;
	minuteLabel?: string;
	periodLabel?: string;
	placeholder?: string;
}

export interface DsTimePickerSlotProps {
	input?: DsTextInputProps['slots'];
	popover?: PopoverContentProps;
}
