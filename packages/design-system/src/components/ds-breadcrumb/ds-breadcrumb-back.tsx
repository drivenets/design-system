import type React from 'react';
import { Link } from '@tanstack/react-router';
import classNames from 'classnames';
import styles from './ds-breadcrumb.module.scss';
import type { DsBreadcrumbBackProps } from './ds-breadcrumb-back.types';
import { DsIcon } from '../ds-icon';

/**
 * Standalone back crumb for drawer and modal drill-down headers.
 */
const DsBreadcrumbBack: React.FC<DsBreadcrumbBackProps> = ({ href, className, locale, onClick }) => {
	const rootClassName = classNames(styles.back, className);
	const content = (
		<>
			<DsIcon icon="arrow_back" size="small" aria-hidden />
			<span className={styles.label}>{locale?.label ?? 'Back'}</span>
		</>
	);

	if (href) {
		return (
			<Link to={href} className={rootClassName} onClick={onClick}>
				{content}
			</Link>
		);
	}

	return (
		<button type="button" className={rootClassName} onClick={onClick}>
			{content}
		</button>
	);
};

DsBreadcrumbBack.displayName = 'DsBreadcrumbBack';

export default DsBreadcrumbBack;
