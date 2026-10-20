import { describe, expect, it } from 'vitest';
import { SCROLLBAR_GUTTER_WIDTH } from '../utils/constants';
import { getScrollbarGutterPadding } from './use-scrollbar-gutter';

describe('getScrollbarGutterPadding', () => {
	it('pads the whole gutter when the scrollbar takes no layout space (overlay or hidden)', () => {
		expect(getScrollbarGutterPadding(SCROLLBAR_GUTTER_WIDTH, 0)).toBe(SCROLLBAR_GUTTER_WIDTH);
	});

	it('adds nothing when a classic scrollbar already fills the gutter', () => {
		expect(getScrollbarGutterPadding(SCROLLBAR_GUTTER_WIDTH, SCROLLBAR_GUTTER_WIDTH)).toBe(0);
	});

	it('fills only the gap beside a thinner scrollbar', () => {
		expect(getScrollbarGutterPadding(SCROLLBAR_GUTTER_WIDTH, 8)).toBe(2);
	});

	it('never goes negative when the scrollbar is wider than the gutter', () => {
		expect(getScrollbarGutterPadding(SCROLLBAR_GUTTER_WIDTH, 15)).toBe(0);
	});

	it('adds nothing while the table does not overflow vertically', () => {
		expect(getScrollbarGutterPadding(0, 0)).toBe(0);
		expect(getScrollbarGutterPadding(0, SCROLLBAR_GUTTER_WIDTH)).toBe(0);
	});
});
