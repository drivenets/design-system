import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsGrid, DsGridItem } from './ds-grid';
import { DsButton } from '../ds-button';
import './ds-grid.stories.scss';

const meta = {
	title: 'Design System/Grid',
	component: DsGrid,
	subcomponents: { DsGridItem },
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			description: 'The content to be rendered inside the grid',
		},
		rows: {
			control: 'select',
			description: 'Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.',
			options: [2, 4, 6, 8],
		},
		className: {
			control: 'text',
			description: 'Custom class names to apply to the grid container',
		},
	},
} satisfies Meta<typeof DsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		className: 'my-grid',
		children: (
			<>
				<DsGridItem className="card" colSpan={4}>
					<div>Element 1</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4} rowSpan={2}>
					<div>Element 2</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4} rowSpan={2}>
					<div>Element 3</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4} rowSpan={2}>
					<div>Element 4</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4} rowSpan={2} rowStart={5} colStart={2}>
					<div>Element 4</div>
				</DsGridItem>
			</>
		),
		rows: 6,
	},
};

export const NavigationLayout: Story = {
	args: {
		className: 'navigation-grid',
		children: (
			<>
				<DsGridItem className="card" colSpan={4}>
					<div>Dashboard Card 1</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4}>
					<div>Dashboard Card 2</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={4}>
					<div>Dashboard Card 3</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={6}>
					<div>Dashboard Card 4</div>
				</DsGridItem>
				<DsGridItem className="card" colSpan={6}>
					<div>Dashboard Card 5</div>
				</DsGridItem>
			</>
		),
		rows: 4,
	},
	render: function Render(args) {
		const [isCollapsed, setIsCollapsed] = useState(false);

		return (
			<div className="layout">
				<div className="header">
					<div className="logo">
						<DsButton className="toggle" design="v1.2" onClick={() => setIsCollapsed(!isCollapsed)}>
							Toggle
						</DsButton>
					</div>
					<div className="title"></div>
				</div>
				<div className="main">
					<div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
						<div className="sidebar-content"></div>
					</div>
					<main className="content-wrapper">
						<DsGrid {...args} />
					</main>
				</div>
			</div>
		);
	},
};
