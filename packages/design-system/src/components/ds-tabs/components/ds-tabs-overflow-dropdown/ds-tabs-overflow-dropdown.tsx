import type React from 'react';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsTabsDropdown } from '../ds-tabs-dropdown';
import { useTabsContext } from '../../context/ds-tabs-context';
import type { DsTabsOverflowDropdownProps } from './ds-tabs-overflow-dropdown.types';
import styles from './ds-tabs-overflow-dropdown.module.scss';

export const DsTabsOverflowDropdown: React.FC<DsTabsOverflowDropdownProps> = ({
	overflowTabs,
	selectedTab,
	onValueChange,
}) => {
	const { orientation, size, currentValue } = useTabsContext();
	const triggerRef = useRef<HTMLButtonElement>(null);

	const triggerLabel: string = selectedTab ? selectedTab.props.label || 'More' : 'More';
	const triggerIcon = selectedTab ? selectedTab.props.icon : undefined;
	const triggerBadge = selectedTab ? selectedTab.props.badge : undefined;

	const isOverflowTabSelected = overflowTabs.some((tab) => tab.props.value === currentValue);

	// Blur the trigger button when a non-overflow tab is selected
	useEffect(() => {
		if (!isOverflowTabSelected && triggerRef.current) {
			triggerRef.current.blur();
		}
	}, [isOverflowTabSelected]);

	const moreTrigger = (
		// eslint-disable-next-line jsx-a11y/role-supports-aria-props
		<button
			ref={triggerRef}
			type="button"
			aria-selected={isOverflowTabSelected}
			className={classNames(styles.tabItem, styles[`tabItem-${orientation}`], styles[`tabItem-${size}`])}
		>
			{triggerIcon && <DsIcon icon={triggerIcon} size="tiny" className={styles.icon} />}
			{triggerLabel && <span className={styles.label}>{triggerLabel}</span>}
			<DsIcon icon="arrow_drop_down" size="tiny" className={styles.menu} />
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
		<DsTabsDropdown
			trigger={moreTrigger}
			items={dropdownItems}
			onItemSelect={(value) => onValueChange?.(value)}
			isOverflowDropdown={true}
		/>
	);
};
