import type { FC, SVGProps } from 'react';

/**
 * Special Site Generic icon - represents a generic site
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=10886:32782
 */
export const SpecialSiteGeneric: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="currentColor"
		{...props}
	>
		<path d="M16.3636 4.47727V16.75H14.5454V5.84091L9.99999 4.02273L5.45453 5.84091V14.9318H15.9091V16.75H3.63635L3.63635 4.47727L9.99999 1.75L16.3636 4.47727Z" />
		<path d="M9.0909 13.1136H7.27272V11.2955H9.0909V13.1136Z" />
		<path d="M9.0909 9.47727H7.27272V7.65909H9.0909V9.47727Z" />
		<path d="M12.7273 9.47727H10.9091V7.65909H12.7273V9.47727Z" />
		<path d="M12.7273 13.1136H10.9091V11.2955H12.7273V13.1136Z" />
	</svg>
);
