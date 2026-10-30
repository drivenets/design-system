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

const largeData = generateTestData(200);

const CHECKBOX_ROOT_LABEL = 'label[data-scope="checkbox"][data-part="root"]';

describe('DsTable Virtualized', () => {
	it('should show empty state when no data', async () => {
		await page.render(
			<DsTable columns={columns} data={[]} virtualized emptyState={<div>No matching records found</div>} />,
		);

		await expect.element(page.getByText(/no matching records found/i)).toBeVisible();
	});

	it('infers no-data empty state when data is empty and emptyState is omitted', async () => {
		await page.render(<DsTable columns={columns} data={[]} virtualized />);

		await expect.element(page.getByRole('status')).toHaveTextContent('No data to display.');
	});

	it('infers no-matches empty state when filters hide every row', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={largeData}
				virtualized
				columnFilters={[{ id: 'firstName', value: '__no-match__' }]}
			/>,
		);

		await expect.element(page.getByRole('status')).toHaveTextContent('No matching records found.');
	});

	it('lays out rows that arrive after the first render one below another', async () => {
		const { rerender } = await page.render(
			<div style={{ height: '400px' }}>
				<DsTable columns={columns} data={[]} virtualized />
			</div>,
		);

		await rerender(
			<div style={{ height: '400px' }}>
				<DsTable columns={columns} data={largeData} virtualized />
			</div>,
		);

		await expect.element(page.getByText('First2', { exact: true })).toBeInTheDocument();
		await expect
			.poll(() => {
				const [first, second] = document.querySelectorAll('tbody tr');
				return (second?.getBoundingClientRect().top ?? 0) - (first?.getBoundingClientRect().top ?? 0);
			})
			.toBeGreaterThan(0);
	});

	it('should sort rows, show the sort indicator, and call onSortingChange on header click', async () => {
		const onSortingChange = vi.fn();

		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable columns={columns} data={largeData} virtualized onSortingChange={onSortingChange} />
			</div>,
		);

		const visitsHeader = page.getByText('Visits');
		const firstBodyRow = page.getByRole('row').nth(1);

		await visitsHeader.click();

		await expect.element(firstBodyRow.getByText('First200', { exact: true })).toBeInTheDocument();
		await expect.element(page.getByText('arrow_drop_down')).toBeVisible();
		expect(onSortingChange).toHaveBeenLastCalledWith([{ id: 'visits', desc: true }]);

		await visitsHeader.click();

		await expect.element(firstBodyRow.getByText('First1', { exact: true })).toBeInTheDocument();
		await expect.element(page.getByText('arrow_drop_up')).toBeVisible();
		await expect.element(page.getByText('arrow_drop_down')).not.toBeInTheDocument();
		expect(onSortingChange).toHaveBeenLastCalledWith([{ id: 'visits', desc: false }]);
		expect(onSortingChange).toHaveBeenCalledTimes(2);
	});

	it('should persist selection through scroll', async () => {
		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable columns={columns} data={largeData} virtualized selectable />
			</div>,
		);

		const firstRowRoot = document.querySelector<HTMLLabelElement>(
			`tbody tr:nth-child(1) ${CHECKBOX_ROOT_LABEL}`,
		);
		if (!firstRowRoot) {
			throw new Error('Expected first visible body row checkbox root');
		}

		const firstRowCheckboxInput = page.getByRole('checkbox').nth(1);

		await page.elementLocator(firstRowRoot).click();
		await expect.element(firstRowCheckboxInput).toBeChecked();

		const scrollContainer = document.querySelector('[class*="virtualizedContainer"]');

		if (scrollContainer) {
			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		}

		await expect
			.poll(
				() => {
					const checked = document.querySelectorAll('input[type="checkbox"]:checked');
					return checked.length;
				},
				{ timeout: 2000 },
			)
			.toBe(0);

		if (scrollContainer) {
			scrollContainer.scrollTop = 0;
		}

		await expect.element(firstRowCheckboxInput, { timeout: 2000 }).toBeChecked();
	});

	it('should support expansion with virtualization', async () => {
		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable
					columns={columns}
					data={largeData}
					virtualized
					expandable
					renderExpandedRow={(row) => <div>Expanded: {row.firstName}</div>}
				/>
			</div>,
		);

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		await expect.element(page.getByText('Expanded: First1')).toBeVisible();

		const scrollContainer = document.querySelector('[class*="virtualizedContainer"]');

		if (scrollContainer) {
			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		}

		await expect.element(page.getByText('Expanded: First1'), { timeout: 2000 }).not.toBeInTheDocument();

		if (scrollContainer) {
			scrollContainer.scrollTop = 0;
		}

		await expect.element(page.getByText('Expanded: First1'), { timeout: 2000 }).toBeVisible();
	});
});
