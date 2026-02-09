import { useId, type FC, type SVGProps } from 'react';

/**
 * Special Map View icon
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=8866:37825
 */
export const SpecialMapView: FC<SVGProps<SVGSVGElement>> = (props) => {
	const clipId = useId();

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
			<g clipPath={`url(#${clipId})`}>
				<path
					d="M2.38489 5.88632C3.41798 5.88632 4.2559 6.72337 4.25598 7.75644C4.25598 8.78958 3.41803 9.62753 2.38489 9.62753C1.35182 9.62745 0.514771 8.78953 0.514771 7.75644C0.514855 6.72342 1.35187 5.88641 2.38489 5.88632Z"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.38501 9.58334V12.4862"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.73291 1.87137C10.766 1.87137 11.6039 2.70842 11.604 3.74149C11.604 4.77463 10.766 5.61258 9.73291 5.61258C8.69984 5.61249 7.86279 4.77457 7.86279 3.74149C7.86288 2.70847 8.6999 1.87145 9.73291 1.87137Z"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.73303 5.83334V8.47126"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.4658 9.82733C18.4989 9.82733 19.3368 10.6644 19.3369 11.6974C19.3369 12.7306 18.499 13.5685 17.4658 13.5685C16.4328 13.5685 15.5957 12.7305 15.5957 11.6974C15.5958 10.6644 16.4328 9.82742 17.4658 9.82733Z"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.4659 13.75V17.2605"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.3111 18.0695C17.6256 18.1738 17.9651 18.0034 18.0694 17.6889C18.1738 17.3744 18.0034 17.0348 17.6889 16.9305L17.5 17.5L17.3111 18.0695ZM17.5 17.5L17.6889 16.9305L2.57391 11.9167L2.38501 12.4862L2.19611 13.0557L17.3111 18.0695L17.5 17.5Z"
					fill="currentColor"
				/>
				<path
					d="M17.0162 17.6577C17.2355 17.9061 17.6147 17.9296 17.8631 17.7103C18.1115 17.491 18.135 17.1118 17.9157 16.8634L17.4659 17.2605L17.0162 17.6577ZM9.58337 8.33331L9.13361 8.73044L17.0162 17.6577L17.4659 17.2605L17.9157 16.8634L10.0331 7.93618L9.58337 8.33331Z"
					fill="currentColor"
				/>
				<path
					d="M10.0105 9.0612C10.3043 8.90799 10.4183 8.5456 10.2651 8.25177C10.1119 7.95794 9.74948 7.84395 9.45566 7.99715L9.73306 8.52917L10.0105 9.0612ZM2.91675 12.0833L3.19415 12.6153L10.0105 9.0612L9.73306 8.52917L9.45566 7.99715L2.63934 11.5513L2.91675 12.0833Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id={clipId}>
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
