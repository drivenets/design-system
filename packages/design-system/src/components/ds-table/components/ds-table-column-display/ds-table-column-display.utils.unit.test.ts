import { describe, expect, it } from 'vitest';
import { type ColumnDef, constructTable } from '@tanstack/react-table';
import { storeReactivityBindings } from '@tanstack/table-core/store-reactivity-bindings';
import { SELECT_COLUMN_ID } from '../../utils/constants';
import {
	filterColumnDisplayTree,
	getAllColumnsTarget,
	getCheckedState,
	getColumnDisplayTree,
	getToggleVisibilityUpdate,
} from './ds-table-column-display.utils';
import { dsTableFeatures } from '../../ds-table-features';

type Row = { id: string };

const testFeatures = { ...dsTableFeatures, coreReactivityFeature: storeReactivityBindings() };

const getAllColumns = (columns: ColumnDef<typeof dsTableFeatures, Row>[]) =>
	constructTable<typeof dsTableFeatures, Row>({
		features: testFeatures,
		data: [],
		columns,
	}).getAllColumns();

const columns: ColumnDef<typeof dsTableFeatures, Row>[] = [
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
];

const ids = (nodes: { id: string }[]) => nodes.map((node) => node.id);

describe('getColumnDisplayTree', () => {
	it('builds group and leaf rows and skips utility columns', () => {
		const tree = getColumnDisplayTree(getAllColumns(columns), {});

		expect(ids(tree)).toEqual(['identity', 'visits']);
		expect(ids(tree[0]?.children ?? [])).toEqual(['firstName', 'lastName', 'age']);
		expect(tree[0]?.label).toBe('Identity');
		expect(tree[1]?.label).toBe('visits');
	});

	it('prefers meta.columnDisplayLabel over the header', () => {
		const [status] = getColumnDisplayTree(
			getAllColumns([{ id: 'status', header: () => 'Status', meta: { columnDisplayLabel: 'Status' } }]),
			{},
		);

		expect(status?.label).toBe('Status');
	});

	it('locks columns that cannot be hidden and leaves them out of the group toggle', () => {
		const [identity] = getColumnDisplayTree(getAllColumns(columns), {});
		const firstName = identity?.children[0];

		expect(firstName).toMatchObject({ locked: true, checked: true, leafIdsToToggle: [] });
		expect(identity).toMatchObject({ locked: false, leafIdsToToggle: ['lastName', 'age'] });
	});

	it('derives the group state from the columns it can hide', () => {
		const groupState = (visibility: Record<string, boolean>) =>
			getColumnDisplayTree(getAllColumns(columns), visibility)[0]?.checked;

		expect(groupState({})).toBe(true);
		expect(groupState({ age: false })).toBe('indeterminate');
		expect(groupState({ lastName: false, age: false })).toBe(false);
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
		const tree = getColumnDisplayTree(getAllColumns(columns), { visits: false });

		expect(getAllColumnsTarget(tree, { visits: false })).toEqual({
			leafIdsToToggle: ['lastName', 'age', 'visits'],
			checked: 'indeterminate',
			locked: false,
		});
	});

	it('is locked when no column can be hidden', () => {
		const tree = getColumnDisplayTree(getAllColumns([{ id: 'name', enableHiding: false }]), {});

		expect(getAllColumnsTarget(tree, {})).toEqual({ leafIdsToToggle: [], checked: true, locked: true });
	});
});

describe('filterColumnDisplayTree', () => {
	const tree = getColumnDisplayTree(getAllColumns(columns), {});

	it('returns the full tree for a blank query', () => {
		expect(filterColumnDisplayTree(tree, '  ')).toBe(tree);
	});

	it('keeps a group with only its matching children', () => {
		const result = filterColumnDisplayTree(tree, 'ag');

		expect(ids(result)).toEqual(['identity']);
		expect(ids(result[0]?.children ?? [])).toEqual(['age']);
	});

	it('keeps every child of a matching group, ignoring case', () => {
		const result = filterColumnDisplayTree(tree, 'IDENT');

		expect(ids(result[0]?.children ?? [])).toEqual(['firstName', 'lastName', 'age']);
	});

	it('returns nothing when no label matches', () => {
		expect(filterColumnDisplayTree(tree, 'zzz')).toEqual([]);
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
