import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { DsTabs } from './ds-tabs';
import type { DsTabsMenuActionItem } from './ds-tabs.types';
import styles from './ds-tabs.stories.module.scss';

const meta: Meta<typeof DsTabs.Root> = {
	title: 'Design System/Tabs',
	component: DsTabs.Root,
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
type Story = StoryObj<typeof DsTabs.Root>;

export const Default: Story = {
	args: {
		orientation: 'horizontal',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('overview');

		return (
			<div className={styles.container}>
				<DsTabs.Root
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Overview/i })).toHaveAttribute('aria-selected', 'true');
		await expect(canvas.getByText(/View your dashboard overview/i)).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('tab', { name: /Analytics/i }));
		await expect(canvas.getByRole('tab', { name: /Analytics/i })).toHaveAttribute('aria-selected', 'true');
		await expect(canvas.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument();
	},
};

export const HorizontalSmall: Story = {
	args: {
		size: 'small',
		orientation: 'horizontal',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('dashboard');

		return (
			<div className={styles.container}>
				<DsTabs.Root
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="dashboard" label="Dashboard" icon="dashboard" />
						<DsTabs.Tab value="analytics" label="Analytics" icon="bar_chart" badge={12} />
						<DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} />
						<DsTabs.Tab value="settings" label="Settings" icon="settings" />
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
							<p>View analytics and performance data. 12 new insights available.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="reports">
						<div className={styles.content}>
							<h3>Reports</h3>
							<p>View and generate reports. 5 new reports available.</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="settings">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>Configure your application settings.</p>
						</div>
					</DsTabs.Content>
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Dashboard/i })).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(canvas.getByRole('tab', { name: /Reports/i }));
		await expect(canvas.getByRole('tab', { name: /Reports/i })).toHaveAttribute('aria-selected', 'true');
	},
};

export const WithMenuActions: Story = {
	args: {
		orientation: 'horizontal',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('tab1');

		const menuActions: DsTabsMenuActionItem[] = [
			{ value: 'edit', label: 'Edit' },
			{ value: 'duplicate', label: 'Duplicate' },
			{ value: 'share', label: 'Share' },
			{ value: 'delete', label: 'Delete' },
		];

		const handleMenuAction = (action: string) => {
			console.log('Menu action selected:', action);
		};

		return (
			<div className={styles.container}>
				<DsTabs.Root
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'tab1')}
				>
					<DsTabs.List>
						<DsTabs.Tab
							value="tab1"
							label="Projects"
							icon="folder"
							badge={5}
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="tab2"
							label="Documents"
							icon="description"
							badge={12}
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="tab3"
							label="Settings"
							icon="settings"
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
					</DsTabs.List>

					<DsTabs.Content value="tab1">
						<div className={styles.content}>
							<h3>Projects</h3>
							<p>Click the dropdown icon on tabs to see menu actions</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab2">
						<div className={styles.content}>
							<h3>Documents</h3>
							<p>12 documents available</p>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="tab3">
						<div className={styles.content}>
							<h3>Settings</h3>
							<p>Configure your preferences</p>
						</div>
					</DsTabs.Content>
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const tabs = canvas.getAllByRole('tab');
		await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		const firstTab: HTMLElement | undefined = tabs[0];
		if (firstTab) {
			const menuButton = firstTab.querySelector('[role="button"][aria-label="Open menu"]');
			if (menuButton) {
				await userEvent.click(menuButton);
				const editAction = await within(document.body).findByRole('menuitem', { name: /Edit/i });
				await expect(editAction).toBeInTheDocument();
			}
		}
	},
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('profile');

		return (
			<div className={styles.verticalContainer}>
				<DsTabs.Root
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Profile/i })).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(canvas.getByRole('tab', { name: /Notifications/i }));
		await expect(canvas.getByRole('tab', { name: /Notifications/i })).toHaveAttribute(
			'aria-selected',
			'true',
		);
		await expect(canvas.getByText(/Manage notification preferences/i)).toBeInTheDocument();
	},
};

