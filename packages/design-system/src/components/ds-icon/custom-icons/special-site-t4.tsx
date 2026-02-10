import type { FC, SVGProps } from 'react';

/**
 * Special Site T4 icon - represents a Tier 4 site
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=10884:32697
 */
export const SpecialSiteT4: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="currentColor"
		{...props}
	>
		<path d="M4.16669 17.5833V3.41666H15.8334V17.5833H10.8334V15.0833H9.16669V17.5833H4.16669ZM5.83335 15.9167H7.50002V13.4167H12.5V15.9167H14.1667V5.08332H5.83335V15.9167ZM7.50002 11.75H9.16669V10.0833H7.50002V11.75ZM7.50002 8.41666H9.16669V6.74999H7.50002V8.41666ZM10.8334 11.75H12.5V10.0833H10.8334V11.75ZM10.8334 8.41666H12.5V6.74999H10.8334V8.41666Z" />
	</svg>
);
