import type { CSSProperties, Ref } from 'react';
import type { DsButtonProps } from '../ds-button';
import type { DsSelectProps } from '../ds-select';
import type { DistributiveOmit } from '../../utils/type-utils';

export const splitButtonSizes = ['medium', 'small'] as const;
export type SplitButtonSize = (typeof splitButtonSizes)[number];

type ButtonSlotProps = Omit<DsButtonProps, 'variant' | 'color' | 'size'>;

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
