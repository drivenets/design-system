import { describe, expect, it } from 'vitest';
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

describe('DsTable Virtualized', () => {
	it('should show empty state when no data', async () => {
		await page.render(
			<DsTable columns={columns} data={[]} virtualized emptyState={<div>No matching records found</div>} />,
		);

		await expect.element(page.getByText(/no matching records found/i)).toBeVisible();
	});

	it('should persist selection through scroll', async () => {
		await page.render(
			<div style={{ height: '400px' }}>
				<DsTable columns={columns} data={largeData} virtualized selectable />
			</div>,
		);

		const firstRowCheckbox = page.getByRole('checkbox').nth(1);

		await firstRowCheckbox.click();
		await expect.element(firstRowCheckbox).toBeChecked();

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

		await expect.element(page.getByRole('checkbox').nth(1), { timeout: 2000 }).toBeChecked();
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
