import type { Meta, StoryObj } from '@storybook/react';
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
	render: () => (
		<div className={styles.storyContainer}>
			<DsVerticalTabs>
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
};

export const WithDisabledItems: Story = {
	render: () => (
		<div className={styles.storyContainer}>
			<DsVerticalTabs>
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
};

export const LongLabels: Story = {
	render: () => {
		return (
			<div className={styles.storyContainerShort}>
				<DsVerticalTabs>
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
};

export const HighCounts: Story = {
	render: () => {
		return (
			<div className={styles.storyContainerShort}>
				<DsVerticalTabs>
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
};
