import { ReactNode } from 'react';

export interface DsGridProps {
	/**
	 * The content to be rendered inside the grid
	 */
	children: ReactNode;

	/**
	 * Number of rows in the grid (defaults to 1)
	 */
	rows?: 1 | 2 | 4 | 6 | 8;

	/**
	 * Number of columns in the grid (defaults to 12)
	 */
	columns?: 2 | 4 | 6 | 8 | 10 | 12;

	/**
	 * Custom class names to apply to the grid
	 */
	className?: string;
}

export interface DsGridItemProps {
	/**
	 * The content to be rendered inside the grid item
	 */
	children: ReactNode;

	/**
	 * Number of columns the item spans (1-12) or 'full'
	 */
	colSpan?: number | 'full';

	/**
	 * Starting column for the item (1-11)
	 */
	colStart?: number;

	/**
	 * Number of rows the item spans (1-8) or 'full'
	 */
	rowSpan?: number | 'full';

	/**
	 * Starting row for the item (1-7)
	 */
	rowStart?: number;

	/**
	 * Custom class names to apply to the grid item
	 */
	className?: string;
}
