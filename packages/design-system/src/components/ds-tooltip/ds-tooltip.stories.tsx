import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTooltip from './ds-tooltip';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsTooltip> = {
	title: 'Design System/Tooltip',
	component: DsTooltip,
	parameters: {
		layout: 'centered',
	},
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

export const Default: Story = {
	args: {
		content: 'This is the mouse over tooltip message.',
		children: <DsIcon icon="info" />,
	},
};

export const LongText: Story = {
	args: {
		content:
			'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
		children: <DsIcon icon="info" />,
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

export const CustomWidthWithEllipsis: Story = {
	args: {
		content: 'Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.',
		children: <DsIcon icon="info" />,
		slotProps: {
			content: {
				style: {
					maxWidth: 200,
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},
			},
		},
	},
};
