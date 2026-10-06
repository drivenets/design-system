import type { ColumnDef } from '@tanstack/react-table';
import { describe, expect, it, vi } from 'vitest';
import { type Locator, page, userEvent } from 'vitest/browser';
import type { RowAction, SecondaryRowAction } from '../components/ds-table-row-actions-cell';
import DsTable from '../ds-table';
import type { Action } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';
import { ROW_ACTIONS_COLUMN_ID } from '../utils/constants';

const narrowContainerWidth = 720;

const sizingPrimaryActions: RowAction<Person>[] = [
	{ icon: 'edit', label: 'Edit', onClick: vi.fn() },
	{ icon: 'open_in_new', label: 'Open in New Window', onClick: vi.fn() },
];

const sizingSecondaryActions: SecondaryRowAction<Person>[] = [
	{ icon: 'delete_outline', label: 'Delete', onClick: vi.fn() },
];

const fillColumns: ColumnDef<Person>[] = [
	...columns,
	...columns.map((column, idx) => ({ ...column, id: `extra-${String(idx)}` })),
];

const explicitColumns: ColumnDef<Person>[] = columns.map((column, idx) => ({
	...column,
	size: idx === columns.length - 1 ? 60 : 150,
}));

const getDataRows = () =>
	page
		.getByRole('row')
		.all()
		.filter((row) => row.element().closest('tbody'));

const getActionsCellRect = (row: Locator) => row.getByRole('cell').last().element().getBoundingClientRect();

const getActionsHeaderCell = () => {
	const cell = document.querySelector(`thead th[data-column-id="${ROW_ACTIONS_COLUMN_ID}"]`);

	if (!(cell instanceof HTMLElement)) {
		throw new Error('Expected the row actions header cell');
	}

	return cell;
};

// Checks against the content box, so the `ROW_ACTION*` constants drifting from the SCSS fails here
// instead of letting the buttons spill into the cell padding.
const expectActionsInsideActionsCell = (row: Locator) => {
	const cell = row.getByRole('cell').last().element();
	const cellRect = cell.getBoundingClientRect();
	const { paddingLeft, paddingRight } = getComputedStyle(cell);
	const contentLeft = cellRect.left + parseFloat(paddingLeft);
	const contentRight = cellRect.right - parseFloat(paddingRight);
	const buttons = row.getByRole('button').elements();

	expect(buttons.length).toBeGreaterThan(0);

	for (const button of buttons) {
		const buttonRect = button.getBoundingClientRect();

		expect(buttonRect.left).toBeGreaterThanOrEqual(contentLeft - 0.5);
		expect(buttonRect.right).toBeLessThanOrEqual(contentRight + 0.5);
		expect(buttonRect.width).toBeCloseTo(buttonRect.height, 0);
	}
};

const expectActionsColumnAligned = (dataRows: Locator[]) => {
	const headerWidth = getActionsHeaderCell().getBoundingClientRect().width;

	for (const row of dataRows) {
		expect(getActionsCellRect(row).width).toBeCloseTo(headerWidth, 0);
	}
};

const getTableElement = () => {
	const table = document.querySelector('table');

	if (!(table instanceof HTMLElement)) {
		throw new Error('Expected the table element');
	}

	return table;
};

// Menus open with a clip-path animation; items below the first aren't hit-testable until it ends.
const waitForMenuAnimations = () =>
	Promise.all(document.getAnimations().map((animation) => animation.finished));

