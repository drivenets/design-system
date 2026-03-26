import { useMemo, useState } from 'react';
import type { ColumnFiltersState } from '@tanstack/react-table';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData, type Status } from '../stories/common/story-data';

describe('DsTable - Search & Filtering', () => {
	it('should filter rows with global search', async () => {
		function SearchWrapper() {
			const [globalFilter, setGlobalFilter] = useState('');

			const filteredData = useMemo(() => {
				if (!globalFilter) {
					return defaultData;
				}

				const lowercased = globalFilter.toLowerCase();

				return defaultData.filter((row) =>
					Object.values(row).some((value) => String(value).toLowerCase().includes(lowercased)),
				);
			}, [globalFilter]);

			return (
				<div>
					<input
						type="text"
						value={globalFilter}
						onChange={(e) => setGlobalFilter(e.target.value)}
						placeholder="Search all columns..."
					/>
					<DsTable columns={columns} data={filteredData} />
				</div>
			);
		}

		await page.render(<SearchWrapper />);

		const dataRows = page.getByRole('row').all().slice(1);

		expect(dataRows).toHaveLength(15);

		await page.getByPlaceholder('Search all columns...').fill('Tanner');

		const filteredDataRows = page.getByRole('row').all().slice(1);

		expect(filteredDataRows).toHaveLength(1);
		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Tanner');

		await page.getByPlaceholder('Search all columns...').clear();

		const restoredRows = page.getByRole('row').all().slice(1);

		expect(restoredRows).toHaveLength(15);
	});

	it('should filter rows by column value via tab buttons', async () => {
		function TabFilterWrapper() {
			const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
			const [activeTab, setActiveTab] = useState<Status | 'all'>('all');

			const handleTabClick = (value: string) => {
				const typedValue = value as Status | 'all';
				setActiveTab(typedValue);

				if (typedValue === 'all') {
					setColumnFilters([]);
				} else {
					setColumnFilters([{ id: 'status', value: typedValue }]);
				}
			};

			return (
				<div>
					<div>
						<button type="button" onClick={() => handleTabClick('all')} data-active={activeTab === 'all'}>
							All People
						</button>
						<button
							type="button"
							onClick={() => handleTabClick('single')}
							data-active={activeTab === 'single'}
						>
							Single
						</button>
					</div>
					<DsTable
						columns={columns}
						data={defaultData}
						columnFilters={columnFilters}
						onColumnFiltersChange={setColumnFilters}
					/>
				</div>
			);
		}

		await page.render(<TabFilterWrapper />);

		const allRows = page.getByRole('row').all();

		expect(allRows.slice(1)).toHaveLength(15);

		await page.getByRole('button', { name: 'Single' }).click();

		const singleRows = page.getByRole('row').all();

		expect(singleRows.slice(1)).toHaveLength(5);

		await page.getByRole('button', { name: 'All People' }).click();

		const restoredRows = page.getByRole('row').all();

		expect(restoredRows.slice(1)).toHaveLength(15);
	});
});
