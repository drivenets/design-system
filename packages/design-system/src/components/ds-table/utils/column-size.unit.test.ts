import { describe, expect, it } from 'vitest';
import { defaultColumnSizing } from '@tanstack/react-table';
import {
	clampColumnSize,
	clampColumnSizing,
	collectMissingLeafSizing,
	getBodyCellSizeStyle,
	getColumnSizeCssVar,
	getColumnSizeCssVars,
	getColumnSizeStyle,
	getHeaderCellSizeStyle,
	getHeaderSizeCssVar,
	getResizableColumnStyle,
	getResizableHeaderStyle,
	getResizeOriginSize,
	isExplicitColumnWidth,
	omitBuiltinColumnSizing,
} from './column-size';
import {
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	RESIZE_MIN_COLUMN_WIDTH,
	SELECT_COLUMN_ID,
} from './constants';

describe('isExplicitColumnWidth', () => {
	it('returns false for an unset size with no sizing entry (fill column)', () => {
		expect(isExplicitColumnWidth({ id: 'a', columnDef: {} }, {})).toBe(false);
	});

	it('returns false when columnDef.size is TanStack’s default', () => {
		expect(isExplicitColumnWidth({ id: 'a', columnDef: { size: defaultColumnSizing.size } }, {})).toBe(false);
	});

	it('returns true when columnDef.size is a custom value', () => {
		expect(isExplicitColumnWidth({ id: 'a', columnDef: { size: 200 } }, {})).toBe(true);
	});

	it('returns true when columnSizing has an entry, including the default size value', () => {
		expect(isExplicitColumnWidth({ id: 'a', columnDef: {} }, { a: defaultColumnSizing.size })).toBe(true);
	});
});

describe('getColumnSizeStyle', () => {
	it('returns fill styles when not explicit', () => {
		expect(getColumnSizeStyle(defaultColumnSizing.size, false)).toEqual({ flex: 1, minWidth: 0 });
	});

	it('returns fixed styles when explicit, including at the default size value', () => {
		expect(getColumnSizeStyle(defaultColumnSizing.size, true)).toEqual({
			width: defaultColumnSizing.size,
			minWidth: defaultColumnSizing.size,
			flexShrink: 0,
		});
	});

	it('returns fixed styles for a custom explicit size', () => {
		expect(getColumnSizeStyle(200, true)).toEqual({ width: 200, minWidth: 200, flexShrink: 0 });
	});
});

describe('resizable CSS variable styles', () => {
	it('names header and column size variables from ids', () => {
		expect(getHeaderSizeCssVar('identity')).toBe('--header-identity-size');
		expect(getColumnSizeCssVar('firstName')).toBe('--col-firstName-size');
	});

	it('uses header variables for header cells and column variables for body cells', () => {
		expect(getResizableHeaderStyle('identity')).toEqual({
			width: 'calc(var(--header-identity-size) * 1px)',
			minWidth: 'calc(var(--header-identity-size) * 1px)',
			flexShrink: 0,
		});
		expect(getResizableColumnStyle('firstName')).toEqual({
			width: 'calc(var(--col-firstName-size) * 1px)',
			minWidth: 'calc(var(--col-firstName-size) * 1px)',
			flexShrink: 0,
		});
	});

	it('switches header and body cells to CSS variables once resize sizing is ready', () => {
		expect(getHeaderCellSizeStyle('a', 200, true, true)).toEqual(getResizableHeaderStyle('a'));
		expect(getHeaderCellSizeStyle('a', 200, true, false)).toEqual(getColumnSizeStyle(200, true));
		expect(getBodyCellSizeStyle('a', 200, true, true)).toEqual(getResizableColumnStyle('a'));
		expect(getBodyCellSizeStyle('a', 150, false, false)).toEqual(getColumnSizeStyle(150, false));
	});

	it('maps each flat header to header and column size variables', () => {
		const vars = getColumnSizeCssVars([
			{ id: 'identity', getSize: () => 360, column: { id: 'identity', getSize: () => 150 } },
			{ id: 'firstName', getSize: () => 180, column: { id: 'firstName', getSize: () => 180 } },
		]);

		expect(vars).toEqual({
			'--header-identity-size': 360,
			'--col-identity-size': 150,
			'--header-firstName-size': 180,
			'--col-firstName-size': 180,
		});
	});
});

