import type { Properties } from 'csstype';

type CSSProps = Properties<string | number>;
import type { CSSProperties, ReactNode, Ref } from 'react';

export interface DsStackProps {
	/**
	 * Flex direction of the stack (maps to CSS `flex-direction`).
	 * @default row
	 */
	direction?: CSSProps['flexDirection'];
	/**
	 * Space between children (maps to CSS `gap`). Accepts any valid CSS gap value,
	 * e.g. `8`, `'1rem'`, `'var(--ds-space-2)'`.
	 */
	gap?: CSSProps['gap'];
	/**
	 * Cross-axis alignment of children (maps to CSS `align-items`).
	 */
	alignItems?: CSSProps['alignItems'];
	/**
	 * Main-axis alignment of children (maps to CSS `justify-content`).
	 */
	justifyContent?: CSSProps['justifyContent'];
	/**
	 * Flex shorthand applied to the stack itself (maps to CSS `flex`).
	 */
	flex?: CSSProps['flex'];
	/**
	 * Whether and how children wrap onto multiple lines (maps to CSS `flex-wrap`).
	 */
	flexWrap?: CSSProps['flexWrap'];
	/**
	 * Width of the stack container (maps to CSS `width`).
	 */
	width?: CSSProps['width'];

	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLDivElement>;
}
