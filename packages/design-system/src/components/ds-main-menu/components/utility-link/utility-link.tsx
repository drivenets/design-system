import type { KeyboardEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { DsTooltip } from '../../../ds-tooltip';
import { DsTypography } from '../../../ds-typography';
import { COMING_SOON_TOOLTIP } from '../../ds-main-menu.types';
import styles from '../../ds-main-menu.module.scss';
import { handleActivatableClick, handleActivatableKeyDown, isNonActivatable } from '../../ds-main-menu.utils';
import { MenuGraphic } from '../menu-graphic';
import type { UtilityLinkProps } from './utility-link.types';

export const UtilityLink = ({ link, onItemSelect, onClose }: UtilityLinkProps) => {
	const state = link.state ?? 'default';
	const nonActivatable = isNonActivatable(state);
	const tooltip = link.tooltip || (state === 'comingSoon' ? COMING_SOON_TOOLTIP : undefined);
	// A disabled link stays focusable when it has a tooltip, so keyboard users can read it.
	const focusable = state !== 'disabled' || Boolean(tooltip);
	// An unavailable link drops its `href`, so it can't be opened in a new tab either.
	const href = nonActivatable ? undefined : link.href;

	const commonProps = {
		className: classNames(styles.utilityLink, nonActivatable && styles.utilityLinkDisabled),
		'aria-disabled': nonActivatable ? true : undefined,
		tabIndex: !focusable ? -1 : nonActivatable && link.href ? 0 : undefined,
		onClick: nonActivatable
			? (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => event.preventDefault()
			: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableClick(event, link.id, href, onItemSelect, onClose),
		onKeyDown: nonActivatable
			? undefined
			: (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableKeyDown(event, link.id, href, onItemSelect, onClose),
	};

	const content = (
		<>
			<span className={styles.utilityIcon}>
				<MenuGraphic icon={link.icon} svgClassName={styles.graphic} size="small" />
			</span>
			{/* The link tooltip replaces the label's truncation tooltip, so only one shows on hover. */}
			<DsTypography variant="body-xs-reg" className={styles.utilityLabel} truncate tooltip={!tooltip}>
				{link.label}
			</DsTypography>
		</>
	);

	const element = link.href ? (
		<a href={href} role={href ? undefined : 'link'} {...commonProps}>
			{content}
		</a>
	) : (
		<button type="button" {...commonProps}>
			{content}
		</button>
	);

	return (
		<DsTooltip content={tooltip} placement="top">
			{element}
		</DsTooltip>
	);
};
