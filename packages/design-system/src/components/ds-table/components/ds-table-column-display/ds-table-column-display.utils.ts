import type { Column, ColumnVisibilityState, RowData } from '@tanstack/react-table';
import { BUILTIN_COLUMN_IDS } from '../../utils/constants';
import type {
	ColumnDisplayCheckedState,
	ColumnDisplayNode,
	ColumnDisplayToggleTarget,
} from './ds-table-column-display.types';
import type { DsTableFeatures } from '../../ds-table-features';

const getColumnLabel = <TData extends RowData>(column: Column<DsTableFeatures, TData>): string => {
	const { header, meta } = column.columnDef;

	if (meta?.columnDisplayLabel) {
		return meta.columnDisplayLabel;
	}

	return typeof header === 'string' && header.length > 0 ? header : column.id;
};

export const getCheckedState = (
	leafIds: string[],
	visibility: ColumnVisibilityState,
): ColumnDisplayCheckedState => {
	const shownCount = leafIds.filter((id) => visibility[id] !== false).length;

	if (shownCount === leafIds.length) {
		return true;
	}

	return shownCount === 0 ? false : 'indeterminate';
};

const buildNode = <TData extends RowData>(
	column: Column<DsTableFeatures, TData>,
	visibility: ColumnVisibilityState,
): ColumnDisplayNode => {
	const leafIds = column.getLeafColumns().map((leaf) => leaf.id);
	const leafIdsToToggle = column
		.getLeafColumns()
		.filter((leaf) => leaf.getCanHide())
		.map((leaf) => leaf.id);
	const locked = leafIdsToToggle.length === 0;

	return {
		id: column.id,
		label: getColumnLabel(column),
		leafIdsToToggle,
		checked: getCheckedState(locked ? leafIds : leafIdsToToggle, visibility),
		locked,
		children: column.columns.map((child) => buildNode(child, visibility)),
	};
};

/**
 * Builds the column display list from the table's top-level columns, skipping
 * the table's own utility columns. `visibility` is the consumer-facing state, so
 * a column hidden only by a collapsed group still reads as checked.
 */
export const getColumnDisplayTree = <TData extends RowData>(
	columns: Column<DsTableFeatures, TData>[],
	visibility: ColumnVisibilityState,
): ColumnDisplayNode[] =>
	columns
		.filter((column) => !BUILTIN_COLUMN_IDS.has(column.id))
		.map((column) => buildNode(column, visibility));

/**
 * The "All columns" row: every leaf in the tree that can be hidden.
 */
export const getAllColumnsTarget = (
	tree: ColumnDisplayNode[],
	visibility: ColumnVisibilityState,
): ColumnDisplayToggleTarget => {
	const leafIdsToToggle = tree.flatMap((node) => node.leafIdsToToggle);

	return {
		leafIdsToToggle,
		checked: getCheckedState(leafIdsToToggle, visibility),
		locked: leafIdsToToggle.length === 0,
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
 * Visibility patch for clicking a row: a fully checked row hides its leaves; an
 * unchecked or partial row shows them.
 */
export const getToggleVisibilityUpdate = ({
	leafIdsToToggle,
	checked,
}: ColumnDisplayToggleTarget): ColumnVisibilityState => {
	const visible = checked !== true;

	return Object.fromEntries(leafIdsToToggle.map((id) => [id, visible]));
};
