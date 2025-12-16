import type React from 'react';
import type { IconPrefix, materialIcons } from './material-icons';

export const iconSizes = ['tiny', 'small', 'medium', 'large', 'extra-large'] as const;
export type IconSize = (typeof iconSizes)[number];
export const iconVariants = ['outlined', 'rounded'] as const;
export type IconVariant = (typeof iconVariants)[number];

export type IconName = {
	[K in keyof typeof materialIcons]: K extends `${IconPrefix}::${infer Name}` ? Name : never;
}[keyof typeof materialIcons];

export type IconType = IconName | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

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
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply to the icon
	 */
	style?: React.CSSProperties;

	/**
	 * Optional click handler
	 */
	onClick?: (event: React.MouseEvent<HTMLSpanElement | SVGSVGElement>) => void;
}
