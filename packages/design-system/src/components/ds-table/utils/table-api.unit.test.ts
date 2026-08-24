import { describe, expect, it, vi } from 'vitest';
import type { Table } from '@tanstack/react-table';
import { createTableApi } from './table-api';

type Person = { id: string; name: string };

const alice: Person = { id: 'a', name: 'Alice' };
const bob: Person = { id: 'b', name: 'Bob' };

const createMockTable = () => {
	const toggleSelected = vi.fn();
	const toggleExpanded = vi.fn();
	const toggleAllRowsSelected = vi.fn();
	const toggleAllRowsExpanded = vi.fn();
	const setRowSelection = vi.fn();
	const setExpanded = vi.fn();
	const getRow = vi.fn(() => ({ toggleSelected, toggleExpanded }));
	const getFilteredSelectedRowModel = vi.fn(() => ({
		rows: [{ original: alice }, { original: bob }],
	}));

	const table = {
		getRow,
		toggleAllRowsSelected,
		toggleAllRowsExpanded,
		setRowSelection,
		setExpanded,
		getFilteredSelectedRowModel,
	} as unknown as Table<Person>;

	return {
		table,
		toggleSelected,
		toggleExpanded,
		toggleAllRowsSelected,
		toggleAllRowsExpanded,
		setRowSelection,
		setExpanded,
		getRow,
	};
};

describe('createTableApi', () => {
	it('maps selection methods onto the table instance', () => {
		const mock = createMockTable();
		const api = createTableApi(mock.table);

		api.selectRow('a');
		api.deselectRow('b');
		api.selectAllRows();
		api.deselectAllRows();
		api.selectRows(['a', 'b']);

		expect(mock.getRow).toHaveBeenCalledWith('a');
		expect(mock.getRow).toHaveBeenCalledWith('b');
		expect(mock.toggleSelected).toHaveBeenCalledWith(true);
		expect(mock.toggleSelected).toHaveBeenCalledWith(false);
		expect(mock.toggleAllRowsSelected).toHaveBeenCalledWith(true);
		expect(mock.toggleAllRowsSelected).toHaveBeenCalledWith(false);
		expect(mock.setRowSelection).toHaveBeenCalledWith({ a: true, b: true });
		expect(api.getSelectedRows()).toEqual([alice, bob]);
	});

	it('maps expand methods onto the table instance', () => {
		const mock = createMockTable();
		const api = createTableApi(mock.table);

		api.expandRow('a');
		api.collapseRow('b');
		api.expandAllRows();
		api.collapseAllRows();
		api.expandRows(['a', 'b']);

		expect(mock.getRow).toHaveBeenCalledWith('a');
		expect(mock.getRow).toHaveBeenCalledWith('b');
		expect(mock.toggleExpanded).toHaveBeenCalledWith(true);
		expect(mock.toggleExpanded).toHaveBeenCalledWith(false);
		expect(mock.toggleAllRowsExpanded).toHaveBeenCalledWith(true);
		expect(mock.toggleAllRowsExpanded).toHaveBeenCalledWith(false);
		expect(mock.setExpanded).toHaveBeenCalledWith({ a: true, b: true });
	});
});
