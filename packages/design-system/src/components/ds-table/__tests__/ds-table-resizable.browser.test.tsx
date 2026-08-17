import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { EXPANDER_COLUMN_ID, REORDER_COLUMN_ID, SELECT_COLUMN_ID } from '../utils/constants';

type Row = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
};

const rows: Row[] = [
	{ id: '1', firstName: 'Tanner', lastName: 'Linsley', age: 33 },
	{ id: '2', firstName: 'Kevin', lastName: 'Fine', age: 28 },
];

const sizedColumns: ColumnDef<Row>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 120 },
];

const groupedColumns: ColumnDef<Row>[] = [
	{
		id: 'identity',
		header: 'Identity',
		columns: [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue<string>(), size: 180 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue<string>(), size: 180 },
		],
	},
];

const getHeaderCell = (columnId: string): HTMLElement => {
	const cell = document.querySelector(`thead th[data-column-id="${columnId}"]`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected header cell for column "${columnId}"`);
	}
	return cell;
};

const getHandle = (columnId: string): HTMLElement => {
	const handle = getHeaderCell(columnId).querySelector('[aria-label="Resize column"]');
	if (!(handle instanceof HTMLElement)) {
		throw new Error(`Expected resize handle for column "${columnId}"`);
	}
	return handle;
};

const widthOf = (columnId: string): number => getHeaderCell(columnId).getBoundingClientRect().width;

const bodyCellWidth = (columnIndex: number): number => {
	const cell = document.querySelector(`tbody tr:nth-child(1) td:nth-child(${String(columnIndex)})`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected body cell at column ${String(columnIndex)}`);
	}
	return cell.getBoundingClientRect().width;
};

const dispatchPointer = (type: string, target: EventTarget, clientX: number, clientY = 0): void => {
	const view = target instanceof Document ? target.defaultView : document.defaultView;
	target.dispatchEvent(
		new PointerEvent(type, {
			bubbles: true,
			cancelable: true,
			pointerId: 1,
			pointerType: 'mouse',
			clientX,
			clientY,
			view: view ?? undefined,
		}),
	);
};

const dispatchMouse = (type: string, target: EventTarget, clientX: number, clientY = 0): void => {
	const view = target instanceof Document ? target.defaultView : document.defaultView;
	target.dispatchEvent(
		new MouseEvent(type, {
			bubbles: true,
			cancelable: true,
			button: 0,
			clientX,
			clientY,
			view: view ?? undefined,
		}),
	);
};

const waitUntilDragging = async (): Promise<void> => {
	await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('dragging');
};

const dragHandleBy = async (handle: HTMLElement, deltaX: number): Promise<void> => {
	const columnId = handle.closest('th')?.getAttribute('data-column-id');
	if (!columnId) {
		throw new Error('Expected handle to sit in a header cell with data-column-id');
	}

	const start = widthOf(columnId);
	const startX = handle.getBoundingClientRect().right;
	dispatchPointer('pointerdown', handle, startX);
	await waitUntilDragging();
	dispatchMouse('mousemove', handle.ownerDocument, startX + deltaX);
	await expect.poll(() => widthOf(columnId)).not.toBe(start);
	dispatchMouse('mouseup', handle.ownerDocument, startX + deltaX);
};

