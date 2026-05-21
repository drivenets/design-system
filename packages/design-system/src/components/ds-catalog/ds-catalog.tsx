import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './ds-catalog.module.scss';
import { DsCatalogContext, useDsCatalogContext } from './ds-catalog.context';
import type {
	DsCatalogProps,
	DsCatalogHeaderProps,
	DsCatalogSideMenuProps,
	DsCatalogBodyProps,
	DsCatalogContentProps,
	DsCatalogContentHeaderProps,
} from './ds-catalog.types';

const DsCatalog = ({ className, fillParent = false, ...rest }: DsCatalogProps) => {
	const [hasSideMenu, setHasSideMenu] = useState(false);

	const registerSideMenu = useCallback(() => setHasSideMenu(true), []);
	const unregisterSideMenu = useCallback(() => setHasSideMenu(false), []);

	const contextValue = useMemo(
		() => ({ hasSideMenu, registerSideMenu, unregisterSideMenu }),
		[hasSideMenu, registerSideMenu, unregisterSideMenu],
	);

	return (
		<DsCatalogContext.Provider value={contextValue}>
			<div {...rest} className={classNames(styles.root, { [styles.fillParent]: fillParent }, className)} />
		</DsCatalogContext.Provider>
	);
};

const Header = ({ className, ...rest }: DsCatalogHeaderProps) => (
	<header {...rest} className={classNames(styles.header, className)} />
);

const Body = ({ className, ...rest }: DsCatalogBodyProps) => (
	<div {...rest} className={classNames(styles.body, className)} />
);

const SideMenu = ({ className, pinned = false, children, ...rest }: DsCatalogSideMenuProps) => {
	const { registerSideMenu, unregisterSideMenu } = useDsCatalogContext();

	useEffect(() => {
		registerSideMenu();

		return unregisterSideMenu;
	}, [registerSideMenu, unregisterSideMenu]);

	return (
		<aside
			{...rest}
			className={classNames(styles.sideMenu, className)}
			{...(pinned ? { 'data-pinned': '' } : {})}
		>
			<div className={styles.sideMenuPanel}>{children}</div>
		</aside>
	);
};

const Content = ({ className, ...rest }: DsCatalogContentProps) => {
	const { hasSideMenu } = useDsCatalogContext();

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
}: DsCatalogContentHeaderProps) => (
	<div {...rest} className={classNames(styles.contentHeader, className)}>
		<div className={styles.contentHeaderTitleRow}>
			<div className={styles.contentHeaderTitle}>{title}</div>
			{headerActions ? <div className={styles.contentHeaderActions}>{headerActions}</div> : null}
		</div>
		{children ? <div className={styles.contentHeaderItem}>{children}</div> : null}
	</div>
);

DsCatalog.Header = Header;
DsCatalog.Body = Body;
DsCatalog.SideMenu = SideMenu;
DsCatalog.Content = Content;
DsCatalog.ContentHeader = ContentHeader;

export default DsCatalog;
