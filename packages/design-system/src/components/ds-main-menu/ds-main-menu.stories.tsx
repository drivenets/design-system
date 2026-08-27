import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { DsAvatar } from '../ds-avatar';
import { DsButton } from '../ds-button';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import { DsWorkspaceLayout } from '../ds-workspace-layout';
import { popoverAligns, popoverSides } from '../ds-popover';
import { DsMainMenu } from './index';
import { mainMenuVariants, type DsMainMenuItem, type DsMainMenuUtilityLink } from './ds-main-menu.types';
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
} from './stories/sample-menu-icons';
import styles from './ds-main-menu.stories.module.scss';

const SAMPLE_ITEMS: DsMainMenuItem[] = [
	{ id: 'network-visibility', label: 'Network visibility', icon: 'visibility' },
	{ id: 'planning', label: 'Planning', icon: 'account_tree' },
	{ id: 'configurations', label: 'Configurations', icon: 'tune' },
	{ id: 'deployments', label: 'Deployments', icon: 'rocket_launch' },
	{ id: 'workflows', label: 'Workflows', icon: 'route' },
	{ id: 'packages', label: 'Packages', icon: 'special-packages' },
	{ id: 'operations-ai', label: 'AI Ops', icon: 'psychology' },
	{ id: 'resource-allocation', label: 'Resource allocation', icon: 'dashboard_customize' },
	{ id: 'triggers', label: 'Triggers', icon: 'bolt' },
	{ id: 'referential-data', label: 'Referential data', icon: 'table_rows' },
];
const SAMPLE_UTILITY_LINKS: DsMainMenuUtilityLink[] = [
	{ id: 'help-support', label: 'Help & Support', icon: 'contact_support' },
	{ id: 'knowledge-center', label: 'Knowledge Center', icon: 'local_library' },
];

