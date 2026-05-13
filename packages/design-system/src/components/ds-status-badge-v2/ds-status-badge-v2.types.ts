import type { CSSProperties, Ref } from 'react';
import type { IconType } from '../ds-icon';

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

export interface DsStatusBadgeV2Props {
	/**
	 * Lifecycle phase that determines color and default icon.
	 * Each phase maps to a color palette and a default Material Symbols icon.
	 */
	phase: StatusBadgeV2Phase;

	/**
	 * Domain-specific text label. Always required for accessibility.
	 * Displayed as text in the badge unless `iconOnly` is true,
	 * in which case it becomes the tooltip content.
	 */
	label: string;

	/**
	 * Override the default phase icon. Pass `null` to force a text-only badge
	 * (no icon rendered). When omitted, the default icon for the phase is used.
	 */
	icon?: IconType | null;

	/**
	 * When true, hides the label text and renders icon-only.
	 * The label is used as tooltip content instead.
	 * @default false
	 */
	iconOnly?: boolean;

	/**
	 * Visual variant controlling background treatment.
	 * - `'primary'`: tinted background pill or circle
	 * - `'secondary'`: no background, inline presentation
	 * @default 'primary'
	 */
	variant?: StatusBadgeV2Variant;

	/**
	 * Badge size controlling height, padding, and icon dimensions.
	 * @default 'medium'
	 */
	size?: StatusBadgeV2Size;

	/** Additional CSS class name merged onto the root element. */
	className?: string;

	/** Inline styles applied to the root element. */
	style?: CSSProperties;

	/** Ref forwarded to the root element. */
	ref?: Ref<HTMLElement>;

	/** Accessible label for screen readers. Overrides the label. */
	'aria-label'?: string;
}
