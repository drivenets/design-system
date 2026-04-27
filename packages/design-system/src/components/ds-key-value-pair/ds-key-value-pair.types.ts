import type { CSSProperties, ReactNode, Ref } from 'react';

export const dsKeyValuePairOrientations = ['vertical', 'horizontal'] as const;
export type DsKeyValuePairOrientation = (typeof dsKeyValuePairOrientations)[number];

export interface DsKeyValuePairProps {
	/** Label rendered for the key side of the pair (left or top depending on `orientation`). */
	keyLabel: ReactNode;

	/** Shown when the editor is not active (read-only or not hovered). */
	value?: ReactNode;

	/**
	 * When `true`, the pair is rendered as a static display and the editor is never
	 * revealed (even on hover/focus).
	 * @default false
	 */
	readOnly?: boolean;

	/**
	 * Layout orientation:
	 * - `vertical`: key stacked above value
	 * - `horizontal`: key and value side-by-side
	 * @default 'vertical'
	 */
	orientation?: DsKeyValuePairOrientation;

	/** Editor content revealed on hover/focus when not read-only. */
	editInput?: ReactNode;

	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
}
