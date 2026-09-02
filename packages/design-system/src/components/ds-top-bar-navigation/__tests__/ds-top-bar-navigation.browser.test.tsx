import type { MouseEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import DsTopBarNavigation from '../ds-top-bar-navigation';
import { DsBreadcrumb } from '../../ds-breadcrumb';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
import { DsMainMenu } from '../../ds-main-menu';

/** The badge is `aria-hidden`, so it is reachable by text but never by role. */
const notificationsBadge = (text: string) => page.getByText(text, { exact: true });

/**
 * DsButtonV3's `small` geometry pads the bell horizontally (`4px 12px` today); its icon-only
 * geometry collapses every side to `4px`. Comparing both edges pins the bell to the padded one.
 */
const horizontalPadding = (button: Element) => {
	const { paddingLeft, paddingRight } = getComputedStyle(button);

	return { paddingLeft, paddingRight };
};

const notificationsLocale = {
	notificationsButtonLabel: 'Alerts',
	notificationsButtonLabelWithCount: (count: number) => `Alerts (${String(count)})`,
};

/** 1x1 transparent GIF — loads synchronously, so the avatar swaps off its initials fallback. */
const avatarSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

describe('DsTopBarNavigation', () => {
	describe('Logo', () => {
		it('renders the slotted logo glyph and wordmark, glyph first', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo logo={<span>Glyph</span>} wordmark="DriveNets" />
				</DsTopBarNavigation>,
			);

			const glyph = page.getByText('Glyph');
			const wordmark = page.getByText('DriveNets');

			await expect.element(glyph).toBeVisible();
			await expect.element(wordmark).toBeVisible();

			// The glyph node sits in its own fixed-size slot, laid out before the wordmark.
			const glyphSlot = glyph.element().parentElement as HTMLElement;
			const wordmarkRect = wordmark.element().getBoundingClientRect();

			expect(wordmarkRect.left).toBeGreaterThanOrEqual(glyphSlot.getBoundingClientRect().right);
		});

		it('renders an apps button that calls onAppsClick', async () => {
			const onAppsClick = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo wordmark="DriveNets" onAppsClick={onAppsClick} />
				</DsTopBarNavigation>,
			);

			await page.getByRole('button', { name: 'Apps' }).click();

			expect(onAppsClick).toHaveBeenCalledOnce();
		});

		it('renders no apps button when onAppsClick is omitted', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo wordmark="DriveNets" />
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByText('DriveNets')).toBeVisible();
			expect(page.getByRole('button').all()).toHaveLength(0);
		});

		it('hands the apps slot to appsMenu, replacing the built-in button', async () => {
			const onAppsClick = vi.fn();
			const onItemSelect = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo
						wordmark="DriveNets"
						// Set together on purpose: `appsMenu` wins, so the zone never renders two controls.
						onAppsClick={onAppsClick}
						appsMenu={
							<DsMainMenu
								trigger={<button type="button">Switch application</button>}
								items={[{ id: 'inventory', label: 'Inventory', icon: 'inventory_2' }]}
								utilityLinks={[]}
								onItemSelect={onItemSelect}
							/>
						}
					/>
				</DsTopBarNavigation>,
			);

			expect(page.getByRole('button', { name: 'Apps', exact: true }).all()).toHaveLength(0);

			const trigger = page.getByRole('button', { name: 'Switch application', exact: true });

			await userEvent.click(trigger);
			await expect.element(trigger).toHaveAttribute('aria-expanded', 'true');

			// A tile with no `href` renders as a button.
			await userEvent.click(page.getByRole('button', { name: 'Inventory' }));

			expect(onItemSelect).toHaveBeenCalledWith('inventory');
			expect(onAppsClick).not.toHaveBeenCalled();
		});

		it('renders the lockup as a link when href is set', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo logo={<span>Glyph</span>} wordmark="DriveNets" href="/home" />
				</DsTopBarNavigation>,
			);

			const link = page.getByRole('link');

			await expect.element(link).toHaveAttribute('href', '/home');
			await expect.element(link.getByText('DriveNets')).toBeVisible();
			await expect.element(link.getByText('Glyph')).toBeVisible();
		});

		it('honours locale overrides for the apps button and the home link', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo
						wordmark="DriveNets"
						href="/home"
						locale={{ appsButtonLabel: 'Applications', homeLinkLabel: 'DriveNets home' }}
						onAppsClick={() => {}}
					/>
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByRole('button', { name: 'Applications', exact: true })).toBeVisible();
			await expect.element(page.getByRole('link', { name: 'DriveNets home', exact: true })).toBeVisible();
			expect(page.getByRole('button', { name: 'Apps', exact: true }).all()).toHaveLength(0);
		});

		it('fires onLogoClick on the link itself, with a preventable event', async () => {
			const onLogoClick = vi.fn<(event: MouseEvent<HTMLAnchorElement>) => void>((event) => {
				// A router-driven shell cancels the document load here.
				event.preventDefault();
			});
			const onAppsClick = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo
						wordmark="DriveNets"
						href="/home"
						onLogoClick={onLogoClick}
						onAppsClick={onAppsClick}
					/>
				</DsTopBarNavigation>,
			);

			await page.getByRole('link', { name: 'DriveNets' }).click();

			expect(onLogoClick).toHaveBeenCalledOnce();
			expect(onLogoClick.mock.lastCall?.[0].defaultPrevented).toBe(true);

			// Wired to the anchor, not the surrounding zone — the apps button must not trigger it.
			await page.getByRole('button', { name: 'Apps', exact: true }).click();

			expect(onAppsClick).toHaveBeenCalledOnce();
			expect(onLogoClick).toHaveBeenCalledOnce();
		});
	});

	describe('Notifications', () => {
		it('shows the unread count in the badge', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={13} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(notificationsBadge('13')).toBeVisible();
		});

		it('caps the badge at 99+', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={128} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(notificationsBadge('99+')).toBeVisible();
			await expect.element(notificationsBadge('128')).not.toBeInTheDocument();
		});

		it('hides the badge at count 0 and when count is omitted', async () => {
			const { rerender } = await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={0} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(notificationsBadge('0')).not.toBeVisible();

			await rerender(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(notificationsBadge('0')).not.toBeVisible();
		});

		// Regression: the badge stays mounted so DsButtonV3 never flips to its icon-only
		// geometry, which would re-pad the bell and shift it as the count clears.
		it('keeps the bell out of DsButtonV3 icon-only geometry as the count clears', async () => {
			const { rerender } = await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={13} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const bellWithCount = page.getByRole('button', { name: 'Notifications, 13 unread' });
			await expect.element(bellWithCount).not.toHaveAttribute('data-icon-only');
			const paddingWithCount = horizontalPadding(bellWithCount.element());

			await rerender(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={0} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const bellWithoutCount = page.getByRole('button', { name: 'Notifications', exact: true });

			// Padding — not just width — is the invariant: icon-only geometry re-pads every side to `4px`.
			expect(horizontalPadding(bellWithoutCount.element())).toEqual(paddingWithCount);
			await expect.element(bellWithoutCount).not.toHaveAttribute('data-icon-only');
		});

		it('names the button with the count, and honours locale overrides', async () => {
			const { rerender } = await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={13} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect
				.element(page.getByRole('button', { name: 'Notifications, 13 unread', exact: true }))
				.toBeVisible();

			await rerender(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={0} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByRole('button', { name: 'Notifications', exact: true })).toBeVisible();

			await rerender(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={13} locale={notificationsLocale} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByRole('button', { name: 'Alerts (13)', exact: true })).toBeVisible();

			await rerender(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={0} locale={notificationsLocale} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByRole('button', { name: 'Alerts', exact: true })).toBeVisible();
		});

		it('does not fire onClick while disabled', async () => {
			const onClick = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={3} disabled onClick={onClick} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const bell = page.getByRole('button', { name: 'Notifications, 3 unread', exact: true });

			await expect.element(bell).toBeDisabled();
			await bell.click({ force: true });

			expect(onClick).not.toHaveBeenCalled();
		});

		it('forwards native button props to the rendered button', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={2} id="bell" data-testid="bell" />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const bell = page.getByTestId('bell');

			await expect.element(bell).toHaveAttribute('id', 'bell');
			await expect.element(bell).toHaveAttribute('aria-label', 'Notifications, 2 unread');
		});
	});

	describe('UserMenu', () => {
		it('opens the menu from the avatar trigger and closes it on select', async () => {
			const onSelect = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe" onSelect={onSelect}>
							<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
						</DsTopBarNavigation.UserMenu>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const trigger = page.getByRole('button', { name: 'Account menu for Jane Doe', exact: true });

			// The avatar falls back to initials when no `src` is given.
			await expect.element(trigger.getByText('JD')).toBeVisible();
			// Ark keeps the menu mounted but hidden, so assert on visibility, not presence.
			await expect.element(page.getByText('Profile')).not.toBeVisible();

			await trigger.click();

			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();

			await page.getByRole('menuitem', { name: 'Log out' }).click();

			expect(onSelect).toHaveBeenCalledWith('logout');
			await expect.element(page.getByText('Log out')).not.toBeVisible();
		});

		it('renders the avatar photo when src is set', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe" src={avatarSrc} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const photo = page.getByRole('img', { name: 'Jane Doe', exact: true });

			await expect.element(photo).toBeVisible();
			await expect.element(photo).toHaveAttribute('src', avatarSrc);
		});

		it('honours the userMenuButtonLabel locale override', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu
							name="Jane Doe"
							locale={{ userMenuButtonLabel: (name) => `Profile of ${name}` }}
						/>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect
				.element(page.getByRole('button', { name: 'Profile of Jane Doe', exact: true }))
				.toBeVisible();
			expect(page.getByRole('button', { name: 'Account menu for Jane Doe', exact: true }).all()).toHaveLength(
				0,
			);
		});

		it('opens from the keyboard and advertises the popup on the trigger', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe">
							<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						</DsTopBarNavigation.UserMenu>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const trigger = page.getByRole('button', { name: 'Account menu for Jane Doe', exact: true });

			await expect.element(trigger).toHaveAttribute('aria-haspopup', 'menu');
			await expect.element(trigger).toHaveAttribute('aria-expanded', 'false');

			trigger.element().focus();
			await userEvent.keyboard('{Enter}');

			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
			await expect.element(trigger).toHaveAttribute('aria-expanded', 'true');
		});

		it('keeps the menu closed while the trigger is disabled', async () => {
			const onOpenChange = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe" disabled onOpenChange={onOpenChange}>
							<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						</DsTopBarNavigation.UserMenu>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			const trigger = page.getByRole('button', { name: 'Account menu for Jane Doe', exact: true });

			await expect.element(trigger).toBeDisabled();

			await trigger.click({ force: true });

			await expect.element(page.getByText('Profile')).not.toBeVisible();
			expect(onOpenChange).not.toHaveBeenCalled();
		});

		it('drives the menu from the open prop and reports closes back', async () => {
			const onOpenChange = vi.fn();

			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe" open onOpenChange={onOpenChange}>
							<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						</DsTopBarNavigation.UserMenu>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			// Mounted open — no click needed.
			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();

			await page.getByRole('menuitem', { name: 'Profile' }).click();

			// The close is reported, not applied: `open` still says open, so the menu stays up
			// until the caller flips it.
			expect(onOpenChange).toHaveBeenCalledWith(false);
			await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
		});

		/**
		 * The trailing placement is what keeps the menu inside the viewport when the trigger sits
		 * against the right edge of the bar, so a partial `positioning` override must not drop it.
		 */
		it('keeps the trailing placement when positioning is partially overridden', async () => {
			await page.render(
				<DsTopBarNavigation>
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.UserMenu name="Jane Doe" open positioning={{ gutter: 12 }}>
							<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						</DsTopBarNavigation.UserMenu>
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>,
			);

			await expect.element(page.getByRole('menu')).toHaveAttribute('data-placement', 'bottom-end');
		});
	});

	it('contributes no navigation landmark of its own around the breadcrumb', async () => {
		const rootRoute = createRootRoute({
			component: () => (
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo wordmark="DriveNets" />
					<DsTopBarNavigation.Breadcrumb>
						<DsBreadcrumb
							items={[
								{ type: 'link', label: 'Home', href: '/' },
								{ type: 'link', label: 'Inventory', href: '/inventory' },
							]}
						/>
					</DsTopBarNavigation.Breadcrumb>
					<DsTopBarNavigation.Center />
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={3} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>
			),
		});

		const router = createRouter({
			routeTree: rootRoute.addChildren([
				createRoute({ getParentRoute: () => rootRoute, path: '/', component: () => null }),
				createRoute({ getParentRoute: () => rootRoute, path: '/inventory', component: () => null }),
			]),
			history: createMemoryHistory({ initialEntries: ['/inventory'] }),
		});

		await page.render(<RouterProvider router={router} />);

		await expect.element(page.getByRole('link', { name: 'Inventory' })).toBeVisible();

		expect(page.getByRole('navigation').all()).toHaveLength(1);
	});

	it('keeps a gap between an overflowing breadcrumb trail and the actions', async () => {
		const longTrail = Array.from({ length: 8 }, (_, index) => ({
			type: 'link' as const,
			label: `Deeply Nested Network Segment Level ${String(index + 1)}`,
			href: `/level-${String(index + 1)}`,
		}));

		const rootRoute = createRootRoute({
			component: () => (
				<DsTopBarNavigation>
					<DsTopBarNavigation.Logo wordmark="DriveNets" />
					<DsTopBarNavigation.Breadcrumb>
						<DsBreadcrumb items={longTrail} />
					</DsTopBarNavigation.Breadcrumb>
					<DsTopBarNavigation.Center />
					<DsTopBarNavigation.Actions>
						<DsTopBarNavigation.Notifications count={13} />
					</DsTopBarNavigation.Actions>
				</DsTopBarNavigation>
			),
		});

		const router = createRouter({
			routeTree: rootRoute.addChildren(
				longTrail.map((item) =>
					createRoute({ getParentRoute: () => rootRoute, path: item.href, component: () => null }),
				),
			),
			history: createMemoryHistory({ initialEntries: ['/level-1'] }),
		});

		await page.render(<RouterProvider router={router} />);

		const bell = page.getByRole('button', { name: 'Notifications, 13 unread', exact: true });

		await expect.element(bell).toBeVisible();

		// Measure the zone, not the <nav> inside it: `overflow: hidden` clips painting, so the
		// nav's own layout box still runs far past the visible edge.
		const trailZone = document.querySelector('nav[aria-label="Breadcrumb"]')?.parentElement;

		if (!trailZone) {
			throw new Error('Breadcrumb zone not found');
		}

		// The trail is wide enough to consume the row, which collapses the actions' auto margin
		// to zero — only the actions' own inline padding keeps the bell off the last crumb.
		const gap = bell.element().getBoundingClientRect().left - trailZone.getBoundingClientRect().right;

		expect(gap).toBeGreaterThan(0);
	});
});
