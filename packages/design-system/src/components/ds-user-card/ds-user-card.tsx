import type { FC } from 'react';
import classNames from 'classnames';
import styles from './ds-user-card.module.scss';
import type { DsUserCardProps } from './ds-user-card.types';
import { DsAvatar } from '../ds-avatar';
import { DsTypography } from '../ds-typography';

/**
 * @summary Compact identity header pairing an avatar with a name and optional subtitle.
 *
 * Presentational card used as the header of a user menu. Renders a medium
 * `DsAvatar` (initials fallback derived from `name`) beside a two-line text
 * block; both lines truncate with an ellipsis when they overflow.
 */
export const DsUserCard: FC<DsUserCardProps> = ({ name, subtitle, src, className, style }) => {
	return (
		<div className={classNames(styles.userCard, className)} style={style}>
			<DsAvatar name={name} src={src} size="md" />
			<div className={styles.text}>
				<DsTypography variant="heading4" color="main" className={styles.name}>
					{name}
				</DsTypography>
				{subtitle && (
					<DsTypography variant="body-xs-reg" color="secondary" className={styles.subtitle}>
						{subtitle}
					</DsTypography>
				)}
			</div>
		</div>
	);
};
