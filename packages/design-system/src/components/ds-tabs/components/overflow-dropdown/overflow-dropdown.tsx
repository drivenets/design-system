import type React from 'react';
import classNames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { TabDropdown } from '../tab-dropdown';
import { useTabsContext } from '../../context/ds-tabs-context';
import type { OverflowDropdownProps } from './overflow-dropdown.types';
import styles from './overflow-dropdown.module.scss';

export const OverflowDropdown: React.FC<OverflowDropdownProps> = ({
	overflowTabs,
	selectedTab,
	onValueChange,
}) => {
	const { orientation, size, currentValue } = useTabsContext();

	const triggerLabel: string = selectedTab ? selectedTab.props.label || 'More' : 'More';
	const triggerIcon = selectedTab ? selectedTab.props.icon : undefined;
	const triggerBadge = selectedTab ? selectedTab.props.badge : undefined;

	const isOverflowTabSelected = overflowTabs.some((tab) => tab.props.value === currentValue);

	const moreTrigger = (
		<button
			type="button"
			data-overflow-trigger="true"
			data-selected={isOverflowTabSelected || undefined}
			className={classNames(styles.tabItem, styles[`tabItem-${orientation}`], styles[`tabItem-${size}`])}
		>
			{triggerIcon && (
				<div className={styles.icon}>
					<DsIcon icon={triggerIcon} size="tiny" />
				</div>
			)}
			{triggerLabel && <span className={styles.label}>{triggerLabel}</span>}
			<div className={styles.menu}>
				<DsIcon icon="arrow_drop_down" size="tiny" />
			</div>
			{triggerBadge !== undefined && <div className={styles.badge}>{triggerBadge}</div>}
		</button>
	);

	const dropdownItems = overflowTabs.map((tab) => ({
		value: tab.props.value,
		label: tab.props.label,
		icon: tab.props.icon,
		badge: tab.props.badge,
	}));

	return (
		<TabDropdown
			trigger={moreTrigger}
			items={dropdownItems}
			onItemSelect={(value) => onValueChange?.(value)}
			isOverflowDropdown={true}
		/>
	);
};
