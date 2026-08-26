import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import { DsMainMenu } from '../index';
import { COMING_SOON_TOOLTIP, type DsMainMenuItem, type DsMainMenuUtilityLink } from '../ds-main-menu.types';

const ITEMS: DsMainMenuItem[] = [
	{ id: 'dashboard', label: 'My dashboard', icon: 'speed' },
	{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' },
	{ id: 'disabled-app', label: 'Disabled app', icon: 'block', state: 'disabled' },
	{ id: 'coming-soon-app', label: 'Coming soon app', icon: 'handyman', state: 'comingSoon' },
];

const UTILITY_LINKS: DsMainMenuUtilityLink[] = [
	{ id: 'help', label: 'Help & Support', icon: 'contact_support' },
	{ id: 'docs', label: 'Knowledge Center', icon: 'local_library', href: '/docs' },
];

describe('DsMainMenu', () => {
	it('renders app tiles and utility links inside a navigation landmark', async () => {
		await page.render(<DsMainMenu items={ITEMS} utilityLinks={UTILITY_LINKS} />);

		const nav = page.getByRole('navigation', { name: 'Main menu' });
		await expect.element(nav).toBeVisible();
		await expect.element(page.getByRole('link', { name: 'Inventory' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'My dashboard' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Help & Support' })).toBeVisible();
		await expect.element(page.getByRole('link', { name: 'Knowledge Center' })).toBeVisible();
	});

	it('marks the selected tile with aria-current="page"', async () => {
		await page.render(<DsMainMenu items={ITEMS} utilityLinks={[]} selectedId="dashboard" />);

		const selectedTile = page.getByRole('button', { name: 'My dashboard' });
		expect(selectedTile.element().getAttribute('aria-current')).toBe('page');
	});

	it('calls onItemSelect for activatable tiles and utility links', async () => {
		const onItemSelect = vi.fn();

		await page.render(<DsMainMenu items={ITEMS} utilityLinks={UTILITY_LINKS} onItemSelect={onItemSelect} />);

		await userEvent.click(page.getByRole('button', { name: 'My dashboard' }));
		await userEvent.click(page.getByRole('button', { name: 'Help & Support' }));

		expect(onItemSelect).toHaveBeenCalledTimes(2);
		expect(onItemSelect).toHaveBeenNthCalledWith(1, 'dashboard');
		expect(onItemSelect).toHaveBeenNthCalledWith(2, 'help');
	});

	it('calls onItemSelect for href tiles without navigating away', async () => {
		const onItemSelect = vi.fn((id: string, event?: Event) => {
			event?.preventDefault();
		});

		await page.render(
			<DsMainMenu
				items={[{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' }]}
				utilityLinks={[]}
				onItemSelect={(id) => {
					onItemSelect(id);
				}}
			/>,
		);

		const inventoryLink = page.getByRole('link', { name: 'Inventory' });
		inventoryLink.element().addEventListener('click', (event) => event.preventDefault());
		await userEvent.click(inventoryLink);

		expect(onItemSelect).toHaveBeenCalledWith('inventory');
	});

	it('does not call onItemSelect for disabled or coming soon tiles', async () => {
		const onItemSelect = vi.fn();

		await page.render(<DsMainMenu items={ITEMS} utilityLinks={[]} onItemSelect={onItemSelect} />);

		(page.getByRole('button', { name: 'Disabled app' }).element() as HTMLButtonElement).click();
		(page.getByRole('button', { name: 'Coming soon app' }).element() as HTMLButtonElement).click();

		expect(onItemSelect).not.toHaveBeenCalled();
	});

	it('exposes disabled tiles outside the tab order', async () => {
		await page.render(<DsMainMenu items={ITEMS} utilityLinks={[]} />);

		const disabledTile = page.getByRole('button', { name: 'Disabled app' });
		expect(disabledTile.element().tabIndex).toBe(-1);
		expect(disabledTile.element().getAttribute('aria-disabled')).toBe('true');
	});

	it('shows the coming soon tooltip copy on hover', async () => {
		await page.render(<DsMainMenu items={ITEMS} utilityLinks={[]} />);

		await userEvent.hover(page.getByRole('button', { name: 'Coming soon app' }));

		await expect.element(page.getByRole('tooltip', { name: COMING_SOON_TOOLTIP })).toBeVisible();
	});
});
