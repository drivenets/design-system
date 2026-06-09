import type { CSSProperties, Ref } from 'react';
import type { IconType } from '../ds-icon';
import type { ResponsiveValue } from '../../utils/responsive';

export const statusBadgeV2Phases = [
	'not-started',
	'temporary',
	'in-review',
	'pending',
	'active',
	'execution',
	'result-succeeded',
	'result-warning',
	'result-failed',
	'deprecated',
] as const;

export type StatusBadgeV2Phase = (typeof statusBadgeV2Phases)[number];

export const statusBadgeV2Variants = ['primary', 'secondary'] as const;
export type StatusBadgeV2Variant = (typeof statusBadgeV2Variants)[number];

export const statusBadgeV2Sizes = ['medium', 'small'] as const;
export type StatusBadgeV2Size = (typeof statusBadgeV2Sizes)[number];

export interface DsStatusBadgeV2SharedProps {
	/**
	 * Lifecycle phase that determines color and default icon.
	 * Each phase maps to a color palette and a default Material Symbols icon.
	 */
	phase: StatusBadgeV2Phase;

	label: string;

	/**
	 * Visual variant controlling background treatment.
	 * - `'primary'`: tinted background pill or circle
	 * - `'secondary'`: no background, inline presentation
	 * @default 'primary'
	 */
	variant?: StatusBadgeV2Variant;

	/**
	 * Badge size controlling height, padding, and icon dimensions. Responsive.
	 * @default 'medium'
	 */
	size?: StatusBadgeV2Size;

	className?: string;

	style?: CSSProperties;

	ref?: Ref<HTMLElement>;

	'aria-label'?: string;
}

/**
 * When `iconOnly` is true, `icon` cannot be `null` — the badge must have an icon
 * (either the phase default or a custom one). When `iconOnly` is false or omitted,
 * `icon` can be `null` to force a text-only badge.
 */
export type StatusBadgeV2IconOnlyProps =
	| {
			/** When true, hides the label text and renders icon-only. The label is used as tooltip content instead. */
			iconOnly: true;
			/** Override the default phase icon. When omitted, the default icon for the phase is used. */
			icon?: IconType;
	  }
	| {
			iconOnly?: false;
			icon?: IconType | null;
	  };

export type DsStatusBadgeV2BaseProps = DsStatusBadgeV2SharedProps & StatusBadgeV2IconOnlyProps;

export type DsStatusBadgeV2Props = Omit<DsStatusBadgeV2SharedProps, 'size'> & {
	size?: ResponsiveValue<StatusBadgeV2Size>;
} & StatusBadgeV2IconOnlyProps;
