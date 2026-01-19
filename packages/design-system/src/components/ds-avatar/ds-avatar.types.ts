import type { CSSProperties } from 'react';

export type DsAvatarSize = 'xsm' | 'sm' | 'regular' | 'md' | 'lg' | 'xl';
export type DsAvatarType = 'circle' | 'rounded';

export interface DsAvatarProps {
	/**
	 * Image source URL
	 */
	src?: string;
	/**
	 * Alt text for the image
	 */
	alt?: string;
	/**
	 * Name to display in tooltip and as initials if image fails
	 */
	name: string;
	/**
	 * Size of the avatar
	 * @default 'regular'
	 */
	size?: DsAvatarSize;
	/**
	 * Shape of the avatar
	 * @default 'circle'
	 */
	type?: DsAvatarType;
	/**
	 * Custom class name
	 */
	className?: string;
	/**
	 * Custom inline styles
	 */
	style?: CSSProperties;
	/**
	 * Callback when the status of the image changes
	 */
	onStatusChange?: (status: 'error' | 'loaded') => void;
}
