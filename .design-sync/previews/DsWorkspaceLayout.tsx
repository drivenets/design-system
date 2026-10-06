import * as React from 'react';
import { useState } from 'react';
import {
	DsWorkspaceLayout,
	DsButtonV3,
	DsTypography,
	DsIcon,
	DsStack,
	DsStatusBadge,
	DsStatusBadgeV2,
	DsDrawer,
	DsStepper,
	DsStep,
	DsStepContent,
	DsNextStepButton,
} from '@drivenets/design-system';

// Owned preview: `./ds-workspace-layout.stories.module.scss` supplies demo-only classes
// (`.projectName`, `.lastUpdate`, `.card`, `.fillParentHost`, `.extendedMainContent`,
// `.footerStepper`, `.sideMenu`/`.sideMenuItem`/`.sideMenuItemLabel`, `.leftPanelContent`,
// `.leftPanelHeader`, `.leftPanelBody`, `.canvasSurface`, `.workflowInfoPanel`,
// `.workflowInfoItem`) that resolve to `undefined` in the lightweight story-preview pass
// (no Sass preprocessor) — confirmed visibly: the bordered `.card` boxes around content
// sections disappeared, `.projectName`'s on-action (white-on-blue) text color was lost,
// etc. Fixed by inlining every class as a plain style object (every slot here is
// `ComponentPropsWithRef<'div'|'header'|'footer'|'aside'>`, so `style` is always
// supported). Exception: `.sideMenu`/`.sideMenuItemLabel` encode a descendant-selector
// rule gated on the real `DsWorkspaceLayout.SideMenu`'s own `data-expanded` attribute
// (set by the component itself, not story-local) — an ancestor-attribute-gates-child
// rule can't be expressed via inline style on the child alone, so (same technique as
// DsCatalogLayout's Locale fix / DsStepper's CustomizedVertical) it's reproduced with
// literal class names plus a scoped `<style>` tag.
//
// No breadcrumb/router usage in this story file (confirmed via grep) — unaffected by
// the known DsBreadcrumb/@tanstack-react-router context-duplication limitation.
// `WithDrawer`/`WithDrawerAndBackdrop`/`ExtendedCombined` use `DsDrawer` with the real
// default `portal={false}` deliberately (the component's own docs: "Wrap a DsDrawer
// inside WorkspaceLayout.Content (with portal={false}) and the drawer renders below the
// header/subheader and above the footer automatically") — not changed to `portal=true`,
// since that would misrepresent this documented containment pattern. All three also
// render closed by default (no story opens the drawer eagerly), so the harness
// transform trap never manifests here either way.

