import * as React from 'react';
import { useState } from 'react';
import {
	DsStepper,
	DsStep,
	DsNextStepButton,
	DsStepContent,
	DsPanel,
	type DsPanelVariant,
	DsIcon,
} from '@drivenets/design-system';

// Owned preview: the story file imports './ds-stepper.stories.module.scss' for demo
// width wrappers (`.stepperDemo` / `.stepperDemoWide`) and the "approve" highlight
// classes used in CustomizedVertical (`.approveStep` / `.approveButton` /
// `.approveTitle` / `.approveIcon`). Story-local .scss can't compile in the
// lightweight story-preview pass (no Sass preprocessor), so it resolves to `{}` —
// every className from this module is undefined, dropping the demo width constraint
// and the approve highlight colors. The width wrappers are plain divs (inlined below
// as plain style objects), but `DsStep`/its indicator `slotProps` only forward
// `className`, not `style` — so the approve highlight is reproduced with literal
// (non-module) class names plus a scoped `<style>` tag carrying the same `!important`
// declarations the original scss used, injected once alongside the story.

const stepperDemoStyle: React.CSSProperties = { width: 300 };
const stepperDemoWideStyle: React.CSSProperties = { width: 350 };

const APPROVE_STEP_CLASS = 'ds-preview-approve-step';
const APPROVE_BUTTON_CLASS = 'ds-preview-approve-button';
const APPROVE_TITLE_CLASS = 'ds-preview-approve-title';
const APPROVE_ICON_CLASS = 'ds-preview-approve-icon';

const ApproveStyles = () => (
	<style>
		{`
			.${APPROVE_STEP_CLASS} { background: var(--background-success) !important; }
			.${APPROVE_BUTTON_CLASS} { background: var(--background-success-strong) !important; color: var(--secondary-050) !important; }
			.${APPROVE_TITLE_CLASS} { color: var(--background-success-strong) !important; }
			.${APPROVE_ICON_CLASS} { background: var(--background-success-strong) !important; }
		`}
	</style>
);

/**
 * The default vertical stepper reveals a description and a Next action under the
 * current step. Use it for linear flows where each step needs supporting copy.
 */
export const Default = () => {
	const steps = [
		{ label: 'Project details', description: 'Enter project name and basic configuration' },
		{ label: 'Select market', description: 'Choose the target market for deployment' },
		{ label: 'Design policy', description: 'Define the design constraints and rules' },
	];

	return (
		<div style={stepperDemoStyle}>
			<DsStepper count={steps.length}>
				{steps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent
							index={index}
							label={step.label}
							description={step.description}
							actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>}
						/>
					</DsStep>
				))}
			</DsStepper>
		</div>
	);
};

/**
 * The compact variant hides step descriptions, showing only labels. Prefer it in
 * dense layouts where the flow is self-explanatory.
 */
export const Compact = () => {
	const steps = [{ label: 'Project details' }, { label: 'Select market' }, { label: 'Design policy' }];

	return (
		<div style={stepperDemoStyle}>
			<DsStepper count={steps.length}>
				{steps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent
							index={index}
							label={step.label}
							actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>}
						/>
					</DsStep>
				))}
			</DsStepper>
		</div>
	);
};

/**
 * Embed the stepper inside a `DsPanel` and switch the panel between docked and
 * floating. The floating panel uses the `single` stepper variant so only the
 * current step stays visible.
 */
export const WithPanel = () => {
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
							actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>}
						/>
					</DsStep>
				))}
			</DsStepper>
		</DsPanel>
	);
};

/**
 * The horizontal orientation lays steps out left-to-right with a shared Next
 * action. Use it for wizards at the top of a page where vertical space is scarce.
 */
export const Horizontal = () => {
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
};

/**
 * A horizontal stepper with only a few steps keeps the layout balanced without
 * stretching separators across the full width.
 */
export const HorizontalFewSteps = () => {
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
};

/**
 * Drop the descriptions in a horizontal few-step flow for a minimal, label-only
 * progress indicator.
 */
export const HorizontalCompactFewSteps = () => {
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
};

/**
 * Customize each step with a slot indicator icon and rich description content.
 * Drive the active step with `activeStep` / `onStepChange` for a controlled flow.
 */
export const CustomizedHorizontal = () => {
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
};

/**
 * Highlight a specific step by combining a slot indicator icon with class-based
 * styling on the step, indicator, label, and action once it becomes active.
 */
export const CustomizedVertical = () => {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div style={stepperDemoWideStyle}>
			<ApproveStyles />
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
					className={activeStep === 1 ? APPROVE_STEP_CLASS : undefined}
					slots={{
						indicator: <DsIcon icon="monitor_heart" size="small" />,
					}}
					slotProps={{
						indicator: {
							className: activeStep === 1 ? APPROVE_ICON_CLASS : undefined,
						},
					}}
				>
					<DsStepContent
						index={1}
						label={<span className={activeStep === 1 ? APPROVE_TITLE_CLASS : undefined}>Verify health</span>}
						description="Confirm all services report healthy status"
						actions={
							<DsNextStepButton className={activeStep === 1 ? APPROVE_BUTTON_CLASS : undefined}>
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
};

/**
 * Mark steps as `disabled` to lock them out of the flow. Disabled steps carry a
 * `data-disabled` attribute and cannot be navigated to, even once completed.
 */
export const WithDisabledSteps = () => (
	<div style={stepperDemoWideStyle}>
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

/**
 * Set a step's `variant` to `error` to surface a validation failure. The error
 * step shows a close icon instead of its number and exposes `data-error`.
 */
export const WithErrorStep = () => (
	<div style={stepperDemoWideStyle}>
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
