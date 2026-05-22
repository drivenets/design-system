import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './ds-catalog-layout.module.scss';
import { DsCatalogLayoutContext, useDsCatalogLayoutContext } from './ds-catalog-layout.context';
import { DsIcon } from '../ds-icon';
import type {
	DsCatalogLayoutProps,
	DsCatalogLayoutHeaderProps,
	DsCatalogLayoutSideMenuProps,
	DsCatalogLayoutBodyProps,
	DsCatalogLayoutContentProps,
	DsCatalogLayoutContentHeaderProps,
} from './ds-catalog-layout.types';

const DEFAULT_LOCALE = Object.freeze({
	pinButtonLabel: 'Pin side menu',
	unpinButtonLabel: 'Unpin side menu',
});

const DsCatalogLayout = ({ className, fillParent = false, ...rest }: DsCatalogLayoutProps) => {
	const [hasSideMenu, setHasSideMenu] = useState(false);

	const registerSideMenu = useCallback(() => setHasSideMenu(true), []);
	const unregisterSideMenu = useCallback(() => setHasSideMenu(false), []);

	const contextValue = useMemo(
		() => ({ hasSideMenu, registerSideMenu, unregisterSideMenu }),
		[hasSideMenu, registerSideMenu, unregisterSideMenu],
	);

	return (
		<DsCatalogLayoutContext.Provider value={contextValue}>
			<div {...rest} className={classNames(styles.root, { [styles.fillParent]: fillParent }, className)} />
		</DsCatalogLayoutContext.Provider>
	);
};

const Header = ({ className, ...rest }: DsCatalogLayoutHeaderProps) => (
	<header {...rest} className={classNames(styles.header, className)} />
);

const Body = ({ className, ...rest }: DsCatalogLayoutBodyProps) => (
	<div {...rest} className={classNames(styles.body, className)} />
);

const SideMenu = ({
	className,
	pinned = false,
	onPinnedChange,
	locale,
	children,
	...rest
}: DsCatalogLayoutSideMenuProps) => {
	const { registerSideMenu, unregisterSideMenu } = useDsCatalogLayoutContext();
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		registerSideMenu();

		return unregisterSideMenu;
	}, [registerSideMenu, unregisterSideMenu]);

	const isExpanded = pinned || isHovering;
	const ariaLabel = pinned
		? (locale?.unpinButtonLabel ?? DEFAULT_LOCALE.unpinButtonLabel)
		: (locale?.pinButtonLabel ?? DEFAULT_LOCALE.pinButtonLabel);

	return (
		<aside
			{...rest}
			className={classNames(styles.sideMenu, className)}
			{...(pinned ? { 'data-pinned': '' } : {})}
			{...(isExpanded ? { 'data-expanded': '' } : {})}
		>
			<div
				className={styles.sideMenuPanel}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				{onPinnedChange ? (
					<button
						type="button"
						className={styles.sideMenuPinButton}
						onClick={() => onPinnedChange(!pinned)}
						aria-label={ariaLabel}
						aria-pressed={pinned}
					>
						<DsIcon icon="keep" size="small" filled={pinned} />
					</button>
				) : null}
				{children}
			</div>
		</aside>
	);
};

const Content = ({ className, ...rest }: DsCatalogLayoutContentProps) => {
	const { hasSideMenu } = useDsCatalogLayoutContext();

	return (
		<div
			{...rest}
			className={classNames(styles.content, { [styles.contentWithSideMenu]: hasSideMenu }, className)}
		/>
	);
};

const ContentHeader = ({
	className,
	title,
	headerActions,
	children,
	...rest
}: DsCatalogLayoutContentHeaderProps) => (
	<div {...rest} className={classNames(styles.contentHeader, className)}>
		<div className={styles.contentHeaderTitleRow}>
			<div className={styles.contentHeaderTitle}>{title}</div>
			{headerActions ? <div className={styles.contentHeaderActions}>{headerActions}</div> : null}
		</div>
		{children ? <div className={styles.contentHeaderItem}>{children}</div> : null}
	</div>
);

DsCatalogLayout.Header = Header;
DsCatalogLayout.Body = Body;
DsCatalogLayout.SideMenu = SideMenu;
DsCatalogLayout.Content = Content;
DsCatalogLayout.ContentHeader = ContentHeader;

export default DsCatalogLayout;
