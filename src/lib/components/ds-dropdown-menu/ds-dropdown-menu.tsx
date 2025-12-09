import React, { createContext, Fragment, useContext, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu } from '@ark-ui/react/menu';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-dropdown-menu.module.scss';
import { DsIcon } from '../ds-icon';
import DsTypography from '../ds-typography/ds-typography';
import DsTextInput from '../ds-text-input/ds-text-input';
import {
	DsDropdownMenuActionsProps,
	DsDropdownMenuContentProps,
	DsDropdownMenuHeaderProps,
	DsDropdownMenuItemGroupContentProps,
	DsDropdownMenuItemGroupLabelProps,
	DsDropdownMenuItemGroupProps,
	DsDropdownMenuItemIndicatorProps,
	DsDropdownMenuItemProps,
	DsDropdownMenuLegacyProps,
	DsDropdownMenuPositioning,
	DsDropdownMenuRootProps,
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
			<Menu.ItemGroup className={classNames(styles.group, className)} style={style}>
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
 * DEPRECATED: Legacy DsDropdownMenu component with options array
 * Use compound component pattern instead
 * @deprecated
 */
export const DsDropdownMenuLegacy: React.FC<DsDropdownMenuLegacyProps> = ({
	options,
	children,
	contentGap = 0,
	className,
	style,
	align = 'center',
	side = 'bottom',
	disablePortal = false,
	disableSearch = true,
	selected,
	onSelect,
}) => {
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const Wrapper = disablePortal ? Fragment : DropdownMenu.Portal;

	const filteredOptions = disableSearch
		? options
		: options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<DropdownMenu.Root open={open} onOpenChange={setOpen}>
			<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
			<Wrapper>
				<DropdownMenu.Content
					className={classNames(styles.contentLegacy, styles.viewportLegacy)}
					sideOffset={contentGap}
					align={align}
					side={side}
				>
					{!disableSearch && (
						<DsTextInput
							placeholder="Search"
							value={searchTerm}
							onValueChange={setSearchTerm}
							slots={{
								startAdornment: <DsIcon icon="search" size="tiny" />,
							}}
							onKeyDown={(e) => e.stopPropagation()}
						/>
					)}
					{filteredOptions.map((option) => (
						<DropdownMenu.Item
							key={option.label}
							disabled={option.disabled}
							className={classNames(
								styles.itemLegacy,
								{
									[styles.selected]: selected === option.value,
								},
								className,
							)}
							style={style}
							onClick={(e) => {
								e.stopPropagation();

								if (!option.disabled) {
									if (option.value) onSelect?.(option.value);
									option.onClick?.(e);
									setOpen(false);
								}
							}}
						>
							{option.icon && <DsIcon icon={option.icon} className={styles.itemIcon} />}
							<span className={styles.label}>{option.label}</span>
							{option.value && selected === option.value && (
								<span className={styles.indicator}>
									<DsIcon icon="check" />
								</span>
							)}
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</Wrapper>
		</DropdownMenu.Root>
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
	Header,
	Actions,
	ItemGroup,
	ItemGroupLabel,
	ItemGroupContent,
	Separator,
};

export default DsDropdownMenu;
