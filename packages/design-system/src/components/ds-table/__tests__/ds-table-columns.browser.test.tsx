import { useState } from 'react';
import type { ColumnVisibilityState } from '@tanstack/react-table';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsCheckbox } from '../../ds-checkbox';
import { DsModal } from '../../ds-modal';
import DsTable from '../ds-table';
import type { DsDataTableProps } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';
import { COLUMN_DISPLAY_COLUMN_ID } from '../utils/constants';
import { createDsColumnHelper, type DsColumnDef } from '../ds-table-features';

type SizedRow = { id: string; firstName: string; lastName: string };

// The Vitest UI's pane splitter overlaps the left edge of the test iframe, so a
// real click on a control mounted at the iframe origin lands on the splitter
// instead. Offsetting the mount keeps the toggle clicks inside the iframe.
const HARNESS_OFFSET_PX = 16;

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

	it('renders columns built with createDsColumnHelper', async () => {
		const columnHelper = createDsColumnHelper<SizedRow>();
		const helperColumns = columnHelper.columns([
			columnHelper.accessor('firstName', { header: 'First name' }),
			columnHelper.accessor('lastName', {
				header: 'Last name',
				cell: (info) => info.getValue().toUpperCase(),
			}),
		]);

		await page.render(
			<DsTable columns={helperColumns} data={[{ id: '1', firstName: 'Jane', lastName: 'Doe' }]} />,
		);

		expect(getHeaderCell('firstName')).toHaveTextContent('First name');
		await expect.element(page.getByRole('cell', { name: 'DOE' })).toBeVisible();
	});

	it('should toggle column visibility', async () => {
		function ColumnHidingWrapper() {
			const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({
				age: true,
				visits: true,
				status: true,
				progress: true,
			});

			const toggleColumn = (columnId: string) => {
				setColumnVisibility((prev) => ({ ...prev, [columnId]: !prev[columnId] }));
			};

			return (
				<div style={{ padding: HARNESS_OFFSET_PX }}>
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
		const sizedColumns: DsColumnDef<SizedRow>[] = [
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

	describe('column display', () => {
		const groupedColumns: DsColumnDef<Person>[] = [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{ accessorKey: 'firstName', header: 'First Name' },
					{ accessorKey: 'lastName', header: 'Last Name' },
					{ accessorKey: 'age', header: 'Age' },
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{ accessorKey: 'visits', header: 'Visits' },
					{ accessorKey: 'status', header: 'Status' },
					{ accessorKey: 'progress', header: 'Profile Progress' },
				],
			},
		];

		const columnHeader = (name: string) =>
			page.getByRole('rowgroup').first().getByText(name, { exact: true });
		const columnCheckbox = (name: string) => page.getByRole('checkbox', { name, exact: true });

		const getCheckboxState = (name: string) =>
			columnCheckbox(name)
				.element()
				.closest('[data-scope="checkbox"][data-part="root"]')
				?.getAttribute('data-state');

		const getCenterX = (element: Element) => {
			const { x, width } = element.getBoundingClientRect();

			return x + width / 2;
		};

		// Clicks can reach a popup painted underneath a modal, so stacking is asserted
		// by hit-testing the element's center instead.
		const isTopmostAtCenter = (element: Element | null) => {
			if (!element) {
				return false;
			}

			const { x, y, width, height } = element.getBoundingClientRect();
			const topElement = document.elementFromPoint(x + width / 2, y + height / 2);

			return topElement !== null && element.contains(topElement);
		};

		const openColumnDisplay = async (name = 'Columns') => {
			await page.getByRole('button', { name }).click();
			await expect.element(page.getByRole('dialog', { name })).toBeVisible();
		};

		const renderTable = (props: Partial<DsDataTableProps<Person, unknown>> = {}) =>
			page.render(
				<div style={{ padding: HARNESS_OFFSET_PX }}>
					<DsTable columns={columns} data={defaultData} columnDisplay {...props} />
				</div>,
			);

		it('renders the Columns button only when enabled', async () => {
			const { rerender } = await page.render(<DsTable columns={columns} data={defaultData} />);

			await expect.element(page.getByRole('button', { name: 'Columns' })).not.toBeInTheDocument();

			await rerender(<DsTable columns={columns} data={defaultData} columnDisplay />);

			await expect.element(page.getByRole('button', { name: 'Columns' })).toBeVisible();
		});

		it('hides and shows a column through controlled visibility', async () => {
			const onColumnVisibilityChange = vi.fn();

			function ControlledTable() {
				const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({});

				return (
					<div style={{ padding: HARNESS_OFFSET_PX }}>
						<DsTable
							columns={columns}
							data={defaultData}
							columnDisplay
							columnVisibility={columnVisibility}
							onColumnVisibilityChange={(visibility) => {
								onColumnVisibilityChange(visibility);
								setColumnVisibility(visibility);
							}}
						/>
					</div>
				);
			}

			await page.render(<ControlledTable />);
			await openColumnDisplay();

			await expect.element(columnCheckbox('Age')).toBeChecked();
			await columnCheckbox('Age').click();

			await expect.element(columnHeader('Age')).not.toBeInTheDocument();
			await expect.element(columnCheckbox('Age')).not.toBeChecked();
			expect(onColumnVisibilityChange).toHaveBeenLastCalledWith({ age: false });

			await columnCheckbox('Age').click();

			await expect.element(columnHeader('Age')).toBeVisible();
		});

		it('hides a column when only onColumnVisibilityChange is passed', async () => {
			const onColumnVisibilityChange = vi.fn();

			await renderTable({ onColumnVisibilityChange });
			await openColumnDisplay();
			await columnCheckbox('Age').click();

			await expect.element(columnHeader('Age')).not.toBeInTheDocument();
			expect(onColumnVisibilityChange).toHaveBeenLastCalledWith({ age: false });
		});

		it('filters the list from the search field and clears it on close', async () => {
			await renderTable({ columns: groupedColumns });
			await openColumnDisplay();

			const search = page.getByPlaceholder('Search');
			await search.fill('pro');

			await expect.element(columnCheckbox('Activity')).toBeVisible();
			await expect.element(columnCheckbox('Profile Progress')).toBeVisible();
			await expect.element(columnCheckbox('Visits')).not.toBeInTheDocument();
			await expect.element(columnCheckbox('Identity')).not.toBeInTheDocument();

			await search.fill('IDENT');

			await expect.element(columnCheckbox('Age')).toBeVisible();
			await expect.element(columnCheckbox('Activity')).not.toBeInTheDocument();

			await userEvent.keyboard('{Escape}');
			await openColumnDisplay();

			await expect.element(page.getByPlaceholder('Search')).toHaveValue('');
			await expect.element(columnCheckbox('Visits')).toBeVisible();
		});

		it('toggles every column from All columns', async () => {
			await renderTable();
			await openColumnDisplay();

			const allColumns = columnCheckbox('All columns');
			await expect.element(allColumns).toBeChecked();
			await allColumns.click();

			await expect.element(columnHeader('First Name')).not.toBeInTheDocument();
			await expect.element(columnHeader('Profile Progress')).not.toBeInTheDocument();
			await expect.element(allColumns).not.toBeChecked();

			await allColumns.click();

			await expect.element(columnHeader('First Name')).toBeVisible();
			await expect.element(columnHeader('Profile Progress')).toBeVisible();
		});

		it('lists columns that cannot be hidden as locked', async () => {
			await renderTable({
				columns: [
					{ accessorKey: 'firstName', header: 'First Name', enableHiding: false },
					{ accessorKey: 'lastName', header: 'Last Name' },
				],
			});
			await openColumnDisplay();

			await expect.element(columnCheckbox('First Name')).toBeChecked();
			await expect.element(columnCheckbox('First Name')).toBeDisabled();

			await columnCheckbox('First Name').click({ force: true });

			await expect.element(columnCheckbox('First Name')).toBeChecked();
			await expect.element(columnHeader('First Name')).toBeVisible();

			await columnCheckbox('All columns').click();

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
			await expect.element(columnHeader('First Name')).toBeVisible();
		});

		it('toggles a whole group and shows a partial state', async () => {
			await renderTable({ columns: groupedColumns });
			await openColumnDisplay();
			await columnCheckbox('Age').click();

			await expect.poll(() => getCheckboxState('Identity')).toBe('indeterminate');
			await expect.poll(() => getCheckboxState('All columns')).toBe('indeterminate');

			await columnCheckbox('Identity').click();

			await expect.element(columnHeader('Age')).toBeVisible();
			await expect.element(columnCheckbox('Identity')).toBeChecked();

			await columnCheckbox('Identity').click();

			await expect.element(columnHeader('First Name')).not.toBeInTheDocument();
			await expect.element(columnHeader('Age')).not.toBeInTheDocument();
			await expect.element(columnHeader('Visits')).toBeVisible();
		});

		it('places the button in the group headers row and stays open when the groups disappear', async () => {
			await renderTable({ columns: groupedColumns });

			const headerRows = page.getByRole('rowgroup').first().getByRole('row');
			await expect.element(headerRows.first().getByRole('button', { name: 'Columns' })).toBeVisible();
			await expect
				.element(headerRows.nth(1).getByRole('button', { name: 'Columns' }))
				.not.toBeInTheDocument();

			await openColumnDisplay();
			await columnCheckbox('All columns').click();

			await expect.element(columnHeader('Identity')).not.toBeInTheDocument();
			await expect.element(page.getByRole('dialog', { name: 'Columns' })).toBeVisible();

			await columnCheckbox('All columns').click();

			await expect.element(columnHeader('Identity')).toBeVisible();
		});

		it('keeps columns hidden by a collapsed group checked', async () => {
			await renderTable({
				columns: [
					{
						id: 'identity',
						header: 'Identity',
						meta: { group: { collapsible: true, defaultCollapsed: true } },
						columns: [
							{ accessorKey: 'firstName', header: 'First Name', meta: { keepVisibleWhenCollapsed: true } },
							{ accessorKey: 'lastName', header: 'Last Name' },
							{ accessorKey: 'age', header: 'Age' },
						],
					},
					{ accessorKey: 'visits', header: 'Visits' },
				],
			});

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();

			await openColumnDisplay();

			await expect.element(columnCheckbox('Last Name')).toBeChecked();
			await columnCheckbox('Last Name').click();
			await expect.element(columnCheckbox('Last Name')).not.toBeChecked();

			await userEvent.keyboard('{Escape}');
			await page.getByRole('button', { name: 'Expand column group' }).click();

			await expect.element(columnHeader('Age')).toBeVisible();
			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
		});

		describe.each([
			{ resizableColumns: false, virtualized: false },
			{ resizableColumns: false, virtualized: true },
			{ resizableColumns: true, virtualized: false },
			{ resizableColumns: true, virtualized: true },
		])('with row actions (resizableColumns=$resizableColumns, virtualized=$virtualized)', (tableMode) => {
			it.each([
				{
					lastAction: 'More actions',
					secondaryRowActions: [{ icon: 'info' as const, label: 'Details', onClick: () => undefined }],
				},
				{ lastAction: 'Open', secondaryRowActions: undefined },
			])(
				'centers the button over the last action of every row ($lastAction)',
				async ({ lastAction, secondaryRowActions }) => {
					await page.render(
						<div style={{ padding: HARNESS_OFFSET_PX, height: 400 }}>
							<DsTable
								columns={columns}
								data={defaultData}
								columnDisplay
								{...tableMode}
								primaryRowActions={[
									{ icon: 'edit', label: 'Edit', onClick: () => undefined },
									{ icon: 'open_in_new', label: 'Open', onClick: () => undefined },
								]}
								secondaryRowActions={secondaryRowActions}
							/>
						</div>,
					);

					const lastActions = page.getByRole('button', { name: lastAction, exact: true });
					await expect.element(lastActions.first()).toBeVisible();

					const getMaxOffset = () => {
						const buttonCenter = getCenterX(page.getByRole('button', { name: 'Columns' }).element());
						const offsets = lastActions
							.elements()
							.map((action) => Math.abs(getCenterX(action) - buttonCenter));

						return Math.max(...offsets);
					};

					await expect.poll(getMaxOffset).toBeLessThanOrEqual(1);
					expect(document.querySelector(`thead th[data-column-id="${COLUMN_DISPLAY_COLUMN_ID}"]`)).toBeNull();
				},
			);
		});

		it('keeps the button in the group headers row above the row actions', async () => {
			await renderTable({
				columns: groupedColumns,
				primaryRowActions: [{ icon: 'edit', label: 'Edit', onClick: () => undefined }],
			});

			const headerRows = page.getByRole('rowgroup').first().getByRole('row');
			await expect.element(headerRows.first().getByRole('button', { name: 'Columns' })).toBeVisible();

			const button = page.getByRole('button', { name: 'Columns' }).element();
			const editButton = page.getByRole('button', { name: 'Edit', exact: true }).first().element();

			expect(Math.abs(getCenterX(button) - getCenterX(editButton))).toBeLessThanOrEqual(1);
		});

		it('works inside a DsModal', async () => {
			await page.render(
				<DsModal open onOpenChange={() => undefined}>
					<DsModal.Body>
						<DsTable columns={columns} data={defaultData} columnDisplay />
					</DsModal.Body>
				</DsModal>,
			);
			await openColumnDisplay();

			expect(isTopmostAtCenter(columnCheckbox('Age').element().closest('label'))).toBe(true);

			await columnCheckbox('Age').click();

			await expect.element(columnHeader('Age')).not.toBeInTheDocument();
			await expect.element(columnHeader('Visits')).toBeVisible();
		});

		it('leaves the column display cells empty while loading', async () => {
			await page.render(<DsTable columns={columns} data={defaultData} columnDisplay loading />);

			await expect.element(page.getByRole('button', { name: 'Columns' })).toBeVisible();

			const leafHeaderCells = [...(document.querySelector('thead tr:last-child')?.children ?? [])];
			const columnDisplayIndex = leafHeaderCells.findIndex(
				(cell) => cell.getAttribute('data-column-id') === COLUMN_DISPLAY_COLUMN_ID,
			);
			const columnDisplayCells = [...document.querySelectorAll('tbody tr')].map(
				(row) => row.children[columnDisplayIndex],
			);

			expect(columnDisplayIndex).toBeGreaterThan(-1);
			expect(columnDisplayCells.length).toBeGreaterThan(0);
			expect(columnDisplayCells.some((cell) => cell?.querySelector('[aria-hidden="true"]'))).toBe(false);
		});

		it('uses the locale strings', async () => {
			await renderTable({
				locale: { columns: 'Choose columns', searchColumns: 'Find a column', allColumns: 'Every column' },
			});
			await openColumnDisplay('Choose columns');

			await expect.element(page.getByPlaceholder('Find a column')).toBeVisible();
			await expect.element(columnCheckbox('Every column')).toBeChecked();
		});
	});
});