const SIDE_MENU_CLASS = 'ds-preview-ws-side-menu';
const SIDE_MENU_ITEM_CLASS = 'ds-preview-ws-side-menu-item';
const SIDE_MENU_ITEM_LABEL_CLASS = 'ds-preview-ws-side-menu-item-label';

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
			.${SIDE_MENU_ITEM_CLASS}[data-selected] { background: var(--background-action-tertiary); color: var(--font-action); }
			.${SIDE_MENU_ITEM_LABEL_CLASS} {
				max-width: 0;
				overflow: hidden;
				white-space: nowrap;
				opacity: 0;
				transition: max-width 0.2s, opacity 0.2s, margin-inline-start 0.2s;
			}
		`}
	</style>
);

const projectNameStyle: React.CSSProperties = { color: 'var(--font-on-action)' };
const lastUpdateStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	gap: 'var(--xs)',
	color: 'var(--font-on-action)',
	whiteSpace: 'nowrap',
};
const cardStyle: React.CSSProperties = {
	padding: 'var(--lg)',
	borderRadius: 'var(--xs)',
	border: '1px solid var(--border)',
	background: 'var(--background)',
	marginBottom: 'var(--standard)',
};
const fillParentHostStyle: React.CSSProperties = { height: '400px', border: '2px dashed var(--border)' };
const extendedMainContentStyle: React.CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: 'var(--standard)',
	minHeight: 0,
};
const footerStepperStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	overflowX: 'auto',
};
const leftPanelContentStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	minHeight: 0,
	borderInlineEnd: '1px solid var(--border)',
	background: 'var(--background)',
};
const leftPanelHeaderStyle: React.CSSProperties = {
	flexShrink: 0,
	padding: 'var(--standard)',
	borderBottom: '1px solid var(--border)',
};
const leftPanelBodyStyle: React.CSSProperties = {
	flex: 1,
	minHeight: 0,
	padding: 'var(--standard)',
	overflow: 'auto',
};
const canvasSurfaceStyle: React.CSSProperties = {
	flex: 1,
	minHeight: 0,
	borderRadius: 'var(--xs)',
	border: '1px solid var(--border)',
	background: 'var(--background-page)',
};
const workflowInfoPanelStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--sm)',
	padding: 'var(--standard)',
	borderRadius: 'var(--xs)',
	border: '1px solid var(--border)',
	background: 'var(--background)',
};
const workflowInfoItemStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--3xs)',
};

const workspaceSteps = [
	{ label: 'Project details', description: 'Enter project name and basic configuration' },
	{ label: 'Select market', description: 'Choose the target market for deployment' },
	{ label: 'Design policy', description: 'Define the design constraints and rules' },
];

const SideMenuItems = () => (
	<>
		<button
			type="button"
			className={SIDE_MENU_ITEM_CLASS}
			aria-label="Overview"
			aria-current="page"
			data-selected
		>
			<DsIcon icon="dashboard" size="small" />
			<DsTypography variant="body-sm-md" className={SIDE_MENU_ITEM_LABEL_CLASS}>
				Overview
			</DsTypography>
		</button>
		<button type="button" className={SIDE_MENU_ITEM_CLASS} aria-label="Resources">
			<DsIcon icon="view_list" size="small" />
			<DsTypography variant="body-sm-md" className={SIDE_MENU_ITEM_LABEL_CLASS}>
				Resources
			</DsTypography>
		</button>
		<button type="button" className={SIDE_MENU_ITEM_CLASS} aria-label="Settings">
			<DsIcon icon="settings" size="small" />
			<DsTypography variant="body-sm-md" className={SIDE_MENU_ITEM_LABEL_CLASS}>
				Settings
			</DsTypography>
		</button>
		<button type="button" className={SIDE_MENU_ITEM_CLASS} aria-label="Help">
			<DsIcon icon="help" size="small" />
			<DsTypography variant="body-sm-md" className={SIDE_MENU_ITEM_LABEL_CLASS}>
				Help
			</DsTypography>
		</button>
	</>
);

export const Default = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>

		<DsWorkspaceLayout.SubHeader>
			<DsStack direction="row" alignItems="center" gap={12} width="100%">
				<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
				<DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
			</DsStack>
		</DsWorkspaceLayout.SubHeader>

		<DsWorkspaceLayout.Content>
			<div style={cardStyle}>
				<DsTypography variant="heading3">Welcome</DsTypography>
				<DsTypography variant="body-md-reg">This is the main content area of the workspace.</DsTypography>
			</div>
			<div style={cardStyle}>
				<DsTypography variant="heading3">Section 2</DsTypography>
				<DsTypography variant="body-md-reg">Another content section.</DsTypography>
			</div>
		</DsWorkspaceLayout.Content>

		<DsWorkspaceLayout.Footer>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-xs-reg" color="secondary">
					v1.2.0
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="tertiary" size="small">
						Help
					</DsButtonV3>
					<DsButtonV3 variant="tertiary" size="small">
						Feedback
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Footer>
	</DsWorkspaceLayout>
);

export const HeaderDraft = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" alignItems="center" gap={4} width="100%">
				<DsStack direction="row" alignItems="center" gap={8}>
					<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
						Close
					</DsButtonV3>
				</DsStack>
				<DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project -23-May-2024 04:47 PM
					</DsTypography>
					<DsIcon icon="info" size="tiny" />
					<DsStatusBadgeV2 phase="temporary" label="Draft" size="small" />
				</DsStack>
				<DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
					<DsButtonV3
						variant="tertiary"
						color="light"
						size="small"
						icon="more_vert"
						aria-label="More actions"
					/>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>

		<DsWorkspaceLayout.Content>
			<div style={cardStyle}>
				<DsTypography variant="heading3">Draft header</DsTypography>
				<DsTypography variant="body-md-reg">
					Brand Refresh draft chrome with Discard and Save project actions.
				</DsTypography>
			</div>
		</DsWorkspaceLayout.Content>
	</DsWorkspaceLayout>
);

export const HeaderPending = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" alignItems="center" gap={4} width="100%">
				<DsStack direction="row" alignItems="center" gap={8}>
					<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
						Close
					</DsButtonV3>
				</DsStack>
				<DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project -23-May-2024 04:47 PM
					</DsTypography>
					<DsIcon icon="info" size="tiny" />
					<DsStatusBadgeV2 phase="pending" label="Pending" size="small" />
				</DsStack>
				<DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
					<DsButtonV3
						variant="tertiary"
						color="light"
						size="small"
						icon="more_vert"
						aria-label="More actions"
					/>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>

		<DsWorkspaceLayout.Content>
			<div style={cardStyle}>
				<DsTypography variant="heading3">Pending header</DsTypography>
				<DsTypography variant="body-md-reg">
					Brand Refresh pending chrome with Discard and Save project actions.
				</DsTypography>
			</div>
		</DsWorkspaceLayout.Content>
	</DsWorkspaceLayout>
);

export const HeaderRunning = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" alignItems="center" gap={4} width="100%">
				<DsStack direction="row" alignItems="center" gap={8}>
					<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
						Close
					</DsButtonV3>
					<DsButtonV3 variant="secondary" color="light" size="small" icon="keyboard_double_arrow_left">
						Previous
					</DsButtonV3>
					<DsButtonV3 variant="secondary" color="light" size="small">
						Next
					</DsButtonV3>
				</DsStack>
				<DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project -23-May-2024 04:47 PM
					</DsTypography>
					<DsIcon icon="info" size="tiny" />
					<DsStatusBadgeV2 phase="execution" label="Running" size="small" />
				</DsStack>
				<DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
					<DsStack direction="row" alignItems="center" gap={8} style={lastUpdateStyle}>
						<DsIcon icon="history_2" size="small" />
						<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
					</DsStack>
					<DsButtonV3
						variant="tertiary"
						color="light"
						size="small"
						icon="more_vert"
						aria-label="More actions"
					/>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>

		<DsWorkspaceLayout.Content>
			<div style={cardStyle}>
				<DsTypography variant="heading3">Running header</DsTypography>
				<DsTypography variant="body-md-reg">
					Brand Refresh running chrome with Previous/Next navigation and last-update meta.
				</DsTypography>
			</div>
		</DsWorkspaceLayout.Content>
	</DsWorkspaceLayout>
);

export const WithDrawer = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project
					</DsTypography>
					<DsStack direction="row" gap={8} alignItems="center">
						<DsButtonV3 variant="secondary" color="light" size="small">
							Discard
						</DsButtonV3>
						<DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
							Save project
						</DsButtonV3>
					</DsStack>
				</DsStack>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.SubHeader>
				<DsStack direction="row" alignItems="center" gap={12} width="100%">
					<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
				</DsStack>
			</DsWorkspaceLayout.SubHeader>

			<DsWorkspaceLayout.Content>
				<div style={cardStyle}>
					<DsTypography variant="heading3">Drawer containment</DsTypography>
					<DsTypography variant="body-md-reg">
						Click &quot;Save project&quot; in the header to open the drawer. It renders inside Content — below
						the header/subheader and above the footer.
					</DsTypography>
				</div>

				<DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4}>
					<DsDrawer.Header>
						<DsDrawer.Title>Details</DsDrawer.Title>
						<DsDrawer.CloseTrigger />
					</DsDrawer.Header>
					<DsDrawer.Body>
						<DsTypography variant="body-md-reg">
							This drawer is contained within the content area.
						</DsTypography>
					</DsDrawer.Body>
					<DsDrawer.Footer>
						<DsDrawer.Actions>
							<DsButtonV3 variant="tertiary" size="large" onClick={() => setDrawerOpen(false)}>
								Cancel
							</DsButtonV3>
							<DsButtonV3 variant="primary" size="large">
								Save
							</DsButtonV3>
						</DsDrawer.Actions>
					</DsDrawer.Footer>
				</DsDrawer>
			</DsWorkspaceLayout.Content>

			<DsWorkspaceLayout.Footer>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-xs-reg" color="secondary">
						v1.2.0
					</DsTypography>
				</DsStack>
			</DsWorkspaceLayout.Footer>
		</DsWorkspaceLayout>
	);
};

export const WithDrawerAndBackdrop = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project
					</DsTypography>
					<DsStack direction="row" gap={8} alignItems="center">
						<DsButtonV3 variant="secondary" color="light" size="small">
							Discard
						</DsButtonV3>
						<DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
							Save project
						</DsButtonV3>
					</DsStack>
				</DsStack>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.SubHeader>
				<DsStack direction="row" alignItems="center" gap={12} width="100%">
					<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
				</DsStack>
			</DsWorkspaceLayout.SubHeader>

			<DsWorkspaceLayout.Content>
				<div style={cardStyle}>
					<DsTypography variant="heading3">Backdrop containment</DsTypography>
					<DsTypography variant="body-md-reg">
						Click &quot;Save project&quot; to open the drawer. The backdrop only covers the content area, not
						the header or footer.
					</DsTypography>
				</div>

				<DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
					<DsDrawer.Header>
						<DsDrawer.Title>Modal Drawer</DsDrawer.Title>
						<DsDrawer.CloseTrigger />
					</DsDrawer.Header>
					<DsDrawer.Body>
						<DsTypography variant="body-md-reg">The backdrop is scoped to the content area.</DsTypography>
					</DsDrawer.Body>
				</DsDrawer>
			</DsWorkspaceLayout.Content>

			<DsWorkspaceLayout.Footer>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-xs-reg" color="secondary">
						v1.2.0
					</DsTypography>
				</DsStack>
			</DsWorkspaceLayout.Footer>
		</DsWorkspaceLayout>
	);
};

export const FillParent = () => (
	<div style={fillParentHostStyle}>
		<DsWorkspaceLayout fillParent>
			<DsWorkspaceLayout.Header>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-sm-reg" style={projectNameStyle}>
						Untitled Project
					</DsTypography>
					<DsStack direction="row" gap={8} alignItems="center">
						<DsButtonV3 variant="secondary" color="light" size="small">
							Discard
						</DsButtonV3>
						<DsButtonV3 variant="primary" color="light" size="small">
							Save project
						</DsButtonV3>
					</DsStack>
				</DsStack>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.Content>
				<DsTypography variant="body-md-reg">
					This workspace fills its parent container (400px) instead of the viewport.
				</DsTypography>
			</DsWorkspaceLayout.Content>

			<DsWorkspaceLayout.Footer>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<DsTypography variant="body-xs-reg" color="secondary">
						v1.2.0
					</DsTypography>
				</DsStack>
			</DsWorkspaceLayout.Footer>
		</DsWorkspaceLayout>
	</div>
);

export const HeaderOnly = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>

		<DsWorkspaceLayout.Content>
			<div style={cardStyle}>
				<DsTypography variant="heading3">No SubHeader or Footer</DsTypography>
				<DsTypography variant="body-md-reg">
					All sub-components are optional. Use only what you need.
				</DsTypography>
			</div>
		</DsWorkspaceLayout.Content>
	</DsWorkspaceLayout>
);

export const ExtendedStepperBelow = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>
		<DsWorkspaceLayout.Body>
			<DsWorkspaceLayout.Content>
				<div style={extendedMainContentStyle}>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
						<DsTypography variant="heading3">Project workspace</DsTypography>
						<DsButtonV3 variant="secondary" size="small" icon="edit">
							Edit
						</DsButtonV3>
					</DsStack>
					<div style={cardStyle}>
						<DsTypography variant="body-md-reg">
							Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.
						</DsTypography>
					</div>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout.Body>
		<DsWorkspaceLayout.Footer>
			<div style={footerStepperStyle}>
				<DsStepper
					count={workspaceSteps.length}
					orientation="horizontal"
					actions={<DsNextStepButton>Next</DsNextStepButton>}
				>
					{workspaceSteps.map((step, index) => (
						<DsStep index={index} key={index}>
							<DsStepContent index={index} label={step.label} description={step.description} />
						</DsStep>
					))}
				</DsStepper>
			</div>
		</DsWorkspaceLayout.Footer>
	</DsWorkspaceLayout>
);

export const ExtendedStepperAside = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>
		<DsWorkspaceLayout.Body>
			<DsWorkspaceLayout.LeftPanel>
				<div style={leftPanelContentStyle}>
					<div style={leftPanelHeaderStyle}>
						<DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
					</div>
					<div style={leftPanelBodyStyle}>
						<DsStepper count={workspaceSteps.length}>
							{workspaceSteps.map((step, index) => (
								<DsStep index={index} key={index}>
									<DsStepContent
										index={index}
										label={step.label}
										description={step.description}
										actions={
											<DsNextStepButton>
												{index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
											</DsNextStepButton>
										}
									/>
								</DsStep>
							))}
						</DsStepper>
					</div>
				</div>
			</DsWorkspaceLayout.LeftPanel>
			<DsWorkspaceLayout.Content>
				<div style={extendedMainContentStyle}>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
						<DsTypography variant="heading3">Project workspace</DsTypography>
						<DsButtonV3 variant="secondary" size="small" icon="edit">
							Edit
						</DsButtonV3>
					</DsStack>
					<div style={cardStyle}>
						<DsTypography variant="body-md-reg">
							Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.
						</DsTypography>
					</div>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout.Body>
	</DsWorkspaceLayout>
);

export const ExtendedSideMenuAndLeftPanel = () => {
	const [pinned, setPinned] = useState(false);

	return (
		<>
			<SideMenuStyles />
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
						<DsTypography variant="body-sm-reg" style={projectNameStyle}>
							Untitled Project
						</DsTypography>
						<DsStack direction="row" gap={8} alignItems="center">
							<DsButtonV3 variant="secondary" color="light" size="small">
								Discard
							</DsButtonV3>
							<DsButtonV3 variant="primary" color="light" size="small">
								Save project
							</DsButtonV3>
						</DsStack>
					</DsStack>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
						<SideMenuItems />
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div style={leftPanelContentStyle}>
							<div style={leftPanelHeaderStyle}>
								<DsTypography variant="body-sm-semi-bold">Filters</DsTypography>
							</div>
							<div style={leftPanelBodyStyle}>
								<DsTypography variant="body-sm-reg">
									Docked panel in the left side panel slot — always visible, no collapse.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.LeftPanel>
					<DsWorkspaceLayout.Content>
						<div style={extendedMainContentStyle}>
							<DsStack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								gap={12}
								width="100%"
							>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButtonV3 variant="secondary" size="small" icon="edit">
									Edit
								</DsButtonV3>
							</DsStack>
							<div style={cardStyle}>
								<DsTypography variant="body-md-reg">
									Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
									Body.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.Content>
				</DsWorkspaceLayout.Body>
			</DsWorkspaceLayout>
		</>
	);
};

export const ExtendedWithCanvas = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>
		<DsWorkspaceLayout.Body>
			<DsWorkspaceLayout.Content>
				<DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
					<DsTypography variant="heading3">Network topology</DsTypography>
					<DsButtonV3 variant="secondary" size="small" icon="fullscreen">
						Expand
					</DsButtonV3>
				</DsStack>
				<div style={canvasSurfaceStyle} aria-label="Canvas">
					<DsTypography variant="body-md-reg">
						Map or diagram canvas fills the remaining content area.
					</DsTypography>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout.Body>
	</DsWorkspaceLayout>
);

export const ExtendedSideMenuLeftPanel = () => {
	const [pinned, setPinned] = useState(false);

	return (
		<>
			<SideMenuStyles />
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
						<DsTypography variant="body-sm-reg" style={projectNameStyle}>
							Untitled Project
						</DsTypography>
						<DsStack direction="row" gap={8} alignItems="center">
							<DsButtonV3 variant="secondary" color="light" size="small">
								Discard
							</DsButtonV3>
							<DsButtonV3 variant="primary" color="light" size="small">
								Save project
							</DsButtonV3>
						</DsStack>
					</DsStack>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
						<SideMenuItems />
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div style={leftPanelContentStyle}>
							<div style={leftPanelHeaderStyle}>
								<DsTypography variant="body-sm-semi-bold">Section navigation</DsTypography>
							</div>
							<div style={leftPanelBodyStyle}>
								<DsStepper count={workspaceSteps.length}>
									{workspaceSteps.map((step, index) => (
										<DsStep index={index} key={index}>
											<DsStepContent
												index={index}
												label={step.label}
												description={step.description}
												actions={
													<DsNextStepButton>
														{index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
													</DsNextStepButton>
												}
											/>
										</DsStep>
									))}
								</DsStepper>
							</div>
						</div>
					</DsWorkspaceLayout.LeftPanel>
					<DsWorkspaceLayout.Content>
						<div style={extendedMainContentStyle}>
							<DsStack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								gap={12}
								width="100%"
							>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButtonV3 variant="secondary" size="small" icon="edit">
									Edit
								</DsButtonV3>
							</DsStack>
							<div style={cardStyle}>
								<DsTypography variant="body-md-reg">
									Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
									Body.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.Content>
				</DsWorkspaceLayout.Body>
			</DsWorkspaceLayout>
		</>
	);
};

export const ExtendedCombined = () => {
	const [pinned, setPinned] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<SideMenuStyles />
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
						<DsTypography variant="body-sm-reg" style={projectNameStyle}>
							Untitled Project
						</DsTypography>
						<DsStack direction="row" gap={8} alignItems="center">
							<DsButtonV3 variant="secondary" color="light" size="small">
								Discard
							</DsButtonV3>
							<DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
								Save project
							</DsButtonV3>
						</DsStack>
					</DsStack>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={SIDE_MENU_CLASS}>
						<SideMenuItems />
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div style={leftPanelContentStyle}>
							<div style={leftPanelHeaderStyle}>
								<DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
							</div>
							<div style={leftPanelBodyStyle}>
								<DsStepper count={workspaceSteps.length}>
									{workspaceSteps.map((step, index) => (
										<DsStep index={index} key={index}>
											<DsStepContent
												index={index}
												label={step.label}
												description={step.description}
												actions={
													<DsNextStepButton>
														{index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
													</DsNextStepButton>
												}
											/>
										</DsStep>
									))}
								</DsStepper>
							</div>
						</div>
					</DsWorkspaceLayout.LeftPanel>
					<DsWorkspaceLayout.Content>
						<div style={extendedMainContentStyle}>
							<DsStack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								gap={12}
								width="100%"
							>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButtonV3 variant="secondary" size="small" icon="edit">
									Edit
								</DsButtonV3>
							</DsStack>
							<div style={cardStyle}>
								<DsTypography variant="body-md-reg">
									Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
									Body.
								</DsTypography>
							</div>
						</div>
						<DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
							<DsDrawer.Header>
								<DsDrawer.Title>Comments</DsDrawer.Title>
								<DsDrawer.CloseTrigger />
							</DsDrawer.Header>
							<DsDrawer.Body>
								<DsTypography variant="body-md-reg">Right drawer scoped to Content.</DsTypography>
							</DsDrawer.Body>
						</DsDrawer>
					</DsWorkspaceLayout.Content>
				</DsWorkspaceLayout.Body>
				<DsWorkspaceLayout.Footer>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
						<DsTypography variant="body-xs-reg" color="secondary">
							v1.2.0
						</DsTypography>
					</DsStack>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>
		</>
	);
};

export const ExtendedWorkflowInfoPanel = () => (
	<DsWorkspaceLayout>
		<DsWorkspaceLayout.Header>
			<DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
				<DsTypography variant="body-sm-reg" style={projectNameStyle}>
					Untitled Project
				</DsTypography>
				<DsStack direction="row" gap={8} alignItems="center">
					<DsButtonV3 variant="secondary" color="light" size="small">
						Discard
					</DsButtonV3>
					<DsButtonV3 variant="primary" color="light" size="small">
						Save project
					</DsButtonV3>
				</DsStack>
			</DsStack>
		</DsWorkspaceLayout.Header>
		<DsWorkspaceLayout.Body>
			<DsWorkspaceLayout.Content>
				<div style={extendedMainContentStyle}>
					<DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
						<DsTypography variant="heading3">Approval workflow</DsTypography>
					</DsStack>
					<div style={workflowInfoPanelStyle}>
						<div style={workflowInfoItemStyle}>
							<DsTypography variant="body-sm-semi-bold">Status</DsTypography>
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div style={workflowInfoItemStyle}>
							<DsTypography variant="body-sm-semi-bold">Owner</DsTypography>
							<DsTypography variant="body-sm-reg">Network Operations</DsTypography>
						</div>
						<div style={workflowInfoItemStyle}>
							<DsTypography variant="body-sm-semi-bold">Last review</DsTypography>
							<DsTypography variant="body-sm-reg">2 days ago</DsTypography>
						</div>
					</div>
					<div style={cardStyle}>
						<DsTypography variant="body-md-reg">
							Workflow metadata is consumer markup — not a design-system layout slot.
						</DsTypography>
					</div>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout.Body>
	</DsWorkspaceLayout>
);
