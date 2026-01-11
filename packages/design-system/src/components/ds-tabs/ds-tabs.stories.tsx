import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { DsTabs, type DsTabsDropdownItem } from './index';
import styles from './ds-tabs.stories.module.scss';

const meta: Meta<typeof DsTabs> = {
	title: 'Design System/Tabs',
	component: DsTabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Tab orientation',
		},
		size: {
			control: 'radio',
			options: ['medium', 'small'],
			description: 'Tab size',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTabs>;

/**
 * Default horizontal tabs with medium size
 */
export const Default: Story = {
	args: {
		orientation: 'horizontal',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('overview');

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'overview')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="overview" label="Overview" icon="dashboard" />
						<DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} />
						<DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} />
						<DsTabs.Tab value="settings" label="Settings" icon="settings" />
					</DsTabs.List>

					<DsTabs.Content value="overview">
						<div className={styles.content}>
							<h3>Overview</h3>
							<p>View your dashboard overview and key metrics.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics</h3>
							<p>Detailed analytics and performance data (12 new insights).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="reports">
						<div className={styles.content}>
							<h3>Reports</h3>
							<p>Access and manage your reports (5 pending).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>Configure your application settings.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check initial state
		await expect(canvas.getByRole('tab', { name: /Overview/i, selected: true })).toBeInTheDocument();
		await expect(canvas.getByText(/View your dashboard overview/i)).toBeInTheDocument();

		// Click on Analytics tab
		await userEvent.click(canvas.getByRole('tab', { name: /Analytics/i }));
		await expect(canvas.getByRole('tab', { name: /Analytics/i, selected: true })).toBeInTheDocument();
		await expect(canvas.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument();
	},
};

/**
 * Horizontal tabs with small size - includes a tab with dropdown menu
 */
export const HorizontalSmall: Story = {
	args: {
		size: 'small',
		orientation: 'horizontal',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('dashboard');
		const [selectedAction, setSelectedAction] = useState<string>('');

		const viewDropdownItems: DsTabsDropdownItem[] = [
			{ value: 'list', label: 'List View', icon: 'list' },
			{ value: 'grid', label: 'Grid View', icon: 'grid_view' },
			{ value: 'compact', label: 'Compact View', icon: 'view_compact' },
		];

		const actionsDropdownItems: DsTabsDropdownItem[] = [
			{ value: 'export', label: 'Export Data', icon: 'download' },
			{ value: 'import', label: 'Import Data', icon: 'upload' },
			{ value: 'share', label: 'Share', icon: 'share' },
			{ value: 'delete', label: 'Delete', icon: 'delete', disabled: true },
		];

		const settingsDropdownItems: DsTabsDropdownItem[] = [
			{ value: 'general', label: 'General Settings', icon: 'settings' },
			{ value: 'privacy', label: 'Privacy', icon: 'lock' },
			{ value: 'notifications', label: 'Notifications', icon: 'notifications' },
			{ value: 'advanced', label: 'Advanced', icon: 'tune' },
		];

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="dashboard" label="Dashboard" icon="dashboard" />
						<DsTabs.Tab
							value="analytics"
							label="Analytics"
							icon="bar_chart"
							badge={12}
							dropdownItems={viewDropdownItems}
							onDropdownSelect={(value: string) => {
								console.log('View changed to:', value);
								setSelectedAction(`Analytics: ${value}`);
							}}
						/>
						<DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} />
						<DsTabs.Tab
							value="actions"
							label="Actions"
							icon="play_arrow"
							dropdownItems={actionsDropdownItems}
							onDropdownSelect={(value: string) => {
								console.log('Action selected:', value);
								setSelectedAction(`Action: ${value}`);
							}}
						/>
						<DsTabs.Tab
							value="settings"
							label="Settings"
							icon="settings"
							dropdownItems={settingsDropdownItems}
							onDropdownSelect={(value: string) => {
								console.log('Settings section:', value);
								setSelectedAction(`Settings: ${value}`);
							}}
						/>
					</DsTabs.List>

					<DsTabs.Content value="dashboard">
						<div className={styles.content}>
							<h3>Dashboard</h3>
							<p>Welcome to your dashboard overview.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics</h3>
							<p>This tab has a dropdown menu to switch between different view modes.</p>
							{selectedAction && (
								<p>
									<strong>Last action:</strong> {selectedAction}
								</p>
							)}
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="reports">
						<div className={styles.content}>
							<h3>Reports</h3>
							<p>View and generate reports. 5 new reports available.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="actions">
						<div className={styles.content}>
							<h3>Actions</h3>
							<p>This tab has a dropdown menu with various actions you can perform.</p>
							{selectedAction && (
								<p>
									<strong>Last action:</strong> {selectedAction}
								</p>
							)}
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>This tab has a dropdown menu to navigate to different settings sections.</p>
							{selectedAction && (
								<p>
									<strong>Last action:</strong> {selectedAction}
								</p>
							)}
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Dashboard/i, selected: true })).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('tab', { name: /Reports/i }));
		await expect(canvas.getByRole('tab', { name: /Reports/i, selected: true })).toBeInTheDocument();
	},
};

