import * as React from 'react';
import { useState, type ButtonHTMLAttributes, type ComponentType, type ReactNode } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import {
	DsCatalogLayout,
	DsEmptyState,
	DsTypography,
	DsTextInput,
	DsButtonV3,
	DsSplitButton,
	DsTable,
	DsAvatar,
	DsBreadcrumb,
	type DsBreadcrumbItem,
	DsIcon,
	type IconType,
	DsSmartTabs,
} from '@drivenets/design-system';

// Owned preview: two independent issues, only one of which is fixable here.
//
// 1. KNOWN LIMITATION (NOTES.md "DsBreadcrumb ... duplicate @tanstack/react-router
//    context"), NOT fixed here, reproduced faithfully: `TopBarNavigation` renders
//    `DsBreadcrumb`, which calls `useLocation()` from `@tanstack/react-router` — a peer
//    dependency, not bundled into `dist/`. The converter's two-bundle architecture
//    gives the main bundle and this story-preview compile two DIFFERENT copies of
//    `@tanstack/react-router` with two different Context objects, so `DsBreadcrumb`'s
//    `useLocation()`/`useRouter()` never see the same Context identity as this file's
//    own `<RouterProvider>`, throwing `Cannot read properties of null (reading
//    'stores')` — confirmed identical to the documented failure. Every story that
//    renders `TopBarNavigation` (Default, Empty, WithoutSideMenu, SideMenuPinned,
//    FillParent, HeaderOnly — 6 of 7) hits this. Per NOTES.md precedent (DsBreadcrumb /
//    DsTopBarNavigation), this is NOT worked around here: dropping the router/
//    breadcrumb usage to dodge the crash would misrepresent the real composition and
//    permanently shadow any future real fix. Graded `mismatch` with this note.
// 2. FIXED: `./ds-catalog-layout.stories.module.scss` supplies `.sideMenu` /
//    `.sideMenuItem` / `.sideMenuItemLabel` (collapsed-rail labels that only reveal via
//    a `[data-expanded] .sideMenuItemLabel` descendant-selector rule when the real
//    `DsCatalogLayout.SideMenu` sets its own `data-expanded` attribute) — this class
//    resolves to `undefined` in the lightweight story-preview pass (no Sass
//    preprocessor), so the labels render always-visible and wrap instead of staying
//    hidden until the rail expands. Confirmed visibly on the `Locale` story (the only
//    story unaffected by issue #1, since it renders no `TopBarNavigation`/breadcrumb).
//    `SideMenu`'s `data-expanded` attribute is real component behavior (not
//    story-local), so a literal (non-module) class name + scoped `<style>` tag
//    targeting `[data-expanded] .label` reproduces the same descendant-selector rule
//    (same technique as DsStepper's `CustomizedVertical` story, since `SideMenuItem`
//    only forwards `className`, not `style`).

const SIDE_MENU_CLASS = 'ds-preview-side-menu';
const SIDE_MENU_ITEM_CLASS = 'ds-preview-side-menu-item';
const SIDE_MENU_ITEM_LABEL_CLASS = 'ds-preview-side-menu-item-label';

const SideMenuStyles = () => (
	<style>
		{`
			.${SIDE_MENU_CLASS}[data-expanded] .${SIDE_MENU_ITEM_CLASS} { justify-content: flex-start; }
			.${SIDE_MENU_CLASS}[data-expanded] .${SIDE_MENU_ITEM_LABEL_CLASS} { max-width: 180px; opacity: 1; margin-inline-start: var(--xs); }
			.${SIDE_MENU_ITEM_CLASS} {
				display: flex;
				flex-shrink: 0;
				align-items: center;
				justify-content: center;
				width: 100%;
				padding: 10px;
				border: none;
				border-radius: var(--3xs);
				background: transparent;
				cursor: pointer;
				color: var(--font-main);
				transition: background-color 0.2s, color 0.2s;
			}
			.${SIDE_MENU_ITEM_CLASS}:hover:not([data-selected]) { background: var(--background-action-tertiary-hover); }
			.${SIDE_MENU_ITEM_CLASS}[data-selected] { background: var(--background-action-secondary-hover); color: var(--background-action); }
			.${SIDE_MENU_ITEM_CLASS}:focus-visible { outline: 2px solid var(--background-action); outline-offset: 2px; }
			.${SIDE_MENU_ITEM_LABEL_CLASS} {
				overflow: hidden;
				max-width: 0;
				opacity: 0;
				white-space: nowrap;
				transition: max-width 0.2s, opacity 0.2s;
			}
		`}
	</style>
);

const topBarStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	minHeight: '54px',
	padding: '0 var(--standard) 0 0',
	borderBottom: '1px solid var(--border)',
	background: 'var(--background)',
};
const topBarLeadingStyle: React.CSSProperties = {
	display: 'flex',
	flex: 1,
	alignItems: 'center',
	minWidth: 0,
};
const topBarLogoStyle: React.CSSProperties = {
	flexShrink: 0,
	width: '174px',
	height: '54px',
	background:
		'radial-gradient(ellipse at 28% 40%, rgba(1, 75, 253, 1) 0%, rgba(10, 60, 194, 1) 46%, rgba(21, 42, 126, 1) 100%)',
};
const topBarBreadcrumbsStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	marginInlineStart: 'var(--standard)',
};
const topBarTrailingStyle: React.CSSProperties = {
	display: 'flex',
	flexShrink: 0,
	alignItems: 'center',
	gap: 'var(--standard)',
};
const topBarUserMenuStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 'var(--3xs)' };
const contentHeaderSearchStyle: React.CSSProperties = { width: '280px' };
const resultsCardStyle: React.CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	minHeight: 0,
	width: '100%',
	border: '1px solid var(--border)',
	borderRadius: 'var(--3xs)',
	background: 'var(--background)',
};
const fillParentWrapperStyle: React.CSSProperties = { height: '400px', border: '2px dashed var(--border)' };

const catalogBreadcrumbItems: DsBreadcrumbItem[] = [
	{ type: 'link', label: 'Automation', href: '/automation', icon: 'precision_manufacturing' },
	{ type: 'link', label: 'Planned executions', href: '/planned-executions', icon: 'event' },
];

const createCatalogLayoutStoryRouter = (Story: ComponentType, initialPath: string) => {
	const rootRoute = createRootRoute({
		component: () => <Story />,
	});

	const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: () => null });
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
	<RouterProvider router={createCatalogLayoutStoryRouter(Story, initialPath)} />
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

const refreshOptions = [
	{ label: '30s', value: '30' },
	{ label: '1m', value: '60' },
	{ label: '5m', value: '300' },
];

const TopBarNavigation = () => (
	<div style={topBarStyle}>
		<div style={topBarLeadingStyle}>
			<div style={topBarLogoStyle} />
			<div style={topBarBreadcrumbsStyle}>
				<DsBreadcrumb items={catalogBreadcrumbItems} />
			</div>
		</div>
		<div style={topBarTrailingStyle}>
			<DsButtonV3 variant="primary" size="small" icon="special-netgen-s">
				NetGen
			</DsButtonV3>
			<div style={topBarUserMenuStyle}>
				<DsAvatar name="PH" size="regular" type="circle" />
				<DsIcon icon="keyboard_arrow_down" size="small" />
			</div>
		</div>
	</div>
);

interface SideMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconType;
	label: string;
	selected?: boolean;
}

const SideMenuItem = ({ icon, label, selected = false, ...rest }: SideMenuItemProps) => (
	<button
		type="button"
		{...rest}
		className={SIDE_MENU_ITEM_CLASS}
		aria-label={rest['aria-label'] ?? label}
		aria-current={selected ? 'page' : undefined}
		{...(selected ? { 'data-selected': '' } : {})}
	>
		<DsIcon icon={icon} size="small" />
		<DsTypography variant="body-sm-md" className={SIDE_MENU_ITEM_LABEL_CLASS}>
			{label}
		</DsTypography>
	</button>
);

const SideMenuItems = () => (
	<>
		<SideMenuItem icon="readiness_score" label="Readiness" />
		<SideMenuItem icon="view_list" label="View list" />
		<SideMenuItem icon="input_circle" label="Inputs" />
		<SideMenuItem icon="calendar_today" label="Planned executions" selected />
		<SideMenuItem icon="autoplay" label="Autoplay" />
		<SideMenuItem icon="checklist" label="Checklist" />
		<SideMenuItem icon="help" label="Help" />
	</>
);

