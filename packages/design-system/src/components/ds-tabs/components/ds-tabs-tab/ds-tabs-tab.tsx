import { useRef, useState } from 'react';
import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import DsIcon from '../../../ds-icon/ds-icon';
import type { IconType } from '../../../ds-icon';
import { DsTooltip } from '../../../ds-tooltip';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import type { DsTabsTabProps } from '../../ds-tabs.types';
import styles from './ds-tabs-tab.module.scss';

export const DsTabsTab = ({
	value,
	disabled,
	icon,
	label,
	badge,
	menuActionItems,
	onMenuActionSelect,
	tooltip,
	className,
	style,
	children,
}: DsTabsTabProps) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const menuTriggerRef = useRef<HTMLDivElement>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const hasMenuActions = menuActionItems && menuActionItems.length > 0;

	const handleMenuActionSelect = (actionValue: string) => {
		onMenuActionSelect?.(actionValue);
		setMenuOpen(false);
	};

	const tabContent = (
		<Tabs.Trigger
			ref={triggerRef}
			value={value}
			disabled={disabled}
			className={classNames(styles.tabItem, className)}
			style={style}
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
					{badge !== undefined && <div className={styles.badge}>{badge}</div>}
					{hasMenuActions && (
						<div
							ref={menuTriggerRef}
							className={styles.menuTrigger}
							onClick={(e) => {
								e.stopPropagation();
								e.preventDefault();
								setMenuOpen(!menuOpen);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.stopPropagation();
									e.preventDefault();
									setMenuOpen(!menuOpen);
								}
							}}
							role="button"
							tabIndex={0}
							aria-label="Open menu"
							aria-expanded={menuOpen}
						>
							<DsIcon
								icon={(menuOpen ? 'arrow_drop_up' : 'arrow_drop_down') satisfies IconType}
								size="tiny"
							/>
						</div>
					)}
				</>
			)}
		</Tabs.Trigger>
	);

	const menuDropdown = menuActionItems && menuActionItems.length > 0 && (
		<DsDropdownMenu.Root
			open={menuOpen}
			onOpenChange={setMenuOpen}
			onSelect={handleMenuActionSelect}
			positioning={{
				placement: 'bottom-start',
				gutter: 4,
				getAnchorRect: () => menuTriggerRef.current?.getBoundingClientRect() ?? null,
			}}
		>
			<DsDropdownMenu.Trigger asChild>
				<div style={{ display: 'none' }} aria-hidden="true" />
			</DsDropdownMenu.Trigger>
			<DsDropdownMenu.Content className={styles.menuContent}>
				{menuActionItems.map((item) => (
					<DsDropdownMenu.Item
						key={item.value}
						value={item.value}
						disabled={item.disabled}
						className={styles.menuItem}
					>
						<span className={styles.menuItemLabel}>{item.label}</span>
					</DsDropdownMenu.Item>
				))}
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	);

	if (tooltip) {
		return (
			<>
				<DsTooltip content={tooltip}>{tabContent}</DsTooltip>
				{menuDropdown}
			</>
		);
	}

	return (
		<>
			{tabContent}
			{menuDropdown}
		</>
	);
};
