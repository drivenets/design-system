import type { FC, SVGProps } from 'react';

type NetGenLogoTone = 'color' | 'greyscale';

interface NetGenLogoProps extends Omit<SVGProps<SVGSVGElement>, 'fill'> {
	tone?: NetGenLogoTone;
}

/**
 * NetGen brand mark from Figma `DapNetGenLogoV1`. Both stops are fixed brand tokens — the mark is
 * never recolored, so it takes a `tone` rather than `currentColor`.
 *
 * Private to `DsBotButton`; promote it to its own `ds-*` component once another NetGen surface
 * (panel header, onboarding, empty state) needs it.
 *
 * @figma https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp?node-id=31155-54754
 */
export const NetGenLogo: FC<NetGenLogoProps> = ({ tone = 'color', ...props }) => {
	const light = tone === 'color' ? 'var(--net-gen-logo-dodger-blue)' : 'var(--net-gen-logo-light-grey)';
	const dark = tone === 'color' ? 'var(--net-gen-logo-ultramarine-blue)' : 'var(--net-gen-logo-dark-grey)';

	return (
		<svg
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
			focusable="false"
			{...props}
		>
			{/* Figma centers the 38x42 mark in a 48x48 box; the translate keeps that padding. */}
			<g transform="translate(5 3)">
				<path
					d="M25.9488 0C32.6087 0.000155233 38 5.42946 38 12.1166C37.9999 14.9274 37.0454 17.5138 35.4473 19.5689C32.6256 17.7276 29.2073 18.1106 20.6082 20.8684L29.9215 4.38066H28.9932C27.8806 5.59416 7.31397 28.1298 0.695319 18.4532C0.248329 17.3609 3.11481e-05 16.1654 0 14.9119C0.000131791 9.76874 4.14676 5.5914 9.27141 5.59122L9.50735 5.59489C11.4997 5.64494 13.3363 6.32745 14.8251 7.44859C16.6422 3.07692 20.9356 0.000118632 25.9488 0Z"
					fill={light}
				/>
				<path
					d="M7.85784 37.3463C11.933 32.4313 32.3987 15.5201 36.9093 22.5582C37.6042 23.8656 38 25.3583 38 26.9432C37.9998 32.0863 33.8527 36.2629 28.728 36.263L28.4928 36.26C26.5005 36.21 24.6639 35.5275 23.1751 34.4064C21.3581 38.778 17.0642 41.8548 12.051 41.8548C5.39126 41.8546 2.87107e-06 36.4254 0 29.7384C2.89199e-05 26.649 1.15215 23.8298 3.04582 21.6902C7.17136 24.1138 11.4572 23.3273 16.494 21.6483L6.92586 37.3463H7.85784Z"
					fill={dark}
				/>
			</g>
		</svg>
	);
};

NetGenLogo.displayName = 'NetGenLogo';
