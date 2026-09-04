import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsSmartTabs from '../ds-smart-tabs';
import styles from '../ds-smart-tabs.module.scss';

// The label sits in a dedicated span; the enclosing <button> carries the
// active-state class, so resolve it from the label to make assertions.
const tabButton = (label: string) => {
	const labelEl = page.getByText(label, { exact: true }).element();
	const button = labelEl.closest('button');
	return page.elementLocator(button as HTMLElement);
};

function Controlled({
	onTabClick,
	initialTab = 'all',
}: {
	onTabClick?: (value: string) => void;
	initialTab?: string;
}) {
	const [activeTab, setActiveTab] = useState(initialTab);

	return (
		<DsSmartTabs
			activeTab={activeTab}
			onTabClick={(value) => {
				onTabClick?.(value);
				setActiveTab(value);
			}}
		>
			<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
			<DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
			<DsSmartTabs.Tab label="Deprecated" value="deprecated" icon="notifications" color="red" content="202" />
			<DsSmartTabs.Tab
				label="Inactive"
				value="inactive"
				icon="stop_circle"
				color="gray"
				content="347"
				disabled
			/>
		</DsSmartTabs>
	);
}

describe('DsSmartTabs', () => {
	it('renders every tab label and its content count', async () => {
		await page.render(<Controlled />);

		for (const label of ['All', 'Active', 'Deprecated', 'Inactive']) {
			await expect.element(page.getByText(label, { exact: true })).toBeVisible();
		}

		for (const count of ['747', '198', '202', '347']) {
			await expect.element(page.getByText(count, { exact: true })).toBeVisible();
		}
	});

	it('activates a tab and reports its value when clicked', async () => {
		const onTabClick = vi.fn();
		await page.render(<Controlled onTabClick={onTabClick} />);

		await expect.element(tabButton('All')).toHaveClass(styles.active);

		await tabButton('Active').click();

		expect(onTabClick).toHaveBeenCalledWith('active');
		await expect.element(tabButton('Active')).toHaveClass(styles.active);
		await expect.element(tabButton('All')).not.toHaveClass(styles.active);
	});

	it('switches the active tab to Deprecated on click', async () => {
		const onTabClick = vi.fn();
		await page.render(<Controlled onTabClick={onTabClick} />);

		await tabButton('Deprecated').click();

		expect(onTabClick).toHaveBeenCalledWith('deprecated');
		await expect.element(tabButton('Deprecated')).toHaveClass(styles.active);
	});

	it('does not activate the disabled Inactive tab', async () => {
		const onTabClick = vi.fn();
		await page.render(<Controlled onTabClick={onTabClick} initialTab="deprecated" />);

		const inactive = tabButton('Inactive');
		await expect.element(inactive).toBeDisabled();

		await inactive.click({ force: true });

		expect(onTabClick).not.toHaveBeenCalledWith('inactive');
		await expect.element(tabButton('Deprecated')).toHaveClass(styles.active);
		await expect.element(inactive).not.toHaveClass(styles.active);
	});

	it('returns to the All tab when it is clicked again', async () => {
		const onTabClick = vi.fn();
		await page.render(<Controlled onTabClick={onTabClick} initialTab="active" />);

		await tabButton('All').click();

		expect(onTabClick).toHaveBeenCalledWith('all');
		await expect.element(tabButton('All')).toHaveClass(styles.active);
		await expect.element(tabButton('Active')).not.toHaveClass(styles.active);
	});
});
