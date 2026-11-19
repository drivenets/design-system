import { expect } from 'vitest';

type ZIndexTier = 'popover' | 'drawer' | 'modal' | 'dropdown' | 'tooltip';

const Z_INDEX_TIERS: readonly ZIndexTier[] = Object.freeze([
	'popover',
	'drawer',
	'modal',
	'dropdown',
	'tooltip',
]);

/** Overrides a `--z-index-*` tier token on `:root`, as an app would. Undo it with `resetZIndexTiers` in `afterEach`. */
export const setZIndexTier = (tier: ZIndexTier, value: number) => {
	document.documentElement.style.setProperty(`--z-index-${tier}`, String(value));
};

export const resetZIndexTiers = () => {
	for (const tier of Z_INDEX_TIERS) {
		document.documentElement.style.removeProperty(`--z-index-${tier}`);
	}
};

export const readZIndex = (element: Element) => Number(getComputedStyle(element).zIndex);

/** Waits for a node that has no accessible role, such as a backdrop or a lazily mounted portal. */
export const findElement = async (selector: string) => {
	await expect.poll(() => document.querySelector(selector)).toBeInstanceOf(Element);

	const element = document.querySelector(selector);

	if (!element) {
		throw new Error(`Expected ${selector} in the document`);
	}

	return element;
};
