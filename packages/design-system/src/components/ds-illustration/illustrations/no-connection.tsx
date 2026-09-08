import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const NoConnectionIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
			d="M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508M103.996 140H97.0314Z"
			fill="var(--background)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M116.612 64.3426C116.612 96.5657 145.633 123.118 183 126.703C178.317 132.461 171.086 136.367 162.847 136.981V137H95.7431C87.6013 137 74 133.57 74 118.548C74 103.527 84.5742 100.097 95.7431 100.097C96.218 100.097 96.6891 100.112 97.1559 100.141C96.8316 98.4556 96.7746 96.7184 96.6623 94.9474C95.9038 82.9842 101.123 67.907 116.63 63C116.618 63.4473 116.612 63.8944 116.612 64.3426Z"
			fill="var(--color-dap-blue-075)"
		/>
		<path
			d="M137 69C143.509 70.7226 148.648 75.8129 150.44 82.2932"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M108 101.5C108 105.09 111.134 108 115 108C118.866 108 122 105.09 122 101.5"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M137 101.5C137 105.09 140.134 108 144 108C147.866 108 151 105.09 151 101.5"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path d="M122 120H136.5" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path
			d="M82.5675 77.0957L75.9123 85.2725H82.7277V87H73.3683V85.3682L80.0236 77.3037H73.88V75.5762H82.5675V77.0957ZM69.1564 62.3818L60.004 73.624H69.3761V76H56.506V73.7559L65.6583 62.668H57.2101V60.292H69.1564V62.3818Z"
			fill="var(--color-dap-blue-300)"
		/>
	</svg>
);
