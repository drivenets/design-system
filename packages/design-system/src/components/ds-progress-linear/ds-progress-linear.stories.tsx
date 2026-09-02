import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { DsProgressLinear, progressLinearSizes, progressLinearVariants } from './index';

const meta: Meta<typeof DsProgressLinear> = {
	title: 'Components/ProgressLinear',
	component: DsProgressLinear,
	parameters: {
		layout: 'centered',
	},
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
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsProgressLinear>;

/** Standard progress bar with a label, percentage value, and helper caption. */
export const Default: Story = {
	args: {
		value: 35,
		label: 'File Upload',
		caption: 'Uploading...',
	},
};

/** Bare progress track without the percentage value — use in compact or inline layouts. */
export const BarOnly: Story = {
	args: {
		value: 70,
		showValue: false,
	},
};

/** Caption accepts a ReactNode when you need richer helper text than a plain string. */
export const WithCustomCaption: Story = {
	args: {
		value: 60,
		label: 'Processing',
		caption: (
			<DsTypography variant="body-sm-reg" color="secondary">
				Step 3 of 5
			</DsTypography>
		),
	},
};

/** Drive `value` from state to reflect live progress, e.g. an upload or long-running task. */
export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const [value, setValue] = useState(35);

		return (
			<DsStack direction="column" gap="var(--sm)" width="600px">
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>
				<DsProgressLinear value={value} label="File Upload" caption="Uploading..." />
			</DsStack>
		);
	},
};

/** Showcase: every visual variant driving bar color and caption styling. */
export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--xl)" width="600px">
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
		</DsStack>
	),
};

/** Showcase: the three track sizes side by side for visual comparison. */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--xl)" width="600px">
			<DsStack direction="column" gap="var(--2xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Small
				</DsTypography>
				<DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
			</DsStack>
			<DsStack direction="column" gap="var(--2xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Medium
				</DsTypography>
				<DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
			</DsStack>
			<DsStack direction="column" gap="var(--2xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Large
				</DsTypography>
				<DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
			</DsStack>
		</DsStack>
	),
};

/** Showcase: full size × variant matrix for design review. */
export const FullMatrix: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--2xl)" width="600px">
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-semi-bold">Small</DsTypography>
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
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-semi-bold">Medium</DsTypography>
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
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-semi-bold">Large</DsTypography>
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
			</DsStack>
		</DsStack>
	),
};
