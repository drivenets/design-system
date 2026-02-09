import type { FC, SVGProps } from 'react';

/**
 * Special Site T3 icon - represents a Tier 3 site
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=10886:32784
 */
export const SpecialSiteT3: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="currentColor"
		{...props}
	>
		<path d="M2.5 17.75V5.25H10.8333V8.58333H17.5V17.75H2.5ZM4.16667 16.0833H9.16667V14H4.16667V16.0833ZM4.16667 12.3333H9.16667V10.25H4.16667V12.3333ZM4.16667 8.58333H9.16667V6.91667H4.16667V8.58333ZM10.8333 16.0833H15.8333V10.25H10.8333V16.0833ZM12.5 14.4167V11.9167H14.1667V14.4167H12.5Z" />
	</svg>
);
