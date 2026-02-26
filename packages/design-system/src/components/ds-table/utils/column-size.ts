import type { CSSProperties } from 'react';
import { defaultColumnSizing } from '@tanstack/react-table';

/**
 * Generates the appropriate style object for a table column/cell based on its size and virtualization state
 *
 * @param columnSize - The size of the column
 * @param virtualized - Whether the table is virtualized
 * @returns Style object or undefined if no custom styling is needed
 */
export const getColumnSizeStyle = (columnSize: number, virtualized?: boolean): CSSProperties | undefined => {
	const hasCustomSize = columnSize !== defaultColumnSizing.size;
	if (hasCustomSize) {
		return { width: columnSize };
	}

	if (virtualized) {
		return { flex: 1 };
	}
};
