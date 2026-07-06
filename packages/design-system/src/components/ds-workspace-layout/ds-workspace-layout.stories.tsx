import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsWorkspaceLayout from './ds-workspace-layout';
import { DsButton } from '../ds-button';
import { DsTypography } from '../ds-typography';
import { DsIcon } from '../ds-icon';
import { DsStatusBadge } from '../ds-status-badge';
import { DsDrawer } from '../ds-drawer';
import { DsStepper, DsStep, DsStepContent, DsNextStepButton } from '../ds-stepper';
import styles from './ds-workspace-layout.stories.module.scss';

const meta: Meta<typeof DsWorkspaceLayout> = {
	title: 'Components/WorkspaceLayout',
	component: DsWorkspaceLayout,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
A compound layout component for composing full-screen workspace views.

### Simple shell (default)

- **WorkspaceLayout** — full-screen flex-column surface
- **WorkspaceLayout.Header** — top bar with blue gradient (above drawers)
- **WorkspaceLayout.SubHeader** — optional top stepper band
- **WorkspaceLayout.Content** — content area: column layout, 24px vertical margins, 16px vertical gap, 40px horizontal margins (24px when \`LeftPanel\` is mounted). Title line and content items are consumer markup inside.
- **WorkspaceLayout.Footer** — optional bottom stepper band

Use \`Content\` for the work area. Nest \`Content\` inside \`Body\` when using \`SideMenu\` or \`LeftPanel\`.

### Extended shell (opt-in)

- **WorkspaceLayout.Body** — horizontal band below header/subheader for side chrome and content column
- **WorkspaceLayout.SideMenu** — optional collapsed rail (60px); hover expands to 256px; pin pushes content
- **WorkspaceLayout.LeftPanel** — optional left side panel; reduces content horizontal margins to 24px

Right-side overlays belong in **Content** (inside **Body**) via \`DsDrawer\` — header and body chrome stay visible.

### Drawer containment

Wrap a \`DsDrawer\` inside \`WorkspaceLayout.Content\` (with \`portal={false}\`) and
the drawer renders below the header/subheader and above the footer automatically.

### Notification z-index

If you render a notification/toast inside the workspace and it gets hidden
behind a modal or dialog, render the toast via a portal or increase its
\`--z-index\` CSS variable.
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

type Story = StoryObj<typeof DsWorkspaceLayout>;

const workspaceSteps = [
	{ label: 'Project details', description: 'Enter project name and basic configuration' },
	{ label: 'Select market', description: 'Choose the target market for deployment' },
	{ label: 'Design policy', description: 'Define the design constraints and rules' },
];

export const Default: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.SubHeader>
				<div className={styles.subHeaderContent}>
					<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					<DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
				</div>
			</DsWorkspaceLayout.SubHeader>

			<DsWorkspaceLayout.Content>
				<div className={styles.card}>
					<DsTypography variant="heading3">Welcome</DsTypography>
					<DsTypography variant="body-md-reg">This is the main content area of the workspace.</DsTypography>
				</div>
				<div className={styles.card}>
					<DsTypography variant="heading3">Section 2</DsTypography>
					<DsTypography variant="body-md-reg">Another content section.</DsTypography>
				</div>
			</DsWorkspaceLayout.Content>

			<DsWorkspaceLayout.Footer>
				<div className={styles.footerContent}>
					<span>v1.2.0</span>
					<div className={styles.footerActions}>
						<DsButton variant="tertiary" size="small">
							Help
						</DsButton>
						<DsButton variant="tertiary" size="small">
							Feedback
						</DsButton>
					</div>
				</div>
			</DsWorkspaceLayout.Footer>
		</DsWorkspaceLayout>
	),
};

export const WithDrawer: Story = {
	render: () => {
		const [drawerOpen, setDrawerOpen] = useState(false);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>

				<DsWorkspaceLayout.SubHeader>
					<div className={styles.subHeaderContent}>
						<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					</div>
				</DsWorkspaceLayout.SubHeader>

				<DsWorkspaceLayout.Content>
					<div className={styles.card}>
						<DsTypography variant="heading3">Drawer containment</DsTypography>
						<DsTypography variant="body-md-reg">
							Click &quot;Save project&quot; in the header to open the drawer. It renders inside Content —
							below the header/subheader and above the footer.
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
								<DsButton variant="tertiary" size="large" onClick={() => setDrawerOpen(false)}>
									Cancel
								</DsButton>
								<DsButton variant="primary" size="large">
									Save
								</DsButton>
							</DsDrawer.Actions>
						</DsDrawer.Footer>
					</DsDrawer>
				</DsWorkspaceLayout.Content>

				<DsWorkspaceLayout.Footer>
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>
		);
	},
};

export const WithDrawerAndBackdrop: Story = {
	render: () => {
		const [drawerOpen, setDrawerOpen] = useState(false);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>

				<DsWorkspaceLayout.SubHeader>
					<div className={styles.subHeaderContent}>
						<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					</div>
				</DsWorkspaceLayout.SubHeader>

				<DsWorkspaceLayout.Content>
					<div className={styles.card}>
						<DsTypography variant="heading3">Backdrop containment</DsTypography>
						<DsTypography variant="body-md-reg">
							Click &quot;Save project&quot; to open the drawer. The backdrop only covers the content area,
							not the header or footer.
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
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>
		);
	},
};

export const FillParent: Story = {
	render: () => (
		<div className={styles.fillParentHost}>
			<DsWorkspaceLayout fillParent>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small">
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>

				<DsWorkspaceLayout.Content>
					<DsTypography variant="body-md-reg">
						This workspace fills its parent container (400px) instead of the viewport.
					</DsTypography>
				</DsWorkspaceLayout.Content>

				<DsWorkspaceLayout.Footer>
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>
		</div>
	),
};

export const HeaderOnly: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>

			<DsWorkspaceLayout.Content>
				<div className={styles.card}>
					<DsTypography variant="heading3">No SubHeader or Footer</DsTypography>
					<DsTypography variant="body-md-reg">
						All sub-components are optional. Use only what you need.
					</DsTypography>
				</div>
			</DsWorkspaceLayout.Content>
		</DsWorkspaceLayout>
	),
};

/** Horizontal stepper band in Footer below the body row. */
export const ExtendedStepperBelow: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>
			<DsWorkspaceLayout.Body>
				<DsWorkspaceLayout.Content>
					<div className={styles.extendedMainContent}>
						<div className={styles.extendedTitleRow}>
							<DsTypography variant="heading3">Project workspace</DsTypography>
							<DsButton variant="secondary" size="small" icon="edit">
								Edit
							</DsButton>
						</div>
						<div className={styles.card}>
							<DsTypography variant="body-md-reg">
								Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
								Body.
							</DsTypography>
						</div>
					</div>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout.Body>
			<DsWorkspaceLayout.Footer>
				<div className={styles.footerStepper}>
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
	),
};

/** Vertical stepper in LeftPanel beside Content. */
export const ExtendedStepperAside: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>
			<DsWorkspaceLayout.Body>
				<DsWorkspaceLayout.LeftPanel>
					<div className={styles.leftPanelContent}>
						<div className={styles.leftPanelHeader}>
							<DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
						</div>
						<div className={styles.leftPanelBody}>
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
					<div className={styles.extendedMainContent}>
						<div className={styles.extendedTitleRow}>
							<DsTypography variant="heading3">Project workspace</DsTypography>
							<DsButton variant="secondary" size="small" icon="edit">
								Edit
							</DsButton>
						</div>
						<div className={styles.card}>
							<DsTypography variant="body-md-reg">
								Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
								Body.
							</DsTypography>
						</div>
					</div>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout.Body>
		</DsWorkspaceLayout>
	),
};

/** Side menu rail and docked left panel together. */
export const ExtendedSideMenuAndLeftPanel: Story = {
	render: () => {
		const [pinned, setPinned] = useState(false);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small">
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
						<button
							type="button"
							className={styles.sideMenuItem}
							aria-label="Overview"
							aria-current="page"
							data-selected
						>
							<DsIcon icon="dashboard" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Overview
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Resources">
							<DsIcon icon="view_list" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Resources
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Settings">
							<DsIcon icon="settings" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Settings
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Help">
							<DsIcon icon="help" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Help
							</DsTypography>
						</button>
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div className={styles.leftPanelContent}>
							<div className={styles.leftPanelHeader}>
								<DsTypography variant="body-sm-semi-bold">Filters</DsTypography>
							</div>
							<div className={styles.leftPanelBody}>
								<DsTypography variant="body-sm-reg">
									Docked panel in the left side panel slot — always visible, no collapse.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.LeftPanel>
					<DsWorkspaceLayout.Content>
						<div className={styles.extendedMainContent}>
							<div className={styles.extendedTitleRow}>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButton variant="secondary" size="small" icon="edit">
									Edit
								</DsButton>
							</div>
							<div className={styles.card}>
								<DsTypography variant="body-md-reg">
									Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
									Body.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.Content>
				</DsWorkspaceLayout.Body>
			</DsWorkspaceLayout>
		);
	},
};

/** Full-bleed canvas content inside Content. */
export const ExtendedWithCanvas: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>
			<DsWorkspaceLayout.Body>
				<DsWorkspaceLayout.Content>
					<div className={styles.extendedTitleRow}>
						<DsTypography variant="heading3">Network topology</DsTypography>
						<DsButton variant="secondary" size="small" icon="fullscreen">
							Expand
						</DsButton>
					</div>
					<div className={styles.canvasSurface} aria-label="Canvas">
						<DsTypography variant="body-md-reg">
							Map or diagram canvas fills the remaining content area.
						</DsTypography>
					</div>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout.Body>
		</DsWorkspaceLayout>
	),
};

/** Side menu with left panel — navigation rail plus push panel. */
export const ExtendedSideMenuLeftPanel: Story = {
	render: () => {
		const [pinned, setPinned] = useState(false);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small">
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
						<button
							type="button"
							className={styles.sideMenuItem}
							aria-label="Overview"
							aria-current="page"
							data-selected
						>
							<DsIcon icon="dashboard" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Overview
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Resources">
							<DsIcon icon="view_list" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Resources
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Settings">
							<DsIcon icon="settings" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Settings
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Help">
							<DsIcon icon="help" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Help
							</DsTypography>
						</button>
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div className={styles.leftPanelContent}>
							<div className={styles.leftPanelHeader}>
								<DsTypography variant="body-sm-semi-bold">Section navigation</DsTypography>
							</div>
							<div className={styles.leftPanelBody}>
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
						<div className={styles.extendedMainContent}>
							<div className={styles.extendedTitleRow}>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButton variant="secondary" size="small" icon="edit">
									Edit
								</DsButton>
							</div>
							<div className={styles.card}>
								<DsTypography variant="body-md-reg">
									Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
									Body.
								</DsTypography>
							</div>
						</div>
					</DsWorkspaceLayout.Content>
				</DsWorkspaceLayout.Body>
			</DsWorkspaceLayout>
		);
	},
};

/** Side menu, left panel, and right drawer combined. */
export const ExtendedCombined: Story = {
	render: () => {
		const [pinned, setPinned] = useState(false);
		const [drawerOpen, setDrawerOpen] = useState(false);

		return (
			<DsWorkspaceLayout>
				<DsWorkspaceLayout.Header>
					<div className={styles.headerLayout}>
						<div className={styles.headerLeft}>
							<DsButton variant="secondary" color="light" size="small" icon="close">
								Close
							</DsButton>
						</div>
						<div className={styles.headerCenter}>
							<DsTypography variant="body-sm-reg" className={styles.projectName}>
								Untitled Project -23-May-2024 04:47 PM
							</DsTypography>
							<DsIcon icon="info" size="tiny" />
							<DsStatusBadge status="draft" size="small" />
						</div>
						<div className={styles.headerRight}>
							<div className={styles.lastUpdate}>
								<DsIcon icon="history" size="small" />
								<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
							</div>
							<DsButton variant="secondary" color="light" size="small">
								Discard
							</DsButton>
							<DsButton variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
								Save project
							</DsButton>
							<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
						</div>
					</div>
				</DsWorkspaceLayout.Header>
				<DsWorkspaceLayout.Body>
					<DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
						<button
							type="button"
							className={styles.sideMenuItem}
							aria-label="Overview"
							aria-current="page"
							data-selected
						>
							<DsIcon icon="dashboard" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Overview
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Resources">
							<DsIcon icon="view_list" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Resources
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Settings">
							<DsIcon icon="settings" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Settings
							</DsTypography>
						</button>
						<button type="button" className={styles.sideMenuItem} aria-label="Help">
							<DsIcon icon="help" size="small" />
							<DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
								Help
							</DsTypography>
						</button>
					</DsWorkspaceLayout.SideMenu>
					<DsWorkspaceLayout.LeftPanel>
						<div className={styles.leftPanelContent}>
							<div className={styles.leftPanelHeader}>
								<DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
							</div>
							<div className={styles.leftPanelBody}>
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
						<div className={styles.extendedMainContent}>
							<div className={styles.extendedTitleRow}>
								<DsTypography variant="heading3">Project workspace</DsTypography>
								<DsButton variant="secondary" size="small" icon="edit">
									Edit
								</DsButton>
							</div>
							<div className={styles.card}>
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
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspaceLayout.Footer>
			</DsWorkspaceLayout>
		);
	},
};

/** Illustrative workflow information panel composed in Content. */
export const ExtendedWorkflowInfoPanel: Story = {
	render: () => (
		<DsWorkspaceLayout>
			<DsWorkspaceLayout.Header>
				<div className={styles.headerLayout}>
					<div className={styles.headerLeft}>
						<DsButton variant="secondary" color="light" size="small" icon="close">
							Close
						</DsButton>
					</div>
					<div className={styles.headerCenter}>
						<DsTypography variant="body-sm-reg" className={styles.projectName}>
							Untitled Project -23-May-2024 04:47 PM
						</DsTypography>
						<DsIcon icon="info" size="tiny" />
						<DsStatusBadge status="draft" size="small" />
					</div>
					<div className={styles.headerRight}>
						<div className={styles.lastUpdate}>
							<DsIcon icon="history" size="small" />
							<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
						</div>
						<DsButton variant="secondary" color="light" size="small">
							Discard
						</DsButton>
						<DsButton variant="primary" color="light" size="small">
							Save project
						</DsButton>
						<DsButton variant="tertiary" color="light" size="small" icon="more_vert" />
					</div>
				</div>
			</DsWorkspaceLayout.Header>
			<DsWorkspaceLayout.Body>
				<DsWorkspaceLayout.Content>
					<div className={styles.extendedMainContent}>
						<div className={styles.extendedTitleRow}>
							<DsTypography variant="heading3">Approval workflow</DsTypography>
						</div>
						<div className={styles.workflowInfoPanel}>
							<div className={styles.workflowInfoItem}>
								<DsTypography variant="body-sm-semi-bold">Status</DsTypography>
								<DsStatusBadge status="draft" size="small" />
							</div>
							<div className={styles.workflowInfoItem}>
								<DsTypography variant="body-sm-semi-bold">Owner</DsTypography>
								<DsTypography variant="body-sm-reg">Network Operations</DsTypography>
							</div>
							<div className={styles.workflowInfoItem}>
								<DsTypography variant="body-sm-semi-bold">Last review</DsTypography>
								<DsTypography variant="body-sm-reg">2 days ago</DsTypography>
							</div>
						</div>
						<div className={styles.card}>
							<DsTypography variant="body-md-reg">
								Workflow metadata is consumer markup — not a design-system layout slot.
							</DsTypography>
						</div>
					</div>
				</DsWorkspaceLayout.Content>
			</DsWorkspaceLayout.Body>
		</DsWorkspaceLayout>
	),
};
