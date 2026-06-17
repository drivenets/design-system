import type { CSSProperties } from 'react';
import {
	type Column,
	type ColumnDef,
	type VisibilityState,
	defaultColumnSizing,
} from '@tanstack/react-table';

/**
 * Builds the flex style for a group header cell so it lines up with the combined
 * width of its visible leaf columns.
 *
 * Fixed-width leaves contribute to `flexBasis`; default-sized leaves each add one
 * unit of `flexGrow`, mirroring how {@link getColumnSizeStyle} sizes leaf cells so
 * both header rows distribute free space identically.
 */
export const getGroupColumnSizeStyle = <TData, TValue>(
	leafColumns: Column<TData, TValue>[],
): CSSProperties => {
	let fixedWidth = 0;
	let flexCount = 0;

	for (const leaf of leafColumns) {
		const size = leaf.getSize();
		if (size !== defaultColumnSizing.size) {
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
export const isFirstLeafColumnOfGroup = <TData, TValue>(column: Column<TData, TValue>): boolean => {
	const parent = column.parent;
	if (!parent) {
		return false;
	}

	const visibleLeaves = parent.getLeafColumns().filter((leaf) => leaf.getIsVisible());

	return visibleLeaves[0]?.id === column.id;
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
