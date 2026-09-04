import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { DsStack } from '../ds-stack';
import { DsTypography } from './index';
import { typographyColors, typographyVariantConfig } from './ds-typography.config';
import type { SemanticVariant } from './ds-typography.types';
import storyStyles from './ds-typography.stories.module.scss';

const variantOptions = Object.keys(typographyVariantConfig) as SemanticVariant[];
const sample = 'The quick brown fox jumps over the lazy dog.';
const onDarkColors: readonly string[] = ['on-action', 'on-disabled', 'light-disabled'];

const withTruncateBox: Decorator = (Story) => (
	<div className={storyStyles.truncateBox}>
		<Story />
	</div>
);

const meta: Meta<typeof DsTypography> = {
	title: 'Components/Typography',
	component: DsTypography,
	parameters: { layout: 'padded' },
	argTypes: {
		variant: { control: 'select', options: variantOptions },
		color: { control: 'select', options: typographyColors },
		asChild: { control: 'boolean' },
		truncate: {
			control: 'select',
			options: ['off', 'single', '2 lines', '3 lines'],
			mapping: { off: false, single: true, '2 lines': 2, '3 lines': 3 },
		},
		tooltip: { control: 'boolean' },
		tooltipContent: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	args: {
		variant: 'body-md-reg',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
};

export default meta;
type Story = StoryObj<typeof DsTypography>;

/** Default body text on the main foreground color. */
export const Default: Story = {
	args: {
		variant: 'body-md-reg',
		color: 'main',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
};

/** Use heading variants for page and section titles. */
export const Heading: Story = {
	args: {
		variant: 'heading3',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
};

/** Apply a semantic `color` to convey emphasis or state. */
export const Color: Story = {
	args: {
		variant: 'body-md-reg',
		color: 'secondary',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
};

/** The `color` prop also accepts raw CSS values (tokens, hex, rgb) as an escape hatch. */
export const CustomColor: Story = {
	args: {
		variant: 'body-md-reg',
		color: 'var(--color-dap-purple-600)',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
};

/** Render as a different element while keeping typography styles via `asChild`. */
export const AsChild: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<DsTypography variant="body-md-link" asChild>
			<a href="https://example.com">Link rendered via asChild</a>
		</DsTypography>
	),
};

/** Clamp overflowing text to a single line with an ellipsis. Needs a width-constrained parent. */
export const Truncate: Story = {
	args: {
		variant: 'body-md-reg',
		truncate: true,
		children:
			'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.',
	},
	decorators: [withTruncateBox],
};

/** Pass a number to clamp to that many lines. */
export const TruncateMultiline: Story = {
	args: {
		variant: 'body-md-reg',
		truncate: 2,
		children:
			'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.',
	},
	decorators: [withTruncateBox],
};

/** Enable `tooltip` to reveal the full text on hover while it stays truncated. */
export const TruncateWithTooltip: Story = {
	args: {
		variant: 'body-md-reg',
		truncate: true,
		tooltip: true,
		children:
			'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.',
	},
	decorators: [withTruncateBox],
};

/** Full type scale for visual reference. */
export const Variants: Story = {
	tags: ['!manifest'],
	parameters: { controls: { disable: true }, docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--md)">
			{variantOptions.map((variant) => (
				<DsStack key={variant} direction="column" gap="var(--3xs)">
					<DsTypography variant="code-xs-reg" color="secondary">
						{variant}
					</DsTypography>
					<DsTypography variant={variant}>{sample}</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};

/** Semantic text colors on the default background. */
export const Colors: Story = {
	tags: ['!manifest'],
	parameters: { controls: { disable: true }, docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--sm)">
			{typographyColors
				.filter((color) => !onDarkColors.includes(color))
				.map((color) => (
					<DsStack key={color} direction="column" gap="var(--3xs)">
						<DsTypography variant="code-xs-reg" color="secondary">
							{color}
						</DsTypography>
						<DsTypography variant="body-md-md" color={color}>
							{sample}
						</DsTypography>
					</DsStack>
				))}
		</DsStack>
	),
};

/** Colors intended for dark or accent backgrounds. */
export const ColorsOnDark: Story = {
	tags: ['!manifest'],
	parameters: {
		controls: { disable: true },
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack className={storyStyles.onDark} direction="column" gap="var(--sm)">
			{onDarkColors.map((color) => (
				<DsStack key={color} direction="column" gap="var(--3xs)">
					<DsTypography variant="code-xs-reg" color="var(--secondary-300)">
						{color}
					</DsTypography>
					<DsTypography variant="body-md-md" color={color}>
						{sample}
					</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};
