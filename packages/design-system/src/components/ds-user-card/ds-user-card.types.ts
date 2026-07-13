import type { CSSProperties } from 'react';

export interface DsUserCardProps {
	/**
	 * Full name shown as the title. Also drives the avatar initials fallback,
	 * image alt text, and hover tooltip.
	 */
	name: string;
	/**
	 * Secondary line rendered under the name, such as an email address or role.
	 */
	subtitle?: string;
	/**
	 * Avatar image URL. Falls back to initials derived from `name` when omitted
	 * or when the image fails to load.
	 */
	src?: string;
	/**
	 * Custom class name applied to the root element.
	 */
	className?: string;
	/**
	 * Custom inline styles applied to the root element.
	 */
	style?: CSSProperties;
}
