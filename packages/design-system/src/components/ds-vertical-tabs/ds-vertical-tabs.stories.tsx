import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import DsVerticalTabs from './ds-vertical-tabs';
import { DsTypography } from '../ds-typography';
import styles from './ds-vertical-tabs.stories.module.scss';

// Example tab item structure
interface TabItem {
	id: string;
	label: string;
	count?: number;
	disabled?: boolean;
}

const meta: Meta<typeof DsVerticalTabs> = {
	title: 'Design System/Vertical Tabs',
	component: DsVerticalTabs,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
DsVerticalTabs is a compound component for creating flexible vertical tab navigation, providing full accessibility support.

## Usage Pattern

\`\`\`tsx
<DsVerticalTabs value={selected} onValueChange={handleChange}>
  <DsVerticalTabs.List>
    <DsVerticalTabs.Tab value="tab1">
      <DsTypography variant="body-sm-md">Tab 1</DsTypography>
      {/* Optional: badges, icons, etc. */}
    </DsVerticalTabs.Tab>
    <DsVerticalTabs.Tab value="tab2">Tab 2</DsVerticalTabs.Tab>
  </DsVerticalTabs.List>
  <DsVerticalTabs.Content value="tab1">Content 1</DsVerticalTabs.Content>
  <DsVerticalTabs.Content value="tab2">Content 2</DsVerticalTabs.Content>
</DsVerticalTabs>
\`\`\`
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'text',
			description: 'Currently selected tab value (controlled)',
		},
		onValueChange: {
			action: 'valueChange',
			description: 'Callback when tab selection changes',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsVerticalTabs>;

const sampleItems: TabItem[] = [
	{ id: 'status', label: 'Status', count: 2 },
	{ id: 'running', label: 'Running/Completed' },
	{ id: 'category', label: 'Category' },
	{ id: 'version', label: 'Version' },
	{ id: 'lastEdited', label: 'Last edited', count: 5 },
	{ id: 'lastRun', label: 'Last run' },
	{ id: 'nextRun', label: 'Next run' },
];

const sampleItemsWithDisabled: TabItem[] = [
	{ id: 'status', label: 'Status', count: 2, disabled: true },
	{ id: 'running', label: 'Running/Completed' },
	{ id: 'category', label: 'Category' },
	{ id: 'version', label: 'Version' },
	{ id: 'lastEdited', label: 'Last edited', count: 5 },
];

const itemsWithHighCounts: TabItem[] = [
	{ id: 'status', label: 'Status', count: 999 },
	{ id: 'category', label: 'Category', count: 1000 },
	{ id: 'version', label: 'Version', count: 12345 },
];

const itemsWithLongLabels: TabItem[] = [
	{ id: '1', label: 'Very Long Navigation Item Label That Might Overflow', count: 99 },
	{ id: '2', label: 'Another Really Long Label For Testing Purposes' },
	{ id: '3', label: 'Short', count: 1 },
];

// Helper component for consistent tab rendering with count badge
const TabLabel = ({ item }: { item: TabItem }) => (
	<>
		<DsTypography variant="body-sm-md" className={styles.tabItemLabel}>
			{item.label}
		</DsTypography>
		{!!item.count && (
			<div className={styles.tabItemCount}>
				<span className={styles.tabItemDot} />
				<DsTypography variant="body-sm-reg" className={styles.tabItemCountText}>
					{item.count}
				</DsTypography>
			</div>
		)}
	</>
);

export const Default: Story = {
	args: {
		onValueChange: fn(),
	},
	render: (args) => (
		<div className={styles.storyContainer}>
			<DsVerticalTabs onValueChange={args.onValueChange}>
				<DsVerticalTabs.List>
					{sampleItems.map((item) => (
						<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
							<TabLabel item={item} />
						</DsVerticalTabs.Tab>
					))}
				</DsVerticalTabs.List>
				{sampleItems.map((item) => (
					<DsVerticalTabs.Content key={item.id} value={item.id}>
						Selected tab content: {item.id}
					</DsVerticalTabs.Content>
				))}
			</DsVerticalTabs>
		</div>
	),
	play: async ({ args, canvas }) => {
		const firstTab = canvas.getByRole('tab', { name: /status/i });
		await userEvent.click(firstTab);
		await expect(firstTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: status/i)).toBeVisible();

		const categoryTab = canvas.getByRole('tab', { name: /^category$/i });
		await userEvent.click(categoryTab);

		await expect(args.onValueChange).toHaveBeenCalledWith('category');
		await expect(categoryTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: category/i)).toBeVisible();

		const versionTab = canvas.getByRole('tab', { name: /^version$/i });
		await userEvent.click(versionTab);

		await expect(versionTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: version/i)).toBeVisible();
		await expect(args.onValueChange).toHaveBeenCalledWith('version');
	},
};

export const WithDisabledItems: Story = {
	args: {
		onValueChange: fn(),
	},
	render: (args) => (
		<div className={styles.storyContainer}>
			<DsVerticalTabs onValueChange={args.onValueChange}>
				<DsVerticalTabs.List>
					{sampleItemsWithDisabled.map((item) => (
						<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
							<TabLabel item={item} />
						</DsVerticalTabs.Tab>
					))}
				</DsVerticalTabs.List>
				{sampleItemsWithDisabled.map((item) => (
					<DsVerticalTabs.Content key={item.id} value={item.id}>
						Selected tab content: {item.id}
					</DsVerticalTabs.Content>
				))}
			</DsVerticalTabs>
		</div>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const disabledTab = canvas.getByRole('tab', { name: /status/i });
		await expect(disabledTab).toBeDisabled();

		await userEvent.click(disabledTab);
		await expect(args.onValueChange).not.toHaveBeenCalled();

		const runningTab = canvas.getByRole('tab', { name: /running\/completed/i });
		await userEvent.click(runningTab);

		await expect(args.onValueChange).toHaveBeenCalledWith('running');
		await expect(runningTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: running/i)).toBeVisible();
		await expect(disabledTab).toBeDisabled();
	},
};

export const LongLabels: Story = {
	args: {
		onValueChange: fn(),
	},
	render: (args) => {
		return (
			<div className={styles.storyContainerShort}>
				<DsVerticalTabs onValueChange={args.onValueChange}>
					<DsVerticalTabs.List>
						{itemsWithLongLabels.map((item) => (
							<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
								<TabLabel item={item} />
							</DsVerticalTabs.Tab>
						))}
					</DsVerticalTabs.List>
					{itemsWithLongLabels.map((item) => (
						<DsVerticalTabs.Content key={item.id} value={item.id}>
							Selected tab content: {item.id}
						</DsVerticalTabs.Content>
					))}
				</DsVerticalTabs>
			</div>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const longLabel1 = canvas.getByRole('tab', {
			name: /very long navigation item label that might overflow/i,
		});
		const longLabel2 = canvas.getByRole('tab', { name: /another really long label for testing purposes/i });
		const shortLabel = canvas.getByRole('tab', { name: /^short/i });

		await expect(longLabel1).toBeVisible();
		await expect(longLabel2).toBeVisible();
		await expect(shortLabel).toBeVisible();

		await userEvent.click(longLabel2);

		await expect(longLabel2).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: 2/i)).toBeVisible();
		await expect(args.onValueChange).toHaveBeenCalledWith('2');

		await userEvent.click(shortLabel);

		await expect(shortLabel).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: 3/i)).toBeVisible();
		await expect(args.onValueChange).toHaveBeenCalledWith('3');
	},
};

export const HighCounts: Story = {
	args: {
		onValueChange: fn(),
	},
	render: (args) => {
		return (
			<div className={styles.storyContainerShort}>
				<DsVerticalTabs onValueChange={args.onValueChange}>
					<DsVerticalTabs.List>
						{itemsWithHighCounts.map((item) => (
							<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
								<TabLabel item={item} />
							</DsVerticalTabs.Tab>
						))}
					</DsVerticalTabs.List>
					{itemsWithHighCounts.map((item) => (
						<DsVerticalTabs.Content key={item.id} value={item.id}>
							Selected tab content: {item.id}
						</DsVerticalTabs.Content>
					))}
				</DsVerticalTabs>
			</div>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('999')).toBeVisible();
		await expect(canvas.getByText('1000')).toBeVisible();
		await expect(canvas.getByText('12345')).toBeVisible();

		const statusTab = canvas.getByRole('tab', { name: /status/i });
		const categoryTab = canvas.getByRole('tab', { name: /category/i });
		const versionTab = canvas.getByRole('tab', { name: /version/i });

		await expect(statusTab).toBeVisible();
		await expect(categoryTab).toBeVisible();
		await expect(versionTab).toBeVisible();

		await userEvent.click(categoryTab);

		await expect(categoryTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: category/i)).toBeVisible();
		await expect(args.onValueChange).toHaveBeenCalledWith('category');

		await userEvent.click(versionTab);

		await expect(versionTab).toHaveAttribute('data-selected');
		await expect(canvas.getByText(/selected tab content: version/i)).toBeVisible();
		await expect(args.onValueChange).toHaveBeenCalledWith('version');

		await expect(canvas.getByText('999')).toBeVisible();
		await expect(canvas.getByText('1000')).toBeVisible();
		await expect(canvas.getByText('12345')).toBeVisible();
	},
};