const SAMPLE_SVG_ITEMS: DsMainMenuItem[] = [
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

const meta: Meta<typeof DsMainMenu> = {
	title: 'Components/MainMenu',
	component: DsMainMenu,
	parameters: {
		layout: 'centered',
	},
	args: {
		variant: 'compact',
		items: SAMPLE_ITEMS,
		utilityLinks: SAMPLE_UTILITY_LINKS,
		side: 'bottom',
		align: 'start',
		gutter: 8,
		'aria-label': 'Main menu',
	},
	argTypes: {
		variant: { control: 'inline-radio', options: mainMenuVariants },
		side: { control: 'select', options: popoverSides },
		align: { control: 'select', options: popoverAligns },
		gutter: { control: { type: 'number', min: 0, step: 1 } },
		selectedId: { control: 'select', options: SAMPLE_ITEMS.map((item) => item.id) },
		'aria-label': { control: 'text' },
		items: { table: { disable: true } },
		utilityLinks: { table: { disable: true } },
		trigger: { table: { disable: true } },
		getAnchorElement: { table: { disable: true } },
		onItemSelect: { table: { disable: true } },
		onOpenChange: { table: { disable: true } },
		open: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	render: (args) => (
		<DsMainMenu
			{...args}
			trigger={
				args.trigger ?? (
					<DsButton schema="secondary">
						<DsIcon icon="apps" /> Open main menu
					</DsButton>
				)
			}
		/>
	),
};

export default meta;
type Story = StoryObj<typeof DsMainMenu>;

/**
 * The default app switcher. Open the menu, then use the Controls panel to change the item
 * size live via `variant` (`compact` square tiles vs `expanded` cards), along with `side`,
 * `align`, `gutter`, and `selectedId`. Items carry `description`s so the `expanded` size renders
 * fully.
 */
export const Default: Story = {
	args: {
		variant: 'compact',
		selectedId: 'network-visibility',
		items: [
			{
				id: 'network-visibility',
				label: 'Network visibility',
				icon: 'visibility',
				description: 'Monitor live topology, health, and traffic across the fabric.',
			},
			{
				id: 'planning',
				label: 'Planning',
				icon: 'account_tree',
				description: 'Model capacity and design topology changes before rollout.',
			},
			{
				id: 'configurations',
				label: 'Configurations',
				icon: 'tune',
				description: 'Manage device settings, templates, and intended state.',
			},
			{
				id: 'deployments',
				label: 'Deployments',
				icon: 'rocket_launch',
				description: 'Roll out software images and track deployment progress.',
			},
			{
				id: 'workflows',
				label: 'Workflows',
				icon: 'route',
				description: 'Automate multi-step operational tasks end to end.',
			},
			{
				id: 'packages',
				label: 'Packages',
				icon: 'special-packages',
				description: 'Browse and install optional platform capabilities.',
			},
		],
		utilityLinks: [
			{ id: 'help-support', label: 'Help & Support', icon: 'contact_support' },
			{ id: 'knowledge-center', label: 'Knowledge Center', icon: 'local_library' },
		],
	},
};

export const WithSelection: Story = {
	args: {
		items: SAMPLE_ITEMS,
		utilityLinks: SAMPLE_UTILITY_LINKS,
		selectedId: 'packages',
	},
};

export const ControlledSelection: Story = {
	render: (args) => {
		const [selectedId, setSelectedId] = useState('planning');

		return (
			<DsMainMenu
				{...args}
				trigger={
					args.trigger ?? (
						<DsButton schema="secondary">
							<DsIcon icon="apps" /> Open main menu
						</DsButton>
					)
				}
				items={SAMPLE_ITEMS}
				utilityLinks={SAMPLE_UTILITY_LINKS}
				selectedId={selectedId}
				onItemSelect={(id) => {
					const item = SAMPLE_ITEMS.find((entry) => entry.id === id);

					if (item?.state === 'disabled' || item?.state === 'comingSoon') {
						return;
					}

					setSelectedId(id);
				}}
			/>
		);
	},
};

export const ItemStates: Story = {
	args: {
		items: [
			{ id: 'available', label: 'My Dashboard', icon: 'speed' },
			{ id: 'disabled', label: 'My Dashboard', icon: 'speed', state: 'disabled' },
			{ id: 'coming-soon', label: 'My Dashboard', icon: 'speed', state: 'comingSoon' },
		],
		utilityLinks: [],
	},
};

export const TileInteractionStates: Story = {
	args: {
		items: [
			{ id: 'regular', label: 'My Dashboard', icon: 'speed' },
			{ id: 'selected', label: 'My Dashboard', icon: 'speed' },
		],
		selectedId: 'selected',
		utilityLinks: [],
	},
};

export const WithHrefLinks: Story = {
	args: {
		items: [
			{ id: 'dashboard', label: 'My dashboard', icon: 'speed', href: '/dashboard' },
			{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' },
			{ id: 'planning', label: 'Network planning', icon: 'account_tree', href: '/planning' },
		],
		utilityLinks: [
			{ id: 'help', label: 'Help & Support', icon: 'contact_support', href: '/help' },
			{ id: 'docs', label: 'Knowledge Center', icon: 'local_library', href: '/docs' },
		],
	},
};

export const TriggerIcon: Story = {
	args: {
		trigger: (
			<DsButton variant="borderless" aria-label="Open applications">
				<DsIcon icon="apps" />
			</DsButton>
		),
		items: SAMPLE_ITEMS,
		utilityLinks: SAMPLE_UTILITY_LINKS,
		selectedId: 'network-visibility',
	},
};

export const WithSvgIcons: Story = {
	args: {
		items: SAMPLE_SVG_ITEMS,
		utilityLinks: SAMPLE_UTILITY_LINKS,
		selectedId: 'my-dashboard',
	},
};

export const CustomAnchor: Story = {
	name: 'Custom anchor (sidebar trigger)',
	render: (args) => {
		const anchorRef = useRef<HTMLDivElement>(null);

		return (
			<div className={styles.sidebarDemo}>
				<div className={styles.sidebar}>
					<DsMainMenu
						{...args}
						trigger={
							args.trigger ?? (
								<DsButton variant="borderless" aria-label="Open applications">
									<DsIcon icon="apps" />
								</DsButton>
							)
						}
						items={SAMPLE_ITEMS}
						utilityLinks={SAMPLE_UTILITY_LINKS}
						selectedId="network-visibility"
						side="right"
						align="start"
						getAnchorElement={() => anchorRef.current}
					/>
				</div>
				<div className={styles.anchorPoint} ref={anchorRef}>
					<p className={styles.anchorLabel}>Panel anchors here, not to the sidebar trigger.</p>
				</div>
			</div>
		);
	},
};

export const InWorkspaceHeader: Story = {
	name: 'App switching in workspace header',
	parameters: { layout: 'fullscreen' },
	render: (args) => {
		const [selectedAppId, setSelectedAppId] = useState('my-dashboard');
		const selectedApp = SAMPLE_SVG_ITEMS.find((app) => app.id === selectedAppId);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.appHeader}>
						<div className={styles.appHeaderLeft}>
							<DsMainMenu
								{...args}
								trigger={
									args.trigger ?? (
										<DsButtonV3
											color="light"
											variant="tertiary"
											icon="apps"
											aria-label="Switch application"
										/>
									)
								}
								items={SAMPLE_SVG_ITEMS}
								utilityLinks={SAMPLE_UTILITY_LINKS}
								selectedId={selectedAppId}
								onItemSelect={(id) => setSelectedAppId(id)}
							/>
							<DsTypography variant="body-md-semi-bold" className={styles.appHeaderBrand}>
								DriveNets Cloud
							</DsTypography>
							<span className={styles.appHeaderSeparator} aria-hidden="true" />
							<DsTypography variant="body-md-reg" className={styles.appHeaderApp}>
								{selectedApp?.label}
							</DsTypography>
						</div>
						<DsAvatar name="Ada Lovelace" size="sm" />
					</div>
				</DsWorkspaceLayout.Header>

				<DsWorkspaceLayout.Content>
					<div className={styles.appStage}>
						<DsTypography variant="heading2">{selectedApp?.label}</DsTypography>
						<DsTypography variant="body-md-reg" color="secondary">
							Open the app switcher in the header to move between applications. The selected app is tracked
							with local component state — no router involved.
						</DsTypography>
					</div>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout>
		);
	},
};

export const Expanded: Story = {
	name: 'Expanded variant',
	args: {
		variant: 'expanded',
		items: [
			{
				id: 'my-dashboard',
				label: 'My dashboard',
				icon: 'speed',
				description: 'Track and complete your personal or assigned network tasks.',
			},
			{
				id: 'inventory',
				label: 'Inventory',
				icon: 'inventory_2',
				description: 'Browse every managed device, port, and license in one place.',
			},
			{
				id: 'planning',
				label: 'Network planning',
				icon: 'account_tree',
				description: 'Model capacity and design topology changes before rollout.',
				state: 'extend',
			},
			{
				id: 'ai-ops',
				label: 'AI Ops',
				icon: 'psychology',
				description: 'Automated anomaly detection and remediation across the fabric.',
				state: 'comingSoon',
			},
			{
				id: 'break-glass',
				label: 'Break glass',
				icon: 'lock',
				description: 'Emergency privileged access — restricted to authorized operators.',
				state: 'disabled',
			},
		],
		utilityLinks: SAMPLE_UTILITY_LINKS,
		selectedId: 'my-dashboard',
	},
};
