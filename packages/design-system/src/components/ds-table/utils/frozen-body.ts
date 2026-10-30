import type { RowData } from '@tanstack/react-table';
import type { DsTableInstance } from '../ds-table-features';

/**
 * `React.memo` comparator for the table body during a column-resize drag.
 *
 * While a column is being resized, sizing is applied through CSS variables on
 * the table element, so body rows do not need to re-render — freezing them keeps
 * dragging smooth. `table` is skipped: `useTable` returns a new wrapper around
 * the same instance on every render, so it never compares equal; every other
 * prop must be referentially unchanged to freeze. That way parent-driven updates mid-
 * drag (`rowSelection`, `emptyState`, `onScroll`, `infiniteScroll`, ...) are not
 * dropped.
 */
export const areBodiesFrozen = <T extends RowData>(
	prev: { table: DsTableInstance<T> },
	next: { table: DsTableInstance<T> },
): boolean => {
	if (!next.table.store.state.columnResizing.isResizingColumn) {
		return false;
	}

	const prevProps = prev as unknown as Record<string, unknown>;
	const nextProps = next as unknown as Record<string, unknown>;
	const keys = new Set([...Object.keys(prevProps), ...Object.keys(nextProps)]);

	for (const key of keys) {
		if (key !== 'table' && prevProps[key] !== nextProps[key]) {
			return false;
		}
	}

	return true;
};
