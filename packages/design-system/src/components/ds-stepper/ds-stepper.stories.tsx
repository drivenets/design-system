import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStepper, DsStep, DsNextStepButton, DsStepContent } from './index';
import { DsPanel, type DsPanelVariant } from '../ds-panel';
import { expect, userEvent } from 'storybook/test';

export default {
	title: 'Design System/Stepper',
	component: DsStepper,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DsStepper>;

type Story = StoryObj<typeof DsStepper>;

const steps = [
	{ label: 'Project details', description: 'The swift red fox leaps over the sleepy hound' },
	{ label: 'Select market', description: 'The swift red fox leaps over the sleepy hound' },
	{ label: 'Design policy', description: 'The swift red fox leaps over the sleepy hound' },
];

export const Default: Story = {
	render: function Render() {
		return (
			<div style={{ width: 300 }}>
				<DsStepper count={steps.length} onComplete={() => alert('Everything completed!')}>
					{steps.map((step, index) => (
						<DsStep index={index} key={index}>
							<DsStepContent
								index={index}
								label={step.label}
								description={step.description}
								actions={
									<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
								}
							/>
						</DsStep>
					))}
				</DsStepper>
			</div>
		);
	},
};

export const Compact: Story = {
	render: function Render() {
		return (
			<div style={{ width: 300 }}>
				<DsStepper count={steps.length} onComplete={() => alert('Everything completed!')}>
					{steps.map((step, index) => (
						<DsStep index={index} key={index}>
							<DsStepContent
								index={index}
								label={step.label}
								actions={
									<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
								}
							/>
						</DsStep>
					))}
				</DsStepper>
			</div>
		);
	},
};

export const WithPanel: Story = {
	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);
		const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');

		const isFloating = panelVariant === 'floating';

		const togglePanelVariant = () => {
			setPanelVariant(isFloating ? 'docked' : 'floating');
		};

		return (
			<DsPanel
				open
				variant={panelVariant}
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
				>
					{steps.map((step, index) => (
						<DsStep index={index} key={index}>
							<DsStepContent
								index={index}
								label={step.label}
								description={step.description}
								actions={
									<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
								}
							/>
						</DsStep>
					))}
				</DsStepper>
			</DsPanel>
		);
	},

	play: async ({ canvas, step }) => {
		function click(name: string) {
			const nextButton = canvas.getByRole('button', { name: new RegExp(name, 'i') });

			return userEvent.click(nextButton);
		}

		const togglePanel = async () => {
			await userEvent.click(canvas.getByLabelText('Toggle panel'));
		};

		await step('Iterate steps - Docked', async () => {
			await click('Next');
			await click('Next');
			await click('Finish');
		});

		await step('Go to first step', async () => {
			await click('Project details');
		});

		await step('Minimize panel', async () => {
			await togglePanel();
		});

		await expect(canvas.queryByText(/The swift red fox/)).not.toBeInTheDocument();

		await step('Iterate steps - Floating', async () => {
			await click('Next');
			await click('Next');
			await click('Finish');
		});

		await step('Maximize panel', async () => {
			await togglePanel();
		});

		await step('Go to first step', async () => {
			await click('Project details');
		});
	},
};
