import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import DsSmartTabs from './ds-smart-tabs';

const meta: Meta<typeof DsSmartTabs> = {
	title: 'Design System/SmartTabs',
	component: DsSmartTabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		activeTab: {
			control: 'text',
			description: 'Currently active tab value',
		},
		onTabClick: {
			action: 'tab clicked',
			description: 'Callback function when a tab is clicked',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSmartTabs>;

export const Default: Story = {
	render: function Render() {
		const [activeTab, setActiveTab] = useState('all');

		return (
			<div>
				<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
					<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
					<DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
					<DsSmartTabs.Tab
						label="Deprecated"
						value="deprecated"
						icon="notifications"
						color="red"
						content="202"
					/>
					<DsSmartTabs.Tab
						label="Inactive"
						value="inactive"
						icon="stop_circle"
						color="gray"
						content="347"
						disabled
					/>
				</DsSmartTabs>
				<div
					role="status"
					aria-label="Active tab"
					style={{ marginTop: '20px', padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}
				>
					<p>
						Active tab: <strong>{activeTab}</strong>
					</p>
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test that all tabs are rendered
		await expect(canvas.getByText('All')).toBeInTheDocument();
		await expect(canvas.getByText('Active')).toBeInTheDocument();
		await expect(canvas.getByText('Deprecated')).toBeInTheDocument();
		await expect(canvas.getByText('Inactive')).toBeInTheDocument();

		// Test that counts are displayed
		await expect(canvas.getByText('747')).toBeInTheDocument();
		await expect(canvas.getByText('198')).toBeInTheDocument();
		await expect(canvas.getByText('202')).toBeInTheDocument();
		await expect(canvas.getByText('347')).toBeInTheDocument();

		// Test initial state - "all" should be active
		const activeTabIndicator = canvas.getByRole('status', { name: /active tab/i });
		// Verify the semantic structure
		await expect(activeTabIndicator).toHaveTextContent('Active tab: all');

		// Test clicking on "Active" tab
		const activeTab = canvas.getByText('Active');
		await userEvent.click(activeTab);
		await expect(activeTabIndicator).toHaveTextContent('Active tab: active');

		// Test clicking on "Deprecated" tab
		const deprecatedTab = canvas.getByText('Deprecated');
		await userEvent.click(deprecatedTab);
		await expect(activeTabIndicator).toHaveTextContent('Active tab: deprecated');

		// Test that disabled "Inactive" tab doesn't change state when clicked
		const inactiveTab = canvas.getByText('Inactive');
		await userEvent.click(inactiveTab);
		await expect(activeTabIndicator).toHaveTextContent('Active tab: deprecated');

		// Reset to initial state
		const allTab = canvas.getByText('All');
		await userEvent.click(allTab);
		await expect(activeTabIndicator).toHaveTextContent('Active tab: all');
	},
};
