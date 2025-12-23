import type React from 'react';
import classNames from 'classnames';
import type { DsGridItemProps, DsGridProps } from './ds-grid.types';

/**
 * Design system Grid component
 */
export const DsGrid: React.FC<DsGridProps> = ({ children, columns, rows, className }) => {
	const gridClass = classNames(
		'ds-grid',
		{
			[`ds-grid-cols-${String(columns)}`]: columns,
			[`ds-grid-rows-${String(rows)}`]: rows,
		},
		className,
	);

	return <div className={gridClass}>{children}</div>;
};

/**
 * Design system GridItem component
 */
export const DsGridItem: React.FC<DsGridItemProps> = ({
	children,
	colSpan,
	colStart,
	rowSpan,
	rowStart,
	className,
}) => {
	const gridItemClass = classNames(
		{
			[`ds-grid-col-span-${String(colSpan)}`]: colSpan,
			[`ds-grid-col-start-${String(colStart)}`]: colStart,
			[`ds-grid-row-span-${String(rowSpan)}`]: rowSpan,
			[`ds-grid-row-start-${String(rowStart)}`]: rowStart,
		},
		className,
	);

	return <div className={gridItemClass}>{children}</div>;
};
