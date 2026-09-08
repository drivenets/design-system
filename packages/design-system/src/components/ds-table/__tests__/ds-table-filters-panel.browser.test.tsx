import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsModal } from '../../ds-modal';
import { DsVerticalTabs } from '../../ds-vertical-tabs';
import { DsTypography } from '../../ds-typography';
import { DsTagFilter } from '../../ds-tag-filter';
import { useTableFilters } from '../filters';
import { type Workflow, workflowFilters } from '../stories/filters-panel/workflow-filters.config';

/**
 * The story `render` is 100+ lines of modal + vertical-tabs layout. These tests
 * reproduce a minimal-but-faithful harness so the behavioral assertions ported
 * from `filters-panel.stories.tsx` (`FiltersPanel.play` / `Controlled.play`)
 * live in a dedicated browser test instead of a Storybook `play` function.
 *
 * The columns and 12-row dataset are NOT exported from the story module, so an
 * equivalent dataset is replicated here (statuses span active/running/etc.) to
 * keep the row-count assertions meaningful.
 */

const sampleUsers = [
	{ name: 'Marry Levin', colorIndex: 0 },
	{ name: 'Emery Frank', colorIndex: 1 },
	{ name: 'Ryan Franco', colorIndex: 2 },
	{ name: 'Roger Dias', colorIndex: 0 },
	{ name: 'Lindsey Westerner', colorIndex: 1 },
	{ name: 'Neil Sims', colorIndex: 2 },
] as const;

const columns: ColumnDef<Workflow>[] = [
	{ id: 'status', accessorKey: 'status', header: 'Status', cell: (info) => info.getValue() },
	{ id: 'name', accessorKey: 'name', header: 'Name', cell: (info) => info.getValue() },
	{
		id: 'runningCompleted',
		accessorKey: 'runningCompleted',
		header: 'Running/completed',
		cell: (info) => {
			const value = info.getValue() as { running: number; completed: number };
			return `${String(value.running)}/${String(value.completed)}`;
		},
	},
	{ id: 'category', accessorKey: 'category', header: 'Category', cell: (info) => info.getValue() },
	{ id: 'version', accessorKey: 'version', header: 'Version', cell: (info) => info.getValue() },
	{ id: 'lastEdited', accessorKey: 'lastEdited', header: 'Last edited' },
];

