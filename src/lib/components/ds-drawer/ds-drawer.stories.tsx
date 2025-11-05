import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import classNames from 'classnames';
import DsDrawer from './ds-drawer';
import { DsButton } from '../ds-button';
import { DsTextInput } from '../ds-text-input';
import { DsIcon } from '../ds-icon';
import DsSystemStatus from '../ds-system-status/ds-system-status';
import styles from './ds-drawer.stories.module.scss';
import { DsTypography } from '../ds-typography';
import { DsDrawerProps } from './ds-drawer.types';

const meta: Meta<typeof DsDrawer> = {
	title: 'Design System/Drawer',
	component: DsDrawer,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		columns: {
			control: { type: 'select' },
			options: Array(12)
				.fill(0)
				.map((_, i) => i + 1),
			description: 'Number of grid columns (1-12)',
		},
		position: {
			control: { type: 'select' },
			options: ['start', 'end'],
			description: 'Drawer position',
		},
		backdrop: {
			control: 'boolean',
			description: 'Show backdrop overlay',
		},
		closeOnEscape: {
			control: 'boolean',
			description: 'Close on escape key',
		},
		closeOnInteractOutside: {
			control: 'boolean',
			description: 'Close when clicking outside',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsDrawer>;

const DrawerTemplate = (args: DsDrawerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.storyWrapper}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer {...args} open={isOpen} onOpenChange={setIsOpen}>
				{args.children}
			</DsDrawer>
		</div>
	);
};

export const Default: Story = {
	render: DrawerTemplate,
	args: {
		children: (
			<>
				<DsDrawer.Header>
					<DsDrawer.Title>
						Default Drawer <DsSystemStatus status="healthy" label="Active" />
					</DsDrawer.Title>
					<div className={styles.headerActions}>
						<button className={styles.expand} aria-label="Expand">
							<DsIcon icon="open_in_full" size="tiny" />
						</button>
						<div className={styles.divider} />
						<DsDrawer.CloseTrigger />
					</div>
					<DsTypography className={styles.description} variant="body-xs-reg">
						This is a description caption under a title.
					</DsTypography>
				</DsDrawer.Header>
				<DsDrawer.Toolbar>
					<DsTextInput
						placeholder="Search..."
						style={{ flex: 1 }}
						startAdornment={<DsIcon icon="search" size="tiny" />}
					/>
					<DsIcon icon="filter_list" size="tiny" />
				</DsDrawer.Toolbar>
				<DsDrawer.Body className={styles.body}>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
				<DsDrawer.Footer>
					<DsDrawer.Actions>
						<DsButton design="v1.2" buttonType="tertiary" size="large">
							Cancel
						</DsButton>
						<DsButton design="v1.2" size="large">
							Save
						</DsButton>
					</DsDrawer.Actions>
				</DsDrawer.Footer>
			</>
		),
	},
};

const Tabs = ({ total = 4 }: { total?: number }) => {
	const [selected, setSelected] = useState(1);
	return (
		<div className={styles.tabs}>
			{Array.from({ length: total }, (_, index) => (
				<button
					type="button"
					key={index}
					className={classNames(styles.tab, { [styles.selected]: selected === index })}
					onClick={() => setSelected(index)}
				>
					Tab item {index + 1}
				</button>
			))}
		</div>
	);
};

export const WithTabs: Story = {
	render: DrawerTemplate,
	args: {
		columns: 8,
		children: (
			<>
				<DsDrawer.Header>
					<DsDrawer.Title>
						Drawer with Tabs <DsSystemStatus status="healthy" label="Active" />
					</DsDrawer.Title>
					<div className={styles.headerActions}>
						<button className={styles.expand} aria-label="Expand">
							<DsIcon icon="open_in_full" size="tiny" />
						</button>
						<div className={styles.divider} />
						<DsDrawer.CloseTrigger />
					</div>
					<DsTypography className={styles.description} variant="body-xs-reg">
						This is a description caption under a title.
					</DsTypography>
				</DsDrawer.Header>
				<DsDrawer.Body className={styles.body}>
					<div style={{ flex: 0 }} className={styles.section}>
						<Tabs />
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
				<DsDrawer.Footer>
					<DsDrawer.Actions>
						<DsButton design="v1.2" buttonType="tertiary" size="large">
							Cancel
						</DsButton>
						<DsButton design="v1.2" size="large">
							Save
						</DsButton>
					</DsDrawer.Actions>
				</DsDrawer.Footer>
			</>
		),
	},
};

export const WithBackdropAndScroll: Story = {
	render: DrawerTemplate,
	args: {
		backdrop: true,
		children: (
			<>
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body className={styles.body}>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography style={{ minHeight: '300px' }} variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography style={{ minHeight: '200px' }} variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
						<DsTypography style={{ minHeight: '500px' }} variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</>
		),
	},
};

export const DockToStart: Story = {
	render: DrawerTemplate,
	args: {
		position: 'start',
		children: (
			<>
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body className={styles.body}>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</>
		),
	},
};

export const WithGridContent: Story = {
	render: DrawerTemplate,
	args: {
		columns: 10,
		children: (
			<>
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body className={styles.bodyGrid}>
					<div style={{ gridRow: 'span 2' }} className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
					<div className={styles.section}>
						<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" className={styles.sectionContent}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</>
		),
	},
};

export const ToggleFullSize: Story = {
	args: {
		columns: 4,
	},
	render: function Render(args: DsDrawerProps) {
		const [isOpen, setIsOpen] = useState(false);
		const [isFullScreen, setIsFullScreen] = useState(false);

		const toggleFullScreen = () => {
			setIsFullScreen(!isFullScreen);
		};

		return (
			<div className={styles.storyWrapper}>
				<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

				<DsDrawer
					{...args}
					open={isOpen}
					onOpenChange={setIsOpen}
					columns={isFullScreen ? 12 : args.columns || 4}
				>
					<DsDrawer.Header>
						<DsDrawer.Title>Expandable Drawer</DsDrawer.Title>
						<div className={styles.headerActions}>
							<button
								className={styles.expand}
								aria-label={isFullScreen ? 'Collapse' : 'Expand'}
								onClick={toggleFullScreen}
							>
								<DsIcon icon={isFullScreen ? 'close_fullscreen' : 'open_in_full'} size="tiny" />
							</button>
							<div className={styles.divider} />
							<DsDrawer.CloseTrigger />
						</div>
					</DsDrawer.Header>
					<DsDrawer.Body className={styles.body}>
						<div className={styles.section}>
							<DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
								Drawer content header
							</DsTypography>
							<DsTypography variant="heading2" className={styles.sectionContent}>
								Out of scope section
							</DsTypography>
						</div>
					</DsDrawer.Body>
				</DsDrawer>
			</div>
		);
	},
};