export const VerticalSmall: Story = {
	args: {
		orientation: 'vertical',
		size: 'small',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('general');

		return (
			<div className={styles.verticalContainer}>
				<DsTabs.Root
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'general')}
				>
					<DsTabs.List>
						<DsTabs.Tab value="general" label="General" icon="settings" />
						<DsTabs.Tab value="account" label="Account" icon="person" />
						<DsTabs.Tab value="privacy" label="Privacy" icon="lock" badge={2} />
						<DsTabs.Tab value="appearance" label="Appearance" icon="palette" />
						<DsTabs.Tab value="advanced" label="Advanced" icon="tune" />
					</DsTabs.List>

					<DsTabs.Content value="general">
						<div className={styles.content}>
							<h3>General Settings</h3>
							<p>Configure general application settings and preferences.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="account">
						<div className={styles.content}>
							<h3>Account</h3>
							<p>Manage your account details and information.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="privacy">
						<div className={styles.content}>
							<h3>Privacy</h3>
							<p>Control your privacy settings and data sharing (2 recommendations).</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="appearance">
						<div className={styles.content}>
							<h3>Appearance</h3>
							<p>Customize the look and feel of the application.</p>
						</div>
					</DsTabs.Content>

					<DsTabs.Content value="advanced">
						<div className={styles.content}>
							<h3>Advanced</h3>
							<p>Advanced configuration options for power users.</p>
						</div>
					</DsTabs.Content>
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /General/i })).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(canvas.getByRole('tab', { name: /Privacy/i }));
		await expect(canvas.getByRole('tab', { name: /Privacy/i })).toHaveAttribute('aria-selected', 'true');
		await expect(canvas.getByText(/Control your privacy settings/i)).toBeInTheDocument();
	},
};

export const VerticalWithMenuActions: Story = {
	args: {
		orientation: 'vertical',
		size: 'medium',
	},
	render: function Render(args) {
		const [selected, setSelected] = useState('profile');

		const menuActions: DsTabsMenuActionItem[] = [
			{ value: 'edit', label: 'Edit' },
			{ value: 'duplicate', label: 'Duplicate' },
			{ value: 'archive', label: 'Archive' },
			{ value: 'delete', label: 'Delete' },
		];

		const handleMenuAction = (action: string) => {
			console.log('Menu action selected:', action);
		};

		return (
			<div className={styles.verticalContainer}>
				<DsTabs.Root
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'profile')}
				>
					<DsTabs.List>
						<DsTabs.Tab
							value="profile"
							label="Profile"
							icon="person"
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="security"
							label="Security"
							icon="lock"
							badge={3}
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="notifications"
							label="Notifications"
							icon="notifications"
							badge={15}
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="billing"
							label="Billing"
							icon="credit_card"
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
						<DsTabs.Tab
							value="team"
							label="Team"
							icon="group"
							menuActionItems={menuActions}
							onMenuActionSelect={handleMenuAction}
						/>
					</DsTabs.List>

					<DsTabs.Content value="profile">
						<div className={styles.content}>
							<h3>Profile Settings</h3>
							<p>
								Manage your profile information and preferences. Click the dropdown icon on tabs to see menu
								actions.
							</p>
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Profile/i })).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(canvas.getByRole('tab', { name: /Security/i }));
		await expect(canvas.getByRole('tab', { name: /Security/i })).toHaveAttribute('aria-selected', 'true');
		const securityTab = canvas.getByRole('tab', { name: /Security/i });
		const menuButton = securityTab.querySelector('[role="button"][aria-label="Open menu"]');
		if (menuButton) {
			await userEvent.click(menuButton);
			const editAction = await within(document.body).findByRole('menuitem', { name: /Edit/i });
			await expect(editAction).toBeInTheDocument();
		}
	},
};

export const WithDisabled: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('active1');

		return (
			<div className={styles.container}>
				<DsTabs.Root
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const allTabs = canvas.getAllByRole('tab', { queryFallbacks: true });
		const disabledTabs = allTabs.filter((t) => t.hasAttribute('disabled'));
		const firstActiveTab = allTabs[0];
		await expect(firstActiveTab).toHaveAttribute('aria-selected', 'true');
		if (disabledTabs[0]) {
			await userEvent.click(disabledTabs[0]);
		}
		await expect(firstActiveTab).toHaveAttribute('aria-selected', 'true');
	},
};

export const TextOnly: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('home');

		return (
			<div className={styles.container}>
				<DsTabs.Root
					{...args}
					value={selected}
					onValueChange={(val: string | null) => setSelected(val ?? 'home')}
				>
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('tab', { name: /Home/i })).toHaveAttribute('aria-selected', 'true');
		await userEvent.click(canvas.getByRole('tab', { name: /Products/i }));
		await expect(canvas.getByRole('tab', { name: /Products/i })).toHaveAttribute('aria-selected', 'true');
	},
};

export const WithTooltips: Story = {
	render: function Render(args) {
		const [selected, setSelected] = useState('dashboard');

		return (
			<div className={styles.container}>
				<DsTabs.Root
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
				</DsTabs.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByRole('tab', { name: /Analytics/i }));
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent(/Analytics and insights/i);
	},
};
