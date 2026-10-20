import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import type { CellContext, ColumnDef, VisibilityState } from '@tanstack/react-table';
import DsTable from '../ds-table';
import type { DsTableStickyColumns } from '../ds-table.types';
import type { ScrollParams } from '../components/ds-table-body-virtualized';
import { DsTableEditCellText } from '../components/edit/cell-editors';
import { getColumnTrackWidth } from '../hooks/use-scrollbar-gutter';
import {
	COLUMN_DISPLAY_COLUMN_ID,
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from '../utils/constants';

type Row = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
};

const generateRows = (count: number): Row[] =>
	Array.from({ length: count }, (_, i) => ({
		id: String(i + 1),
		firstName: `First${String(i + 1)}`,
		lastName: `Last${String(i + 1)}`,
		age: 20 + (i % 50),
		visits: i * 10,
		status: i % 2 === 0 ? 'single' : 'complicated',
	}));

const rows = generateRows(6);

const wideColumns: ColumnDef<Row>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 160 },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 160 },
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue(), size: 160 },
];

const groupedColumns: ColumnDef<Row>[] = [
	{
		id: 'identity',
		header: 'Identity',
		columns: [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue<string>(), size: 160 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue<string>(), size: 160 },
		],
	},
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'visits', header: 'Visits', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue(), size: 160 },
];

/** Columns whose Age header pins Age to the left through the TanStack column API. */
const columnsWithAgePin: ColumnDef<Row>[] = wideColumns.map((column) =>
	'accessorKey' in column && column.accessorKey === 'age'
		? {
				...column,
				header: ({ column: ageColumn }) => (
					<button
						type="button"
						onClick={(event) => {
							event.stopPropagation();
							ageColumn.pin('left');
						}}
					>
						Pin age
					</button>
				),
			}
		: column,
);

const rowActions = {
	primaryRowActions: [{ icon: 'edit' as const, label: 'Edit', onClick: () => undefined }],
};

const Frame = ({
	children,
	width = 600,
	height = 400,
}: {
	children: ReactNode;
	width?: number;
	height?: number;
}) => <div style={{ width, height }}>{children}</div>;

const getTable = (): HTMLElement => {
	const table = document.querySelector('table');
	if (!(table instanceof HTMLElement)) {
		throw new Error('Expected table');
	}
	return table;
};

const getScrollContainer = (table: HTMLElement = getTable()): HTMLElement => {
	const container = table.parentElement;
	if (!(container instanceof HTMLElement)) {
		throw new Error('Expected the table scroll container');
	}
	return container;
};

const queryHeaderCell = (columnId: string, root: ParentNode = document): HTMLElement | null =>
	root.querySelector<HTMLElement>(`thead th[data-column-id="${columnId}"]`);

const getHeaderCell = (columnId: string, root: ParentNode = document): HTMLElement => {
	const cell = queryHeaderCell(columnId, root);
	if (!cell) {
		throw new Error(`Expected header cell for column "${columnId}"`);
	}
	return cell;
};