const defaultData: Workflow[] = [
	{
		id: '1',
		name: 'Scheduled Config Backup',
		status: 'active',
		runningCompleted: { running: 3, completed: 41 },
		category: 'Network Built',
		version: '000.0003',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '2025-11-26T16:47:00',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '2',
		name: 'Network Provisioning',
		status: 'running',
		runningCompleted: { running: 8, completed: 14 },
		category: 'Network Built',
		version: '000.0002',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '2025-11-26T15:32:00',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '3',
		name: 'Service Provisioning',
		status: 'inactive',
		runningCompleted: { running: 0, completed: 243 },
		category: 'Network Built',
		version: '000.0033',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '2025-11-25T11:15:00',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '4',
		name: 'Assign IPv4 Address',
		status: 'active',
		runningCompleted: { running: 14, completed: 123 },
		category: 'Network Built',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '2025-11-24T14:20:00',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '5',
		name: 'Shutdown Decommissioned Device',
		status: 'active',
		runningCompleted: { running: 45, completed: 45 },
		category: 'Optical Optimization',
		version: '000.0022',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '2025-11-23T13:05:00',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '6',
		name: 'Optical Power Level Calibration',
		status: 'draft',
		runningCompleted: { running: 99, completed: 23 },
		category: 'Optical Optimization',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '2025-11-20T09:30:00',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
	{
		id: '7',
		name: 'Deploy Layer 2 VPN Instance',
		status: 'pending',
		runningCompleted: { running: 49, completed: 100 },
		category: 'Optical Optimization',
		version: '000.0012',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '2025-11-18T12:45:00',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '8',
		name: 'Initiate Scheduled Firmware Upgrade',
		status: 'active',
		runningCompleted: { running: 25, completed: 75 },
		category: 'Service Provisioning',
		version: '000.0010',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '2025-11-15T17:10:00',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '9',
		name: 'Enable High Availability Mode',
		status: 'running',
		runningCompleted: { running: 77, completed: 88 },
		category: 'Service Provisioning',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '2025-11-10T10:22:00',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '10',
		name: 'Audit Access Control Policies',
		status: 'active',
		runningCompleted: { running: 65, completed: 200 },
		category: 'Service Provisioning',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '2025-11-05T15:15:00',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '11',
		name: 'Synchronize NTP Across Network Nodes',
		status: 'warning',
		runningCompleted: { running: 49, completed: 142 },
		category: 'Service Provisioning',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '2025-10-28T08:40:00',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '12',
		name: 'Validate Optical Link Integrity',
		status: 'failed',
		runningCompleted: { running: 90, completed: 300 },
		category: 'Network Built',
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '2025-10-15T16:47:00',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
];

/**
 * Minimal filter-panel harness mirroring the story: filter button, generated
 * chips, table with enhanced columns, and a modal with a vertical-tabs nav +
 * content + footer wired to `useTableFilters`. In `controlled` mode it holds
 * `appliedFilters` externally and renders a `<pre>` snapshot of that state.
 */
function FiltersPanelHarness({ controlled = false }: { controlled?: boolean }) {
	const [appliedFilters, setAppliedFilters] = useState<Record<string, unknown>>({});

	const { columnFilters, filterChips, filterNavItems, enhancedColumns, handlers, renderFilterContent } =
		useTableFilters({
			filterAdapters: workflowFilters,
			baseColumns: columns,
			...(controlled ? { appliedFilters, onFiltersChange: setAppliedFilters } : {}),
		});

	const [isOpen, setIsOpen] = useState(false);
	const [selectedFilterId, setSelectedFilterId] = useState(filterNavItems[0]?.id ?? '');

	const handleValueChange = (value: string | null) => {
		if (value) {
			setSelectedFilterId(value);
		}
	};

	const handleApply = () => {
		handlers.applyFilters();
		setIsOpen(false);
	};

	const handleClearAll = () => {
		handlers.clearAll();
		setIsOpen(false);
	};

	return (
		<div style={{ width: 1600 }}>
			{controlled && <pre>{JSON.stringify(appliedFilters, null, 2)}</pre>}

			<DsButtonV3
				variant="secondary"
				icon="filter_list"
				aria-label="Filter"
				onClick={() => setIsOpen(true)}
			/>

			{filterChips.length > 0 && (
				<DsTagFilter items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />
			)}

			<DsTable
				columns={enhancedColumns}
				columnFilters={columnFilters}
				data={defaultData}
				emptyState={<div>No data available</div>}
			/>

			<DsModal style={{ height: '600px' }} open={isOpen} onOpenChange={setIsOpen}>
				<DsModal.Header>
					<DsModal.Title>Filters</DsModal.Title>
					<DsModal.CloseTrigger />
				</DsModal.Header>

				<DsModal.Body>
					<DsVerticalTabs value={selectedFilterId} onValueChange={handleValueChange}>
						<DsVerticalTabs.List>
							{filterNavItems.map((item) => (
								<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
									<DsTypography variant="body-sm-md">{item.label}</DsTypography>
								</DsVerticalTabs.Tab>
							))}
						</DsVerticalTabs.List>
						{filterNavItems.map((item) => (
							<DsVerticalTabs.Content key={item.id} value={item.id}>
								{renderFilterContent(item)}
							</DsVerticalTabs.Content>
						))}
					</DsVerticalTabs>
				</DsModal.Body>

				<DsModal.Footer>
					<DsButtonV3 variant="secondary" icon="close" onClick={handleClearAll}>
						Clear all
					</DsButtonV3>
					<DsModal.Actions>
						<DsButtonV3 variant="primary" onClick={handleApply}>
							Apply
						</DsButtonV3>
					</DsModal.Actions>
				</DsModal.Footer>
			</DsModal>
		</div>
	);
}

// Body rows only (drop the header row), matching the sibling column-filters test.
const getDataRows = () => page.getByRole('row').all().slice(1);

const filterButton = () => page.getByRole('button', { name: 'Filter', exact: true });
const applyButton = () => page.getByRole('button', { name: 'Apply' });
const tagFilterClearAll = () => page.getByRole('button', { name: 'Clear all filters' });

/** Open the modal, pick the Status tab, and check Active + Running. */
async function selectActiveAndRunning() {
	await filterButton().click();
	await page.getByRole('tab', { name: /status/i }).click();
	await page.getByRole('checkbox', { name: /^active$/i }).click();
	await page.getByRole('checkbox', { name: /^running$/i }).click();
}

describe('DsTable — filters panel', () => {
	it('opens the modal and exposes the filter category tabs', async () => {
		await page.render(<FiltersPanelHarness />);

		await filterButton().click();

		await expect.element(page.getByRole('tab', { name: /status/i })).toBeVisible();
		await expect.element(page.getByRole('tab', { name: /running\/completed/i })).toBeVisible();
		await expect.element(page.getByRole('tab', { name: /last edited/i })).toBeVisible();
	});

	it('checks the selected Status options and preserves them after reopening', async () => {
		await page.render(<FiltersPanelHarness />);

		await selectActiveAndRunning();

		await expect.element(page.getByRole('checkbox', { name: /^active$/i })).toBeChecked();
		await expect.element(page.getByRole('checkbox', { name: /^running$/i })).toBeChecked();

		await applyButton().click();

		// Reopen — the previously applied Status filters remain checked.
		await filterButton().click();
		await page.getByRole('tab', { name: /status/i }).click();

		await expect.element(page.getByRole('checkbox', { name: /^active$/i })).toBeChecked();
		await expect.element(page.getByRole('checkbox', { name: /^running$/i })).toBeChecked();
	});

	it('applies status, range, editor, and time filters to produce chips and filter rows', async () => {
		await page.render(<FiltersPanelHarness />);

		expect(getDataRows()).toHaveLength(12);

		// Status: Active + Running
		await selectActiveAndRunning();

		// Running/Completed: first two spin buttons are the Running field's From/To.
		await page.getByRole('tab', { name: /running\/completed/i }).click();
		const spinButtons = page.getByRole('spinbutton');
		await spinButtons.nth(0).fill('0');
		await spinButtons.nth(1).fill('50');

		// Last edited: an editor + a preset time range
		await page.getByRole('tab', { name: /last edited/i }).click();
		await page.getByRole('checkbox', { name: /marry levin/i }).click();
		await page.getByRole('radio', { name: /last 3 months/i }).click();

		await expect.element(page.getByRole('checkbox', { name: /marry levin/i })).toBeChecked();
		await expect.element(page.getByRole('radio', { name: /last 3 months/i })).toBeChecked();

		await applyButton().click();

		// Chips are queried by role so the aria-hidden measurement portal copies
		// (rendered to document.body by DsTagFilter) are excluded.
		await expect.element(page.getByRole('button', { name: /status: active/i })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /status: running/i })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /running.*0.*50/i })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /editor: marry levin/i })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /last 3 months/i })).toBeVisible();

		expect(getDataRows().length).toBeLessThan(12);
	});

	it('removes a single chip via its Delete tag button', async () => {
		await page.render(<FiltersPanelHarness />);

		await selectActiveAndRunning();
		await applyButton().click();

		await expect.element(page.getByRole('button', { name: /^status: active$/i })).toBeVisible();

		// The chip is itself role="button" (aria-label), so its nested Delete tag
		// button is presentational to role queries — reach it by its label. The
		// delete button only reveals (opacity/visibility) on hover, so hover first.
		const activeChip = page.getByRole('button', { name: /^status: active$/i });
		await activeChip.hover();
		await activeChip.getByLabelText(/delete tag/i).click();

		await expect.element(page.getByRole('button', { name: /^status: active$/i })).not.toBeInTheDocument();
		// The other status chip is untouched.
		await expect.element(page.getByRole('button', { name: /^status: running$/i })).toBeVisible();
	});

	it('clears all chips and restores every row via Clear all', async () => {
		await page.render(<FiltersPanelHarness />);

		await selectActiveAndRunning();
		await applyButton().click();

		await expect.element(page.getByRole('button', { name: /status: active/i })).toBeVisible();
		expect(getDataRows().length).toBeLessThan(12);

		await tagFilterClearAll().click();

		await expect.element(page.getByRole('button', { name: /status:/i })).not.toBeInTheDocument();
		expect(getDataRows()).toHaveLength(12);
	});

	it('reflects applied filter state externally and resets it on Clear all (controlled)', async () => {
		await page.render(<FiltersPanelHarness controlled />);

		// External state starts empty.
		await expect.element(page.getByText('{}', { exact: true })).toBeVisible();

		await filterButton().click();
		await page.getByRole('tab', { name: /status/i }).click();
		await page.getByRole('checkbox', { name: /^active$/i }).click();
		await applyButton().click();

		// External state now carries the status filter, and the chip appears.
		await expect.element(page.getByText(/"status"/)).toBeVisible();
		await expect.element(page.getByRole('button', { name: /status: active/i })).toBeVisible();

		await tagFilterClearAll().click();

		await expect.element(page.getByText('{}', { exact: true })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /status: active/i })).not.toBeInTheDocument();
	});
});
