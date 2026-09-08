import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const NoTasksIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
			d="M99.942 133.192L101.432 133.141V154.14C101.432 154.615 101.819 155 102.296 155H154.136C154.613 155 155 154.615 155 154.14V82.155C155 80.4126 153.582 79 151.832 79H104.6C102.85 79 101.432 80.4126 101.432 82.155V97.1227L99.942 97.0711C99.767 97.065 99.5917 97.062 99.416 97.062C90.3809 97.062 83 105.124 83 115.132C83 125.139 90.3809 133.202 99.416 133.202C99.5917 133.202 99.767 133.199 99.942 133.192ZM100.107 126.29C99.8778 126.309 99.6473 126.318 99.416 126.318C93.9625 126.318 89.6432 121.263 89.6432 115.132C89.6432 109.001 93.9625 103.946 99.416 103.946C99.6473 103.946 99.8778 103.955 100.107 103.973L101.432 104.079V126.184L100.107 126.29Z"
			fill="var(--background)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
		<path
			d="M147 109.182V113.925M147 85.1816V103.5"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M67.1279 147H74M181.128 147H184M161 147H176.428M80 147H97.4541"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M128 35C125.333 39.2135 124 42.8802 124 46C124 51.5562 128.654 54.0444 128.654 60.063C128.654 63.1177 127.103 66.1507 124 69.1621"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M116 46C115.128 51.5127 119 52.5322 119 57.4746C119 59.9831 118 62.4915 116 65"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M134.795 43.4741C133.474 46.8933 134.216 48.9774 134.795 50.2041C136.033 52.8262 138 55.0896 138 57.7578C138 60.8568 136.932 63.8392 134.795 66.7051"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M105 84C105 83.4477 105.448 83 106 83L125 83V152H106C105.448 152 105 151.552 105 151V84Z"
			fill="var(--color-dap-blue-075)"
		/>
	</svg>
);
