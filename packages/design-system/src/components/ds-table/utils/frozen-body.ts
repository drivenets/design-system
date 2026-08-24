import type { Table as TanstackTable } from '@tanstack/react-table';

/**
 * `React.memo` comparator for the table body during a column-resize drag.
 *
 * While a column is being resized, sizing is applied through CSS variables on
 * the table element, so body rows do not need to re-render — freezing them keeps
 * dragging smooth. `table` is a stable mutable instance (ref-equal across
 * renders), so comparing it is meaningless and it is skipped; every other prop
 * must be referentially unchanged to freeze. That way parent-driven updates mid-
 * drag (`rowSelection`, `emptyState`, `onScroll`, `infiniteScroll`, ...) are not
 * dropped.
 */
export const areBodiesFrozen = <T>(
	prev: { table: TanstackTable<T> },
	next: { table: TanstackTable<T> },
): boolean => {
	if (!next.table.getState().columnSizingInfo.isResizingColumn) {
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
