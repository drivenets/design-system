import type { Column, VisibilityState } from '@tanstack/react-table';
import type { DsTreeMoveDetails } from '../../../ds-tree';
import { BUILTIN_COLUMN_IDS } from '../../utils/constants';
import { sortByColumnOrder } from '../../utils/column-order';
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

const sortNodes = (
	nodes: ColumnDisplayNode[],
	columnOrder: readonly string[],
	stickyFirst: boolean,
): ColumnDisplayNode[] => {
	const sorted = sortByColumnOrder(nodes, columnOrder, (node) => node.leafIds);

	return stickyFirst
		? [...sorted.filter((node) => node.sticky), ...sorted.filter((node) => !node.sticky)]
		: sorted;
};

export interface ColumnDisplayNodesOptions {
	columnOrder: readonly string[];
	stickyLeafIds: readonly string[];
	stickyFirst: boolean;
}

const buildNode = <TData>(
	column: Column<TData>,
	{ columnOrder, stickyLeafIds }: Omit<ColumnDisplayNodesOptions, 'stickyFirst'>,
): ColumnDisplayNode => {
	const leaves = column.getLeafColumns();
	const leafIdsToToggle = leaves.filter((leaf) => leaf.getCanHide()).map((leaf) => leaf.id);
	const node: ColumnDisplayNode = {
		id: column.id,
		name: getColumnLabel(column),
		leafIds: leaves.map((leaf) => leaf.id),
		leafIdsToToggle,
		locked: leafIdsToToggle.length === 0,
		sticky: leaves.some((leaf) => stickyLeafIds.includes(leaf.id)),
	};

	if (column.columns.length === 0) {
		return node;
	}

	const children = column.columns.map((child) => buildNode(child, { columnOrder, stickyLeafIds }));

	return { ...node, children: sortNodes(children, columnOrder, false) };
};

/**
 * Builds the column display tree from the table's top-level columns, skipping
 * the table's own utility columns. Rows follow `columnOrder` at every depth.
 */
export const getColumnDisplayNodes = <TData>(
	columns: Column<TData>[],
	options: ColumnDisplayNodesOptions,
): ColumnDisplayNode[] =>
	sortNodes(
		columns
			.filter((column) => !BUILTIN_COLUMN_IDS.has(column.id))
			.map((column) => buildNode(column, options)),
		options.columnOrder,
		options.stickyFirst,
	);

export const getGroupIds = (nodes: ColumnDisplayNode[]): string[] =>
	nodes.flatMap((node) => (node.children ? [node.id, ...getGroupIds(node.children)] : []));

const getLeafNodes = (nodes: ColumnDisplayNode[]): ColumnDisplayNode[] =>
	nodes.flatMap((node) => (node.children ? getLeafNodes(node.children) : [node]));

export const getColumnOrderFromNodes = (nodes: ColumnDisplayNode[]): string[] =>
	getLeafNodes(nodes).map((node) => node.id);

/**
 * Checked leaf ids for the tree: every shown leaf, locked ones included. `visibility`
 * is the consumer-facing state, so a column hidden only by a collapsed group still reads as checked.
 */
export const getColumnDisplayCheckedValue = (
	nodes: ColumnDisplayNode[],
	visibility: VisibilityState,
): string[] =>
	getLeafNodes(nodes)
		.filter((node) => visibility[node.id] !== false)
		.map((node) => node.id);

/**
 * Visibility patch for a checked-value change, limited to the leaves that
 * changed. Locked leaves are skipped, so a group toggle never hides them.
 */
export const getCheckedVisibilityUpdate = (
	nodes: ColumnDisplayNode[],
	previousCheckedValue: readonly string[],
	nextCheckedValue: readonly string[],
): VisibilityState => {
	const previous = new Set(previousCheckedValue);
	const next = new Set(nextCheckedValue);

	return Object.fromEntries(
		getLeafNodes(nodes)
			.filter((node) => !node.locked && previous.has(node.id) !== next.has(node.id))
			.map((node) => [node.id, next.has(node.id)]),
	);
};

/**
 * The "All columns" row: every leaf in the tree that can be hidden.
 */
export const getAllColumnsTarget = (
	nodes: ColumnDisplayNode[],
	visibility: VisibilityState,
): ColumnDisplayToggleTarget => {
	const leafIdsToToggle = nodes.flatMap((node) => node.leafIdsToToggle);

	return {
		leafIdsToToggle,
		checked: getCheckedState(leafIdsToToggle, visibility),
		locked: leafIdsToToggle.length === 0,
	};
};

/**
 * Visibility patch for clicking a row: a fully checked row hides its leaves; an
 * unchecked or partial row shows them.
 */
export const getToggleVisibilityUpdate = ({
	leafIdsToToggle,
	checked,
}: ColumnDisplayToggleTarget): VisibilityState => {
	const visible = checked !== true;

	return Object.fromEntries(leafIdsToToggle.map((id) => [id, visible]));
};

export const canDropColumnDisplayNode = ({
	node,
	target,
	fromParent,
	toParent,
}: DsTreeMoveDetails<ColumnDisplayNode>): boolean => {
	if (fromParent?.id !== toParent?.id) {
		return false;
	}

	return toParent !== null || node.sticky === target.sticky;
};

/**
 * Whether a row has any sibling it may be dropped next to; a lone sticky column, for one, has none.
 */
export const canReorderColumnDisplayNode = (
	node: ColumnDisplayNode,
	siblings: ColumnDisplayNode[],
	parent: ColumnDisplayNode | null,
): boolean =>
	siblings.some(
		(target) =>
			target.id !== node.id &&
			canDropColumnDisplayNode({ node, target, position: 'before', fromParent: parent, toParent: parent }),
	);
