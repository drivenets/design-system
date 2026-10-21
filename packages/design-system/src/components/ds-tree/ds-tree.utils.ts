import { createTreeCollection } from '@ark-ui/react/tree-view';

import type { DsTreeDropPosition, DsTreeMoveDetails, DsTreeNode, DsTreeRootProps } from './ds-tree.types';

type IndexPath = number[];

type DsTreeCollection<T extends DsTreeNode> = DsTreeRootProps<T>['collection'];

const GROUP_EDGE_ZONE = 0.25;

export const createDsTreeCollection = <T extends DsTreeNode>(nodes: T[]) =>
	createTreeCollection<T>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		// Ark only treats nodes with at least one child as branches; an empty group must stay a branch
		nodeToChildrenCount: (node) => (Array.isArray(node.children) ? node.children.length : undefined),
		// Ark requires rootNode typed as T; the root is a synthetic container never exposed to consumers
		rootNode: { id: 'ROOT', name: '', children: nodes } as unknown as T,
	});

export interface DsTreeDropPositionOptions {
	pointerY: number;
	rect: { top: number; height: number };
	isBranch: boolean;
	isExpanded: boolean;
}

export const getDsTreeDropPosition = ({
	pointerY,
	rect,
	isBranch,
	isExpanded,
}: DsTreeDropPositionOptions): DsTreeDropPosition => {
	const ratio = rect.height > 0 ? (pointerY - rect.top) / rect.height : 0;

	if (!isBranch) {
		return ratio < 0.5 ? 'before' : 'after';
	}

	if (ratio < GROUP_EDGE_ZONE) {
		return 'before';
	}

	if (isExpanded || ratio <= 1 - GROUP_EDGE_ZONE) {
		return 'inside';
	}

	return 'after';
};

export const isSameIndexPath = (a: IndexPath, b: IndexPath) =>
	a.length === b.length && a.every((value, index) => value === b[index]);

export const isDescendantIndexPath = (ancestor: IndexPath, path: IndexPath) =>
	path.length > ancestor.length && ancestor.every((value, index) => value === path[index]);

/**
 * Destination for `collection.move`, in index coordinates from before the dragged node is removed.
 */
export const getDsTreeMoveToIndexPath = (targetPath: IndexPath, position: DsTreeDropPosition): IndexPath => {
	if (position === 'inside') {
		return [...targetPath, 0];
	}

	const targetIndex = targetPath[targetPath.length - 1] ?? 0;

	return [...targetPath.slice(0, -1), position === 'after' ? targetIndex + 1 : targetIndex];
};

export const isDsTreeNoopMove = (
	fromPath: IndexPath,
	targetPath: IndexPath,
	position: DsTreeDropPosition,
) => {
	if (isSameIndexPath(fromPath, targetPath)) {
		return true;
	}

	const toPath = getDsTreeMoveToIndexPath(targetPath, position);

	if (!isSameIndexPath(fromPath.slice(0, -1), toPath.slice(0, -1))) {
		return false;
	}

	const fromIndex = fromPath[fromPath.length - 1] ?? 0;
	const toIndex = toPath[toPath.length - 1] ?? 0;

	return toIndex === fromIndex || toIndex === fromIndex + 1;
};

export type DsTreeMoveStatus = 'allowed' | 'noop' | 'blocked';

export interface DsTreeMove<T extends DsTreeNode> {
	status: DsTreeMoveStatus;
	details: DsTreeMoveDetails<T>;
	toIndexPath: IndexPath;
}

/**
 * Resolves a hovered slot into move details and applies the rules no `canDrop` can override:
 * keeping the current order is a no-op, and a node can't go into its own subtree.
 */
export const getDsTreeMove = <T extends DsTreeNode>(
	collection: DsTreeCollection<T>,
	fromPath: IndexPath,
	targetPath: IndexPath,
	position: DsTreeDropPosition,
): DsTreeMove<T> | null => {
	const node = collection.at(fromPath);
	const target = collection.at(targetPath);

	if (!node || !target) {
		return null;
	}

	const getParent = (path: IndexPath) =>
		path.length > 1 ? (collection.at(path.slice(0, -1)) ?? null) : null;

	const details: DsTreeMoveDetails<T> = {
		node,
		target,
		position,
		fromParent: getParent(fromPath),
		toParent: position === 'inside' ? target : getParent(targetPath),
	};

	const getStatus = (): DsTreeMoveStatus => {
		if (isDsTreeNoopMove(fromPath, targetPath, position)) {
			return 'noop';
		}

		if (isDescendantIndexPath(fromPath, targetPath)) {
			return 'blocked';
		}

		return 'allowed';
	};

	return { status: getStatus(), details, toIndexPath: getDsTreeMoveToIndexPath(targetPath, position) };
};
