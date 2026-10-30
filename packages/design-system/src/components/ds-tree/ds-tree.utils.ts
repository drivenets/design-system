import { createTreeCollection } from '@ark-ui/react/tree-view';

import type { DsTreeDropPosition, DsTreeMoveDetails, DsTreeNode, DsTreeRootProps } from './ds-tree.types';

type IndexPath = number[];

type DsTreeCollection<T extends DsTreeNode> = DsTreeRootProps<T>['collection'];

const GROUP_EDGE_ZONE = 0.25;

export const createDsTreeCollection = <T extends DsTreeNode>(nodes: T[]) =>
	createTreeCollection<T>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		// Ark requires rootNode typed as T; the root is a synthetic container never exposed to consumers
		rootNode: { id: 'ROOT', name: '', children: nodes } as unknown as T,
	});

// Ark only counts nodes with children as branches; an empty group (`children: []`) still accepts drops
export const isDsTreeGroup = (node: DsTreeNode) => Array.isArray(node.children);

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

const isSameIndexPath = (a: IndexPath, b: IndexPath) =>
	a.length === b.length && a.every((value, index) => value === b[index]);

const isDescendantIndexPath = (ancestor: IndexPath, path: IndexPath) =>
	path.length > ancestor.length && ancestor.every((value, index) => value === path[index]);

/**
 * Destination for `collection.move`, in index coordinates from before the dragged node is removed.
 */
const getDsTreeMoveToIndexPath = (targetPath: IndexPath, position: DsTreeDropPosition): IndexPath => {
	if (position === 'inside') {
		return [...targetPath, 0];
	}

	const targetIndex = targetPath[targetPath.length - 1] ?? 0;

	return [...targetPath.slice(0, -1), position === 'after' ? targetIndex + 1 : targetIndex];
};

const isDsTreeNoopMove = (fromPath: IndexPath, targetPath: IndexPath, position: DsTreeDropPosition) => {
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
	fromIndexPath: IndexPath;
	toIndexPath: IndexPath;
}

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

		// Ark only stops the user from opening a disabled group, so an open one must still refuse new children
		const toParent = details.toParent;
		if (toParent?.disabled && toParent !== details.fromParent) {
			return 'blocked';
		}

		return 'allowed';
	};

	return {
		status: getStatus(),
		details,
		fromIndexPath: fromPath,
		toIndexPath: getDsTreeMoveToIndexPath(targetPath, position),
	};
};

export interface DsTreeSlot {
	/** Row value, or the root end zone id */
	droppableId: string;
	position: DsTreeDropPosition;
	/** Before or after a whole group block (header and children), not just its header row */
	block: boolean;
}

export interface DsTreeDrop<T extends DsTreeNode> extends DsTreeSlot {
	containerValue: string | null;
	allowed: boolean;
	move: DsTreeMove<T>;
}

export interface DsTreeDropContext<T extends DsTreeNode> {
	collection: DsTreeCollection<T>;
	expandedValue: readonly string[];
	canDrop?: (details: DsTreeMoveDetails<T>) => boolean;
	draggedValue: string;
	/** Id of the drop zone after the last root row */
	rootEndId: string;
}

interface DsTreeRect {
	top: number;
	bottom: number;
	height: number;
}

export interface DsTreePointer {
	hoveredId: string;
	pointerY: number;
	/** Viewport rect of a row, or of the root end zone */
	getRowRect: (droppableId: string) => DsTreeRect | undefined;
	/** Viewport rect of a group with its children */
	getBlockRect: (value: string) => DsTreeRect | undefined;
}

const startsWith = (path: IndexPath, prefix: IndexPath) =>
	prefix.length <= path.length && prefix.every((index, depth) => path[depth] === index);

/**
 * The drop for one exact slot, or `null` when it moves nothing (`noop`) or has no target.
 */
