import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react';
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
	onMouseEnter,
	onMouseLeave,
	...rest
}: DsCatalogLayoutSideMenuProps) => {
	const { registerSideMenu, unregisterSideMenu } = useDsCatalogLayoutContext();
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		registerSideMenu();

		return unregisterSideMenu;
	}, [registerSideMenu, unregisterSideMenu]);

	// Hover is tracked in JS (rather than CSS `:hover`) so that toggling `pinned` while the user is
	// hovering the panel doesn't collapse it. Without this, unpinning shrinks the <aside> away from
	// under the pointer and CSS `:hover` no longer matches.
	const isExpanded = pinned || isHovering;
	const ariaLabel = pinned
		? (locale?.unpinButtonLabel ?? DEFAULT_LOCALE.unpinButtonLabel)
		: (locale?.pinButtonLabel ?? DEFAULT_LOCALE.pinButtonLabel);

	const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
		setIsHovering(true);
		onMouseEnter?.(event);
	};

	const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
		setIsHovering(false);
		onMouseLeave?.(event);
	};

	return (
		<aside
			{...rest}
			className={classNames(styles.sideMenu, className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...(pinned ? { 'data-pinned': '' } : {})}
			{...(isExpanded ? { 'data-expanded': '' } : {})}
		>
			<div className={styles.sideMenuPanel}>
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