describe('DsTable - Row Actions', () => {
	it('should reorder rows when dragging the handle past the next row', async () => {
		const onOrderChange = vi.fn();
		const fiveItems = defaultData.slice(0, 5);

		await page.render(
			<DsTable columns={columns} data={fiveItems} reorderable onOrderChange={onOrderChange} />,
		);

		const dataRows = page.getByRole('row').all().slice(1);
		expect(dataRows).toHaveLength(5);

		await expect.element(page.getByText('Order')).toBeVisible();
		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Tanner');
		await expect.element(page.getByRole('row').nth(2)).toMatchTextContent('Kevin');

		const handle = page.getByRole('row').nth(1).getByRole('button').element() as HTMLElement;
		const kevinRow = page.getByRole('row').nth(2).element() as HTMLTableRowElement;

		const handleRect = handle.getBoundingClientRect();
		const kevinRect = kevinRow.getBoundingClientRect();
		const startX = handleRect.left + handleRect.width / 2;
		const startY = handleRect.top + handleRect.height / 2;
		const endY = kevinRect.top + kevinRect.height / 2 + 5;

		// dnd-kit's MouseSensor measures droppable rects on requestAnimationFrame
		// after activation, and the resulting state update schedules another render.
		// Yielding a few frames between events lets collision detection see the row
		// rects before each drag move runs.
		const settle = async () => {
			for (let i = 0; i < 3; i += 1) {
				await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
			}
		};

		handle.dispatchEvent(
			new MouseEvent('mousedown', { clientX: startX, clientY: startY, button: 0, bubbles: true }),
		);
		await settle();

		document.dispatchEvent(new MouseEvent('mousemove', { clientX: startX, clientY: endY, bubbles: true }));
		await settle();

		document.dispatchEvent(new MouseEvent('mouseup', { clientX: startX, clientY: endY, bubbles: true }));

		await vi.waitFor(() => {
			expect(onOrderChange).toHaveBeenCalledTimes(1);
		});

		const newOrder = onOrderChange.mock.calls[0]?.[0] as Person[] | undefined;
		expect(newOrder?.map((p) => p.firstName)).toEqual(['Kevin', 'Tanner', 'John', 'Jane', 'Peter']);

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Kevin');
		await expect.element(page.getByRole('row').nth(2)).toMatchTextContent('Tanner');
	});

	it('should show row action buttons on hover and respect disabled state', async () => {
		const editHandler = vi.fn();
		const openHandler = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={[
					{ icon: 'edit', label: 'Edit', onClick: editHandler },
					{
						icon: 'open_in_new',
						label: 'Open in New Window',
						disabled: (data: Person) => data.firstName === 'Tanner',
						onClick: openHandler,
					},
				]}
			/>,
		);

		const secondDataRow = page.getByRole('row').nth(2);

		await secondDataRow.hover();

		await secondDataRow.getByRole('button', { name: /^edit$/i }).click();
		expect(editHandler).toHaveBeenCalled();

		const firstDataRow = page.getByRole('row').nth(1);

		await firstDataRow.hover();

		await expect
			.element(firstDataRow.getByRole('button', { name: /open in new window/i }))
			.toHaveAttribute('aria-disabled', 'true');
	});

	it('should name the actions column header and the more actions trigger', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={sizingPrimaryActions}
				secondaryRowActions={sizingSecondaryActions}
			/>,
		);

		await expect
			.element(page.getByRole('row', { name: /tanner/i }).getByRole('button', { name: 'More actions' }))
			.toBeVisible();
		expect(getActionsHeaderCell()).toHaveTextContent('Row actions');
	});

	it('should localize the actions column header and the more actions trigger', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={sizingPrimaryActions}
				secondaryRowActions={sizingSecondaryActions}
				locale={{ rowActions: 'Actions', moreRowActions: 'Show more' }}
			/>,
		);

		await expect
			.element(page.getByRole('row', { name: /tanner/i }).getByRole('button', { name: 'Show more' }))
			.toBeVisible();
		expect(getActionsHeaderCell()).toHaveTextContent('Actions');
	});

	it('should hide primary action per-row via hidden callback', async () => {
		const editHandler = vi.fn();
		const openHandler = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={[
					{ icon: 'edit', label: 'Edit', onClick: editHandler },
					{
						icon: 'open_in_new',
						label: 'Open in New Window',
						hidden: (data: Person) => data.firstName === 'Tanner',
						onClick: openHandler,
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		const kevinRow = page.getByRole('row').nth(2);

		await tannerRow.hover();
		await expect
			.element(tannerRow.getByRole('button', { name: /open in new window/i }))
			.not.toBeInTheDocument();
		await expect.element(tannerRow.getByRole('button', { name: /^edit$/i })).toBeVisible();

		await kevinRow.hover();
		await expect.element(kevinRow.getByRole('button', { name: /open in new window/i })).toBeVisible();
	});

	it('should hide secondary action per-row via hidden callback', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				secondaryRowActions={[
					{
						icon: 'delete_outline',
						label: 'Delete',
						hidden: (data: Person) => data.firstName === 'Tanner',
						onClick: vi.fn(),
					},
					{ icon: 'info', label: 'Details', onClick: vi.fn() },
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		const kevinRow = page.getByRole('row').nth(2);

		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /details/i })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: /delete/i })).not.toBeInTheDocument();
		await page.getByRole('menuitem', { name: /details/i }).click();

		await kevinRow.hover();
		await kevinRow.getByRole('button', { name: /more actions/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /delete/i })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: /details/i })).toBeVisible();
	});

	it('should render default cell when all actions are hidden for a row', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={[
					{
						icon: 'edit',
						label: 'Edit',
						hidden: (data: Person) => data.firstName === 'Tanner',
						onClick: vi.fn(),
					},
				]}
				secondaryRowActions={[
					{
						icon: 'delete_outline',
						label: 'Delete',
						hidden: (data: Person) => data.firstName === 'Tanner',
						onClick: vi.fn(),
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		const kevinRow = page.getByRole('row').nth(2);

		await tannerRow.hover();
		await expect.element(tannerRow.getByRole('button', { name: /^edit$/i })).not.toBeInTheDocument();
		await expect.element(tannerRow.getByRole('button', { name: /more actions/i })).not.toBeInTheDocument();

		await kevinRow.hover();
		await expect.element(kevinRow.getByRole('button', { name: /^edit$/i })).toBeVisible();
		await expect.element(kevinRow.getByRole('button', { name: /more actions/i })).toBeVisible();
	});

	it('should show kebab trigger when every secondary action is disabled but none are hidden', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				secondaryRowActions={[
					{
						icon: 'delete_outline',
						label: 'Delete',
						disabled: () => true,
						onClick: vi.fn(),
					},
					{
						icon: 'info',
						label: 'Details',
						disabled: () => true,
						onClick: vi.fn(),
					},
				]}
			/>,
		);

		const firstDataRow = page.getByRole('row').nth(1);
		await firstDataRow.hover();
		await expect.element(firstDataRow.getByRole('button', { name: /more actions/i })).toBeVisible();
	});

	it('should call secondary action onClick with the row data without triggering row click', async () => {
		const onRowClick = vi.fn();
		const onDetails = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				onRowClick={onRowClick}
				secondaryRowActions={[{ icon: 'info', label: 'Details', onClick: onDetails }]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();
		await page.getByRole('menuitem', { name: /details/i }).click();

		expect(onDetails).toHaveBeenCalledExactlyOnceWith(defaultData[0]);
		expect(onRowClick).not.toHaveBeenCalled();
	});

	it('should open a nested submenu and call the child action with the row data', async () => {
		const onRowClick = vi.fn();
		const onCode = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				onRowClick={onRowClick}
				secondaryRowActions={[
					{
						icon: 'code',
						label: 'Review PR',
						children: [
							{ label: 'Visual', onClick: vi.fn() },
							{ label: 'Code', onClick: onCode },
						],
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();
		await page.getByRole('menuitem', { name: /review pr/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /visual/i })).toBeVisible();
		await waitForMenuAnimations();
		await page.getByRole('menuitem', { name: /^code$/i }).click();

		expect(onCode).toHaveBeenCalledExactlyOnceWith(defaultData[0]);
		expect(onRowClick).not.toHaveBeenCalled();
	});

	it('should hide nested actions per-row and omit parents with no visible children', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				secondaryRowActions={[
					{ icon: 'info', label: 'Details', onClick: vi.fn() },
					{
						label: 'Review PR',
						children: [
							{
								label: 'Visual',
								hidden: (data: Person) => data.firstName === 'Tanner',
								onClick: vi.fn(),
							},
						],
					},
					{
						label: 'Filter by workflow',
						children: [
							{ label: 'All versions', onClick: vi.fn() },
							{
								label: 'Custom',
								hidden: (data: Person) => data.firstName === 'Tanner',
								onClick: vi.fn(),
							},
						],
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();

		await expect.element(page.getByRole('menuitem', { name: /details/i })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: /review pr/i })).not.toBeInTheDocument();

		await page.getByRole('menuitem', { name: /filter by workflow/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /all versions/i })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: /custom/i })).not.toBeInTheDocument();
	});

	it('should show the tooltip on a disabled action and not call onClick', async () => {
		const onDelete = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				secondaryRowActions={[
					{
						icon: 'delete_outline',
						label: 'Delete',
						disabled: () => true,
						tooltip: (data: Person) => `No permission to delete ${data.firstName}`,
						onClick: onDelete,
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();

		const deleteItem = page.getByRole('menuitem', { name: /delete/i });
		await expect.element(deleteItem).toHaveAttribute('aria-disabled', 'true');

		await deleteItem.hover();
		await expect.element(page.getByRole('tooltip', { name: 'No permission to delete Tanner' })).toBeVisible();

		await deleteItem.click({ force: true });
		expect(onDelete).not.toHaveBeenCalled();
	});

	it('should show the tooltip on a disabled parent and not open its submenu', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				secondaryRowActions={[
					{
						icon: 'code',
						label: 'Review PR',
						disabled: () => true,
						tooltip: 'No open pull request',
						children: [{ label: 'Visual', onClick: vi.fn() }],
					},
				]}
			/>,
		);

		const tannerRow = page.getByRole('row').nth(1);
		await tannerRow.hover();
		await tannerRow.getByRole('button', { name: /more actions/i }).click();

		const reviewItem = page.getByRole('menuitem', { name: /review pr/i });
		await expect.element(reviewItem).toHaveAttribute('aria-disabled', 'true');

		await reviewItem.hover();
		await expect.element(page.getByRole('tooltip', { name: 'No open pull request' })).toBeVisible();

		await reviewItem.click({ force: true });
		await expect.element(page.getByRole('menuitem', { name: /visual/i })).not.toBeInTheDocument();
	});

	it('should show bulk actions when rows are selected', async () => {
		const deleteHandler = vi.fn();
		const notifyHandler = vi.fn();

		const actions: Action<Person>[] = [
			{ icon: 'alarm', label: 'Notify', onClick: notifyHandler },
			{ icon: 'delete_outline', label: 'Delete', onClick: deleteHandler },
		];

		await page.render(<DsTable columns={columns} data={defaultData} selectable actions={actions} />);

		await page.getByRole('checkbox').nth(1).click();
		await page.getByRole('checkbox').nth(2).click();

		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).toBeVisible();

		await page.getByRole('button', { name: /notify/i }).click();
		expect(notifyHandler).toHaveBeenCalled();

		await page.getByRole('button', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalled();

		await page.getByRole('checkbox').nth(1).click();
		await page.getByRole('checkbox').nth(2).click();

		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).not.toBeInTheDocument();
	});

	describe('row actions column', () => {
		describe.each([
			{ resizableColumns: false, virtualized: false },
			{ resizableColumns: false, virtualized: true },
			{ resizableColumns: true, virtualized: false },
			{ resizableColumns: true, virtualized: true },
		])(
			'resizableColumns=$resizableColumns, virtualized=$virtualized',
			({ resizableColumns, virtualized }) => {
				it.each([
					{ name: 'fill columns overflowing the container', tableColumns: fillColumns },
					{ name: 'an explicit last column narrower than the actions', tableColumns: explicitColumns },
				])('keeps every action fully inside its cell with $name', async ({ tableColumns }) => {
					await page.render(
						<div style={{ width: narrowContainerWidth, height: 400 }}>
							<DsTable
								columns={tableColumns}
								data={defaultData}
								virtualized={virtualized}
								resizableColumns={resizableColumns}
								primaryRowActions={sizingPrimaryActions}
								secondaryRowActions={sizingSecondaryActions}
							/>
						</div>,
					);

					await expect.element(page.getByRole('button', { name: /more actions/i }).first()).toBeVisible();

					const dataRows = getDataRows();

					dataRows.forEach(expectActionsInsideActionsCell);
					expectActionsColumnAligned(dataRows);
				});
			},
		);

		it.each([{ resizableColumns: false }, { resizableColumns: true }])(
			'aligns the actions column with grouped headers (resizableColumns=$resizableColumns)',
			async ({ resizableColumns }) => {
				const groupedColumns: ColumnDef<Person>[] = [
					{ accessorKey: 'firstName', header: 'First Name' },
					{
						id: 'stats',
						header: 'Stats',
						columns: [
							{ accessorKey: 'age', header: 'Age' },
							{ accessorKey: 'progress', header: 'Profile Progress', size: 60 },
						],
					},
				];

				await page.render(
					<div style={{ width: narrowContainerWidth }}>
						<DsTable
							columns={groupedColumns}
							data={defaultData}
							resizableColumns={resizableColumns}
							primaryRowActions={sizingPrimaryActions}
							secondaryRowActions={sizingSecondaryActions}
						/>
					</div>,
				);

				await expect.element(page.getByRole('button', { name: /more actions/i }).first()).toBeVisible();

				const headerRects = Array.from(
					document.querySelectorAll(`thead th[data-column-id="${ROW_ACTIONS_COLUMN_ID}"]`),
				).map((cell) => cell.getBoundingClientRect());
				const dataRows = getDataRows();
				const bodyRect = getActionsCellRect(dataRows[0] as Locator);

				expect(headerRects.length).toBeGreaterThan(0);

				for (const headerRect of headerRects) {
					expect(headerRect.left).toBeCloseTo(bodyRect.left, 0);
					expect(headerRect.width).toBeCloseTo(bodyRect.width, 0);
				}

				dataRows.forEach(expectActionsInsideActionsCell);
			},
		);

		it('keeps the last consumer column content visible', async () => {
			await page.render(
				<div style={{ width: narrowContainerWidth }}>
					<DsTable
						columns={explicitColumns}
						data={defaultData}
						primaryRowActions={sizingPrimaryActions}
						secondaryRowActions={sizingSecondaryActions}
					/>
				</div>,
			);

			const firstRow = page.getByRole('row', { name: /tanner/i });

			await expect.element(firstRow.getByText('75%')).toBeVisible();
			expect(firstRow.getByRole('cell').nth(-2).element().getBoundingClientRect().width).toBeCloseTo(60, 0);
		});

		it('keeps the same actions column width when some rows hide actions', async () => {
			await page.render(
				<DsTable
					columns={columns}
					data={defaultData}
					primaryRowActions={[
						{ icon: 'edit', label: 'Edit', onClick: vi.fn() },
						{
							icon: 'open_in_new',
							label: 'Open in New Window',
							hidden: (data: Person) => data.firstName === 'Tanner',
							onClick: vi.fn(),
						},
					]}
					secondaryRowActions={sizingSecondaryActions}
				/>,
			);

			const rowWithHiddenAction = page.getByRole('row', { name: /tanner/i });

			await expect
				.element(rowWithHiddenAction.getByRole('button', { name: /open in new window/i }))
				.not.toBeInTheDocument();

			expectActionsColumnAligned(getDataRows());
		});

		it('keeps the more actions trigger aligned to the end when some rows hide actions', async () => {
			await page.render(
				<DsTable
					columns={columns}
					data={defaultData}
					primaryRowActions={[
						{ icon: 'edit', label: 'Edit', onClick: vi.fn() },
						{
							icon: 'open_in_new',
							label: 'Open in New Window',
							hidden: (data: Person) => data.firstName === 'Tanner',
							onClick: vi.fn(),
						},
					]}
					secondaryRowActions={sizingSecondaryActions}
				/>,
			);

			await expect
				.element(
					page.getByRole('row', { name: /tanner/i }).getByRole('button', { name: /open in new window/i }),
				)
				.not.toBeInTheDocument();

			const triggerRights = getDataRows().map(
				(row) =>
					row
						.getByRole('button', { name: /more actions/i })
						.element()
						.getBoundingClientRect().right,
			);

			for (const right of triggerRights) {
				expect(right).toBeCloseTo(triggerRights[0] ?? 0, 0);
			}
		});

		it('keeps actions fully inside their cells when the last consumer column is shrunk to its minimum', async () => {
			const onColumnSizingChange = vi.fn();

			await page.render(
				<div style={{ width: narrowContainerWidth }}>
					<DsTable
						columns={explicitColumns}
						data={defaultData}
						resizableColumns
						onColumnSizingChange={onColumnSizingChange}
						primaryRowActions={sizingPrimaryActions}
						secondaryRowActions={sizingSecondaryActions}
					/>
				</div>,
			);

			const lastConsumerHandle = page.getByRole('separator').last();
			const actionsWidth = getActionsHeaderCell().getBoundingClientRect().width;

			lastConsumerHandle.element().focus();
			await userEvent.keyboard('{Shift>}{ArrowLeft}{ArrowLeft}{ArrowLeft}{/Shift}');

			await expect.poll(() => onColumnSizingChange).toHaveBeenCalled();

			const lastSizing = onColumnSizingChange.mock.lastCall?.[0] as Record<string, number>;

			expect(lastSizing).not.toHaveProperty(ROW_ACTIONS_COLUMN_ID);
			expect(getActionsHeaderCell().getBoundingClientRect().width).toBeCloseTo(actionsWidth, 0);

			const dataRows = getDataRows();

			dataRows.forEach(expectActionsInsideActionsCell);
			expectActionsColumnAligned(dataRows);
		});

		it('adds no actions column when no row actions are declared', async () => {
			await page.render(<DsTable columns={columns} data={defaultData} />);

			await expect.element(page.getByRole('row', { name: /tanner/i })).toBeVisible();

			expect(document.querySelector(`thead th[data-column-id="${ROW_ACTIONS_COLUMN_ID}"]`)).toBeNull();
			expect(
				page
					.getByRole('row', { name: /tanner/i })
					.getByRole('cell')
					.elements(),
			).toHaveLength(columns.length);
		});

		it.each([
			{ name: 'appear', before: false, after: true },
			{ name: 'are removed', before: true, after: false },
		])(
			're-fits resizable columns to the container when row actions $name after seeding',
			async ({ before, after }) => {
				const onColumnSizingChange = vi.fn();
				const renderTable = (withActions: boolean) => (
					<div style={{ width: 1000, height: 400 }}>
						<DsTable
							columns={columns}
							data={defaultData}
							resizableColumns
							onColumnSizingChange={onColumnSizingChange}
							primaryRowActions={withActions ? sizingPrimaryActions : []}
							secondaryRowActions={withActions ? sizingSecondaryActions : []}
						/>
					</div>
				);

				const getRowWidth = () => {
					const cells = (getDataRows()[0] as Locator).getByRole('cell').elements();
					const first = cells.at(0)?.getBoundingClientRect();
					const last = cells.at(-1)?.getBoundingClientRect();

					return first && last ? last.right - first.left : 0;
				};

				const { rerender } = await page.render(renderTable(before));

				await expect.poll(() => getTableElement().style.width).not.toBe('');

				const seededRowWidth = getRowWidth();

				await rerender(renderTable(after));

				await expect
					.poll(() => document.querySelector(`thead th[data-column-id="${ROW_ACTIONS_COLUMN_ID}"]`) !== null)
					.toBe(after);

				await expect.poll(getRowWidth).toBeCloseTo(seededRowWidth, 0);
				expect(onColumnSizingChange).not.toHaveBeenCalled();
			},
		);

		it('keeps the content of a consumer column named like the actions column', async () => {
			const consumerColumns: ColumnDef<Person>[] = [
				...columns,
				{ id: 'rowActions', header: 'Status', cell: () => 'consumer content' },
			];

			await page.render(<DsTable columns={consumerColumns} data={defaultData} />);

			const row = page.getByRole('row', { name: /tanner/i });

			await expect.element(row.getByRole('cell').last()).toHaveTextContent('consumer content');
		});
	});
});
