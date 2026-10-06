import * as React from 'react';
import { useRef, useState } from 'react';
import {
	DsAvatar,
	DsButton,
	DsButtonV3,
	DsIcon,
	DsMainMenu,
	DsTypography,
	DsWorkspaceLayout,
	type DsMainMenuItem,
	type DsMainMenuUtilityLink,
} from '@drivenets/design-system';

// Owned preview: the story file imports './ds-main-menu.stories.module.scss' for two
// stories' layout chrome - `CustomAnchor` ("Custom anchor (sidebar trigger)":
// sidebarDemo/sidebar/anchorPoint/anchorLabel) and `InWorkspaceHeader` ("App switching
// in workspace header": appHeader/appHeaderLeft/appHeaderBrand/appHeaderSeparator/
// appHeaderApp/appStage). Story-local .scss can't compile in the lightweight
// story-preview pass (no Sass preprocessor), so every one of those classNames resolved
// to undefined - the sidebar demo lost its bordered flex box (icon + label stacked
// instead of a bordered two-column layout), and the workspace header lost its flex row
// (trigger / brand / separator / app name stacked vertically instead of inline, with no
// white text color against the blue header background). Reimplemented here with the
// same values inlined as plain style objects. The other 9 stories only use the meta's
// default `render` (or a close variant) with no story-local styling, so they're
// reproduced as-is.

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

// The story's SVG app-switcher items come from a stories-only helper
// (../../stories/sample-menu-icons, not a public export). The menu stays closed in
// every captured story that uses this set, so the icons themselves never paint -
// only `label` (read via `selectedAppId`) is observed. Plain Material icon names stand
// in here for type-shape parity.
const SAMPLE_SVG_ITEMS: DsMainMenuItem[] = [
	{ id: 'my-dashboard', label: 'My dashboard', icon: 'speed' },
	{ id: 'network-view', label: 'Network view', icon: 'lan' },
	{ id: 'inventory', label: 'Inventory', icon: 'inventory_2' },
	{ id: 'network-planning', label: 'Network planning', icon: 'account_tree' },
	{ id: 'configurations', label: 'Configurations', icon: 'tune' },
	{ id: 'workflow-automation', label: 'Workflow automation', icon: 'route' },
	{ id: 'software-images', label: 'Software images', icon: 'layers' },
	{ id: 'tasks', label: 'Tasks', icon: 'checklist' },
	{ id: 'backup-files', label: 'Backup files', icon: 'backup' },
	{ id: 'ai-ops', label: 'AI-Ops', icon: 'psychology' },
	{ id: 'break-glass', label: 'Break glass', icon: 'lock' },
	{ id: 'administration', label: 'Administration', icon: 'admin_panel_settings' },
	{ id: 'observability', label: 'Observability', icon: 'visibility' },
	{ id: 'technician', label: 'Technician', icon: 'engineering' },
];

const sidebarDemoStyle: React.CSSProperties = {
	display: 'flex',
	height: 400,
	border: '1px solid var(--border-primary)',
	borderRadius: 'var(--radius-md)',
	overflow: 'hidden',
};
const sidebarStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: 'var(--md) var(--sm)',
	gap: 'var(--sm)',
	background: 'var(--surface-secondary)',
	borderRight: '1px solid var(--border-primary)',
};
const anchorPointStyle: React.CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	padding: 'var(--md)',
	gap: 'var(--xs)',
	background: 'var(--surface-primary)',
};
const anchorLabelStyle: React.CSSProperties = {
	margin: 0,
	color: 'var(--font-secondary)',
	fontSize: 'var(--body-font-size-xs)',
};

const appHeaderStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 'var(--sm)',
	width: '100%',
};
const appHeaderLeftStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	gap: 'var(--sm)',
	minWidth: 0,
};
const appHeaderBrandStyle: React.CSSProperties = { color: 'var(--font-on-action)', whiteSpace: 'nowrap' };
const appHeaderSeparatorStyle: React.CSSProperties = {
	width: 1,
	height: 20,
	background: 'var(--font-on-action)',
	opacity: 0.4,
};
const appHeaderAppStyle: React.CSSProperties = { color: 'var(--font-on-action)', whiteSpace: 'nowrap' };
const appStageStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--xs)',
	maxWidth: 640,
};

const defaultTrigger = (
	<DsButton schema="secondary">
		<DsIcon icon="apps" /> Open main menu
	</DsButton>
);

export const Default = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		selectedId="network-visibility"
		items={[
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
		]}
		utilityLinks={SAMPLE_UTILITY_LINKS}
	/>
);

export const WithSelection = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={SAMPLE_ITEMS}
		utilityLinks={SAMPLE_UTILITY_LINKS}
		selectedId="packages"
	/>
);

