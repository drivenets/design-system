import type { CSSProperties, ReactNode, Ref } from 'react';

export const dsKeyValuePairLayouts = ['vertical', 'horizontal'] as const;
export type DsKeyValuePairLayout = (typeof dsKeyValuePairLayouts)[number];

export interface DsKeyValuePairProps {
	label: ReactNode;

	/** Shown when the editor is not active (read-only or not hovered). */
	value?: ReactNode;

	/** @default false */
	readOnly?: boolean;

	/** @default 'vertical' */
	layout?: DsKeyValuePairLayout;

	/** Editor content revealed on hover/focus when not read-only. */
	children?: ReactNode;

	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
}
