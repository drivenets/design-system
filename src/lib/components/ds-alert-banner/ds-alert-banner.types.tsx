import React, { ReactNode } from 'react';
import { IconType } from '../ds-icon';

export const alertBannerVariants = ['info-neutral', 'info-blue', 'warning', 'error', 'success'] as const;
export type AlertBannerVariant = (typeof alertBannerVariants)[number];

export interface DsAlertBannerProps {
	/**
	 * Controls whether the alert banner is visible
	 */
	open: boolean;
	/**
	 * Callback fired when the alert banner should be closed
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)
	 * @default false
	 */
	inline?: boolean;
	/**
	 * The variant of the alert banner
	 * @default 'info-blue'
	 */
	variant?: AlertBannerVariant;
	/**
	 * Optional icon to display using DsIcon
	 */
	icon?: IconType;
	/**
	 * Whether the alert banner can be closed with an X button
	 */
	closable?: boolean;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * Optional children to be rendered inside the component (typically action buttons)
	 */
	children?: ReactNode;
}
