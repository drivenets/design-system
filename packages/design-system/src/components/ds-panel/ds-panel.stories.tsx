import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsPanel } from './';
import { DsButton } from '../ds-button';
import { DsStepper, DsStep, DsStepContent, DsNextStepButton } from '../ds-stepper';
import { useState } from 'react';
import type { DsPanelVariant } from './ds-panel.types';

export default {
	title: 'Design System/Panel',
	component: DsPanel,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DsPanel>;

type Story = StoryObj<typeof DsPanel>;

export const Default: Story = {
	render: function Render({ variant }) {
		const [open, setOpen] = useState(true);

		return (
			<>
				{!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

				<DsPanel open={open} onOpenChange={setOpen} variant={variant}>
					<p>
						This is a panel. It can contain any content you like, such as text, images, or other components.
					</p>

					<p>It is collapsible. Hover it to see the trigger button.</p>

					<DsButton size="small">Primary Action</DsButton>
				</DsPanel>
			</>
		);
	},
};

export const Responsive: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);

		return (
			<>
				{!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

				<DsPanel open={open} onOpenChange={setOpen} width={{ lg: 480, md: 240 }}>
					<p>This panel uses a responsive width.</p>
					<p>Large screens: 480px. Medium screens: 240px.</p>

					<DsButton size="small">Primary Action</DsButton>
				</DsPanel>
			</>
		);
	},
};

export const Draggable: Story = {
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
			<div style={{ position: 'relative', width: 600, height: 500 }}>
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
