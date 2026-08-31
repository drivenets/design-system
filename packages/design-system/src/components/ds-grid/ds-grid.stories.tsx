import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import classNames from 'classnames';
import { DsGrid, DsGridItem } from './';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';
import styles from './ds-grid.stories.module.scss';

const meta = {
	title: 'Components/Grid',
	component: DsGrid,
	subcomponents: { DsGridItem },
	argTypes: {
		rows: {
			control: 'select',
			description: 'Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.',
			options: [2, 4, 6, 8],
		},
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
} satisfies Meta<typeof DsGrid>;

export default meta;
type Story = StoryObj<typeof DsGrid>;

export const Default: Story = {
	args: {
		className: styles.myGrid,
		rows: 6,
	},
	render: (args) => (
		<DsGrid {...args}>
			<DsGridItem className={styles.card} colSpan={4}>
				<div>Element 1</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
				<div>Element 2</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
				<div>Element 3</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
				<div>Element 4</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={4} rowSpan={2} rowStart={5} colStart={2}>
				<div>Element 5</div>
			</DsGridItem>
		</DsGrid>
	),
};

export const Responsive: Story = {
	args: {
		className: styles.myGrid,
		gutter: { lg: 16, md: 8 },
		margin: { lg: '16px 20px', md: 8 },
		rows: 4,
	},
	render: (args) => (
		<DsGrid {...args}>
			<DsGridItem className={styles.card} colSpan={{ lg: 4, md: 6 }}>
				<div>Card 1 — lg:4 md:6</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={{ lg: 4, md: 6 }}>
				<div>Card 2 — lg:4 md:6</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={{ lg: 4, md: 12 }}>
				<div>Card 3 — lg:4 md:12</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={{ lg: 6, md: 12 }} rowSpan={{ lg: 2, md: 1 }}>
				<div>Card 4 — lg:6×2 md:12×1</div>
			</DsGridItem>
			<DsGridItem className={styles.card} colSpan={{ lg: 6, md: 12 }}>
				<div>Card 5 — lg:6 md:12</div>
			</DsGridItem>
		</DsGrid>
	),
};

export const NavigationLayout: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		className: styles.navigationGrid,
		rows: 4,
	},
	render: function Render(args) {
		const [isCollapsed, setIsCollapsed] = useState(false);

		return (
			<DsStack direction="column" className={styles.layout}>
				<DsStack direction="row" className={styles.header}>
					<DsStack alignItems="center" justifyContent="center" className={styles.logo}>
						<DsButtonV3 variant="secondary" size="small" onClick={() => setIsCollapsed(!isCollapsed)}>
							Toggle
						</DsButtonV3>
					</DsStack>
					<div className={styles.title} />
				</DsStack>
				<DsStack direction="row" className={styles.main}>
					<div className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed })} />
					<DsStack direction="column" className={styles.contentWrapper}>
						<DsGrid {...args}>
							<DsGridItem className={styles.card} colSpan={4}>
								<div>Dashboard Card 1</div>
							</DsGridItem>
							<DsGridItem className={styles.card} colSpan={4}>
								<div>Dashboard Card 2</div>
							</DsGridItem>
							<DsGridItem className={styles.card} colSpan={4}>
								<div>Dashboard Card 3</div>
							</DsGridItem>
							<DsGridItem className={styles.card} colSpan={6}>
								<div>Dashboard Card 4</div>
							</DsGridItem>
							<DsGridItem className={styles.card} colSpan={6}>
								<div>Dashboard Card 5</div>
							</DsGridItem>
						</DsGrid>
					</DsStack>
				</DsStack>
			</DsStack>
		);
	},
};
