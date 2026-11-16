import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
	RouterProvider,
} from '@tanstack/react-router';
import DsBreadcrumbBack from '../ds-breadcrumb-back';
import type { DsBreadcrumbBackProps } from '../ds-breadcrumb-back.types';

const renderWithRouter = async (props: DsBreadcrumbBackProps, initialPath = '/inventory/catalog') => {
	const rootRoute = createRootRoute({
		component: () => (
			<>
				<DsBreadcrumbBack {...props} />
				<Outlet />
			</>
		),
	});

	const inventoryRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory',
		component: () => <p>Inventory page</p>,
	});

	const catalogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/inventory/catalog',
		component: () => <p>Catalog page</p>,
	});

	const router = createRouter({
		routeTree: rootRoute.addChildren([inventoryRoute, catalogRoute]),
		history: createMemoryHistory({ initialEntries: [initialPath] }),
	});

	await page.render(<RouterProvider router={router} />);
};

describe('DsBreadcrumbBack', () => {
	it('renders the arrow_back icon followed by the default "Back" label', async () => {
		await page.render(<DsBreadcrumbBack onClick={vi.fn()} />);

		const button = page.getByRole('button', { name: 'Back', exact: true });
		await expect.element(button).toMatchTextContent(/^arrow_back\s*Back$/);
	});

	it('uses locale.label as the visible label and accessible name', async () => {
		await page.render(<DsBreadcrumbBack onClick={vi.fn()} locale={{ label: 'Return to list' }} />);

		const button = page.getByRole('button', { name: 'Return to list', exact: true });
		await expect.element(button).toMatchTextContent(/^arrow_back\s*Return to list$/);
		await expect.element(page.getByText('Back', { exact: true })).not.toBeInTheDocument();
	});

	it('hides the icon from assistive tech so the accessible name is exactly the label', async () => {
		await page.render(<DsBreadcrumbBack onClick={vi.fn()} />);

		await expect
			.element(page.getByText('arrow_back', { exact: true }))
			.toHaveAttribute('aria-hidden', 'true');
		await expect.element(page.getByRole('button')).toHaveAccessibleName('Back');
	});

	it('renders a type="button" button that calls onClick once when clicked', async () => {
		const onClick = vi.fn();
		await page.render(<DsBreadcrumbBack onClick={onClick} />);

		const button = page.getByRole('button', { name: 'Back', exact: true });
		await expect.element(button).toHaveAttribute('type', 'button');

		await button.click();
		expect(onClick).toHaveBeenCalledOnce();
	});

	it('calls onClick on Enter and on Space', async () => {
		const onClick = vi.fn();
		await page.render(<DsBreadcrumbBack onClick={onClick} />);

		const button = page.getByRole('button', { name: 'Back', exact: true });
		await userEvent.tab();
		await expect.element(button).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		expect(onClick).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('applies className to the root element', async () => {
		await page.render(<DsBreadcrumbBack onClick={vi.fn()} className="custom-back" />);

		await expect.element(page.getByRole('button', { name: 'Back', exact: true })).toHaveClass('custom-back');
	});

	it('renders a router link to href with className applied', async () => {
		await renderWithRouter({ href: '/inventory', className: 'custom-back' });

		const link = page.getByRole('link', { name: 'Back', exact: true });
		await expect.element(link).toHaveAttribute('href', '/inventory');
		await expect.element(link).toHaveClass('custom-back');
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
	});

	it('navigates to href and calls onClick when the link is clicked', async () => {
		const onClick = vi.fn();
		await renderWithRouter({ href: '/inventory', onClick });

		await expect.element(page.getByText('Catalog page')).toBeVisible();

		await page.getByRole('link', { name: 'Back', exact: true }).click();

		await expect.element(page.getByText('Inventory page')).toBeVisible();
		await expect.element(page.getByText('Catalog page')).not.toBeInTheDocument();
		expect(onClick).toHaveBeenCalledOnce();
	});
});
