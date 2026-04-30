import type { MouseEvent, CSSProperties, FunctionComponent, SVGProps } from 'react';
import type { IconPrefix, materialIcons } from './material-icons';
import type { CustomIconName } from './custom-icons';

export const iconSizes = ['tiny', 'small', 'medium', 'large', 'extra-large'] as const;
export type IconSize = (typeof iconSizes)[number];
export const iconVariants = ['outlined', 'rounded'] as const;
export type IconVariant = (typeof iconVariants)[number];

export const iconColors = [
	'action',
	'action-hover',
	'action-secondary',
	'disabled',
	'error',
	'execution',
	'information-main',
	'information-secondary',
	'inverse',
	'main',
	'on-button',
	'on-dark-disabled',
	'pause',
	'pending',
	'secondary',
	'success',
	'success-light',
	'warning',
	'warning-light',
] as const;
export type IconColor = (typeof iconColors)[number];

export type MaterialIconName = {
	[K in keyof typeof materialIcons]: K extends `${IconPrefix}::${infer Name}` ? Name : never;
}[keyof typeof materialIcons];

export type IconName = MaterialIconName | CustomIconName;

export type IconType = IconName | FunctionComponent<SVGProps<SVGSVGElement>>;

export interface DsIconProps {
	/**
	 * The icon to display. This can be a Material Icon name (e.g., 'home') or an SVG component.
	 */
	icon: IconType;

	/**
	 * The size of the icon
	 * @default 'medium'
	 */
	size?: IconSize;

	/**
	 * The variant of the Material Icon
	 * @default 'outlined'
	 */
	variant?: IconVariant;

	/**
	 * Whether the icon should be filled
	 * @default false
	 */
	filled?: boolean;

	/**
	 * Icon color. Semantic names map to `--icon-*` tokens (e.g. `'error'` →
	 * `var(--icon-error)`); raw CSS values (hex, rgb, hsl, CSS variables)
	 * pass through unchanged. Omit to inherit from parent.
	 */
	color?: IconColor | (string & {});

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply to the icon
	 */
	style?: CSSProperties;

	/**
	 * Optional click handler
	 */
	onClick?: (event: MouseEvent<HTMLSpanElement | SVGSVGElement>) => void;
}
