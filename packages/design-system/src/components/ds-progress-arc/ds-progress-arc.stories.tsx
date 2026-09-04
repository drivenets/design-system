import type { Meta, StoryObj } from '@storybook/react-vite';

import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { DsProgressArc, progressArcSizes, progressArcVariants } from './index';

const meta: Meta<typeof DsProgressArc> = {
	title: 'Components/ProgressArc',
	component: DsProgressArc,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
		},
		size: {
			control: { type: 'select' },
			options: progressArcSizes,
		},
		variant: {
			control: { type: 'select' },
			options: progressArcVariants,
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsProgressArc>;

/** Default arc showing an in-progress percentage in the center. */
export const Default: Story = {
	args: {
		value: 50,
	},
};

/** Success state fills the arc and swaps the center label for a check icon. */
export const Success: Story = {
	args: {
		variant: 'success',
	},
};

/** Error state renders the error color and a close icon over the current value. */
export const Error: Story = {
	args: {
		variant: 'error',
		value: 50,
	},
};

/** Override the center content with your own icon instead of the percentage label. */
export const CustomIcon: Story = {
	args: {
		value: 80,
		children: <DsIcon icon="warning" size="small" />,
	},
};

/** Empty state at the start of a task. */
export const ZeroProgress: Story = {
	args: {
		value: 0,
	},
};

/** Completed state without the success variant styling. */
export const FullProgress: Story = {
	args: {
		value: 100,
	},
};

/** Showcase of every variant across both sizes. */
export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			{progressArcSizes.map((size) => (
				<DsStack key={size} direction="row" gap="var(--xl)" alignItems="center">
					{progressArcVariants.map((variant) => (
						<DsStack key={variant} direction="column" gap="var(--xs)" alignItems="center">
							<DsProgressArc size={size} variant={variant} value={50} />
							<DsTypography variant="body-sm-reg" color="secondary">
								{size} / {variant}
							</DsTypography>
						</DsStack>
					))}
				</DsStack>
			))}
		</DsStack>
	),
};

/** Side-by-side comparison of the available sizes. */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="row" gap="var(--xl)" alignItems="center">
			{progressArcSizes.map((size) => (
				<DsStack key={size} direction="column" gap="var(--xs)" alignItems="center">
					<DsProgressArc size={size} value={75} />
					<DsTypography variant="body-sm-reg" color="secondary">
						{size}
					</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};
