import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTooltip from './ds-tooltip';
import { tooltipPlacements } from './ds-tooltip.types';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsTooltip> = {
	title: 'Components/Tooltip',
	component: DsTooltip,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		content: {
			control: 'text',
			description: 'Content displayed within the tooltip',
		},
		placement: {
			control: 'select',
			options: tooltipPlacements,
		},
		disabled: {
			control: 'boolean',
		},
		interactive: {
			control: 'boolean',
		},
		openDelay: {
			control: 'number',
		},
		closeDelay: {
			control: 'number',
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

/**
 * Tooltips accept rich JSX content, not just strings. Compose `DsStack` and
 * `DsTypography` so the layout and text styles inherit the on-dark tooltip palette.
 */
export const RichContent: Story = {
	args: {
		content: (
			<DsStack direction="column" gap="var(--3xs)">
				<DsTypography variant="body-sm-md">Multi-line tooltip with JSX</DsTypography>
				<DsTypography variant="body-xs-reg">No truncation should occur.</DsTypography>
			</DsStack>
		),
		children: <DsIcon icon="info" />,
	},
};

export const PlacementEnd: Story = {
	args: {
		content: 'Anchored to the end of the trigger.',
		placement: 'top-end',
		children: <DsIcon icon="info" />,
	},
};

export const Disabled: Story = {
	args: {
		content: 'You should not see this tooltip.',
		disabled: true,
		children: <DsIcon icon="info" />,
	},
};

/**
 * Pointer can travel onto the tooltip and use actions inside it. Pair
 * `interactive` with a non-zero `closeDelay` so the handoff is not a race.
 * Actions inside the tooltip should use the light/on-dark palette.
 */
export const Interactive: Story = {
	args: {
		content: (
			<DsButtonV3 variant="tertiary" color="light" size="tiny">
				Open in catalog
			</DsButtonV3>
		),
		interactive: true,
		closeDelay: 150,
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
