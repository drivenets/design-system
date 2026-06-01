import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './ds-workspace-layout.module.scss';
import { DsWorkspaceLayoutContext, useDsWorkspaceLayoutContext } from './ds-workspace-layout.context';
import { DsIcon } from '../ds-icon';
import type {
	DsWorkspaceLayoutProps,
	DsWorkspaceLayoutHeaderProps,
	DsWorkspaceLayoutSubHeaderProps,
	DsWorkspaceLayoutContentProps,
	DsWorkspaceLayoutFooterProps,
	DsWorkspaceLayoutBodyProps,
	DsWorkspaceLayoutSideMenuProps,
	DsWorkspaceLayoutLeftPanelProps,
} from './ds-workspace-layout.types';

const DEFAULT_LOCALE = Object.freeze({
	pinButtonLabel: 'Pin side menu',
	unpinButtonLabel: 'Unpin side menu',
});

const DsWorkspaceLayout = ({ className, fillParent = false, ...rest }: DsWorkspaceLayoutProps) => {
	const [hasLeftSidePanel, setHasLeftSidePanel] = useState(false);

	const registerLeftSidePanel = useCallback(() => setHasLeftSidePanel(true), []);
	const unregisterLeftSidePanel = useCallback(() => setHasLeftSidePanel(false), []);

	const contextValue = useMemo(
		() => ({ hasLeftSidePanel, registerLeftSidePanel, unregisterLeftSidePanel }),
		[hasLeftSidePanel, registerLeftSidePanel, unregisterLeftSidePanel],
	);

	return (
		<DsWorkspaceLayoutContext.Provider value={contextValue}>
			<div {...rest} className={classNames(styles.root, { [styles.fillParent]: fillParent }, className)} />
		</DsWorkspaceLayoutContext.Provider>
	);
};

const Header = ({ className, ...rest }: DsWorkspaceLayoutHeaderProps) => (
	<header {...rest} className={classNames(styles.header, className)} />
);

const SubHeader = ({ className, ...rest }: DsWorkspaceLayoutSubHeaderProps) => (
	<div {...rest} className={classNames(styles.subHeader, className)} />
);

/** Content area: column layout, 24px vertical margins, 16px gap, 40px horizontal margins (24px when LeftPanel is mounted). */
const Content = ({ className, ...rest }: DsWorkspaceLayoutContentProps) => {
	const { hasLeftSidePanel } = useDsWorkspaceLayoutContext();

	return (
		<div
			{...rest}
			className={classNames(styles.content, { [styles.contentWithLeftPanel]: hasLeftSidePanel }, className)}
		/>
	);
};

const Footer = ({ className, ...rest }: DsWorkspaceLayoutFooterProps) => (
	<footer {...rest} className={classNames(styles.footer, className)} />
);

const Body = ({ className, ...rest }: DsWorkspaceLayoutBodyProps) => {
	useDsWorkspaceLayoutContext();

	return <div {...rest} className={classNames(styles.body, className)} />;
};

const SideMenu = ({
	className,
	pinned = false,
	onPinnedChange,
	locale,
	children,
	...rest
}: DsWorkspaceLayoutSideMenuProps) => {
	useDsWorkspaceLayoutContext();
	const [isHovering, setIsHovering] = useState(false);

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

const LeftPanel = ({ className, ...rest }: DsWorkspaceLayoutLeftPanelProps) => {
	const { registerLeftSidePanel, unregisterLeftSidePanel } = useDsWorkspaceLayoutContext();

	useEffect(() => {
		registerLeftSidePanel();

		return unregisterLeftSidePanel;
	}, [registerLeftSidePanel, unregisterLeftSidePanel]);

	return <aside {...rest} className={classNames(styles.leftPanel, className)} />;
};

DsWorkspaceLayout.Header = Header;
DsWorkspaceLayout.SubHeader = SubHeader;
DsWorkspaceLayout.Content = Content;
DsWorkspaceLayout.Footer = Footer;
DsWorkspaceLayout.Body = Body;
DsWorkspaceLayout.SideMenu = SideMenu;
DsWorkspaceLayout.LeftPanel = LeftPanel;

export default DsWorkspaceLayout;
