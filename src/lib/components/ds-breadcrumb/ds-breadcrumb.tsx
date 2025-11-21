import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import classNames from 'classnames';
import styles from './ds-breadcrumb.module.scss';
import { DsBreadcrumbProps } from './ds-breadcrumb.types';
import { DsIcon } from '../ds-icon';
import { DsDropdownMenu } from '../ds-dropdown-menu';

/**
 * Design system Breadcrumb component
 */
const DsBreadcrumb: React.FC<DsBreadcrumbProps> = ({ items, onSelect, className }) => {
	const location = useLocation();

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
								<DsDropdownMenu
									options={item.options.map((opt) => ({ label: opt.label, value: opt.href }))}
									selected={selectedOption?.href}
									onSelect={onSelect}
								>
									<button className={classNames(styles.trigger)}>
										{item.icon && <DsIcon icon={item.icon} className={styles.icon} size="small" />}
										{selectedOption?.label || item.label}
										<DsIcon icon="arrow_drop_down" className={styles.dropdownIcon} />
									</button>
								</DsDropdownMenu>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default DsBreadcrumb;
