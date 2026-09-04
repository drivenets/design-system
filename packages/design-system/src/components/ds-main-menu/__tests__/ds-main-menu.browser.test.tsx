import type { FC, SVGProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import { DsMainMenu } from '../index';
import { COMING_SOON_TOOLTIP, type DsMainMenuItem, type DsMainMenuUtilityLink } from '../ds-main-menu.types';

const EXPANDED_ITEMS: DsMainMenuItem[] = [
	{
		id: 'dashboard',
		label: 'My dashboard',
		icon: 'speed',
		description: 'Track and complete your assigned tasks.',
	},
	{
		id: 'planning',
		label: 'Network planning',
		icon: 'account_tree',
		description: 'Model capacity before rollout.',
		href: '/planning',
		state: 'extend',
	},
	{
		id: 'ai-ops',
		label: 'AI Ops',
		icon: 'psychology',
		description: 'Automated anomaly detection.',
		state: 'comingSoon',
	},
	{
		id: 'break-glass',
		label: 'Break glass',
		icon: 'lock',
		description: 'Emergency privileged access.',
		state: 'disabled',
	},
];

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

const TestSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg viewBox="0 0 42 42" {...props}>
		<circle cx="21" cy="21" r="16" />
	</svg>
);

const TRIGGER = <button type="button">Open menu</button>;

const openMenu = async () => {
	await userEvent.click(page.getByRole('button', { name: 'Open menu' }));
};

// Check whether the popover is closed via aria-expanded on the trigger
// (Ark UI sets aria-expanded on the trigger element; not.toBeVisible() on hidden panel elements
// is unreliable in Vitest browser because they remain in the DOM with [hidden])
const triggerLocator = () => page.getByRole('button', { name: 'Open menu' });
const assertClosed = () => expect.element(triggerLocator()).toHaveAttribute('aria-expanded', 'false');

describe('DsMainMenu — trigger and open/close', () => {
	it('shows nothing until the trigger is clicked', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={UTILITY_LINKS} />);

		await assertClosed();

		await openMenu();

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});

	it('opens on Enter key pressed on the trigger', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		page.getByRole('button', { name: 'Open menu' }).element().focus();
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});

	it('opens on Space key pressed on the trigger', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		page.getByRole('button', { name: 'Open menu' }).element().focus();
		await userEvent.keyboard('{ }');

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});

	it('closes automatically when an activatable tile is clicked', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		await openMenu();
		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();

		await userEvent.click(page.getByRole('button', { name: 'My dashboard' }));

		await assertClosed();
	});

	it('closes automatically when a utility link is clicked', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={UTILITY_LINKS} />);

		await openMenu();
		await userEvent.click(page.getByRole('button', { name: 'Help & Support' }));

		await expect.element(triggerLocator()).toHaveAttribute('aria-expanded', 'false');
	});

	it('does not close when a disabled tile is clicked', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		await openMenu();
		(page.getByRole('button', { name: 'Disabled app' }).element() as HTMLButtonElement).click();

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});

	it('does not close when a coming soon tile is clicked', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		await openMenu();
		(page.getByRole('button', { name: 'Coming soon app' }).element() as HTMLButtonElement).click();

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});
});

describe('DsMainMenu — controlled open', () => {
	it('respects the open prop and calls onOpenChange', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={ITEMS}
				utilityLinks={[]}
				open={false}
				onOpenChange={onOpenChange}
			/>,
		);

		await assertClosed();

		await userEvent.click(page.getByRole('button', { name: 'Open menu' }));

		expect(onOpenChange).toHaveBeenCalledWith(true);
		// panel stays closed because open prop is still false
		await assertClosed();
	});

	it('calls onOpenChange(false) when activatable tile is clicked in controlled mode', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={ITEMS}
				utilityLinks={[]}
				open={true}
				onOpenChange={onOpenChange}
			/>,
		);

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();

		await userEvent.click(page.getByRole('button', { name: 'My dashboard' }));

		expect(onOpenChange).toHaveBeenCalledWith(false);
	});
});

