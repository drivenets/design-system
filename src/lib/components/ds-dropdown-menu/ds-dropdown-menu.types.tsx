import { CSSProperties, MouseEvent, ReactNode } from 'react';

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
	 * The gap between the trigger and dropdown content in pixels
	 * @default 0
	 */
	sideOffset?: number;
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
