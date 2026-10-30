import { describe, expect, it } from 'vitest';
import { type ColumnDef, createTable, getCoreRowModel } from '@tanstack/react-table';
import { SELECT_COLUMN_ID } from '../../utils/constants';
import type { DsTreeMoveDetails } from '../../../ds-tree';
import type { ColumnDisplayNode } from './ds-table-column-display.types';
import {
	canDropColumnDisplayNode,
	getAllColumnsTarget,
	getCheckedState,
	getCheckedVisibilityUpdate,
	getColumnDisplayCheckedValue,
	getColumnDisplayNodes,
	getColumnOrderFromNodes,
	getGroupIds,
	getToggleVisibilityUpdate,
} from './ds-table-column-display.utils';

type Row = { id: string };

const getAllColumns = (columns: ColumnDef<Row>[]) =>
	createTable<Row>({
		data: [],
		columns,
		getCoreRowModel: getCoreRowModel(),
		state: {},
		onStateChange: () => undefined,
		renderFallbackValue: null,
	}).getAllColumns();

const columns: ColumnDef<Row>[] = [
	{ id: SELECT_COLUMN_ID },
	{
		id: 'identity',
		header: 'Identity',
		columns: [
			{ id: 'firstName', header: 'First Name', enableHiding: false },
			{ id: 'lastName', header: 'Last Name' },
			{ id: 'age', header: 'Age' },
		],
	},
	{ id: 'visits', header: () => 'Visits' },
	{ id: 'status', header: 'Status' },
];

const defaultOrder = ['firstName', 'lastName', 'age', 'visits', 'status'];

const getNodes = (
	columnOrder = defaultOrder,
	{ stickyFirst = false, stickyLeafIds = [] }: { stickyFirst?: boolean; stickyLeafIds?: string[] } = {},
) => getColumnDisplayNodes(getAllColumns(columns), { columnOrder, stickyLeafIds, stickyFirst });

const ids = (nodes: { id: string }[]) => nodes.map((node) => node.id);

const flatten = (nodes: ColumnDisplayNode[]): ColumnDisplayNode[] =>
	nodes.flatMap((node) => [node, ...flatten(node.children ?? [])]);

const findNode = (nodes: ColumnDisplayNode[], id: string): ColumnDisplayNode => {
	const node = flatten(nodes).find((candidate) => candidate.id === id);

	if (!node) {
		throw new Error(`No node "${id}"`);
	}

	return node;
};

describe('getColumnDisplayNodes', () => {
	it('builds group and leaf rows and skips utility columns', () => {
		const nodes = getNodes();

		expect(ids(nodes)).toEqual(['identity', 'visits', 'status']);
		expect(ids(nodes[0]?.children ?? [])).toEqual(['firstName', 'lastName', 'age']);
		expect(nodes[0]?.name).toBe('Identity');
		expect(nodes[1]?.name).toBe('visits');
		expect(nodes[1]?.children).toBeUndefined();
	});

	it('prefers meta.columnDisplayLabel over the header', () => {
		const [status] = getColumnDisplayNodes(
			getAllColumns([{ id: 'status', header: () => 'Status', meta: { columnDisplayLabel: 'Status' } }]),
			{ columnOrder: [], stickyLeafIds: [], stickyFirst: false },
		);

		expect(status?.name).toBe('Status');
	});

	it('locks columns that cannot be hidden and leaves them out of the group toggle', () => {
		const nodes = getNodes();

		expect(findNode(nodes, 'firstName')).toMatchObject({ locked: true, leafIdsToToggle: [] });
		expect(findNode(nodes, 'identity')).toMatchObject({
			locked: false,
			leafIds: ['firstName', 'lastName', 'age'],
			leafIdsToToggle: ['lastName', 'age'],
		});
	});

	it('orders rows at every depth by the column order', () => {
		const nodes = getNodes(['status', 'age', 'firstName', 'lastName', 'visits']);

		expect(ids(nodes)).toEqual(['status', 'identity', 'visits']);
		expect(ids(nodes[1]?.children ?? [])).toEqual(['age', 'firstName', 'lastName']);
	});

	it('lists sticky rows first, in column order, when asked to', () => {
		const stickyLeafIds = ['status', 'lastName'];

		expect(ids(getNodes(defaultOrder, { stickyFirst: true, stickyLeafIds }))).toEqual([
			'identity',
			'status',
			'visits',
		]);
		expect(ids(getNodes(defaultOrder, { stickyLeafIds }))).toEqual(['identity', 'visits', 'status']);
		expect(getNodes(defaultOrder, { stickyLeafIds }).map((node) => node.sticky)).toEqual([true, false, true]);
	});
});

describe('getGroupIds', () => {
	it('lists every group id, nested ones included', () => {
		const nodes = getColumnDisplayNodes(
			getAllColumns([
				{ id: 'outer', columns: [{ id: 'inner', columns: [{ id: 'leaf' }] }, { id: 'other' }] },
				{ id: 'standalone' },
			]),
			{ columnOrder: [], stickyLeafIds: [], stickyFirst: false },
		);

		expect(getGroupIds(nodes)).toEqual(['outer', 'inner']);
	});
});

