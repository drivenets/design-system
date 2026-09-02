import type { Meta, StoryObj } from '@storybook/react-vite';
import DsSpinner from './ds-spinner';
import { spinnerSizes } from './ds-spinner.types';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-spinner.stories.module.scss';

const meta: Meta<typeof DsSpinner> = {
	title: 'Components/Spinner',
	component: DsSpinner,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: { type: 'select' },
			options: spinnerSizes,
			description: 'The size of the spinner',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsSpinner>;

/**
 * Default medium spinner for general-purpose loading states.
 */
export const Default: Story = {
	args: {
		size: 'medium',
	},
};

/**
 * Compact spinner for dense layouts, inline placement, or small containers.
 */
export const Small: Story = {
	args: {
		size: 'small',
	},
};

/**
 * Prominent spinner for full-page or large-surface loading states.
 */
export const Large: Story = {
	args: {
		size: 'large',
	},
};

/**
 * All spinner sizes side by side for visual comparison.
 */
export const AllSizes: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack alignItems="center" gap="var(--2xl)">
			<DsStack direction="column" alignItems="center" gap="var(--xs)">
				<DsSpinner size="small" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Small
				</DsTypography>
			</DsStack>
			<DsStack direction="column" alignItems="center" gap="var(--xs)">
				<DsSpinner size="medium" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Medium
				</DsTypography>
			</DsStack>
			<DsStack direction="column" alignItems="center" gap="var(--xs)">
				<DsSpinner size="large" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Large
				</DsTypography>
			</DsStack>
		</DsStack>
	),
};

/**
 * Spinner inside a modal overlay with explanatory text describing the process.
 */
export const ModalLoading: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<DsSpinner />
				<DsStack direction="column" alignItems="center" gap="var(--3xs)">
					<DsTypography variant="body-sm-reg">Explanation text will describe the process.</DsTypography>
					<DsTypography variant="body-xs-reg" color="secondary">
						Two lines will be aimed for this.
					</DsTypography>
				</DsStack>
			</div>
		</div>
	),
};
