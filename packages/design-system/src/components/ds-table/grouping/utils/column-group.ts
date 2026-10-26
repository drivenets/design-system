import type { CSSProperties } from 'react';
import {
	type Column,
	type ColumnDef,
	type ColumnSizingState,
	type ColumnVisibilityState,
	type RowData,
} from '@tanstack/react-table';
import { isExplicitColumnWidth } from '../../utils/column-size';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Builds the flex style for a group header cell so it lines up with the combined
 * width of its visible leaf columns.
 *
 * Fixed-width leaves contribute to `flexBasis`; fill leaves each add one unit of
 * `flexGrow`, mirroring how {@link getColumnSizeStyle} sizes leaf cells so both
 * header rows distribute free space identically.
 */
export const getGroupColumnSizeStyle = <TData extends RowData, TValue>(
	leafColumns: Column<DsTableFeatures, TData, TValue>[],
	columnSizing: ColumnSizingState,
): CSSProperties => {
	let fixedWidth = 0;
	let flexCount = 0;

	for (const leaf of leafColumns) {
		const size = leaf.getSize();
		if (isExplicitColumnWidth(leaf, columnSizing)) {
			fixedWidth += size;
		} else {
			flexCount += 1;
		}
	}

	if (flexCount === 0) {
		return { width: fixedWidth, minWidth: fixedWidth, flexShrink: 0 };
	}

	return { flexGrow: flexCount, flexShrink: 0, flexBasis: fixedWidth, minWidth: fixedWidth };
};

/**
 * Whether a column is the first visible leaf of its parent group. Used to draw a
 * single side border at the start of each group in both the header and body.
 */
export const isFirstLeafColumnOfGroup = <TData extends RowData, TValue>(
	column: Column<DsTableFeatures, TData, TValue>,
): boolean => {
	const parent = column.parent;
	if (!parent) {
		return false;
	}

	const visibleLeaves = parent.getLeafColumns().filter((leaf) => leaf.getIsVisible());

	return visibleLeaves[0]?.id === column.id;
};

type GroupColumnDef<TData extends RowData, TValue> = ColumnDef<DsTableFeatures, TData, TValue> & {
	id?: string;
	accessorKey?: string;
	columns?: ColumnDef<DsTableFeatures, TData, TValue>[];
};

const getLeafColumnId = <TData extends RowData, TValue>(
	def: GroupColumnDef<TData, TValue>,
): string | undefined => def.id ?? def.accessorKey;

/**
 * Collects the ids of groups declared with `meta.group.defaultCollapsed`, used to
 * seed the uncontrolled collapse state.
 */
export const getInitialCollapsedGroups = <TData extends RowData, TValue>(
	columns: ColumnDef<DsTableFeatures, TData, TValue>[],
): string[] => {
	const collapsed: string[] = [];

	const visit = (defs: ColumnDef<DsTableFeatures, TData, TValue>[]) => {
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
 * Maps collapsed groups to a {@link ColumnVisibilityState} that hides every leaf column
 * inside a collapsed group except those flagged `meta.keepVisibleWhenCollapsed`.
 * Layered on top of the consumer's own visibility so collapse never mutates it.
 */
export const getCollapsedColumnVisibility = <TData extends RowData, TValue>(
	columns: ColumnDef<DsTableFeatures, TData, TValue>[],
	collapsedGroupIds: string[],
): ColumnVisibilityState => {
	const visibility: ColumnVisibilityState = {};

	const visit = (defs: ColumnDef<DsTableFeatures, TData, TValue>[], isInsideCollapsedGroup: boolean) => {
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