describe('DsMainMenu — tile and utility link behavior', () => {
	it('renders app tiles and utility links inside a navigation landmark', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={UTILITY_LINKS} />);

		await openMenu();

		const nav = page.getByRole('navigation', { name: 'Main menu' });
		await expect.element(nav).toBeVisible();
		await expect.element(page.getByRole('link', { name: 'Inventory' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'My dashboard' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Help & Support' })).toBeVisible();
		await expect.element(page.getByRole('link', { name: 'Knowledge Center' })).toBeVisible();
	});

	it('marks the selected tile with aria-current="page"', async () => {
		await page.render(
			<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} selectedId="dashboard" />,
		);

		await openMenu();

		const selectedTile = page.getByRole('button', { name: 'My dashboard' });
		expect(selectedTile.element().getAttribute('aria-current')).toBe('page');
	});

	it('calls onItemSelect for activatable tiles and utility links', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={UTILITY_LINKS} onItemSelect={onItemSelect} />,
		);

		await openMenu();
		await userEvent.click(page.getByRole('button', { name: 'My dashboard' }));

		// Reopen after auto-close
		await openMenu();
		await userEvent.click(page.getByRole('button', { name: 'Help & Support' }));

		expect(onItemSelect).toHaveBeenCalledTimes(2);
		expect(onItemSelect).toHaveBeenNthCalledWith(1, 'dashboard');
		expect(onItemSelect).toHaveBeenNthCalledWith(2, 'help');
	});

	it('calls onItemSelect for href tiles without navigating away', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={[{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' }]}
				utilityLinks={[]}
				onItemSelect={(id) => {
					onItemSelect(id);
				}}
			/>,
		);

		await openMenu();

		const inventoryLink = page.getByRole('link', { name: 'Inventory' });
		inventoryLink.element().addEventListener('click', (event) => event.preventDefault());
		await userEvent.click(inventoryLink);

		expect(onItemSelect).toHaveBeenCalledWith('inventory');
	});

	it('does not call onItemSelect for disabled or coming soon tiles', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} onItemSelect={onItemSelect} />,
		);

		await openMenu();

		(page.getByRole('button', { name: 'Disabled app' }).element() as HTMLButtonElement).click();
		(page.getByRole('button', { name: 'Coming soon app' }).element() as HTMLButtonElement).click();

		expect(onItemSelect).not.toHaveBeenCalled();
	});

	it('exposes disabled tiles outside the tab order', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		await openMenu();

		const disabledTile = page.getByRole('button', { name: 'Disabled app' });
		expect(disabledTile.element().tabIndex).toBe(-1);
		expect(disabledTile.element().getAttribute('aria-disabled')).toBe('true');
	});

	it('shows the coming soon tooltip copy on hover', async () => {
		await page.render(<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} />);

		await openMenu();

		const comingSoonTile = page.getByRole('button', { name: 'Coming soon app' });
		const badge = comingSoonTile.element().querySelector('[class*="badge"]') as HTMLElement;

		await page.elementLocator(badge).hover();

		await expect
			.element(page.getByRole('tooltip', { name: COMING_SOON_TOOLTIP }), { timeout: 3000 })
			.toBeVisible();
	});

	it('renders an SVG component as the tile graphic', async () => {
		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={[{ id: 'dashboard', label: 'My dashboard', icon: TestSvg }]}
				utilityLinks={[]}
			/>,
		);

		await openMenu();

		const tile = page.getByRole('button', { name: 'My dashboard' });
		await expect.element(tile).toBeVisible();
		expect(tile.element().querySelector('svg')).not.toBeNull();
	});
});

