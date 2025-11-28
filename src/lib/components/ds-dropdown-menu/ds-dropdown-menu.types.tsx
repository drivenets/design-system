import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { IconType } from '../ds-icon';

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
export interface DsDropdownMenuRootProps {
	/**
	 * Whether the dropdown is open (controlled)
	 */
	open?: boolean;
	/**
	 * Callback when open state changes
	 */
	onOpenChange?: (open: boolean) => void;
	/**
	 * The children to render (Trigger, Content, etc.)
	 */
	children: ReactNode;
}

/**
 * Props for the DsDropdownMenu Trigger component
 */
export interface DsDropdownMenuTriggerProps {
	/**
	 * Use the provided child element as the trigger
	 */
	asChild?: boolean;
	/**
	 * The trigger element
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
 * Props for the DsDropdownMenu Content component
 */
export interface DsDropdownMenuContentProps {
	/**
	 * Whether to render in place instead of using portals
	 * @default false
	 */
	disablePortal?: boolean;
	/**
	 * The content to render
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
 * Props for the DsDropdownMenu Item component
 */
export interface DsDropdownMenuItemProps {
	/**
	 * Whether the item is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the item is selected (shows check indicator)
	 */
	selected?: boolean;
	/**
	 * Prevents the menu from closing when this item is clicked
	 * Useful for checkbox/radio items that should allow multiple selections
	 * @default false
	 */
	preventClose?: boolean;
	/**
	 * Optional unique value for the menu item
	 * If not provided, a stable ID will be generated automatically
	 */
	value?: string;
	/**
	 * Click handler
	 */
	onClick?: (e: MouseEvent<HTMLElement>) => void;
	/**
	 * The item content
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
 * Props for the DsDropdownMenu Search component
 */
export interface DsDropdownMenuSearchProps {
	/**
	 * The search input or custom search component
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
 * Props for the DsDropdownMenu Group component
 */
export interface DsDropdownMenuGroupProps {
	/**
	 * The group content (GroupLabel + Items)
	 */
	children: ReactNode;
	/**
	 * Whether the group is collapsed
	 */
	collapsed?: boolean;
	/**
	 * Callback when collapse state changes
	 */
	onCollapsedChange?: (collapsed: boolean) => void;
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
 * Props for the DsDropdownMenu GroupLabel component
 */
export interface DsDropdownMenuGroupLabelProps {
	/**
	 * The label text or content
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
 * Props for the DsDropdownMenu GroupContent component
 */
export interface DsDropdownMenuGroupContentProps {
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
export interface DsDropdownMenuSeparatorProps {
	/**
	 * Optional CSS class name
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
}
