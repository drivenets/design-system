import { CSSProperties, MouseEvent, ReactNode } from 'react';
import type { Menu } from '@ark-ui/react/menu';
import { IconType } from '../ds-icon';

/**
 * Positioning options for dropdown menu
 */
export type DsDropdownMenuPositioning = Menu.RootProps['positioning'];

/**
 * DEPRECATED: Legacy dropdown menu option configuration
 * Use compound component pattern instead
 * @deprecated
 */
export interface DsDropdownMenuOptionLegacy {
	/**
	 * Display label for the menu option
	 */
	label: string;
	/**
	 * Optional icon to display
	 */
	icon?: IconType;
	/**
	 * Whether this option is disabled
	 */
	disabled?: boolean;
	/**
	 * Click handler for the option
	 */
	onClick?: (e: MouseEvent<HTMLElement>) => void;
	/**
	 * Optional value for selection tracking
	 */
	value?: string;
}

/**
 * DEPRECATED: Legacy props for DsDropdownMenuLegacy component
 * Use compound component pattern instead
 * @deprecated
 */
export interface DsDropdownMenuLegacyProps {
	/**
	 * The options to be displayed in the dropdown menu
	 */
	options: DsDropdownMenuOptionLegacy[];
	/**
	 * Optional children to be rendered inside the component
	 * Typically used for the trigger element
	 */
	children?: ReactNode | undefined;
	/**
	 * The gap between the trigger and dropdown content in pixels
	 * @default 0
	 */
	contentGap?: number;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Optional inline styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * The alignment of the dropdown content
	 * @default 'center'
	 */
	align?: 'start' | 'center' | 'end';
	/**
	 * The side of the dropdown content
	 * @default 'bottom'
	 */
	side?: 'top' | 'right' | 'bottom' | 'left';
	/**
	 * Whether to render in place instead of using portals
	 * @default false
	 */
	disablePortal?: boolean;
	/**
	 * Whether to disable the search functionality
	 * @default false
	 */
	disableSearch?: boolean;
	/**
	 * Currently selected value (for selection tracking)
	 */
	selected?: string;
	/**
	 * Callback when an option with a value is selected
	 */
	onSelect?: (value: string) => void;
}

/**
 * Props for the DsDropdownMenu Root component
 */
export interface DsDropdownMenuRootProps extends Pick<Menu.RootProps, 'children'> {
	/**
	 * Whether the dropdown is open (controlled mode)
	 */
	open?: boolean;
	/**
	 * Callback when open state changes
	 */
	onOpenChange?: (open: boolean) => void;
	/**
	 * Callback when an item is selected
	 */
	onSelect?: (value: string) => void;
	/**
	 * Callback when the highlighted item changes
	 */
	onHighlightChange?: (value: string | null) => void;
	/**
	 * Positioning options for the dropdown
	 */
	positioning?: DsDropdownMenuPositioning;
	/**
	 * Prevents the menu from closing when any item is selected
	 * @default false
	 */
	preventCloseOnSelect?: boolean;
}

/**
 * Props for the DsDropdownMenu Trigger component
 */
export type DsDropdownMenuTriggerProps = Menu.TriggerProps;

/**
 * Props for the DsDropdownMenu Content component
 */
export interface DsDropdownMenuContentProps extends Pick<Menu.ContentProps, 'children'> {
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
	/**
	 * Whether to render in place instead of using portals
	 * @default false
	 */
	disablePortal?: boolean;
}

/**
 * Props for the DsDropdownMenu Item component
 */
export interface DsDropdownMenuItemProps
	extends Partial<Pick<Menu.ItemProps, 'disabled' | 'asChild' | 'className' | 'style'>> {
	/**
	 * Unique value for the menu item
	 */
	value: string;
	/**
	 * Item content
	 */
	children?: ReactNode;
	/**
	 * Whether the item is selected (applies selected styling)
	 */
	selected?: boolean;
	/**
	 * Callback when this specific item is selected
	 */
	onSelect?: () => void;
	/**
	 * Callback when this specific item is clicked
	 */
	onClick?: (e: MouseEvent<HTMLElement>) => void;
}

/**
 * Props for the DsDropdownMenu ItemIndicator component
 */
export interface DsDropdownMenuItemIndicatorProps {
	/**
	 * Custom content to render as the indicator (defaults to check icon)
	 */
	children?: ReactNode;
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
}

/**
 * Props for the DsDropdownMenu Header component
 */
export interface DsDropdownMenuHeaderProps {
	/**
	 * The header content (typically a search input or filter controls)
	 */
	children: ReactNode;
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
}

/**
 * Props for the DsDropdownMenu Actions component
 */
export interface DsDropdownMenuActionsProps {
	/**
	 * The action buttons or elements
	 */
	children: ReactNode;
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
}

/**
 * Props for the DsDropdownMenu ItemGroup component
 */
export interface DsDropdownMenuItemGroupProps extends Menu.ItemGroupProps {
	/**
	 * Whether the group is collapsed
	 */
	collapsed?: boolean;
	/**
	 * Callback when collapse state changes
	 */
	onCollapsedChange?: (collapsed: boolean) => void;
}

/**
 * Props for the DsDropdownMenu ItemGroupLabel component
 */
export type DsDropdownMenuItemGroupLabelProps = Menu.ItemGroupLabelProps;

/**
 * Props for the DsDropdownMenu ItemGroupContent component
 */
export interface DsDropdownMenuItemGroupContentProps {
	/**
	 * The content to show/hide based on collapsed state
	 */
	children: ReactNode;
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
}

/**
 * Props for the DsDropdownMenu Separator component
 */
export type DsDropdownMenuSeparatorProps = Menu.SeparatorProps;
