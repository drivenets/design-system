import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { DsIcon } from '@design-system/ui';
import DsTooltip from './ds-tooltip';

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
};
