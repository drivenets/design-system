import { describe, expect, it } from 'vitest';

import type { DsTreeNode } from './ds-tree.types';
import {
	createDsTreeCollection,
	getDsTreeDropPosition,
	getDsTreeMove,
	isDsTreeGroup,
	resolveDsTreeDrop,
	type DsTreeDropContext,
} from './ds-tree.utils';

const nodes: DsTreeNode[] = [
	{
		id: 'a',
		name: 'A',
		children: [
			{ id: 'a1', name: 'A1' },
			{ id: 'a2', name: 'A2', children: [{ id: 'a2x', name: 'A2x' }] },
		],
	},
	{ id: 'b', name: 'B' },
	{ id: 'empty', name: 'Empty', children: [] },
	{ id: 'c', name: 'C' },
];

const rect = { top: 100, height: 40 };

const toIds = (items: DsTreeNode[] | undefined): unknown =>
	items?.map((node) => (node.children ? { [node.id]: toIds(node.children) } : node.id));

const moveAndRead = (fromPath: number[], targetPath: number[], position: 'before' | 'after' | 'inside') => {
	const collection = createDsTreeCollection(nodes);
	const move = getDsTreeMove(collection, fromPath, targetPath, position);

	if (!move) {
		throw new Error('move not resolved');
	}

	return { move, ids: toIds(collection.move([fromPath], move.toIndexPath).rootNode.children) };
};

describe('getDsTreeDropPosition', () => {
	it('splits leaf rows in halves', () => {
		expect(getDsTreeDropPosition({ pointerY: 119, rect, isBranch: false, isExpanded: false })).toBe('before');
		expect(getDsTreeDropPosition({ pointerY: 121, rect, isBranch: false, isExpanded: false })).toBe('after');
	});

	it('splits collapsed group rows into before, inside and after', () => {
		expect(getDsTreeDropPosition({ pointerY: 105, rect, isBranch: true, isExpanded: false })).toBe('before');
		expect(getDsTreeDropPosition({ pointerY: 120, rect, isBranch: true, isExpanded: false })).toBe('inside');
		expect(getDsTreeDropPosition({ pointerY: 135, rect, isBranch: true, isExpanded: false })).toBe('after');
	});

	it('offers no after zone on expanded group rows', () => {
		expect(getDsTreeDropPosition({ pointerY: 105, rect, isBranch: true, isExpanded: true })).toBe('before');
		expect(getDsTreeDropPosition({ pointerY: 139, rect, isBranch: true, isExpanded: true })).toBe('inside');
	});
});

describe('isDsTreeGroup', () => {
	it('treats a group with no children as a group', () => {
		const collection = createDsTreeCollection(nodes);
		const empty = collection.findNode('empty');
		const leaf = collection.findNode('b');

		expect(empty && isDsTreeGroup(empty)).toBe(true);
		expect(leaf && isDsTreeGroup(leaf)).toBe(false);
	});
});

describe('getDsTreeMove', () => {
	it('moves a node down within the same parent', () => {
		const { move, ids } = moveAndRead([1], [3], 'before');

		expect(move.status).toBe('allowed');
		expect(move.details.fromParent).toBeNull();
		expect(move.details.toParent).toBeNull();
		expect(ids).toEqual([{ a: ['a1', { a2: ['a2x'] }] }, { empty: [] }, 'b', 'c']);
	});

	it('moves a node after the last root row', () => {
		const { ids } = moveAndRead([0, 0], [3], 'after');

		expect(ids).toEqual([{ a: [{ a2: ['a2x'] }] }, 'b', { empty: [] }, 'c', 'a1']);
	});

	it('moves a node inside a group as its first child', () => {
		const { move, ids } = moveAndRead([3], [0], 'inside');

		expect(move.details.toParent?.id).toBe('a');
		expect(ids).toEqual([{ a: ['c', 'a1', { a2: ['a2x'] }] }, 'b', { empty: [] }]);
	});

	it('moves a node into an empty group', () => {
		const { ids } = moveAndRead([1], [2], 'inside');

		expect(ids).toEqual([{ a: ['a1', { a2: ['a2x'] }] }, { empty: ['b'] }, 'c']);
	});

	it('moves a node from a group into a later sibling group', () => {
		const { move, ids } = moveAndRead([0], [2], 'inside');

		expect(move.details.fromParent).toBeNull();
		expect(move.details.toParent?.id).toBe('empty');
		expect(ids).toEqual(['b', { empty: [{ a: ['a1', { a2: ['a2x'] }] }] }, 'c']);
	});

	it('moves a nested node out to the root level', () => {
		const { move, ids } = moveAndRead([0, 1, 0], [0], 'before');

		expect(move.details.fromParent?.id).toBe('a2');
		expect(ids).toEqual(['a2x', { a: ['a1', { a2: [] }] }, 'b', { empty: [] }, 'c']);
	});

	it('treats drops next to the node itself as no-ops', () => {
		const collection = createDsTreeCollection(nodes);

		expect(getDsTreeMove(collection, [1], [1], 'after')?.status).toBe('noop');
		expect(getDsTreeMove(collection, [1], [0], 'after')?.status).toBe('noop');
		expect(getDsTreeMove(collection, [1], [2], 'before')?.status).toBe('noop');
		expect(getDsTreeMove(collection, [0, 0], [0], 'inside')?.status).toBe('noop');
		expect(getDsTreeMove(collection, [1], [3], 'before')?.status).toBe('allowed');
	});

	it('blocks drops inside a disabled group but not next to it', () => {
		const collection = createDsTreeCollection([
			{ id: 'locked', name: 'Locked', disabled: true, children: [{ id: 'l1', name: 'L1' }] },
			{ id: 'b', name: 'B' },
		]);

		expect(getDsTreeMove(collection, [1], [0], 'inside')?.status).toBe('blocked');
		expect(getDsTreeMove(collection, [1], [0], 'before')?.status).toBe('allowed');
	});

	it('blocks drops next to the children of an open disabled group, but reorders within it', () => {
		const collection = createDsTreeCollection([
			{
				id: 'locked',
				name: 'Locked',
				disabled: true,
				children: [
					{ id: 'l1', name: 'L1' },
					{ id: 'l2', name: 'L2' },
				],
			},
			{ id: 'b', name: 'B' },
		]);

		expect(getDsTreeMove(collection, [1], [0, 0], 'before')?.status).toBe('blocked');
		expect(getDsTreeMove(collection, [0, 1], [0, 0], 'before')?.status).toBe('allowed');
	});

	it('blocks drops into the node own subtree', () => {
		const collection = createDsTreeCollection(nodes);

		expect(getDsTreeMove(collection, [0], [0, 1], 'inside')?.status).toBe('blocked');
		expect(getDsTreeMove(collection, [0], [0, 1, 0], 'after')?.status).toBe('blocked');
	});
});

