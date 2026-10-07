import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-toolbar.module.scss';
import type { DsFiltersBarToolbarSlotProps } from '../../ds-filters-bar.types';

interface ToolbarProps extends DsFiltersBarToolbarSlotProps {
	children: ReactNode;
}

/**
 * Expanded row
 */
export const Toolbar = ({ ref, className, style, children }: ToolbarProps) => {
	const { toolbarId } = useDsFiltersBarContext();

	return (
		<div
			ref={ref}
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
