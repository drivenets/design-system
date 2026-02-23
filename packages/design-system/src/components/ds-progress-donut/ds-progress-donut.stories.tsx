import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { DsIcon } from '../ds-icon';
import { DsProgressDonut, progressDonutSizes, progressDonutVariants } from './index';
import styles from './ds-progress-donut.stories.module.scss';

const meta: Meta<typeof DsProgressDonut> = {
	title: 'Design System/ProgressDonut',
	component: DsProgressDonut,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
		},
		size: {
			control: { type: 'select' },
			options: progressDonutSizes,
		},
		variant: {
			control: { type: 'select' },
			options: progressDonutVariants,
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsProgressDonut>;

export const Default: Story = {
	args: {
		value: 50,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toBeInTheDocument();
		await expect(progress).toHaveAttribute('aria-valuenow', '50');
		await expect(progress).toHaveAttribute('aria-valuemin', '0');
		await expect(progress).toHaveAttribute('aria-valuemax', '100');
		await expect(canvas.getByText('50%')).toBeVisible();
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className={styles.grid}>
			<div className={styles.cell}>
				<DsProgressDonut size="small" value={50} />
				<span className={styles.label}>Small / Default</span>
			</div>
			<div className={styles.cell}>
				<DsProgressDonut size="small" variant="success" />
				<span className={styles.label}>Small / Success</span>
			</div>
			<div className={styles.cell}>
				<DsProgressDonut size="small" variant="error" value={50} />
				<span className={styles.label}>Small / Error</span>
			</div>

			<div className={styles.cell}>
				<DsProgressDonut size="medium" value={50} />
				<span className={styles.label}>Medium / Default</span>
			</div>
			<div className={styles.cell}>
				<DsProgressDonut size="medium" variant="success" />
				<span className={styles.label}>Medium / Success</span>
			</div>
			<div className={styles.cell}>
				<DsProgressDonut size="medium" variant="error" value={50} />
				<span className={styles.label}>Medium / Error</span>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressBars = canvas.getAllByRole('progressbar');

		await expect(progressBars).toHaveLength(6);
	},
};

export const Sizes: Story = {
	render: () => (
		<div className={styles.row}>
			<div className={styles.cell}>
				<DsProgressDonut size="small" value={75} />
				<span className={styles.label}>Small</span>
			</div>
			<div className={styles.cell}>
				<DsProgressDonut size="medium" value={75} />
				<span className={styles.label}>Medium</span>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressBars = canvas.getAllByRole('progressbar');

		await expect(progressBars).toHaveLength(2);
		await expect(canvas.getAllByText('75%')).toHaveLength(2);
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toBeInTheDocument();
		await expect(progress).toHaveAttribute('aria-valuenow', '100');
		await expect(canvas.getByText('check')).toBeVisible();
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
		value: 50,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toBeInTheDocument();
		await expect(progress).toHaveAttribute('aria-valuenow', '50');
		await expect(canvas.getByText('close')).toBeVisible();
	},
};

export const CustomIcon: Story = {
	args: {
		value: 80,
		children: <DsIcon icon="warning" size="small" />,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toBeInTheDocument();
		await expect(progress).toHaveAttribute('aria-valuenow', '80');
		await expect(canvas.getByText('warning')).toBeVisible();
	},
};

export const ZeroProgress: Story = {
	args: {
		value: 0,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toHaveAttribute('aria-valuenow', '0');
		await expect(canvas.getByText('0%')).toBeVisible();
	},
};

export const FullProgress: Story = {
	args: {
		value: 100,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progress = canvas.getByRole('progressbar');

		await expect(progress).toHaveAttribute('aria-valuenow', '100');
		await expect(canvas.getByText('100%')).toBeVisible();
	},
};
