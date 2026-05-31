import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, type Person } from '../stories/common/story-data';

const statuses: Person['status'][] = ['single', 'relationship', 'complicated'];

function generateTestData(count: number): Person[] {
	return Array.from({ length: count }, (_, i) => ({
		id: String(i + 1),
		firstName: `First${String(i + 1)}`,
		lastName: `Last${String(i + 1)}`,
		age: 20 + (i % 50),
		visits: i * 10,
		status: statuses[i % statuses.length] ?? 'single',
		progress: i % 100,
	}));
}

const getScrollContainer = (): HTMLElement => {
	const el = document.querySelector<HTMLElement>('[class*="virtualizedContainer"] tbody');
	if (!el) {
		throw new Error('Expected virtualized scroll container');
	}
	return el;
};

describe('DsTable infinite scroll', () => {
	it('calls onLoadMore when scrolled within thresholdPx of bottom', async () => {
		const onLoadMore = vi.fn();
		const tallData = generateTestData(200);

		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable
					columns={columns}
					data={tallData}
					virtualized
					infiniteScroll={{
						hasMore: true,
						isLoadingMore: false,
						onLoadMore,
						thresholdPx: 200,
						autoFill: false,
					}}
				/>
			</div>,
		);

		const container = getScrollContainer();
		container.scrollTop = container.scrollHeight - container.clientHeight - 100;

		await expect.poll(() => onLoadMore.mock.calls.length, { timeout: 2000 }).toBeGreaterThan(0);
	});

	it('does not call onLoadMore when hasMore is false', async () => {
		const onLoadMore = vi.fn();
		const tallData = generateTestData(200);

		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable
					columns={columns}
					data={tallData}
					virtualized
					infiniteScroll={{
						hasMore: false,
						isLoadingMore: false,
						onLoadMore,
						thresholdPx: 200,
						autoFill: false,
					}}
				/>
			</div>,
		);

		const container = getScrollContainer();
		container.scrollTop = container.scrollHeight;

		await new Promise((resolve) => setTimeout(resolve, 200));
		expect(onLoadMore).not.toHaveBeenCalled();
	});

	it('does not call onLoadMore while isLoadingMore is true', async () => {
		const onLoadMore = vi.fn();
		const tallData = generateTestData(200);

		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable
					columns={columns}
					data={tallData}
					virtualized
					infiniteScroll={{
						hasMore: true,
						isLoadingMore: true,
						onLoadMore,
						thresholdPx: 200,
						autoFill: false,
					}}
				/>
			</div>,
		);

		const container = getScrollContainer();
		container.scrollTop = container.scrollHeight;

		await new Promise((resolve) => setTimeout(resolve, 200));
		expect(onLoadMore).not.toHaveBeenCalled();
	});

	it('autoFill triggers onLoadMore on mount when content does not fill the viewport', async () => {
		const onLoadMore = vi.fn();
		const shortData = generateTestData(3);

		await page.render(
			<div style={{ height: '800px' }}>
				<DsTable
					columns={columns}
					data={shortData}
					virtualized
					infiniteScroll={{
						hasMore: true,
						isLoadingMore: false,
						onLoadMore,
						autoFill: true,
					}}
				/>
			</div>,
		);

		await expect.poll(() => onLoadMore.mock.calls.length, { timeout: 2000 }).toBeGreaterThan(0);
	});

	it('autoFill=false does NOT trigger onLoadMore on mount when content is short', async () => {
		const onLoadMore = vi.fn();
		const shortData = generateTestData(3);

		await page.render(
			<div style={{ height: '800px' }}>
				<DsTable
					columns={columns}
					data={shortData}
					virtualized
					infiniteScroll={{
						hasMore: true,
						isLoadingMore: false,
						onLoadMore,
						autoFill: false,
					}}
				/>
			</div>,
		);

		await new Promise((resolve) => setTimeout(resolve, 200));
		expect(onLoadMore).not.toHaveBeenCalled();
	});
});