describe('DsMainMenu — expanded variant', () => {
	it('renders each item as a card with heading and description', async () => {
		await page.render(
			<DsMainMenu trigger={TRIGGER} items={EXPANDED_ITEMS} utilityLinks={[]} variant="expanded" />,
		);

		await openMenu();

		await expect.element(page.getByRole('button', { name: /^My dashboard/ })).toBeVisible();
		await expect.element(page.getByText('Track and complete your assigned tasks.')).toBeVisible();
	});

	it('ignores description in the compact variant', async () => {
		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={[{ id: 'dashboard', label: 'My dashboard', icon: 'speed', description: 'Hidden in compact.' }]}
				utilityLinks={[]}
			/>,
		);

		await openMenu();

		await expect.element(page.getByRole('button', { name: 'My dashboard' })).toBeVisible();
		await expect.element(page.getByText('Hidden in compact.')).not.toBeInTheDocument();
	});

	it('marks the selected card with aria-current="page"', async () => {
		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={EXPANDED_ITEMS}
				utilityLinks={[]}
				variant="expanded"
				selectedId="dashboard"
			/>,
		);

		await openMenu();

		const selectedCard = page.getByRole('button', { name: /^My dashboard/ });
		expect(selectedCard.element().getAttribute('aria-current')).toBe('page');
	});

	it('fires onItemSelect and closes when a card primary target is activated', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={EXPANDED_ITEMS}
				utilityLinks={[]}
				variant="expanded"
				onItemSelect={onItemSelect}
			/>,
		);

		await openMenu();
		await userEvent.click(page.getByRole('button', { name: /^My dashboard/ }));

		expect(onItemSelect).toHaveBeenCalledWith('dashboard');
		await assertClosed();
	});

	it('renders the extend action button as a sibling of the primary link, not nested inside it', async () => {
		await page.render(
			<DsMainMenu trigger={TRIGGER} items={EXPANDED_ITEMS} utilityLinks={[]} variant="expanded" />,
		);

		await openMenu();

		const primary = page.getByRole('link', { name: /^Network planning/ }).element();
		const actionButton = page.getByRole('button', { name: 'Open Network planning' }).element();

		expect(actionButton.closest('a')).toBeNull();
		expect(primary.contains(actionButton)).toBe(false);
	});

	it('fires onItemSelect and closes when the extend action button is activated', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={EXPANDED_ITEMS}
				utilityLinks={[]}
				variant="expanded"
				onItemSelect={onItemSelect}
			/>,
		);

		await openMenu();
		await userEvent.click(page.getByRole('button', { name: 'Open Network planning' }));

		expect(onItemSelect).toHaveBeenCalledWith('planning');
		await assertClosed();
	});

	it('exposes disabled cards outside the tab order and does not activate them', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={EXPANDED_ITEMS}
				utilityLinks={[]}
				variant="expanded"
				onItemSelect={onItemSelect}
			/>,
		);

		await openMenu();

		const disabledCard = page.getByRole('button', { name: /^Break glass/ });
		expect(disabledCard.element().tabIndex).toBe(-1);
		expect(disabledCard.element().getAttribute('aria-disabled')).toBe('true');

		(disabledCard.element() as HTMLButtonElement).click();

		expect(onItemSelect).not.toHaveBeenCalled();
		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});

	it('keeps coming soon cards non-activatable and shows the tooltip copy', async () => {
		const onItemSelect = vi.fn();

		await page.render(
			<DsMainMenu
				trigger={TRIGGER}
				items={EXPANDED_ITEMS}
				utilityLinks={[]}
				variant="expanded"
				onItemSelect={onItemSelect}
			/>,
		);

		await openMenu();

		const comingSoonCard = page.getByRole('button', { name: /^AI Ops/ });
		expect(comingSoonCard.element().getAttribute('aria-disabled')).toBe('true');

		const badge = comingSoonCard
			.element()
			.closest('li')
			?.querySelector('[class*="expandedActionBadge"]') as HTMLElement;
		await page.elementLocator(badge).hover();
		await expect
			.element(page.getByRole('tooltip', { name: COMING_SOON_TOOLTIP }), { timeout: 3000 })
			.toBeVisible();

		(comingSoonCard.element() as HTMLButtonElement).click();

		expect(onItemSelect).not.toHaveBeenCalled();
		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();
	});
});

describe('DsMainMenu — getAnchorElement', () => {
	it('renders the panel when getAnchorElement is provided', async () => {
		const anchor = document.createElement('div');
		document.body.appendChild(anchor);

		await page.render(
			<DsMainMenu trigger={TRIGGER} items={ITEMS} utilityLinks={[]} getAnchorElement={() => anchor} />,
		);

		await openMenu();

		await expect.element(page.getByRole('navigation', { name: 'Main menu' })).toBeVisible();

		anchor.remove();
	});
});
