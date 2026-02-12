import { useState, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStepper, DsStep, DsNextStepButton, DsStepContent } from './index';
import { DsPanel, type DsPanelVariant } from '../ds-panel';
import DsIcon from '../ds-icon/ds-icon';
import type { IconType } from '../ds-icon';
import { expect, userEvent } from 'storybook/test';
import styles from './ds-stepper.stories.module.scss';

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
	{ label: 'Project details', description: 'Enter project name and basic configuration' },
	{ label: 'Select market', description: 'Choose the target market for deployment' },
	{ label: 'Design policy', description: 'Define the design constraints and rules' },
];

const horizontalSteps = [
	{ label: 'Project details', description: 'Set up the project scope and requirements' },
	{ label: 'Select market', description: 'Pick a region and target audience' },
	{ label: 'Design policy', description: 'Configure branding and layout guidelines' },
	{ label: 'Review summary', description: 'Verify all settings before submission' },
	{ label: 'Final approval', description: 'Confirm and finalize the deployment plan' },
];

export const Default: Story = {
	render: function Render() {
		return (
			<div style={{ width: 300 }}>
				<DsStepper count={steps.length}>
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

	play: async ({ canvas, step }) => {
		await step('All steps and descriptions visible', async () => {
			for (const s of steps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
				await expect(canvas.getByText(s.description)).toBeInTheDocument();
			}
		});

		await step('Navigate through all steps', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));
			await expect(canvas.getByRole('button', { name: /finish/i })).toBeInTheDocument();
		});
	},
};

export const Compact: Story = {
	render: function Render() {
		return (
			<div style={{ width: 300 }}>
				<DsStepper count={steps.length}>
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

	play: async ({ canvas, step }) => {
		await step('All step labels visible without descriptions', async () => {
			for (const s of steps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
			}
		});

		await step('Navigate through all steps', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));
			await expect(canvas.getByRole('button', { name: /finish/i })).toBeInTheDocument();
		});
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

		await expect(canvas.queryByText(/Enter project name/)).not.toBeInTheDocument();

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

export const Horizontal: Story = {
	parameters: {
		layout: 'padded',
	},

	render: function Render() {
		return (
			<DsStepper
				count={horizontalSteps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{horizontalSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} description={step.description} />
					</DsStep>
				))}
			</DsStepper>
		);
	},

	play: async ({ canvas, step }) => {
		await step('All steps visible', async () => {
			for (const s of horizontalSteps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
			}
		});

		await step('Navigate through steps via Next button', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });
			await expect(nextButton).toBeInTheDocument();

			await userEvent.click(nextButton);

			const secondStepEl = canvas.getByText('Select market');
			await expect(secondStepEl.closest('[aria-current="step"]')).not.toBeNull();
		});
	},
};

const fewSteps = [
	{ label: 'Project details', description: 'Configure the basic project settings' },
	{ label: 'Select market', description: 'Choose the target market for deployment' },
	{ label: 'Design policy', description: 'Define the design constraints and rules' },
];

export const HorizontalFewSteps: Story = {
	parameters: {
		layout: 'padded',
	},

	render: function Render() {
		return (
			<DsStepper
				count={fewSteps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{fewSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} description={step.description} />
					</DsStep>
				))}
			</DsStepper>
		);
	},

	play: async ({ canvas, step }) => {
		await step('All steps visible', async () => {
			for (const s of fewSteps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
			}
		});

		await step('Navigate all steps to completion', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });

			await userEvent.click(nextButton);
			await userEvent.click(nextButton);
			await userEvent.click(nextButton);
		});
	},
};

const fewCompactSteps = [
	{ label: 'Project details' },
	{ label: 'Select market' },
	{ label: 'Design policy' },
];

export const HorizontalCompactFewSteps: Story = {
	parameters: {
		layout: 'padded',
	},

	render: function Render() {
		return (
			<DsStepper
				count={fewCompactSteps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{fewCompactSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} />
					</DsStep>
				))}
			</DsStepper>
		);
	},

	play: async ({ canvas, step }) => {
		await step('All steps visible', async () => {
			for (const s of fewCompactSteps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
			}
		});

		await step('Navigate all steps to completion', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });

			await userEvent.click(nextButton);
			await userEvent.click(nextButton);
			await userEvent.click(nextButton);
		});
	},
};

