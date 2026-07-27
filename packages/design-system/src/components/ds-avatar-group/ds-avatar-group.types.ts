import type { DsAvatarProps, DsAvatarSize, DsAvatarType } from '../ds-avatar';

export interface DsAvatarGroupProps {
	/**
	 * Avatar items to display. Each item accepts `DsAvatar` props except `size`
	 * and `type`, which are set on the group. `name` is required; `src` and `alt`
	 * are optional — without `src`, initials are shown per `DsAvatar`.
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
