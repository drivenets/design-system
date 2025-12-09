import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import classNames from 'classnames';
import styles from './ds-breadcrumb.module.scss';
import { DsBreadcrumbProps } from './ds-breadcrumb.types';
import { DsIcon } from '../ds-icon';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsTextInput } from '../ds-text-input/index';
import { DsTypography } from '../ds-typography';

/**
 * Design system Breadcrumb component
 */
const DsBreadcrumb: React.FC<DsBreadcrumbProps> = ({ items, onSelect, className }) => {
	const location = useLocation();
	const [search, setSearch] = useState('');

	return (
		<nav className={classNames(styles.breadcrumb, className)} aria-label="Breadcrumb">
			<ol className={styles.list}>
				{items.map((item, index) => {
					const selectedOption =
						item.type === 'dropdown'
							? item.options.find((option) => option.href === location.pathname)
							: null;

					const filteredOptions =
						item.type === 'dropdown'
							? item.options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))
							: [];

					return (
						<li key={index} className={styles.breadcrumbItem}>
							{item.type === 'link' ? (
								<Link
									to={item.href}
									className={classNames(styles.link)}
									aria-current={index === items.length - 1 ? 'page' : undefined}
									onClick={() => onSelect?.(item.href)}
								>
									{item.icon && <DsIcon icon={item.icon} className={styles.icon} size="small" />}
									{item.label}
								</Link>
							) : (
								<DsDropdownMenu.Root onSelect={onSelect}>
									<DsDropdownMenu.Trigger className={styles.trigger}>
										{item.icon && <DsIcon icon={item.icon} className={styles.icon} size="small" />}
										{selectedOption?.label || item.label}
										<DsIcon icon="arrow_drop_down" className={styles.dropdownIcon} />
									</DsDropdownMenu.Trigger>
									<DsDropdownMenu.Content>
										<DsDropdownMenu.Header>
											<DsTextInput
												placeholder="Search"
												value={search}
												onValueChange={setSearch}
												onKeyDown={(e) => e.stopPropagation()}
												slots={{
													startAdornment: <DsIcon icon="search" size="tiny" />,
												}}
											/>
										</DsDropdownMenu.Header>
										{filteredOptions.map((opt) => {
											const selected = selectedOption?.href === opt.href;
											return (
												<DsTypography
													key={opt.href}
													className={styles.itemLabel}
													variant="body-sm-reg"
													asChild
												>
													<DsDropdownMenu.Item value={opt.href} selected={selected}>
														{opt.label}
														{selected && <DsDropdownMenu.ItemIndicator />}
													</DsDropdownMenu.Item>
												</DsTypography>
											);
										})}
									</DsDropdownMenu.Content>
								</DsDropdownMenu.Root>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default DsBreadcrumb;
