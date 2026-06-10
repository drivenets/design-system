import type { CSSProperties } from 'react';
import { defaultColumnSizing } from '@tanstack/react-table';

/**
 * Generates the appropriate style object for a table column/cell based on its size
 *
 * Custom-sized columns get a fixed `width` plus `minWidth` and `flexShrink: 0` so
 * they enforce horizontal overflow on the table container. Default-sized columns
 * grow to fill the row evenly via `flex: 1`.
 *
 * @param columnSize - The size of the column
 * @returns Style object for the column/cell
 */
export const getColumnSizeStyle = (columnSize: number): CSSProperties => {
	const hasCustomSize = columnSize !== defaultColumnSizing.size;
	if (hasCustomSize) {
		return { width: columnSize, minWidth: columnSize, flexShrink: 0 };
	}

	return { flex: 1, minWidth: 0 };
};
