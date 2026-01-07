import type { ReactElement } from 'react';
import type { DsTabsTabProps } from '../ds-tabs-tab';

export interface OverflowDropdownProps {
	overflowTabs: ReactElement<DsTabsTabProps>[];
	selectedTab?: ReactElement<DsTabsTabProps>;
	currentValue?: string;
	onValueChange?: (value: string | null) => void;
}
