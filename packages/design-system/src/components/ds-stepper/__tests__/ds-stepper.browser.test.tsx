import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsStepper, DsStep, DsNextStepButton, DsStepContent } from '../index';
import { DsIcon } from '../../ds-icon';
import { DsPanel, type DsPanelVariant } from '../../ds-panel';

const verticalSteps = [
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

// zag steps anatomy: each step wrapper carries data-part="item".
const ITEM_SELECTOR = '[data-part="item"]';

// vitest/browser getByText matches substrings case-insensitively; use exact matches
// so labels (e.g. "Deploy") do not collide with descriptions ("Deploy to production").
const byText = (text: string) => page.getByText(text, { exact: true });

const stepWrapper = (label: string) => byText(label).element().closest(ITEM_SELECTOR) as HTMLElement;

const stepLocator = (label: string) => page.elementLocator(stepWrapper(label));

describe('DsStepper', () => {
	it('renders every step label and description in the vertical layout', async () => {
		await page.render(
			<DsStepper count={verticalSteps.length}>
				{verticalSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent
							index={index}
							label={step.label}
							description={step.description}
							actions={
								<DsNextStepButton>{index === verticalSteps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
							}
						/>
					</DsStep>
				))}
			</DsStepper>,
		);

		for (const step of verticalSteps) {
			await expect.element(byText(step.label)).toBeInTheDocument();
			await expect.element(byText(step.description)).toBeInTheDocument();
		}
	});

	it('advances through vertical steps and reveals Finish on the last step', async () => {
		await page.render(
			<DsStepper count={verticalSteps.length}>
				{verticalSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent
							index={index}
							label={step.label}
							description={step.description}
							actions={
								<DsNextStepButton>{index === verticalSteps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
							}
						/>
					</DsStep>
				))}
			</DsStepper>,
		);

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await next.click();

		await expect.element(page.getByRole('button', { name: /finish/i })).toBeInTheDocument();
	});

	it('renders compact steps without descriptions and still navigates to Finish', async () => {
		await page.render(
			<DsStepper count={verticalSteps.length}>
				{verticalSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent
							index={index}
							label={step.label}
							actions={
								<DsNextStepButton>{index === verticalSteps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>
							}
						/>
					</DsStep>
				))}
			</DsStepper>,
		);

		for (const step of verticalSteps) {
			await expect.element(byText(step.label)).toBeInTheDocument();
			await expect.element(byText(step.description)).not.toBeInTheDocument();
		}

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await next.click();

		await expect.element(page.getByRole('button', { name: /finish/i })).toBeInTheDocument();
	});

	it('navigates a stepper inside a panel and hides descriptions when switched to floating single variant', async () => {
		function PanelStepper() {
			const [activeStep, setActiveStep] = useState(0);
			const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');

			const isFloating = panelVariant === 'floating';

			return (
				<DsPanel
					open
					variant={panelVariant}
					draggable={isFloating}
					disablePadding={isFloating}
					slotProps={{
						collapseButton: {
							onClick: () => setPanelVariant(isFloating ? 'docked' : 'floating'),
							collapsed: isFloating,
						},
					}}
				>
					<DsStepper
						count={verticalSteps.length}
						activeStep={activeStep}
						onStepChange={({ step }) => setActiveStep(step)}
						variant={isFloating ? 'single' : undefined}
						floating={isFloating}
					>
						{verticalSteps.map((step, index) => (
							<DsStep index={index} key={index}>
								<DsStepContent
									index={index}
									label={step.label}
									description={step.description}
									actions={
										<DsNextStepButton>
											{index === verticalSteps.length - 1 ? 'Finish' : 'Next'}
										</DsNextStepButton>
									}
								/>
							</DsStep>
						))}
					</DsStepper>
				</DsPanel>
			);
		}

		await page.render(<PanelStepper />);

		await expect.element(byText('Enter project name and basic configuration')).toBeInTheDocument();

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await expect.element(stepLocator('Select market')).toHaveAttribute('aria-current', 'step');

		await page.getByLabelText('Toggle panel').click();

		await expect.element(byText('Enter project name and basic configuration')).not.toBeInTheDocument();
	});

	it('renders horizontal labels and advances the current step via the single Next button', async () => {
		await page.render(
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
			</DsStepper>,
		);

		for (const step of horizontalSteps) {
			await expect.element(byText(step.label)).toBeInTheDocument();
		}

		await expect.element(stepLocator('Project details')).toHaveAttribute('aria-current', 'step');

		await page.getByRole('button', { name: /next/i }).click();

		await expect.element(stepLocator('Select market')).toHaveAttribute('aria-current', 'step');
		await expect.element(stepLocator('Select market')).toHaveAttribute('data-current');
	});

	it('navigates a horizontal few-step stepper through every step', async () => {
		const fewSteps = horizontalSteps.slice(0, 3);

		await page.render(
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
			</DsStepper>,
		);

		for (const step of fewSteps) {
			await expect.element(byText(step.label)).toBeInTheDocument();
		}

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await expect.element(stepLocator('Select market')).toHaveAttribute('aria-current', 'step');
		await next.click();
		await expect.element(stepLocator('Design policy')).toHaveAttribute('aria-current', 'step');
	});

	it('navigates a compact horizontal few-step stepper (no descriptions) through its steps', async () => {
		const fewSteps = horizontalSteps.slice(0, 3);

		await page.render(
			<DsStepper
				count={fewSteps.length}
				orientation="horizontal"
				actions={<DsNextStepButton>Next</DsNextStepButton>}
			>
				{fewSteps.map((step, index) => (
					<DsStep index={index} key={index}>
						<DsStepContent index={index} label={step.label} />
					</DsStep>
				))}
			</DsStepper>,
		);

		for (const step of fewSteps) {
			await expect.element(byText(step.label)).toBeInTheDocument();
			await expect.element(byText(step.description)).not.toBeInTheDocument();
		}

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await expect.element(stepLocator('Select market')).toHaveAttribute('aria-current', 'step');
	});

	it('renders custom indicator icons and rich description, and advances with a controlled custom action', async () => {
		const customSteps = [
			{ label: 'Upload files', icon: 'upload' as const, description: 'Drag and drop or browse to upload' },
			{
				label: 'Configure settings',
				icon: 'settings' as const,
				description: (
					<span>
						Adjust <strong>network parameters</strong> for deployment
					</span>
				),
			},
			{ label: 'Deploy', icon: 'rocket_launch' as const, description: 'Review and launch the deployment' },
		];

		function ControlledHorizontal() {
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
		}

		await page.render(<ControlledHorizontal />);

		await expect.element(byText('upload')).toBeInTheDocument();
		await expect.element(byText('settings')).toBeInTheDocument();
		await expect.element(byText('rocket_launch')).toBeInTheDocument();

		expect(byText('network parameters').element().tagName).toBe('STRONG');

		await page.getByRole('button', { name: /continue/i }).click();

		await expect.element(stepLocator('Configure settings')).toHaveAttribute('aria-current', 'step');
	});

	it('shows numbers for default steps and a slot icon for the custom step, revealing its action when active', async () => {
		function CustomizedVertical() {
			const [activeStep, setActiveStep] = useState(0);

			return (
				<DsStepper count={3} activeStep={activeStep} onStepChange={({ step }) => setActiveStep(step)}>
					<DsStep index={0}>
						<DsStepContent
							index={0}
							label="Project details"
							description="Enter project name and basic configuration"
							actions={<DsNextStepButton>Next</DsNextStepButton>}
						/>
					</DsStep>

					<DsStep index={1} slots={{ indicator: <DsIcon icon="monitor_heart" size="small" /> }}>
						<DsStepContent
							index={1}
							label="Verify health"
							description="Confirm all services report healthy status"
							actions={<DsNextStepButton>Approve</DsNextStepButton>}
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
			);
		}

		await page.render(<CustomizedVertical />);

		await expect.element(byText('1')).toBeInTheDocument();
		await expect.element(byText('monitor_heart')).toBeInTheDocument();
		await expect.element(byText('3')).toBeInTheDocument();

		await page.getByRole('button', { name: /next/i }).click();

		await expect.element(page.getByRole('button', { name: /approve/i })).toBeInTheDocument();
	});

	it('marks disabled steps with data-disabled and keeps a completed disabled step non-clickable', async () => {
		await page.render(
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
						description="Configure advanced options"
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
						description="Deploy to production"
						actions={<DsNextStepButton>Finish</DsNextStepButton>}
					/>
				</DsStep>
			</DsStepper>,
		);

		await expect.element(stepLocator('Advanced settings')).toHaveAttribute('data-disabled');
		await expect.element(stepLocator('Deploy')).toHaveAttribute('data-disabled');
		await expect.element(stepLocator('Basic information')).not.toHaveAttribute('data-disabled');
		await expect.element(stepLocator('Review')).not.toHaveAttribute('data-disabled');

		const next = page.getByRole('button', { name: /next/i });
		await next.click();
		await next.click();

		expect(byText('Advanced settings').element().closest('button')).toBeNull();
		expect(byText('Basic information').element().closest('button')).not.toBeNull();
	});

	it('renders an error step with a close icon and data-error, and marks it current when reached', async () => {
		await page.render(
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
			</DsStepper>,
		);

		await expect.element(byText('close')).toBeInTheDocument();
		await expect.element(stepLocator('Validation')).toHaveAttribute('data-error');
		await expect.element(stepLocator('Configuration')).not.toHaveAttribute('data-error');

		await page.getByRole('button', { name: /next/i }).click();

		await expect.element(stepLocator('Validation')).toHaveAttribute('data-current');
		await expect.element(stepLocator('Validation')).toHaveAttribute('data-error');
	});
});
