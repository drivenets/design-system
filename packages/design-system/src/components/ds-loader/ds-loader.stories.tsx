import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsLoader, loaderVariants } from './index';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-loader.stories.module.scss';

const meta: Meta<typeof DsLoader> = {
	title: 'Components/Loader',
	component: DsLoader,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: loaderVariants,
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsLoader>;

/**
 * Default loader — a rotating spinner arc for general-purpose loading states.
 */
export const Default: Story = {
	args: {
		variant: 'spinner',
	},
};

/**
 * Pulsing variant — the outer ring pulsates while the inner circle stays static.
 * Use it for softer, ambient loading affordances.
 */
export const Pulsing: Story = {
	args: {
		variant: 'pulsing',
	},
};

/**
 * Pair the loader with a text label to clarify what is loading.
 */
export const InlineWithText: Story = {
	render: () => (
		<DsStack alignItems="center" gap="var(--sm)">
			<DsLoader />
			<DsTypography variant="body-md-reg">Loading...</DsTypography>
		</DsStack>
	),
};

/**
 * Side-by-side comparison of both loader variants.
 */
export const VariantComparison: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack alignItems="center" gap="var(--2xl)">
			<DsStack direction="column" alignItems="center" gap="var(--sm)">
				<DsLoader variant="spinner" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Spinner
				</DsTypography>
			</DsStack>
			<DsStack direction="column" alignItems="center" gap="var(--sm)">
				<DsLoader variant="pulsing" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Pulsing
				</DsTypography>
			</DsStack>
		</DsStack>
	),
};

/**
 * Common placements for the loader across different layout contexts.
 */
export const UsageExamples: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Inline with text</DsTypography>
				<DsStack alignItems="center" gap="var(--sm)">
					<DsLoader />
					<DsTypography variant="body-md-reg">Processing request...</DsTypography>
				</DsStack>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Centered in container</DsTypography>
				<DsStack alignItems="center" justifyContent="center" className={styles.centeredContainer}>
					<DsLoader />
				</DsStack>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Multiple loaders</DsTypography>
				<DsStack gap="var(--standard)">
					<DsLoader />
					<DsLoader />
					<DsLoader />
				</DsStack>
			</DsStack>
		</DsStack>
	),
};
