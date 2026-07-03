import type { FC } from 'react';
import { Avatar } from '@ark-ui/react/avatar';
import classNames from 'classnames';
import styles from './ds-avatar.module.scss';
import type { DsAvatarProps } from './ds-avatar.types';
import { DsTooltip } from '../ds-tooltip';

/**
 * @summary Displays a user's profile picture, falling back to initials.
 *
 * Renders a circular or rounded avatar from an image `src`. When the image is
 * missing or fails to load, the trimmed initials derived from `name` are shown
 * instead, and `name` is surfaced in a tooltip on hover.
 */
export const DsAvatar: FC<DsAvatarProps> = ({
	src,
	alt,
	name,
	size = 'regular',
	type = 'circle',
	className,
	style,
	onStatusChange,
}) => {
	const getInitials = (name: string) =>
		name
			.trim()
			.split(' ')
			.map((w) => w[0])
			.join('');

	return (
		<DsTooltip content={name}>
			{
				<Avatar.Root
					onStatusChange={(details) => onStatusChange?.(details.status)}
					className={classNames(styles.avatar, styles[size], styles[type], className)}
					style={style}
				>
					<Avatar.Fallback className={styles.fallback}>{getInitials(name)}</Avatar.Fallback>
					{src && <Avatar.Image src={src} alt={alt || name} />}
				</Avatar.Root>
			}
		</DsTooltip>
	);
};
