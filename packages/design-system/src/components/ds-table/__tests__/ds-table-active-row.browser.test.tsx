import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { DsDrawer } from '../../ds-drawer';
import { columns, defaultData, type Person } from '../stories/common/story-data';

describe('DsTable Active Row with Drawer', () => {
	it('should open and close drawer on row click', async () => {
		function Wrapper() {
			const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
			const activeRowId = selectedPerson?.id;
			const isDrawerOpen = !!activeRowId;

			const handleRowClick = (person: Person) => {
				setSelectedPerson(activeRowId === person.id ? null : person);
			};

			return (
				<div>
					<DsTable
						columns={columns}
						data={defaultData.slice(0, 10)}
						activeRowId={activeRowId}
						onRowClick={handleRowClick}
					/>
					<DsDrawer
						open={isDrawerOpen}
						onOpenChange={(open) => {
							if (!open) {
								setSelectedPerson(null);
							}
						}}
						columns={4}
						position="end"
					>
						{selectedPerson && (
							<div>
								<h2>Person Details</h2>
								<button type="button" onClick={() => setSelectedPerson(null)} aria-label="Close drawer">
									Close
								</button>
								<p>
									{selectedPerson.firstName} {selectedPerson.lastName}
								</p>
							</div>
						)}
					</DsDrawer>
				</div>
			);
		}

		await page.render(<Wrapper />);

		await page.getByRole('row').nth(1).click();
		await expect.element(page.getByRole('heading', { name: 'Person Details' })).toBeVisible();
		await expect.element(page.getByText('Tanner Linsley')).toBeVisible();

		await page.getByRole('button', { name: /close drawer/i }).click();
		await expect.element(page.getByRole('heading', { name: 'Person Details' })).not.toBeInTheDocument();

		await page.getByRole('row').nth(2).click();
		await expect.element(page.getByRole('heading', { name: 'Person Details' })).toBeVisible();
		await expect.element(page.getByText('Kevin Fine')).toBeVisible();

		await page.getByRole('row').nth(2).click();
		await expect.element(page.getByRole('heading', { name: 'Person Details' })).not.toBeInTheDocument();
	});
});
