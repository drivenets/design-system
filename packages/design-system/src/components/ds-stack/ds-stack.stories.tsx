import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStack } from './index';
import styles from './ds-stack.stories.module.scss';

const Box = ({ children }: { children: React.ReactNode }) => <div className={styles.box}>{children}</div>;

const meta: Meta<typeof DsStack> = {
	title: 'Design System/Stack',
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
			<Box>Item 1</Box>
			<Box>Item 2</Box>
			<Box>Item 3</Box>
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
			<Box>Item 1</Box>
			<Box>Item 2</Box>
			<Box>Item 3</Box>
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
			<Box>Item 1</Box>
			<Box>Item 2</Box>
			<Box>Item 3</Box>
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
			<Box>Left</Box>
			<Box>Right</Box>
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
				<Box key={i}>Item {i + 1}</Box>
			))}
		</DsStack>
	),
};

export const Nested: Story = {
	render: () => (
		<DsStack gap={24}>
			<DsStack direction="row" gap={16} alignItems="center">
				<Box>Row 1 - A</Box>
				<Box>Row 1 - B</Box>
				<Box>Row 1 - C</Box>
			</DsStack>

			<DsStack direction="row" gap={16} alignItems="center">
				<Box>Row 2 - A</Box>
				<Box>Row 2 - B</Box>
			</DsStack>
		</DsStack>
	),
};