/**
 * Vertical tabs with medium size
 */
export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('profile');

		return (
			<div className={styles.verticalContainer}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'profile')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="profile" label="Profile" icon="person" />
						<DsTabs.Tab value="security" label="Security" icon="lock" badge={3} />
						<DsTabs.Tab value="notifications" label="Notifications" icon="notifications" badge={15} />
						<DsTabs.Tab value="billing" label="Billing" icon="credit_card" />
						<DsTabs.Tab value="team" label="Team" icon="group" />
					</DsTabs.List>

					<DsTabs.Content value="profile">
						<div className={styles.content}>
							<h3>Profile Settings</h3>
							<p>Manage your profile information and preferences.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="security">
						<div className={styles.content}>
							<h3>Security</h3>
							<p>Configure security settings and two-factor authentication (3 recommendations).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="notifications">
						<div className={styles.content}>
							<h3>Notifications</h3>
							<p>Manage notification preferences and channels (15 unread).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="billing">
						<div className={styles.content}>
							<h3>Billing</h3>
							<p>View invoices and manage payment methods.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="team">
						<div className={styles.content}>
							<h3>Team Management</h3>
							<p>Invite team members and manage permissions.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Profile/i, selected: true })).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('tab', { name: /Notifications/i }));
		await expect(canvas.getByRole('tab', { name: /Notifications/i, selected: true })).toBeInTheDocument();
		await expect(canvas.getByText(/Manage notification preferences/i)).toBeInTheDocument();
	},
};

/**
 * Vertical tabs with small size
 */
export const VerticalSmall: Story = {
	args: {
		orientation: 'vertical',
		size: 'small',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('item1');

		return (
			<div className={styles.verticalContainer}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'item1')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="item1" label="Tab Item" icon="check_circle" />
						<DsTabs.Tab value="item2" label="Tab Item" icon="check_circle" />
						<DsTabs.Tab value="item3" label="Tab Item" icon="check_circle" />
						<DsTabs.Tab value="item4" label="Tab Item" icon="check_circle" />
					</DsTabs.List>

					<DsTabs.Content value="item1">
						<div className={styles.content}>Item 1 content</div>
					</DsTabs.Content>
					<DsTabs.Content value="item2">
						<div className={styles.content}>Item 2 content</div>
					</DsTabs.Content>
					<DsTabs.Content value="item3">
						<div className={styles.content}>Item 3 content</div>
					</DsTabs.Content>
					<DsTabs.Content value="item4">
						<div className={styles.content}>Item 4 content</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Tab Item/i, selected: true })).toBeInTheDocument();
		const tabs = canvas.getAllByRole('tab');
		await userEvent.click(tabs[2]);
		await expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
	},
};

/**
 * Tab with dropdown menu - shows how to add a dropdown menu to a tab (opens on hover)
 */