const getBodyCell = (columnId: string, rowNumber = 1): HTMLElement => {
	const header = getHeaderCell(columnId);
	const index = [...(header.parentElement?.children ?? [])].indexOf(header);
	const cell = document.querySelector(
		`tbody tr:nth-child(${String(rowNumber)}) td:nth-child(${String(index + 1)})`,
	);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected body cell for column "${columnId}"`);
	}
	return cell;
};

/** Left edge of `element` relative to the visible left edge of its scroll container. */
const visibleLeft = (element: HTMLElement, container = getScrollContainer()): number =>
	element.getBoundingClientRect().left - container.getBoundingClientRect().left;

/** Right edge of `element` relative to the visible left edge of its scroll container. */
const visibleRight = (element: HTMLElement, container = getScrollContainer()): number =>
	element.getBoundingClientRect().right - container.getBoundingClientRect().left;

const scrollToLeft = async (left: number, container = getScrollContainer()): Promise<void> => {
	container.scrollLeft = left;
	await expect
		.poll(() => container.scrollLeft)
		.toBe(Math.min(left, container.scrollWidth - container.clientWidth));
};

const scrollToEnd = async (container = getScrollContainer()): Promise<void> => {
	await scrollToLeft(container.scrollWidth - container.clientWidth, container);
};

const hasDivider = (element: HTMLElement): boolean => getComputedStyle(element).boxShadow !== 'none';

const TRANSPARENT = 'rgba(0, 0, 0, 0)';

const expectSameBackgroundAsRow = (cell: HTMLElement): void => {
	const row = cell.closest('tr');
	if (!row) {
		throw new Error('Expected the cell to sit in a row');
	}

	const cellBackground = getComputedStyle(cell).backgroundColor;
	expect(cellBackground).not.toBe(TRANSPARENT);
	expect(cellBackground).toBe(getComputedStyle(row).backgroundColor);
};

const waitForResizeSizing = async (): Promise<void> => {
	await expect.poll(() => getTable().style.width).not.toBe('');
};

const dispatchPointer = (type: string, target: EventTarget, clientX: number): void => {
	target.dispatchEvent(
		new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse', clientX }),
	);
};

const dispatchMouse = (type: string, target: EventTarget, clientX: number, clientY = 0): void => {
	target.dispatchEvent(
		new MouseEvent(type, { bubbles: true, cancelable: true, button: 0, clientX, clientY }),
	);
};

describe('DsTable sticky columns', () => {
	describe('placement', () => {
		it('keeps left sticky header and body cells after the utility columns while scrolling horizontally', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						selectable
						expandable
						renderExpandedRow={() => null}
						stickyColumns={{ left: ['firstName'] }}
					/>
				</Frame>,
			);

			const utilityWidth = visibleRight(getHeaderCell(SELECT_COLUMN_ID));
			await scrollToLeft(300);

			expect(visibleLeft(getHeaderCell('firstName'))).toBeCloseTo(utilityWidth, 0);
			expect(visibleLeft(getBodyCell('firstName'))).toBeCloseTo(utilityWidth, 0);
			expect(visibleLeft(getBodyCell('lastName'))).toBeLessThan(utilityWidth);
		});

		it('keeps right sticky header and body cells just before the row actions column', async () => {
			await page.render(
				<Frame>
					<DsTable columns={wideColumns} data={rows} {...rowActions} stickyColumns={{ right: ['status'] }} />
				</Frame>,
			);

			const container = getScrollContainer();

			for (const scrollLeft of [0, 200]) {
				await scrollToLeft(scrollLeft);

				const actionsHeader = getHeaderCell(ROW_ACTIONS_COLUMN_ID);
				expect(visibleRight(actionsHeader)).toBeCloseTo(container.clientWidth, 0);
				expect(visibleRight(getHeaderCell('status'))).toBeCloseTo(visibleLeft(actionsHeader), 0);
				expect(visibleRight(getBodyCell('status'))).toBeCloseTo(
					visibleLeft(getBodyCell(ROW_ACTIONS_COLUMN_ID)),
					0,
				);
			}
		});

		it('orders the columns within each side as listed in stickyColumns', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						stickyColumns={{ left: ['lastName', 'firstName'], right: ['status', 'age'] }}
					/>
				</Frame>,
			);

			const headerIds = [...document.querySelectorAll('thead th')].map((cell) =>
				cell.getAttribute('data-column-id'),
			);
			expect(headerIds).toEqual(['lastName', 'firstName', 'visits', 'status', 'age']);

			await scrollToLeft(100);

			const container = getScrollContainer();
			expect(visibleLeft(getHeaderCell('lastName'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getHeaderCell('firstName'))).toBeCloseTo(160, 0);
			expect(visibleRight(getHeaderCell('age'))).toBeCloseTo(container.clientWidth, 0);
			expect(visibleRight(getHeaderCell('status'))).toBeCloseTo(container.clientWidth - 200, 0);
		});

		it('always keeps reorder, expander and select sticky left before consumer columns, ignoring their ids', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						reorderable
						expandable
						selectable
						renderExpandedRow={() => null}
						stickyColumns={{ left: [SELECT_COLUMN_ID, 'firstName'], right: [EXPANDER_COLUMN_ID] }}
					/>
				</Frame>,
			);

			const headerIds = [...document.querySelectorAll('thead th')].map((cell) =>
				cell.getAttribute('data-column-id'),
			);
			expect(headerIds.slice(0, 4)).toEqual([
				REORDER_COLUMN_ID,
				EXPANDER_COLUMN_ID,
				SELECT_COLUMN_ID,
				'firstName',
			]);

			await scrollToLeft(300);

			let expectedLeft = 0;
			for (const id of [REORDER_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID, 'firstName']) {
				expect(visibleLeft(getHeaderCell(id))).toBeCloseTo(expectedLeft, 0);
				expect(visibleLeft(getBodyCell(id))).toBeCloseTo(expectedLeft, 0);
				expectedLeft += getHeaderCell(id).getBoundingClientRect().width;
			}
		});

		it('always keeps the row actions column sticky right after consumer columns, ignoring its id', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						{...rowActions}
						stickyColumns={{ left: [ROW_ACTIONS_COLUMN_ID], right: [ROW_ACTIONS_COLUMN_ID, 'status'] }}
					/>
				</Frame>,
			);

			const headerIds = [...document.querySelectorAll('thead th')].map((cell) =>
				cell.getAttribute('data-column-id'),
			);
			expect(headerIds.slice(-2)).toEqual(['status', ROW_ACTIONS_COLUMN_ID]);

			await scrollToLeft(0);
			const container = getScrollContainer();
			expect(visibleRight(getBodyCell(ROW_ACTIONS_COLUMN_ID))).toBeCloseTo(container.clientWidth, 0);
		});

		it.each([
			{ name: 'its own column', props: {}, columnId: COLUMN_DISPLAY_COLUMN_ID },
			{ name: 'the row actions column', props: rowActions, columnId: ROW_ACTIONS_COLUMN_ID },
		])('keeps the column display button sticky right in $name', async ({ props, columnId }) => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						{...props}
						columnDisplay
						stickyColumns={{ right: ['status', COLUMN_DISPLAY_COLUMN_ID] }}
					/>
				</Frame>,
			);

			const headerCell = getHeaderCell(columnId);
			await expect.element(page.getByRole('button', { name: 'Columns' })).toBeInTheDocument();
			expect(headerCell.contains(page.getByRole('button', { name: 'Columns' }).element())).toBe(true);

			await scrollToLeft(100);
			const container = getScrollContainer();

			expect(visibleRight(headerCell)).toBeCloseTo(container.clientWidth, 0);
			expect(visibleRight(getBodyCell(columnId))).toBeCloseTo(container.clientWidth, 0);
			expect(visibleRight(getHeaderCell('status'))).toBeCloseTo(visibleLeft(headerCell), 0);
		});
	});

	describe('state', () => {
		it('keeps its own state when stickyColumns is omitted', async () => {
			const onStickyColumnsChange = vi.fn();

			await page.render(
				<Frame>
					<DsTable columns={columnsWithAgePin} data={rows} onStickyColumnsChange={onStickyColumnsChange} />
				</Frame>,
			);

			await page.getByRole('button', { name: 'Pin age' }).click();

			expect(onStickyColumnsChange).toHaveBeenCalledWith({ left: ['age'], right: [] });
			await expect
				.poll(() => getHeaderCell('age').parentElement?.firstElementChild)
				.toBe(getHeaderCell('age'));

			await scrollToLeft(300);
			expect(visibleLeft(getHeaderCell('age'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getBodyCell('age'))).toBeCloseTo(0, 0);
		});

		it('lets the stickyColumns prop win when controlled', async () => {
			const onStickyColumnsChange = vi.fn();
			const stickyColumns: DsTableStickyColumns = { left: ['firstName'] };

			const { rerender } = await page.render(
				<Frame>
					<DsTable
						columns={columnsWithAgePin}
						data={rows}
						stickyColumns={stickyColumns}
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);

			await page.getByRole('button', { name: 'Pin age' }).click();
			expect(onStickyColumnsChange).toHaveBeenCalledWith({ left: ['firstName', 'age'], right: [] });

			await scrollToEnd();
			expect(visibleLeft(getHeaderCell('age'))).toBeLessThan(160);

			await rerender(
				<Frame>
					<DsTable
						columns={columnsWithAgePin}
						data={rows}
						stickyColumns={{ left: ['firstName', 'age'] }}
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);

			await scrollToEnd();
			await expect.poll(() => visibleLeft(getHeaderCell('age'))).toBeCloseTo(160, 0);
		});

		it('reports consumer column ids only to onStickyColumnsChange', async () => {
			const onStickyColumnsChange = vi.fn();

			await page.render(
				<Frame>
					<DsTable
						columns={columnsWithAgePin}
						data={rows}
						reorderable
						selectable
						expandable
						renderExpandedRow={() => null}
						{...rowActions}
						stickyColumns={{ left: ['firstName'], right: ['status'] }}
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);

			await page.getByRole('button', { name: 'Pin age' }).click();

			expect(onStickyColumnsChange).toHaveBeenCalledExactlyOnceWith({
				left: ['firstName', 'age'],
				right: ['status'],
			});
		});

		it('skips a hidden sticky column, keeps its id, and makes it sticky again once shown', async () => {
			const onStickyColumnsChange = vi.fn();
			const renderTable = (columnVisibility: VisibilityState) => (
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						columnVisibility={columnVisibility}
						stickyColumns={{ left: ['firstName', 'lastName'] }}
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>
			);

			const { rerender } = await page.render(renderTable({ firstName: false }));

			expect(queryHeaderCell('firstName')).toBeNull();
			await scrollToLeft(300);
			expect(visibleLeft(getHeaderCell('lastName'))).toBeCloseTo(0, 0);

			await rerender(renderTable({}));

			await scrollToLeft(300);
			await expect.poll(() => visibleLeft(getHeaderCell('firstName'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getHeaderCell('lastName'))).toBeCloseTo(160, 0);
			expect(onStickyColumnsChange).not.toHaveBeenCalled();
		});
	});

	describe('column display', () => {
		const openColumnDisplay = async () => {
			await page.getByRole('button', { name: 'Columns' }).click();
			await expect.element(page.getByRole('dialog', { name: 'Columns' })).toBeVisible();
		};

		const stickyToggle = (name: string) => page.getByRole('button', { name: `Sticky ${name}`, exact: true });

		it('makes a column sticky and not sticky again from the Columns popup', async () => {
			const onStickyColumnsChange = vi.fn();

			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						columnDisplay
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);
			await openColumnDisplay();

			await expect.element(stickyToggle('Age')).toHaveAttribute('aria-pressed', 'false');
			await stickyToggle('Age').click();

			await expect.element(stickyToggle('Age')).toHaveAttribute('aria-pressed', 'true');
			expect(onStickyColumnsChange).toHaveBeenLastCalledWith({ left: ['age'], right: [] });
			await expect
				.poll(() => getHeaderCell('age').parentElement?.firstElementChild)
				.toBe(getHeaderCell('age'));

			await scrollToLeft(300);
			expect(visibleLeft(getHeaderCell('age'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getBodyCell('age'))).toBeCloseTo(0, 0);

			await stickyToggle('Age').click();

			await expect.element(stickyToggle('Age')).toHaveAttribute('aria-pressed', 'false');
			expect(onStickyColumnsChange).toHaveBeenLastCalledWith({ left: [], right: [] });
			await expect.poll(() => getHeaderCell('age').getAttribute('data-sticky')).toBeNull();
		});

		it('shows a sticky toggle only on top-level rows and makes a whole group sticky', async () => {
			const onStickyColumnsChange = vi.fn();

			await page.render(
				<Frame>
					<DsTable
						columns={groupedColumns}
						data={rows}
						columnDisplay
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);
			await openColumnDisplay();

			await expect.element(stickyToggle('Identity')).toBeInTheDocument();
			await expect.element(stickyToggle('Age')).toBeInTheDocument();
			await expect.element(stickyToggle('First Name')).not.toBeInTheDocument();
			await expect.element(stickyToggle('Last Name')).not.toBeInTheDocument();

			await stickyToggle('Identity').click();

			expect(onStickyColumnsChange).toHaveBeenLastCalledWith({ left: ['firstName', 'lastName'], right: [] });
			await expect.poll(() => getHeaderCell('firstName').getAttribute('data-sticky')).toBe('left');
			expect(getHeaderCell('lastName').getAttribute('data-sticky')).toBe('left');
		});

		it('reads hidden and right sticky columns as sticky and clears a right one', async () => {
			const onStickyColumnsChange = vi.fn();

			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						columnDisplay
						columnVisibility={{ firstName: false }}
						stickyColumns={{ left: ['firstName'], right: ['status'] }}
						onStickyColumnsChange={onStickyColumnsChange}
					/>
				</Frame>,
			);
			await openColumnDisplay();

			await expect.element(stickyToggle('First Name')).toHaveAttribute('aria-pressed', 'true');
			await expect.element(stickyToggle('Status')).toHaveAttribute('aria-pressed', 'true');

			await stickyToggle('Status').click();

			expect(onStickyColumnsChange).toHaveBeenLastCalledWith({ left: ['firstName'], right: [] });
		});

		it('hides the toggle of a non-sticky row until hover or focus and keeps a sticky one visible', async () => {
			await page.render(
				<Frame>
					<DsTable columns={wideColumns} data={rows} columnDisplay stickyColumns={{ left: ['firstName'] }} />
				</Frame>,
			);
			await openColumnDisplay();
			await page.getByPlaceholder('Search').hover();

			await expect.poll(() => getComputedStyle(stickyToggle('Age').element()).opacity).toBe('0');
			expect(getComputedStyle(stickyToggle('First Name').element()).opacity).toBe('1');

			await page.getByRole('checkbox', { name: 'Age', exact: true }).hover();

			await expect.poll(() => getComputedStyle(stickyToggle('Age').element()).opacity).toBe('1');

			await page.getByPlaceholder('Search').hover();
			await expect.poll(() => getComputedStyle(stickyToggle('Visits').element()).opacity).toBe('0');

			stickyToggle('Visits').element().focus();

			await expect.poll(() => getComputedStyle(stickyToggle('Visits').element()).opacity).toBe('1');
		});

		it('labels the toggle from locale.stickyColumn', async () => {
			await page.render(
				<Frame>
					<DsTable columns={wideColumns} data={rows} columnDisplay locale={{ stickyColumn: 'Fixer' }} />
				</Frame>,
			);
			await openColumnDisplay();

			await expect.element(page.getByRole('button', { name: 'Fixer Age', exact: true })).toBeInTheDocument();
		});
	});

	describe('edge dividers', () => {
		it('shows the left divider only while content is scrolled under the left sticky columns', async () => {
			await page.render(
				<Frame>
					<DsTable columns={wideColumns} data={rows} stickyColumns={{ left: ['firstName', 'lastName'] }} />
				</Frame>,
			);

			const edgeHeader = getHeaderCell('lastName');
			const edgeBody = getBodyCell('lastName');

			expect(hasDivider(edgeHeader)).toBe(false);
			expect(hasDivider(edgeBody)).toBe(false);

			await scrollToLeft(50);
			await expect.poll(() => hasDivider(edgeHeader)).toBe(true);
			expect(hasDivider(edgeBody)).toBe(true);
			expect(hasDivider(getHeaderCell('firstName'))).toBe(false);

			await scrollToLeft(0);
			await expect.poll(() => hasDivider(edgeHeader)).toBe(false);
		});

		it('shows the right divider only while more content remains to the right', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						{...rowActions}
						stickyColumns={{ right: ['visits', 'status'] }}
					/>
				</Frame>,
			);

			const edgeHeader = getHeaderCell('visits');

			await expect.poll(() => hasDivider(edgeHeader)).toBe(true);
			expect(hasDivider(getBodyCell('visits'))).toBe(true);
			expect(hasDivider(getHeaderCell('status'))).toBe(false);
			expect(hasDivider(getHeaderCell(ROW_ACTIONS_COLUMN_ID))).toBe(false);

			await scrollToEnd();
			await expect.poll(() => hasDivider(edgeHeader)).toBe(false);
			expect(hasDivider(getBodyCell('visits'))).toBe(false);
		});

		it('covers the scrollbar gutter beside the right sticky columns while scrolled', async () => {
			await page.render(
				<>
					<style>{'div:has(> table) { scrollbar-width: none !important; }'}</style>
					<Frame width={360} height={240}>
						<DsTable columns={wideColumns} data={generateRows(20)} {...rowActions} />
					</Frame>
				</>,
			);

			const container = getScrollContainer();
			await expect.poll(() => container.scrollHeight > container.clientHeight).toBe(true);
			await scrollToLeft(100);

			const actionsCell = getBodyCell(ROW_ACTIONS_COLUMN_ID);
			const { top, bottom } = actionsCell.getBoundingClientRect();
			const gutterPoint = document.elementFromPoint(
				container.getBoundingClientRect().left + container.clientWidth - 2,
				(top + bottom) / 2,
			);

			expect(gutterPoint?.closest('td')).toBe(actionsCell);
		});

		it('clears the right divider when content stops overflowing after web fonts load', async () => {
			await page.render(
				<Frame>
					<DsTable columns={wideColumns.slice(0, 1)} data={rows} {...rowActions} />
				</Frame>,
			);

			const container = getScrollContainer();
			const edgeHeader = getHeaderCell(ROW_ACTIONS_COLUMN_ID);
			expect(hasDivider(edgeHeader)).toBe(false);

			// Icon ligature text renders as wide words until the icon font loads: it spills
			// past the last cell without resizing the table or its scroll container.
			const spill = document.createElement('span');
			spill.style.whiteSpace = 'nowrap';
			spill.textContent = 'more_vert '.repeat(10);
			getBodyCell(ROW_ACTIONS_COLUMN_ID).append(spill);
			container.dispatchEvent(new Event('scroll'));
			await expect.poll(() => hasDivider(edgeHeader)).toBe(true);

			spill.remove();
			document.fonts.dispatchEvent(new Event('loadingdone'));

			await expect.poll(() => hasDivider(edgeHeader)).toBe(false);
			expect(container.scrollWidth).toBe(container.clientWidth);
		});

		it('does not shift layout when a divider toggles', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						stickyColumns={{ left: ['firstName'], right: ['status'] }}
					/>
				</Frame>,
			);

			const container = getScrollContainer();
			const measure = () => ({
				scrollWidth: container.scrollWidth,
				headerWidths: [...document.querySelectorAll('thead th')].map(
					(cell) => cell.getBoundingClientRect().width,
				),
				bodyWidths: [...document.querySelectorAll('tbody tr:first-child td')].map(
					(cell) => cell.getBoundingClientRect().width,
				),
				rowHeight: getBodyCell('firstName').getBoundingClientRect().height,
			});

			const before = measure();
			expect(hasDivider(getHeaderCell('firstName'))).toBe(false);

			await scrollToLeft(50);
			await expect.poll(() => hasDivider(getHeaderCell('firstName'))).toBe(true);

			expect(measure()).toEqual(before);
		});
	});

	describe('column groups', () => {
		it.each([
			{ name: 'the group id', left: ['identity'] },
			{ name: 'one leaf of the group', left: ['lastName'] },
		])('pins every leaf and the group header once when listing $name', async ({ left }) => {
			await page.render(
				<Frame>
					<DsTable columns={groupedColumns} data={rows} stickyColumns={{ left }} />
				</Frame>,
			);

			expect(document.querySelectorAll('thead th[data-column-id="identity"]')).toHaveLength(1);

			await scrollToLeft(300);

			expect(visibleLeft(getHeaderCell('identity'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getHeaderCell('firstName'))).toBeCloseTo(0, 0);
			expect(visibleLeft(getHeaderCell('lastName'))).toBeCloseTo(160, 0);
			expect(visibleLeft(getBodyCell('lastName'))).toBeCloseTo(160, 0);
		});
	});

	describe('sizing', () => {
		it('renders a sticky fill column at its fixed size', async () => {
			const fillColumns: ColumnDef<Row>[] = [
				{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue() },
				{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue() },
				{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue() },
			];

			await page.render(
				<Frame width={1000}>
					<DsTable columns={fillColumns} data={rows} stickyColumns={{ left: ['firstName'] }} />
				</Frame>,
			);

			expect(getHeaderCell('firstName').getBoundingClientRect().width).toBeCloseTo(150, 0);
			expect(getBodyCell('firstName').getBoundingClientRect().width).toBeCloseTo(150, 0);
			expect(getHeaderCell('lastName').getBoundingClientRect().width).toBeGreaterThan(150);
		});

		it('moves later sticky columns live while a sticky column is resized', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						resizableColumns
						stickyColumns={{ left: ['firstName', 'lastName'] }}
					/>
				</Frame>,
			);

			await waitForResizeSizing();
			await scrollToLeft(200);

			const startLeft = visibleLeft(getBodyCell('lastName'));
			expect(startLeft).toBeCloseTo(160, 0);

			const handle = getHeaderCell('firstName').querySelector('[aria-label="Resize column"]');
			if (!(handle instanceof HTMLElement)) {
				throw new Error('Expected a resize handle on First Name');
			}

			const startX = handle.getBoundingClientRect().right;
			dispatchPointer('pointerdown', handle, startX);
			await expect.poll(() => document.querySelector('[data-resize-phase="dragging"]')).not.toBeNull();
			dispatchMouse('mousemove', document, startX + 80);

			await expect.poll(() => visibleLeft(getHeaderCell('lastName'))).toBeCloseTo(startLeft + 80, 0);
			expect(visibleLeft(getBodyCell('lastName'))).toBeCloseTo(startLeft + 80, 0);

			dispatchMouse('mouseup', document, startX + 80);
		});
	});

	describe('row backgrounds', () => {
		it('paints sticky cells with the default, hover, selected and active row backgrounds', async () => {
			const { rerender } = await page.render(
				<Frame>
					<DsTable columns={wideColumns} data={rows} selectable stickyColumns={{ left: ['firstName'] }} />
				</Frame>,
			);

			expectSameBackgroundAsRow(getHeaderCell('firstName'));
			expectSameBackgroundAsRow(getBodyCell('firstName', 3));

			const defaultBackground = getComputedStyle(getBodyCell('firstName', 3)).backgroundColor;

			await page.elementLocator(getBodyCell('age', 2)).hover();
			await expect
				.poll(() => getComputedStyle(getBodyCell('firstName', 2)).backgroundColor)
				.not.toBe(defaultBackground);
			expectSameBackgroundAsRow(getBodyCell('firstName', 2));

			const checkbox = getBodyCell(SELECT_COLUMN_ID, 1).querySelector('label');
			if (!checkbox) {
				throw new Error('Expected a row checkbox');
			}
			await page.elementLocator(checkbox).click();
			await expect
				.poll(() => getBodyCell('firstName', 1).closest('tr')?.getAttribute('data-state'))
				.toBe('selected');
			expectSameBackgroundAsRow(getBodyCell('firstName', 1));

			await rerender(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						selectable
						activeRowId="4"
						stickyColumns={{ left: ['firstName'] }}
					/>
				</Frame>,
			);

			await expect
				.poll(() => getBodyCell('firstName', 4).closest('tr')?.getAttribute('data-state'))
				.toBe('active');
			expectSameBackgroundAsRow(getBodyCell('firstName', 4));
			expect(getComputedStyle(getBodyCell('firstName', 4)).backgroundColor).not.toBe(defaultBackground);
		});

		it('keeps drag-to-reorder working and paints sticky cells with the dragging row background', async () => {
			const onOrderChange = vi.fn<(data: Row[]) => void>();

			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						reorderable
						onOrderChange={onOrderChange}
						stickyColumns={{ left: ['firstName'] }}
					/>
				</Frame>,
			);

			await scrollToLeft(200);

			const handle = getBodyCell(REORDER_COLUMN_ID, 1).querySelector('[aria-roledescription="sortable"]');
			if (!(handle instanceof HTMLElement)) {
				throw new Error('Expected a drag handle');
			}

			const start = handle.getBoundingClientRect();
			const target = getBodyCell(REORDER_COLUMN_ID, 3).getBoundingClientRect();
			const x = start.left + start.width / 2;

			dispatchMouse('mousedown', handle, x, start.top + start.height / 2);
			dispatchMouse('mousemove', document, x, start.top + start.height / 2 + 10);

			const draggedCell = getBodyCell('firstName', 1);
			await expect.poll(() => draggedCell.closest('tr')?.style.zIndex).toBe('1');
			expectSameBackgroundAsRow(draggedCell);
			expect(visibleLeft(draggedCell)).toBeCloseTo(
				getHeaderCell(REORDER_COLUMN_ID).getBoundingClientRect().width,
				0,
			);

			dispatchMouse('mousemove', document, x, target.top + target.height / 2);
			// Rows the dragged row passes over shift up to make room.
			const passedRow = getBodyCell('firstName', 3).closest('tr');
			await expect.poll(() => passedRow?.style.transform ?? '').toMatch(/translate3d\(0px, -\d/);
			dispatchMouse('mouseup', document, x, target.top + target.height / 2);

			await expect.poll(() => onOrderChange.mock.calls.length).toBe(1);
			expect(onOrderChange.mock.calls[0]?.[0].map((row) => row.id)).toEqual(['2', '3', '1', '4', '5', '6']);
		});
	});

	describe('editing', () => {
		it('paints the inline editor above neighboring sticky cells', async () => {
			const editableColumns: ColumnDef<Row>[] = wideColumns.map((column) =>
				'accessorKey' in column && column.accessorKey === 'visits'
					? {
							...column,
							editCell: (info: CellContext<Row, string>) => <DsTableEditCellText cellContext={info} />,
						}
					: column,
			);

			await page.render(
				<Frame>
					<DsTable
						columns={editableColumns}
						data={rows}
						{...rowActions}
						onCellEdit={() => undefined}
						stickyColumns={{ right: ['status'] }}
					/>
				</Frame>,
			);

			const editable = getBodyCell('visits').querySelector('[role="button"]');
			if (!(editable instanceof HTMLElement)) {
				throw new Error('Expected an editable Visits cell');
			}

			await page.elementLocator(editable).dblClick();
			const input = page.getByRole('textbox').first();
			await expect.element(input).toBeVisible();

			const overlay = input.element().closest('form');
			if (!overlay) {
				throw new Error('Expected the editor overlay');
			}

			// Points where the overlay extends over the sticky Status cell of its own row
			// and of the next row.
			const statusLeft = getBodyCell('status').getBoundingClientRect().left;
			const overlayRect = overlay.getBoundingClientRect();
			expect(overlayRect.right).toBeGreaterThan(statusLeft + 4);

			const x = statusLeft + 2;
			for (const y of [overlayRect.top + 4, overlayRect.bottom - 4]) {
				expect(overlay.contains(document.elementFromPoint(x, y))).toBe(true);
			}
		});
	});

	describe('virtualized', () => {
		const virtualizedRows = generateRows(200);

		it('keeps sticky columns in view and positions rows below the header while scrolling', async () => {
			await page.render(
				<Frame height={400}>
					<DsTable
						columns={wideColumns}
						data={virtualizedRows}
						virtualized
						stickyColumns={{ left: ['firstName'], right: ['status'] }}
					/>
				</Frame>,
			);

			const container = getScrollContainer();
			await scrollToLeft(150);
			container.scrollTop = 48 * 50;

			const header = document.querySelector('thead');
			if (!header) {
				throw new Error('Expected thead');
			}

			await expect
				.poll(
					() => document.querySelector<HTMLElement>('tbody tr[data-index="50"]')?.getBoundingClientRect().top,
				)
				.toBeCloseTo(header.getBoundingClientRect().bottom, 0);
			expect(header.getBoundingClientRect().top).toBeCloseTo(container.getBoundingClientRect().top, 0);

			const firstNameCell = document.querySelector<HTMLElement>('tbody tr[data-index="50"] td');
			if (!firstNameCell) {
				throw new Error('Expected a body cell in row 50');
			}

			expect(firstNameCell.textContent).toBe('First51');
			expect(visibleLeft(firstNameCell)).toBeCloseTo(0, 0);
			expect(visibleLeft(getHeaderCell('firstName'))).toBeCloseTo(0, 0);
			// Right sticky cells stop before the scrollbar gutter padding.
			expect(visibleRight(getHeaderCell('status'))).toBeCloseTo(getColumnTrackWidth(container), 0);
		});

		it('stays within a bounded flex parent whose child keeps the default min-height', async () => {
			const parentHeight = 400;

			await page.render(
				<div style={{ display: 'flex', flexDirection: 'column', width: 600, height: parentHeight }}>
					<div style={{ flex: 1 }}>
						<DsTable columns={wideColumns} data={virtualizedRows} virtualized />
					</div>
				</div>,
			);

			const container = getScrollContainer();
			await expect.poll(() => document.querySelectorAll('tbody tr[data-index]').length).toBeGreaterThan(0);

			expect(container.getBoundingClientRect().height).toBeLessThanOrEqual(parentHeight);
			expect(container.scrollHeight).toBeGreaterThan(container.clientHeight);
			expect(document.querySelectorAll('tbody tr[data-index]').length).toBeLessThan(
				virtualizedRows.length / 4,
			);
		});

		it('sizes to its columns inside a fit-content parent', async () => {
			const columnTrackWidth = wideColumns.reduce((sum, column) => sum + (column.size ?? 0), 0);

			await page.render(
				<div style={{ width: 'fit-content', maxWidth: 2000, height: 400 }}>
					<DsTable columns={wideColumns} data={virtualizedRows} virtualized />
				</div>,
			);

			await expect.poll(() => document.querySelectorAll('tbody tr[data-index]').length).toBeGreaterThan(0);
			expect(getScrollContainer().clientWidth).toBeCloseTo(columnTrackWidth, 0);
		});

		it('scrolls far enough to show the whole last row', async () => {
			await page.render(
				<Frame height={400}>
					<DsTable
						columns={wideColumns}
						data={virtualizedRows}
						virtualized
						stickyColumns={{ left: ['firstName'] }}
					/>
				</Frame>,
			);

			const container = getScrollContainer();
			const lastRowSelector = `tbody tr[data-index="${String(virtualizedRows.length - 1)}"]`;

			await expect
				.poll(() => {
					container.scrollTop = container.scrollHeight;
					return document.querySelector(lastRowSelector) !== null;
				})
				.toBe(true);

			const visibleBottom = container.getBoundingClientRect().top + container.clientHeight;
			await expect
				.poll(() => {
					container.scrollTop = container.scrollHeight;
					return document.querySelector(lastRowSelector)?.getBoundingClientRect().bottom ?? Infinity;
				})
				.toBeLessThanOrEqual(visibleBottom + 1);

			const lastRow = document.querySelector(lastRowSelector);
			const headerBottom = document.querySelector('thead')?.getBoundingClientRect().bottom ?? 0;
			expect(lastRow?.getBoundingClientRect().top).toBeGreaterThanOrEqual(headerBottom - 1);
			expect(lastRow?.textContent).toContain('First200');
		});

		it('reports onScroll from the table scroll container', async () => {
			const onScroll = vi.fn<(params: ScrollParams) => void>();

			await page.render(
				<Frame height={400}>
					<DsTable columns={wideColumns} data={virtualizedRows} virtualized onScroll={onScroll} />
				</Frame>,
			);

			const container = getScrollContainer();
			container.scrollTop = 500;

			await expect.poll(() => onScroll.mock.lastCall?.[0].scrollOffset).toBe(500);

			const headerHeight = document.querySelector('thead')?.getBoundingClientRect().height ?? 0;
			expect(onScroll).toHaveBeenLastCalledWith(
				expect.objectContaining({
					totalContentHeight: container.scrollHeight - headerHeight,
					viewportHeight: container.clientHeight - headerHeight,
					bottomOffset: container.scrollHeight - container.clientHeight - 500,
				}),
			);
		});
	});

	describe.each([
		{ name: 'non-virtualized', virtualized: false },
		{ name: 'virtualized', virtualized: true },
	])('expanded rows ($name)', ({ virtualized }) => {
		it('keeps the panel content in the visible area and its background across the full row', async () => {
			await page.render(
				<Frame>
					<DsTable
						columns={wideColumns}
						data={rows}
						virtualized={virtualized}
						expandable
						renderExpandedRow={(row) => <div>Details for {row.firstName}</div>}
						stickyColumns={{ left: ['firstName'] }}
					/>
				</Frame>,
			);

			await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
			const details = page.getByText('Details for First1');
			await expect.element(details).toBeVisible();

			const container = getScrollContainer();
			const expandedRow = details.element().closest('tr');
			if (!(expandedRow instanceof HTMLElement)) {
				throw new Error('Expected the expanded row');
			}

			for (const scroll of [0, 'end'] as const) {
				if (scroll === 'end') {
					await scrollToEnd();
				}

				expect(visibleLeft(details.element() as HTMLElement)).toBeGreaterThanOrEqual(0);
				expect(visibleRight(details.element() as HTMLElement)).toBeLessThanOrEqual(container.clientWidth);
			}

			expect(expandedRow.getBoundingClientRect().width).toBeCloseTo(
				getTable().getBoundingClientRect().width,
				0,
			);
			expect(getComputedStyle(expandedRow).backgroundColor).not.toBe(TRANSPARENT);
		});

		it('fits a nested table to the visible width with its own scroll and sticky columns', async () => {
			await page.render(
				<Frame height={500}>
					<DsTable
						columns={wideColumns}
						data={rows}
						virtualized={virtualized}
						expandable
						renderExpandedRow={() => (
							<DsTable columns={wideColumns} data={rows.slice(0, 2)} stickyColumns={{ left: ['lastName'] }} />
						)}
					/>
				</Frame>,
			);

			await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
			await expect.poll(() => document.querySelectorAll('table').length).toBe(2);

			const outerContainer = getScrollContainer();
			const nestedTable = document.querySelectorAll('table')[1];
			if (!(nestedTable instanceof HTMLElement)) {
				throw new Error('Expected the nested table');
			}

			const nestedContainer = getScrollContainer(nestedTable);
			await scrollToEnd(outerContainer);

			expect(visibleLeft(nestedContainer, outerContainer)).toBeGreaterThanOrEqual(0);
			expect(visibleRight(nestedContainer, outerContainer)).toBeLessThanOrEqual(outerContainer.clientWidth);
			expect(nestedContainer.scrollWidth).toBeGreaterThan(nestedContainer.clientWidth);

			const nestedEdge = getHeaderCell('lastName', nestedTable);
			expect(hasDivider(nestedEdge)).toBe(false);

			await scrollToLeft(300, nestedContainer);
			expect(visibleLeft(nestedEdge, nestedContainer)).toBeCloseTo(0, 0);
			await expect.poll(() => hasDivider(nestedEdge)).toBe(true);
		});
	});
});
