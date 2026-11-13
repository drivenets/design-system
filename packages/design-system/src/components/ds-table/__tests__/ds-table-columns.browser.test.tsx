import { useState } from 'react';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsCheckbox } from '../../ds-checkbox';
import { DsModal } from '../../ds-modal';
import DsTable from '../ds-table';
import type { DsDataTableProps } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';
import { COLUMN_DISPLAY_COLUMN_ID } from '../utils/constants';

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

	describe('fitting the container', () => {
		const LONG_TEXT =
			'A long value that is much wider than its share of a narrow table and has to be truncated';
		const longRows: SizedRow[] = [{ id: '1', firstName: LONG_TEXT, lastName: LONG_TEXT }];

		const getScrollContainer = (): HTMLElement => {
			const container = document.querySelector('table')?.parentElement;
			if (!container) {
				throw new Error('Expected the table scroll container');
			}
			return container;
		};

		it('fits unsized columns with long content into the container instead of scrolling', async () => {
			const columns: ColumnDef<SizedRow>[] = [
				{ accessorKey: 'firstName', header: 'First Name' },
				{ accessorKey: 'lastName', header: 'Last Name' },
			];

			await page.render(
				<div style={{ width: 600 }}>
					<DsTable columns={columns} data={longRows} />
				</div>,
			);

			const container = getScrollContainer();

			expect(container.scrollWidth).toBe(container.clientWidth);
		});

		it('fits unsized columns in a column group into the container', async () => {
			const columns: ColumnDef<SizedRow>[] = [
				{
					id: 'name',
					header: 'Name',
					columns: [
						{ accessorKey: 'firstName', header: 'First Name' },
						{ accessorKey: 'lastName', header: 'Last Name' },
					],
				},
			];

			await page.render(
				<div style={{ width: 600 }}>
					<DsTable columns={columns} data={longRows} />
				</div>,
			);

			const container = getScrollContainer();

			expect(container.scrollWidth).toBe(container.clientWidth);
		});

		it('scrolls horizontally when authored column sizes exceed the container', async () => {
			const columns: ColumnDef<SizedRow>[] = [
				{ accessorKey: 'firstName', header: 'First Name', size: 400 },
				{ accessorKey: 'lastName', header: 'Last Name', size: 400 },
			];

			await page.render(
				<div style={{ width: 600 }}>
					<DsTable columns={columns} data={longRows} />
				</div>,
			);

			const container = getScrollContainer();

			expect(container.scrollWidth).toBeGreaterThan(container.clientWidth);
		});
	});

	describe('column display', () => {
		const groupedColumns: ColumnDef<Person>[] = [
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
			columnCheckbox(name).element().closest('[data-state]')?.getAttribute('data-state');

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

		const columnsDialog = () => page.getByRole('dialog', { name: 'Columns' });
		const searchField = () => columnsDialog().getByRole('textbox', { name: 'Search' });
		const clearButton = () => columnsDialog().getByRole('button', { name: 'Clear search' });

		const treeRows = () =>
			Array.from(
				document.querySelectorAll<HTMLElement>(
					'[role="dialog"] :is([data-part="item"], [data-part="branch-control"])',
				),
			);
		const shownRows = () => treeRows().map((row) => row.dataset.value);

		const rowOf = (id: string) => {
			const row = treeRows().find((element) => element.dataset.value === id);

			if (!row) {
				throw new Error(`Expected a column display row "${id}"`);
			}

			return row;
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
				const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

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

		it('lists every column with a search field and no search applied', async () => {
			await renderTable({ columns: groupedColumns });
			await openColumnDisplay();

			await expect.element(searchField()).toHaveValue('');
			expect(shownRows()).toEqual([
				'identity',
				'firstName',
				'lastName',
				'age',
				'activity',
				'visits',
				'status',
				'progress',
			]);
			expect(document.querySelectorAll('[role="dialog"] [role="tree"] [aria-disabled="true"]')).toHaveLength(
				0,
			);
			expect(document.querySelectorAll('[role="dialog"] mark')).toHaveLength(0);
			await expect.element(clearButton()).not.toBeInTheDocument();
			await expect.element(columnCheckbox('Identity')).toBeEnabled();
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

			expect(isTopmostAtCenter(columnCheckbox('Age').element())).toBe(true);

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
				locale: { columns: 'Choose columns', allColumns: 'Every column' },
			});
			await openColumnDisplay('Choose columns');

			await expect.element(page.getByRole('checkbox', { name: 'Every column', exact: true })).toBeChecked();
		});

		describe('search', () => {
			const nestedColumns: ColumnDef<Person>[] = [
				{
					id: 'identity',
					header: 'Identity',
					columns: [
						{ accessorKey: 'firstName', header: 'First Name' },
						{ accessorKey: 'lastName', header: 'Last Name' },
					],
				},
				{
					id: 'activity',
					header: 'Activity',
					columns: [
						{
							id: 'engagement',
							header: 'Engagement',
							columns: [
								{ accessorKey: 'visits', header: 'Visits' },
								{ accessorKey: 'progress', header: 'Profile Progress' },
							],
						},
						{ accessorKey: 'status', header: 'Status' },
					],
				},
				{ accessorKey: 'age', header: 'Age' },
			];

			const search = (text: string) => searchField().fill(text);

			const marksIn = (id: string) =>
				Array.from(rowOf(id).querySelectorAll('mark')).map((mark) => mark.textContent);

			const labelOf = (id: string) =>
				rowOf(id).querySelector(':is([data-part="branch-text"], [data-part="item-text"])');

			const labelColor = (id: string) => {
				const label = labelOf(id);

				return label ? getComputedStyle(label).color : null;
			};

			const isDisabledRow = (id: string) =>
				rowOf(id).closest('[role="treeitem"]')?.getAttribute('aria-disabled') === 'true';

			const pressOnClearButton = async (key: string) => {
				(clearButton().element() as HTMLElement).focus();
				await userEvent.keyboard(key);
			};

			it('shows a search field with a search icon above the column tree', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();

				const input = searchField().element();
				const icon = input.parentElement?.firstElementChild;

				await expect.element(searchField()).toHaveAttribute('placeholder', 'Search');
				expect(icon?.textContent).toBe('search');
				expect(icon?.compareDocumentPosition(input)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
				expect(input.getBoundingClientRect().bottom).toBeLessThanOrEqual(
					columnsDialog().getByRole('tree').element().getBoundingClientRect().top,
				);
			});

			it('narrows the tree to labels containing the text, ignoring case and surrounding whitespace', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await search('  NAME ');

				await expect.poll(shownRows).toEqual(['identity', 'firstName', 'lastName']);
			});

			it('shows only the matching columns of a matching group, and none when no column matches', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await search('i');

				await expect.poll(shownRows).toEqual(['identity', 'firstName', 'activity', 'visits', 'progress']);

				await search('activity');

				await expect.poll(shownRows).toEqual(['activity']);
			});

			it('keeps matching rows interactive', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await search('i');

				await expect.element(columnCheckbox('Identity')).toBeEnabled();
				await expect.element(columnCheckbox('Visits')).toBeEnabled();
				expect(isDisabledRow('identity')).toBe(false);
				expect(isDisabledRow('visits')).toBe(false);
				await expect.element(page.getByRole('button', { name: 'Sticky Identity' })).toBeInTheDocument();

				await columnCheckbox('Visits').click();

				await expect.element(columnHeader('Visits')).not.toBeInTheDocument();
				await expect.element(columnCheckbox('Visits')).not.toBeChecked();

				rowOf('visits').focus();
				await userEvent.keyboard(' ');

				await expect.element(columnHeader('Visits')).toBeVisible();
			});

			it('shows a reference row at every level above a match', async () => {
				await renderTable({ columns: nestedColumns });
				await openColumnDisplay();
				await search('progress');

				await expect.poll(shownRows).toEqual(['activity', 'engagement', 'progress']);
				expect(['activity', 'engagement', 'progress'].map(isDisabledRow)).toEqual([true, true, false]);
			});

			it('shows a reference row greyed and read-only, with its true state and no sticky toggle', async () => {
				await renderTable({ columns: nestedColumns });
				await openColumnDisplay();
				await columnCheckbox('Status').click();
				await search('progress');

				const activity = columnCheckbox('Activity');
				await expect.element(activity).toBeDisabled();
				await expect.poll(() => getCheckboxState('Activity')).toBe('indeterminate');
				await expect.poll(() => getCheckboxState('Engagement')).toBe('checked');
				await expect.element(page.getByRole('button', { name: 'Sticky Activity' })).not.toBeInTheDocument();
				expect(labelColor('activity')).not.toBe(labelColor('progress'));

				await activity.click({ force: true });
				await columnsDialog().getByText('Activity', { exact: true }).click({ force: true });

				await expect.element(columnHeader('Visits')).toBeVisible();
				await expect.element(columnHeader('Status')).not.toBeInTheDocument();
				await expect.poll(() => getCheckboxState('Activity')).toBe('indeterminate');
			});

			it('keeps reference rows out of keyboard focus', async () => {
				await renderTable({ columns: nestedColumns });
				await openColumnDisplay();
				await search('progress');

				const progress = rowOf('progress');
				await expect.poll(() => progress.tabIndex).toBe(0);
				expect(rowOf('activity').tabIndex).toBe(-1);
				expect(rowOf('engagement').tabIndex).toBe(-1);

				progress.focus();
				await userEvent.keyboard('{ArrowUp}');
				await userEvent.keyboard('{ArrowLeft}');
				await userEvent.keyboard('e');

				expect(document.activeElement).toBe(progress);
			});

			it.each([
				{ focused: 'activity', becomes: 'a reference row' },
				{ focused: 'age', becomes: 'hidden' },
			])(
				'moves the tab stop to the first match when the focused row becomes $becomes',
				async ({ focused }) => {
					await renderTable({ columns: nestedColumns });
					await openColumnDisplay();

					rowOf(focused).focus();
					await expect.poll(() => rowOf(focused).tabIndex).toBe(0);

					await search('progress');

					await expect.poll(() => rowOf('progress').tabIndex).toBe(0);
					expect(treeRows().filter((row) => row.tabIndex === 0)).toEqual([rowOf('progress')]);
				},
			);

			it('highlights every occurrence of the text in matching rows only', async () => {
				await renderTable({ columns: nestedColumns });
				await openColumnDisplay();
				await search(' pro ');

				await expect.poll(() => marksIn('progress')).toEqual(['Pro', 'Pro']);
				expect(labelOf('progress')?.textContent).toBe('Profile Progress');
				expect(marksIn('activity')).toEqual([]);
				expect(marksIn('engagement')).toEqual([]);
			});

			it('keeps a matching group partial and toggles all of its columns', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await columnCheckbox('Age').click();
				await search('identity');

				await expect.poll(shownRows).toEqual(['identity']);
				await expect.poll(() => getCheckboxState('Identity')).toBe('indeterminate');

				await columnCheckbox('Identity').click();

				await expect.element(columnHeader('Age')).toBeVisible();
				await expect.poll(() => getCheckboxState('Identity')).toBe('checked');

				await columnCheckbox('Identity').click();

				await expect.element(columnHeader('First Name')).not.toBeInTheDocument();
				await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
				await expect.element(columnHeader('Age')).not.toBeInTheDocument();
				await expect.element(columnHeader('Visits')).toBeVisible();
			});

			it('keeps All columns reflecting and toggling every column', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await columnCheckbox('Visits').click();
				await search('name');

				await expect.poll(() => getCheckboxState('All columns')).toBe('indeterminate');

				await columnCheckbox('All columns').click();

				await expect.element(columnHeader('Visits')).toBeVisible();
				await expect.poll(() => getCheckboxState('All columns')).toBe('checked');

				await columnCheckbox('All columns').click();

				await expect.element(columnHeader('First Name')).not.toBeInTheDocument();
				await expect.element(columnHeader('Status')).not.toBeInTheDocument();
				await expect.element(columnHeader('Profile Progress')).not.toBeInTheDocument();
			});

			it.each([
				{ method: 'a click', press: () => clearButton().click() },
				{ method: 'Enter', press: () => pressOnClearButton('{Enter}') },
				{ method: 'Space', press: () => pressOnClearButton(' ') },
			])('clears the search with $method and keeps focus in the field', async ({ press }) => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();

				await expect.element(clearButton()).not.toBeInTheDocument();

				await search('name');

				await expect.element(clearButton()).toBeVisible();

				await press();

				await expect.element(searchField()).toHaveValue('');
				await expect.element(searchField()).toHaveFocus();
				await expect.element(clearButton()).not.toBeInTheDocument();
				expect(shownRows()).toHaveLength(8);
			});

			it('replaces the tree with a polite message when nothing matches', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();

				const message = columnsDialog().getByRole('status');
				await expect.element(message).toBeEmptyDOMElement();

				await search('zzz');

				await expect.element(message).toHaveTextContent('No matches');
				await expect.element(columnsDialog().getByRole('tree')).not.toBeInTheDocument();
				await expect.element(searchField()).toBeVisible();
				await expect.element(columnCheckbox('All columns')).toBeVisible();

				await search('age');

				await expect.element(message).toBeEmptyDOMElement();
				await expect.poll(shownRows).toEqual(['identity', 'age']);
			});

			it('closes the popup on Escape and starts the next open with an empty search', async () => {
				await renderTable({ columns: groupedColumns });
				await openColumnDisplay();
				await search('name');

				await expect.element(searchField()).toHaveFocus();
				await userEvent.keyboard('{Escape}');

				await expect.element(columnsDialog()).not.toBeInTheDocument();

				await openColumnDisplay();

				await expect.element(searchField()).toHaveValue('');
				expect(shownRows()).toHaveLength(8);
			});

			it('uses the locale strings', async () => {
				await renderTable({
					locale: { searchColumns: 'Find', clearSearch: 'Reset find', noMatchingColumns: 'Nothing found' },
				});
				await openColumnDisplay();

				const field = columnsDialog().getByRole('textbox', { name: 'Find' });
				await expect.element(field).toHaveAttribute('placeholder', 'Find');
				await field.fill('zzz');

				await expect.element(columnsDialog().getByRole('button', { name: 'Reset find' })).toBeVisible();
				await expect.element(columnsDialog().getByRole('status')).toHaveTextContent('Nothing found');
			});
		});
	});
});
