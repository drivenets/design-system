import classNames from 'classnames';
import type { FC } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-toolbar.module.scss';
import type { DsFiltersBarToolbarProps } from '../../ds-filters-bar.types';

export const Toolbar: FC<DsFiltersBarToolbarProps> = ({ className, style, children }) => {
	const { expanded, toolbarId } = useDsFiltersBarContext();

	if (!expanded) {
		return null;
	}

	return (
		<div
			id={toolbarId}
			data-scope="filters-bar"
			data-part="toolbar"
			className={classNames(styles.toolbar, className)}
			style={style}
		>
			{children}
		</div>
	);
};

Toolbar.displayName = 'DsFiltersBar.Toolbar';
