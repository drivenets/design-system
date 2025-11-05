import { CSSProperties } from 'react';
import { defaultColumnSizing } from '@tanstack/react-table';

/**
 * Generates the appropriate style object for a table column/cell based on its size and virtualization state
 *
 * @param columnSize - The size of the column
 * @param virtualized - Whether the table is virtualized
 * @param isLastColumn - Whether this is the last column in the row
 * @returns Style object or undefined if no custom styling is needed
 */
export const getColumnStyle = (
	columnSize: number,
	virtualized?: boolean,
	isLastColumn: boolean = false,
): CSSProperties | undefined => {
	const hasCustomSize = columnSize !== defaultColumnSizing.size;
	if (!hasCustomSize) return undefined;

	if (virtualized) {
		return {
			flexBasis: `${columnSize}px`,
			flexGrow: isLastColumn ? 1 : 0,
		};
	}

	return { width: columnSize };
};
