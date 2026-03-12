import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsIcon } from '../../ds-icon';
import { DsCheckbox } from '../../ds-checkbox';
import { DsTypography } from '../../ds-typography';

describe('DsDropdownMenu', () => {
	it('should open menu when trigger is clicked', async () => {
		await page.render(
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger>
					<span>Open Menu</span>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="item1">Item 1</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="item2">Item 2</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>,
		);

		await page.getByRole('button', { name: 'Open Menu' }).click();

		await expect.element(page.getByRole('menuitem', { name: 'Item 1' })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: 'Item 2' })).toBeVisible();
	});

	it('should call onSelect when an item is clicked', async () => {
		const onSelect = vi.fn();

		await page.render(
			<DsDropdownMenu.Root onSelect={onSelect}>
				<DsDropdownMenu.Trigger>
					<span>Actions</span>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="edit">Edit</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="delete">Delete</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>,
		);

		await page.getByRole('button', { name: 'Actions' }).click();
		await page.getByRole('menuitem', { name: 'Edit' }).click();

		expect(onSelect).toHaveBeenCalledWith('edit');
	});

	it('should not trigger onSelect for disabled items', async () => {
		const onSelect = vi.fn();

		await page.render(
			<DsDropdownMenu.Root onSelect={onSelect}>
				<DsDropdownMenu.Trigger>
					<span>Actions</span>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="disabled-item" disabled>
						Disabled
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>,
		);

		await page.getByRole('button', { name: 'Actions' }).click();
		await page.getByRole('menuitem', { name: 'Disabled' }).click({ force: true });

		expect(onSelect).not.toHaveBeenCalled();
	});

	describe('collapsible groups (uncontrolled)', () => {
		function CheckboxListDropdown() {
			const [open, setOpen] = useState(false);
			const [selected, setSelected] = useState(new Set(['item1']));

			const items = [
				{ id: 'item1', label: 'Menu text 1', description: 'Info Text' },
				{ id: 'item2', label: 'Menu text 2', description: 'Info Text' },
			];

			const groupedItems = [
				{ id: 'item3', label: 'Menu text 3', description: 'Info Text' },
				{ id: 'item4', label: 'Menu text 4', description: 'Info Text' },
				{ id: 'item5', label: 'Menu text 5', description: 'Info Text' },
			];

			const toggleSelection = (id: string) => {
				const next = new Set(selected);
				if (next.has(id)) {
					next.delete(id);
				} else {
					next.add(id);
				}
				setSelected(next);
			};

			return (
				<DsDropdownMenu.Root
					open={open}
					onOpenChange={setOpen}
					onSelect={toggleSelection}
					preventCloseOnSelect
				>
					<DsDropdownMenu.Trigger>
						<span>Multi Select ({selected.size})</span>
					</DsDropdownMenu.Trigger>
					<DsDropdownMenu.Content>
						{items.map((item) => (
							<DsDropdownMenu.Item key={item.id} value={item.id}>
								<DsCheckbox tabIndex={-1} checked={selected.has(item.id)} />
								<div>
									<DsTypography variant="body-sm-reg">{item.label}</DsTypography>
									<DsTypography variant="body-xs-reg">{item.description}</DsTypography>
								</div>
							</DsDropdownMenu.Item>
						))}
						<DsDropdownMenu.ItemGroup>
							<DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
							<DsDropdownMenu.ItemGroupContent>
								{groupedItems.map((item) => (
									<DsDropdownMenu.Item key={item.id} value={item.id}>
										<DsCheckbox tabIndex={-1} checked={selected.has(item.id)} />
										<div>
											<DsTypography variant="body-sm-reg">{item.label}</DsTypography>
											<DsTypography variant="body-xs-reg">{item.description}</DsTypography>
										</div>
									</DsDropdownMenu.Item>
								))}
							</DsDropdownMenu.ItemGroupContent>
						</DsDropdownMenu.ItemGroup>
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>
			);
		}

		it('should show group label and items when expanded', async () => {
			await page.render(<CheckboxListDropdown />);

			await page.getByRole('button', { name: /Multi Select/i }).click();

			await expect.element(page.getByText('Group Name')).toBeVisible();
			await expect.element(page.getByText('Menu text 3')).toBeVisible();
		});

		it('should collapse and expand group when label is clicked', async () => {
			await page.render(<CheckboxListDropdown />);

			await page.getByRole('button', { name: /Multi Select/i }).click();

			const groupLabel = page.getByRole('button', { name: 'Group Name' });

			// Collapse.
			await groupLabel.click();
			await expect.element(page.getByText('Menu text 3')).not.toBeInTheDocument();
			await expect.element(page.getByText('Menu text 4')).not.toBeInTheDocument();

			// Expand.
			await groupLabel.click();
			await expect.element(page.getByText('Menu text 3')).toBeVisible();
			await expect.element(page.getByText('Menu text 4')).toBeVisible();
		});
	});

	describe('collapsible groups (controlled)', () => {
		function ControlledGroupDropdown({
			onCollapsedChange,
		}: {
			onCollapsedChange: (collapsed: boolean) => void;
		}) {
			const [collapsed, setCollapsed] = useState(false);

			const handleCollapsedChange = (newCollapsed: boolean) => {
				setCollapsed(newCollapsed);
				onCollapsedChange(newCollapsed);
			};

			return (
				<DsDropdownMenu.Root>
					<DsDropdownMenu.Trigger>
						<span>Controlled Group</span>
					</DsDropdownMenu.Trigger>
					<DsDropdownMenu.Content>
						<DsDropdownMenu.ItemGroup collapsed={collapsed} onCollapsedChange={handleCollapsedChange}>
							<DsDropdownMenu.ItemGroupLabel>Settings</DsDropdownMenu.ItemGroupLabel>
							<DsDropdownMenu.ItemGroupContent>
								<DsDropdownMenu.Item value="profile">
									<DsIcon icon="person" />
									<span>Profile</span>
								</DsDropdownMenu.Item>
								<DsDropdownMenu.Item value="preferences">
									<DsIcon icon="settings" />
									<span>Preferences</span>
								</DsDropdownMenu.Item>
								<DsDropdownMenu.Item value="notifications">
									<DsIcon icon="notifications" />
									<span>Notifications</span>
								</DsDropdownMenu.Item>
							</DsDropdownMenu.ItemGroupContent>
						</DsDropdownMenu.ItemGroup>
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>
			);
		}

		it('should show group items initially', async () => {
			const onCollapsedChange = vi.fn();

			await page.render(<ControlledGroupDropdown onCollapsedChange={onCollapsedChange} />);

			await page.getByRole('button', { name: /Controlled Group/i }).click();

			await expect.element(page.getByRole('button', { name: 'Settings' })).toBeVisible();
			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
		});

		it('should call onCollapsedChange when toggling group', async () => {
			const onCollapsedChange = vi.fn();

			await page.render(<ControlledGroupDropdown onCollapsedChange={onCollapsedChange} />);

			await page.getByRole('button', { name: /Controlled Group/i }).click();

			const groupLabel = page.getByRole('button', { name: 'Settings' });

			// Collapse.
			await groupLabel.click();
			expect(onCollapsedChange).toHaveBeenCalledWith(true);
			expect(onCollapsedChange).toHaveBeenCalledTimes(1);
			await expect.element(page.getByText('Profile')).not.toBeInTheDocument();

			// Expand.
			await groupLabel.click();
			expect(onCollapsedChange).toHaveBeenCalledWith(false);
			expect(onCollapsedChange).toHaveBeenCalledTimes(2);
			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
		});
	});
});
