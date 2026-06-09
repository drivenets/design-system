import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { Action } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

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
		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Tanner');
		await expect.element(page.getByRole('row').nth(2)).toHaveTextContent('Kevin');

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

		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Kevin');
		await expect.element(page.getByRole('row').nth(2)).toHaveTextContent('Tanner');
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

		await expect.element(page.getByText(/items selected/i)).toBeVisible();

		await page.getByRole('button', { name: /notify/i }).click();
		expect(notifyHandler).toHaveBeenCalled();

		await page.getByRole('button', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalled();

		await page.getByRole('checkbox').nth(1).click();
		await page.getByRole('checkbox').nth(2).click();

		await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
	});
});
