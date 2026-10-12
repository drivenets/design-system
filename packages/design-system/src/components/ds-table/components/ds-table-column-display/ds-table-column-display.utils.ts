import type { Column, VisibilityState } from '@tanstack/react-table';
import { BUILTIN_COLUMN_IDS } from '../../utils/constants';
import type {
	ColumnDisplayCheckedState,
	ColumnDisplayNode,
	ColumnDisplayToggleTarget,
} from './ds-table-column-display.types';

const getColumnLabel = <TData>(column: Column<TData>): string => {
	const { header, meta } = column.columnDef;

	if (meta?.columnDisplayLabel) {
		return meta.columnDisplayLabel;
	}

	return typeof header === 'string' && header.length > 0 ? header : column.id;
};

export const getCheckedState = (
	leafIds: string[],
	visibility: VisibilityState,
): ColumnDisplayCheckedState => {
	const shownCount = leafIds.filter((id) => visibility[id] !== false).length;

	if (shownCount === leafIds.length) {
		return true;
	}

	return shownCount === 0 ? false : 'indeterminate';
};

const buildNode = <TData>(column: Column<TData>, visibility: VisibilityState): ColumnDisplayNode => {
	const leafIds = column.getLeafColumns().map((leaf) => leaf.id);
	const hideableLeafIds = column
		.getLeafColumns()
		.filter((leaf) => leaf.getCanHide())
		.map((leaf) => leaf.id);
	const locked = hideableLeafIds.length === 0;

	return {
		id: column.id,
		label: getColumnLabel(column),
		hideableLeafIds,
		checked: getCheckedState(locked ? leafIds : hideableLeafIds, visibility),
		locked,
		children: column.columns.map((child) => buildNode(child, visibility)),
	};
};

/**
 * Builds the column display list from the table's top-level columns, skipping
 * the table's own utility columns. `visibility` is the consumer-facing state, so
 * a column hidden only by a collapsed group still reads as checked.
 */
export const getColumnDisplayTree = <TData>(
	columns: Column<TData>[],
	visibility: VisibilityState,
): ColumnDisplayNode[] =>
	columns
		.filter((column) => !BUILTIN_COLUMN_IDS.has(column.id))
		.map((column) => buildNode(column, visibility));

/**
 * The "All columns" row: every hideable leaf in the tree.
 */
export const getAllColumnsTarget = (
	tree: ColumnDisplayNode[],
	visibility: VisibilityState,
): ColumnDisplayToggleTarget => {
	const hideableLeafIds = tree.flatMap((node) => node.hideableLeafIds);

	return {
		hideableLeafIds,
		checked: getCheckedState(hideableLeafIds, visibility),
		locked: hideableLeafIds.length === 0,
	};
};

const filterNodes = (nodes: ColumnDisplayNode[], query: string): ColumnDisplayNode[] =>
	nodes.flatMap((node) => {
		if (node.label.toLocaleLowerCase().includes(query)) {
			return [node];
		}

		const children = filterNodes(node.children, query);

		return children.length > 0 ? [{ ...node, children }] : [];
	});

/**
 * Keeps rows whose label contains `query` (case-insensitive). A matching group
 * keeps all of its children; a group with matching children keeps only those.
 */
export const filterColumnDisplayTree = (nodes: ColumnDisplayNode[], query: string): ColumnDisplayNode[] => {
	const normalizedQuery = query.trim().toLocaleLowerCase();

	if (!normalizedQuery) {
		return nodes;
	}

	return filterNodes(nodes, normalizedQuery);
};

/**
 * Visibility patch for clicking a row: a fully checked row hides its hideable
 * leaves; an unchecked or partial row shows them.
 */
export const getToggleVisibilityUpdate = ({
	hideableLeafIds,
	checked,
}: ColumnDisplayToggleTarget): VisibilityState => {
	const visible = checked !== true;

	return Object.fromEntries(hideableLeafIds.map((id) => [id, visible]));
};
