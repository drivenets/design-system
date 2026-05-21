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

const DEFAULT_PIN_BUTTON_LABEL = Object.freeze({
	pin: 'Pin side menu',
	unpin: 'Unpin side menu',
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
	pinButtonLabel = DEFAULT_PIN_BUTTON_LABEL,
	children,
	...rest
}: DsCatalogLayoutSideMenuProps) => {
	const { registerSideMenu, unregisterSideMenu } = useDsCatalogLayoutContext();

	useEffect(() => {
		registerSideMenu();

		return unregisterSideMenu;
	}, [registerSideMenu, unregisterSideMenu]);

	const ariaLabel = pinned ? pinButtonLabel.unpin : pinButtonLabel.pin;

	return (
		<aside
			{...rest}
			className={classNames(styles.sideMenu, className)}
			{...(pinned ? { 'data-pinned': '' } : {})}
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
