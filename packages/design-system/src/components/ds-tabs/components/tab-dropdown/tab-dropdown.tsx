import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import type { TabDropdownProps } from './tab-dropdown.types';

export const TabDropdown: React.FC<TabDropdownProps> = ({
	trigger,
	items,
	onItemSelect,
	isOverflowDropdown = false,
}) => {
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
		}, 250);
	};

	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
		};
	}, []);

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
							className={isOverflowDropdown ? 'ds-dropdown-menu-item-tab' : undefined}
							onSelect={() => {
								onItemSelect(item.value);
								setDropdownOpen(false);
							}}
						>
							{item.icon && (
								<span className={isOverflowDropdown ? 'tab-icon' : undefined}>
									<DsIcon icon={item.icon} size="small" />
								</span>
							)}
							<span className={isOverflowDropdown ? 'tab-label' : undefined}>{item.label || item.value}</span>
							{item.badge !== undefined && (
								<span
									className={isOverflowDropdown ? 'tab-badge' : undefined}
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
