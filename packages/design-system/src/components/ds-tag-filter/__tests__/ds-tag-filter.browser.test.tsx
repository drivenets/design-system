import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTagFilter from '../ds-tag-filter';
import type { TagFilterItem } from '../ds-tag-filter.types';

const fewFilters: TagFilterItem[] = [
	{ id: '1', label: 'Status: Active' },
	{ id: '2', label: 'Version: 1.0.0' },
	{ id: '3', label: 'Author: John Doe' },
];

const manyFilters: TagFilterItem[] = [
	{ id: '1', label: 'Status: Active' },
	{ id: '2', label: 'Running: From 100 to 10,000' },
	{ id: '3', label: 'Completed from 20,000 to 100,000' },
	{ id: '4', label: 'Executor: Category 1, Layer 1 transporter' },
	{ id: '5', label: 'Executor: Category 2, Layer 11 transporter' },
	{ id: '6', label: 'Executor: Category 2, Layer 12 transporter' },
	{ id: '7', label: 'Executor: Category 2, Layer 13 transporter' },
	{ id: '8', label: 'Version: 000.0001-3' },
	{ id: '9', label: 'Version: 000.0001-4' },
	{ id: '10', label: 'Version: 000.0001-5' },
	{ id: '11', label: 'Version: 000.0001-6' },
	{ id: '12', label: 'Last editor: Kevin Levin' },
	{ id: '13', label: 'Last editor: Emery Dance' },
];

const smallFilters: TagFilterItem[] = [
	{ id: '1', label: 'Status: Active', slotProps: { tag: { size: 'small' } } },
	{ id: '2', label: 'Running: 100 to 10,000', slotProps: { tag: { size: 'small' } } },
	{ id: '3', label: 'Completed: 20,000 to 100,000', slotProps: { tag: { size: 'small' } } },
	{ id: '4', label: 'Executor: Category 1, Layer 1', slotProps: { tag: { size: 'small' } } },
	{ id: '5', label: 'Version: 000.0001-3', slotProps: { tag: { size: 'small' } } },
	{ id: '6', label: 'Last editor: Kevin Levin', slotProps: { tag: { size: 'small' } } },
];

// Constrains the row so `manyFilters` overflows the first line deterministically.
const Narrow = ({ children }: { children: React.ReactNode }) => (
	<div style={{ width: '320px' }}>{children}</div>
);

