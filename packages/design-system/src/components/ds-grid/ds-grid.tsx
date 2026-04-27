import type { CSSProperties } from 'react';
import classNames from 'classnames';

import type { DsGridBaseProps, DsGridItemBaseProps } from './ds-grid.types';

export const DsGridBase = ({
	children,
	columns,
	rows,
	gutter,
	margin,
	className,
	style,
}: DsGridBaseProps) => {
	const gridClass = classNames(
		'ds-grid',
		{
			[`ds-grid-cols-${String(columns)}`]: columns,
			[`ds-grid-rows-${String(rows)}`]: rows,
		},
		className,
	);

	const cssVars: Record<string, string> = {};

	if (gutter !== undefined) {
		cssVars['--ds-grid-gutter'] = typeof gutter === 'number' ? `${String(gutter)}px` : gutter;
	}

	if (margin !== undefined) {
		cssVars['--ds-grid-margin'] = typeof margin === 'number' ? `${String(margin)}px` : margin;
	}

	return (
		<div className={gridClass} style={{ ...style, ...cssVars } as CSSProperties}>
			{children}
		</div>
	);
};

export const DsGridItemBase = ({
	children,
	colSpan,
	colStart,
	rowSpan,
	rowStart,
	className,
}: DsGridItemBaseProps) => {
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
