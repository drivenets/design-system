import type { CSSProperties, Ref } from 'react';
import type { DsButtonV3Props } from '../ds-button-v3';
import type { DsSelectProps } from '../ds-select';

export const splitButtonSizes = ['medium', 'small'] as const;
export type SplitButtonSize = (typeof splitButtonSizes)[number];

export interface DsSplitButtonSlotProps {
	button: Partial<DsButtonV3Props>;
	select: DsSelectProps;
}

export interface DsSplitButtonProps {
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	size?: SplitButtonSize;
	disabled?: boolean;
	slotProps: DsSplitButtonSlotProps;
}
