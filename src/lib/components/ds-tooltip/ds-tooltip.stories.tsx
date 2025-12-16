import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { DsCheckbox } from '../ds-checkbox';
import DsTooltip from './ds-tooltip';
import styles from './ds-tooltip.stories.module.scss';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsTooltip> = {
	title: 'Design System/Tooltip',
	component: DsTooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		content: {
			control: 'text',
			description: 'Content displayed within the tooltip',
		},
		children: {
			control: 'object',
			description: 'Element that triggers the tooltip on hover',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTooltip>;

const sanityCheck = async (canvasElement: HTMLElement, tooltipText: string) => {
	const canvas = within(canvasElement);
	// Hover over the icon to display the tooltip
	const trigger = await canvas.findByText(/info/i);
	await userEvent.hover(trigger);

	// Verify that the tooltip content is visible
	await expect(await screen.findByRole('tooltip', { name: new RegExp(tooltipText, 'i') })).toBeVisible();

	// Move the cursor away to hide the tooltip
	await userEvent.unhover(trigger);

	// Verify that the tooltip content is no longer visible
	await expect(screen.queryByText(new RegExp(tooltipText, 'i'))).not.toBeInTheDocument();
};

const defaultTooltipText = 'This is the mouse over tooltip message.';

export const Default: Story = {
	args: {
		content: defaultTooltipText,
		children: <DsIcon icon="info" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement, defaultTooltipText);
	},
};

const longTooltipText =
	"Hey there! This tooltip pops up when you hover over it. If it gets too wordy, it'll split into a couple of lines. But if there's still not enough space, just tweak your text or trim it down with an ellipsis, like this: ‘...’. Remember, tooltips are a great way to provide additional context or guidance without cluttering the ...";

export const LongText: Story = {
	args: {
		content: longTooltipText,
		children: <DsIcon icon="info" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement, longTooltipText);
	},
};

export const ConditionalOpenWithBoolean: Story = {
	render: function Render() {
		const [isFeatureEnabled, setFeatureEnabled] = useState(false);

		return (
			<div className={styles.storyContainer}>
				<DsTooltip
					content={isFeatureEnabled ? 'This tooltip is controlled by the checkbox below' : undefined}
				>
					<DsIcon icon="info" />
				</DsTooltip>
				<DsCheckbox
					label="Enable tooltip"
					checked={isFeatureEnabled}
					onCheckedChange={(checked) => setFeatureEnabled(checked === true)}
				/>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Initially tooltip should not show (checkbox is unchecked)
		let trigger = await canvas.findByText(/info/i);
		await userEvent.hover(trigger);
		await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		await userEvent.unhover(trigger);

		// Check the checkbox to enable tooltip
		const checkbox = canvas.getByRole('checkbox');
		await userEvent.click(checkbox);

		// Now tooltip should show
		trigger = await canvas.findByText(/info/i);
		await userEvent.hover(trigger);
		await expect(await screen.findByRole('tooltip')).toBeVisible();
		await userEvent.unhover(trigger);

		// Uncheck the checkbox
		await userEvent.click(checkbox);

		// Tooltip should not show again
		trigger = await canvas.findByText(/info/i);
		await userEvent.hover(trigger);
		await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
	},
};

export const RichContent: Story = {
	args: {
		content: (
			<div>
				<strong>Multi-line</strong> tooltip with <em>JSX</em>
				<br />
				<span style={{ color: '#9cdcfe' }}>No truncation should occur.</span>
			</div>
		),
		children: <DsIcon icon="info" />,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = await canvas.findByText(/info/i);
		await userEvent.hover(trigger);

		const tooltip = await screen.findByRole('tooltip');
		await expect(tooltip).toBeVisible();
		await expect(within(tooltip).getByText(/Multi-line/i)).toBeInTheDocument();
		await expect(within(tooltip).getByText(/JSX/i)).toBeInTheDocument();
		await expect(within(tooltip).getByText(/No truncation should occur\./i)).toBeInTheDocument();
		await userEvent.unhover(trigger);
		await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
	},
};
