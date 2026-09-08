import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const NoDeviceIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
		<g transform="translate(51 19)">
			<g transform="translate(18.368 47.899)">
				<path d="M102.264 12.4107L83.4 0L82.6554 56.0964L102.264 68.5071V12.4107Z" fill="var(--background)" />
				<path d="M20.85 68.5071L1.98571 56.0964H82.6554L102.264 68.5071H20.85Z" fill="var(--background)" />
				<path
					d="M18.8643 67.7625L0 55.3518V0.248214L19.6089 12.6589L18.8643 67.7625Z"
					fill="var(--background)"
				/>
			</g>
			<path
				d="M38 21.303L49.1 33.756M90.1 21.303L79 33.756M64 17V33.756"
				stroke="var(--color-dap-blue-300)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<rect x="19" y="48" width="82" height="56" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" />
			<path
				d="M19 48H101L120 61H38.5L19 48Z"
				stroke="var(--color-dap-blue-700)"
				strokeWidth="2.5"
				strokeLinejoin="round"
			/>
			<path
				d="M19 104H101L120 117H38.5L19 104Z"
				stroke="var(--color-dap-blue-700)"
				strokeWidth="2.5"
				strokeLinejoin="round"
			/>
			<rect x="38" y="61" width="82" height="56" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" />
			<path
				d="M2 117H2.5M6 117H9.5M14 117H125M130 117H133.5M137 117H137.5"
				stroke="var(--color-dap-blue-700)"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M44 127H50M54 127H84M88 127H94"
				stroke="var(--color-dap-blue-700)"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path d="M66 129H72" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" />
			<path d="M60 131H79" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		</g>
	</svg>
);
