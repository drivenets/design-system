import type React from 'react';
import { act, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, within } from 'storybook/test';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
	useLocation,
	useNavigate,
} from '@tanstack/react-router';
import DsBreadcrumb from './ds-breadcrumb';
import type { DsBreadcrumbItem } from './ds-breadcrumb.types';

const createTestRouter = (Story: React.ComponentType, initialPath: string) => {
	const rootRoute = createRootRoute({
		component: () => <Story />,
	});

	const indexRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: () => <div>Home</div>,
	});

	const inventoryRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory',
		component: () => <div>Inventory</div>,
	});

	const catalogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory/catalog',
		component: () => <div>Catalog</div>,
	});

	const networkRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network',
		component: () => <div>Network</div>,
	});

	const viennaRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna',
		component: () => <div>Vienna</div>,
	});

	const parisRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/paris',
		component: () => <div>Paris</div>,
	});

	const routerARoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna/router-a',
		component: () => <div>Router A</div>,
	});

	const switchBRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/network/vienna/switch-b',
		component: () => <div>Switch B</div>,
	});

	const router = createRouter({
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
		history: createMemoryHistory({
			initialEntries: [initialPath],
		}),
	});

	return router;
};

const withTanStackRouter = (Story: React.ComponentType, initialPath: string) => {
	const router = createTestRouter(Story, initialPath);

	return <RouterProvider router={router} />;
};

const meta: Meta<typeof DsBreadcrumb> = {
	title: 'Design System/Breadcrumb',
	component: DsBreadcrumb,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		items: {
			description: 'Array of breadcrumb items, each being a link or a dropdown.',
			control: { type: 'object' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsBreadcrumb>;

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

type ExtendedWindow = Window & {
	resetBreadcrumbItems?: (initialPath: string) => void;
};

const extendedWindow = window as unknown as ExtendedWindow;

const BreadcrumbStory = ({ items }: { items: DsBreadcrumbItem[] }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [updatedItems, setUpdatedItems] = useState<DsBreadcrumbItem[]>(items);

	useEffect(() => {
		const currentPath = location.pathname;
		const segments = currentPath.split('/').filter(Boolean);
		setUpdatedItems(items.slice(0, segments.length + 1));
	}, [location, items]);

	// add reset function to window (for testing)
	useEffect(() => {
		extendedWindow.resetBreadcrumbItems = (initialPath: string) => {
			setUpdatedItems(items);
			void navigate({ to: initialPath });
		};
		return () => {
			delete extendedWindow.resetBreadcrumbItems;
		};
	}, [items, navigate]);

	return (
		<DsBreadcrumb
			items={updatedItems}
			onSelect={(href: string) => {
				void navigate({ to: href });
			}}
		/>
	);
};

export const Default: Story = {
	args: {
		items: defaultItems,
	},
	decorators: [(Story) => withTanStackRouter(Story, '/inventory/catalog')],
	render: (args) => <BreadcrumbStory items={args.items} />,
	play: async ({
		canvasElement,
		args: { items: initialItems },
	}: {
		canvasElement: HTMLElement;
		args: { items: DsBreadcrumbItem[] };
	}) => {
		const canvas = within(canvasElement);

		const lastItem = initialItems[initialItems.length - 1];
		const previousItem = initialItems[initialItems.length - 2];

		if (!lastItem || !previousItem) {
			throw new Error('Items array must have at least 2 elements');
		}

		// 1. Check last item is selected
		const lastItemElement = canvas.getByText(lastItem.label);
		await expect(lastItemElement).toHaveAttribute('aria-current', 'page');

		// 2. Click on previous item and verify last item is hidden
		const previousItemElement = canvas.getByText(previousItem.label);
		await userEvent.click(previousItemElement);

		// Verify previous item is now last and selected
		const updatedLastItem = canvas.getByText(previousItem.label);
		await expect(updatedLastItem).toHaveAttribute('aria-current', 'page');

		// Verify original last item is not visible
		const originalLastItem = screen.queryByText(lastItem.label);
		await expect(originalLastItem).not.toBeInTheDocument();

		// 3. Reset to initial state
		const lastItemHref = lastItem.type === 'link' ? lastItem.href : (lastItem.options[0]?.href ?? '');

		act(() => {
			extendedWindow.resetBreadcrumbItems?.(lastItemHref);
		});

		// Verify we're back to initial state
		const resetLastItem = canvas.getByText(lastItem.label);
		await expect(resetLastItem).toBeInTheDocument();
	},
};

export const WithDropdown: Story = {
	args: {
		items: dropdownItems,
	},
	decorators: [(Story) => withTanStackRouter(Story, '/network/vienna/router-a')],
	render: (args) => <BreadcrumbStory items={args.items} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 1. Check last item (Router A) is selected
		const lastItem = canvas.getByRole('button', { name: /Router A/ });
		await expect(lastItem).toHaveAttribute('aria-current', 'page');

		// 2. Check Router A is selected in dropdown
		const routerDropdown = canvas.getByRole('button', { name: /Router A/ });
		await userEvent.click(routerDropdown);
		const routerMenuItem = await screen.findByRole('menuitem', { name: /Router A/ });
		const routerIndicator = within(routerMenuItem).getByText('check');
		await expect(routerIndicator).toBeInTheDocument();

		// 3. Select Switch B
		const switchBMenuItem = await screen.findByRole('menuitem', { name: /Switch B/ });
		await userEvent.click(switchBMenuItem);

		// 4. Verify Switch B is now selected
		const updatedLastItem = canvas.getByRole('button', { name: /Switch B/ });
		await expect(updatedLastItem).toHaveAttribute('aria-current', 'page');

		// 5. Click on Vienna HQ dropdown
		const viennaDropdown = canvas.getByRole('button', { name: /Vienna HQ/ });
		await userEvent.click(viennaDropdown);

		// 6. Select Paris Office
		const parisMenuItem = await screen.findByRole('menuitem', { name: /Paris Office/ });
		await userEvent.click(parisMenuItem);

		// 7. Verify Switch B dropdown is gone
		const switchBDropdownAfter = screen.queryByRole('button', { name: /Switch B/ });
		await expect(switchBDropdownAfter).not.toBeInTheDocument();

		// 8. Click Network Visibility
		const networkLink = canvas.getByRole('link', { name: 'Network Visibility' });
		await userEvent.click(networkLink);

		// 9. Verify Vienna HQ dropdown is gone
		const viennaDropdownAfter = screen.queryByRole('button', { name: /Vienna HQ/ });
		await expect(viennaDropdownAfter).not.toBeInTheDocument();

		// 10. Click Home
		const homeLink = canvas.getByRole('link', { name: 'Home' });
		await userEvent.click(homeLink);

		// 11. Reset to initial state

		act(() => {
			extendedWindow.resetBreadcrumbItems?.('/network/vienna/router-a');
		});

		// Verify we're back to initial state
		const resetLastItem = canvas.getByRole('button', { name: /Router A/ });
		await expect(resetLastItem).toBeInTheDocument();
	},
};
