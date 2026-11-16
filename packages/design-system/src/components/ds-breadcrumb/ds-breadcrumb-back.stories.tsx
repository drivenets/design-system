import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import { DsBreadcrumbBack } from './index';

const withTanStackRouter = (Story: React.ComponentType) => {
	const rootRoute = createRootRoute({ component: () => <Story /> });
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
	const router = createRouter({
		routeTree: rootRoute.addChildren([inventoryRoute, catalogRoute]),
		history: createMemoryHistory({ initialEntries: ['/inventory/catalog'] }),
		// Skip the router's window scroll reset so the Autodocs page doesn't jump on mount.
		scrollRestoration: () => false,
	});

	return <RouterProvider router={router} />;
};

const meta: Meta<typeof DsBreadcrumbBack> = {
	title: 'Components/BreadcrumbBack',
	component: DsBreadcrumbBack,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsBreadcrumbBack>;

/**
 * A standalone back crumb for drawer and modal drill-down headers. It looks like a breadcrumb
 * item but is not part of a trail.
 */
export const Default: Story = {
	args: { onClick: fn() },
};

/**
 * Pass `href` to render it as a router link to the parent page.
 */
export const Link: Story = {
	decorators: [withTanStackRouter],
	args: { href: '/inventory' },
};

/**
 * Translate the label through `locale`; it is also the accessible name.
 */
export const Localized: Story = {
	args: { locale: { label: 'Back to list' } },
};
