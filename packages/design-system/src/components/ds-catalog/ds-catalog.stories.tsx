import { useState, type ComponentType, type ReactNode } from 'react';
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

**Regions**

- \`Catalog\` — full-viewport flex column surface
- \`Catalog.Header\` — slot for top bar navigation (full width)
- \`Catalog.Body\` — horizontal body row containing the optional side menu and the main column
- \`Catalog.SideMenu\` — collapsible icon rail (60px); on hover it overlays an expanded panel (256px) without shifting content; when \`pinned\`, the expanded panel pushes the content
- \`Catalog.SideMenuItem\` — icon nav item; the optional label is visible when expanded
- \`Catalog.Main\` — main column
- \`Catalog.Content\` — content column with vertical 24px margin and horizontal margins of 24px (with side menu) or 40px (without). Vertical gap is 16px.
- \`Catalog.ContentHeader\` — title row with optional trailing actions; optional children render as a content-header item below the title row (e.g. a smart tabs group)
- \`Catalog.Results\` — flex-growing table/list region with border + background
- \`Catalog.Empty\` — empty state with illustration and optional children below
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

const refreshOptions = [
	{ label: '30s', value: '30' },
	{ label: '1m', value: '60' },
	{ label: '5m', value: '300' },
];

const TopBarNavigation = () => (
	<div className={styles.topBar}>
		<div className={styles.topBarLeading}>
			<div className={styles.topBarLogo} />
			<div className={styles.topBarBreadcrumbs}>
				<DsBreadcrumb items={catalogBreadcrumbItems} />
			</div>
		</div>
		<div className={styles.topBarTrailing}>
			<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
				NetGen
			</DsButtonV3>
			<div className={styles.topBarUserMenu}>
				<DsAvatar name="PH" size="regular" type="circle" />
				<DsIcon icon="keyboard_arrow_down" size="small" />
			</div>
		</div>
	</div>
);

const SideMenuItems = () => (
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

const ContentHeaderActions = () => {
	const [refreshInterval, setRefreshInterval] = useState('30');

	return (
		<>
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
		</>
	);
};

const SmartTabsItem = () => {
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

interface CatalogShellProps {
	withSideMenu?: boolean;
	pinned?: boolean;
	children: ReactNode;
}

const CatalogShell = ({ withSideMenu = true, pinned, children }: CatalogShellProps) => (
	<DsCatalog>
		<DsCatalog.Header>
			<TopBarNavigation />
		</DsCatalog.Header>
		<DsCatalog.Body>
			{withSideMenu ? (
				<DsCatalog.SideMenu pinned={pinned}>
					<SideMenuItems />
				</DsCatalog.SideMenu>
			) : null}
			<DsCatalog.Main>
				<DsCatalog.Content>{children}</DsCatalog.Content>
			</DsCatalog.Main>
		</DsCatalog.Body>
	</DsCatalog>
);

export const Default: Story = {
	render: () => (
		<CatalogShell>
			<DsCatalog.ContentHeader
				title={<DsTypography variant="heading3">Planned executions</DsTypography>}
				headerActions={<ContentHeaderActions />}
			>
				<SmartTabsItem />
			</DsCatalog.ContentHeader>
			<DsCatalog.Results>
				<div className={styles.tableWrapper}>
					<DsTable columns={catalogColumns} data={catalogData} stickyHeader bordered fullWidth />
				</div>
			</DsCatalog.Results>
		</CatalogShell>
	),
};

export const Empty: Story = {
	render: () => (
		<CatalogShell>
			<DsCatalog.ContentHeader
				title={<DsTypography variant="heading3">Planned executions</DsTypography>}
				headerActions={<ContentHeaderActions />}
			>
				<SmartTabsItem />
			</DsCatalog.ContentHeader>
			<DsCatalog.Empty>
				<DsTypography variant="body-md-reg">No matching records found.</DsTypography>
				<DsButtonV3 variant="primary" size="small">
					Clear filters
				</DsButtonV3>
			</DsCatalog.Empty>
		</CatalogShell>
	),
};

export const WithoutSideMenu: Story = {
	render: () => (
		<CatalogShell withSideMenu={false}>
			<DsCatalog.ContentHeader
				title={<DsTypography variant="heading3">Planned executions</DsTypography>}
				headerActions={<ContentHeaderActions />}
			/>
			<DsCatalog.Results>
				<div className={styles.tableWrapper}>
					<DsTable columns={catalogColumns} data={catalogData} stickyHeader bordered fullWidth />
				</div>
			</DsCatalog.Results>
		</CatalogShell>
	),
};

export const SideMenuPinned: Story = {
	render: function Render() {
		const [pinned, setPinned] = useState(true);

		return (
			<CatalogShell pinned={pinned}>
				<DsCatalog.ContentHeader
					title={<DsTypography variant="heading3">Pinned side menu</DsTypography>}
					headerActions={
						<DsButtonV3 variant="tertiary" size="small" onClick={() => setPinned((current) => !current)}>
							{pinned ? 'Unpin' : 'Pin'}
						</DsButtonV3>
					}
				/>
				<DsTypography variant="body-md-reg">
					When the side menu is pinned, the expanded panel pushes the content area to the right. Click the
					button above to toggle the pinned state.
				</DsTypography>
			</CatalogShell>
		);
	},
};

export const FillParent: Story = {
	render: () => (
		<div className={styles.fillParentWrapper}>
			<DsCatalog fillParent>
				<DsCatalog.Header>
					<TopBarNavigation />
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
		<CatalogShell withSideMenu={false}>
			<DsCatalog.ContentHeader title={<DsTypography variant="heading3">Minimal layout</DsTypography>} />
			<DsTypography variant="body-md-reg">
				All sub-components are optional. Use only the regions your page needs.
			</DsTypography>
		</CatalogShell>
	),
};
