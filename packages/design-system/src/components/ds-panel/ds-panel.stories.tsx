import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsPanel } from './';
import { DsButton } from '../ds-button/';
import { DsStepper, DsStep, DsStepContent, DsNextStepButton } from '../ds-stepper';
import { DsTypography } from '../ds-typography';
import type { DsPanelVariant } from './ds-panel.types';
import styles from './ds-panel.stories.module.scss';

export default {
	title: 'Components/Panel',
	component: DsPanel,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DsPanel>;

type Story = StoryObj<typeof DsPanel>;

/**
 * A collapsible panel that holds arbitrary content. Hover it to reveal the
 * collapse trigger; collapsing hides the body behind an "Open Panel" button.
 */
export const Default: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render({ variant }) {
		const [open, setOpen] = useState(true);

		return (
			<>
				{!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

				<DsPanel open={open} onOpenChange={setOpen} variant={variant}>
					<DsTypography variant="body-md-reg">Panels hold any content you like.</DsTypography>

					<DsTypography variant="body-md-reg">Hover to reveal the collapse trigger.</DsTypography>

					<DsButton size="small">Primary Action</DsButton>
				</DsPanel>
			</>
		);
	},
};

/**
 * The `width` prop accepts a `ResponsiveValue` so the panel can widen on large
 * screens and narrow on medium ones without extra layout code.
 */
export const Responsive: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [open, setOpen] = useState(true);

		return (
			<>
				{!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

				<DsPanel open={open} onOpenChange={setOpen} width={{ lg: 480, md: 240 }}>
					<DsTypography variant="body-md-reg">This panel uses a responsive width.</DsTypography>
					<DsTypography variant="body-md-reg">Large screens: 480px. Medium screens: 240px.</DsTypography>

					<DsButton size="small">Primary Action</DsButton>
				</DsPanel>
			</>
		);
	},
};

/**
 * Toggling the collapse button switches the panel between `docked` and
 * `floating`. The floating variant is draggable and drops its inner padding so a
 * `DsStepper` can bleed to the edges.
 */
export const Draggable: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');
		const [activeStep, setActiveStep] = useState(0);

		const isFloating = panelVariant === 'floating';

		const togglePanelVariant = () => {
			setPanelVariant(isFloating ? 'docked' : 'floating');
		};

		const steps = [
			{ label: 'Configure network', description: 'Set up interfaces and routing policies' },
			{ label: 'Assign resources', description: 'Allocate compute and storage for the deployment' },
			{ label: 'Review & deploy', description: 'Verify configuration and launch' },
		];

		return (
			<div className={styles.draggableCanvas}>
				<DsPanel
					open
					variant={panelVariant}
					draggable={isFloating}
					disablePadding={isFloating}
					slotProps={{
						collapseButton: {
							onClick: togglePanelVariant,
							collapsed: isFloating,
						},
					}}
				>
					<DsStepper
						count={steps.length}
						activeStep={activeStep}
						onStepChange={({ step }) => setActiveStep(step)}
						variant={isFloating ? 'single' : undefined}
						floating={isFloating}
					>
						{steps.map((s, index) => (
							<DsStep index={index} key={index}>
								<DsStepContent
									index={index}
									label={s.label}
									description={s.description}
									actions={
										<DsNextStepButton>{index === steps.length - 1 ? 'Deploy' : 'Next'}</DsNextStepButton>
									}
								/>
							</DsStep>
						))}
					</DsStepper>
				</DsPanel>
			</div>
		);
	},
};
