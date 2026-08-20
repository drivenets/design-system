import { describe, expect, it } from 'vitest';
import type { Table as TanstackTable } from '@tanstack/react-table';
import { areBodiesFrozen } from './frozen-body';

type Row = { id: string };

const tableResizing = (isResizingColumn: string | false): TanstackTable<Row> =>
	({ getState: () => ({ columnSizingInfo: { isResizingColumn } }) }) as unknown as TanstackTable<Row>;

describe('areBodiesFrozen', () => {
	it('never freezes when no column is being resized', () => {
		const table = tableResizing(false);
		const prev = { table, rowSelection: {} };
		const next = { table, rowSelection: {} };

		expect(areBodiesFrozen(prev, next)).toBe(false);
	});

	it('freezes during a resize when every non-table prop is unchanged', () => {
		const table = tableResizing('firstName');
		const rowSelection = {};
		const emptyState = null;
		const prev = { table, rowSelection, emptyState };
		const next = { table, rowSelection, emptyState };

		expect(areBodiesFrozen(prev, next)).toBe(true);
	});

	it('does not freeze when a non-table prop changes mid-resize', () => {
		const table = tableResizing('firstName');
		const prev = { table, rowSelection: {} };
		const next = { table, rowSelection: { '1': true } };

		expect(areBodiesFrozen(prev, next)).toBe(false);
	});

	it('ignores the identity of the stable table instance', () => {
		const rowSelection = {};
		const prev = { table: tableResizing('firstName'), rowSelection };
		const next = { table: tableResizing('firstName'), rowSelection };

		expect(areBodiesFrozen(prev, next)).toBe(true);
	});
});
