import { useState } from 'react';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsCheckbox } from '../../ds-checkbox';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';

type SizedRow = { id: string; firstName: string; lastName: string };

const getDataRows = () => page.getByRole('row').all().slice(1);

const getHeaderCell = (columnId: string): HTMLElement => {
	const cell = document.querySelector(`thead th[data-column-id="${columnId}"]`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected header cell for column "${columnId}"`);
	}
	return cell;
};

describe('DsTable - Columns', () => {
	it('should render custom cell content', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} />);

		expect(getDataRows()).toHaveLength(15);

		await expect.element(page.getByText('75%')).toBeVisible();
		await expect.element(page.getByText('single').first()).toBeVisible();
	});

	it('should toggle column visibility', async () => {
		function ColumnHidingWrapper() {
			const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
				age: true,
				visits: true,
				status: true,
				progress: true,
			});

			const toggleColumn = (columnId: string) => {
				setColumnVisibility((prev) => ({ ...prev, [columnId]: !prev[columnId] }));
			};

			return (
				<div>
					<div data-testid="column-toggles">
						<DsCheckbox
							label="Age"
							checked={columnVisibility.age}
							onCheckedChange={() => toggleColumn('age')}
						/>
						<DsCheckbox
							label="Visits"
							checked={columnVisibility.visits}
							onCheckedChange={() => toggleColumn('visits')}
						/>
						<DsCheckbox
							label="Status"
							checked={columnVisibility.status}
							onCheckedChange={() => toggleColumn('status')}
						/>
						<DsCheckbox
							label="Profile Progress"
							checked={columnVisibility.progress}
							onCheckedChange={() => toggleColumn('progress')}
						/>
					</div>
					<DsTable
						columns={columns}
						data={defaultData}
						columnVisibility={columnVisibility}
						onColumnVisibilityChange={setColumnVisibility}
					/>
				</div>
			);
		}

		await page.render(<ColumnHidingWrapper />);

		const headerRow = page.getByRole('row').first();

		await expect.element(headerRow.getByText('Age')).toBeVisible();
		await expect.element(headerRow.getByText('Visits')).toBeVisible();

		await page.getByRole('checkbox', { name: /^age$/i }).click();

		await expect.element(headerRow.getByText('Age')).not.toBeInTheDocument();
		await expect.element(headerRow.getByText('First Name')).toBeVisible();
		await expect.element(headerRow.getByText('Visits')).toBeVisible();

		await page.getByRole('checkbox', { name: /^age$/i }).click();

		await expect.element(headerRow.getByText('Age')).toBeVisible();
	});

	it('keeps an authored 150px column fixed while an unsized sibling fills', async () => {
		const sizedColumns: ColumnDef<SizedRow>[] = [
			{ accessorKey: 'firstName', header: 'First Name', size: 150 },
			{ accessorKey: 'lastName', header: 'Last Name' },
		];

		await page.render(
			<div style={{ width: 600 }}>
				<DsTable columns={sizedColumns} data={[{ id: '1', firstName: 'Ada', lastName: 'Lovelace' }]} />
			</div>,
		);

		const firstName = getHeaderCell('firstName');
		const lastName = getHeaderCell('lastName');

		expect(firstName.style.flex.startsWith('1')).toBe(false);
		expect(Math.round(firstName.getBoundingClientRect().width)).toBe(150);
		expect(lastName.style.flex.startsWith('1')).toBe(true);
		expect(lastName.getBoundingClientRect().width).toBeGreaterThan(150);
	});
});
