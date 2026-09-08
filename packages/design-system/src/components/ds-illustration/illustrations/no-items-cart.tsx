import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const NoItemsCartIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
			d="M167 148H189.428M64 148H85.4541H64ZM51.1279 148H58H51.1279ZM194.128 148H197H194.128Z"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M98 43.3027L109.1 55.7559M150.1 43.3027L139 55.7559L150.1 43.3027ZM124 39V55.7559V39Z"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M92.7976 71H155.404L149.798 79.4098L157.273 85.0164H90.9287L99.3385 79.4098L92.7976 71Z"
			fill="var(--color-dap-blue-075)"
		/>
		<rect x="89" y="83" width="71" height="75" rx="2" fill="var(--background)" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M93.5852 124.006V89.6453C93.5852 88.2296 94.7454 87.082 96.1767 87.082L157.153 151.164C157.153 153.052 155.642 154.582 153.778 154.582H96.9601C95.0962 154.582 93.5852 153.052 93.5852 151.164V138.395V134.93V124.006ZM93.5852 131.425V127.576V131.425Z"
			fill="var(--color-dap-blue-075)"
		/>
		<path
			d="M90 124.463V86.8853C90 85.337 91.2705 84.082 92.8377 84.082H157.761C158.782 84.082 159.609 84.9187 159.609 85.9508V154.164C159.609 156.228 157.954 157.902 155.913 157.902H93.6956C91.6546 157.902 90 156.228 90 154.164V140.199V136.41M90 132.576V128.368"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M91.8631 84.082V72.8689C91.8631 71.8367 92.614 71 93.5403 71H155.596C156.522 71 157.273 71.8367 157.273 72.8689V84.082"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
		/>
		<path
			d="M109.15 103.705C110.956 103.705 112.42 102.241 112.42 100.434C112.42 98.6282 110.956 97.1639 109.15 97.1639C107.344 97.1639 105.879 98.6282 105.879 100.434C105.879 102.241 107.344 103.705 109.15 103.705Z"
			fill="var(--color-dap-blue-075)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M139.986 103.705C141.792 103.705 143.257 102.241 143.257 100.434C143.257 98.6282 141.792 97.1639 139.986 97.1639C138.18 97.1639 136.716 98.6282 136.716 100.434C136.716 102.241 138.18 103.705 139.986 103.705Z"
			fill="var(--color-dap-blue-075)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M139.519 103.705C139.519 111.962 132.825 118.656 124.568 118.656C116.311 118.656 109.617 111.962 109.617 103.705"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M92.8545 71.9315L99.4329 78.4251C99.8259 78.8131 99.8301 79.4463 99.4421 79.8393C99.3749 79.9073 99.2984 79.9654 99.2148 80.0117L91.863 84.082"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M156.44 71.9992L150.145 78.4197C149.758 78.814 149.765 79.4472 150.159 79.8338C150.225 79.8984 150.299 79.9535 150.38 79.9976L157.867 84.082"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
	</svg>
);
