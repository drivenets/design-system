import React, { type ReactElement } from 'react';
import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { DsTabsOverflowDropdown } from '../ds-tabs-overflow-dropdown';
import { DsTabsIndicator } from '../ds-tabs-indicator';
import { useTabsContext } from '../../context/ds-tabs-context';
import type { DsTabsListProps } from './ds-tabs-list.types';
import type { DsTabsTabProps } from '../ds-tabs-tab';
import styles from './ds-tabs-list.module.scss';

export const DsTabsList = ({ className, style, children }: DsTabsListProps) => {
	const { orientation, maxVisibleTabs, currentValue, onValueChange } = useTabsContext();

	const childArray = React.Children.toArray(children);
	const tabElements = childArray.filter(
		(child): child is ReactElement<DsTabsTabProps> =>
			React.isValidElement(child) &&
			typeof child.props === 'object' &&
			child.props !== null &&
			'value' in child.props,
	);

	const hasOverflow = maxVisibleTabs && maxVisibleTabs > 0 && tabElements.length > maxVisibleTabs;

	if (!hasOverflow) {
		return (
			<Tabs.List
				className={classNames(styles.tabList, styles[`tabList-${orientation}`], className)}
				style={style}
			>
				{children}
				<DsTabsIndicator />
			</Tabs.List>
		);
	}

	const visibleTabs = tabElements.slice(0, maxVisibleTabs - 1);
	const overflowTabs = tabElements.slice(maxVisibleTabs - 1);

	const selectedTab = overflowTabs.find((tab) => tab.props.value === currentValue);
	const hasOverflowTabs = overflowTabs.length > 0;

	return (
		<Tabs.List
			className={classNames(styles.tabList, styles[`tabList-${orientation}`], className)}
			style={style}
		>
			{visibleTabs}

			{hasOverflowTabs && (
				<DsTabsOverflowDropdown
					overflowTabs={overflowTabs}
					selectedTab={selectedTab}
					currentValue={currentValue}
					onValueChange={onValueChange}
				/>
			)}

			<DsTabsIndicator />
		</Tabs.List>
	);
};