const customSteps: { label: string; description: ReactNode; icon: IconType }[] = [
	{
		label: 'Upload files',
		description: 'Drag and drop or browse to upload',
		icon: 'upload',
	},
	{
		label: 'Configure settings',
		description: (
			<span>
				Adjust <strong>network parameters</strong> for deployment
			</span>
		),
		icon: 'settings',
	},
	{
		label: 'Deploy',
		description: 'Review and launch the deployment',
		icon: 'rocket_launch',
	},
];

export const CustomizedHorizontal: Story = {
	parameters: {
		layout: 'padded',
	},

	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);

		return (
			<DsStepper
				count={customSteps.length}
				orientation="horizontal"
				activeStep={activeStep}
				onStepChange={({ step }) => setActiveStep(step)}
				actions={
					<DsNextStepButton variant="ghost">
						{activeStep === customSteps.length - 1 ? 'Finish' : 'Continue'}
					</DsNextStepButton>
				}
			>
				{customSteps.map((step, index) => (
					<DsStep index={index} key={index} slots={{ indicator: <DsIcon icon={step.icon} size="small" /> }}>
						<DsStepContent index={index} label={step.label} description={step.description} />
					</DsStep>
				))}
			</DsStepper>
		);
	},

	play: async ({ canvas, step }) => {
		await step('All custom steps visible', async () => {
			for (const s of customSteps) {
				await expect(canvas.getByText(s.label)).toBeInTheDocument();
			}
		});

		await step('Custom icons rendered', async () => {
			await expect(canvas.getByText('upload')).toBeInTheDocument();
			await expect(canvas.getByText('settings')).toBeInTheDocument();
			await expect(canvas.getByText('rocket_launch')).toBeInTheDocument();
		});

		await step('Navigate with custom button', async () => {
			const nextButton = canvas.getByRole('button', { name: /continue/i });
			await expect(nextButton).toBeInTheDocument();

			await userEvent.click(nextButton);

			const secondStepEl = canvas.getByText('Configure settings');
			await expect(secondStepEl.closest('[aria-current="step"]')).not.toBeNull();
		});

		await step('Rich description rendered', async () => {
			const bold = canvas.getByText('network parameters');
			await expect(bold.tagName).toBe('STRONG');
		});
	},
};

export const CustomizedVertical: Story = {
	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);

		return (
			<div style={{ width: 350 }}>
				<DsStepper count={3} activeStep={activeStep} onStepChange={({ step }) => setActiveStep(step)}>
					<DsStep index={0}>
						<DsStepContent
							index={0}
							label="Project details"
							description="Enter project name and basic configuration"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep
						index={1}
						className={activeStep === 1 ? styles.approveStep : undefined}
						slots={{
							indicator: <DsIcon icon="monitor_heart" size="small" />,
						}}
						slotProps={{
							indicator: {
								className: activeStep === 1 ? styles.approveIcon : undefined,
							},
						}}
					>
						<DsStepContent
							index={1}
							label={
								<span className={activeStep === 1 ? styles.approveTitle : undefined}>Verify health</span>
							}
							description="Confirm all services report healthy status"
							actions={
								<DsNextStepButton className={activeStep === 1 ? styles.approveButton : undefined}>
									Approve
								</DsNextStepButton>
							}
						/>
					</DsStep>

					<DsStep index={2}>
						<DsStepContent
							index={2}
							label="Design policy"
							description="Define the design constraints and rules"
							actions={<DsNextStepButton>Finish</DsNextStepButton>}
						/>
					</DsStep>
				</DsStepper>
			</div>
		);
	},

	play: async ({ canvas, step }) => {
		await step('All steps visible', async () => {
			await expect(canvas.getByText('Project details')).toBeInTheDocument();
			await expect(canvas.getByText('Verify health')).toBeInTheDocument();
			await expect(canvas.getByText('Design policy')).toBeInTheDocument();
		});

		await step('Default steps show numbers, custom step shows icon', async () => {
			await expect(canvas.getByText('1')).toBeInTheDocument();
			await expect(canvas.getByText('monitor_heart')).toBeInTheDocument();
			await expect(canvas.getByText('3')).toBeInTheDocument();
		});

		await step('Navigate to custom step and verify approve action', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });
			await userEvent.click(nextButton);

			await expect(canvas.getByRole('button', { name: /approve/i })).toBeInTheDocument();
		});
	},
};

