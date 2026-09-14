import type { CSSProperties, ReactNode, Ref } from 'react';

export const dsEmptyStateVariants = ['noData', 'noMatches'] as const;
export type DsEmptyStateVariant = (typeof dsEmptyStateVariants)[number];

export const defaultDsEmptyStateMessages: Record<DsEmptyStateVariant, string> = Object.freeze({
	noData: 'No data to display.',
	noMatches: 'No matching records found.',
});

export interface DsEmptyStateProps {
	/**
	 * Which empty-state reason to present.
	 * @default 'noData'
	 */
	variant?: DsEmptyStateVariant;

	/**
	 * Overrides the default copy for the active variant.
	 */
	message?: string;

	/**
	 * Replaces the bundled illustration for the active variant.
	 */
	illustration?: ReactNode;

	/**
	 * Optional action, typically a button. Omitted from the table's inferred default.
	 */
	action?: ReactNode;

	className?: string;

	style?: CSSProperties;

	ref?: Ref<HTMLDivElement>;
}
