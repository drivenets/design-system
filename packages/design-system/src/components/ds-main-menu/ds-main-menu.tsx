import type { KeyboardEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { DsDivider } from '../ds-divider';
import { DsIcon } from '../ds-icon';
import { DsTooltip } from '../ds-tooltip';
import styles from './ds-main-menu.module.scss';
import {
	COMING_SOON_TOOLTIP,
	type DsMainMenuItem,
	type DsMainMenuProps,
	type DsMainMenuUtilityLink,
} from './ds-main-menu.types';

const isNonActivatable = (state: DsMainMenuItem['state']) => state === 'disabled' || state === 'comingSoon';

const handleActivatableClick = (
	event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
) => {
	if (!href) {
		event.preventDefault();
	}

	onItemSelect?.(id);
};

const handleActivatableKeyDown = (
	event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
) => {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	event.preventDefault();

	if (!href) {
		onItemSelect?.(id);
		return;
	}

	onItemSelect?.(id);
	(event.currentTarget as HTMLAnchorElement).click();
};

interface TileLinkProps {
	item: DsMainMenuItem;
	isSelected: boolean;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
}

const TileLink = ({ item, isSelected, onItemSelect }: TileLinkProps) => {
	const state = item.state ?? 'default';
	const nonActivatable = isNonActivatable(state);
	const tileClassName = classNames(styles.tileLink, {
		[styles.tileLinkSelected]: isSelected,
		[styles.tileLinkDisabled]: state === 'disabled',
		[styles.tileLinkComingSoon]: state === 'comingSoon',
	});

	const isDisabled = state === 'disabled';
	const isComingSoon = state === 'comingSoon';

	const commonProps = {
		className: tileClassName,
		'aria-current': isSelected ? ('page' as const) : undefined,
		'aria-disabled': nonActivatable ? true : undefined,
		tabIndex: isDisabled ? -1 : undefined,
		onClick: nonActivatable
			? (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => event.preventDefault()
			: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableClick(event, item.id, item.href, onItemSelect),
		onKeyDown: nonActivatable
			? undefined
			: (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
					handleActivatableKeyDown(event, item.id, item.href, onItemSelect),
	};

	const content = (
		<>
			<span className={styles.tileIcon}>
				<DsIcon icon={item.icon} size="extra-large" color={nonActivatable ? 'disabled' : 'action'} />
			</span>
			<span className={styles.tileLabel}>{item.label}</span>
			{state === 'comingSoon' && (
				<span className={styles.comingSoonBadge} aria-hidden="true">
					<DsIcon icon="handyman" size="tiny" color="main" />
				</span>
			)}
		</>
	);

	const link = item.href ? (
		<a href={item.href} {...commonProps}>
			{content}
		</a>
	) : (
		<button type="button" {...commonProps}>
			{content}
		</button>
	);

	if (isComingSoon) {
		return <DsTooltip content={COMING_SOON_TOOLTIP}>{link}</DsTooltip>;
	}

	return link;
};

interface UtilityLinkProps {
	link: DsMainMenuUtilityLink;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
}

const UtilityLink = ({ link, onItemSelect }: UtilityLinkProps) => {
	const commonProps = {
		className: styles.utilityLink,
		onClick: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
			handleActivatableClick(event, link.id, link.href, onItemSelect),
		onKeyDown: (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
			handleActivatableKeyDown(event, link.id, link.href, onItemSelect),
	};

	const content = (
		<>
			<span className={styles.utilityIcon}>
				<DsIcon icon={link.icon} size="small" color="main" />
			</span>
			<span>{link.label}</span>
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
	items,
	utilityLinks,
	selectedId,
	onItemSelect,
	className,
	'aria-label': ariaLabel = 'Main menu',
}: DsMainMenuProps) => (
	<nav className={classNames(styles.root, className)} aria-label={ariaLabel}>
		<ul className={styles.grid}>
			{items.map((item) => (
				<li key={item.id} className={styles.tile}>
					<TileLink item={item} isSelected={item.id === selectedId} onItemSelect={onItemSelect} />
				</li>
			))}
		</ul>
		{utilityLinks.length > 0 && (
			<div className={styles.footer}>
				<DsDivider />
				<ul className={styles.utilityList}>
					{utilityLinks.map((link) => (
						<li key={link.id} className={styles.utilityItem}>
							<UtilityLink link={link} onItemSelect={onItemSelect} />
						</li>
					))}
				</ul>
			</div>
		)}
	</nav>
);

DsMainMenu.displayName = 'DsMainMenu';

export default DsMainMenu;
