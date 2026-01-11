import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsTooltip } from '../../../ds-tooltip';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { useTabsContext } from '../../context/ds-tabs-context';
import type { DsTabsTabProps } from './ds-tabs-tab.types';
import styles from './ds-tabs-tab.module.scss';

export const DROPDOWN_CLOSE_DELAY = 250;

export const DsTabsTab: React.FC<DsTabsTabProps> = ({
	value,
	disabled,
	icon,
	label,
	badge,
	tooltip,
	hasMenu,
	dropdownItems,
	onDropdownSelect,
	className,
	style,
	children,
}) => {
	const { orientation, size } = useTabsContext();

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const showDropdown = dropdownItems && dropdownItems.length > 0;
	const showMenuIcon = hasMenu || showDropdown;

	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
		};
	}, []);

	const handleMouseEnter = () => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		setIsDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		closeTimeoutRef.current = setTimeout(() => {
			setIsDropdownOpen(false);
			closeTimeoutRef.current = null;
		}, DROPDOWN_CLOSE_DELAY);
	};

	const tabContent = (
		<Tabs.Trigger
			ref={triggerRef}
			value={value}
			disabled={disabled}
			className={classNames(
				styles.tabItem,
				styles[`tabItem-${orientation}`],
				styles[`tabItem-${size}`],
				className,
			)}
			style={style}
			onClick={() => {
				// Remove focus after tab selection to prevent focus state styling
				requestAnimationFrame(() => {
					triggerRef.current?.blur();
				});
			}}
		>
			{children ? (
				children
			) : (
				<>
					{icon && (
						<div className={styles.icon}>
							<DsIcon icon={icon} size="tiny" />
						</div>
					)}
					{label && <span className={styles.label}>{label}</span>}
					{showMenuIcon && (
						<div className={styles.menu}>
							<DsIcon icon="arrow_drop_down" size="tiny" />
						</div>
					)}
					{badge !== undefined && <div className={styles.badge}>{badge}</div>}
				</>
			)}
		</Tabs.Trigger>
	);

	if (showDropdown) {
		const tabWithDropdown = (
			<div className={styles.dropdownWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				{tabContent}
				<DsDropdownMenu.Root
					open={isDropdownOpen}
					onOpenChange={setIsDropdownOpen}
					positioning={{ placement: 'bottom-start', gutter: 4 }}
				>
					<DsDropdownMenu.Trigger asChild>
						<span style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
					</DsDropdownMenu.Trigger>
					<DsDropdownMenu.Content>
						{dropdownItems.map((item) => (
							<DsDropdownMenu.Item
								key={item.value}
								value={item.value}
								disabled={item.disabled}
								onSelect={() => {
									onDropdownSelect?.(item.value);
									setIsDropdownOpen(false);
								}}
							>
								{item.icon && <DsIcon icon={item.icon} size="small" />}
								{item.label}
							</DsDropdownMenu.Item>
						))}
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>
			</div>
		);

		if (tooltip) {
			return <DsTooltip content={tooltip}>{tabWithDropdown}</DsTooltip>;
		}

		return tabWithDropdown;
	}

	if (tooltip) {
		return <DsTooltip content={tooltip}>{tabContent}</DsTooltip>;
	}

	return tabContent;
};
