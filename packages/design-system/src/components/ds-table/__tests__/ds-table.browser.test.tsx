import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';

const getDataRows = () => page.getByRole('row').all().slice(1);

const wideColumns = columns.map((column) => ({ ...column, size: 400 }));

const getScrollContainer = (): HTMLElement => {
	const container = document.querySelector('table')?.parentElement;
	if (!container) {
		throw new Error('Expected the table scroll container');
	}
	return container;
};

const getHorizontalCenter = (element: Element): number => {
	const { left, width } = element.getBoundingClientRect();
	return left + width / 2;
};

describe('DsTable', () => {
	it('should render all rows and column headers, and handle row click', async () => {
		const onRowClick = vi.fn();

		await page.render(<DsTable columns={columns} data={defaultData} onRowClick={onRowClick} />);

		expect(getDataRows()).toHaveLength(15);

		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Last Name')).toBeVisible();
		await expect.element(page.getByText('Age')).toBeVisible();
		await expect.element(page.getByText('Visits')).toBeVisible();
		await expect.element(page.getByText('Status')).toBeVisible();
		await expect.element(page.getByText('Profile Progress')).toBeVisible();

		await page.getByRole('row').nth(1).click();

		expect(onRowClick).toHaveBeenCalled();
	});

	it('should sort data when clicking a column header', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} />);

		const firstNameHeader = page.getByText('First Name');

		await firstNameHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Daniel');

		await firstNameHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Tanner');
	});

	it('should show empty state when no data is provided', async () => {
		await page.render(
			<DsTable columns={columns} data={[]} emptyState={<div>No matching records found</div>} />,
		);

		await expect.element(page.getByText('No matching records found')).toBeVisible();
	});

	it('infers no-data empty state when data is empty and emptyState is omitted', async () => {
		await page.render(<DsTable columns={columns} data={[]} />);

		await expect.element(page.getByRole('status')).toHaveTextContent('No data to display.');
		await expect.element(page.getByText('First Name')).toBeVisible();
	});

	it('infers no-matches empty state when filters hide every row', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				columnFilters={[{ id: 'firstName', value: '__no-match__' }]}
			/>,
		);

		await expect.element(page.getByRole('status')).toHaveTextContent('No matching records found.');
		await expect.element(page.getByText('Tanner')).not.toBeInTheDocument();
	});

	it('keeps the empty state centered in the visible area while scrolling horizontally', async () => {
		await page.render(
			<div style={{ width: 600, height: 400 }}>
				<DsTable columns={wideColumns} data={[]} />
			</div>,
		);

		const emptyState = page.getByRole('status');
		await expect.element(emptyState).toBeVisible();

		const container = getScrollContainer();
		expect(container.scrollWidth).toBeGreaterThan(container.clientWidth);
		expect(getHorizontalCenter(emptyState.element())).toBeCloseTo(getHorizontalCenter(container), 0);

		container.scrollLeft = 900;

		await expect
			.poll(() => getHorizontalCenter(emptyState.element()))
			.toBeCloseTo(getHorizontalCenter(container), 0);
		await expect.element(emptyState).toBeInViewport();
	});

	it('keeps the empty state centered when columns fit the container', async () => {
		await page.render(
			<div style={{ width: 600, height: 400 }}>
				<DsTable columns={columns} data={[]} />
			</div>,
		);

		const emptyState = page.getByRole('status');
		await expect.element(emptyState).toBeVisible();

		const container = getScrollContainer();
		expect(container.scrollWidth).toBe(container.clientWidth);
		expect(getHorizontalCenter(emptyState.element())).toBeCloseTo(getHorizontalCenter(container), 0);
	});

	it('lets an empty table shrink with its columns inside a fit-content parent', async () => {
		const renderInFitContent = (tableColumns: typeof columns) => (
			<div style={{ width: 'fit-content', maxWidth: 600, height: 400 }}>
				<DsTable columns={tableColumns} data={[]} />
			</div>
		);
		const { rerender } = await page.render(renderInFitContent(wideColumns));
		await expect.element(page.getByRole('status')).toBeVisible();

		const container = getScrollContainer();
		const overflowingWidth = container.clientWidth;

		await rerender(renderInFitContent(columns.slice(0, 2).map((column) => ({ ...column, size: 100 }))));

		await expect.poll(() => getScrollContainer().clientWidth).toBeLessThan(overflowingWidth);
	});

	it('does not show empty state while loading with empty data', async () => {
		await page.render(<DsTable columns={columns} data={[]} loading />);

		await expect.element(page.getByRole('status')).not.toBeInTheDocument();
		await expect.element(page.getByText('First Name')).toBeVisible();
	});
});
