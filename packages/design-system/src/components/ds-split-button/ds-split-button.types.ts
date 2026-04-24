import type { CSSProperties, Ref } from 'react';
import type { DsButtonV3Props } from '../ds-button-v3';
import type { DsSelectProps } from '../ds-select';
import type { DistributiveOmit } from '../../utils/type-utils';

export const splitButtonSizes = ['medium', 'small'] as const;
export type SplitButtonSize = (typeof splitButtonSizes)[number];

type ButtonSlotProps = Omit<DsButtonV3Props, 'variant' | 'color' | 'size'>;

type SelectSlotProps = DistributiveOmit<DsSelectProps, 'size'>;

export interface DsSplitButtonSlotProps {
	/**
	 * Props forwarded to the primary action button (`DsButtonV3`). `variant`, `color`
	 * and `size` are controlled by the split button and cannot be overridden here.
	 */
	button: ButtonSlotProps;
	/**
	 * Props forwarded to the dropdown select (`DsSelect`). `size` is controlled by
	 * the split button and cannot be overridden here.
	 */
	select: SelectSlotProps;
}

export interface DsSplitButtonProps {
	/**
	 * Ref forwarded to the split-button wrapper element
	 */
	ref?: Ref<HTMLDivElement>;
	/**
	 * Additional CSS class name applied to the wrapper element
	 */
	className?: string;
	/**
	 * Inline styles applied to the wrapper element
	 */
	style?: CSSProperties;
	/**
	 * Visual size applied to both the button and select slots.
	 * @default medium
	 */
	size?: SplitButtonSize;
	/**
	 * Whether both the button and the select are disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Props forwarded to the internal button and select slots.
	 */
	slotProps: DsSplitButtonSlotProps;
}
