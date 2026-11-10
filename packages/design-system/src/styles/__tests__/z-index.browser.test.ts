import { afterEach, describe, expect, it } from 'vitest';

const readRootToken = (name: string) =>
	getComputedStyle(document.documentElement).getPropertyValue(`--z-index-${name}`).trim();

describe('z-index tokens', () => {
	afterEach(() => {
		document.documentElement.style.removeProperty('--z-index-1000');
	});

	it.each(['1000', '1200', '9999'])('defines the --z-index-%s value token', (value) => {
		expect(readRootToken(value)).toBe(value);
	});

	it.each([
		['popover', '1000'],
		['drawer', '1200'],
		['modal', '1200'],
		['dropdown', '9999'],
		['tooltip', '9999'],
	])('defines the --z-index-%s tier at %s', (name, value) => {
		expect(readRootToken(name)).toBe(value);
	});

	it('resolves a tier through its value token', () => {
		document.documentElement.style.setProperty('--z-index-1000', '1100');

		expect(readRootToken('popover')).toBe('1100');
	});
});
