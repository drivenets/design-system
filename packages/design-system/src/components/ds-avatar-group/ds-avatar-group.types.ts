import type { DsAvatarProps, DsAvatarSize, DsAvatarType } from '../ds-avatar';

export interface DsAvatarGroupProps {
	/**
	 * Array of avatar items
	 */
	avatars: Omit<DsAvatarProps, 'size' | 'type'>[];
	/**
	 * Size of the avatars in the group
	 * @default 'regular'
	 */
	size?: DsAvatarSize;
	/**
	 * Shape of the avatars in the group
	 * @default 'circle'
	 */
	type?: DsAvatarType;
	/**
	 * Maximum number of avatars to show before collapsing
	 * @default 5
	 */
	max?: number;
	/**
	 * Custom class name
	 */
	className?: string;
}
