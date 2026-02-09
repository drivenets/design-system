import { useId, type FC, type SVGProps } from 'react';

/**
 * Special Book icon
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=8939:1542
 */
export const SpecialBook: FC<SVGProps<SVGSVGElement>> = (props) => {
	const clipId = useId();

	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath={`url(#${clipId})`}>
				<path
					d="M6.94449 1.66666L3.27782 2.38608V3.47721H0.833374V16.6667H19.1667V3.47721H16.7223V2.38608L13.0556 1.66666L10 2.26618L6.94449 1.66666ZM6.94449 2.88968L9.38893 3.3669V12.9376L6.94449 12.458L4.50004 12.9376V3.36929L6.94449 2.88968ZM13.0556 2.88968L15.5 3.3669V12.9376L13.0556 12.458L10.6112 12.9376V3.36929L13.0556 2.88968ZM2.0556 4.67625H3.27782V14.4005L6.94449 13.681L9.38893 14.1607V15.4676H2.0556V4.67625ZM16.7223 4.67625H17.9445V15.4676H10.6112V14.1607L13.0556 13.681L16.7223 14.4005V4.67625Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id={clipId}>
					<rect width="20" height="20" rx="2" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
