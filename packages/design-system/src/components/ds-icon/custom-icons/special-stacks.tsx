import type { FC, SVGProps } from 'react';

/**
 * Special Stacks icon
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=4863:3463
 */
export const SpecialStacks: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="currentColor"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.0004 2.5L18.3333 7.90804L15.8333 9.58333L14.5833 8.75L15.77 7.87443L10.0004 4.13017L4.18005 7.90734L10.0004 11.6852L11.5376 10.6874L12.7464 11.4173L10.0004 13.3162L1.66745 7.90807L10.0004 2.5ZM10.0032 6.68614L18.3326 12.0919L9.99965 17.5L1.66663 12.0919L4.16663 10.4167L5.41663 11.25L4.23023 12.1257L9.99965 15.8698L15.82 12.0927L9.99965 8.31481L8.33329 9.58333L7.08329 8.75L10.0032 6.68614Z"
		/>
	</svg>
);
