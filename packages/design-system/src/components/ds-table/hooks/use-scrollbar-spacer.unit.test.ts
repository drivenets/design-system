import { describe, expect, it } from 'vitest';
import { SCROLLBAR_SPACER_WIDTH } from '../utils/constants';
import { getBodyScrollbarCompensation } from './use-scrollbar-spacer';

describe('getBodyScrollbarCompensation', () => {
	it('reserves the full spacer when the scrollbar occupies no layout (overlay)', () => {
		expect(getBodyScrollbarCompensation(0, SCROLLBAR_SPACER_WIDTH)).toBe(SCROLLBAR_SPACER_WIDTH);
	});

	it('adds nothing when a classic scrollbar already occupies the spacer width', () => {
		expect(getBodyScrollbarCompensation(SCROLLBAR_SPACER_WIDTH, SCROLLBAR_SPACER_WIDTH)).toBe(0);
	});

	it('fills only the gap when a thinner scrollbar occupies part of the spacer', () => {
		expect(getBodyScrollbarCompensation(8, SCROLLBAR_SPACER_WIDTH)).toBe(2);
	});

	it('does not shrink the body when occupancy is wider than the spacer', () => {
		expect(getBodyScrollbarCompensation(15, SCROLLBAR_SPACER_WIDTH)).toBe(0);
	});

	it('adds nothing when the spacer is collapsed', () => {
		expect(getBodyScrollbarCompensation(0, 0)).toBe(0);
		expect(getBodyScrollbarCompensation(SCROLLBAR_SPACER_WIDTH, 0)).toBe(0);
	});
});
