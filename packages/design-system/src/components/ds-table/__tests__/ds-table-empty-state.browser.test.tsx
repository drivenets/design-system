import { describe, expect, it } from 'vitest';
import { page, type Locator } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';

const wideColumns = columns.map((column) => ({ ...column, size: 400 }));
const narrowColumns = columns.slice(0, 2).map((column) => ({ ...column, size: 100 }));

const getScrollContainer = (table: Locator = page.getByRole('table')): HTMLElement => {
	const container = table.element().parentElement;
	if (!container) {
		throw new Error('Expected the table scroll container');
	}
	return container;
};

const getHorizontalCenter = (element: Element): number => {
	const { left, width } = element.getBoundingClientRect();
	return left + width / 2;
};

const getMaxScrollLeft = (container: HTMLElement): number => container.scrollWidth - container.clientWidth;

describe.each([{ virtualized: false }, { virtualized: true }])(
	'DsTable empty state (virtualized: $virtualized)',
	({ virtualized }) => {
		it('stays centered in the visible area while scrolling horizontally', async () => {
			await page.render(
				<div style={{ width: 600, height: 400 }}>
					<DsTable columns={wideColumns} data={[]} virtualized={virtualized} />
				</div>,
			);

			const emptyState = page.getByRole('status');
			await expect.element(emptyState).toBeVisible();

			const container = getScrollContainer();
			expect(getMaxScrollLeft(container)).toBeGreaterThan(0);
			expect(getHorizontalCenter(emptyState.element())).toBeCloseTo(getHorizontalCenter(container), 0);

			container.scrollLeft = getMaxScrollLeft(container);

			await expect
				.poll(() => getHorizontalCenter(emptyState.element()))
				.toBeCloseTo(getHorizontalCenter(container), 0);
			await expect.element(emptyState).toBeInViewport();
		});

		it('stays centered in the visible area while scrolling horizontally in RTL', async () => {
			await page.render(
				<div dir="rtl" style={{ width: 600, height: 400 }}>
					<DsTable columns={wideColumns} data={[]} virtualized={virtualized} />
				</div>,
			);

			const emptyState = page.getByRole('status');
			await expect.element(emptyState).toBeVisible();

			const container = getScrollContainer();
			container.scrollLeft = -getMaxScrollLeft(container);

			await expect
				.poll(() => getHorizontalCenter(emptyState.element()))
				.toBeCloseTo(getHorizontalCenter(container), 0);
			await expect.element(emptyState).toBeInViewport();
		});

		it('lets an empty table shrink with its columns inside a fit-content parent', async () => {
			const renderInFitContent = (tableColumns: typeof columns) => (
				<div style={{ width: 'fit-content', maxWidth: 600, height: 400 }}>
					<DsTable columns={tableColumns} data={[]} virtualized={virtualized} />
				</div>
			);
			const { rerender } = await page.render(renderInFitContent(wideColumns));
			await expect.element(page.getByRole('status')).toBeVisible();

			const overflowingWidth = getScrollContainer().clientWidth;

			await rerender(renderInFitContent(narrowColumns));

			await expect.poll(() => getScrollContainer().clientWidth).toBeLessThan(overflowingWidth);
		});

		it('keeps populated rows aligned with the header when an expanded row holds an empty table', async () => {
			await page.render(
				<div style={{ width: 600, height: 600 }}>
					<DsTable
						columns={wideColumns}
						data={defaultData.slice(0, 3)}
						virtualized={virtualized}
						expandable
						renderExpandedRow={() => <DsTable columns={columns} data={[]} virtualized={virtualized} />}
					/>
				</div>,
			);

			await page.getByRole('button', { name: 'chevron_right' }).first().click();
			await expect.element(page.getByRole('status')).toBeInTheDocument();

			const outerTable = page.getByRole('table').first();
			const container = getScrollContainer(outerTable);
			container.scrollLeft = getMaxScrollLeft(container);

			const [headerRow, firstDataRow] = outerTable.getByRole('row').elements();
			if (!headerRow || !firstDataRow) {
				throw new Error('Expected header and data rows in the outer table');
			}

			await expect
				.poll(() => firstDataRow.getBoundingClientRect().left)
				.toBeCloseTo(headerRow.getBoundingClientRect().left, 0);
		});
	},
);
