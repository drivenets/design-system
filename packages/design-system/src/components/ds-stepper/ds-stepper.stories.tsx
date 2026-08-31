import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStepper, DsStep, DsNextStepButton, DsStepContent } from './index';
import { DsPanel, type DsPanelVariant } from '../ds-panel';
import { DsIcon } from '../ds-icon';
import styles from './ds-stepper.stories.module.scss';

const meta: Meta<typeof DsStepper> = {
	title: 'Components/Stepper',
	component: DsStepper,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsStepper>;

/**
 * The default vertical stepper reveals a description and a Next action under the
 * current step. Use it for linear flows where each step needs supporting copy.
 */
export const Default: Story = {
	render: () => {
		const steps = [
			{ label: 'Project details', description: 'Enter project name and basic configuration' },
			{ label: 'Select market', description: 'Choose the target market for deployment' },
			{ label: 'Design policy', description: 'Define the design constraints and rules' },
		];

		return (
			<div className={styles.stepperDemo}>
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
};

/**
 * The compact variant hides step descriptions, showing only labels. Prefer it in
 * dense layouts where the flow is self-explanatory.
 */
export const Compact: Story = {
	render: () => {
		const steps = [{ label: 'Project details' }, { label: 'Select market' }, { label: 'Design policy' }];

		return (
			<div className={styles.stepperDemo}>
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
};

/**
 * Embed the stepper inside a `DsPanel` and switch the panel between docked and
 * floating. The floating panel uses the `single` stepper variant so only the
 * current step stays visible.
 */
export const WithPanel: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},

	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);
		const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');

		const steps = [
			{ label: 'Project details', description: 'Enter project name and basic configuration' },
			{ label: 'Select market', description: 'Choose the target market for deployment' },
			{ label: 'Design policy', description: 'Define the design constraints and rules' },
		];

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
};

/**
 * The horizontal orientation lays steps out left-to-right with a shared Next
 * action. Use it for wizards at the top of a page where vertical space is scarce.
 */
export const Horizontal: Story = {
	parameters: {
		layout: 'padded',
	},

	render: () => {
		const steps = [
			{ label: 'Project details', description: 'Set up the project scope and requirements' },
			{ label: 'Select market', description: 'Pick a region and target audience' },
			{ label: 'Design policy', description: 'Configure branding and layout guidelines' },
			{ label: 'Review summary', description: 'Verify all settings before submission' },
			{ label: 'Final approval', description: 'Confirm and finalize the deployment plan' },
		];

		return (
			<DsStepper
				count={steps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{steps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} description={step.description} />
					</DsStep>
				))}
			</DsStepper>
		);
	},
};

/**
 * A horizontal stepper with only a few steps keeps the layout balanced without
 * stretching separators across the full width.
 */
export const HorizontalFewSteps: Story = {
	parameters: {
		layout: 'padded',
	},

	render: () => {
		const steps = [
			{ label: 'Project details', description: 'Configure the basic project settings' },
			{ label: 'Select market', description: 'Choose the target market for deployment' },
			{ label: 'Design policy', description: 'Define the design constraints and rules' },
		];

		return (
			<DsStepper
				count={steps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{steps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} description={step.description} />
					</DsStep>
				))}
			</DsStepper>
		);
	},
};

/**
 * Drop the descriptions in a horizontal few-step flow for a minimal, label-only
 * progress indicator.
 */
export const HorizontalCompactFewSteps: Story = {
	parameters: {
		layout: 'padded',
	},

	render: () => {
		const steps = [{ label: 'Project details' }, { label: 'Select market' }, { label: 'Design policy' }];

		return (
			<DsStepper
				count={steps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{steps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} />
					</DsStep>
				))}
			</DsStepper>
		);
	},
};

/**
 * Customize each step with a slot indicator icon and rich description content.
 * Drive the active step with `activeStep` / `onStepChange` for a controlled flow.
 */
export const CustomizedHorizontal: Story = {
	parameters: {
		layout: 'padded',
		docs: { source: { type: 'code' } },
	},

	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);

		const customSteps = [
			{ label: 'Upload files', description: 'Drag and drop or browse to upload', icon: 'upload' as const },
			{
				label: 'Configure settings',
				description: (
					<span>
						Adjust <strong>network parameters</strong> for deployment
					</span>
				),
				icon: 'settings' as const,
			},
			{ label: 'Deploy', description: 'Review and launch the deployment', icon: 'rocket_launch' as const },
		];

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
};

/**
 * Highlight a specific step by combining a slot indicator icon with class-based
 * styling on the step, indicator, label, and action once it becomes active.
 */
export const CustomizedVertical: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},

	render: function Render() {
		const [activeStep, setActiveStep] = useState(0);

		return (
			<div className={styles.stepperDemoWide}>
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
};

/**
 * Mark steps as `disabled` to lock them out of the flow. Disabled steps carry a
 * `data-disabled` attribute and cannot be navigated to, even once completed.
 */
export const WithDisabledSteps: Story = {
	render: () => (
		<div className={styles.stepperDemoWide}>
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
	),
};

/**
 * Set a step's `variant` to `error` to surface a validation failure. The error
 * step shows a close icon instead of its number and exposes `data-error`.
 */
export const WithErrorStep: Story = {
	render: () => (
		<div className={styles.stepperDemoWide}>
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
	),
};
