import { useState, type ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router';
import { DsTopBarNavigation } from './index';
import { DsBotButton } from '../ds-bot-button';
import { DsBreadcrumb } from '../ds-breadcrumb';
import { DsButtonV3 } from '../ds-button-v3';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsIcon, type IconType } from '../ds-icon';
import { DsMainMenu } from '../ds-main-menu';
import { DsTypography } from '../ds-typography';
import { DapLogoMark } from '../../stories/sample-brand-logo';
import {
	AdministrationIcon,
	AiOpsIcon,
	BackupFilesIcon,
	BreakGlassIcon,
	ConfigurationsIcon,
	InventoryIcon,
	MyDashboardIcon,
	NetworkPlanningIcon,
	NetworkViewIcon,
	ObservabilityIcon,
	SoftwareImagesIcon,
	TasksIcon,
	TechnicianIcon,
	WorkflowAutomationIcon,
} from '../../stories/sample-menu-icons';

/**
 * `DsBreadcrumb` renders TanStack Router links, so the stories that mount one need a router in
 * context. Story-only plumbing — consumers already have their own router.
 */
const storyRoutePaths = [
	'/',
	'/automation',
	'/automation/workflows',
	'/automation/workflows/deploy-vienna-metro',
	'/network',
	'/network/europe',
	'/network/europe/vienna-metro-aggregation',
	'/network/europe/vienna-metro-aggregation/cluster-07',
	'/network/europe/vienna-metro-aggregation/cluster-07/router-a-edge-01',
];

const withTanStackRouter = (Story: ComponentType, initialPath: string) => {
	const rootRoute = createRootRoute({ component: () => <Story /> });

	const router = createRouter({
		routeTree: rootRoute.addChildren(
			storyRoutePaths.map((path) =>
				createRoute({ getParentRoute: () => rootRoute, path, component: () => null }),
			),
		),
		history: createMemoryHistory({ initialEntries: [initialPath] }),
	});

	return <RouterProvider router={router} />;
};

