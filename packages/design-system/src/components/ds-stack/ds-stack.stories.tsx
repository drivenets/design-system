import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStack } from './index';
import styles from './ds-stack.stories.module.scss';

const meta: Meta<typeof DsStack> = {
	title: 'Components/Stack',
	component: DsStack,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		direction: { control: 'select', options: ['row', 'column', 'row-reverse', 'column-reverse'] },
		gap: { control: 'text' },
		alignItems: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] },
		justifyContent: {
			control: 'select',
			options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
		},
		flexWrap: { control: 'select', options: ['nowrap', 'wrap', 'wrap-reverse'] },
		width: { control: 'text' },
		flex: { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsStack>;

export const Default: Story = {
	args: {
		direction: 'column',
		gap: 8,
	},
	render: (args) => (
		<DsStack {...args}>
			<div className={styles.box}>Item 1</div>
			<div className={styles.box}>Item 2</div>
			<div className={styles.box}>Item 3</div>
		</DsStack>
	),
};

export const Row: Story = {
	args: {
		direction: 'row',
		gap: 16,
		alignItems: 'center',
	},
	render: (args) => (
		<DsStack {...args}>
			<div className={styles.box}>Item 1</div>
			<div className={styles.box}>Item 2</div>
			<div className={styles.box}>Item 3</div>
		</DsStack>
	),
};

export const Responsive: Story = {
	args: {
		direction: { md: 'column', lg: 'row' },
		gap: { md: 8, lg: 24 },
		alignItems: 'center',
	},
	render: (args) => (
		<DsStack {...args} className={styles.container}>
			<div className={styles.box}>Item 1</div>
			<div className={styles.box}>Item 2</div>
			<div className={styles.box}>Item 3</div>
		</DsStack>
	),
};

export const SpaceBetween: Story = {
	args: {
		direction: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
	render: (args) => (
		<DsStack {...args} className={styles.container}>
			<div className={styles.box}>Left</div>
			<div className={styles.box}>Right</div>
		</DsStack>
	),
};

export const Wrapping: Story = {
	args: {
		direction: 'row',
		gap: 8,
		flexWrap: 'wrap',
	},
	render: (args) => (
		<DsStack {...args} className={styles.container}>
			{Array.from({ length: 10 }, (_, i) => (
				<div className={styles.box} key={i}>
					Item {i + 1}
				</div>
			))}
		</DsStack>
	),
};

export const Nested: Story = {
	render: () => (
		<DsStack gap={24}>
			<DsStack direction="row" gap={16} alignItems="center">
				<div className={styles.box}>Row 1 - A</div>
				<div className={styles.box}>Row 1 - B</div>
				<div className={styles.box}>Row 1 - C</div>
			</DsStack>

			<DsStack direction="row" gap={16} alignItems="center">
				<div className={styles.box}>Row 2 - A</div>
				<div className={styles.box}>Row 2 - B</div>
			</DsStack>
		</DsStack>
	),
};
