import { describe, expect, it } from 'vitest';

const readRootToken = (name: string) =>
	getComputedStyle(document.documentElement).getPropertyValue(`--z-index-${name}`).trim();

describe('z-index tier tokens', () => {
	it.each([
		['popover', '1000'],
		['drawer', '1200'],
		['modal', '1200'],
		['dropdown', '9999'],
		['tooltip', '9999'],
	])('defines --z-index-%s at %s on :root', (name, value) => {
		expect(readRootToken(name)).toBe(value);
	});
});
