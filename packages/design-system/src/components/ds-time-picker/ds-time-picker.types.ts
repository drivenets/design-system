import type { RefObject } from 'react';
import type { DsTextInputProps } from '../ds-text-input';
import type { PopoverContentProps } from '@ark-ui/react/popover';

export interface DsTimePickerProps {
	id?: string;
	ref?: RefObject<HTMLDivElement>;
	className?: string;

	value?: Date | null;
	defaultValue?: Date;

	open?: boolean;
	defaultOpen?: boolean;

	placeholder?: string;

	min?: Date;
	max?: Date;

	disabled?: boolean;
	readOnly?: boolean;

	/**
	 * Whether to disable the portal for the popover content
	 * @default false
	 */
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
}

export interface DsTimePickerSlotProps {
	input?: DsTextInputProps;
	popover?: PopoverContentProps;
}
