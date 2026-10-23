import { describe, expect, it } from 'vitest';

import type { DsTreeNode } from './ds-tree.types';
import { createDsTreeCollection, getDsTreeDropPosition, getDsTreeMove, isDsTreeGroup } from './ds-tree.utils';

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

	it('blocks drops into the node own subtree', () => {
		const collection = createDsTreeCollection(nodes);

		expect(getDsTreeMove(collection, [0], [0, 1], 'inside')?.status).toBe('blocked');
		expect(getDsTreeMove(collection, [0], [0, 1, 0], 'after')?.status).toBe('blocked');
	});
});
