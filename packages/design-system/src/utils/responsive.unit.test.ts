import { describe, expect, it } from 'vitest';

import { BREAKPOINT_LG, isResponsiveValue, resolveResponsiveValue } from './responsive';

describe('BREAKPOINT_LG', () => {
	it('should be sourced from the SCSS variable and equal 1440', () => {
		expect(BREAKPOINT_LG).toBe(1440);
	});
});

describe('isResponsiveValue', () => {
	it('should return true for a responsive object', () => {
		expect(isResponsiveValue({ lg: 'large', md: 'small' })).toBe(true);
	});

	it('should return false for a string', () => {
		expect(isResponsiveValue('large')).toBe(false);
	});

	it('should return false for null', () => {
		expect(isResponsiveValue(null as unknown as string)).toBe(false);
	});

	it('should return true for an object with only lg', () => {
		expect(isResponsiveValue({ lg: 'large' })).toBe(true);
	});

	it('should return true for an object with only md', () => {
		expect(isResponsiveValue({ md: 'small' })).toBe(true);
	});
});

describe('resolveResponsiveValue', () => {
	it('should return static value unchanged for both breakpoints', () => {
		expect(resolveResponsiveValue('large', 'lg')).toBe('large');
		expect(resolveResponsiveValue('large', 'md')).toBe('large');
	});

	it('should resolve lg value from responsive object', () => {
		expect(resolveResponsiveValue({ lg: 'large', md: 'small' }, 'lg')).toBe('large');
	});

	it('should resolve md value from responsive object', () => {
		expect(resolveResponsiveValue({ lg: 'large', md: 'small' }, 'md')).toBe('small');
	});

	it('should fall back to lg when md is not specified', () => {
		expect(resolveResponsiveValue({ lg: 'large' }, 'md')).toBe('large');
	});

	it('should fall back to md when lg is not specified', () => {
		expect(resolveResponsiveValue({ md: 'small' }, 'lg')).toBe('small');
	});
});