const meta: Meta<typeof DsTopBarNavigation> = {
	title: 'Components/TopBarNavigation',
	component: DsTopBarNavigation,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
Application top bar: brand lockup, breadcrumb trail, and the trailing action cluster.

- **TopBarNavigation** — 54px bar; zones are laid out left-to-right
- **TopBarNavigation.Logo** — brand glyph + wordmark slots and the optional apps button (rendered only when \`onAppsClick\` is passed; pass \`appsMenu\` instead to hand the slot to a \`DsMainMenu\`)
- **TopBarNavigation.Breadcrumb** — shrinkable slot for a \`DsBreadcrumb\`; clips rather than pushing the actions off-screen
- **TopBarNavigation.Center** — reserved zone between the trail and the actions, empty by design today
- **TopBarNavigation.Actions** — pinned right; holds the notifications bell, app-level buttons, and the user menu
- **TopBarNavigation.Notifications** — bell with unread badge; counts above 99 collapse to \`99+\`. Pass \`onClick\` for a plain handler, or wrap it in a \`DsDropdownMenu.Trigger asChild\` to open a notifications panel
- **TopBarNavigation.UserMenu** — avatar trigger with \`DsDropdownMenu\` entries as children

No brand asset ships with the design system — \`logo\` and \`wordmark\` are consumer slots. These stories fill them with the DAP lockup.
				`,
			},
		},
	},
	argTypes: {
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsTopBarNavigation>;

/**
 * The assembled bar as a platform shell mounts it: brand lockup with the apps switcher, the
 * breadcrumb trail for the current location, and the trailing cluster of notifications, an
 * app-level action, and the user menu.
 */
export const Default: Story = {
	decorators: [(Story) => withTanStackRouter(Story, '/automation/workflows/deploy-vienna-metro')],
	render: () => (
		<DsTopBarNavigation>
			<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" href="/" onAppsClick={() => {}} />
			<DsTopBarNavigation.Breadcrumb>
				<DsBreadcrumb
					items={[
						{ type: 'link', label: 'Home', href: '/', icon: 'home' },
						{ type: 'link', label: 'Automation', href: '/automation', icon: 'precision_manufacturing' },
						{ type: 'link', label: 'Workflows', href: '/automation/workflows', icon: 'account_tree' },
						{
							type: 'link',
							label: 'Deploy Vienna Metro',
							href: '/automation/workflows/deploy-vienna-metro',
						},
					]}
				/>
			</DsTopBarNavigation.Breadcrumb>
			<DsTopBarNavigation.Center />
			<DsTopBarNavigation.Actions>
				<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
				<DsBotButton />
				<DsTopBarNavigation.UserMenu name="Dana Brooks">
					<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="settings">Settings</DsDropdownMenu.Item>
					<DsDropdownMenu.Separator />
					<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
				</DsTopBarNavigation.UserMenu>
			</DsTopBarNavigation.Actions>
		</DsTopBarNavigation>
	),
};

/**
 * Omit `onAppsClick` when the product has no app switcher — the button disappears and the brand
 * lockup keeps the zone to itself.
 */
export const WithoutAppsButton: Story = {
	decorators: [(Story) => withTanStackRouter(Story, '/automation/workflows')],
	render: () => (
		<DsTopBarNavigation>
			<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" href="/" />
			<DsTopBarNavigation.Breadcrumb>
				<DsBreadcrumb
					items={[
						{ type: 'link', label: 'Home', href: '/', icon: 'home' },
						{ type: 'link', label: 'Automation', href: '/automation', icon: 'precision_manufacturing' },
						{ type: 'link', label: 'Workflows', href: '/automation/workflows', icon: 'account_tree' },
					]}
				/>
			</DsTopBarNavigation.Breadcrumb>
			<DsTopBarNavigation.Center />
			<DsTopBarNavigation.Actions>
				<DsTopBarNavigation.Notifications count={3} onClick={() => {}} />
				<DsTopBarNavigation.UserMenu name="Dana Brooks">
					<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
				</DsTopBarNavigation.UserMenu>
			</DsTopBarNavigation.Actions>
		</DsTopBarNavigation>
	),
};

/**
 * The badge is hidden at zero, shows the exact figure while it fits, and collapses to `99+` past
 * the cap so the bell geometry never shifts.
 */
export const NotificationCounts: Story = {
	render: () => (
		<>
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" />
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={0} onClick={() => {}} />
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" />
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" />
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={128} onClick={() => {}} />
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
		</>
	),
};

/**
 * The bell as a platform shell wires it: `DsTopBarNavigation.Notifications` renders a button, so a
 * `DsDropdownMenu.Trigger asChild` turns it into the trigger for the notifications panel — clicking
 * the bell opens the unread list instead of only firing `onClick`. Selecting an entry, or clearing
 * the list from the sticky actions row, drives `count`, so the badge stays in sync with the panel.
 */
export const WithNotificationsMenu: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [unread, setUnread] = useState<{ id: string; icon: IconType; label: string; time: string }[]>([
			{ id: 'cluster-07', icon: 'error', label: 'Cluster 07 aggregation link down', time: '2 min ago' },
			{
				id: 'deploy-vienna',
				icon: 'account_tree',
				label: 'Deploy Vienna Metro completed',
				time: '18 min ago',
			},
			{ id: 'image-4-2-1', icon: 'download', label: 'Software image 4.2.1 available', time: '1 hour ago' },
		]);

		return (
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" href="/" onAppsClick={() => {}} />
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsDropdownMenu.Root
						positioning={{ placement: 'bottom-end' }}
						onSelect={(value) => setUnread((current) => current.filter((item) => item.id !== value))}
					>
						<DsDropdownMenu.Trigger asChild>
							<DsTopBarNavigation.Notifications count={unread.length} />
						</DsDropdownMenu.Trigger>
						<DsDropdownMenu.Content>
							<DsDropdownMenu.Header>
								<DsTypography variant="body-sm-md">Notifications</DsTypography>
							</DsDropdownMenu.Header>
							{unread.length > 0 ? (
								unread.map((item) => (
									<DsDropdownMenu.Item key={item.id} value={item.id}>
										<DsIcon icon={item.icon} />
										<span>{item.label}</span>
										<DsTypography variant="body-xs-reg">{item.time}</DsTypography>
									</DsDropdownMenu.Item>
								))
							) : (
								<DsDropdownMenu.Item value="caught-up" disabled>
									No unread notifications
								</DsDropdownMenu.Item>
							)}
							<DsDropdownMenu.Actions>
								<DsButtonV3 variant="tertiary" size="small" onClick={() => setUnread([])}>
									Mark all as read
								</DsButtonV3>
							</DsDropdownMenu.Actions>
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
					<DsBotButton />
					<DsTopBarNavigation.UserMenu name="Dana Brooks">
						<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
					</DsTopBarNavigation.UserMenu>
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
		);
	},
};

