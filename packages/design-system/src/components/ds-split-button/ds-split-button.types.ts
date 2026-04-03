import type { CSSProperties, Ref } from 'react';
import type { DsButtonUnifiedProps } from '../ds-button';
import type { DsSelectProps } from '../ds-select';

type ButtonV12Props = Extract<DsButtonUnifiedProps, { design: 'v1.2' }>;

export const splitButtonSizes = ['medium', 'small'] as const;
export type SplitButtonSize = (typeof splitButtonSizes)[number];

export interface DsSplitButtonSlotProps {
	button: Partial<ButtonV12Props>;
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
