import React from 'react';
import classNames from 'classnames';
import { DsGridItemProps, DsGridProps } from './ds-grid.types';

/**
 * Design system Grid component
 */
export const DsGrid: React.FC<DsGridProps> = ({ children, columns, rows, className }) => {
	const gridClass = classNames(
		'ds-grid',
		{
			[`ds-grid-cols-${columns}`]: columns,
			[`ds-grid-rows-${rows}`]: rows,
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
			[`ds-grid-col-span-${colSpan}`]: colSpan,
			[`ds-grid-col-start-${colStart}`]: colStart,
			[`ds-grid-row-span-${rowSpan}`]: rowSpan,
			[`ds-grid-row-start-${rowStart}`]: rowStart,
		},
		className,
	);

	return <div className={gridItemClass}>{children}</div>;
};
