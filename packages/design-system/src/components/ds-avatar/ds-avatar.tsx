import type { FC } from 'react';
import { Avatar } from '@ark-ui/react/avatar';
import classNames from 'classnames';
import styles from './ds-avatar.module.scss';
import type { DsAvatarProps } from './ds-avatar.types';
import { DsTooltip } from '../ds-tooltip';

/**
 * DsAvatar component for displaying user profile pictures or initials
 */
export const DsAvatar: FC<DsAvatarProps> = ({
	src,
	alt,
	name,
	size = 'regular',
	type = 'circle',
	className,
	onStatusChange,
}) => {
	const getInitials = (name: string) => {
		const names = name.split(' ');
		if (names.length >= 2) {
			return `${names[0]?.[0]}${names[1]?.[0]}`.toUpperCase();
		}
		return name.slice(0, 2).toUpperCase();
	};

	const avatarContent = (
		<Avatar.Root
			onStatusChange={(details) => onStatusChange?.(details.status)}
			className={classNames(styles.avatar, styles[size], styles[type], className)}
		>
			<Avatar.Fallback className={styles.fallback}>{getInitials(name)}</Avatar.Fallback>
			{src && <Avatar.Image src={src} alt={alt || name} />}
		</Avatar.Root>
	);

	return <DsTooltip content={name}>{avatarContent}</DsTooltip>;
};