export const resolveDsTreeSlot = <T extends DsTreeNode>(
	{ collection, canDrop, draggedValue, rootEndId }: DsTreeDropContext<T>,
	slot: DsTreeSlot,
): { drop: DsTreeDrop<T> | null; noop: boolean } => {
	const rootCount = collection.getNodeChildren(collection.rootNode).length;
	const targetPath =
		slot.droppableId === rootEndId
			? rootCount > 0
				? [rootCount - 1]
				: undefined
			: collection.getIndexPath(slot.droppableId);
	const fromPath = collection.getIndexPath(draggedValue);
	const move = fromPath && targetPath && getDsTreeMove(collection, fromPath, targetPath, slot.position);

	if (!move || move.status === 'noop') {
		return { drop: null, noop: move?.status === 'noop' };
	}

	const { toParent } = move.details;

	return {
		drop: {
			...slot,
			containerValue: toParent ? collection.getNodeValue(toParent) : null,
			allowed: move.status === 'allowed' && (canDrop?.(move.details) ?? true),
			move,
		},
		noop: false,
	};
};

// The half entered first next to the dragged node keeps the order, so it shows the opposite side instead
const resolveUsefulSlot = <T extends DsTreeNode>(
	context: DsTreeDropContext<T>,
	slot: DsTreeSlot,
): DsTreeDrop<T> | null => {
	const { drop, noop } = resolveDsTreeSlot(context, slot);

	if (!noop || slot.position === 'inside' || slot.droppableId === context.rootEndId) {
		return drop;
	}

	const position = slot.position === 'before' ? 'after' : 'before';
	const target = context.collection.findNode(slot.droppableId);
	// An open group's header has no "after" slot (its bottom edge means first child), so it goes after the block
	const block =
		slot.block ||
		(position === 'after' &&
			!!target &&
			isDsTreeGroup(target) &&
			context.expandedValue.includes(slot.droppableId));
	const flipped = resolveDsTreeSlot(context, { droppableId: slot.droppableId, position, block }).drop;

	return flipped?.allowed ? flipped : null;
};

// A rejected slot falls back to before or after the nearest enclosing group that is not the dragged node's own
const resolveBlockSlot = <T extends DsTreeNode>(
	context: DsTreeDropContext<T>,
	{ hoveredId, pointerY, getBlockRect }: DsTreePointer,
): DsTreeDrop<T> | null => {
	const { collection } = context;
	const fromPath = collection.getIndexPath(context.draggedValue);
	const hoveredPath = collection.getIndexPath(hoveredId);

	if (!fromPath || !hoveredPath) {
		return null;
	}

	for (let depth = hoveredPath.length; depth > 0; depth--) {
		const path = hoveredPath.slice(0, depth);
		const group = collection.at(path);

		if (!group || !isDsTreeGroup(group) || startsWith(path, fromPath) || startsWith(fromPath, path)) {
			continue;
		}

		const value = collection.getNodeValue(group);
		const rect = getBlockRect(value);

		if (!rect) {
			continue;
		}

		const position = pointerY < rect.top + rect.height / 2 ? 'before' : 'after';
		const drop = resolveUsefulSlot(context, { droppableId: value, position, block: true });

		if (drop?.allowed) {
			return drop;
		}
	}

	return null;
};

/**
 * The drop under the pointer: `null` when there is none, `undefined` when the pointer
 * already left the hovered row (the drag library reports it a frame late).
 */
export const resolveDsTreeDrop = <T extends DsTreeNode>(
	context: DsTreeDropContext<T>,
	pointer: DsTreePointer,
): DsTreeDrop<T> | null | undefined => {
	const { hoveredId, pointerY } = pointer;
	const rect = pointer.getRowRect(hoveredId);

	if (!rect) {
		return null;
	}

	if (pointerY < rect.top || pointerY > rect.bottom) {
		return undefined;
	}

	const isRootEnd = hoveredId === context.rootEndId;
	const target = isRootEnd ? undefined : context.collection.findNode(hoveredId);

	if (!isRootEnd && !target) {
		return null;
	}

	const position: DsTreeDropPosition = target
		? getDsTreeDropPosition({
				pointerY,
				rect,
				isBranch: isDsTreeGroup(target),
				isExpanded: context.expandedValue.includes(hoveredId),
			})
		: 'after';
	const exact = resolveUsefulSlot(context, { droppableId: hoveredId, position, block: false });

	return exact?.allowed === false ? (resolveBlockSlot(context, pointer) ?? exact) : exact;
};