const hoverHandle = (handle: HTMLElement): void => {
	handle.dispatchEvent(
		new PointerEvent('pointerover', { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse' }),
	);
	handle.dispatchEvent(
		new PointerEvent('pointerenter', { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse' }),
	);
};

const unhoverHandle = (handle: HTMLElement): void => {
	handle.dispatchEvent(
		new PointerEvent('pointerout', { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse' }),
	);
	handle.dispatchEvent(
		new PointerEvent('pointerleave', { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse' }),
	);
};

const getOverlay = (): HTMLElement => {
	const overlay = document.querySelector('[data-resize-overlay]');
	if (!(overlay instanceof HTMLElement)) {
		throw new Error('Expected resize overlay element');
	}
	return overlay;
};

describe('DsTable - resizable columns', () => {
	it('renders a resize handle per resizable column when enabled', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handles = document.querySelectorAll('thead [aria-label="Resize column"]');
		expect(handles).toHaveLength(sizedColumns.length);
	});

	it('renders no resize handles when resizing is disabled', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} />);

		const handles = document.querySelectorAll('thead [aria-label="Resize column"]');
		expect(handles).toHaveLength(0);
	});

	it('omits the handle for a column with enableResizing: false', async () => {
		const columns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 200 },
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 200,
				enableResizing: false,
			},
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		expect(getHeaderCell('firstName').querySelector('[aria-label="Resize column"]')).not.toBeNull();
		expect(getHeaderCell('lastName').querySelector('[aria-label="Resize column"]')).toBeNull();
	});

	it('keeps the body column aligned with the header while resizing', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		await dragHandleBy(getHandle('firstName'), 40);

		await expect.poll(() => Math.round(bodyCellWidth(1))).toBe(Math.round(widthOf('firstName')));
	});

	it('does not shrink a column below the minimum width', async () => {
		const columns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 64 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		await dragHandleBy(getHandle('firstName'), -80);

		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(52);
	});

	it('keeps the drag overlay on the cell edge when shrinking past the minimum width', async () => {
		const columns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 64 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX - 80);

		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(52);
		await expect
			.poll(() => {
				const overlay = getOverlay();
				const container = overlay.parentElement;
				if (!container || overlay.getAttribute('data-resize-phase') !== 'dragging') {
					return Number.POSITIVE_INFINITY;
				}
				const cellRightRelative =
					getHeaderCell('firstName').getBoundingClientRect().right - container.getBoundingClientRect().left;
				return Math.abs(parseFloat(overlay.style.left) - cellRightRelative);
			})
			.toBeLessThan(2);

		dispatchMouse('mouseup', handle.ownerDocument, startX - 80);
	});

	it('does not shrink a column below its minSize', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 120,
				minSize: 80,
			},
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		await dragHandleBy(getHandle('firstName'), -80);

		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(80);
	});

	it('does not grow a column past its maxSize', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 200,
				maxSize: 240,
			},
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		await dragHandleBy(getHandle('firstName'), 80);

		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(240);
	});

	it('keeps the drag overlay on the cell edge when growing past maxSize', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 200,
				maxSize: 240,
			},
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + 80);

		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(240);
		await expect
			.poll(() => {
				const overlay = getOverlay();
				const container = overlay.parentElement;
				if (!container || overlay.getAttribute('data-resize-phase') !== 'dragging') {
					return Number.POSITIVE_INFINITY;
				}
				const cellRightRelative =
					getHeaderCell('firstName').getBoundingClientRect().right - container.getBoundingClientRect().left;
				return Math.abs(parseFloat(overlay.style.left) - cellRightRelative);
			})
			.toBeLessThan(2);

		dispatchMouse('mouseup', handle.ownerDocument, startX + 80);
	});

	it('fires onColumnSizingChange with clamped widths on drag', async () => {
		const onColumnSizingChange = vi.fn();
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 200,
				maxSize: 220,
			},
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(
			<DsTable columns={columns} data={rows} resizableColumns onColumnSizingChange={onColumnSizingChange} />,
		);

		await dragHandleBy(getHandle('firstName'), 80);

		expect(onColumnSizingChange).toHaveBeenCalled();
		const lastCall = onColumnSizingChange.mock.lastCall?.[0] as Record<string, number>;
		expect(lastCall.firstName).toBe(220);
	});

	it('fires onColumnSizingChange with the next sizing map on drag', async () => {
		const onColumnSizingChange = vi.fn();
		await page.render(
			<DsTable
				columns={sizedColumns}
				data={rows}
				resizableColumns
				onColumnSizingChange={onColumnSizingChange}
			/>,
		);

		await dragHandleBy(getHandle('firstName'), 40);

		expect(onColumnSizingChange).toHaveBeenCalled();
		const lastCall = onColumnSizingChange.mock.lastCall?.[0] as Record<string, number>;
		expect(lastCall.firstName).toBeGreaterThan(200);
	});

	it('omits injected utility columns from onColumnSizingChange on drag end', async () => {
		const onColumnSizingChange = vi.fn();
		await page.render(
			<DsTable
				columns={sizedColumns}
				data={rows}
				resizableColumns
				selectable
				expandable
				reorderable
				renderExpandedRow={(row) => <div>Details for {row.firstName}</div>}
				onColumnSizingChange={onColumnSizingChange}
			/>,
		);

		await dragHandleBy(getHandle('firstName'), 40);

		expect(onColumnSizingChange).toHaveBeenCalled();
		const lastCall = onColumnSizingChange.mock.lastCall?.[0] as Record<string, number>;
		expect(lastCall.firstName).toBeGreaterThan(200);
		expect(lastCall).not.toHaveProperty(SELECT_COLUMN_ID);
		expect(lastCall).not.toHaveProperty(EXPANDER_COLUMN_ID);
		expect(lastCall).not.toHaveProperty(REORDER_COLUMN_ID);
	});

	it('omits injected utility columns from onColumnSizingChange on double-click restore', async () => {
		const onColumnSizingChange = vi.fn();
		await page.render(
			<DsTable
				columns={sizedColumns}
				data={rows}
				resizableColumns
				selectable
				expandable
				reorderable
				renderExpandedRow={(row) => <div>Details for {row.firstName}</div>}
				onColumnSizingChange={onColumnSizingChange}
			/>,
		);

		await dragHandleBy(getHandle('firstName'), 40);
		getHandle('firstName').dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));

		await expect.poll(() => onColumnSizingChange.mock.calls.length).toBeGreaterThan(1);
		const lastCall = onColumnSizingChange.mock.lastCall?.[0] as Record<string, number>;
		expect(lastCall.firstName).toBe(200);
		expect(lastCall).not.toHaveProperty(SELECT_COLUMN_ID);
		expect(lastCall).not.toHaveProperty(EXPANDER_COLUMN_ID);
		expect(lastCall).not.toHaveProperty(REORDER_COLUMN_ID);
	});

	it('resets a column to its origin width on double-click', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const start = widthOf('firstName');
		await dragHandleBy(getHandle('firstName'), 40);
		await expect.poll(() => widthOf('firstName')).toBeGreaterThan(start);

		getHandle('firstName').dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
		await expect.poll(() => Math.round(widthOf('firstName'))).toBe(Math.round(start));
	});

	it('grows a group by the drag distance, not half of it', async () => {
		await page.render(<DsTable columns={groupedColumns} data={rows} resizableColumns />);

		const groupStart = widthOf('identity');
		const firstStart = widthOf('firstName');
		const lastStart = widthOf('lastName');

		await dragHandleBy(getHandle('identity'), 100);

		await expect.poll(() => widthOf('identity')).toBeGreaterThan(groupStart + 80);
		expect(widthOf('identity')).toBeLessThan(groupStart + 120);
		expect(widthOf('firstName')).toBeGreaterThan(firstStart);
		expect(widthOf('lastName')).toBeGreaterThan(lastStart);
	});

	it('changes width by the drag distance without compounding across moves', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const start = widthOf('firstName');
		const handle = getHandle('firstName');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + 40);
		dispatchMouse('mousemove', handle.ownerDocument, startX + 75);
		dispatchMouse('mousemove', handle.ownerDocument, startX + 100);
		await expect.poll(() => widthOf('firstName')).toBeGreaterThan(start + 80);
		expect(widthOf('firstName')).toBeLessThan(start + 120);

		dispatchMouse('mouseup', handle.ownerDocument, startX + 100);
	});

	it('keeps fixed width styles when resized through TanStack’s default size (150)', async () => {
		const columns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 140 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
		];
		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();

		for (const delta of [9, 10, 11, 20]) {
			dispatchMouse('mousemove', handle.ownerDocument, startX + delta);
			await expect
				.poll(() => {
					const { style } = getHeaderCell('firstName');
					if (style.flex.match(/^1\b/) || style.minWidth === '0px') {
						return false;
					}
					return Math.round(widthOf('firstName')) === 140 + delta;
				})
				.toBe(true);
		}

		dispatchMouse('mouseup', handle.ownerDocument, startX + 20);
	});

	it('keeps the drag overlay aligned with the resized cell right edge', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + 60);

		await expect
			.poll(() => {
				const overlay = getOverlay();
				const container = overlay.parentElement;
				if (!container) {
					return Number.POSITIVE_INFINITY;
				}
				const cellRightRelative =
					getHeaderCell('firstName').getBoundingClientRect().right - container.getBoundingClientRect().left;
				const overlayLeft = parseFloat(overlay.style.left);
				return Math.abs(overlayLeft - cellRightRelative);
			})
			.toBeLessThan(2);
		expect(getOverlay().getAttribute('data-resize-phase')).toBe('dragging');

		dispatchMouse('mouseup', handle.ownerDocument, startX + 60);
	});

	it('keeps the drag overlay aligned with a group boundary', async () => {
		await page.render(<DsTable columns={groupedColumns} data={rows} resizableColumns />);

		const handle = getHandle('identity');
		const startX = handle.getBoundingClientRect().right;

		dispatchPointer('pointerdown', handle, startX);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + 80);

		await expect
			.poll(() => {
				const overlay = getOverlay();
				const container = overlay.parentElement;
				if (!container) {
					return Number.POSITIVE_INFINITY;
				}
				const cellRightRelative =
					getHeaderCell('identity').getBoundingClientRect().right - container.getBoundingClientRect().left;
				return Math.abs(parseFloat(overlay.style.left) - cellRightRelative);
			})
			.toBeLessThan(2);

		dispatchMouse('mouseup', handle.ownerDocument, startX + 80);
	});

	it('places the resize handle so it straddles the cell right edge', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const cell = getHeaderCell('firstName');
		const handle = getHandle('firstName');
		const cellRight = cell.getBoundingClientRect().right;
		const handleRect = handle.getBoundingClientRect();

		expect(handleRect.left).toBeLessThan(cellRight);
		expect(handleRect.right).toBeGreaterThan(cellRight);
	});

	it('shows a full-height hover overlay aligned with the cell right edge', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		hoverHandle(getHandle('firstName'));

		await expect
			.poll(() => document.querySelector('[data-resize-overlay][data-resize-phase="hover"]'))
			.not.toBeNull();

		const overlay = getOverlay();
		const container = overlay.parentElement;
		if (!container) {
			throw new Error('Expected resize overlay container');
		}
		const cellRightRelative =
			getHeaderCell('firstName').getBoundingClientRect().right - container.getBoundingClientRect().left;
		expect(Math.abs(parseFloat(overlay.style.left) - cellRightRelative)).toBeLessThan(2);
	});

	it('switches the overlay to dragging on mouse down and back to hover on up while still over the handle', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const handleRect = handle.getBoundingClientRect();
		const startX = (handleRect.left + handleRect.right) / 2;
		const startY = (handleRect.top + handleRect.bottom) / 2;

		hoverHandle(handle);
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('hover');

		dispatchPointer('pointerdown', handle, startX, startY);
		await waitUntilDragging();
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('dragging');

		dispatchMouse('mouseup', handle.ownerDocument, startX, startY);
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('hover');
	});

	it('keeps the hover overlay aligned with the new cell right edge after mouseup on the handle', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const handleRect = handle.getBoundingClientRect();
		const startX = (handleRect.left + handleRect.right) / 2;
		const startY = (handleRect.top + handleRect.bottom) / 2;
		const startWidth = widthOf('firstName');
		const dragDelta = 40;

		hoverHandle(handle);
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('hover');

		dispatchPointer('pointerdown', handle, startX, startY);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + dragDelta, startY);
		await expect.poll(() => widthOf('firstName')).toBeGreaterThan(startWidth + 30);

		dispatchMouse('mouseup', handle.ownerDocument, startX + dragDelta, startY);

		await expect
			.poll(() => {
				const overlay = document.querySelector('[data-resize-overlay]');
				if (!(overlay instanceof HTMLElement) || overlay.getAttribute('data-resize-phase') !== 'hover') {
					return Number.POSITIVE_INFINITY;
				}
				const container = overlay.parentElement;
				if (!container) {
					return Number.POSITIVE_INFINITY;
				}
				const cellRightRelative =
					getHeaderCell('firstName').getBoundingClientRect().right - container.getBoundingClientRect().left;
				return Math.abs(parseFloat(overlay.style.left) - cellRightRelative);
			})
			.toBeLessThan(2);
	});

	it('clears the hover overlay after mouseup when the handle moved out from under the pointer', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const handleRect = handle.getBoundingClientRect();
		const startX = (handleRect.left + handleRect.right) / 2;
		const startY = (handleRect.top + handleRect.bottom) / 2;
		const startWidth = widthOf('firstName');
		const dragDelta = 80;

		hoverHandle(handle);
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('hover');

		dispatchPointer('pointerdown', handle, startX, startY);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + dragDelta, startY);
		await expect.poll(() => widthOf('firstName')).toBeGreaterThan(startWidth + 60);

		dispatchMouse('mouseup', handle.ownerDocument, startX + dragDelta, handleRect.bottom + 80);

		await expect.poll(() => document.querySelector('[data-resize-overlay]')).toBeNull();
	});

	it('does not show a stale hover overlay on the same tick as mouseup off the handle', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		const handleRect = handle.getBoundingClientRect();
		const startX = (handleRect.left + handleRect.right) / 2;
		const startY = (handleRect.top + handleRect.bottom) / 2;
		const startWidth = widthOf('firstName');
		const dragDelta = 80;

		hoverHandle(handle);
		await expect.poll(() => getOverlay().getAttribute('data-resize-phase')).toBe('hover');

		dispatchPointer('pointerdown', handle, startX, startY);
		await waitUntilDragging();
		dispatchMouse('mousemove', handle.ownerDocument, startX + dragDelta, startY);
		await expect.poll(() => widthOf('firstName')).toBeGreaterThan(startWidth + 60);

		dispatchMouse('mouseup', handle.ownerDocument, startX + dragDelta, handleRect.bottom + 80);
		await Promise.resolve();

		expect(document.querySelector('[data-resize-overlay]')).toBeNull();
	});

	it('clears the hover overlay when the pointer leaves without dragging', async () => {
		await page.render(<DsTable columns={sizedColumns} data={rows} resizableColumns />);

		const handle = getHandle('firstName');
		hoverHandle(handle);
		await expect.poll(() => document.querySelector('[data-resize-overlay]')).not.toBeNull();

		unhoverHandle(handle);
		await expect.poll(() => document.querySelector('[data-resize-overlay]')).toBeNull();
	});

	it('returns fill columns to flex when resizing is turned off', async () => {
		const columns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 200 },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue() },
		];
		const { rerender } = await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		await expect.poll(() => getHeaderCell('lastName').style.width).toMatch(/var\(--header-/);

		await rerender(<DsTable columns={columns} data={rows} />);

		await expect.poll(() => getHeaderCell('lastName').style.flex.startsWith('1')).toBe(true);
		expect(getHeaderCell('firstName').style.width).toBe('200px');
	});
});
