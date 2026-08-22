import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsBulkActions } from '../index';

function ControlledBulkActions({
	initialCount = 0,
	onClearSelection,
	placement,
}: {
	initialCount?: number;
	onClearSelection?: () => void;
	placement?: 'static' | 'floating';
}) {
	const [selectedCount, setSelectedCount] = useState(initialCount);

	return (
		<div style={{ position: 'relative', minHeight: 120 }}>
			<button type="button" onClick={() => setSelectedCount((count) => count + 1)}>
				Select item
			</button>
			<DsBulkActions
				placement={placement}
				selectedCount={selectedCount}
				actions={[
					{ icon: 'alarm', label: 'Notify', onClick: vi.fn() },
					{ icon: 'delete_outline', label: 'Delete', onClick: vi.fn() },
				]}
				onClearSelection={() => {
					onClearSelection?.();
					setSelectedCount(0);
				}}
			/>
		</div>
	);
}

describe('DsBulkActions', () => {
	it('does not render when selectedCount is 0', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={0} actions={[]} onClearSelection={vi.fn()} />
			</div>,
		);

		await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
	});

	it('renders the selection summary and actions when selectedCount is greater than 0', async () => {
		const notifyHandler = vi.fn();
		const deleteHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={2}
					actions={[
						{ icon: 'alarm', label: 'Notify', onClick: notifyHandler },
						{ icon: 'delete_outline', label: 'Delete', onClick: deleteHandler },
					]}
					onClearSelection={vi.fn()}
				/>
			</div>,
		);

		await expect.element(page.getByText('2')).toBeVisible();
		await expect.element(page.getByText(/items selected/i)).toBeVisible();

		await page.getByRole('button', { name: /notify/i }).click();
		expect(notifyHandler).toHaveBeenCalledOnce();

		await page.getByRole('button', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalledOnce();
	});

	it('renders custom action slots from the render branch', async () => {
		const assignHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={1}
					actions={[
						{
							key: 'assign',
							render: () => (
								<DsButtonV3 variant="tertiary" size="small" icon="person_add" onClick={assignHandler}>
									Assign
								</DsButtonV3>
							),
						},
					]}
					onClearSelection={vi.fn()}
				/>
			</div>,
		);

		await page.getByRole('button', { name: /assign/i }).click();
		expect(assignHandler).toHaveBeenCalledOnce();
	});

	it('calls onClearSelection when the dismiss control is activated', async () => {
		const onClearSelection = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={1}
					actions={[{ icon: 'alarm', label: 'Notify', onClick: vi.fn() }]}
					onClearSelection={onClearSelection}
				/>
			</div>,
		);

		await page.getByRole('button', { name: /clear selection/i }).click();
		expect(onClearSelection).toHaveBeenCalledOnce();
	});

	it('uses locale strings for the summary and dismiss control', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={4}
					locale={{
						itemsSelectedLabel: 'Rows picked',
						clearSelectionLabel: 'Dismiss selection',
					}}
					actions={[{ icon: 'alarm', label: 'Notify', onClick: vi.fn() }]}
					onClearSelection={vi.fn()}
				/>
			</div>,
		);

		await expect.element(page.getByText('Rows picked')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Dismiss selection' })).toBeVisible();
	});

	it('does not invoke disabled action handlers', async () => {
		const deleteHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={1}
					actions={[{ icon: 'delete_outline', label: 'Delete', disabled: true, onClick: deleteHandler }]}
					onClearSelection={vi.fn()}
				/>
			</div>,
		);

		const deleteButton = page.getByRole('button', { name: /delete/i });
		await expect.element(deleteButton).toBeDisabled();
		await deleteButton.click({ force: true });
		expect(deleteHandler).not.toHaveBeenCalled();
	});

	it('unmounts immediately when selectedCount returns to 0 in static placement', async () => {
		await page.render(<ControlledBulkActions placement="static" />);

		await page.getByRole('button', { name: 'Select item' }).click();
		await expect.element(page.getByText(/items selected/i)).toBeVisible();

		await page.getByRole('button', { name: /clear selection/i }).click();

		await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
	});

	it('unmounts after exit animation when selectedCount returns to 0 in floating placement', async () => {
		await page.render(<ControlledBulkActions placement="floating" />);

		await page.getByRole('button', { name: 'Select item' }).click();
		await expect.element(page.getByText(/items selected/i)).toBeVisible();

		await page.getByRole('button', { name: /clear selection/i }).click();

		await vi.waitFor(async () => {
			await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
		});
	});
});