/**
 * A deep trail with long segment labels. The breadcrumb zone clips its overflow, so the actions
 * cluster stays pinned to the right edge instead of being pushed off-screen.
 */
export const LongBreadcrumb: Story = {
	decorators: [
		(Story) =>
			withTanStackRouter(Story, '/network/europe/vienna-metro-aggregation/cluster-07/router-a-edge-01'),
	],
	render: () => (
		<DsTopBarNavigation>
			<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" href="/" onAppsClick={() => {}} />
			<DsTopBarNavigation.Breadcrumb>
				<DsBreadcrumb
					items={[
						{ type: 'link', label: 'Home', href: '/', icon: 'home' },
						{ type: 'link', label: 'Network Visibility', href: '/network', icon: 'lan' },
						{ type: 'link', label: 'Europe Region', href: '/network/europe', icon: 'location_on' },
						{
							type: 'link',
							label: 'Vienna Metro Aggregation Site',
							href: '/network/europe/vienna-metro-aggregation',
						},
						{
							type: 'link',
							label: 'Cluster 07 — Aggregation Fabric',
							href: '/network/europe/vienna-metro-aggregation/cluster-07',
						},
						{
							type: 'link',
							label: 'Router A Edge 01',
							href: '/network/europe/vienna-metro-aggregation/cluster-07/router-a-edge-01',
							icon: 'device_hub',
						},
					]}
				/>
			</DsTopBarNavigation.Breadcrumb>
			<DsTopBarNavigation.Center />
			<DsTopBarNavigation.Actions>
				<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
				<DsBotButton />
				<DsTopBarNavigation.UserMenu name="Dana Brooks">
					<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="settings">Settings</DsDropdownMenu.Item>
					<DsDropdownMenu.Separator />
					<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
				</DsTopBarNavigation.UserMenu>
			</DsTopBarNavigation.Actions>
		</DsTopBarNavigation>
	),
};

/**
 * Account entries live in the user menu. Drive `open` yourself when the shell needs to close the
 * menu after routing; the menu is opened here so the entries are visible on load.
 */
export const UserMenuOpen: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [open, setOpen] = useState(true);

		return (
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo logo={<DapLogoMark />} wordmark="DAP" onAppsClick={() => {}} />
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
					<DsTopBarNavigation.UserMenu name="Dana Brooks" open={open} onOpenChange={setOpen}>
						<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						<DsDropdownMenu.Item value="settings">Settings</DsDropdownMenu.Item>
						<DsDropdownMenu.Separator />
						<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
					</DsTopBarNavigation.UserMenu>
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
		);
	},
};

/**
 * The app switcher as a platform shell wires it: `appsMenu` hands the brand-zone slot to a
 * `DsMainMenu`, so the button that only fired a callback in `Default` now opens the app grid.
 * Tiles carry branded SVG marks — `icon` takes a component, not only a Material icon name — and
 * the selected app drives the breadcrumb trail.
 */