export const TabWithDropdown: Story = {
	args: {
		orientation: 'horizontal',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('overview');
		const [selectedFilter, setSelectedFilter] = useState('all');

		const filterOptions: DsTabsDropdownItem[] = [
			{ value: 'all', label: 'All Items', icon: 'list' },
			{ value: 'active', label: 'Active Only', icon: 'check_circle' },
			{ value: 'archived', label: 'Archived Only', icon: 'archive' },
		];

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'overview')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="overview" label="Overview" icon="dashboard" />
						<DsTabs.Tab value="analytics" label="Analytics" icon="bar_chart" />
						{/* Tab with integrated dropdown menu - the dropdown provides filtering actions */}
						<DsTabs.Tab
							value="items"
							label="Items"
							icon="inventory_2"
							dropdownItems={filterOptions}
							onDropdownSelect={(value: string) => {
								setSelectedFilter(value);
								console.log('Selected filter:', value);
							}}
						/>
						<DsTabs.Tab value="settings" label="Settings" icon="settings" />
					</DsTabs.List>

					<DsTabs.Content value="overview">
						<div className={styles.content}>
							<h3>Overview</h3>
							<p>General overview content goes here.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics</h3>
							<p>Analytics and metrics content goes here.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="items">
						<div className={styles.content}>
							<h3>Items - {filterOptions.find((opt) => opt.value === selectedFilter)?.label ?? ''}</h3>
							<p>
								Currently showing: <strong>{selectedFilter}</strong> items.
							</p>
							<p style={{ marginTop: '8px', fontSize: '14px', opacity: 0.7 }}>
								💡 The tab label stays as &quot;Items&quot;, but you can hover to access filter options
							</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>Settings and configuration options go here.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const itemsTab = await canvas.findByRole('tab', { name: /Items/i });
		await userEvent.hover(itemsTab);
		const allItemsOption = await within(document.body).findByRole('menuitem', { name: /All Items/i });
		await expect(allItemsOption).toBeInTheDocument();
		await userEvent.click(allItemsOption);
		// Selecting a dropdown option should also select the tab
		await expect(itemsTab).toHaveAttribute('aria-selected', 'false');
	},
};

/**
 * Tabs with custom content
 */
export const CustomContent: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('custom1');

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'custom1')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="custom1">
							<div className={styles.customTab}>
								<span className={styles.customIcon}>🎨</span>
								<span>Design</span>
								<span className={styles.customBadge}>New</span>
							</div>
						</DsTabs.Tab>
						<DsTabs.Tab value="custom2">
							<div className={styles.customTab}>
								<span className={styles.customIcon}>💻</span>
								<span>Development</span>
							</div>
						</DsTabs.Tab>
						<DsTabs.Tab value="custom3">
							<div className={styles.customTab}>
								<span className={styles.customIcon}>🚀</span>
								<span>Deployment</span>
								<span className={styles.customCount}>3</span>
							</div>
						</DsTabs.Tab>
					</DsTabs.List>

					<DsTabs.Content value="custom1">
						<div className={styles.content}>
							<h3>Design Phase</h3>
							<p>Create mockups and prototypes.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="custom2">
						<div className={styles.content}>
							<h3>Development Phase</h3>
							<p>Build and test features.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="custom3">
						<div className={styles.content}>
							<h3>Deployment Phase</h3>
							<p>Deploy to production environments.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Design/i, selected: true })).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('tab', { name: /Development/i }));
		await expect(canvas.getByRole('tab', { name: /Development/i, selected: true })).toBeInTheDocument();
	},
};

/**
 * Tabs with disabled state
 */
export const WithDisabled: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('active1');

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'active1')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="active1" label="Active" icon="check_circle" />
						<DsTabs.Tab value="disabled1" label="Disabled" icon="block" disabled />
						<DsTabs.Tab value="active2" label="Active" icon="check_circle" badge={5} />
						<DsTabs.Tab value="disabled2" label="Disabled" icon="block" disabled />
					</DsTabs.List>

					<DsTabs.Content value="active1">
						<div className={styles.content}>Active tab 1 content</div>
					</DsTabs.Content>
					<DsTabs.Content value="disabled1">
						<div className={styles.content}>This content should not be accessible</div>
					</DsTabs.Content>
					<DsTabs.Content value="active2">
						<div className={styles.content}>Active tab 2 content</div>
					</DsTabs.Content>
					<DsTabs.Content value="disabled2">
						<div className={styles.content}>This content should not be accessible</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const disabledTabs = canvas
			.getAllByRole('tab', { queryFallbacks: true })
			.filter((t) => t.hasAttribute('disabled'));
		await userEvent.click(disabledTabs[0]);
		await expect(canvas.getByRole('tab', { name: /Active/i, selected: true })).toBeInTheDocument();
	},
};

/**
 * Tabs without icons (text only)
 */
