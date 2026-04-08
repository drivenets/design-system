import type { CSSProperties, Ref } from 'react';
import type { DsButtonV3Props } from '../ds-button-v3';
import type { DsSelectProps } from '../ds-select';

export const splitButtonSizes = ['medium', 'small'] as const;
export type SplitButtonSize = (typeof splitButtonSizes)[number];

type ButtonSlotProps = Omit<DsButtonV3Props, 'variant' | 'color' | 'size'>;

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type SelectSlotProps = DistributiveOmit<DsSelectProps, 'size'>;

export interface DsSplitButtonSlotProps {
	button: ButtonSlotProps;
	select: SelectSlotProps;
}

export interface DsSplitButtonProps {
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	size?: SplitButtonSize;
	disabled?: boolean;
	slotProps: DsSplitButtonSlotProps;
}
