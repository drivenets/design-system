import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const ErrorIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		width="250"
		height="200"
		viewBox="0 0 250 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect width="250" height="200" fill="var(--background)" />
		<IllustrationClouds />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508H92ZM103.996 140H97.0314Z"
			fill="var(--background)"
		/>
		<path
			d="M103.996 140H97.0314M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508H92Z"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M116.612 64.3426C116.612 96.5657 145.633 123.118 183 126.703C178.317 132.461 171.086 136.367 162.847 136.981V137H95.7431C87.6013 137 74 133.57 74 118.548C74 103.527 84.5742 100.097 95.7431 100.097C96.218 100.097 96.6891 100.112 97.1559 100.141C96.8316 98.4556 96.7746 96.7184 96.6623 94.9474C95.9038 82.9842 101.123 67.907 116.63 63C116.618 63.4473 116.612 63.8944 116.612 64.3426ZM127.116 114.758C124.078 114.758 121.614 117.192 121.614 120.195C121.614 123.198 124.078 125.632 127.116 125.632C130.155 125.632 132.618 123.198 132.618 120.195C132.618 117.192 130.155 114.758 127.116 114.758Z"
			fill="var(--color-dap-blue-075)"
		/>
		<path
			d="M127.5 126C130.538 126 133 123.538 133 120.5C133 117.462 130.538 115 127.5 115C124.462 115 122 117.462 122 120.5C122 123.538 124.462 126 127.5 126Z"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
		/>
		<path
			d="M112 109L119 103.507L112 98.2776"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M143 109L136 103.507L143 98.2776"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M137 67C143.509 68.7226 148.648 73.8129 150.44 80.2932"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M158 50C159.657 50 161 48.6569 161 47C161 45.3431 159.657 44 158 44C156.343 44 155 45.3431 155 47C155 48.6569 156.343 50 158 50Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2"
		/>
		<path
			d="M189 66C190.657 66 192 64.6569 192 63C192 61.3431 190.657 60 189 60C187.343 60 186 61.3431 186 63C186 64.6569 187.343 66 189 66Z"
			fill="var(--color-dap-blue-300)"
		/>
		<path
			d="M165.757 57.7573L174.116 66.1156M174.243 57.7573L165.884 66.1156L174.243 57.7573Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M71.4038 75.5962L77.4038 81.5962M77.4038 75.5962L71.4038 81.5962L77.4038 75.5962Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M85 69C86.6569 69 88 67.6569 88 66C88 64.3431 86.6569 63 85 63C83.3431 63 82 64.3431 82 66C82 67.6569 83.3431 69 85 69Z"
			fill="var(--color-dap-blue-300)"
		/>
	</svg>
);
