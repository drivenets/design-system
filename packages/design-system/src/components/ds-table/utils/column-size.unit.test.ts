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
	getUtilityColumnSizing,
	growFillLeavesToContainer,
	isExplicitColumnWidth,
	omitBuiltinColumnSizing,
	resolveUtilityColumnWidth,
	shiftColumnTrack,
	withUtilityColumnSizing,
} from './column-size';
import {
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	RESIZE_MIN_COLUMN_WIDTH,
	SELECT_COLUMN_ID,
} from './constants';

describe('isExplicitColumnWidth', () => {
	it('returns false for an unsized column with no sizing entry (fill column)', () => {
		expect(isExplicitColumnWidth({ id: 'a', columnDef: {} }, {})).toBe(false);
	});

	it('returns true when size was authored, including TanStack’s default size', () => {
		expect(
			isExplicitColumnWidth(
				{ id: 'a', columnDef: { size: defaultColumnSizing.size, meta: { hasExplicitSize: true } } },
				{},
			),
		).toBe(true);
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
	it('uses columnDef.size when size was authored', () => {
		expect(
			getResizeOriginSize({ id: 'a', columnDef: { size: 200, meta: { hasExplicitSize: true } } }, 198),
		).toBe(200);
	});

	it('uses columnDef.size when the authored size is TanStack’s default', () => {
		expect(
			getResizeOriginSize(
				{ id: 'a', columnDef: { size: defaultColumnSizing.size, meta: { hasExplicitSize: true } } },
				198,
			),
		).toBe(defaultColumnSizing.size);
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

	it('reconciles independent rounding so seeded widths match the measured total', () => {
		const next = collectMissingLeafSizing({ a: 500.6, b: 500.6 }, {});

		expect(next).toEqual({ a: 501, b: 500 });
	});

	it('absorbs rounding drift into missing ids and leaves existing widths unchanged', () => {
		expect(collectMissingLeafSizing({ a: 500.6, b: 500.6 }, { b: 501 }, 1001)).toEqual({ a: 500 });
	});

	it('does not snap seeded widths to the container when measured columns overflow it', () => {
		expect(collectMissingLeafSizing({ a: 1000, b: 1000 }, {}, 1116)).toEqual({ a: 1000, b: 1000 });
	});

	it('snaps a 1px measured overflow to the container width', () => {
		const next = collectMissingLeafSizing({ a: 558.5, b: 558.5 }, {}, 1116);
		const total = Object.values(next).reduce((sum, width) => sum + width, 0);

		expect(total).toBe(1116);
	});

	it('distributes container underflow across fill leaves by their measured share', () => {
		const next = collectMissingLeafSizing({ a: 200, b: 200 }, {}, 1200, ['a', 'b']);

		expect(next).toEqual({ a: 600, b: 600 });
	});

	it('grows only fill leaves when the container is wider than the measured total', () => {
		const next = collectMissingLeafSizing({ a: 200, b: 200, c: 200 }, {}, 1200, ['b', 'c']);

		expect(next).toEqual({ a: 200, b: 500, c: 500 });
	});
});

describe('growFillLeavesToContainer', () => {
	it('moves leftover space onto uncapped fill leaves after a sibling hits maxSize', () => {
		const next = growFillLeavesToContainer(
			{ a: 280, b: 360, c: 360 },
			{},
			['a', 'b', 'c'],
			1200,
			['a', 'b', 'c'],
			[
				{ id: 'a', columnDef: { maxSize: 280 } },
				{ id: 'b', columnDef: {} },
				{ id: 'c', columnDef: {} },
			],
		);

		expect(next.a).toBe(280);
		expect(next.b).toBeGreaterThan(360);
		expect(next.c).toBeGreaterThan(360);
		expect((next.a ?? 0) + (next.b ?? 0) + (next.c ?? 0)).toBe(1200);
	});

	it('does not grow an explicit leaf when filling leftover space', () => {
		const next = growFillLeavesToContainer(
			{ a: 280, b: 360, c: 360 },
			{},
			['a', 'b', 'c'],
			1200,
			['b', 'c'],
			[
				{ id: 'a', columnDef: { maxSize: 280 } },
				{ id: 'b', columnDef: {} },
				{ id: 'c', columnDef: {} },
			],
		);

		expect(next).toEqual({ a: 280, b: 460, c: 460 });
	});
});

describe('shiftColumnTrack', () => {
	const bounds = [
		{ id: 'a', columnDef: {} },
		{ id: 'b', columnDef: {} },
	];

	it('returns the same map when delta is 0', () => {
		const sizing = { a: 200, b: 200 };

		expect(shiftColumnTrack(sizing, ['a', 'b'], 0, bounds)).toBe(sizing);
	});

	it('shrinks from the last leaf when the spacer appears', () => {
		const next = shiftColumnTrack({ a: 500, b: 500 }, ['a', 'b'], -10, bounds);

		expect(next.a).toBe(500);
		expect(next.b).toBe(490);
		expect((next.a ?? 0) + (next.b ?? 0)).toBe(990);
	});

	it('grows leaves when the spacer disappears', () => {
		const next = shiftColumnTrack({ a: 500, b: 490 }, ['a', 'b'], 10, bounds);

		expect((next.a ?? 0) + (next.b ?? 0)).toBe(1000);
	});

	it('does not shrink a leaf below minSize', () => {
		const next = shiftColumnTrack({ a: 200, b: 52 }, ['a', 'b'], -10, [
			{ id: 'a', columnDef: {} },
			{ id: 'b', columnDef: { minSize: 52 } },
		]);

		expect(next.b).toBe(52);
		expect(next.a).toBe(190);
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

describe('resolveUtilityColumnWidth', () => {
	it('returns the fallback when the width is omitted, non-finite, or not positive', () => {
		expect(resolveUtilityColumnWidth(undefined, 36)).toBe(36);
		expect(resolveUtilityColumnWidth(0, 36)).toBe(36);
		expect(resolveUtilityColumnWidth(-8, 36)).toBe(36);
		expect(resolveUtilityColumnWidth(Number.NaN, 36)).toBe(36);
		expect(resolveUtilityColumnWidth(Number.POSITIVE_INFINITY, 36)).toBe(36);
	});

	it('returns a positive finite width as-is', () => {
		expect(resolveUtilityColumnWidth(48, 36)).toBe(48);
		expect(resolveUtilityColumnWidth(1, 36)).toBe(1);
	});
});

describe('withUtilityColumnSizing', () => {
	it('strips inbound utility ids and overlays the authored widths', () => {
		expect(
			withUtilityColumnSizing(
				{ [SELECT_COLUMN_ID]: 80, firstName: 200 },
				{ [SELECT_COLUMN_ID]: 48, [EXPANDER_COLUMN_ID]: 40 },
			),
		).toEqual({ firstName: 200, [SELECT_COLUMN_ID]: 48, [EXPANDER_COLUMN_ID]: 40 });
	});
});

describe('getUtilityColumnSizing', () => {
	it('collects size entries for injected utility leaves only', () => {
		expect(
			getUtilityColumnSizing([
				{ id: REORDER_COLUMN_ID, size: 80 },
				{ id: EXPANDER_COLUMN_ID, size: 40 },
				{ id: SELECT_COLUMN_ID, size: 48 },
				{ id: 'firstName', size: 200 },
			]),
		).toEqual({
			[REORDER_COLUMN_ID]: 80,
			[EXPANDER_COLUMN_ID]: 40,
			[SELECT_COLUMN_ID]: 48,
		});
	});
});
