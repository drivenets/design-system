import type { KeyboardEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsTooltip } from '../../../ds-tooltip';
import { DsTypography } from '../../../ds-typography';
import { COMING_SOON_TOOLTIP, EXTEND_TOOLTIP } from '../../ds-main-menu.types';
import styles from '../../ds-main-menu.module.scss';
import { handleActivatableClick, handleActivatableKeyDown, isNonActivatable } from '../../ds-main-menu.utils';
import { MenuGraphic } from '../menu-graphic';
import type { TileLinkProps } from './tile-link.types';

export const TileLink = ({ item, isSelected, onItemSelect, onClose }: TileLinkProps) => {
	const state = item.state ?? 'default';
	const nonActivatable = isNonActivatable(state);
	const tileClassName = classNames(styles.tileLink, {
		[styles.tileLinkSelected]: isSelected,
		[styles.tileLinkDisabled]: state === 'disabled',
		[styles.tileLinkComingSoon]: state === 'comingSoon',
	});

	const isDisabled = state === 'disabled';

	const commonProps = {
		className: tileClassName,
		'aria-current': isSelected ? ('page' as const) : undefined,
		'aria-disabled': nonActivatable ? true : undefined,
		tabIndex: isDisabled ? -1 : undefined,
		onClick: nonActivatable
			? (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => event.preventDefault()
			: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableClick(event, item.id, item.href, onItemSelect, onClose),
		onKeyDown: nonActivatable
			? undefined
			: (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableKeyDown(event, item.id, item.href, onItemSelect, onClose),
	};

	const badgeContent =
		item.statusBadge !== undefined ? (
			item.statusBadge
		) : state === 'comingSoon' ? (
			<DsIcon icon="handyman" size="tiny" color="main" />
		) : state === 'extend' ? (
			<DsIcon icon="open_in_full" size="tiny" color="main" />
		) : null;

	const badgeTooltip =
		state === 'comingSoon' ? COMING_SOON_TOOLTIP : state === 'extend' ? EXTEND_TOOLTIP : undefined;

	const badge = badgeContent !== null && <span className={styles.badge}>{badgeContent}</span>;

	const content = (
		<>
			<span className={styles.tileIcon}>
				<MenuGraphic icon={item.icon} svgClassName={styles.graphic} size="extra-large" />
			</span>
			<DsTypography
				variant={isSelected ? 'body-sm-md' : 'body-sm-reg'}
				className={styles.tileLabel}
				truncate={2}
				tooltip
			>
				{item.label}
			</DsTypography>
			{badge &&
				(badgeTooltip ? (
					<DsTooltip content={badgeTooltip} placement="top">
						{badge}
					</DsTooltip>
				) : (
					badge
				))}
		</>
	);

	return item.href ? (
		<a href={item.href} {...commonProps}>
			{content}
		</a>
	) : (
		<button type="button" {...commonProps}>
			{content}
		</button>
	);
};