export const TextOnly: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('home');

		return (
			<div className={styles.container}>
				<DsTabs {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'home')}>
					<DsTabs.List>
						<DsTabs.Tab value="home" label="Home" />
						<DsTabs.Tab value="products" label="Products" badge={23} />
						<DsTabs.Tab value="services" label="Services" />
						<DsTabs.Tab value="contact" label="Contact" />
					</DsTabs.List>

					<DsTabs.Content value="home">
						<div className={styles.content}>
							<h3>Home</h3>
							<p>Welcome to the home page.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="products">
						<div className={styles.content}>
							<h3>Products</h3>
							<p>Browse our product catalog (23 items).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="services">
						<div className={styles.content}>
							<h3>Services</h3>
							<p>Learn about our services.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="contact">
						<div className={styles.content}>
							<h3>Contact Us</h3>
							<p>Get in touch with our team.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Home/i, selected: true })).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('tab', { name: /Products/i }));
		await expect(canvas.getByRole('tab', { name: /Products/i, selected: true })).toBeInTheDocument();
	},
};

/**
 * Tabs with only icons and badges
 */
export const IconsOnly: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('home');

		return (
			<div className={styles.container}>
				<DsTabs {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'home')}>
					<DsTabs.List>
						<DsTabs.Tab value="home" icon="home" tooltip="Home" />
						<DsTabs.Tab value="search" icon="search" tooltip="Search" />
						<DsTabs.Tab value="notifications" icon="notifications" badge={8} tooltip="Notifications" />
						<DsTabs.Tab value="messages" icon="mail" badge={3} tooltip="Messages" />
						<DsTabs.Tab value="profile" icon="person" tooltip="Profile" />
					</DsTabs.List>

					<DsTabs.Content value="home">
						<div className={styles.content}>Home content</div>
					</DsTabs.Content>
					<DsTabs.Content value="search">
						<div className={styles.content}>Search content</div>
					</DsTabs.Content>
					<DsTabs.Content value="notifications">
						<div className={styles.content}>8 new notifications</div>
					</DsTabs.Content>
					<DsTabs.Content value="messages">
						<div className={styles.content}>3 unread messages</div>
					</DsTabs.Content>
					<DsTabs.Content value="profile">
						<div className={styles.content}>Profile content</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const tabs = canvas.getAllByRole('tab');
		await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(tabs[2]); // Notifications
		await expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
		await expect(canvas.getByText(/8 new notifications/i)).toBeInTheDocument();
	},
};

/**
 * Tabs with tooltips on hover
 */
export const WithTooltips: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('dashboard');

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}
				>
					<DsTabs.List>
						<DsTabs.Tab
							value="dashboard"
							label="Dashboard"
							icon="dashboard"
							tooltip="View your dashboard overview"
						/>
						<DsTabs.Tab
							value="analytics"
							label="Analytics"
							icon="analytics"
							badge={12}
							tooltip="Analytics and insights"
						/>
						<DsTabs.Tab
							value="reports"
							label="Reports"
							icon="description"
							badge={5}
							tooltip="Generate and view reports"
						/>
						<DsTabs.Tab
							value="settings"
							label="Settings"
							icon="settings"
							tooltip="Configure application settings"
						/>
					</DsTabs.List>

					<DsTabs.Content value="dashboard">
						<div className={styles.content}>
							<h3>Dashboard</h3>
							<p>View your dashboard overview (hover tabs to see tooltips)</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics</h3>
							<p>12 new insights available</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="reports">
						<div className={styles.content}>
							<h3>Reports</h3>
							<p>5 reports pending review</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>Configure your application</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByRole('tab', { name: /Analytics/i }));
		// Tooltip should appear (usually in a portal)
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent(/Analytics and insights/i);
	},
};

/**
 * More than 5 tabs with overflow (demonstrating maxVisibleTabs)
 */
