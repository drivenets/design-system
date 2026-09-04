import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const NoSearchResultIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
			d="M120.5 133C139.002 133 154 118.002 154 99.5C154 80.9985 139.002 66 120.5 66C101.998 66 87 80.9985 87 99.5C87 118.002 101.998 133 120.5 133Z"
			fill="var(--color-dap-blue-050)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096"
			fill="var(--background)"
		/>
		<path
			d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M103.797 120.075C105.945 121.821 108.372 123.237 111.001 124.247"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path d="M148 126L154 132" stroke="var(--color-dap-blue-700)" strokeWidth="2.5" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M153.03 131.03C151.138 132.923 151.138 135.992 153.03 137.884L164.116 148.97C166.008 150.862 169.077 150.862 170.97 148.97C172.863 147.077 172.863 144.008 170.97 142.116L159.885 131.03C157.992 129.138 154.923 129.138 153.03 131.03Z"
			fill="var(--color-dap-blue-075)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
		/>
		<path d="M158 133L169 144" stroke="var(--background)" strokeWidth="2.5" strokeLinecap="round" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M114 88C114 99.598 123.402 109 135 109C137.278 109 139.472 108.637 141.526 107.966C138.173 116.287 130.023 122.161 120.5 122.161C107.985 122.161 97.8394 112.015 97.8394 99.5C97.8394 88.1596 106.17 78.7648 117.045 77.1011C115.113 80.2793 114 84.0097 114 88Z"
			fill="var(--color-dap-blue-075)"
		/>
		<path
			d="M121 81C119.727 81 118.482 81.1253 117.279 81.3642M113.645 82.4761C106.804 85.3508 102 92.1144 102 100"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M174.176 99.7773H166M180.5 92H163.324H180.5ZM187.5 92H185.279H187.5Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M84.1758 121.777H76M79.5 113H62.3242H79.5ZM56.5 113H52.2788H56.5Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
