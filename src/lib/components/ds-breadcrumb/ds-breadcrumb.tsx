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
								<DsDropdownMenu.Root>
									<DsDropdownMenu.Trigger className={styles.trigger}>
										{item.icon && <DsIcon icon={item.icon} className={styles.icon} size="small" />}
										{selectedOption?.label || item.label}
										<DsIcon icon="arrow_drop_down" className={styles.dropdownIcon} />
									</DsDropdownMenu.Trigger>
									<DsDropdownMenu.Content sideOffset={4}>
										<DsDropdownMenu.Search>
											<DsTextInput
												placeholder="Search"
												value={search}
												onValueChange={setSearch}
												onKeyDown={(e) => e.stopPropagation()}
												startAdornment={<DsIcon icon="search" size="tiny" />}
											/>
										</DsDropdownMenu.Search>
										{item.options
											.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))
											.map((opt) => {
												const selected = selectedOption?.href === opt.href;
												return (
													<DsDropdownMenu.Item
														key={opt.href}
														selected={selected}
														onClick={() => onSelect?.(opt.href)}
													>
														<DsTypography className={styles.itemLabel} variant="body-sm-reg">
															{opt.label}
														</DsTypography>
													</DsDropdownMenu.Item>
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
