import { beforeEach, describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTagFilter from '../ds-tag-filter';
import type { TagFilterItem } from '../ds-tag-filter.types';

/**
 * Regression coverage for AR-95666: the collapsed row re-measured itself forever
 * because tags were budgeted at their delete-button-collapsed width, so hovering a
 * tag grew it past the budget, wrapped the row, and retriggered the ResizeObserver.
 */

// The "Small Size" story data, which is what the bug report reproduces against.
const smallItems: TagFilterItem[] = [
	{ id: '1', label: 'Status: Active', slotProps: { tag: { size: 'small' } } },
	{ id: '2', label: 'Running: 100 to 10,000', slotProps: { tag: { size: 'small' } } },
	{ id: '3', label: 'Completed: 20,000 to 100,000', slotProps: { tag: { size: 'small' } } },
	{ id: '4', label: 'Executor: Category 1, Layer 1', slotProps: { tag: { size: 'small' } } },
	{ id: '5', label: 'Version: 000.0001-3', slotProps: { tag: { size: 'small' } } },
	{ id: '6', label: 'Last editor: Kevin Levin', slotProps: { tag: { size: 'small' } } },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Longer than DsTag's 200ms --transition-duration, so a width animation has finished. */
const TRANSITION_SETTLE_MS = 320;

const renderAt = async (width: number) => {
	const { container } = await page.render(
		<div style={{ width: `${String(width)}px` }}>
			<DsTagFilter items={smallItems} onClearAll={vi.fn()} onItemDelete={vi.fn()} />
		</div>,
	);
	await sleep(TRANSITION_SETTLE_MS);

	const area = container.querySelector('[aria-live="polite"]') as HTMLElement;
	return {
		area,
		height: () => Math.round(area.getBoundingClientRect().height),
		visibleTags: () => [...area.children] as HTMLElement[],
		areaWidth: () => area.getBoundingClientRect().width,
	};
};

/** Natural widths of the off-screen measurement clones, plus the row gap. */
const readMeasurements = () => {
	// React keeps earlier portals mounted until cleanup, so take the newest one.
	const clones = document.querySelectorAll('[data-measure-tag]');
	const box = clones[clones.length - 1]?.parentElement;
	if (!box) {
		throw new Error('measurement container not found');
	}
	const widths = [...box.querySelectorAll('[data-measure-tag]')].map(
		(tag) => tag.getBoundingClientRect().width,
	);
	const gap = parseFloat(getComputedStyle(box).gap) || 8;
	return { widths, gap };
};

describe('DsTagFilter overflow stability', () => {
	beforeEach(async () => {
		await page.viewport(1280, 900);
	});

	it('keeps the collapsed row at one line while the pointer rests on a tag', async () => {
		// Calibrate against a wide row so the measurement clones are laid out naturally.
		const wide = await renderAt(1240);
		const { widths, gap } = readMeasurements();
		// Distance between the wrapper width and the width the tags actually get.
		const chrome = 1240 - wide.areaWidth();

		const failures: string[] = [];
		const renderedCounts: number[] = [];

		// Park the row exactly on each overflow boundary: the width at which N tags fit
		// with almost no slack is where an unbudgeted hover growth has to wrap.
		for (let n = 2; n < widths.length; n++) {
			const needed = widths.slice(0, n).reduce((sum, w) => sum + w, 0) + gap * (n - 1);
			const width = Math.ceil(needed + chrome + 2);

			const row = await renderAt(width);
			const baseline = row.height();
			renderedCounts.push(row.visibleTags().length);

			for (const tag of row.visibleTags()) {
				await page.elementLocator(tag).hover();
				await sleep(TRANSITION_SETTLE_MS);

				if (row.height() !== baseline) {
					failures.push(
						`n=${String(n)} w=${String(width)}: hovering "${tag.textContent}" changed the row height ${String(baseline)}px -> ${String(row.height())}px`,
					);
					break;
				}
			}
		}

		// Guards against the assertions above passing vacuously on an empty row.
		expect(Math.min(...renderedCounts)).toBeGreaterThan(0);
		expect(failures).toEqual([]);
	}, 60000);
});
