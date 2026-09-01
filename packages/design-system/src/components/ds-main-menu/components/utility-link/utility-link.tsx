import type { KeyboardEvent, MouseEvent } from 'react';
import { DsTypography } from '../../../ds-typography';
import styles from '../../ds-main-menu.module.scss';
import { handleActivatableClick, handleActivatableKeyDown } from '../../ds-main-menu.utils';
import { MenuGraphic } from '../menu-graphic';
import type { UtilityLinkProps } from './utility-link.types';

export const UtilityLink = ({ link, onItemSelect, onClose }: UtilityLinkProps) => {
	const commonProps = {
		className: styles.utilityLink,
		onClick: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
			handleActivatableClick(event, link.id, link.href, onItemSelect, onClose),
		onKeyDown: (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
			handleActivatableKeyDown(event, link.id, link.href, onItemSelect, onClose),
	};

	const content = (
		<>
			<span className={styles.utilityIcon}>
				<MenuGraphic icon={link.icon} svgClassName={styles.graphic} size="small" />
			</span>
			<DsTypography variant="body-xs-reg" className={styles.utilityLabel} truncate tooltip>
				{link.label}
			</DsTypography>
		</>
	);

	return link.href ? (
		<a href={link.href} {...commonProps}>
			{content}
		</a>
	) : (
		<button type="button" {...commonProps}>
			{content}
		</button>
	);
};
