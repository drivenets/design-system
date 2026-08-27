import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsBulkActions } from '../index';

const overflowItems = (handlers: Record<string, () => void> = {}) => (
	<>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={handlers.Notify ?? vi.fn()} />
		<DsBulkActions.Item icon="folder_open" label="Folder" onClick={handlers.Folder ?? vi.fn()} />
		<DsBulkActions.Item icon="share" label="Share" onClick={handlers.Share ?? vi.fn()} />
		<DsBulkActions.Item icon="edit" label="Edit" onClick={handlers.Edit ?? vi.fn()} />
		<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={handlers.Duplicate ?? vi.fn()} />
		<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={handlers.Delete ?? vi.fn()} />
	</>
);

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
				onClearSelection={() => {
					onClearSelection?.();
					setSelectedCount(0);
				}}
			>
				<DsBulkActions.Item icon="alarm" label="Notify" onClick={vi.fn()} />
				<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={vi.fn()} />
			</DsBulkActions>
		</div>
	);
}

describe('DsBulkActions', () => {
	it('does not render when selectedCount is 0', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={0} onClearSelection={vi.fn()} />
			</div>,
		);

		await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
	});

	it('renders the selection summary and fires shorthand Item clicks', async () => {
		const notifyHandler = vi.fn();
		const deleteHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={2} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={notifyHandler} />
					<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={deleteHandler} />
				</DsBulkActions>
			</div>,
		);

		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).toBeVisible();
		await expect.element(page.getByText('2')).toBeVisible();

		await page.getByRole('button', { name: /notify/i }).click();
		expect(notifyHandler).toHaveBeenCalledOnce();

		await page.getByRole('button', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalledOnce();
	});

	it('sizes the toolbar to its content instead of stretching to the parent', async () => {
		const parentWidth = 800;

		await page.render(
			<div style={{ width: parentWidth }}>
				<DsBulkActions selectedCount={2} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		const toolbar = page.getByRole('toolbar', { name: /items selected/i });
		await expect.element(toolbar).toBeVisible();

		const toolbarWidth = (toolbar.element() as HTMLElement).getBoundingClientRect().width;
		expect(toolbarWidth).toBeLessThan(parentWidth);
	});

	it('keeps default action items at least 64px wide', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label="Go" onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		const actionButton = page.getByRole('button', { name: 'Go' });
		await expect.element(actionButton).toBeVisible();

		expect((actionButton.element() as HTMLElement).getBoundingClientRect().width).toBeGreaterThanOrEqual(64);
	});

	it('does not collapse into More without an explicit width constraint', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={4} onClearSelection={vi.fn()}>
					{overflowItems()}
				</DsBulkActions>
			</div>,
		);

		await expect.element(page.getByRole('button', { name: 'Notify' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Delete' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'More' })).not.toBeInTheDocument();
	});

	it('collapses rightmost actions into More when width is constrained', async () => {
		const deleteHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={4} onClearSelection={vi.fn()} style={{ width: 420 }}>
					{overflowItems({ Delete: deleteHandler })}
				</DsBulkActions>
			</div>,
		);

		await expect.element(page.getByRole('button', { name: 'Notify' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'More' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Delete' })).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'More' }).click();
		await expect.element(page.getByRole('menuitem', { name: /delete/i })).toBeVisible();

		await page.getByRole('menuitem', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalledOnce();
	});

	it('hides the summary label after actions have collapsed to one visible slot', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={4} onClearSelection={vi.fn()} style={{ width: 220 }}>
					{overflowItems()}
				</DsBulkActions>
			</div>,
		);

		await expect.element(page.getByText('4')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Notify' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'More' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /clear selection/i })).toBeVisible();
		expect((page.getByRole('toolbar').element() as HTMLElement).innerText).not.toContain('Items selected');
	});

	it('opens a declarative Item menu and nested submenu', async () => {
		const copyHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 280, padding: 48 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item
						icon="share"
						label="Share"
						menu={[
							{ value: 'email', label: 'Email', icon: 'mail', onSelect: vi.fn() },
							{
								value: 'more',
								label: 'More options',
								icon: 'link',
								menu: [{ value: 'copy-link', label: 'Copy link', onSelect: copyHandler }],
							},
						]}
					/>
				</DsBulkActions>
			</div>,
		);

		await page.getByRole('button', { name: /share/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /email/i })).toBeVisible();

		await page.getByRole('menuitem', { name: /more options/i }).click();
		await expect.element(page.getByRole('menuitem', { name: /copy link/i })).toBeVisible();

		await page.getByRole('menuitem', { name: /copy link/i }).click();
		expect(copyHandler).toHaveBeenCalledOnce();
	});

	it('does not open a disabled overflowed menu Item', async () => {
		const emailHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 200 }}>
				<DsBulkActions selectedCount={3} onClearSelection={vi.fn()} style={{ width: 280 }}>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={vi.fn()} />
					<DsBulkActions.Item
						icon="share"
						label="Share"
						disabled
						menu={[{ value: 'email', label: 'Email', onSelect: emailHandler }]}
					/>
					<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		await page.getByRole('button', { name: 'More' }).click();

		const shareItem = page.getByRole('menuitem', { name: /share/i });
		await expect.element(shareItem).toBeDisabled();
		await shareItem.click({ force: true });
		await expect.element(page.getByRole('menuitem', { name: /email/i })).not.toBeInTheDocument();
		expect(emailHandler).not.toHaveBeenCalled();
	});

	it('places the menu flyout above the trigger when menuPlacement is top', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 240, paddingTop: 160 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()} menuPlacement="top">
					<DsBulkActions.Item
						icon="share"
						label="Share"
						menu={[{ value: 'email', label: 'Email', onSelect: vi.fn() }]}
					/>
				</DsBulkActions>
			</div>,
		);

		const trigger = page.getByRole('button', { name: /share/i });
		await trigger.click();

		const menu = page.getByRole('menu');
		await expect.element(menu).toBeVisible();

		const triggerBox = (trigger.element() as HTMLElement).getBoundingClientRect();
		const menuBox = (menu.element() as HTMLElement).getBoundingClientRect();
		expect(menuBox.bottom).toBeLessThanOrEqual(triggerBox.top + 8);
	});

	it('places the menu flyout below the trigger when menuPlacement is bottom', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 240 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()} menuPlacement="bottom">
					<DsBulkActions.Item
						icon="share"
						label="Share"
						menu={[{ value: 'email', label: 'Email', onSelect: vi.fn() }]}
					/>
				</DsBulkActions>
			</div>,
		);

		const trigger = page.getByRole('button', { name: /share/i });
		await trigger.click();

		const menu = page.getByRole('menu');
		await expect.element(menu).toBeVisible();

		const triggerBox = (trigger.element() as HTMLElement).getBoundingClientRect();
		const menuBox = (menu.element() as HTMLElement).getBoundingClientRect();
		expect(menuBox.top).toBeGreaterThanOrEqual(triggerBox.bottom - 8);
	});

	it('shows the full action label in a tooltip on hover', async () => {
		const label = 'Notify all stakeholders';

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label={label} onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		await page.getByRole('button', { name: label }).hover();
		await expect.element(page.getByRole('tooltip', { name: label })).toBeVisible();
	});

	it('shows the full menu action label in a tooltip on hover', async () => {
		const label = 'Share with everyone in the workspace';

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item
						icon="share"
						label={label}
						menu={[{ value: 'email', label: 'Email', onSelect: vi.fn() }]}
					/>
				</DsBulkActions>
			</div>,
		);

		await page.getByRole('button', { name: label }).hover();
		await expect.element(page.getByRole('tooltip', { name: label })).toBeVisible();
	});

	it('sizes action items as fixed, fit-content, or a custom width', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={3} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" onClick={vi.fn()} />
					<DsBulkActions.Item
						icon="share"
						label="Share with everyone in the workspace"
						width="fit-content"
						onClick={vi.fn()}
					/>
					<DsBulkActions.Item
						icon="edit"
						label="Edit selected records permanently"
						width={120}
						onClick={vi.fn()}
					/>
				</DsBulkActions>
			</div>,
		);

		const FIXED_MAX_PX = 84;
		const CUSTOM_WIDTH_PX = 120;

		const fixed = page.getByRole('button', { name: 'Notify all stakeholders' });
		const hug = page.getByRole('button', { name: 'Share with everyone in the workspace' });
		const custom = page.getByRole('button', { name: 'Edit selected records permanently' });

		expect((fixed.element() as HTMLElement).getBoundingClientRect().width).toBeLessThanOrEqual(FIXED_MAX_PX);
		expect((hug.element() as HTMLElement).getBoundingClientRect().width).toBeGreaterThan(FIXED_MAX_PX);

		const customWidth = (custom.element() as HTMLElement).getBoundingClientRect().width;
		expect(customWidth).toBeGreaterThanOrEqual(CUSTOM_WIDTH_PX - 1);
		expect(customWidth).toBeLessThanOrEqual(CUSTOM_WIDTH_PX + 1);
	});

	it('calls onClearSelection when the dismiss control is activated', async () => {
		const onClearSelection = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={onClearSelection}>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		await page.getByRole('button', { name: /clear selection/i }).click();
		expect(onClearSelection).toHaveBeenCalledOnce();
	});

	it('uses locale strings for the summary, dismiss control, and More trigger', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions
					selectedCount={4}
					locale={{
						itemsSelectedLabel: 'Rows picked',
						clearSelectionLabel: 'Dismiss selection',
						moreActionsLabel: 'More actions',
					}}
					onClearSelection={vi.fn()}
					style={{ width: 420 }}
				>
					{overflowItems()}
				</DsBulkActions>
			</div>,
		);

		await expect.element(page.getByRole('toolbar', { name: 'Rows picked' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Dismiss selection' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'More actions' })).toBeVisible();
	});

	it('fills the action on hover and keeps disabled actions fully opaque', async () => {
		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={vi.fn()} />
					<DsBulkActions.Item icon="delete_outline" label="Delete" disabled onClick={vi.fn()} />
				</DsBulkActions>
			</div>,
		);

		const notifyButton = page.getByRole('button', { name: /notify/i });
		await expect.element(notifyButton).toBeVisible();

		const notifyEl = notifyButton.element() as HTMLElement;
		const restBackground = getComputedStyle(notifyEl).backgroundColor;

		await notifyButton.hover();
		await expect.poll(() => getComputedStyle(notifyEl).backgroundColor).not.toBe(restBackground);

		const deleteEl = page.getByRole('button', { name: /delete/i }).element() as HTMLElement;
		expect(getComputedStyle(deleteEl).opacity).toBe('1');
	});

	it('does not invoke disabled action handlers', async () => {
		const deleteHandler = vi.fn();

		await page.render(
			<div style={{ position: 'relative', minHeight: 120 }}>
				<DsBulkActions selectedCount={1} onClearSelection={vi.fn()}>
					<DsBulkActions.Item icon="delete_outline" label="Delete" disabled onClick={deleteHandler} />
				</DsBulkActions>
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
		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).toBeVisible();

		await page.getByRole('button', { name: /clear selection/i }).click();

		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).not.toBeInTheDocument();
	});

	it('unmounts after exit animation when selectedCount returns to 0 in floating placement', async () => {
		await page.render(<ControlledBulkActions placement="floating" />);

		await page.getByRole('button', { name: 'Select item' }).click();
		await expect.element(page.getByRole('toolbar', { name: /items selected/i })).toBeVisible();

		await page.getByRole('button', { name: /clear selection/i }).click();

		await vi.waitFor(async () => {
			await expect.element(page.getByRole('toolbar', { name: /items selected/i })).not.toBeInTheDocument();
		});
	});
});
