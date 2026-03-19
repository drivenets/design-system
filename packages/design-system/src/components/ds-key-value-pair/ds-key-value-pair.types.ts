import type { CSSProperties, ReactNode, Ref } from 'react';

export const dsKeyValuePairOrientations = ['vertical', 'horizontal'] as const;
export type DsKeyValuePairOrientation = (typeof dsKeyValuePairOrientations)[number];

export interface DsKeyValuePairProps {
	keyLabel: ReactNode;

	/** Shown when the editor is not active (read-only or not hovered). */
	value?: ReactNode;

	/** @default false */
	readOnly?: boolean;

	/** @default 'vertical' */
	orientation?: DsKeyValuePairOrientation;

	/** Editor content revealed on hover/focus when not read-only. */
	editInput?: ReactNode;

	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
}
