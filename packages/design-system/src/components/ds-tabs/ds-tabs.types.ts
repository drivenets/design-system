import type { CSSProperties, ReactNode } from 'react';

export type DsTabsOrientation = 'horizontal' | 'vertical';

export type DsTabsSize = 'base' | 'small';

export interface DsTabsRootProps {
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string | null) => void;
	orientation?: DsTabsOrientation;
	size?: DsTabsSize;
	maxVisibleTabs?: number;
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
}
