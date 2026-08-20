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
