import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsDivider from './ds-divider';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-divider.stories.module.scss';

const meta: Meta<typeof DsDivider> = {
	title: 'Components/Divider',
	component: DsDivider,
	parameters: {
		layout: 'centered',
	},
	args: {
		orientation: 'horizontal',
	},
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Controls orientation of the divider.',
		},
		component: {
			control: 'select',
			options: ['(default)', 'hr', 'div', 'span'],
			mapping: {
				'(default)': undefined,
				hr: 'hr',
				div: 'div',
				span: 'span',
			} satisfies Record<string, React.ElementType | undefined>,
			description: 'Underlying element/component to render.',
		},
		style: { control: false },
		className: { control: false },
	},
};

export default meta;
type Story = StoryObj<typeof DsDivider>;

export const Default: Story = {
	render: (args) =>
		args.orientation === 'vertical' ? (
			<DsStack direction="row" gap="var(--sm)" alignItems="center" className={styles.verticalDemo}>
				<DsTypography variant="body-md-reg">Left content</DsTypography>
				<DsDivider {...args} />
				<DsTypography variant="body-md-reg">Right content</DsTypography>
			</DsStack>
		) : (
			<DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
				<DsTypography variant="body-md-reg">Top content</DsTypography>
				<DsDivider {...args} />
				<DsTypography variant="body-md-reg">Bottom content</DsTypography>
			</DsStack>
		),
};

export const Showcase: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
		},
	},
	render: () => (
		<div className={styles.showcaseContainer}>
			<table className={styles.showcaseTable}>
				<thead>
					<tr>
						<th className={styles.showcaseHeader}>Variant</th>
						<th className={styles.showcaseHeader}>Preview</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Horizontal</span>
							<span className={styles.showcaseCellInline}>default</span>
						</td>
						<td className={styles.showcaseCell}>
							<div className={styles.horizontalDividerWrapper}>
								<DsDivider />
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Vertical</span>
							<span className={styles.showcaseCellInline}>default</span>
						</td>
						<td className={styles.showcaseCell}>
							<div className={styles.verticalDividerContainer}>
								<div className={styles.verticalDividerContent}>Left</div>
								<DsDivider orientation="vertical" />
								<div className={styles.verticalDividerContent}>Right</div>
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Custom</span>
							<span className={styles.showcaseCellInline}>component=&quot;span&quot;</span>
						</td>
						<td className={styles.showcaseCell}>
							<div className={styles.horizontalDividerWrapper}>
								<DsDivider component="span" />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	),
};

export const Horizontal: Story = {
	args: {
		orientation: 'horizontal',
	},
	render: (args) => (
		<DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
			<DsTypography variant="body-md-reg">Above</DsTypography>
			<DsDivider {...args} />
			<DsTypography variant="body-md-reg">Below</DsTypography>
		</DsStack>
	),
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
	},
	render: (args) => (
		<DsStack direction="row" gap="var(--sm)" alignItems="center" className={styles.verticalDemo}>
			<DsTypography variant="body-md-reg">Left</DsTypography>
			<DsDivider {...args} />
			<DsTypography variant="body-md-reg">Right</DsTypography>
		</DsStack>
	),
};

export const WithCustomComponent: Story = {
	args: {
		orientation: 'horizontal',
		component: 'span',
	},
	render: (args) => (
		<DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
			<DsTypography variant="body-md-reg">Above</DsTypography>
			<DsDivider {...args} />
			<DsTypography variant="body-md-reg">Below</DsTypography>
		</DsStack>
	),
};