const ContentHeaderActions = () => {
	const [refreshInterval, setRefreshInterval] = useState('30');

	return (
		<>
			<DsTextInput style={contentHeaderSearchStyle} placeholder="Search" />
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

const ResultsCard = ({ children }: { children: ReactNode }) => <div style={resultsCardStyle}>{children}</div>;

export const Default = () => {
	const [pinned, setPinned] = useState(false);

	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
					<SideMenuItems />
				</DsCatalogLayout.SideMenu>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Planned executions</DsTypography>}
						headerActions={<ContentHeaderActions />}
					>
						<SmartTabsItem />
					</DsCatalogLayout.ContentHeader>
					<ResultsCard>
						<DsTable columns={catalogColumns} data={catalogData} stickyHeader bordered fullWidth />
					</ResultsCard>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};

export const Empty = () => {
	const [pinned, setPinned] = useState(false);

	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
					<SideMenuItems />
				</DsCatalogLayout.SideMenu>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Planned executions</DsTypography>}
						headerActions={<ContentHeaderActions />}
					>
						<SmartTabsItem />
					</DsCatalogLayout.ContentHeader>
					<ResultsCard>
						<DsTable
							columns={catalogColumns}
							data={[]}
							stickyHeader
							bordered
							fullWidth
							emptyState={
								<DsEmptyState
									variant="noMatches"
									action={
										<DsButtonV3 variant="primary" size="small">
											Clear filters
										</DsButtonV3>
									}
								/>
							}
						/>
					</ResultsCard>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};

export const WithoutSideMenu = () => {
	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Planned executions</DsTypography>}
						headerActions={<ContentHeaderActions />}
					/>
					<ResultsCard>
						<DsTable columns={catalogColumns} data={catalogData} stickyHeader bordered fullWidth />
					</ResultsCard>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};

export const SideMenuPinned = () => {
	const [pinned, setPinned] = useState(true);

	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
					<SideMenuItems />
				</DsCatalogLayout.SideMenu>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Pinned side menu</DsTypography>}
					/>
					<DsTypography variant="body-md-reg">
						When the side menu is pinned, the expanded panel pushes the content area to the right. Use the pin
						button in the top-right of the side menu (visible when expanded) to toggle the pinned state.
					</DsTypography>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};

export const Locale = () => {
	const [pinned, setPinned] = useState(false);

	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.SideMenu
					pinned={pinned}
					onPinnedChange={setPinned}
					className={SIDE_MENU_CLASS}
					locale={{
						pinButtonLabel: 'Pin sidebar menu',
						unpinButtonLabel: 'Unpin sidebar menu',
					}}
				>
					<SideMenuItems />
				</DsCatalogLayout.SideMenu>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Localized pin labels</DsTypography>}
					/>
					<DsTypography variant="body-md-reg">
						Hover or pin the side menu and inspect the pin button aria-label.
					</DsTypography>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};

export const FillParent = () => {
	const body = (
		<DsCatalogLayout fillParent>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Fill parent</DsTypography>}
					/>
					<DsTypography variant="body-md-reg">
						This catalog layout fills its parent container (400px) instead of the viewport.
					</DsTypography>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			<div style={fillParentWrapperStyle}>{withTanStackRouter(() => body, '/planned-executions')}</div>
		</>
	);
};

export const HeaderOnly = () => {
	const body = (
		<DsCatalogLayout>
			<DsCatalogLayout.Header>
				<TopBarNavigation />
			</DsCatalogLayout.Header>
			<DsCatalogLayout.Body>
				<DsCatalogLayout.Content>
					<DsCatalogLayout.ContentHeader
						title={<DsTypography variant="heading3">Minimal layout</DsTypography>}
					/>
					<DsTypography variant="body-md-reg">
						All sub-components are optional. Use only the regions your page needs.
					</DsTypography>
				</DsCatalogLayout.Content>
			</DsCatalogLayout.Body>
		</DsCatalogLayout>
	);

	return (
		<>
			<SideMenuStyles />
			{withTanStackRouter(() => body, '/planned-executions')}
		</>
	);
};
