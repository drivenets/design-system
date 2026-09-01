import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsSmartTabs from './ds-smart-tabs';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-smart-tabs.stories.module.scss';

const meta: Meta<typeof DsSmartTabs> = {
	title: 'Components/SmartTabs',
	component: DsSmartTabs,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		activeTab: {
			control: 'text',
			description: 'Currently active tab value',
		},
		onTabClick: {
			action: 'tab clicked',
			description: 'Callback function when a tab is clicked',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsSmartTabs>;

/** Minimal filter bar — the simplest SmartTabs usage with a couple of color-coded categories. */
export const Basic: Story = {
	render: function Render() {
		const [activeTab, setActiveTab] = useState('all');

		return (
			<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
				<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
				<DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
			</DsSmartTabs>
		);
	},
	parameters: { docs: { source: { type: 'code' } } },
};

/** Full filter bar with status colors, counts, and a disabled category. */
export const Default: Story = {
	render: function Render() {
		const [activeTab, setActiveTab] = useState('all');

		return (
			<DsStack direction="column">
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
				<DsStack direction="row" gap={4} className={styles.statusReadout}>
					<DsTypography variant="body-sm-md">Active tab:</DsTypography>
					<DsTypography variant="body-sm-md" className={styles.statusValue}>
						{activeTab}
					</DsTypography>
				</DsStack>
			</DsStack>
		);
	},
	parameters: { docs: { source: { type: 'code' } } },
};
