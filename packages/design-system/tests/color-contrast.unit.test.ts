import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

// WCAG 2.1 SC 1.4.3 — normal-size text. No rounding: axe-core fails 4.497:1.
const WCAG_AA_NORMAL_TEXT = 4.5;

const rootScss = fs.readFileSync('./src/styles/_root.scss', 'utf-8');

const tokens = new Map(
	[...rootScss.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
);

const resolveHex = (token: string): string => {
	const value = tokens.get(token);

	if (!value) {
		throw new Error(`${token} is not defined in _root.scss`);
	}

	const reference = /^var\((--[\w-]+)\)$/.exec(value);

	return reference ? resolveHex(reference[1]) : value;
};

const channelLuminance = (channel: number) => {
	const srgb = channel / 255;

	return srgb <= 0.040_45 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
};

const relativeLuminance = (hex: string) => {
	const [r, g, b] = [1, 3, 5].map((start) => channelLuminance(parseInt(hex.slice(start, start + 2), 16)));

	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrastRatio = (foreground: string, background: string) => {
	const [lighter, darker] = [relativeLuminance(foreground), relativeLuminance(background)].toSorted((a, b) => b - a);

	return (lighter + 0.05) / (darker + 0.05);
};

// Backgrounds action text is placed on, in products and in DS components
// (tertiary DsButtonV3 on the page, primary-subtle hover/active, pressed DsChip).
const actionTextBackgrounds = [
	'--background',
	'--background-page',
	'--background-secondary',
	'--background-secondary-hover',
	'--background-primary-subtle-hover',
	'--background-primary-subtle-active',
	'--background-action-tertiary-hover',
	'--background-info',
];

const pairings = ['--font-action', '--font-action-hover'].flatMap((foreground) =>
	actionTextBackgrounds.map((background) => [foreground, background] as const),
);

describe('Action text contrast (WCAG AA, normal text)', () => {
	it.each(pairings)('%s on %s meets 4.5:1', (foreground, background) => {
		const ratio = contrastRatio(resolveHex(foreground), resolveHex(background));

		expect(ratio).toBeGreaterThanOrEqual(WCAG_AA_NORMAL_TEXT);
	});
});
