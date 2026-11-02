import type { CSSProperties } from 'react';
import {
	type Column,
	type ColumnDef,
	type ColumnSizingState,
	type VisibilityState,
} from '@tanstack/react-table';
import { isExplicitColumnWidth } from '../../utils/column-size';
import { BUILTIN_COLUMN_IDS } from '../../utils/constants';

// A fill leaf header grows from its inline padding (`.headerCell`), which the group cell, having none, must add back
const FILL_LEAF_INLINE_PADDING = 'var(--ds-table-header-cell-padding-inline) * 2';
// Set by `.groupHeaderCell` when it draws a start border, which its first leaf header draws too
const GROUP_START_BORDER = 'var(--ds-table-group-start-border, 0px)';
// Set by `.groupHeaderCell`; a fill leaf's border, like its padding, sits outside its flex basis
const GROUP_BORDER = 'var(--ds-table-group-border-width)';

/**
 * Builds the flex style for a group header cell so it lines up with the combined
 * width of its visible leaf columns.
 *
 * Fixed-width leaves, the padding and group borders of fill leaves contribute to
 * `flexBasis`; fill leaves each add one unit of `flexGrow`, mirroring how
 * {@link getColumnSizeStyle} sizes leaf cells so both header rows distribute free
 * space identically.
 */
export const getGroupColumnSizeStyle = <TData, TValue>(
	leafColumns: Column<TData, TValue>[],
	columnSizing: ColumnSizingState,
	groupBoundaryIds: ReadonlySet<string>,
): CSSProperties => {
	let fixedWidth = 0;
	let flexCount = 0;
	let innerBorderCount = 0;
	let isFirstLeafFill = false;

	for (const [index, leaf] of leafColumns.entries()) {
		if (isExplicitColumnWidth(leaf, columnSizing)) {
			fixedWidth += leaf.getSize();
			continue;
		}

		flexCount += 1;
		if (index === 0) {
			isFirstLeafFill = true;
		} else if (groupBoundaryIds.has(leaf.id)) {
			innerBorderCount += 1;
		}
	}

	if (flexCount === 0) {
		return { width: fixedWidth, minWidth: fixedWidth, flexShrink: 0 };
	}

	const basis = [
		`${String(fixedWidth)}px`,
		`${String(flexCount)} * ${FILL_LEAF_INLINE_PADDING}`,
		`${String(innerBorderCount)} * ${GROUP_BORDER}`,
		isFirstLeafFill ? GROUP_START_BORDER : '0px',
	].join(' + ');

	return { flexGrow: flexCount, flexShrink: 0, flexBasis: `calc(${basis})`, minWidth: `calc(${basis})` };
};

/**
 * Ids of the visible data columns that start a new group, or follow one that just
 * ended, so a divider marks every place the column nesting changes.
 */
export const getGroupBoundaryColumnIds = <TData, TValue>(
	visibleLeafColumns: Column<TData, TValue>[],
): Set<string> => {
	const ids = new Set<string>();

	visibleLeafColumns.forEach((column, index) => {
		if (BUILTIN_COLUMN_IDS.has(column.id)) {
			return;
		}

		const previous = visibleLeafColumns[index - 1];
		if (previous && previous.parent?.id !== column.parent?.id) {
			ids.add(column.id);
		}
	});

	return ids;
};

/**
 * Whether a header or body cell starts at a group boundary, judged by its first
 * visible leaf column.
 */
export const startsAtGroupBoundary = <TData, TValue>(
	column: Column<TData, TValue>,
	groupBoundaryIds: ReadonlySet<string>,
): boolean => {
	const firstLeaf = column.getLeafColumns().find((leaf) => leaf.getIsVisible());

	return !!firstLeaf && groupBoundaryIds.has(firstLeaf.id);
};

type GroupColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
	id?: string;
	accessorKey?: string;
	columns?: ColumnDef<TData, TValue>[];
};

const getLeafColumnId = <TData, TValue>(def: GroupColumnDef<TData, TValue>): string | undefined =>
	def.id ?? def.accessorKey;

/**
 * Collects the ids of groups declared with `meta.group.defaultCollapsed`, used to
 * seed the uncontrolled collapse state.
 */
export const getInitialCollapsedGroups = <TData, TValue>(columns: ColumnDef<TData, TValue>[]): string[] => {
	const collapsed: string[] = [];

	const visit = (defs: ColumnDef<TData, TValue>[]) => {
		for (const def of defs as GroupColumnDef<TData, TValue>[]) {
			if (def.columns) {
				if (def.id && def.meta?.group?.defaultCollapsed) {
					collapsed.push(def.id);
				}
				visit(def.columns);
			}
		}
	};

	visit(columns);

	return collapsed;
};

/**
 * Maps collapsed groups to a {@link VisibilityState} that hides every leaf column
 * inside a collapsed group except those flagged `meta.keepVisibleWhenCollapsed`.
 * Layered on top of the consumer's own visibility so collapse never mutates it.
 */
export const getCollapsedColumnVisibility = <TData, TValue>(
	columns: ColumnDef<TData, TValue>[],
	collapsedGroupIds: string[],
): VisibilityState => {
	const visibility: VisibilityState = {};

	const visit = (defs: ColumnDef<TData, TValue>[], isInsideCollapsedGroup: boolean) => {
		for (const def of defs as GroupColumnDef<TData, TValue>[]) {
			if (def.columns) {
				const isGroupCollapsed = isInsideCollapsedGroup || (!!def.id && collapsedGroupIds.includes(def.id));
				visit(def.columns, isGroupCollapsed);
				continue;
			}

			if (!isInsideCollapsedGroup || def.meta?.keepVisibleWhenCollapsed) {
				continue;
			}

			const columnId = getLeafColumnId(def);
			if (columnId) {
				visibility[columnId] = false;
			}
		}
	};

	visit(columns, false);

	return visibility;
};
