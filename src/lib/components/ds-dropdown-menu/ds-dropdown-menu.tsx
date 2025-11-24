import React, { createContext, Fragment, useContext, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import styles from './ds-dropdown-menu.module.scss';
import { DsIcon } from '../ds-icon';
import DsTypography from '../ds-typography/ds-typography';
import {
	DsDropdownMenuActionsProps,
	DsDropdownMenuContentProps,
	DsDropdownMenuGroupContentProps,
	DsDropdownMenuGroupLabelProps,
	DsDropdownMenuGroupProps,
	DsDropdownMenuItemProps,
	DsDropdownMenuRootProps,
	DsDropdownMenuSearchProps,
	DsDropdownMenuSeparatorProps,
	DsDropdownMenuTriggerProps,
} from './ds-dropdown-menu.types';

/**
 * Context to share state between Group and GroupLabel
 */
interface GroupContextValue {
	collapsed: boolean;
	toggle: () => void;
}

const GroupContext = createContext<GroupContextValue | null>(null);

/**
 * Root component - manages dropdown state
 */
const Root: React.FC<DsDropdownMenuRootProps> = ({ open, onOpenChange, children }) => {
	const [internalOpen, setInternalOpen] = useState(false);

	const isControlled = open !== undefined;
	const isOpen = isControlled ? open : internalOpen;

	const handleOpenChange = (newOpen: boolean) => {
		if (!isControlled) {
			setInternalOpen(newOpen);
		}
		onOpenChange?.(newOpen);
	};

	return (
		<DropdownMenu.Root open={isOpen} onOpenChange={handleOpenChange}>
			{children}
		</DropdownMenu.Root>
	);
};

/**
 * Trigger component - wraps the trigger element
 */
const Trigger: React.FC<DsDropdownMenuTriggerProps> = ({ asChild = true, children, className, style }) => {
	return (
		<DropdownMenu.Trigger asChild={asChild} className={className} style={style}>
			{children}
		</DropdownMenu.Trigger>
	);
};

/**
 * Content component - wraps the dropdown content
 */
const Content: React.FC<DsDropdownMenuContentProps> = ({
	sideOffset = 0,
	align = 'center',
	side = 'bottom',
	disablePortal = false,
	children,
	className,
	style,
}) => {
	const Wrapper = disablePortal ? Fragment : DropdownMenu.Portal;

	return (
		<Wrapper>
			<DropdownMenu.Content
				className={classNames(styles.content, styles.viewport, className)}
				sideOffset={sideOffset}
				align={align}
				side={side}
				style={style}
			>
				{children}
			</DropdownMenu.Content>
		</Wrapper>
	);
};

/**
 * Item component - renders a menu item with optional selection indicator
 */
const Item: React.FC<DsDropdownMenuItemProps> = ({
	disabled,
	selected,
	onClick,
	children,
	className,
	style,
}) => {
	return (
		<DropdownMenu.Item
			disabled={disabled}
			className={classNames(
				styles.item,
				{
					[styles.selected]: selected,
				},
				className,
			)}
			style={style}
			onClick={onClick}
		>
			{children}
		</DropdownMenu.Item>
	);
};

/**
 * Search component - container for search input
 */
const Search: React.FC<DsDropdownMenuSearchProps> = ({ children, className, style }) => {
	return (
		<div className={classNames(styles.search, className)} style={style}>
			{children}
		</div>
	);
};

/**
 * Actions component - footer container for action buttons
 */
const Actions: React.FC<DsDropdownMenuActionsProps> = ({ children, className, style }) => {
	return (
		<div className={classNames(styles.actions, className)} style={style}>
			{children}
		</div>
	);
};

/**
 * Group component - collapsible group container
 */
const Group: React.FC<DsDropdownMenuGroupProps> = ({
	children,
	collapsed: controlledCollapsed,
	onCollapsedChange,
	className,
	style,
}) => {
	const [internalCollapsed, setInternalCollapsed] = useState(false);

	const isControlled = controlledCollapsed !== undefined;
	const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

	const toggle = () => {
		const newCollapsed = !collapsed;
		if (!isControlled) {
			setInternalCollapsed(newCollapsed);
		}
		onCollapsedChange?.(newCollapsed);
	};

	return (
		<GroupContext.Provider value={{ collapsed, toggle }}>
			<div className={classNames(styles.group, className)} style={style}>
				{children}
			</div>
		</GroupContext.Provider>
	);
};

/**
 * GroupLabel component - clickable group header with collapse indicator
 */
const GroupLabel: React.FC<DsDropdownMenuGroupLabelProps> = ({ children, className, style }) => {
	const context = useContext(GroupContext);

	if (!context) {
		// If not inside a Group, just render static label
		return (
			<DsTypography
				variant="body-sm-md"
				className={classNames(styles.groupLabel, styles.groupLabelText, className)}
				style={style}
			>
				{children}
			</DsTypography>
		);
	}

	const { collapsed, toggle } = context;

	return (
		<button
			type="button"
			className={classNames(styles.groupLabel, styles.groupLabelClickable, className)}
			style={style}
			onClick={toggle}
		>
			<DsTypography variant="body-sm-md" className={styles.groupLabelText}>
				{children}
			</DsTypography>
			<DsIcon
				icon={collapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
				className={styles.groupLabelIcon}
			/>
		</button>
	);
};

/**
 * GroupContent component - collapsible content container
 */
const GroupContent: React.FC<DsDropdownMenuGroupContentProps> = ({ children, className, style }) => {
	const context = useContext(GroupContext);

	// If not inside a Group, always render
	if (!context) {
		return (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}

	const { collapsed } = context;

	// Hide content when collapsed
	if (collapsed) {
		return null;
	}

	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
};

/**
 * Separator component - renders a visual divider
 */
const Separator: React.FC<DsDropdownMenuSeparatorProps> = ({ className, style }) => {
	return <DropdownMenu.Separator className={classNames(styles.separator, className)} style={style} />;
};

/**
 * Compound DsDropdownMenu component
 *
 * @example
 * <DsDropdownMenu.Root>
 *   <DsDropdownMenu.Trigger>
 *     <button>Open</button>
 *   </DsDropdownMenu.Trigger>
 *   <DsDropdownMenu.Content>
 *     <DsDropdownMenu.Search>
 *       <DsTextInput placeholder="Search..." />
 *     </DsDropdownMenu.Search>
 *     <DsDropdownMenu.Item onClick={...}>Item 1</DsDropdownMenu.Item>
 *     <DsDropdownMenu.Group>
 *       <DsDropdownMenu.GroupLabel>Group Name</DsDropdownMenu.GroupLabel>
 *       <DsDropdownMenu.GroupContent>
 *         <DsDropdownMenu.Item onClick={...}>Item 2</DsDropdownMenu.Item>
 *       </DsDropdownMenu.GroupContent>
 *     </DsDropdownMenu.Group>
 *     <DsDropdownMenu.Separator />
 *     <DsDropdownMenu.Actions>
 *       <DsButton>Cancel</DsButton>
 *       <DsButton>Apply</DsButton>
 *     </DsDropdownMenu.Actions>
 *   </DsDropdownMenu.Content>
 * </DsDropdownMenu.Root>
 */
export const DsDropdownMenu = {
	Root,
	Trigger,
	Content,
	Item,
	Search,
	Actions,
	Group,
	GroupLabel,
	GroupContent,
	Separator,
};

export default DsDropdownMenu;
