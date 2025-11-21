import React, { Fragment, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import styles from './ds-dropdown-menu.module.scss';
import { DsIcon } from '../ds-icon';
import { DsDropdownMenuProps } from './ds-dropdown-menu.types';
import DsTextInput from '../ds-text-input/ds-text-input';

/**
 * Design system DropdownMenu component (for action menus and selectable dropdowns)
 */
const DsDropdownMenu: React.FC<DsDropdownMenuProps> = ({
	options,
	children,
	contentGap = 0,
	className,
	style,
	align = 'center',
	side = 'bottom',
	disablePortal = false,
	disableSearch = false,
	selected,
	onSelect,
}) => {
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const Wrapper = disablePortal ? Fragment : DropdownMenu.Portal;

	const filteredOptions = disableSearch
		? options
		: options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<DropdownMenu.Root open={open} onOpenChange={setOpen}>
			<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
			<Wrapper>
				<DropdownMenu.Content
					className={classNames(styles.content, styles.viewport)}
					sideOffset={contentGap}
					align={align}
					side={side}
				>
					{!disableSearch && (
						<DsTextInput
							className={styles.searchInput}
							placeholder="Search"
							value={searchTerm}
							onValueChange={setSearchTerm}
							startAdornment={<DsIcon icon="search" size="tiny" />}
						/>
					)}
					{filteredOptions.map((option) => (
						<DropdownMenu.Item
							key={option.label}
							disabled={option.disabled}
							className={classNames(
								styles.item,
								{
									[styles.selected]: selected === option.value,
								},
								className,
							)}
							style={style}
							onClick={(e) => {
								e.stopPropagation();

								if (!option.disabled) {
									if (option.value) onSelect?.(option.value);
									option.onClick?.(e);
									setOpen(false);
								}
							}}
						>
							{option.icon && <DsIcon icon={option.icon} className={styles.itemIcon} />}
							<span className={styles.label}>{option.label}</span>
							{option.value && selected === option.value && (
								<span className={styles.indicator}>
									<DsIcon icon="check" />
								</span>
							)}
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</Wrapper>
		</DropdownMenu.Root>
	);
};

export default DsDropdownMenu;
