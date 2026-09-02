import classNames from 'classnames';
import styles from './ds-top-bar-navigation.module.scss';
import { DsAvatar } from '../ds-avatar';
import { DsButtonV3 } from '../ds-button-v3';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsIcon } from '../ds-icon';
import {
	notificationCountCap,
	type DsTopBarNavigationActionsProps,
	type DsTopBarNavigationBreadcrumbProps,
	type DsTopBarNavigationCenterProps,
	type DsTopBarNavigationLogoProps,
	type DsTopBarNavigationNotificationsProps,
	type DsTopBarNavigationProps,
	type DsTopBarNavigationUserMenuProps,
} from './ds-top-bar-navigation.types';

const DEFAULT_LOCALE = Object.freeze({
	appsButtonLabel: 'Apps',
	notificationsButtonLabel: 'Notifications',
	notificationsButtonLabelWithCount: (count: number) => `Notifications, ${String(count)} unread`,
	userMenuButtonLabel: (name: string) => `Account menu for ${name}`,
});

const DEFAULT_USER_MENU_POSITIONING = Object.freeze({ placement: 'bottom-end' } as const);

const DsTopBarNavigationRoot = ({ className, ...rest }: DsTopBarNavigationProps) => (
	<div {...rest} className={classNames(styles.root, className)} />
);

const Logo = ({
	className,
	logo,
	wordmark,
	href,
	locale,
	onLogoClick,
	onAppsClick,
	appsMenu,
	...rest
}: DsTopBarNavigationLogoProps) => {
	const lockup = (
		<>
			{logo ? <span className={styles.logoGlyph}>{logo}</span> : null}
			{wordmark ? <span className={styles.logoWordmark}>{wordmark}</span> : null}
		</>
	);

	return (
		<div {...rest} className={classNames(styles.logo, className)}>
			{href ? (
				<a className={styles.logoLockup} href={href} aria-label={locale?.homeLinkLabel} onClick={onLogoClick}>
					{lockup}
				</a>
			) : (
				<span className={styles.logoLockup}>{lockup}</span>
			)}

			{appsMenu}

			{!appsMenu && onAppsClick ? (
				<DsButtonV3
					variant="tertiary"
					color="light"
					size="small"
					icon="apps"
					aria-label={locale?.appsButtonLabel ?? DEFAULT_LOCALE.appsButtonLabel}
					onClick={onAppsClick}
				/>
			) : null}
		</div>
	);
};

const Breadcrumb = ({ className, ...rest }: DsTopBarNavigationBreadcrumbProps) => (
	<div {...rest} className={classNames(styles.breadcrumb, className)} />
);

/** Reserved zone between the breadcrumb trail and the actions. Empty by design today. */
const Center = ({ className, ...rest }: DsTopBarNavigationCenterProps) => (
	<div {...rest} className={classNames(styles.center, className)} />
);

const Actions = ({ className, ...rest }: DsTopBarNavigationActionsProps) => (
	<div {...rest} className={classNames(styles.actions, className)} />
);

const Notifications = ({ count = 0, locale, ...rest }: DsTopBarNavigationNotificationsProps) => {
	const hasCount = count > 0;
	const label = hasCount
		? (locale?.notificationsButtonLabelWithCount ?? DEFAULT_LOCALE.notificationsButtonLabelWithCount)(count)
		: (locale?.notificationsButtonLabel ?? DEFAULT_LOCALE.notificationsButtonLabel);

	return (
		<DsButtonV3 {...rest} variant="tertiary" size="small" icon="notifications_active" aria-label={label}>
			{/*
				Always rendered so DsButtonV3 never switches to its icon-only geometry,
				which would re-pad the bell when the count clears.
			*/}
			<span className={styles.notificationsBadge} aria-hidden data-empty={hasCount ? undefined : ''}>
				{count > notificationCountCap ? `${String(notificationCountCap)}+` : count}
			</span>
		</DsButtonV3>
	);
};

const UserMenu = ({
	className,
	name,
	src,
	children,
	open,
	positioning,
	locale,
	onOpenChange,
	onSelect,
	...rest
}: DsTopBarNavigationUserMenuProps) => (
	<DsDropdownMenu.Root
		open={open}
		// Merged, not replaced: a caller who only overrides `gutter` keeps `bottom-end`, which is
		// what stops the menu from spilling past the right edge of the bar.
		positioning={{ ...DEFAULT_USER_MENU_POSITIONING, ...positioning }}
		onOpenChange={onOpenChange}
		onSelect={onSelect}
	>
		<DsDropdownMenu.Trigger asChild>
			<button
				{...rest}
				type="button"
				className={classNames(styles.userMenuTrigger, className)}
				aria-label={(locale?.userMenuButtonLabel ?? DEFAULT_LOCALE.userMenuButtonLabel)(name)}
			>
				<DsAvatar className={styles.userMenuAvatar} name={name} src={src} size="regular" type="circle" />
				<span className={styles.userMenuCaret}>
					<DsIcon icon="arrow_drop_down" size="small" aria-hidden />
				</span>
			</button>
		</DsDropdownMenu.Trigger>
		<DsDropdownMenu.Content>{children}</DsDropdownMenu.Content>
	</DsDropdownMenu.Root>
);

DsTopBarNavigationRoot.displayName = 'DsTopBarNavigation';
Logo.displayName = 'DsTopBarNavigation.Logo';
Breadcrumb.displayName = 'DsTopBarNavigation.Breadcrumb';
Center.displayName = 'DsTopBarNavigation.Center';
Actions.displayName = 'DsTopBarNavigation.Actions';
Notifications.displayName = 'DsTopBarNavigation.Notifications';
UserMenu.displayName = 'DsTopBarNavigation.UserMenu';

const DsTopBarNavigation = Object.assign(DsTopBarNavigationRoot, {
	Logo,
	Breadcrumb,
	Center,
	Actions,
	Notifications,
	UserMenu,
});

export default DsTopBarNavigation;
