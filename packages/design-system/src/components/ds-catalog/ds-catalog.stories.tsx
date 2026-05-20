import { useState, type ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import DsCatalog from './ds-catalog';
import { DsTypography } from '../ds-typography';
import { DsTextInput } from '../ds-text-input';
import { DsButtonV3 } from '../ds-button-v3';
import { DsSplitButton } from '../ds-split-button';
import { DsTable } from '../ds-table';
import { DsAvatar } from '../ds-avatar';
import { DsBreadcrumb, type DsBreadcrumbItem } from '../ds-breadcrumb';
import { DsIcon } from '../ds-icon';
import { DsSmartTabs } from '../ds-smart-tabs';
import styles from './ds-catalog.stories.module.scss';

const catalogBreadcrumbItems: DsBreadcrumbItem[] = [
	{ type: 'link', label: 'Automation', href: '/automation', icon: 'precision_manufacturing' },
	{ type: 'link', label: 'Planned executions', href: '/planned-executions', icon: 'event' },
];

const createCatalogStoryRouter = (Story: ComponentType, initialPath: string) => {
	const rootRoute = createRootRoute({
		component: () => <Story />,
	});

	const indexRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: () => null,
	});

	const automationRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/automation',
		component: () => null,
	});

	const plannedExecutionsRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/planned-executions',
		component: () => null,
	});

	return createRouter({
		routeTree: rootRoute.addChildren([indexRoute, automationRoute, plannedExecutionsRoute]),
		history: createMemoryHistory({ initialEntries: [initialPath] }),
	});
};

const withTanStackRouter = (Story: ComponentType, initialPath = '/planned-executions') => (
	<RouterProvider router={createCatalogStoryRouter(Story, initialPath)} />
);

type CatalogRow = { id: string; name: string; status: string };

const catalogColumns: ColumnDef<CatalogRow>[] = [
	{ accessorKey: 'name', header: 'Name', cell: (info) => info.getValue() },
	{ accessorKey: 'status', header: 'Status', cell: (info) => info.getValue() },
];

const catalogData: CatalogRow[] = [
	{ id: '1', name: 'NE-001', status: 'Active' },
	{ id: '2', name: 'NE-002', status: 'Active' },
	{ id: '3', name: 'NE-003', status: 'Inactive' },
];

