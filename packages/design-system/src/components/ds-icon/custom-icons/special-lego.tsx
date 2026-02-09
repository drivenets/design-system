import { useId, type FC, type SVGProps } from 'react';

/**
 * Special Lego icon
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=8897:25225
 */
export const SpecialLego: FC<SVGProps<SVGSVGElement>> = (props) => {
	const clipId = useId();

	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath={`url(#${clipId})`}>
				<path d="M17.5 11.875H2.5V5H17.5V11.875ZM3.75 10.625H16.25V6.25H3.75V10.625Z" fill="currentColor" />
				<path
					d="M8.75 6.25H3.75V2.5H8.75V6.25ZM5 5H7.5V3.75H5V5ZM16.25 6.25H11.25V2.5H16.25V6.25ZM12.5 5H15V3.75H12.5V5ZM17.5 17.5H2.5V10.625H17.5V17.5ZM3.75 16.25H16.25V11.875H3.75V16.25Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id={clipId}>
					<rect width="15" height="15" fill="white" transform="translate(2.5 2.5)" />
				</clipPath>
			</defs>
		</svg>
	);
};
