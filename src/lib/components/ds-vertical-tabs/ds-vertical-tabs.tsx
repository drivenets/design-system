import classNames from 'classnames';
import { Tabs } from '@ark-ui/react/tabs';
import {
	DsVerticalTabsContentProps,
	DsVerticalTabsListProps,
	DsVerticalTabsRootProps,
	DsVerticalTabsTabProps,
} from './ds-vertical-tabs.types';
import styles from './ds-vertical-tabs.module.scss';

/**
 * Design system vertical tabs component - compound component for flexible vertical navigation
 *
 * @example
 * ```tsx
 * <DsVerticalTabs value={selected} onValueChange={handleChange}>
 *   <DsVerticalTabs.List>
 *     <DsVerticalTabs.Tab value="status">
 *       <span>Status</span>
 *       <span className={styles.badge}>5</span>
 *     </DsVerticalTabs.Tab>
 *     <DsVerticalTabs.Tab value="date">Date</DsVerticalTabs.Tab>
 *   </DsVerticalTabs.List>
 *   <DsVerticalTabs.Content value="status">Status filters...</DsVerticalTabs.Content>
 *   <DsVerticalTabs.Content value="date">Date filters...</DsVerticalTabs.Content>
 * </DsVerticalTabs>
 * ```
 */
const DsVerticalTabs = ({ value, onValueChange, className, style, children }: DsVerticalTabsRootProps) => {
	const handleValueChange = (details: { value: string | null }) => {
		onValueChange?.(details.value);
	};

	return (
		<Tabs.Root
			orientation="vertical"
			value={value}
			onValueChange={handleValueChange}
			className={className}
			style={style}
		>
			{children}
		</Tabs.Root>
	);
};

/**
 * Container for tab triggers
 */
const DsVerticalTabsList = ({ className, children }: DsVerticalTabsListProps) => {
	return <Tabs.List className={classNames(styles.tabList, className)}>{children}</Tabs.List>;
};

/**
 * Individual tab trigger - fully customizable content
 */
const DsVerticalTabsTab = ({ value, disabled, className, children }: DsVerticalTabsTabProps) => {
	return (
		<Tabs.Trigger value={value} disabled={disabled} className={classNames(styles.tabItem, className)}>
			{children}
		</Tabs.Trigger>
	);
};

/**
 * Tab content panel - displays when corresponding tab is active
 */
const DsVerticalTabsContent = ({ value, className, children }: DsVerticalTabsContentProps) => {
	return (
		<Tabs.Content value={value} className={className}>
			{children}
		</Tabs.Content>
	);
};

DsVerticalTabs.List = DsVerticalTabsList;
DsVerticalTabs.Tab = DsVerticalTabsTab;
DsVerticalTabs.Content = DsVerticalTabsContent;

export default DsVerticalTabs;
