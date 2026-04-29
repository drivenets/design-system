import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsWorkspace from './ds-workspace';
import { DsButtonV3 } from '../ds-button-v3';
import { DsTypography } from '../ds-typography';
import { DsIcon } from '../ds-icon';
import { DsStatusBadge } from '../ds-status-badge';
import { DsDrawer } from '../ds-drawer';
import styles from './ds-workspace.stories.module.scss';

const meta: Meta<typeof DsWorkspace> = {
	title: 'Components/Workspace',
	component: DsWorkspace,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
A compound layout component for composing full-screen workspace views.

- **Workspace** — full-screen flex-column surface
- **Workspace.Header** — top bar with blue gradient (above drawers)
- **Workspace.SubHeader** — secondary bar below header (above drawers)
- **Workspace.Content** — scrollable main area with \`position: relative\`, so non-portal drawers are contained within it
- **Workspace.Footer** — bottom bar (below drawers)

### Drawer containment

Wrap a \`DsDrawer\` inside \`Workspace.Content\` (with \`portal={false}\`) and
the drawer will render below the header/subheader and above the footer
automatically — no z-index overrides needed.

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

type Story = StoryObj<typeof DsWorkspace>;

const WorkspaceHeader = ({ onAction }: { onAction?: () => void }) => (
	<div className={styles.headerLayout}>
		<div className={styles.headerLeft}>
			<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
				Close
			</DsButtonV3>
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
			<DsButtonV3 variant="secondary" color="light" size="small">
				Discard
			</DsButtonV3>
			<DsButtonV3 variant="primary" color="light" size="small" onClick={onAction}>
				Save project
			</DsButtonV3>
			<DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" />
		</div>
	</div>
);

export const Default: Story = {
	render: () => (
		<DsWorkspace>
			<DsWorkspace.Header>
				<WorkspaceHeader />
			</DsWorkspace.Header>

			<DsWorkspace.SubHeader>
				<div className={styles.subHeaderContent}>
					<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					<DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
				</div>
			</DsWorkspace.SubHeader>

			<DsWorkspace.Content>
				<div className={styles.mainContent}>
					<div className={styles.card}>
						<DsTypography variant="heading3">Welcome</DsTypography>
						<DsTypography variant="body-md-reg">This is the main content area of the workspace.</DsTypography>
					</div>
					<div className={styles.card}>
						<DsTypography variant="heading3">Section 2</DsTypography>
						<DsTypography variant="body-md-reg">Another content section.</DsTypography>
					</div>
				</div>
			</DsWorkspace.Content>

			<DsWorkspace.Footer>
				<div className={styles.footerContent}>
					<span>v1.2.0</span>
					<div className={styles.footerActions}>
						<DsButtonV3 variant="tertiary" size="small">
							Help
						</DsButtonV3>
						<DsButtonV3 variant="tertiary" size="small">
							Feedback
						</DsButtonV3>
					</div>
				</div>
			</DsWorkspace.Footer>
		</DsWorkspace>
	),
};

export const WithDrawer: Story = {
	render: function Render() {
		const [drawerOpen, setDrawerOpen] = useState(false);

		return (
			<DsWorkspace>
				<DsWorkspace.Header>
					<WorkspaceHeader onAction={() => setDrawerOpen(true)} />
				</DsWorkspace.Header>

				<DsWorkspace.SubHeader>
					<div className={styles.subHeaderContent}>
						<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					</div>
				</DsWorkspace.SubHeader>

				<DsWorkspace.Content>
					<div className={styles.mainContent}>
						<div className={styles.card}>
							<DsTypography variant="heading3">Drawer containment</DsTypography>
							<DsTypography variant="body-md-reg">
								Click &quot;Save project&quot; in the header to open the drawer. It renders inside Content —
								below the header/subheader and above the footer.
							</DsTypography>
						</div>
					</div>

					<DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4}>
						<DsDrawer.Header>
							<DsDrawer.Title>Details</DsDrawer.Title>
							<DsDrawer.CloseTrigger />
						</DsDrawer.Header>
						<DsDrawer.Body>
							<div className={styles.mainContent}>
								<DsTypography variant="body-md-reg">
									This drawer is contained within the content area.
								</DsTypography>
							</div>
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
				</DsWorkspace.Content>

				<DsWorkspace.Footer>
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspace.Footer>
			</DsWorkspace>
		);
	},
};

export const WithDrawerAndBackdrop: Story = {
	render: function Render() {
		const [drawerOpen, setDrawerOpen] = useState(false);

		return (
			<DsWorkspace>
				<DsWorkspace.Header>
					<WorkspaceHeader onAction={() => setDrawerOpen(true)} />
				</DsWorkspace.Header>

				<DsWorkspace.SubHeader>
					<div className={styles.subHeaderContent}>
						<DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
					</div>
				</DsWorkspace.SubHeader>

				<DsWorkspace.Content>
					<div className={styles.mainContent}>
						<div className={styles.card}>
							<DsTypography variant="heading3">Backdrop containment</DsTypography>
							<DsTypography variant="body-md-reg">
								Click &quot;Save project&quot; to open the drawer. The backdrop only covers the content area,
								not the header or footer.
							</DsTypography>
						</div>
					</div>

					<DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
						<DsDrawer.Header>
							<DsDrawer.Title>Modal Drawer</DsDrawer.Title>
							<DsDrawer.CloseTrigger />
						</DsDrawer.Header>
						<DsDrawer.Body>
							<div className={styles.mainContent}>
								<DsTypography variant="body-md-reg">The backdrop is scoped to the content area.</DsTypography>
							</div>
						</DsDrawer.Body>
					</DsDrawer>
				</DsWorkspace.Content>

				<DsWorkspace.Footer>
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspace.Footer>
			</DsWorkspace>
		);
	},
};

export const FillParent: Story = {
	render: () => (
		<div style={{ height: 400, border: '2px dashed var(--color-border)' }}>
			<DsWorkspace fillParent>
				<DsWorkspace.Header>
					<WorkspaceHeader />
				</DsWorkspace.Header>

				<DsWorkspace.Content>
					<div className={styles.mainContent}>
						<DsTypography variant="body-md-reg">
							This workspace fills its parent container (400px) instead of the viewport.
						</DsTypography>
					</div>
				</DsWorkspace.Content>

				<DsWorkspace.Footer>
					<div className={styles.footerContent}>
						<span>v1.2.0</span>
					</div>
				</DsWorkspace.Footer>
			</DsWorkspace>
		</div>
	),
};

export const HeaderOnly: Story = {
	render: () => (
		<DsWorkspace>
			<DsWorkspace.Header>
				<WorkspaceHeader />
			</DsWorkspace.Header>

			<DsWorkspace.Content>
				<div className={styles.mainContent}>
					<div className={styles.card}>
						<DsTypography variant="heading3">No SubHeader or Footer</DsTypography>
						<DsTypography variant="body-md-reg">
							All sub-components are optional. Use only what you need.
						</DsTypography>
					</div>
				</div>
			</DsWorkspace.Content>
		</DsWorkspace>
	),
};