const meta: Meta<typeof DsCatalog> = {
	title: 'Components/Catalog',
	component: DsCatalog,
	decorators: [(Story) => withTanStackRouter(Story, '/planned-executions')],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
Compound layout for data-heavy catalog pages (tables/lists).

Design-mandated name \`DsCatalog\` — use for any list/table page shell, not only catalog routes.

- **Catalog** — full-viewport flex column surface
- **Catalog.Header** — slot for app top bar navigation (full width)
- **Catalog.Body** — horizontal body row (side menu + main)
- **Catalog.SideMenu** — collapsible icon rail (60px), hover overlay expand (256px), pinned push expand
- **Catalog.SideMenuItem** — icon nav item with optional label (visible when expanded)
- **Catalog.Main** — main column
- **Catalog.Content** — content column with margins
- **Catalog.ContentHeader** — page title (heading3) + actions row
- **Catalog.Controls** — smart tabs / filters row (wraps to multiple rows when needed)
- **Catalog.Results** — flex-growing table/list region with border
- **Catalog.Empty** — empty state with illustration + children below
        `,
			},
		},
	},
	argTypes: {
		fillParent: {
			control: 'boolean',
			description: 'Use 100% height (fill parent) instead of 100vh (fill viewport)',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsCatalog>;

const catalogSideMenu = (
	<>
		<DsCatalog.SideMenuItem icon="readiness_score" label="Readiness" />
		<DsCatalog.SideMenuItem icon="view_list" label="View list" />
		<DsCatalog.SideMenuItem icon="input_circle" label="Inputs" />
		<DsCatalog.SideMenuItem icon="calendar_today" label="Planned executions" selected />
		<DsCatalog.SideMenuItem icon="autoplay" label="Autoplay" />
		<DsCatalog.SideMenuItem icon="checklist" label="Checklist" />
		<DsCatalog.SideMenuItem icon="help" label="Help" />
	</>
);

const refreshOptions = [
	{ label: '30s', value: '30' },
	{ label: '1m', value: '60' },
	{ label: '5m', value: '300' },
];

const ContentHeaderActions = () => {
	const [refreshInterval, setRefreshInterval] = useState('30');

	return (
		<div className={styles.contentHeaderActions}>
			<DsTextInput className={styles.contentHeaderSearch} placeholder="Search" />
			<DsButtonV3 variant="secondary" size="medium" icon="filter_list" aria-label="Filter" />
			<DsSplitButton
				slotProps={{
					button: { icon: 'refresh', 'aria-label': 'Refresh' },
					select: {
						options: refreshOptions,
						value: refreshInterval,
						onValueChange: (value) => value && setRefreshInterval(value),
						multiple: false,
					},
				}}
			/>
			<DsButtonV3 variant="secondary" size="medium" icon="add">
				New
			</DsButtonV3>
		</div>
	);
};

const CatalogControls = () => {
	const [activeTab, setActiveTab] = useState('all');

	return (
		<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
			<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content={728} />
			<DsSmartTabs.Tab label="Scheduled" value="scheduled" icon="alarm" color="gray" content={198} />
			<DsSmartTabs.Tab
				label="Recurrent active"
				value="recurrent-active"
				icon="event_repeat"
				color="gray"
				content={198}
			/>
		</DsSmartTabs>
	);
};

const CatalogPageContent = ({ showTable = true }: { showTable?: boolean }) => (
	<>
		<DsCatalog.ContentHeader
			title={<DsTypography variant="heading3">Planned executions</DsTypography>}
			headerActions={<ContentHeaderActions />}
		/>

		<DsCatalog.Controls>
			<CatalogControls />
		</DsCatalog.Controls>

		{showTable ? (
			<DsCatalog.Results>
				<div className={styles.tableWrapper}>
					<DsTable columns={catalogColumns} data={catalogData} stickyHeader bordered fullWidth />
				</div>
			</DsCatalog.Results>
		) : (
			<DsCatalog.Empty>
				<DsTypography variant="body-md-reg">No matching records found.</DsTypography>
				<DsButtonV3 variant="primary" size="small">
					Clear filters
				</DsButtonV3>
			</DsCatalog.Empty>
		)}
	</>
);

export const Default: Story = {
	render: () => (
		<DsCatalog>
			<DsCatalog.Header>
				<div className={styles.catalogHeader}>
					<div className={styles.catalogHeaderLeading}>
						<div className={styles.catalogHeaderLogo} />
						<div className={styles.catalogHeaderBreadcrumbs}>
							<DsBreadcrumb items={catalogBreadcrumbItems} />
						</div>
					</div>
					<div className={styles.catalogHeaderTrailing}>
						<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
							NetGen
						</DsButtonV3>
						<div className={styles.catalogHeaderUserMenu}>
							<DsAvatar name="PH" size="regular" type="circle" />
							<DsIcon icon="keyboard_arrow_down" size="small" />
						</div>
					</div>
				</div>
			</DsCatalog.Header>

			<DsCatalog.Body>
				<DsCatalog.SideMenu>{catalogSideMenu}</DsCatalog.SideMenu>

				<DsCatalog.Main>
					<DsCatalog.Content>
						<CatalogPageContent />
					</DsCatalog.Content>
				</DsCatalog.Main>
			</DsCatalog.Body>
		</DsCatalog>
	),
};

export const Empty: Story = {
	render: () => (
		<DsCatalog>
			<DsCatalog.Header>
				<div className={styles.catalogHeader}>
					<div className={styles.catalogHeaderLeading}>
						<div className={styles.catalogHeaderLogo} />
						<div className={styles.catalogHeaderBreadcrumbs}>
							<DsBreadcrumb items={catalogBreadcrumbItems} />
						</div>
					</div>
					<div className={styles.catalogHeaderTrailing}>
						<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
							NetGen
						</DsButtonV3>
						<div className={styles.catalogHeaderUserMenu}>
							<DsAvatar name="PH" size="regular" type="circle" />
							<DsIcon icon="keyboard_arrow_down" size="small" />
						</div>
					</div>
				</div>
			</DsCatalog.Header>

			<DsCatalog.Body>
				<DsCatalog.SideMenu>{catalogSideMenu}</DsCatalog.SideMenu>

				<DsCatalog.Main>
					<DsCatalog.Content>
						<CatalogPageContent showTable={false} />
					</DsCatalog.Content>
				</DsCatalog.Main>
			</DsCatalog.Body>
		</DsCatalog>
	),
};

export const WithoutSideMenu: Story = {
	render: () => (
		<DsCatalog>
			<DsCatalog.Header>
				<div className={styles.catalogHeader}>
					<div className={styles.catalogHeaderLeading}>
						<div className={styles.catalogHeaderLogo} />
						<div className={styles.catalogHeaderBreadcrumbs}>
							<DsBreadcrumb items={catalogBreadcrumbItems} />
						</div>
					</div>
					<div className={styles.catalogHeaderTrailing}>
						<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
							NetGen
						</DsButtonV3>
						<div className={styles.catalogHeaderUserMenu}>
							<DsAvatar name="PH" size="regular" type="circle" />
							<DsIcon icon="keyboard_arrow_down" size="small" />
						</div>
					</div>
				</div>
			</DsCatalog.Header>

			<DsCatalog.Body>
				<DsCatalog.Main>
					<DsCatalog.Content>
						<CatalogPageContent />
					</DsCatalog.Content>
				</DsCatalog.Main>
			</DsCatalog.Body>
		</DsCatalog>
	),
};

export const SideMenuPinned: Story = {
	render: function Render() {
		const [pinned, setPinned] = useState(true);

		return (
			<DsCatalog>
				<DsCatalog.Header>
					<div className={styles.catalogHeader}>
						<div className={styles.catalogHeaderLeading}>
							<div className={styles.catalogHeaderLogo} />
							<div className={styles.catalogHeaderBreadcrumbs}>
								<DsBreadcrumb items={catalogBreadcrumbItems} />
							</div>
						</div>
						<div className={styles.catalogHeaderTrailing}>
							<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
								NetGen
							</DsButtonV3>
							<div className={styles.catalogHeaderUserMenu}>
								<DsAvatar name="PH" size="regular" type="circle" />
								<DsIcon icon="keyboard_arrow_down" size="small" />
							</div>
						</div>
					</div>
				</DsCatalog.Header>

				<DsCatalog.Body>
					<DsCatalog.SideMenu pinned={pinned} onPinnedChange={setPinned}>
						{catalogSideMenu}
					</DsCatalog.SideMenu>

					<DsCatalog.Main>
						<DsCatalog.Content>
							<DsCatalog.ContentHeader
								title={<DsTypography variant="heading3">Pinned side menu</DsTypography>}
								headerActions={
									<DsButtonV3 variant="tertiary" size="small" onClick={() => setPinned(!pinned)}>
										{pinned ? 'Unpin' : 'Pin'}
									</DsButtonV3>
								}
							/>
							<CatalogPageContent />
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>
		);
	},
};

export const FillParent: Story = {
	render: () => (
		<div className={styles.fillParentWrapper}>
			<DsCatalog fillParent>
				<DsCatalog.Header>
					<div className={styles.catalogHeader}>
						<div className={styles.catalogHeaderLeading}>
							<div className={styles.catalogHeaderLogo} />
							<div className={styles.catalogHeaderBreadcrumbs}>
								<DsBreadcrumb items={catalogBreadcrumbItems} />
							</div>
						</div>
						<div className={styles.catalogHeaderTrailing}>
							<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
								NetGen
							</DsButtonV3>
							<div className={styles.catalogHeaderUserMenu}>
								<DsAvatar name="PH" size="regular" type="circle" />
								<DsIcon icon="keyboard_arrow_down" size="small" />
							</div>
						</div>
					</div>
				</DsCatalog.Header>

				<DsCatalog.Body>
					<DsCatalog.Main>
						<DsCatalog.Content>
							<DsCatalog.ContentHeader title={<DsTypography variant="heading3">Fill parent</DsTypography>} />
							<DsTypography variant="body-md-reg">
								This catalog layout fills its parent container (400px) instead of the viewport.
							</DsTypography>
						</DsCatalog.Content>
					</DsCatalog.Main>
				</DsCatalog.Body>
			</DsCatalog>
		</div>
	),
};

export const HeaderOnly: Story = {
	render: () => (
		<DsCatalog>
			<DsCatalog.Header>
				<div className={styles.catalogHeader}>
					<div className={styles.catalogHeaderLeading}>
						<div className={styles.catalogHeaderLogo} />
						<div className={styles.catalogHeaderBreadcrumbs}>
							<DsBreadcrumb items={catalogBreadcrumbItems} />
						</div>
					</div>
					<div className={styles.catalogHeaderTrailing}>
						<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
							NetGen
						</DsButtonV3>
						<div className={styles.catalogHeaderUserMenu}>
							<DsAvatar name="PH" size="regular" type="circle" />
							<DsIcon icon="keyboard_arrow_down" size="small" />
						</div>
					</div>
				</div>
			</DsCatalog.Header>

			<DsCatalog.Body>
				<DsCatalog.Main>
					<DsCatalog.Content>
						<DsCatalog.ContentHeader title={<DsTypography variant="heading3">Minimal layout</DsTypography>} />
						<DsTypography variant="body-md-reg">
							All sub-components are optional. Use only the regions your page needs.
						</DsTypography>
					</DsCatalog.Content>
				</DsCatalog.Main>
			</DsCatalog.Body>
		</DsCatalog>
	),
};
