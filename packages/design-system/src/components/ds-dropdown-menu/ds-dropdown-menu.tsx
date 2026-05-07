import type React from 'react';
import { createContext, Fragment, useContext, useState } from 'react';
import { Menu } from '@ark-ui/react/menu';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-dropdown-menu.module.scss';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import type {
	DsDropdownMenuActionsProps,
	DsDropdownMenuContentProps,
	DsDropdownMenuHeaderProps,
	DsDropdownMenuItemGroupContentProps,
	DsDropdownMenuItemGroupLabelProps,
	DsDropdownMenuItemGroupProps,
	DsDropdownMenuItemIndicatorProps,
	DsDropdownMenuItemProps,
	DsDropdownMenuPositioning,
	DsDropdownMenuRootProps,
	DsDropdownMenuSeparatorProps,
	DsDropdownMenuTriggerItemProps,
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

const DEFAULT_POSITIONING: DsDropdownMenuPositioning = {
	placement: 'bottom-start' as const,
	gutter: 4,
};

/**
 * Root component - manages dropdown state
 */
const Root: React.FC<DsDropdownMenuRootProps> = ({
	open,
	onOpenChange,
	onSelect,
	onHighlightChange,
	positioning: customPositioning,
	preventCloseOnSelect = false,
	children,
}) => {
	const positioning = {
		...DEFAULT_POSITIONING,
		...customPositioning,
	};

	return (
		<Menu.Root
			open={open}
			onOpenChange={(details) => onOpenChange?.(details.open)}
			onSelect={(details) => onSelect?.(details.value)}
			onHighlightChange={(details) => onHighlightChange?.(details.highlightedValue)}
			positioning={positioning}
			closeOnSelect={!preventCloseOnSelect}
		>
			{children}
		</Menu.Root>
	);
};

/**
 * Trigger component - wraps the trigger element
 */
const Trigger: React.FC<DsDropdownMenuTriggerProps> = Menu.Trigger;

/**
 * Content component - wraps the dropdown content
 */
const Content: React.FC<DsDropdownMenuContentProps> = ({
	disablePortal = false,
	children,
	className,
	style,
}) => {
	const Wrapper = disablePortal ? Fragment : Portal;

	return (
		<Wrapper>
			<Menu.Positioner>
				<Menu.Content className={classNames(styles.content, className)} style={style}>
					{children}
				</Menu.Content>
			</Menu.Positioner>
		</Wrapper>
	);
};

/**
 * Item component - renders a menu item
 */
const Item: React.FC<DsDropdownMenuItemProps> = ({
	disabled,
	selected,
	value,
	asChild,
	onClick,
	onSelect,
	children,
	className,
	style,
}) => {
	return (
		<Menu.Item
			disabled={disabled}
			className={classNames(
				styles.item,
				{
					[styles.selected]: selected,
				},
				className,
			)}
			style={style}
			value={value}
			asChild={asChild}
			onClick={onClick}
			onSelect={onSelect}
		>
			{children}
		</Menu.Item>
	);
};

/**
 * ItemIndicator component - renders a selection indicator (check icon by default)
 */
const ItemIndicator: React.FC<DsDropdownMenuItemIndicatorProps> = ({ children, className, style }) => {
	return (
		<span className={classNames(styles.indicator, className)} style={style}>
			{children ?? <DsIcon icon="check" />}
		</span>
	);
};

/**
 * Header component - sticky header container for search, filters, or other controls
 */
const Header: React.FC<DsDropdownMenuHeaderProps> = ({ children, className, style }) => {
	return (
		<div className={classNames(styles.header, className)} style={style}>
			{children}
		</div>
	);
};

/**
 * Actions component - footer container for action buttons
 */
const Actions: React.FC<DsDropdownMenuActionsProps> = ({ children, className, style }) => {
	return (
		<div
			className={classNames(styles.actions, className)}
			style={style}
			role="menu"
			aria-label="Menu actions"
		>
			{children}
		</div>
	);
};

/**
 * ItemGroup component - collapsible group container
 */
const ItemGroup: React.FC<DsDropdownMenuItemGroupProps> = ({
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
			<Menu.ItemGroup className={className} style={style}>
				{children}
			</Menu.ItemGroup>
		</GroupContext.Provider>
	);
};

/**
 * ItemGroupLabel component - clickable group header with collapse indicator
 */
const ItemGroupLabel: React.FC<DsDropdownMenuItemGroupLabelProps> = ({ children, className, style }) => {
	const context = useContext(GroupContext);

	if (!context) {
		// If not inside a Group, just render static label
		return (
			<Menu.ItemGroupLabel className={classNames(styles.groupLabel, className)} style={style}>
				<DsTypography variant="body-sm-md">{children}</DsTypography>
			</Menu.ItemGroupLabel>
		);
	}

	const { collapsed, toggle } = context;

	return (
		<Menu.ItemGroupLabel asChild>
			<button
				type="button"
				className={classNames(styles.groupLabel, styles.groupLabelCollapsible, className)}
				style={style}
				onClick={toggle}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<DsTypography variant="body-sm-md">{children}</DsTypography>
				<DsIcon
					icon="keyboard_arrow_down"
					className={classNames(styles.groupLabelIcon, {
						[styles.groupLabelIconRotated]: !collapsed,
					})}
				/>
			</button>
		</Menu.ItemGroupLabel>
	);
};

/**
 * ItemGroupContent component - collapsible content container
 */
const ItemGroupContent: React.FC<DsDropdownMenuItemGroupContentProps> = ({ children, className, style }) => {
	const context = useContext(GroupContext);

	if (context?.collapsed) {
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
	return <Menu.Separator className={classNames(styles.separator, className)} style={style} />;
};

/**
 * TriggerItem component - triggers a nested submenu
 */
const TriggerItem: React.FC<DsDropdownMenuTriggerItemProps> = ({ className, style, children, ...props }) => {
	return (
		<Menu.TriggerItem className={styles.item} {...props}>
			<div className={classNames(styles.triggerItem, className)} style={style}>
				{children}
			</div>
			<DsIcon className={styles.triggerItemIcon} icon="keyboard_arrow_right" />
		</Menu.TriggerItem>
	);
};

/**
 * Design system  DsDropdownMenu component
 *
 * @example
 * <DsDropdownMenu.Root>
 *   <DsDropdownMenu.Trigger>
 *     <button>Open</button>
 *   </DsDropdownMenu.Trigger>
 *   <DsDropdownMenu.Content>
 *     <DsDropdownMenu.Header>
 *       <DsTextInput placeholder="Search..." />
 *     </DsDropdownMenu.Header>
 *     <DsDropdownMenu.Item value="item1">
 *       Item 1
 *       <DsDropdownMenu.ItemIndicator />
 *     </DsDropdownMenu.Item>
 *     <DsDropdownMenu.ItemGroup>
 *       <DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
 *       <DsDropdownMenu.ItemGroupContent>
 *         <DsDropdownMenu.Item value="item2">Item 2</DsDropdownMenu.Item>
 *       </DsDropdownMenu.ItemGroupContent>
 *     </DsDropdownMenu.ItemGroup>
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
	ItemIndicator,
	TriggerItem,
	Header,
	Actions,
	ItemGroup,
	ItemGroupLabel,
	ItemGroupContent,
	Separator,
};
