import { useState, type FunctionComponent, type KeyboardEvent, type MouseEvent, type SVGProps } from 'react';
import classNames from 'classnames';
import { DsButtonV3 } from '../ds-button-v3';
import { DsDivider } from '../ds-divider';
import { DsIcon, type IconSize, type IconType } from '../ds-icon';
import { DsPopover } from '../ds-popover';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';
import styles from './ds-main-menu.module.scss';
import {
	COMING_SOON_TOOLTIP,
	EXTEND_TOOLTIP,
	type DsMainMenuItem,
	type DsMainMenuProps,
	type DsMainMenuUtilityLink,
} from './ds-main-menu.types';

const isNonActivatable = (state: DsMainMenuItem['state']) => state === 'disabled' || state === 'comingSoon';

const isSvgIcon = (icon: IconType): icon is FunctionComponent<SVGProps<SVGSVGElement>> =>
	typeof icon === 'function';

const MenuGraphic = ({
	icon,
	svgClassName,
	size,
}: {
	icon: IconType;
	svgClassName: string;
	size: IconSize;
}) => {
	if (isSvgIcon(icon)) {
		const Svg = icon;

		return <Svg className={svgClassName} />;
	}

	return <DsIcon icon={icon} size={size} />;
};

const handleActivatableClick = (
	event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
	onClose: () => void,
) => {
	if (!href) {
		event.preventDefault();
	}

	onItemSelect?.(id);
	onClose();
};

const handleActivatableKeyDown = (
	event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
	onClose: () => void,
) => {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	event.preventDefault();
	onItemSelect?.(id);
	onClose();

	if (href) {
		(event.currentTarget as HTMLAnchorElement).click();
	}
};

interface TileLinkProps {
	item: DsMainMenuItem;
	isSelected: boolean;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
	onClose: () => void;
}

const TileLink = ({ item, isSelected, onItemSelect, onClose }: TileLinkProps) => {
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

interface ExpandedItemProps {
	item: DsMainMenuItem;
	isSelected: boolean;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
	onClose: () => void;
}

const ExpandedItem = ({ item, isSelected, onItemSelect, onClose }: ExpandedItemProps) => {
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

interface UtilityLinkProps {
	link: DsMainMenuUtilityLink;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
	onClose: () => void;
}

const UtilityLink = ({ link, onItemSelect, onClose }: UtilityLinkProps) => {
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

const DsMainMenu = ({
	trigger,
	items,
	utilityLinks,
	variant = 'compact',
	selectedId,
	onItemSelect,
	className,
	style,
	ref,
	'aria-label': ariaLabel = 'Main menu',
	side = 'bottom',
	align = 'start',
	gutter = 8,
	getAnchorElement,
	open: openProp,
	onOpenChange,
}: DsMainMenuProps) => {
	const isControlled = openProp !== undefined;
	const [internalOpen, setInternalOpen] = useState(false);
	const open = isControlled ? openProp : internalOpen;

	const handleOpenChange = (nextOpen: boolean) => {
		if (!isControlled) {
			setInternalOpen(nextOpen);
		}

		onOpenChange?.(nextOpen);
	};

	const closePanel = () => handleOpenChange(false);

	return (
		<DsPopover.Root
			open={open}
			side={side}
			align={align}
			gutter={gutter}
			getAnchorElement={getAnchorElement}
			onOpenChange={handleOpenChange}
		>
			<DsPopover.Trigger>{trigger}</DsPopover.Trigger>
			<DsPopover.Panel className={styles.panel}>
				<nav
					ref={ref}
					className={classNames(styles.root, className)}
					style={style}
					aria-label={ariaLabel}
					data-variant={variant}
				>
					<ul className={styles.grid} data-variant={variant}>
						{items.map((item) => (
							<li key={item.id} className={variant === 'expanded' ? styles.expandedItem : styles.tile}>
								{variant === 'expanded' ? (
									<ExpandedItem
										item={item}
										isSelected={item.id === selectedId}
										onItemSelect={onItemSelect}
										onClose={closePanel}
									/>
								) : (
									<TileLink
										item={item}
										isSelected={item.id === selectedId}
										onItemSelect={onItemSelect}
										onClose={closePanel}
									/>
								)}
							</li>
						))}
					</ul>
					{utilityLinks.length > 0 && (
						<div className={styles.footer}>
							<DsDivider />
							<ul className={styles.utilityList}>
								{utilityLinks.map((link) => (
									<li key={link.id} className={styles.utilityItem}>
										<UtilityLink link={link} onItemSelect={onItemSelect} onClose={closePanel} />
									</li>
								))}
							</ul>
						</div>
					)}
				</nav>
			</DsPopover.Panel>
		</DsPopover.Root>
	);
};

DsMainMenu.displayName = 'DsMainMenu';

export default DsMainMenu;
