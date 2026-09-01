import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsVerticalTabs from '../ds-vertical-tabs';
import { DsTypography } from '../../ds-typography';

interface TabItem {
	id: string;
	label: string;
	count?: number;
	disabled?: boolean;
}

const TabLabel = ({ item }: { item: TabItem }) => (
	<>
		<DsTypography variant="body-sm-md">{item.label}</DsTypography>
		{!!item.count && <DsTypography variant="body-sm-reg">{item.count}</DsTypography>}
	</>
);

const renderTabs = (items: TabItem[], onValueChange?: (value: string | null) => void) => (
	<DsVerticalTabs onValueChange={onValueChange}>
		<DsVerticalTabs.List>
			{items.map((item) => (
				<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
					<TabLabel item={item} />
				</DsVerticalTabs.Tab>
			))}
		</DsVerticalTabs.List>
		{items.map((item) => (
			<DsVerticalTabs.Content key={item.id} value={item.id}>
				Selected tab content: {item.id}
			</DsVerticalTabs.Content>
		))}
	</DsVerticalTabs>
);

const sampleItems: TabItem[] = [
	{ id: 'status', label: 'Status', count: 2 },
	{ id: 'running', label: 'Running/Completed' },
	{ id: 'category', label: 'Category' },
	{ id: 'version', label: 'Version' },
];

const itemsWithDisabled: TabItem[] = [
	{ id: 'status', label: 'Status', count: 2, disabled: true },
	{ id: 'running', label: 'Running/Completed' },
	{ id: 'category', label: 'Category' },
];

const itemsWithLongLabels: TabItem[] = [
	{ id: '1', label: 'Very Long Navigation Item Label That Might Overflow', count: 99 },
	{ id: '2', label: 'Another Really Long Label For Testing Purposes' },
	{ id: '3', label: 'Short', count: 1 },
];

const itemsWithHighCounts: TabItem[] = [
	{ id: 'status', label: 'Status', count: 999 },
	{ id: 'category', label: 'Category', count: 1000 },
	{ id: 'version', label: 'Version', count: 12345 },
];

describe('DsVerticalTabs', () => {
	it('selects a tab, calls onValueChange, and shows its content panel', async () => {
		const onValueChange = vi.fn();
		await page.render(renderTabs(sampleItems, onValueChange));

		const categoryTab = page.getByRole('tab', { name: /^category$/i });
		await categoryTab.click();

		await expect.element(categoryTab).toHaveAttribute('data-selected');
		expect(onValueChange).toHaveBeenCalledWith('category');
		await expect.element(page.getByText(/selected tab content: category/i)).toBeVisible();

		const versionTab = page.getByRole('tab', { name: /^version$/i });
		await versionTab.click();

		await expect.element(versionTab).toHaveAttribute('data-selected');
		await expect.element(categoryTab).not.toHaveAttribute('data-selected');
		expect(onValueChange).toHaveBeenCalledWith('version');
		await expect.element(page.getByText(/selected tab content: version/i)).toBeVisible();
	});

	it('keeps a disabled tab inert and selects an enabled sibling instead', async () => {
		const onValueChange = vi.fn();
		await page.render(renderTabs(itemsWithDisabled, onValueChange));

		const disabledTab = page.getByRole('tab', { name: /status/i });
		await expect.element(disabledTab).toBeDisabled();

		await disabledTab.click({ force: true });
		expect(onValueChange).not.toHaveBeenCalled();

		const runningTab = page.getByRole('tab', { name: /running\/completed/i });
		await runningTab.click();

		expect(onValueChange).toHaveBeenCalledWith('running');
		await expect.element(runningTab).toHaveAttribute('data-selected');
		await expect.element(page.getByText(/selected tab content: running/i)).toBeVisible();
		await expect.element(disabledTab).toBeDisabled();
	});

	it('renders long labels and keeps them selectable', async () => {
		const onValueChange = vi.fn();
		await page.render(renderTabs(itemsWithLongLabels, onValueChange));

		const longLabel1 = page.getByRole('tab', {
			name: /very long navigation item label that might overflow/i,
		});
		const longLabel2 = page.getByRole('tab', { name: /another really long label for testing purposes/i });
		const shortLabel = page.getByRole('tab', { name: /^short/i });

		await expect.element(longLabel1).toBeVisible();
		await expect.element(longLabel2).toBeVisible();
		await expect.element(shortLabel).toBeVisible();

		await longLabel2.click();

		await expect.element(longLabel2).toHaveAttribute('data-selected');
		await expect.element(page.getByText(/selected tab content: 2/i)).toBeVisible();
		expect(onValueChange).toHaveBeenCalledWith('2');
	});

	it('renders high count badges and keeps tabs selectable', async () => {
		const onValueChange = vi.fn();
		await page.render(renderTabs(itemsWithHighCounts, onValueChange));

		await expect.element(page.getByText('999')).toBeVisible();
		await expect.element(page.getByText('1000')).toBeVisible();
		await expect.element(page.getByText('12345')).toBeVisible();

		const categoryTab = page.getByRole('tab', { name: /category/i });
		await categoryTab.click();

		await expect.element(categoryTab).toHaveAttribute('data-selected');
		await expect.element(page.getByText(/selected tab content: category/i)).toBeVisible();
		expect(onValueChange).toHaveBeenCalledWith('category');
	});
});
