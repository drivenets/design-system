import type { CSSProperties, ReactNode } from 'react';

export interface DsGridBaseProps {
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
	 * Gap between grid cells.
	 * A number is treated as px. A string is used as-is (e.g. `"1rem"`, `"var(--grid-gutter)"`).
	 * CSS default (when omitted): `16px` — set by `$gutter` in `_grid-variables.scss`.
	 */
	gutter?: number | string;

	/**
	 * Padding around the grid container.
	 * A number is treated as px (uniform). A string is used as-is (e.g. `"16px 20px"`, `"var(--grid-margin)"`).
	 * CSS default (when omitted): `16px 20px` — set by `$margin-y $margin-x` in `_grid-variables.scss`.
	 */
	margin?: number | string;

	className?: string;
	style?: CSSProperties;
}

export interface DsGridItemBaseProps {
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

	className?: string;
}
