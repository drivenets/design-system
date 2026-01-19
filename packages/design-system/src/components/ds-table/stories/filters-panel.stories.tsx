import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import DsIcon from '../../ds-icon/ds-icon';
import DsTable from '../ds-table';
import DsButton from '../../ds-button/ds-button';
import { DsModal } from '../../ds-modal';
import { DsVerticalTabs } from '../../ds-vertical-tabs';
import { DsTypography } from '../../ds-typography';
import { DsChipGroup } from '../../ds-chip-group';
import { useTableFilters } from '../filters/hooks/use-table-filters';
import type { FilterNavItem } from '../filters/types/filter-adapter.types';
import { type Workflow, workflowFilters } from './filters-panel/workflow-filters.config';
import styles from '../ds-table.stories.module.scss';

const sampleUsers = [
	{ name: 'Marry Levin', colorIndex: 0 },
	{ name: 'Emery Frank', colorIndex: 1 },
	{ name: 'Ryan Franco', colorIndex: 2 },
	{ name: 'Roger Dias', colorIndex: 0 },
	{ name: 'Lindsey Westerner', colorIndex: 1 },
	{ name: 'Neil Sims', colorIndex: 2 },
] as const;

const columns: ColumnDef<Workflow>[] = [
	{
		id: 'status',
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
	{
		id: 'name',
		accessorKey: 'name',
		header: 'Name',
		cell: (info) => info.getValue(),
	},
	{
		id: 'runningCompleted',
		accessorKey: 'runningCompleted',
		header: 'Running/completed',
		cell: (info) => {
			const value = info.getValue() as { running: number; completed: number };
			return `${String(value.running)}/${String(value.completed)}`;
		},
	},
	{
		id: 'category',
		accessorKey: 'category',
		header: 'Category',
		cell: (info) => info.getValue(),
	},
	{
		id: 'version',
		accessorKey: 'version',
		header: 'Version',
		cell: (info) => info.getValue(),
	},
	{
		id: 'lastEdited',
		accessorKey: 'lastEdited',
		header: 'Last edited',
	},
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

const meta: Meta<typeof DsTable<Workflow, unknown>> = {
	title: 'Design System/Table/Filters',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Table Filters System

A plug-and-play filter system using the **Filter Adapter Pattern** that eliminates boilerplate and centralizes filter logic.

## Features

- **Plug-and-play**: Add filters by adding to config array
- **Type-safe**: Full TypeScript support
- **Automatic**: Chip generation, nav items, column enhancement
- **Reusable**: Generic adapters work across tables
- **Extensible**: Custom adapters for complex scenarios

## Quick Start

### 1. Define Filters (config file)

\`\`\`typescript
// my-filters.config.tsx
import { createCheckboxFilterAdapter, createDualRangeFilterAdapter } from '../filters';

export const statusFilter = createCheckboxFilterAdapter({
  id: 'status',
  label: 'Status',
  items: [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ],
});

export const rangeFilter = createDualRangeFilterAdapter({
  id: 'count',
  label: 'Count',
  fields: { count: 'Count' },
});

export const myFilters = [statusFilter, rangeFilter];
\`\`\`

### 2. Use in Component

\`\`\`typescript
import { useTableFilters } from '../filters/hooks/use-table-filters';
import { myFilters } from './my-filters.config';

function MyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterNavItem>();

  const {
    columnFilters,       // For TanStack Table
    filterChips,         // For DsChipGroup
    filterNavItems,      // For filter navigation (FilterNavItem[])
    enhancedColumns,     // Columns with filters
    handlers,            // { applyFilters, clearAll, deleteChip }
    renderFilterContent, // Render function
  } = useTableFilters(myFilters, baseColumns);

  return (
    <>
      <DsButton onClick={() => setIsModalOpen(true)}>
        <DsIcon icon="filter_list" />
      </DsButton>

      {filterChips.length > 0 && (
        <DsChipGroup
          items={filterChips}
          onClearAll={handlers.clearAll}
          onItemDelete={handlers.deleteChip}
        />
      )}

      <DsTable
        columns={enhancedColumns}
        columnFilters={columnFilters}
        data={myData}
      />

      {/* See "Filter Modal Layout Pattern" section below for complete modal implementation */}
      <DsModal open={isModalOpen} onOpenChange={setIsModalOpen} columns={8}>
        {/* ... two-column layout with DsVerticalTabs ... */}
      </DsModal>
    </>
  );
}
\`\`\`

## Available Filter Types

### Checkbox Filter (Multi-select)
\`\`\`typescript
createCheckboxFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  items: [{ value: 'val1', label: 'Label 1' }],
  renderer?: (item) => <CustomComponent />,      // Optional
  chipLabelTemplate?: (item) => \`\${item.label}\`, // Optional
  cellRenderer?: (value) => <CustomCell />,      // Optional
});
\`\`\`

### Dual-Range Filter (Numeric ranges)
\`\`\`typescript
createDualRangeFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  fields: {
    field1: 'Field 1 Label',
    field2: 'Field 2 Label',
  },
  formatNumber?: (num) => num.toFixed(2),        // Optional
});
\`\`\`

### Custom Filter (Full control)
\`\`\`typescript
createCustomFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  initialValue: { /* your state */ },
  filterFn: (row, columnId, filterValue) => boolean,
  toChips: (value) => FilterChipItem[],
  fromChip: (chip, currentValue) => newValue,
  getActiveFiltersCount: (value) => number,              // 0 means none active
  renderFilter: (value, onChange) => ReactNode,
  cellRenderer?: (value) => ReactNode,           // Optional
});
\`\`\`

## What You Get Automatically

- Chip generation from filter state
- Filter nav items with active counts
- Column enhancement with filter functions
- State management across all filters
- Type-safe filtering
`,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: <div>No data available</div>,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [
		(Story) => (
			<div className={styles.storyPadding}>
				<style>
					{`
            #storybook-root, html, body { height: 100%; }
          `}
				</style>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DsTable<Workflow, unknown>>;

export const FiltersPanel: Story = {
	name: 'With Filters Panel',
	parameters: {
		docs: {
			description: {
				story: `
### Interactive Filter Example

This story demonstrates the complete filter system with:

- **Status Filter**: Checkbox multi-select with custom rendering (status badges)
- **Running/Completed Filter**: Dual-range numeric filter
- **Category Filter**: Simple checkbox multi-select
- **Version Filter**: Checkbox with custom chip labels

#### Key Implementation Details:

1. **Filter Configuration** (see \`workflow-filters.config.tsx\`):
   - Centralized filter definitions
   - Custom renderers for status badges
   - Format functions for numbers

2. **Hook Usage**:
   \`\`\`typescript
   const {
     columnFilters,       // Pass to DsTable
     filterChips,         // Pass to DsChipGroup
     filterNavItems,      // Pass to DsVerticalTabs in modal
     enhancedColumns,     // Pass to DsTable (includes filter functions)
     handlers,            // { applyFilters, clearAll, deleteChip }
     renderFilterContent, // Render function for modal content
   } = useTableFilters(workflowFilters, columns);
   \`\`\`

3. **What's Handled Automatically**:
   - Filter state management
   - Chip generation and deletion
   - Nav item counts (updates in real-time)
   - Column enhancement with filter functions
   - Type-safe filter values

#### Filter Modal Layout Pattern:

The modal uses a two-column layout with DsModal + DsVerticalTabs:

\`\`\`tsx
// State for selected filter tab
const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id);

const handleValueChange = (value: string | null) => {
  if (value) setSelectedFilterId(value);
};

<DsModal open={open} onOpenChange={setOpen}>
  <DsModal.Header className={styles.filterHeader}>
    <div className={styles.headerLeft}>
      <DsIcon icon="filter_list" />
      <DsModal.Title>Filters</DsModal.Title>
    </div>
    <DsModal.CloseTrigger />
  </DsModal.Header>

  {/* Two-column body: nav (40%) + content (60%) */}
  <DsModal.Body className={styles.filterBody}>
    <DsVerticalTabs value={selectedFilterId} onValueChange={handleValueChange}>
      <DsVerticalTabs.List className={styles.filterNav}>
        {filterNavItems.map((item) => (
          <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
            <DsTypography variant="body-sm-md">{item.label}</DsTypography>
            {!!item.count && (
              <div className={styles.filterTabBadge}>
                <span className={styles.filterTabDot} />
                <DsTypography variant="body-sm-reg">{item.count}</DsTypography>
              </div>
            )}
          </DsVerticalTabs.Tab>
        ))}
      </DsVerticalTabs.List>
      {filterNavItems.map((item) => (
        <DsVerticalTabs.Content key={item.id} value={item.id} className={styles.filterContent}>
          {renderFilterContent({ id: item.id })}
        </DsVerticalTabs.Content>
      ))}
    </DsVerticalTabs>
  </DsModal.Body>

  <DsModal.Footer className={styles.filterFooter}>
    <DsButton onClick={handleClearAll}>Clear all</DsButton>
    <DsModal.Actions>
      <DsButton onClick={handleApply}>Apply</DsButton>
    </DsModal.Actions>
  </DsModal.Footer>
</DsModal>
\`\`\`

**Note**: DsVerticalTabs now uses compound components for maximum flexibility. You can customize tab content with labels, icons, badges, etc.

See the story code for complete implementation with styles.

#### Try It:
1. Click the filter icon to open the modal
2. Select filters in different categories
3. Notice the nav item counts update as you make changes
4. Click "Apply" to see filtered data and chips
5. Delete individual chips or clear all filters

#### Adding More Filters:
To add a new filter, just add one adapter to \`workflowFilters\` array. No other changes needed!
`,
			},
		},
	},
	render: function Render(args) {
		// useTableFilters hook orchestrates all filter logic
		const { columnFilters, filterChips, filterNavItems, enhancedColumns, handlers, renderFilterContent } =
			useTableFilters(workflowFilters, args.columns);

		const [isOpen, setIsOpen] = useState(false);
		const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id || '');

		// Set initial selected filter when modal opens
		const handleOpenChange = (open: boolean) => {
			if (open && !selectedFilterId && filterNavItems.length > 0) {
				setSelectedFilterId(filterNavItems[0]?.id || '');
			}
			setIsOpen(open);
		};

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

		// Helper component for filter tab content (label + count badge)
		const TabLabel = ({ item }: { item: FilterNavItem }) => (
			<>
				<DsTypography variant="body-sm-md" className={styles.filterTabLabel}>
					{item.label}
				</DsTypography>
				{!!item.count && (
					<div className={styles.filterTabBadge}>
						<span className={styles.filterTabDot} />
						<DsTypography variant="body-sm-reg" className={styles.filterTabCount}>
							{item.count}
						</DsTypography>
					</div>
				)}
			</>
		);

		return (
			<div className={styles.tableFilterContainer}>
				{/* Toolbar with filter button */}
				<div className={styles.toolbar}>
					<DsButton design="v1.2" buttonType="secondary" onClick={() => setIsOpen(true)}>
						<DsIcon size="tiny" icon="filter_list" />
					</DsButton>
				</div>

				{/* Filter chips (automatically generated from filter state) */}
				{filterChips.length > 0 && (
					<DsChipGroup items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />
				)}

				{/* Table with enhanced columns (includes filter functions) */}
				<DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

				{/* Filter modal with two-column layout pattern */}
				<DsModal style={{ height: '600px' }} open={isOpen} onOpenChange={handleOpenChange}>
					<DsModal.Header className={styles.filterHeader}>
						<div className={styles.headerLeft}>
							<DsIcon icon="filter_list" size="small" />
							<DsModal.Title>Filters</DsModal.Title>
						</div>
						<DsModal.CloseTrigger />
					</DsModal.Header>

					<DsModal.Body className={styles.filterBody}>
						<DsVerticalTabs
							className={styles.filterTabs}
							value={selectedFilterId}
							onValueChange={handleValueChange}
						>
							<DsVerticalTabs.List className={styles.filterTabList}>
								{filterNavItems.map((item) => (
									<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
										<TabLabel item={item} />
									</DsVerticalTabs.Tab>
								))}
							</DsVerticalTabs.List>
							{filterNavItems.map((item) => (
								<DsVerticalTabs.Content key={item.id} value={item.id} className={styles.filterContent}>
									{renderFilterContent(item)}
								</DsVerticalTabs.Content>
							))}
						</DsVerticalTabs>
					</DsModal.Body>

					<DsModal.Footer className={styles.filterFooter}>
						<DsButton design="v1.2" variant="filled" buttonType="secondary" onClick={handleClearAll}>
							<DsIcon icon="close" size="tiny" />
							Clear all
						</DsButton>
						<DsModal.Actions>
							<DsButton design="v1.2" variant="filled" buttonType="primary" onClick={handleApply}>
								Apply
							</DsButton>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</div>
		);
	},
	args: {},
};