export const ControlledSelection = () => {
	const [selectedId, setSelectedId] = useState('planning');

	return (
		<DsMainMenu
			trigger={defaultTrigger}
			variant="compact"
			side="bottom"
			align="start"
			gutter={8}
			aria-label="Main menu"
			items={SAMPLE_ITEMS}
			utilityLinks={SAMPLE_UTILITY_LINKS}
			selectedId={selectedId}
			onItemSelect={(id) => setSelectedId(id)}
		/>
	);
};

export const ItemStates = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={[
			{ id: 'available', label: 'My Dashboard', icon: 'speed' },
			{ id: 'disabled', label: 'My Dashboard', icon: 'speed', state: 'disabled' },
			{ id: 'coming-soon', label: 'My Dashboard', icon: 'speed', state: 'comingSoon' },
		]}
		utilityLinks={[]}
	/>
);

export const TileInteractionStates = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={[
			{ id: 'regular', label: 'My Dashboard', icon: 'speed' },
			{ id: 'selected', label: 'My Dashboard', icon: 'speed' },
		]}
		selectedId="selected"
		utilityLinks={[]}
	/>
);

export const WithHrefLinks = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={[
			{ id: 'dashboard', label: 'My dashboard', icon: 'speed', href: '/dashboard' },
			{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' },
			{ id: 'planning', label: 'Network planning', icon: 'account_tree', href: '/planning' },
		]}
		utilityLinks={[
			{ id: 'help', label: 'Help & Support', icon: 'contact_support', href: '/help' },
			{ id: 'docs', label: 'Knowledge Center', icon: 'local_library', href: '/docs' },
		]}
	/>
);

export const TriggerIcon = () => (
	<DsMainMenu
		trigger={
			<DsButton variant="borderless" aria-label="Open applications">
				<DsIcon icon="apps" />
			</DsButton>
		}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={SAMPLE_ITEMS}
		utilityLinks={SAMPLE_UTILITY_LINKS}
		selectedId="network-visibility"
	/>
);

export const WithSvgIcons = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="compact"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={SAMPLE_SVG_ITEMS}
		utilityLinks={SAMPLE_UTILITY_LINKS}
		selectedId="my-dashboard"
	/>
);

export const CustomAnchor = () => {
	const anchorRef = useRef<HTMLDivElement>(null);

	return (
		<div style={sidebarDemoStyle}>
			<div style={sidebarStyle}>
				<DsMainMenu
					trigger={
						<DsButton variant="borderless" aria-label="Open applications">
							<DsIcon icon="apps" />
						</DsButton>
					}
					variant="compact"
					gutter={8}
					aria-label="Main menu"
					items={SAMPLE_ITEMS}
					utilityLinks={SAMPLE_UTILITY_LINKS}
					selectedId="network-visibility"
					side="right"
					align="start"
					getAnchorElement={() => anchorRef.current}
				/>
			</div>
			<div style={anchorPointStyle} ref={anchorRef}>
				<p style={anchorLabelStyle}>Panel anchors here, not to the sidebar trigger.</p>
			</div>
		</div>
	);
};

export const InWorkspaceHeader = () => {
	const [selectedAppId, setSelectedAppId] = useState('my-dashboard');
	const selectedApp = SAMPLE_SVG_ITEMS.find((app) => app.id === selectedAppId);

	return (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div style={appHeaderStyle}>
					<div style={appHeaderLeftStyle}>
						<DsMainMenu
							trigger={
								<DsButtonV3 color="light" variant="tertiary" icon="apps" aria-label="Switch application" />
							}
							variant="compact"
							side="bottom"
							align="start"
							gutter={8}
							aria-label="Main menu"
							items={SAMPLE_SVG_ITEMS}
							utilityLinks={SAMPLE_UTILITY_LINKS}
							selectedId={selectedAppId}
							onItemSelect={(id) => setSelectedAppId(id)}
						/>
						<DsTypography variant="body-md-semi-bold" style={appHeaderBrandStyle}>
							DriveNets Cloud
						</DsTypography>
						<span style={appHeaderSeparatorStyle} aria-hidden="true" />
						<DsTypography variant="body-md-reg" style={appHeaderAppStyle}>
							{selectedApp?.label}
						</DsTypography>
					</div>
					<DsAvatar name="Ada Lovelace" size="sm" />
				</div>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.Content>
				<div style={appStageStyle}>
					<DsTypography variant="heading2">{selectedApp?.label}</DsTypography>
					<DsTypography variant="body-md-reg" color="secondary">
						Open the app switcher in the header to move between applications. The selected app is tracked with
						local component state — no router involved.
					</DsTypography>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout>
	);
};

export const Expanded = () => (
	<DsMainMenu
		trigger={defaultTrigger}
		variant="expanded"
		side="bottom"
		align="start"
		gutter={8}
		aria-label="Main menu"
		items={[
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
		]}
		utilityLinks={SAMPLE_UTILITY_LINKS}
		selectedId="my-dashboard"
	/>
);
