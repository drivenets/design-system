import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
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
	title: 'Components/Breadcrumb',
	component: DsBreadcrumb,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		items: { control: false },
		onSelect: { action: 'select' },
		className: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsBreadcrumb>;

/**
 * A standard link trail where the last segment is the current page. Icons on
 * earlier segments give quick visual anchors; clicking a parent link shortens
 * the trail to match the new location.
 */
export const Default: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	decorators: [(Story) => withTanStackRouter(Story, '/inventory/catalog')],
	render: function Render(args) {
		const navigate = useNavigate();
		const items: DsBreadcrumbItem[] = [
			{ type: 'link', label: 'Home', href: '/', icon: 'home' },
			{ type: 'link', label: 'Inventory', href: '/inventory', icon: 'settings' },
			{ type: 'link', label: 'Catalog', href: '/inventory/catalog', icon: 'newspaper' },
		];

		return (
			<DsBreadcrumb
				items={items}
				onSelect={(href) => {
					args.onSelect?.(href);
					void navigate({ to: href });
				}}
			/>
		);
	},
};

/**
 * Dropdown segments expose sibling destinations at a given depth — useful when
 * the user can land on any of several peers (sites, devices, folders) at the
 * same level. The trigger shows the option matching the current path.
 */
export const WithDropdown: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	decorators: [(Story) => withTanStackRouter(Story, '/network/vienna/router-a')],
	render: function Render(args) {
		const navigate = useNavigate();
		const items: DsBreadcrumbItem[] = [
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

		return (
			<DsBreadcrumb
				items={items}
				onSelect={(href) => {
					args.onSelect?.(href);
					void navigate({ to: href });
				}}
			/>
		);
	},
};
