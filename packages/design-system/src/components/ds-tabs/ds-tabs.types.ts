import type { CSSProperties, ReactNode } from 'react';
import type { IconType } from '../ds-icon';

export type DsTabsSize = 'medium' | 'small';
export type DsTabsOrientation = 'horizontal' | 'vertical';

/**
 * Menu action item configuration
 */
export interface DsTabsMenuActionItem {
	/** Unique value for the action */
	value: string;
	/** Display label */
	label: string;
	/** Whether the action is disabled */
	disabled?: boolean;
}

export interface DsTabsProps {
	/** Current active tab value */
	value?: string;
	/** Default tab value for uncontrolled mode */
	defaultValue?: string;
	/** Callback when tab changes */
	onValueChange?: (value: string | null) => void;
	/** Tab orientation */
	orientation?: DsTabsOrientation;
	/** Tab size variant */
	size?: DsTabsSize;
	/** Custom className */
	className?: string;
	/** Custom styles */
	style?: CSSProperties;
	/** Children components */
	children: ReactNode;
}

export interface DsTabsListProps {
	/** Custom className */
	className?: string;
	/** Custom styles */
	style?: CSSProperties;
	/** Children components (DsTabsTab) */
	children: ReactNode;
}

type DsTabsTabBaseProps = {
	/** Unique value for this tab */
	value: string;
	/** Menu action items to display in dropdown */
	menuActionItems?: DsTabsMenuActionItem[];
	/** Callback when a menu action is selected */
	onMenuActionSelect?: (value: string) => void;
	/** Tooltip text to show on hover */
	tooltip?: string;
	/** Disabled state */
	disabled?: boolean;
	/** Custom className */
	className?: string;
	/** Custom styles */
	style?: CSSProperties;
};

export type DsTabsTabProps = DsTabsTabBaseProps &
	(
		| {
				/** Custom children (overrides default rendering) */
				children: ReactNode;
				/** Tab label text */
				label?: never;
				/** Leading icon name (Material Icons) or SVG component */
				icon?: never;
				/** Selected-item count, shown beside a status dot. Omit to hide. */
				selectedCount?: never;
				/** Total count or label shown in the trailing badge */
				badge?: never;
				/** Shows a pin glyph after the badge */
				pinned?: never;
		  }
		| {
				/** Custom children (overrides default rendering) */
				children?: never;
				/** Tab label text */
				label?: string;
				/** Leading icon name (Material Icons) or SVG component */
				icon?: IconType;
				/** Selected-item count, shown beside a status dot. Omit to hide. */
				selectedCount?: number;
				/** Total count or label shown in the trailing badge */
				badge?: string | number;
				/** Shows a pin glyph after the badge */
				pinned?: boolean;
		  }
	);

export interface DsTabsContentProps {
	/** Value matching the tab this content belongs to */
	value: string;
	/** Custom className */
	className?: string;
	/** Custom styles */
	style?: CSSProperties;
	/** Content to display */
	children: ReactNode;
}
