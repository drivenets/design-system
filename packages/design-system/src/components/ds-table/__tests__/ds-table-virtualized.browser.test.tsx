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

const CHECKBOX_ROOT_LABEL = 'label[data-scope="checkbox"][data-part="root"]';

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

		const firstRowRoot = document.querySelector<HTMLLabelElement>(
			`tbody tr:nth-child(1) ${CHECKBOX_ROOT_LABEL}`,
		);
		if (!firstRowRoot) {
			throw new Error('Expected first visible body row checkbox root');
		}

		const firstRowCheckboxInput = page.getByRole('checkbox').nth(1);

		await page.elementLocator(firstRowRoot).click();
		await expect.element(firstRowCheckboxInput).toBeChecked();

		const scrollContainer = document.querySelector('[class*="virtualizedContainer"] tbody');

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

		const scrollContainer = document.querySelector('[class*="virtualizedContainer"] tbody');

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
