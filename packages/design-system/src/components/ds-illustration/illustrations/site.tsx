import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const SiteIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
		<rect x="119" y="60" width="21" height="65" fill="var(--background)" />
		<rect x="100" y="91" width="9" height="34" fill="var(--background)" />
		<path d="M71 141H100" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M149 141H178" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M151 120H154" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M151 105H154" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M128 105L134 105" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M116 105L122 105" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M128 90H134" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M116 90H122" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M128 75H134" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M116 75H122" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M128 62H134" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M116 62H122" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M96 120H99" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M96 105H99" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M151 90H154" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M151 75H154" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M105 141L144 141" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M112 145L138 145" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M121 143L128 143" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" />
		<path
			d="M96.0498 27.7569L108.406 41.8779M154.05 27.7569L141.693 41.8779L154.05 27.7569ZM124.994 22.8779V41.8779V22.8779Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<rect
			x="108"
			y="52"
			width="35"
			height="78"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
		<rect
			x="120"
			y="115"
			width="11"
			height="15"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
		<rect
			x="143"
			y="65"
			width="21"
			height="65"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
		<rect
			x="86"
			y="91"
			width="22"
			height="39"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
	</svg>
);