export const MoreThanFiveTabs: Story = {
	args: {
		maxVisibleTabs: 5,
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('tab1');

		return (
			<div className={styles.container}>
				<DsTabs {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'tab1')}>
					<DsTabs.List>
						<DsTabs.Tab value="tab1" label="Overview" icon="dashboard" badge={5} />
						<DsTabs.Tab value="tab2" label="Analytics" icon="analytics" badge={12} />
						<DsTabs.Tab value="tab3" label="Reports" icon="description" />
						<DsTabs.Tab value="tab4" label="Users" icon="group" badge={23} />
						<DsTabs.Tab value="tab5" label="Settings" icon="settings" />
						<DsTabs.Tab value="tab6" label="Notifications" icon="notifications" badge={8} />
						<DsTabs.Tab value="tab7" label="Security" icon="lock" />
						<DsTabs.Tab value="tab8" label="Billing" icon="credit_card" badge={2} />
					</DsTabs.List>

					<DsTabs.Content value="tab1">
						<div className={styles.content}>
							Overview - First 4 tabs visible, others in &quot;More&quot; dropdown
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab2">
						<div className={styles.content}>Analytics - 12 new insights</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab3">
						<div className={styles.content}>Reports - Generate and view reports</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab4">
						<div className={styles.content}>Users - 23 active users</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab5">
						<div className={styles.content}>Settings - In overflow dropdown</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab6">
						<div className={styles.content}>Notifications - 8 unread (In overflow dropdown)</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab7">
						<div className={styles.content}>Security - In overflow dropdown</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab8">
						<div className={styles.content}>Billing - 2 invoices (In overflow dropdown)</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const moreButton = await canvas.findByRole('button', { name: /More/i });
		await userEvent.click(moreButton);
		const settingsOption = await within(document.body).findByRole('menuitem', { name: /Settings/i });
		await userEvent.click(settingsOption);
		// More button should now show "Settings" as the selected tab label
		await expect(canvas.getByRole('button', { name: /Settings/i })).toHaveAttribute('aria-selected', 'true');
		await expect(canvas.getByText(/Settings - In overflow dropdown/i)).toBeInTheDocument();
	},
};

/**
 * Long tab names with text overflow and tooltips
 */
export const LongTabNames: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('tab1');

		return (
			<div className={styles.containerNarrow}>
				<DsTabs {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'tab1')}>
					<DsTabs.List>
						<DsTabs.Tab
							value="tab1"
							label="Customer Relationship Management"
							icon="people"
							tooltip="Customer Relationship Management Dashboard"
						/>
						<DsTabs.Tab
							value="tab2"
							label="Enterprise Resource Planning System"
							icon="business"
							badge={15}
							tooltip="Enterprise Resource Planning System Configuration"
						/>
						<DsTabs.Tab
							value="tab3"
							label="Business Intelligence and Analytics Platform"
							icon="analytics"
							badge={7}
							tooltip="Business Intelligence and Analytics Platform Overview"
						/>
						<DsTabs.Tab
							value="tab4"
							label="Human Resources Management Portal"
							icon="person"
							tooltip="Human Resources Management Portal Settings"
						/>
					</DsTabs.List>

					<DsTabs.Content value="tab1">
						<div className={styles.content}>
							<h3>Customer Relationship Management</h3>
							<p>
								Long tab names are truncated with ellipsis. Hover over the tab to see the full name in a
								tooltip.
							</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="tab2">
						<div className={styles.content}>
							<h3>Enterprise Resource Planning System</h3>
							<p>15 configuration items require attention</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="tab3">
						<div className={styles.content}>
							<h3>Business Intelligence and Analytics</h3>
							<p>7 new reports available</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="tab4">
						<div className={styles.content}>
							<h3>Human Resources Management</h3>
							<p>Manage your HR settings and employee data</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByRole('tab', { name: /Enterprise Resource Planning/i }));
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent(/Enterprise Resource Planning System Configuration/i);
	},
};

/**
 * Vertical tabs with long text and overflow (more than 5 tabs)
 */
