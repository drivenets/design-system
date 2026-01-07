import type React from 'react';
import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import TabsContext from './context/ds-tabs-context';
import type { DsTabsContextType } from './context/ds-tabs-context.types';
import { DsTabsList } from './components/ds-tabs-list';
import { DsTabsTab } from './components/ds-tabs-tab';
import { DsTabsContent } from './components/ds-tabs-content';
import { DsTabsIndicator } from './components/ds-tabs-indicator';
import type { DsTabsRootProps } from './ds-tabs.types';
import styles from './ds-tabs.module.scss';

/**
 * Design system tabs component - compound component for flexible tab navigation
 *
 * @example
 * ```tsx
 * <DsTabs value={selected} onValueChange={handleChange}>
 *   <DsTabs.List>
 *     <DsTabs.Tab value="overview" label="Overview" icon="dashboard" />
 *     <DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} />
 *   </DsTabs.List>
 *   <DsTabs.Content value="overview">
 *     <div>Overview content here</div>
 *   </DsTabs.Content>
 *   <DsTabs.Content value="analytics">
 *     <div>Analytics content here</div>
 *   </DsTabs.Content>
 * </DsTabs>
 * ```
 */
const DsTabsRoot: React.FC<DsTabsRootProps> = ({
	value,
	defaultValue,
	onValueChange,
	orientation = 'horizontal',
	size = 'base',
	maxVisibleTabs,
	className,
	style,
	children,
}) => {
	const handleValueChange = (details: { value: string | null }) => {
		onValueChange?.(details.value);
	};

	const contextValue: DsTabsContextType = {
		orientation,
		size,
		maxVisibleTabs,
		currentValue: value,
		onValueChange,
	};

	return (
		<TabsContext.Provider value={contextValue}>
			<Tabs.Root
				orientation={orientation}
				value={value}
				defaultValue={defaultValue}
				onValueChange={handleValueChange}
				activationMode="manual"
				className={classNames(styles.root, className)}
				style={style}
			>
				{children}
			</Tabs.Root>
		</TabsContext.Provider>
	);
};

type DsTabsComponent = typeof DsTabsRoot & {
	List: typeof DsTabsList;
	Tab: typeof DsTabsTab;
	Content: typeof DsTabsContent;
	Indicator: typeof DsTabsIndicator;
};

const DsTabs = DsTabsRoot as DsTabsComponent;

DsTabs.List = DsTabsList;
DsTabs.Tab = DsTabsTab;
DsTabs.Content = DsTabsContent;
DsTabs.Indicator = DsTabsIndicator;

export default DsTabs;