describe('getColumnDisplayCheckedValue', () => {
	it('checks every shown leaf, locked ones included', () => {
		expect(getColumnDisplayCheckedValue(getNodes(), { age: false, status: false })).toEqual([
			'firstName',
			'lastName',
			'visits',
		]);
	});

	it('keeps a shown locked leaf checked once every leaf its group can hide is hidden', () => {
		expect(getColumnDisplayCheckedValue(getNodes(), { lastName: false, age: false })).toEqual([
			'firstName',
			'visits',
			'status',
		]);
	});
});

describe('getCheckedVisibilityUpdate', () => {
	const nodes = getNodes();

	it('patches only the leaves whose checked state changed', () => {
		expect(
			getCheckedVisibilityUpdate(nodes, ['firstName', 'lastName', 'age'], ['firstName', 'age', 'visits']),
		).toEqual({ lastName: false, visits: true });
	});

	it('never hides a locked leaf', () => {
		expect(getCheckedVisibilityUpdate(nodes, ['firstName', 'lastName', 'age'], [])).toEqual({
			lastName: false,
			age: false,
		});
	});
});

describe('getCheckedState', () => {
	it('is checked when every column is shown, including an empty list', () => {
		expect(getCheckedState([], {})).toBe(true);
		expect(getCheckedState(['a', 'b'], { a: true })).toBe(true);
	});

	it('is partial when some columns are hidden and unchecked when all are', () => {
		expect(getCheckedState(['a', 'b'], { a: false })).toBe('indeterminate');
		expect(getCheckedState(['a', 'b'], { a: false, b: false })).toBe(false);
	});
});

describe('getAllColumnsTarget', () => {
	it('covers every column in the tree that can be hidden', () => {
		expect(getAllColumnsTarget(getNodes(), { visits: false })).toEqual({
			leafIdsToToggle: ['lastName', 'age', 'visits', 'status'],
			checked: 'indeterminate',
			locked: false,
		});
	});

	it('is locked when no column can be hidden', () => {
		const nodes = getColumnDisplayNodes(getAllColumns([{ id: 'name', enableHiding: false }]), {
			columnOrder: [],
			stickyLeafIds: [],
			stickyFirst: false,
		});

		expect(getAllColumnsTarget(nodes, {})).toEqual({ leafIdsToToggle: [], checked: true, locked: true });
	});
});

describe('getToggleVisibilityUpdate', () => {
	const leafIdsToToggle = ['lastName', 'age'];

	it('hides every column of a checked row', () => {
		expect(getToggleVisibilityUpdate({ leafIdsToToggle, checked: true, locked: false })).toEqual({
			lastName: false,
			age: false,
		});
	});

	it('shows every column of an unchecked or partial row', () => {
		expect(getToggleVisibilityUpdate({ leafIdsToToggle, checked: false, locked: false })).toEqual({
			lastName: true,
			age: true,
		});
		expect(getToggleVisibilityUpdate({ leafIdsToToggle, checked: 'indeterminate', locked: false })).toEqual({
			lastName: true,
			age: true,
		});
	});
});

describe('canDropColumnDisplayNode', () => {
	const nodes = getNodes(defaultOrder, { stickyFirst: true, stickyLeafIds: ['visits'] });
	const identity = findNode(nodes, 'identity');

	const move = (
		node: string,
		target: string,
		fromParent: ColumnDisplayNode | null,
		toParent: ColumnDisplayNode | null,
	): DsTreeMoveDetails<ColumnDisplayNode> => ({
		node: findNode(nodes, node),
		target: findNode(nodes, target),
		position: 'before',
		fromParent,
		toParent,
	});

	it('allows a reorder within the same group', () => {
		expect(canDropColumnDisplayNode(move('age', 'firstName', identity, identity))).toBe(true);
	});

	it('rejects moving a column out of or into a group', () => {
		expect(canDropColumnDisplayNode(move('age', 'status', identity, null))).toBe(false);
		expect(canDropColumnDisplayNode(move('status', 'age', null, identity))).toBe(false);
	});

	it('keeps top-level rows on their side of the sticky boundary', () => {
		expect(canDropColumnDisplayNode(move('status', 'identity', null, null))).toBe(true);
		expect(canDropColumnDisplayNode(move('status', 'visits', null, null))).toBe(false);
		expect(canDropColumnDisplayNode(move('visits', 'identity', null, null))).toBe(false);
	});
});

describe('getColumnOrderFromNodes', () => {
	it('lists the leaves depth-first', () => {
		expect(getColumnOrderFromNodes(getNodes(['status', 'age', 'firstName', 'lastName', 'visits']))).toEqual([
			'status',
			'age',
			'firstName',
			'lastName',
			'visits',
		]);
	});
});