describe('DsTagFilter', () => {
	it('renders nothing when there are no items', async () => {
		await page.render(<DsTagFilter items={[]} />);

		expect(document.querySelector('[aria-live="polite"]')).toBeNull();
		expect(page.getByRole('button').query()).toBeNull();
	});

	it('never renders the deprecated locale.label', async () => {
		await page.render(
			<DsTagFilter items={fewFilters} locale={{ label: 'Filtered by:' }} onItemSelect={vi.fn()} />,
		);

		await expect.element(page.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		expect(page.getByText('Filtered by:').query()).toBeNull();
	});

	it('wraps the tags in an aria-live="polite" region', async () => {
		await page.render(<DsTagFilter items={fewFilters} onItemSelect={vi.fn()} />);

		const tag = page.getByRole('button', { name: 'Status: Active' });
		await expect.element(tag).toBeInTheDocument();
		expect(tag.element().closest('[aria-live="polite"]')).not.toBeNull();
	});

	it('calls onItemSelect with the clicked item', async () => {
		const onItemSelect = vi.fn();
		await page.render(<DsTagFilter items={fewFilters} onItemSelect={onItemSelect} />);

		await page.getByRole('button', { name: 'Status: Active' }).click();

		expect(onItemSelect).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
	});

	it('reflects a pre-selected item via aria-pressed', async () => {
		await page.render(
			<DsTagFilter items={[{ id: '1', label: 'Status: Active', selected: true }]} onItemSelect={vi.fn()} />,
		);

		await expect
			.element(page.getByRole('button', { name: 'Status: Active' }))
			.toHaveAttribute('aria-pressed', 'true');
	});

	it('calls onItemDelete with the removed item', async () => {
		const onItemDelete = vi.fn();
		await page.render(<DsTagFilter items={fewFilters} onItemDelete={onItemDelete} />);

		const tag = page.getByRole('button', { name: 'Status: Active' });
		await tag.hover();

		const deleteButton = tag.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		await deleteButton.click();

		expect(onItemDelete).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
	});

	it('does not render delete buttons when onItemDelete is omitted', async () => {
		await page.render(<DsTagFilter items={fewFilters} onItemSelect={vi.fn()} />);

		await expect.element(page.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		expect(page.getByRole('button', { name: 'Delete tag' }).query()).toBeNull();
	});

	it('renders "Clear all filters" only when onClearAll is provided', async () => {
		const { rerender } = await page.render(<DsTagFilter items={fewFilters} />);
		expect(page.getByRole('button', { name: /Clear all filters/ }).query()).toBeNull();

		const onClearAll = vi.fn();
		await rerender(<DsTagFilter items={fewFilters} onClearAll={onClearAll} />);

		await page.getByRole('button', { name: /Clear all filters/ }).click();
		expect(onClearAll).toHaveBeenCalledOnce();
	});

	it('expands to reveal every tag and keeps a stable hidden count', async () => {
		const onExpand = vi.fn();
		await page.render(
			<Narrow>
				<DsTagFilter items={manyFilters} onExpand={onExpand} onItemSelect={vi.fn()} />
			</Narrow>,
		);

		const showMore = page.getByRole('button', { name: /Show more \(\d+\)/ });
		await expect.element(showMore).toBeInTheDocument();
		await expect.element(showMore).toHaveAttribute('aria-expanded', 'false');

		const collapsedText = showMore.element().textContent;
		const hidden = /Show more \((\d+)\)/.exec(collapsedText)?.[1];
		expect(hidden).toBeDefined();
		expect(collapsedText.trim().endsWith('keyboard_arrow_down')).toBe(true);

		await showMore.click();
		expect(onExpand).toHaveBeenCalledWith(true);

		const showLess = page.getByRole('button', { name: new RegExp(`Show less \\(${hidden ?? ''}\\)`) });
		await expect.element(showLess).toBeInTheDocument();
		await expect.element(showLess).toHaveAttribute('aria-expanded', 'true');
		expect(showLess.element().textContent.trim().endsWith('keyboard_arrow_up')).toBe(true);

		// All tags — including the last one hidden while collapsed — are now visible.
		await expect.element(page.getByRole('button', { name: 'Last editor: Emery Dance' })).toBeInTheDocument();

		await showLess.click();
		expect(onExpand).toHaveBeenCalledWith(false);
	});
});

describe('DsTagFilter layout stability', () => {
	// Longer than DsTag's 200ms transitions, so any hover-driven resize has run.
	const SETTLE_MS = 300;
	const SAMPLE_MS = 400;

	const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

	const renderSmallFilters = async (width: number) => {
		const { container, unmount } = await page.render(
			<div style={{ width: `${String(width)}px` }}>
				<DsTagFilter items={smallFilters} onClearAll={vi.fn()} onItemDelete={vi.fn()} />
			</div>,
		);
		await wait(SETTLE_MS);

		const area = container.querySelector<HTMLElement>('[aria-live="polite"]');
		if (!area) {
			throw new Error('tags area not rendered');
		}
		return { area, unmount };
	};

	const distinctLayoutsPerFrame = async (area: HTMLElement) => {
		const layouts = new Set<string>();
		const end = performance.now() + SAMPLE_MS;
		while (performance.now() < end) {
			await nextFrame();
			const tagWidths = [...area.children].map((tag) => tag.getBoundingClientRect().width.toFixed(1));
			layouts.add(`${String(area.children.length)}|${String(area.offsetHeight)}|${tagWidths.join(',')}`);
		}
		return [...layouts];
	};

	it('keeps the layout when the pointer rests on a tag at widths right on a tag boundary', async () => {
		// The measurement row is portaled to body, so the viewport must fit every tag.
		await page.viewport(1280, 900);

		const wide = await renderSmallFilters(2000);
		const tagWidths = [...wide.area.children].map((tag) => tag.getBoundingClientRect().width);
		const gap = parseFloat(getComputedStyle(wide.area).columnGap);
		await wide.unmount();

		const overflowing = await renderSmallFilters(600);
		const nonTagWidth = 600 - overflowing.area.getBoundingClientRect().width;
		await overflowing.unmount();

		for (let count = 1; count < smallFilters.length; count++) {
			const needed = tagWidths.slice(0, count).reduce((sum, width) => sum + width, 0) + gap * (count - 1);
			const { area, unmount } = await renderSmallFilters(Math.ceil(needed + nonTagWidth) + 2);

			const atRest = await distinctLayoutsPerFrame(area);
			expect(atRest).toHaveLength(1);
			expect(area.children).toHaveLength(count);

			for (const tag of [...area.children]) {
				const locator = page.elementLocator(tag);
				await locator.hover();
				await wait(SETTLE_MS);
				expect(await distinctLayoutsPerFrame(area)).toEqual(atRest);
				await locator.unhover();
			}

			await unmount();
		}
	}, 60000);
});
