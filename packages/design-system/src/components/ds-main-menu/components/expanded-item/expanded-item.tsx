import type { KeyboardEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsIcon } from '../../../ds-icon';
import { DsTooltip } from '../../../ds-tooltip';
import { DsTypography } from '../../../ds-typography';
import { COMING_SOON_TOOLTIP, EXTEND_TOOLTIP } from '../../ds-main-menu.types';
import styles from '../../ds-main-menu.module.scss';
import { handleActivatableClick, handleActivatableKeyDown, isNonActivatable } from '../../ds-main-menu.utils';
import { MenuGraphic } from '../menu-graphic';
import type { ExpandedItemProps } from './expanded-item.types';

export const ExpandedItem = ({ item, isSelected, onItemSelect, onClose }: ExpandedItemProps) => {
	const state = item.state ?? 'default';
	const nonActivatable = isNonActivatable(state);
	const isDisabled = state === 'disabled';
	const isComingSoon = state === 'comingSoon';

	const linkClassName = classNames(styles.expandedLink, {
		[styles.expandedLinkSelected]: isSelected,
		[styles.expandedLinkDisabled]: isDisabled,
		[styles.expandedLinkComingSoon]: isComingSoon,
	});

	const commonProps = {
		className: linkClassName,
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

	const content = (
		<>
			<span className={styles.expandedIcon} aria-hidden="true">
				<MenuGraphic icon={item.icon} svgClassName={styles.graphic} size="extra-large" />
			</span>
			<span className={styles.expandedText}>
				<DsTypography variant="heading2" asChild>
					<span>{item.label}</span>
				</DsTypography>
				{item.description && (
					<DsTypography variant="body-sm-reg" className={styles.expandedDescription}>
						{item.description}
					</DsTypography>
				)}
			</span>
		</>
	);

	const primaryLink = item.href ? (
		<a href={item.href} {...commonProps}>
			{content}
		</a>
	) : (
		<button type="button" {...commonProps}>
			{content}
		</button>
	);

	const action = (() => {
		if (item.statusBadge !== undefined) {
			return item.statusBadge === null ? null : (
				<span className={styles.expandedActionBadge}>{item.statusBadge}</span>
			);
		}

		if (state === 'extend') {
			return (
				<DsTooltip content={EXTEND_TOOLTIP} placement="top">
					<DsButtonV3
						icon="open_in_full"
						variant="secondary"
						size="small"
						aria-label={`Open ${item.label}`}
						onClick={(event) => handleActivatableClick(event, item.id, undefined, onItemSelect, onClose)}
					/>
				</DsTooltip>
			);
		}

		if (isComingSoon) {
			return (
				<DsTooltip content={COMING_SOON_TOOLTIP} placement="top">
					<span className={styles.expandedActionBadge}>
						<DsIcon icon="handyman" size="tiny" color="main" />
					</span>
				</DsTooltip>
			);
		}

		return null;
	})();

	return (
		<>
			{primaryLink}
			{action !== null && <span className={styles.expandedAction}>{action}</span>}
		</>
	);
};
