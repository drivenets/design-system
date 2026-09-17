import { describe, expect, it } from 'vitest';
import { isHoverPointer, toPlacement } from './ds-popover.utils';

describe('toPlacement', () => {
	it('joins side and alignment', () => {
		expect(toPlacement('right', 'start')).toBe('right-start');
		expect(toPlacement('top', 'end')).toBe('top-end');
	});

	it('drops the suffix for the implicit center alignment', () => {
		expect(toPlacement('bottom', 'center')).toBe('bottom');
		expect(toPlacement('left', 'center')).toBe('left');
	});
});

describe('isHoverPointer', () => {
	it('accepts pointers that can hover', () => {
		expect(isHoverPointer('mouse')).toBe(true);
		expect(isHoverPointer('pen')).toBe(true);
	});

	it('rejects touch, so a tap stays a plain click', () => {
		expect(isHoverPointer('touch')).toBe(false);
	});
});
