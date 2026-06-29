import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsTabs } from '../ds-tabs';
import type { DsTabsMenuActionItem } from '../ds-tabs.types';

const MENU_ACTIONS: DsTabsMenuActionItem[] = [
	{ value: 'edit', label: 'Edit' },
	{ value: 'duplicate', label: 'Duplicate' },
];

describe('DsTabs', () => {
	it('selects a tab and swaps the visible panel', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsTabs.Root defaultValue="overview" onValueChange={onValueChange}>
				<DsTabs.List>
					<DsTabs.Tab value="overview" label="Overview" icon="dashboard" />
					<DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} />
				</DsTabs.List>
				<DsTabs.Content value="overview">Overview panel</DsTabs.Content>
				<DsTabs.Content value="analytics">Analytics panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		await expect
			.element(page.getByRole('tab', { name: /Overview/i }))
			.toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByText('Overview panel')).toBeVisible();

		await page.getByRole('tab', { name: /Analytics/i }).click();

		expect(onValueChange).toHaveBeenCalledWith('analytics');
		await expect
			.element(page.getByRole('tab', { name: /Analytics/i }))
			.toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByText('Analytics panel')).toBeVisible();
		// `lazyMount` + `unmountOnExit`: the inactive panel is removed from the DOM.
		await expect.element(page.getByText('Overview panel')).not.toBeInTheDocument();
	});

	it('supports vertical orientation', async () => {
		await page.render(
			<DsTabs.Root defaultValue="profile" orientation="vertical">
				<DsTabs.List>
					<DsTabs.Tab value="profile" label="Profile" icon="person" />
					<DsTabs.Tab value="security" label="Security" icon="lock" badge={3} />
				</DsTabs.List>
				<DsTabs.Content value="profile">Profile panel</DsTabs.Content>
				<DsTabs.Content value="security">Security panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		await expect.element(page.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical');

		await page.getByRole('tab', { name: /Security/i }).click();
		await expect.element(page.getByText('Security panel')).toBeVisible();
	});

	it('does not select a disabled tab', async () => {
		await page.render(
			<DsTabs.Root defaultValue="active">
				<DsTabs.List>
					<DsTabs.Tab value="active" label="Active" icon="check_circle" />
					<DsTabs.Tab value="blocked" label="Blocked" icon="block" disabled />
				</DsTabs.List>
				<DsTabs.Content value="active">Active panel</DsTabs.Content>
				<DsTabs.Content value="blocked">Blocked panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		const blockedTab = page.getByRole('tab', { name: /Blocked/i });
		await expect.element(blockedTab).toBeDisabled();

		await blockedTab.click({ force: true });

		await expect.element(page.getByRole('tab', { name: /Active/i })).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByText('Active panel')).toBeVisible();
	});

	it('opens a tab menu and fires onMenuActionSelect', async () => {
		const onMenuActionSelect = vi.fn();

		await page.render(
			<DsTabs.Root defaultValue="projects">
				<DsTabs.List>
					<DsTabs.Tab
						value="projects"
						label="Projects"
						icon="folder"
						menuActionItems={MENU_ACTIONS}
						onMenuActionSelect={onMenuActionSelect}
					/>
				</DsTabs.List>
				<DsTabs.Content value="projects">Projects panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		const menuButton = page.getByRole('button', { name: /open menu/i });

		await menuButton.click();
		await expect.element(menuButton).toHaveAttribute('aria-expanded', 'true');

		await page.getByRole('menuitem', { name: 'Edit' }).click();

		expect(onMenuActionSelect).toHaveBeenCalledWith('edit');
		await expect.element(menuButton).toHaveAttribute('aria-expanded', 'false');
	});

	it('opens a tab menu with the keyboard', async () => {
		const onMenuActionSelect = vi.fn();

		await page.render(
			<DsTabs.Root defaultValue="projects">
				<DsTabs.List>
					<DsTabs.Tab
						value="projects"
						label="Projects"
						icon="folder"
						menuActionItems={MENU_ACTIONS}
						onMenuActionSelect={onMenuActionSelect}
					/>
				</DsTabs.List>
				<DsTabs.Content value="projects">Projects panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		const menuButton = page.getByRole('button', { name: /open menu/i });

		(menuButton.element() as HTMLElement).focus();
		await userEvent.keyboard('{Enter}');
		await expect.element(menuButton).toHaveAttribute('aria-expanded', 'true');

		await page.getByRole('menuitem', { name: 'Duplicate' }).click();

		expect(onMenuActionSelect).toHaveBeenCalledWith('duplicate');
	});

	it('shows a tooltip on hover', async () => {
		await page.render(
			<DsTabs.Root defaultValue="dashboard">
				<DsTabs.List>
					<DsTabs.Tab value="dashboard" label="Dashboard" icon="dashboard" tooltip="Analytics and insights" />
				</DsTabs.List>
				<DsTabs.Content value="dashboard">Dashboard panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		await page.getByRole('tab', { name: /Dashboard/i }).hover();

		await expect.element(page.getByRole('tooltip')).toHaveTextContent('Analytics and insights');
	});
});
