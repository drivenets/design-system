import React from 'react';
import { DsGridItemProps, DsGridProps } from './ds-grid.types';

/**
 * Design system Grid component
 */
export const DsGrid: React.FC<DsGridProps> = ({ children, rows, className = '' }) => {
	const rowsClass = rows ? `ds-grid-rows-${rows}` : '';

	return <div className={`ds-grid ${rowsClass} ${className}`.trim()}>{children}</div>;
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
	className = '',
}) => {
	const classes = [className];

	if (colSpan) {
		classes.push(`ds-grid-col-span-${colSpan}`);
	}

	if (colStart) {
		classes.push(`ds-grid-col-start-${colStart}`);
	}

	if (rowSpan) {
		classes.push(`ds-grid-row-span-${rowSpan}`);
	}

	if (rowStart) {
		classes.push(`ds-grid-row-start-${rowStart}`);
	}

	return <div className={classes.join(' ').trim()}>{children}</div>;
};
