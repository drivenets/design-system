import type { FC, SVGProps } from 'react';
import { IllustrationClouds } from './illustration-clouds';

export const DoneIllustration: FC<SVGProps<SVGSVGElement>> = (props) => (
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
			d="M172.5 45V51"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M172.5 59V65"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M162.5 55H168.5"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M176.5 55H182.5"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M89.5 148V152"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M89.5 160V164"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M81.5 156H85.5"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M93.5 156H97.5"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M160.711 131.126C162.102 129.423 163.352 127.642 164.461 125.799C166.901 121.744 168.66 117.388 169.734 112.897C170.821 108.356 171.209 103.676 170.894 99.0296C170.62 94.9756 169.811 90.9475 168.465 87.0598C167.131 83.2028 165.268 79.484 162.875 76.015C161.45 73.9479 159.836 71.9696 158.034 70.1036C155.388 67.364 152.486 65.0219 149.402 63.0787C146.089 60.9908 142.566 59.3634 138.926 58.1984C134.368 56.7393 129.628 56.0054 124.886 56C121.197 55.9959 117.507 56.4328 113.902 57.3125C109.845 58.3028 105.895 59.8543 102.177 61.9692C98.9076 63.8284 95.817 66.123 92.988 68.8547C89.4328 72.2875 86.553 76.1572 84.3512 80.2985C82.1956 84.3531 80.6899 88.6682 79.8366 93.0887C78.9574 97.6429 78.7706 102.309 79.2789 106.918C79.9378 112.891 81.7643 118.768 84.7644 124.179C86.684 127.641 89.0842 130.912 91.9663 133.896C96.5416 138.634 101.883 142.183 107.604 144.535C114.562 147.397 122.081 148.489 129.465 147.8C135.662 147.221 141.765 145.387 147.361 142.29"
			fill="var(--background)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M150.701 140.378C153.607 138.508 156.191 136.175 157.872 134.291"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M167 104.617C166.714 104.622 166.427 104.625 166.14 104.625C140.886 104.625 120.209 84.9362 118.476 60C98.3752 63.1706 83 80.6526 83 101.743C83 125.081 101.825 144 125.048 144C147.309 144 165.53 126.615 167 104.617Z"
			fill="var(--color-dap-blue-075)"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M109.023 100.373C107.8 99.2433 105.903 99.33 104.785 100.567C103.668 101.803 103.753 103.721 104.977 104.851L119.096 117.889C120.808 119.47 123.465 119.349 125.029 117.618C125.095 117.544 125.095 117.544 125.158 117.469L145.307 92.9716C146.366 91.6837 146.192 89.7716 144.918 88.7008C143.644 87.63 141.752 87.806 140.693 89.0939L121.75 112.125L109.023 100.373Z"
			fill="var(--background)"
			stroke="var(--color-dap-blue-700)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
		<path
			d="M113.824 66.4131C111.874 67.1447 109.969 68.0338 108.128 69.0806C105.269 70.7072 102.565 72.7149 100.09 75.1049C99.0754 76.0846 98.1237 77.105 97.235 78.161M94.4851 81.8378C93.7785 82.9057 93.1281 84.0004 92.5342 85.1176C92.0956 85.9428 91.6877 86.7803 91.3106 87.6285"
			stroke="var(--color-dap-blue-300)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
	</svg>
);
