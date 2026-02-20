import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { DsProgressLinear, progressLinearSizes, progressLinearVariants } from './index';
import styles from './ds-progress-linear.stories.module.scss';

const meta: Meta<typeof DsProgressLinear> = {
	title: 'Design System/ProgressLinear',
	component: DsProgressLinear,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className={styles.grid}>
				<Story />
			</div>
		),
	],
	argTypes: {
		variant: {
			control: 'radio',
			options: progressLinearVariants,
		},
		size: {
			control: 'radio',
			options: progressLinearSizes,
		},
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
		},
		showValue: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsProgressLinear>;

export const Default: Story = {
	args: {
		value: 35,
		label: 'File Upload',
		caption: 'Uploading...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const progressbar = canvas.getByRole('progressbar');
		await expect(progressbar).toBeInTheDocument();

		await expect(canvas.getByText('File Upload')).toBeVisible();
		await expect(canvas.getByText('35%')).toBeVisible();
		await expect(canvas.getByText('Uploading...')).toBeVisible();
	},
};

export const AllVariants: Story = {
	render: () => (
		<>
			<DsProgressLinear variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
			<DsProgressLinear variant="progress" value={35} label="File Upload" caption="Uploading..." />
			<DsProgressLinear variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
			<DsProgressLinear variant="success" value={100} label="File Upload" caption="Upload complete." />
			<DsProgressLinear
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>
		</>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressBars = canvas.getAllByRole('progressbar');

		await expect(progressBars).toHaveLength(5);

		await expect(canvas.getByText('Waiting to start...')).toBeVisible();
		await expect(canvas.getByText('Uploading...')).toBeVisible();
		await expect(canvas.getByText('Upload interrupted.')).toBeVisible();
		await expect(canvas.getByText('Upload complete.')).toBeVisible();
		await expect(canvas.getByText('Error: File exceeds size limit.')).toBeVisible();
	},
};

export const Sizes: Story = {
	render: () => (
		<>
			<DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
			<DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
			<DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
		</>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressBars = canvas.getAllByRole('progressbar');

		await expect(progressBars).toHaveLength(3);

		const labels = canvas.getAllByText('File Upload');
		await expect(labels).toHaveLength(3);

		const values = canvas.getAllByText('50%');
		await expect(values).toHaveLength(3);
	},
};

export const WithCustomCaption: Story = {
	args: {
		value: 60,
		label: 'Processing',
		caption: (
			<span>
				Step <strong>3</strong> of <strong>5</strong>
			</span>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
		await expect(canvas.getByText('Processing')).toBeVisible();

		// Verify custom ReactNode caption renders with strong tags for numbers
		await expect(canvas.getByText('3')).toBeInTheDocument();
		await expect(canvas.getByText('5')).toBeInTheDocument();
	},
};

export const BarOnly: Story = {
	args: {
		value: 70,
		showValue: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressbar = canvas.getByRole('progressbar');

		await expect(progressbar).toBeInTheDocument();
		await expect(canvas.queryByText('70%')).not.toBeInTheDocument();
	},
};

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value ?? 0);

		return (
			<>
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>

				<DsProgressLinear {...args} value={value} />
			</>
		);
	},
	args: {
		label: 'File Upload',
		caption: 'Uploading...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const progressbar = canvas.getByRole('progressbar');
		await expect(progressbar).toBeInTheDocument();

		const slider = canvas.getByRole('slider');
		await expect(slider).toBeInTheDocument();

		// Verify initial state
		await expect(canvas.getByText('0%')).toBeInTheDocument();
		await expect(progressbar).toHaveAttribute('aria-valuenow', '0');

		// Verify the slider and progressbar are connected (both have min/max attributes)
		await expect(slider).toHaveAttribute('min', '0');
		await expect(slider).toHaveAttribute('max', '100');
	},
};

export const FullMatrix: Story = {
	render: () => (
		<>
			<DsProgressLinear
				size="small"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="small"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="small"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="small"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="small"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>

			<DsProgressLinear
				size="medium"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="medium"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="medium"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="medium"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="medium"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>

			<DsProgressLinear
				size="large"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="large"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="large"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="large"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="large"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>
		</>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const progressBars = canvas.getAllByRole('progressbar');

		await expect(progressBars).toHaveLength(15);

		const allLabels = canvas.getAllByText('File Upload');
		await expect(allLabels).toHaveLength(15);

		await expect(canvas.getAllByText('Waiting to start...')).toHaveLength(3);
		await expect(canvas.getAllByText('Upload complete.')).toHaveLength(3);
	},
};