export const VerticalLongTextWithOverflow: Story = {
	args: {
		orientation: 'vertical',
		size: 'medium',
		maxVisibleTabs: 5,
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('dashboard');

		return (
			<div className={styles.verticalContainer}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}
				>
					<DsTabs.List>
						<DsTabs.Tab
							value="dashboard"
							label="Dashboard Overview"
							icon="dashboard"
							tooltip="Dashboard Overview"
						/>
						<DsTabs.Tab
							value="analytics"
							label="Analytics and Reporting"
							icon="bar_chart"
							badge={12}
							tooltip="Analytics and Reporting"
						/>
						<DsTabs.Tab
							value="customer"
							label="Customer Management System"
							icon="people"
							tooltip="Customer Management System"
						/>
						<DsTabs.Tab
							value="inventory"
							label="Inventory and Stock Control"
							icon="inventory_2"
							badge={3}
							tooltip="Inventory and Stock Control"
						/>
						<DsTabs.Tab
							value="finance"
							label="Financial Reports and Budgeting"
							icon="account_balance"
							tooltip="Financial Reports and Budgeting"
						/>
						<DsTabs.Tab
							value="marketing"
							label="Marketing Campaigns"
							icon="campaign"
							badge={8}
							tooltip="Marketing Campaigns"
						/>
						<DsTabs.Tab
							value="support"
							label="Customer Support Tickets"
							icon="support_agent"
							badge={24}
							tooltip="Customer Support Tickets"
						/>
						<DsTabs.Tab
							value="settings"
							label="System Settings and Configuration"
							icon="settings"
							tooltip="System Settings and Configuration"
						/>
					</DsTabs.List>

					<DsTabs.Content value="dashboard">
						<div className={styles.content}>
							<h3>Dashboard Overview</h3>
							<p>Your main dashboard with key metrics and insights.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics and Reporting</h3>
							<p>Comprehensive analytics and detailed reports. 12 new reports available.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="customer">
						<div className={styles.content}>
							<h3>Customer Management System</h3>
							<p>Manage all your customer relationships and interactions.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="inventory">
						<div className={styles.content}>
							<h3>Inventory and Stock Control</h3>
							<p>Track inventory levels and manage stock. 3 items need attention.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="finance">
						<div className={styles.content}>
							<h3>Financial Reports and Budgeting</h3>
							<p>View financial data, reports, and manage budgets.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="marketing">
						<div className={styles.content}>
							<h3>Marketing Campaigns</h3>
							<p>Manage and monitor marketing campaigns. 8 active campaigns.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="support">
						<div className={styles.content}>
							<h3>Customer Support Tickets</h3>
							<p>Handle customer support requests and tickets. 24 open tickets.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>System Settings and Configuration</h3>
							<p>Configure system settings and preferences.</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const moreButton = await canvas.findByRole('button', { name: /More/i });
		await userEvent.click(moreButton);
		const settingsOption = await within(document.body).findByRole('menuitem', {
			name: /System Settings and Configuration/i,
		});
		await userEvent.click(settingsOption);
		await expect(canvas.getByRole('button', { name: /System Settings and Configuration/i })).toHaveAttribute(
			'aria-selected',
			'true',
		);
	},
};

/**
 * Tabs with automatic overflow dropdown (more than 5 tabs)
 */
export const WithOverflowDropdown: Story = {
	args: {
		maxVisibleTabs: 5,
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('overview');

		return (
			<div className={styles.container}>
				<DsTabs
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'overview')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="overview" label="Overview" icon="dashboard" badge={5} />
						<DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} />
						<DsTabs.Tab value="reports" label="Reports" icon="description" />
						<DsTabs.Tab value="users" label="Users" icon="group" badge={23} />
						<DsTabs.Tab value="settings" label="Settings" icon="settings" />
						<DsTabs.Tab value="notifications" label="Notifications" icon="notifications" badge={8} />
						<DsTabs.Tab value="security" label="Security" icon="lock" />
						<DsTabs.Tab value="billing" label="Billing" icon="credit_card" badge={2} />
						<DsTabs.Tab value="integrations" label="Integrations" icon="extension" />
						<DsTabs.Tab value="api" label="API" icon="code" />
					</DsTabs.List>

					<DsTabs.Content value="overview">
						<div className={styles.content}>
							<h3>Overview</h3>
							<p>First 4 tabs are visible, others are in the &quot;More&quot; dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="analytics">
						<div className={styles.content}>
							<h3>Analytics</h3>
							<p>12 new insights</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="reports">
						<div className={styles.content}>
							<h3>Reports</h3>
							<p>Generate reports</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="users">
						<div className={styles.content}>
							<h3>Users</h3>
							<p>23 active users</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>In overflow dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="notifications">
						<div className={styles.content}>
							<h3>Notifications</h3>
							<p>8 notifications - In overflow dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="security">
						<div className={styles.content}>
							<h3>Security</h3>
							<p>In overflow dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="billing">
						<div className={styles.content}>
							<h3>Billing</h3>
							<p>2 invoices - In overflow dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="integrations">
						<div className={styles.content}>
							<h3>Integrations</h3>
							<p>In overflow dropdown</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="api">
						<div className={styles.content}>
							<h3>API</h3>
							<p>In overflow dropdown</p>
						</div>
					</DsTabs.Content>
				</DsTabs>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const moreButton = await canvas.findByRole('button', { name: /More/i });
		await userEvent.click(moreButton);
		const apiOption = await within(document.body).findByRole('menuitem', { name: /API/i });
		await userEvent.click(apiOption);
		await expect(canvas.getByRole('button', { name: /API/i })).toHaveAttribute('aria-selected', 'true');
	},
};
