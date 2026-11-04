import type { CSSProperties } from 'react';
import type {
	ColumnDefResolved,
	ColumnSizingState,
	ColumnVisibilityState,
	RowData,
} from '@tanstack/react-table';
import { isExplicitColumnWidth } from '../../utils/column-size';
import type { DsColumn, DsColumnDef, DsTableFeatures } from '../../ds-table-features';

/**
 * Builds the flex style for a group header cell so it lines up with the combined
 * width of its visible leaf columns.
 *
 * Fixed-width leaves contribute to `flexBasis`; fill leaves each add one unit of
 * `flexGrow`, mirroring how {@link getColumnSizeStyle} sizes leaf cells so both
 * header rows distribute free space identically.
 */
export const getGroupColumnSizeStyle = <TData extends RowData, TValue>(
	leafColumns: DsColumn<TData, TValue>[],
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
	column: DsColumn<TData, TValue>,
): boolean => {
	const parent = column.parent;
	if (!parent) {
		return false;
	}

	const visibleLeaves = parent.getLeafColumns().filter((leaf) => leaf.getIsVisible());

	return visibleLeaves[0]?.id === column.id;
};

type ResolvedColumnDef<TData extends RowData> = ColumnDefResolved<DsTableFeatures, TData>;

// Group defs type their children as `ColumnDef<..., unknown>`, so walk every level as resolved defs.
const resolveColumnDefs = <TData extends RowData, TValue>(
	defs: ReadonlyArray<DsColumnDef<TData, TValue>> | undefined,
): ReadonlyArray<ResolvedColumnDef<TData>> => (defs ?? []) as ReadonlyArray<ResolvedColumnDef<TData>>;

const getLeafColumnId = <TData extends RowData>(def: ResolvedColumnDef<TData>): string | undefined =>
	def.id ?? (def.accessorKey === undefined ? undefined : String(def.accessorKey));

/**
 * Collects the ids of groups declared with `meta.group.defaultCollapsed`, used to
 * seed the uncontrolled collapse state.
 */
export const getInitialCollapsedGroups = <TData extends RowData, TValue>(
	columns: DsColumnDef<TData, TValue>[],
): string[] => {
	const collapsed: string[] = [];

	const visit = (defs: ReadonlyArray<ResolvedColumnDef<TData>>) => {
		for (const def of defs) {
			if (def.columns) {
				if (def.id && def.meta?.group?.defaultCollapsed) {
					collapsed.push(def.id);
				}
				visit(resolveColumnDefs(def.columns));
			}
		}
	};

	visit(resolveColumnDefs(columns));

	return collapsed;
};

/**
 * Maps collapsed groups to a {@link ColumnVisibilityState} that hides every leaf column
 * inside a collapsed group except those flagged `meta.keepVisibleWhenCollapsed`.
 * Layered on top of the consumer's own visibility so collapse never mutates it.
 */
export const getCollapsedColumnVisibility = <TData extends RowData, TValue>(
	columns: DsColumnDef<TData, TValue>[],
	collapsedGroupIds: string[],
): ColumnVisibilityState => {
	const visibility: ColumnVisibilityState = {};

	const visit = (defs: ReadonlyArray<ResolvedColumnDef<TData>>, isInsideCollapsedGroup: boolean) => {
		for (const def of defs) {
			if (def.columns) {
				const isGroupCollapsed = isInsideCollapsedGroup || (!!def.id && collapsedGroupIds.includes(def.id));
				visit(resolveColumnDefs(def.columns), isGroupCollapsed);
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

	visit(resolveColumnDefs(columns), false);

	return visibility;
};