describe('clampColumnSize', () => {
	it('returns the width when it sits inside the range', () => {
		expect(clampColumnSize(120, 80, 200)).toBe(120);
	});

	it('clamps to minSize', () => {
		expect(clampColumnSize(40, 80, 200)).toBe(80);
	});

	it('clamps to maxSize', () => {
		expect(clampColumnSize(300, 80, 200)).toBe(200);
	});

	it('returns maxSize when minSize is greater than maxSize', () => {
		expect(clampColumnSize(150, 200, 100)).toBe(100);
	});

	it('uses the table default min when minSize is omitted', () => {
		expect(clampColumnSize(20)).toBe(RESIZE_MIN_COLUMN_WIDTH);
	});

	it('allows a minSize below the table default', () => {
		expect(clampColumnSize(10, 20)).toBe(20);
		expect(clampColumnSize(40, 20)).toBe(40);
	});
});

describe('clampColumnSizing', () => {
	const columns = [
		{ id: 'a', columnDef: { minSize: 80, maxSize: 200 } },
		{ id: 'b', columnDef: { minSize: 20 } },
	];

	it('clamps each known id to its column bounds', () => {
		expect(clampColumnSizing({ a: 40, b: 400 }, columns)).toEqual({ a: 80, b: 400 });
		expect(clampColumnSizing({ a: 500 }, columns)).toEqual({ a: 200 });
	});

	it('uses table defaults for ids that are not in columns', () => {
		expect(clampColumnSizing({ c: 10 }, columns)).toEqual({ c: RESIZE_MIN_COLUMN_WIDTH });
	});

	it('omits non-finite widths', () => {
		expect(clampColumnSizing({ a: Number.NaN, b: Number.POSITIVE_INFINITY, c: 120 }, columns)).toEqual({
			c: 120,
		});
	});
});

describe('getResizeOriginSize', () => {
	it('uses columnDef.size when it is an explicit non-default width', () => {
		expect(getResizeOriginSize({ id: 'a', columnDef: { size: 200 } }, 198)).toBe(200);
	});

	it('uses the measured width for fill columns', () => {
		expect(getResizeOriginSize({ id: 'a', columnDef: {} }, 387)).toBe(387);
	});
});

describe('collectMissingLeafSizing', () => {
	it('seeds only ids that are not already in columnSizing', () => {
		expect(collectMissingLeafSizing({ a: 120.4, b: 200 }, { b: 180 })).toEqual({ a: 120 });
	});

	it('returns an empty map when every measured id already has a sizing entry', () => {
		expect(collectMissingLeafSizing({ a: 100 }, { a: 90 })).toEqual({});
	});
});

describe('omitBuiltinColumnSizing', () => {
	it('drops select, expander, and reorder and keeps consumer ids', () => {
		expect(
			omitBuiltinColumnSizing({
				[SELECT_COLUMN_ID]: 36,
				[EXPANDER_COLUMN_ID]: 36,
				[REORDER_COLUMN_ID]: 60,
				firstName: 200,
				lastName: 180,
			}),
		).toEqual({ firstName: 200, lastName: 180 });
	});

	it('returns an empty map when every id is a utility column', () => {
		expect(
			omitBuiltinColumnSizing({
				[SELECT_COLUMN_ID]: 36,
				[EXPANDER_COLUMN_ID]: 36,
			}),
		).toEqual({});
	});

	it('returns a copy when no utility ids are present', () => {
		const sizing = { firstName: 200 };
		const next = omitBuiltinColumnSizing(sizing);

		expect(next).toEqual({ firstName: 200 });
		expect(next).not.toBe(sizing);
	});
});
