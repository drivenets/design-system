import type { Properties } from 'csstype';

type CSSProps = Properties<string | number>;
import type { CSSProperties, ReactNode, Ref } from 'react';

export interface DsStackProps {
	direction?: CSSProps['flexDirection'];
	gap?: CSSProps['gap'];
	alignItems?: CSSProps['alignItems'];
	justifyContent?: CSSProps['justifyContent'];
	flex?: CSSProps['flex'];
	flexWrap?: CSSProps['flexWrap'];
	width?: CSSProps['width'];

	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLDivElement>;
}
