import type { FC } from 'react';
import classNames from 'classnames';
import styles from './ds-avatar-group.module.scss';
import type { DsAvatarGroupProps } from './ds-avatar-group.types';
import { DsAvatar } from '../ds-avatar';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';

/**
 * DsAvatarGroup component for displaying a list of avatars with overlap
 */
export const DsAvatarGroup: FC<DsAvatarGroupProps> = ({
	avatars,
	size = 'regular',
	type = 'circle',
	max = 5,
	className,
}) => {
	const visibleAvatars = avatars.slice(0, max);
	const hiddenAvatars = avatars.slice(max);
	const remainingCount = avatars.length - max;

	return (
		<div className={classNames(styles.avatarGroup, className)}>
			{visibleAvatars.map((avatar, index) => (
				<DsAvatar
					key={`${avatar.name}-${String(index)}`}
					{...avatar}
					size={size}
					type={type}
					className={styles.avatarItem}
				/>
			))}
			{remainingCount > 0 && (
				<DsTooltip
					content={
						<div className={styles.tooltipList}>
							{hiddenAvatars.map((avatar, index) => (
								<div key={`${avatar.name}-${String(index)}`}>
									<DsTypography variant="body-xs-reg">{avatar.name}</DsTypography>
								</div>
							))}
						</div>
					}
				>
					<div className={classNames(styles.moreAvatar, styles[size], styles[type])}>+{remainingCount}</div>
				</DsTooltip>
			)}
		</div>
	);
};
