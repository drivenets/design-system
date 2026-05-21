import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './ds-catalog.module.scss';
import { DsCatalogContext, useDsCatalogContext } from './ds-catalog.context';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import emptyIllustration from './assets/catalog-empty-illustration.svg';
import type {
	DsCatalogProps,
	DsCatalogHeaderProps,
	DsCatalogSideMenuProps,
	DsCatalogSideMenuItemProps,
	DsCatalogBodyProps,
	DsCatalogMainProps,
	DsCatalogContentProps,
	DsCatalogContentHeaderProps,
	DsCatalogResultsProps,
	DsCatalogEmptyProps,
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

const SideMenuItem = ({
	className,
	icon,
	label,
	selected = false,
	'aria-label': ariaLabel,
	...rest
}: DsCatalogSideMenuItemProps) => (
	<button
		type="button"
		{...rest}
		className={classNames(styles.sideMenuItem, className)}
		aria-label={ariaLabel ?? label}
		aria-current={selected ? 'page' : undefined}
		{...(selected ? { 'data-selected': '' } : {})}
	>
		<DsIcon icon={icon} size="small" />
		{label ? (
			<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
				{label}
			</DsTypography>
		) : null}
	</button>
);

const Main = ({ className, ...rest }: DsCatalogMainProps) => (
	<div {...rest} className={classNames(styles.main, className)} />
);

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

const Results = ({ className, ...rest }: DsCatalogResultsProps) => (
	<div {...rest} className={classNames(styles.results, className)} role="region" />
);

const Empty = ({ className, children, ...rest }: DsCatalogEmptyProps) => (
	<div {...rest} className={classNames(styles.empty, className)} role="status">
		<img
			className={styles.emptyIllustration}
			src={emptyIllustration}
			alt=""
			width={250}
			height={200}
			data-testid="catalog-empty-illustration"
		/>
		{children ? <div className={styles.emptyContent}>{children}</div> : null}
	</div>
);

DsCatalog.Header = Header;
DsCatalog.Body = Body;
DsCatalog.SideMenu = SideMenu;
DsCatalog.SideMenuItem = SideMenuItem;
DsCatalog.Main = Main;
DsCatalog.Content = Content;
DsCatalog.ContentHeader = ContentHeader;
DsCatalog.Results = Results;
DsCatalog.Empty = Empty;

export default DsCatalog;
