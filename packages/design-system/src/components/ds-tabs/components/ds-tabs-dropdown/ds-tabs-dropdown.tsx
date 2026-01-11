import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import type { DsTabsDropdownProps } from './ds-tabs-dropdown.types';
import styles from '../../ds-tabs.module.scss';
import { DROPDOWN_CLOSE_DELAY } from '../ds-tabs-tab/ds-tabs-tab';

export const DsTabsDropdown: React.FC<DsTabsDropdownProps> = ({
	trigger,
	items,
	onItemSelect,
	isOverflowDropdown = false,
}) => {
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		setDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		closeTimeoutRef.current = setTimeout(() => {
			setDropdownOpen(false);
			closeTimeoutRef.current = null;
		}, DROPDOWN_CLOSE_DELAY);
	};

	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
		};
	}, []);

	return (
		<div ref={wrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<DsDropdownMenu.Root
				open={dropdownOpen}
				onOpenChange={setDropdownOpen}
				positioning={{ placement: 'bottom-start', gutter: 4 }}
			>
				<DsDropdownMenu.Trigger asChild>{trigger}</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					{items.map((item) => (
						<DsDropdownMenu.Item
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							className={classNames({
								[styles.dropdownMenuItem]: isOverflowDropdown,
							})}
							onSelect={() => {
								onItemSelect(item.value);
								setDropdownOpen(false);
								// Remove focus from trigger button after selection
								requestAnimationFrame(() => {
									const button = wrapperRef.current?.querySelector('button');
									button?.blur();
								});
							}}
						>
							{item.icon && (
								<DsIcon
									icon={item.icon}
									size="small"
									className={classNames({
										[styles.dropdownMenuIcon]: isOverflowDropdown,
									})}
								/>
							)}
							<span
								className={classNames({
									[styles.dropdownMenuLabel]: isOverflowDropdown,
								})}
							>
								{item.label || item.value}
							</span>
							{item.badge !== undefined && (
								<span
									className={classNames({
										[styles.dropdownMenuBadge]: isOverflowDropdown,
									})}
									style={!isOverflowDropdown ? { marginLeft: 'auto', opacity: 0.6 } : undefined}
								>
									{isOverflowDropdown ? item.badge : `(${String(item.badge)})`}
								</span>
							)}
						</DsDropdownMenu.Item>
					))}
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		</div>
	);
};
