import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsPanel } from './ds-panel';
import { DsButton } from '../ds-button/';
import { DsStepper, DsStep, DsStepContent, DsNextStepButton } from '../ds-stepper';
import { useState } from 'react';
import { expect, userEvent } from 'storybook/test';
import type { DsPanelVariant } from './ds-panel.types';

export default {
	title: 'Design System/Panel',
	component: DsPanel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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

	play: async ({ canvas, step, args, initialArgs }) => {
		const panelTrigger = canvas.getByLabelText('Toggle panel');

		const testVariant = async (variant: DsPanelVariant) => {
			args.variant = variant;

			await step(`Close Panel - ${variant}`, async () => {
				await userEvent.click(panelTrigger);

				await expect(canvas.queryByText(/This is a panel/)).not.toBeVisible();
			});

			await step(`Open Panel - ${variant}`, async () => {
				await userEvent.click(canvas.getByText('Open Panel'));

				await expect(canvas.getByText(/This is a panel/)).toBeVisible();
			});

			// Reset state.
			args.variant = initialArgs.variant;
		};

		await testVariant('docked');
		await testVariant('floating');
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

	play: async ({ canvas, step }) => {
		const togglePanel = async () => {
			await userEvent.click(canvas.getByLabelText('Toggle panel'));
		};

		const getPanel = () => canvas.getByText('Configure network').closest('[data-state]') as HTMLElement;

		const dockedRect = getPanel().getBoundingClientRect();

		await step('Docked - all steps and descriptions visible', async () => {
			await expect(canvas.getByText('Configure network')).toBeVisible();
			await expect(canvas.getByText('Assign resources')).toBeVisible();
			await expect(canvas.getByText('Review & deploy')).toBeVisible();
			await expect(canvas.getByText(/Set up interfaces/)).toBeVisible();
		});

		await step('Collapse to floating - single step with drag handle', async () => {
			await togglePanel();

			await expect(canvas.getByText('Configure network')).toBeVisible();
			await expect(canvas.getByText('drag_indicator')).toBeVisible();
			await expect(canvas.queryByText(/Set up interfaces/)).not.toBeInTheDocument();
		});

		await step('Drag floating panel', async () => {
			const handle = canvas.getByText('drag_indicator');
			const panel = getPanel();
			const rectBefore = panel.getBoundingClientRect();

			await userEvent.pointer([
				{ target: handle, keys: '[MouseLeft>]', coords: { clientX: 100, clientY: 100 } },
				{ coords: { clientX: 200, clientY: 150 } },
				{ keys: '[/MouseLeft]' },
			]);

			const rectAfter = panel.getBoundingClientRect();

			await expect(Math.round(rectAfter.left - rectBefore.left)).toBe(100);
			await expect(Math.round(rectAfter.top - rectBefore.top)).toBe(50);
		});

		await step('Non-handle area does not trigger drag', async () => {
			const label = canvas.getByText('Configure network');
			const panel = getPanel();
			const rectBefore = panel.getBoundingClientRect();

			await userEvent.pointer([
				{ target: label, keys: '[MouseLeft>]', coords: { clientX: 0, clientY: 0 } },
				{ coords: { clientX: 200, clientY: 200 } },
				{ keys: '[/MouseLeft]' },
			]);

			const rectAfter = panel.getBoundingClientRect();

			await expect(rectAfter.left).toBe(rectBefore.left);
			await expect(rectAfter.top).toBe(rectBefore.top);
		});

		await step('Navigate steps while floating', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));

			await expect(canvas.getByText('Assign resources')).toBeVisible();
		});

		await step('Expand back to docked - full content restored', async () => {
			await togglePanel();

			await expect(canvas.getByText('Configure network')).toBeVisible();
			await expect(canvas.getByText('Assign resources')).toBeVisible();
			await expect(canvas.getByText('Review & deploy')).toBeVisible();
			await expect(canvas.queryByText('drag_indicator')).not.toBeInTheDocument();
		});

		await step('Drag position resets after expanding', async () => {
			const resetRect = getPanel().getBoundingClientRect();

			await expect(resetRect.left).toBe(dockedRect.left);
			await expect(resetRect.top).toBe(dockedRect.top);
		});
	},
};