describe('resolveDsTreeDrop', () => {
	const ROW_HEIGHT = 40;
	const ROOT_END = 'root-end';

	/** Lays the visible rows out top to bottom, then resolves the drop with the pointer at `ratio` of `hoveredId`. */
	const resolveAt = (
		tree: DsTreeNode[],
		{
			dragged,
			hoveredId,
			ratio,
			expandedValue = [],
			canDrop,
		}: {
			dragged: string;
			hoveredId: string;
			ratio: number;
			expandedValue?: string[];
			canDrop?: DsTreeDropContext<DsTreeNode>['canDrop'];
		},
	) => {
		const rows: string[] = [];
		const blocks = new Map<string, { first: number; last: number }>();
		const visit = (items: DsTreeNode[]) => {
			for (const item of items) {
				const first = rows.push(item.id) - 1;

				if (item.children && expandedValue.includes(item.id)) {
					visit(item.children);
				}

				blocks.set(item.id, { first, last: rows.length - 1 });
			}
		};
		visit(tree);
		rows.push(ROOT_END);

		const rectOf = (first: number, last = first) => ({
			top: first * ROW_HEIGHT,
			bottom: (last + 1) * ROW_HEIGHT,
			height: (last - first + 1) * ROW_HEIGHT,
		});
		const hoveredRect = rectOf(rows.indexOf(hoveredId));
		const context = {
			collection: createDsTreeCollection(tree),
			expandedValue,
			canDrop,
			draggedValue: dragged,
			rootEndId: ROOT_END,
		};
		const drop = resolveDsTreeDrop(context, {
			hoveredId,
			pointerY: hoveredRect.top + hoveredRect.height * ratio,
			getRowRect: (id) => (rows.includes(id) ? rectOf(rows.indexOf(id)) : undefined),
			getBlockRect: (id) => {
				const block = blocks.get(id);
				return block && rectOf(block.first, block.last);
			},
		});

		return (
			drop && {
				droppableId: drop.droppableId,
				position: drop.position,
				block: drop.block,
				allowed: drop.allowed,
			}
		);
	};

	it('flips a slot that keeps the order to the other side of the same row', () => {
		expect(resolveAt(nodes, { dragged: 'b', hoveredId: 'empty', ratio: 0.1 })).toEqual({
			droppableId: 'empty',
			position: 'after',
			block: false,
			allowed: true,
		});
	});

	it('falls back to before or after the enclosing group when canDrop rejects the exact slot', () => {
		const sameParentOnly: DsTreeDropContext<DsTreeNode>['canDrop'] = ({ fromParent, toParent }) =>
			fromParent?.id === toParent?.id;

		expect(
			resolveAt(nodes, {
				dragged: 'b',
				hoveredId: 'a1',
				ratio: 0.2,
				expandedValue: ['a'],
				canDrop: sameParentOnly,
			}),
		).toEqual({ droppableId: 'a', position: 'before', block: true, allowed: true });
	});

	it('appends after the last root row from the root end zone', () => {
		expect(resolveAt(nodes, { dragged: 'b', hoveredId: ROOT_END, ratio: 0.5 })).toEqual({
			droppableId: ROOT_END,
			position: 'after',
			block: false,
			allowed: true,
		});
	});

	it('never resolves inside a disabled group, falling back to before or after its block', () => {
		const tree: DsTreeNode[] = [
			{ id: 'b', name: 'B' },
			{ id: 'locked', name: 'Locked', disabled: true, children: [{ id: 'l1', name: 'L1' }] },
			{ id: 'c', name: 'C' },
		];

		expect(resolveAt(tree, { dragged: 'c', hoveredId: 'locked', ratio: 0.4 })).toEqual({
			droppableId: 'locked',
			position: 'before',
			block: true,
			allowed: true,
		});
	});

	it('is undefined once the pointer has left the hovered row', () => {
		expect(resolveAt(nodes, { dragged: 'b', hoveredId: 'c', ratio: 1.5 })).toBeUndefined();
	});
});