export const WithMainMenu: Story = {
	decorators: [(Story) => withTanStackRouter(Story, '/')],
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [selectedAppId, setSelectedAppId] = useState('network-view');

		const apps = [
			{ id: 'my-dashboard', label: 'My dashboard', icon: MyDashboardIcon },
			{ id: 'network-view', label: 'Network view', icon: NetworkViewIcon },
			{ id: 'inventory', label: 'Inventory', icon: InventoryIcon },
			{ id: 'network-planning', label: 'Network planning', icon: NetworkPlanningIcon },
			{ id: 'configurations', label: 'Configurations', icon: ConfigurationsIcon },
			{ id: 'workflow-automation', label: 'Workflow automation', icon: WorkflowAutomationIcon },
			{ id: 'software-images', label: 'Software images', icon: SoftwareImagesIcon },
			{ id: 'tasks', label: 'Tasks', icon: TasksIcon },
			{ id: 'backup-files', label: 'Backup files', icon: BackupFilesIcon },
			{ id: 'ai-ops', label: 'AI-Ops', icon: AiOpsIcon },
			{ id: 'break-glass', label: 'Break glass', icon: BreakGlassIcon },
			{ id: 'administration', label: 'Administration', icon: AdministrationIcon },
			{ id: 'observability', label: 'Observability', icon: ObservabilityIcon },
			{ id: 'technician', label: 'Technician', icon: TechnicianIcon },
		];

		return (
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo
					logo={<DapLogoMark />}
					wordmark="DAP"
					href="/"
					appsMenu={
						<DsMainMenu
							trigger={
								<DsButtonV3
									variant="tertiary"
									color="light"
									size="small"
									icon="apps"
									aria-label="Switch application"
								/>
							}
							items={apps}
							utilityLinks={[
								{ id: 'help-support', label: 'Help & Support', icon: 'contact_support' },
								{ id: 'knowledge-center', label: 'Knowledge Center', icon: 'local_library' },
							]}
							selectedId={selectedAppId}
							onItemSelect={setSelectedAppId}
						/>
					}
				/>
				<DsTopBarNavigation.Breadcrumb>
					<DsBreadcrumb
						items={[
							{ type: 'link', label: 'Home', href: '/', icon: 'home' },
							{
								type: 'link',
								label: apps.find((app) => app.id === selectedAppId)?.label ?? '',
								href: '/',
							},
						]}
					/>
				</DsTopBarNavigation.Breadcrumb>
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
					<DsTopBarNavigation.UserMenu name="Dana Brooks">
						<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
					</DsTopBarNavigation.UserMenu>
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
		);
	},
};

/**
 * Same slot, `variant="expanded"`. Reach for this when the app names alone don't tell operators
 * what each app does — the wide cards pair the branded SVG mark with a `description`, and
 * `state` marks apps that are gated or not yet shipped. Opened on load so the panel is visible.
 */
export const WithMainMenuExpanded: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [open, setOpen] = useState(true);

		return (
			<DsTopBarNavigation>
				<DsTopBarNavigation.Logo
					logo={<DapLogoMark />}
					wordmark="DAP"
					appsMenu={
						<DsMainMenu
							variant="expanded"
							open={open}
							onOpenChange={setOpen}
							trigger={
								<DsButtonV3
									variant="tertiary"
									color="light"
									size="small"
									icon="apps"
									aria-label="Switch application"
								/>
							}
							items={[
								{
									id: 'my-dashboard',
									label: 'My dashboard',
									icon: MyDashboardIcon,
									description: 'Track and complete your personal or assigned network tasks.',
								},
								{
									id: 'network-view',
									label: 'Network view',
									icon: NetworkViewIcon,
									description: 'Monitor live topology, health, and traffic across the fabric.',
								},
								{
									id: 'inventory',
									label: 'Inventory',
									icon: InventoryIcon,
									description: 'Browse every managed device, port, and license in one place.',
								},
								{
									id: 'ai-ops',
									label: 'AI-Ops',
									icon: AiOpsIcon,
									description: 'Automated anomaly detection and remediation across the fabric.',
									state: 'comingSoon',
								},
								{
									id: 'break-glass',
									label: 'Break glass',
									icon: BreakGlassIcon,
									description: 'Emergency privileged access — restricted to authorized operators.',
									state: 'disabled',
								},
							]}
							utilityLinks={[
								{ id: 'help-support', label: 'Help & Support', icon: 'contact_support' },
								{ id: 'knowledge-center', label: 'Knowledge Center', icon: 'local_library' },
							]}
							selectedId="my-dashboard"
						/>
					}
				/>
				<DsTopBarNavigation.Center />
				<DsTopBarNavigation.Actions>
					<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
					<DsTopBarNavigation.UserMenu name="Dana Brooks">
						<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
						<DsDropdownMenu.Item value="logout">Log out</DsDropdownMenu.Item>
					</DsTopBarNavigation.UserMenu>
				</DsTopBarNavigation.Actions>
			</DsTopBarNavigation>
		);
	},
};
