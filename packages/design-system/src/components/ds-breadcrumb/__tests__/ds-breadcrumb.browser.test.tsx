import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
	useLocation,
	useNavigate,
} from '@tanstack/react-router';
import DsBreadcrumb from '../ds-breadcrumb';
import type { DsBreadcrumbItem, DsBreadcrumbProps } from '../ds-breadcrumb.types';

const defaultItems: DsBreadcrumbItem[] = [
	{ type: 'link', label: 'Home', href: '/', icon: 'home' },
	{ type: 'link', label: 'Inventory', href: '/inventory', icon: 'settings' },
	{ type: 'link', label: 'Catalog', href: '/inventory/catalog', icon: 'newspaper' },
];

const dropdownItems: DsBreadcrumbItem[] = [
	{ type: 'link', label: 'Home', href: '/' },
	{ type: 'link', label: 'Network Visibility', href: '/network' },
	{
		type: 'dropdown',
		label: 'Vienna HQ',
		icon: 'location_on',
		options: [
			{ label: 'Vienna HQ', href: '/network/vienna' },
			{ label: 'Paris Office', href: '/network/paris' },
		],
	},
	{
		type: 'dropdown',
		label: 'Router A',
		icon: 'device_hub',
		options: [
			{ label: 'Router A', href: '/network/vienna/router-a' },
			{ label: 'Switch B', href: '/network/vienna/switch-b' },
		],
	},
];

const BreadcrumbTestHarness = ({ items, onSelect }: DsBreadcrumbProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [visibleItems, setVisibleItems] = useState(items);

	useEffect(() => {
		const depth = location.pathname.split('/').filter(Boolean).length;
		setVisibleItems(items.slice(0, depth + 1));
	}, [location, items]);

	return (
		<DsBreadcrumb
			items={visibleItems}
			onSelect={(href) => {
				onSelect?.(href);
				void navigate({ to: href });
			}}
		/>
	);
};

const createBreadcrumbTestRouter = (props: DsBreadcrumbProps, initialPath: string) => {
	const rootRoute = createRootRoute({
		component: () => <BreadcrumbTestHarness {...props} />,
	});

	const indexRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: () => null,
	});

	const inventoryRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory',
		component: () => null,
	});

	const catalogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory/catalog',
		component: () => null,
	});

	const networkRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network',
		component: () => null,
	});

	const viennaRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna',
		component: () => null,
	});

	const parisRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/paris',
		component: () => null,
	});

	const routerARoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna/router-a',
		component: () => null,
	});

	const switchBRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna/switch-b',
		component: () => null,
	});

	return createRouter({
		routeTree: rootRoute.addChildren([
			indexRoute,
			inventoryRoute,
			catalogRoute,
			networkRoute,
			viennaRoute,
			parisRoute,
			routerARoute,
			switchBRoute,
		]),
		history: createMemoryHistory({ initialEntries: [initialPath] }),
	});
};

const renderWithRouter = async (props: DsBreadcrumbProps, initialPath: string) => {
	const router = createBreadcrumbTestRouter(props, initialPath);
	await page.render(<RouterProvider router={router} />);
};

describe('DsBreadcrumb', () => {
	it('marks the last link segment as current page', async () => {
		await renderWithRouter({ items: defaultItems }, '/inventory/catalog');

		const catalogLink = page.getByText('Catalog');
		await expect.element(catalogLink).toHaveAttribute('aria-current', 'page');
	});

	it('truncates trail when navigating to a parent link', async () => {
		await renderWithRouter({ items: defaultItems }, '/inventory/catalog');

		await page.getByText('Inventory').click();

		const inventoryLink = page.getByText('Inventory');
		await expect.element(inventoryLink).toHaveAttribute('aria-current', 'page');
		await expect.element(page.getByText('Catalog')).not.toBeInTheDocument();
	});

	it('marks the selected dropdown option as current page', async () => {
		await renderWithRouter({ items: dropdownItems }, '/network/vienna/router-a');

		const routerDropdown = page.getByRole('button', { name: /Router A/ });
		await expect.element(routerDropdown).toHaveAttribute('aria-current', 'page');
	});

	it('updates current page when selecting a sibling from dropdown', async () => {
		await renderWithRouter({ items: dropdownItems }, '/network/vienna/router-a');

		await page.getByRole('button', { name: /Router A/ }).click();
		await page.getByRole('menuitem', { name: /Switch B/ }).click();

		const switchBDropdown = page.getByRole('button', { name: /Switch B/ });
		await expect.element(switchBDropdown).toHaveAttribute('aria-current', 'page');
	});

	it('removes deeper dropdown segments when navigating to a parent dropdown option', async () => {
		await renderWithRouter({ items: dropdownItems }, '/network/vienna/router-a');

		await page.getByRole('button', { name: /Vienna HQ/ }).click();
		await page.getByRole('menuitem', { name: /Paris Office/ }).click();

		await expect.element(page.getByRole('button', { name: /Switch B/ })).not.toBeInTheDocument();
	});

	it('removes dropdown segments when navigating to a plain link ancestor', async () => {
		await renderWithRouter({ items: dropdownItems }, '/network/vienna/router-a');

		await page.getByRole('link', { name: 'Network Visibility' }).click();
		await expect.element(page.getByRole('button', { name: /Vienna HQ/ })).not.toBeInTheDocument();

		await page.getByRole('link', { name: 'Home' }).click();
		await expect.element(page.getByRole('button', { name: /Vienna HQ/ })).not.toBeInTheDocument();
	});

	it('calls onSelect when a link segment is activated', async () => {
		const onSelect = vi.fn();
		await renderWithRouter({ items: defaultItems, onSelect }, '/inventory/catalog');

		await page.getByText('Inventory').click();
		expect(onSelect).toHaveBeenCalledWith('/inventory');
	});
});