export const WithDisabledSteps: Story = {
	render: function Render() {
		return (
			<div style={{ width: 350 }}>
				<DsStepper count={4}>
					<DsStep index={0}>
						<DsStepContent
							index={0}
							label="Basic information"
							description="Enter your project details"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={1} disabled>
						<DsStepContent
							index={1}
							label="Advanced settings"
							description="Configure advanced options (requires approval)"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={2}>
						<DsStepContent
							index={2}
							label="Review"
							description="Review your configuration"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={3} disabled>
						<DsStepContent
							index={3}
							label="Deploy"
							description="Deploy to production (requires elevated permissions)"
							actions={<DsNextStepButton>Finish</DsNextStepButton>}
						/>
					</DsStep>
				</DsStepper>
			</div>
		);
	},

	play: async ({ canvas, step }) => {
		await step('Disabled steps have data-disabled attribute', async () => {
			const advancedStep = canvas.getByText('Advanced settings').closest('[data-disabled]');
			await expect(advancedStep).not.toBeNull();

			const deployStep = canvas.getByText('Deploy').closest('[data-disabled]');
			await expect(deployStep).not.toBeNull();
		});

		await step('Enabled steps do not have data-disabled', async () => {
			const basicStep = canvas.getByText('Basic information').closest('[data-disabled]');
			await expect(basicStep).toBeNull();

			const reviewStep = canvas.getByText('Review').closest('[data-disabled]');
			await expect(reviewStep).toBeNull();
		});

		await step('Disabled completed step is not clickable', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });
			await userEvent.click(nextButton);
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));

			const advancedStep = canvas.getByText('Advanced settings');
			await expect(advancedStep.closest('button')).toBeNull();
		});
	},
};

export const WithErrorStep: Story = {
	render: function Render() {
		return (
			<div style={{ width: 350 }}>
				<DsStepper count={4}>
					<DsStep index={0}>
						<DsStepContent
							index={0}
							label="Configuration"
							description="Enter deployment configuration"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={1} variant="error">
						<DsStepContent
							index={1}
							label="Validation"
							description="Configuration validation failed"
							actions={<DsNextStepButton>Retry</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={2}>
						<DsStepContent
							index={2}
							label="Review"
							description="Review and confirm changes"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={3}>
						<DsStepContent
							index={3}
							label="Complete"
							description="Finalize deployment"
							actions={<DsNextStepButton>Finish</DsNextStepButton>}
						/>
					</DsStep>
				</DsStepper>
			</div>
		);
	},

	play: async ({ canvas, step }) => {
		await step('Error step shows close icon instead of number', async () => {
			await expect(canvas.getByText('close')).toBeInTheDocument();
		});

		await step('Error step has data-error attribute', async () => {
			const errorStep = canvas.getByText('Validation').closest('[data-error]');
			await expect(errorStep).not.toBeNull();
		});

		await step('Non-error steps do not have data-error', async () => {
			const configStep = canvas.getByText('Configuration').closest('[data-error]');
			await expect(configStep).toBeNull();
		});

		await step('Navigate to error step and verify current state', async () => {
			const nextButton = canvas.getByRole('button', { name: /next/i });
			await userEvent.click(nextButton);

			const validationStep = canvas.getByText('Validation');
			await expect(validationStep.closest('[data-current]')).not.toBeNull();
			await expect(validationStep.closest('[data-error]')).not.toBeNull();
		});
	},
};
