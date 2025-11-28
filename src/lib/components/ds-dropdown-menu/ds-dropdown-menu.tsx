import React, { createContext, Fragment, useContext, useId, useState } from 'react';
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
	DsDropdownMenuGroupContentProps,
	DsDropdownMenuGroupLabelProps,
	DsDropdownMenuGroupProps,
	DsDropdownMenuItemProps,
	DsDropdownMenuLegacyProps,
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

	const handleOpenChange = (details: { open: boolean }) => {
		if (!isControlled) {
			setInternalOpen(details.open);
		}
		onOpenChange?.(details.open);
	};

	// Default positioning for dropdown menus
	const positioning = {
		placement: 'bottom-start' as const,
		gutter: 4,
	};

	return (
		<Menu.Root open={isOpen} onOpenChange={handleOpenChange} positioning={positioning}>
			{children}
		</Menu.Root>
	);
};

/**
 * Trigger component - wraps the trigger element
 */
const Trigger: React.FC<DsDropdownMenuTriggerProps> = ({ asChild, children, className, style, ...props }) => {
	return (
		<Menu.Trigger asChild={asChild} className={className} style={style} {...props}>
			{children}
		</Menu.Trigger>
	);
};

/**
 * Content component - wraps the dropdown content
 */
const Content: React.FC<DsDropdownMenuContentProps> = ({
	disablePortal = false,
	children,
	className,
	style,
}) => {
	const content = (
		<Menu.Positioner>
			<Menu.Content className={classNames(styles.content, className)} style={style}>
				{children}
			</Menu.Content>
		</Menu.Positioner>
	);

	if (disablePortal) {
		return content;
	}

	return <Portal>{content}</Portal>;
};

/**
 * Item component - renders a menu item with optional selection indicator
 */
const Item: React.FC<DsDropdownMenuItemProps> = ({
	disabled,
	selected,
	preventClose = false,
	value,
	onClick,
	children,
	className,
	style,
}) => {
	const generatedId = useId();
	const itemValue = value ?? generatedId;

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (onClick) {
			onClick(e);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if ((e.key === 'Enter' || e.key === ' ') && onClick) {
			e.preventDefault();
			onClick(e as unknown as React.MouseEvent<HTMLElement>);
		}
	};

	return (
		<Menu.Item
			disabled={disabled}
			closeOnSelect={!preventClose}
			className={classNames(
				styles.item,
				{
					[styles.selected]: selected,
				},
				className,
			)}
			style={style}
			value={itemValue}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			{children}
			{selected && <DsIcon className={styles.indicator} icon="check" />}
		</Menu.Item>
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
		<div
			className={classNames(styles.actions, className)}
			style={style}
			role="menu"
			aria-label="Menu actions"
			tabIndex={-1}
			onKeyDown={(e) => e.stopPropagation()}
		>
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

	const handleClick = () => {
		toggle();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle();
		}
	};

	return (
		<button
			type="button"
			className={classNames(styles.groupLabel, className)}
			style={style}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<DsTypography variant="body-sm-md">{children}</DsTypography>
			<DsIcon
				icon="keyboard_arrow_down"
				className={classNames(styles.groupLabelIcon, {
					[styles.groupLabelIconRotated]: !collapsed,
				})}
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
	disableSearch = false,
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
			<DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
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
							startAdornment={<DsIcon icon="search" size="tiny" />}
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
