import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DsLoader, variants } from './index';
import styles from './ds-loader.stories.module.scss';

const meta: Meta<typeof DsLoader> = {
	title: 'Design System/Loader',
	component: DsLoader,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: variants,
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsLoader>;

/**
 * Default loader - rotating spinner arc
 */
export const Default: Story = {
	args: {
		'data-testid': 'loader',
	} as React.ComponentProps<typeof DsLoader>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loader = canvas.getByTestId('loader');

		await expect(loader).toBeInTheDocument();
	},
};

/**
 * Pulsing loader - inner circle stays static, outer circle pulsates
 */
export const Pulsing: Story = {
	args: {
		variant: 'pulsing',
	},
	play: async ({ canvasElement }) => {
		// Assert pulsing SVG is rendered
		const svg = canvasElement.querySelector('svg');
		await expect(svg).toBeInTheDocument();

		// PulsingIcon uses two circle elements (outer pulsing + inner static)
		const circles = svg?.querySelectorAll('circle');
		await expect(circles?.length).toBe(2);

		// PulsingIcon does NOT have the mask element (unique to spinner)
		const mask = svg?.querySelector('mask');
		await expect(mask).not.toBeInTheDocument();
	},
};

/**
 * Loader displayed inline with text
 */
export const InlineWithText: Story = {
	render: () => (
		<div className={styles.inlineContainer}>
			<DsLoader />
			<span>Loading...</span>
		</div>
	),
};

/**
 * Comparison of both loader variants
 */
export const VariantComparison: Story = {
	render: () => (
		<div className={styles.variantComparisonContainer}>
			<div className={styles.variantItem}>
				<DsLoader variant="spinner" />
				<span className={styles.variantLabel}>Spinner</span>
			</div>
			<div className={styles.variantItem}>
				<DsLoader variant="pulsing" />
				<span className={styles.variantLabel}>Pulsing</span>
			</div>
		</div>
	),
};

/**
 * Multiple loaders in different contexts
 */
export const UsageExamples: Story = {
	render: () => (
		<div className={styles.usageExamplesContainer}>
			<div>
				<h4 className={styles.usageSection}>Inline with text</h4>
				<div className={styles.inlineContainer}>
					<DsLoader />
					<span>Processing request...</span>
				</div>
			</div>
			<div>
				<h4 className={styles.usageSection}>Centered in container</h4>
				<div className={styles.centeredContainer}>
					<DsLoader />
				</div>
			</div>
			<div>
				<h4 className={styles.usageSection}>Multiple loaders</h4>
				<div className={styles.multipleLoadersContainer}>
					<DsLoader />
					<DsLoader />
					<DsLoader />
				</div>
			</div>
		</div>
	),
};

/**
 * Test that custom props (className, style, data-testid) are forwarded to the container
 */
export const CustomProps: Story = {
	args: {
		className: styles.customPropsLoader,
		'data-testid': 'loader-test-id',
	} as React.ComponentProps<typeof DsLoader>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loader = canvas.getByTestId('loader-test-id');

		await expect(loader).toBeInTheDocument();
		await expect(loader.className).toContain('customPropsLoader');
	},
};
