import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsTagFilter from './ds-tag-filter';
import type { TagFilterItem } from './ds-tag-filter.types';
import styles from './ds-tag-filter.stories.module.scss';

const meta: Meta<typeof DsTagFilter> = {
	title: 'Components/TagFilter',
	component: DsTagFilter,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'Displays active filters as tags with overflow handling. Tags fill the left of a single row; the actions block (expand/collapse toggle, clear all) is pinned to the top-right and stays aligned with the first tag row when tags wrap.',
			},
		},
	},
	argTypes: {
		items: {
			control: 'object',
			description: 'Array of tag items to display',
		},
		locale: {
			description: 'Locale-specific options for customizing text content',
			control: 'object',
		},
		onClearAll: {
			action: 'clear-all',
			description: 'Callback when "Clear all filters" is clicked',
		},
		onItemDelete: {
			action: 'delete-item',
			description: 'Callback when item is deleted',
		},
		onItemSelect: {
			action: 'select-item',
			description: 'Callback when item is selected',
		},
		onExpand: {
			action: 'expand',
			description: 'Callback when expand/collapse is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTagFilter>;

const sampleFilters: TagFilterItem[] = [
	{ id: '1', label: 'Status: Active' },
	{ id: '2', label: 'Running: From 100 to 10,000' },
	{ id: '3', label: 'Completed from 20,000 to 100,000' },
	{ id: '4', label: 'Executor: Category 1, Layer 1 transporter' },
	{ id: '5', label: 'Executor: Category 2, Layer 11 transporter' },
	{ id: '6', label: 'Executor: Category 2, Layer 12 transporter' },
	{ id: '7', label: 'Executor: Category 2, Layer 13 transporter' },
	{ id: '8', label: 'Version: 000.0001-3' },
	{ id: '9', label: 'Version: 000.0001-4' },
	{ id: '10', label: 'Version: 000.0001-5' },
	{ id: '11', label: 'Version: 000.0001-6' },
	{ id: '12', label: 'Last editor: Kevin Levin' },
	{ id: '13', label: 'Last editor: Emery Dance' },
];

/**
 * Default story demonstrating the TagFilter component with interactive controls.
 * Try adding, removing, and selecting filters to see the component in action.
 */
export const Default: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState(sampleFilters);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleAddFilter = () => {
			const newId = `new-${String(Date.now())}`;
			setFilters((prev) => [
				...prev,
				{
					id: newId,
					label: `New Filter ${String(prev.length + 1)}`,
				},
			]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		const handleFilterSelect = (filter: TagFilterItem) => {
			setFilters((prev) => prev.map((f) => (f.id === filter.id ? { ...f, selected: !f.selected } : f)));
		};

		return (
			<div className={styles.container}>
				<DsTagFilter
					{...args}
					items={filters}
					onClearAll={handleClearAll}
					onItemDelete={handleFilterDelete}
					onItemSelect={handleFilterSelect}
				/>
				<div className={styles.controlsContainer}>
					<button type="button" onClick={handleAddFilter} className={styles.addButton}>
						Add Filter
					</button>
					<p className={styles.infoText}>Total filters: {filters.length}</p>
					<p className={styles.infoText}>
						Selected filters: [
						{filters
							.filter((filter) => filter.selected)
							.map((filter) => `"${filter.label}"`)
							.join(', ')}
						]
					</p>
				</div>
			</div>
		);
	},
};

/**
 * Story showing fewer filters that fit within the visible area without overflow.
 */
export const FewFilters: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Version: 1.0.0' },
			{ id: '3', label: 'Author: John Doe' },
		]);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		const handleFilterSelect = (filter: TagFilterItem) => {
			setFilters((prev) => prev.map((f) => (f.id === filter.id ? { ...f, selected: !f.selected } : f)));
		};

		return (
			<DsTagFilter
				{...args}
				items={filters}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
				onItemSelect={handleFilterSelect}
			/>
		);
	},
};

/**
 * Story showing TagFilter without the "Clear all" button.
 */
export const WithoutClearAll: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState(sampleFilters.slice(0, 5));

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		// Storybook injects `onClearAll` via args by default — pass `undefined` explicitly
		// so the component hides the "Clear all" button.
		return <DsTagFilter {...args} items={filters} onClearAll={undefined} onItemDelete={handleFilterDelete} />;
	},
};

/**
 * Story showing TagFilter without delete functionality (read-only tags).
 */
export const ReadOnly: Story = {
	render: function Render(args) {
		const filters: TagFilterItem[] = sampleFilters.slice(0, 5);

		// Storybook injects callbacks via args by default — pass `undefined` explicitly
		// so the component renders in read-only mode (no clear, delete, or select).
		return (
			<DsTagFilter
				{...args}
				items={filters}
				onClearAll={undefined}
				onItemDelete={undefined}
				onItemSelect={undefined}
			/>
		);
	},
};

/**
 * Story documenting that `locale.label` is deprecated and never rendered.
 * We removed the header label, so any label passed here has no visible effect.
 */
export const DeprecatedLabelIgnored: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState(sampleFilters.slice(0, 5));

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return (
			<DsTagFilter
				{...args}
				items={filters}
				locale={{ label: 'This heading is ignored' }}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
			/>
		);
	},
};

/**
 * Story demonstrating locale customization of the action buttons (clear, show more,
 * show less). `locale.label` is intentionally omitted — it is deprecated and unused.
 */
export const CustomLocale: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState(sampleFilters);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return (
			<DsTagFilter
				{...args}
				items={filters}
				locale={{
					// cspell:disable-next-line
					clearButton: 'Zresetuj',
					// cspell:disable-next-line
					showMore: 'Pokaż więcej',
					// cspell:disable-next-line
					showLess: 'Pokaż mniej',
				}}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
			/>
		);
	},
};

/**
 * Story demonstrating the expand/collapse toggle. The hidden count stays stable
 * between `Show more (N)` and `Show less (N)`.
 */
export const ExpandCollapse: Story = {
	args: {
		items: sampleFilters,
	},
};

/**
 * Story showing TagFilter with small tags via slotProps.tag on each item.
 */
export const SmallSize: Story = {
	render: function Render(args) {
		const smallFilters: TagFilterItem[] = sampleFilters.slice(0, 6).map((item) => ({
			...item,
			slotProps: { tag: { size: 'small' } },
		}));

		const [filters, setFilters] = useState(smallFilters);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return (
			<DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />
		);
	},
};

/**
 * Story showing TagFilter with pre-selected items.
 */
export const WithPreSelectedItems: Story = {
	render: function Render(args) {
		const [filters, setFilters] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active', selected: true },
			{ id: '2', label: 'Running: From 100 to 10,000', selected: false },
			{ id: '3', label: 'Completed from 20,000 to 100,000', selected: true },
			{ id: '4', label: 'Executor: Category 1', selected: false },
			{ id: '5', label: 'Version: 1.0.0', selected: true },
		]);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		const handleFilterSelect = (filter: TagFilterItem) => {
			setFilters((prev) => prev.map((f) => (f.id === filter.id ? { ...f, selected: !f.selected } : f)));
		};

		return (
			<DsTagFilter
				{...args}
				items={filters}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
				onItemSelect={handleFilterSelect}
			/>
		);
	},
};

/**
 * Story verifying the component renders nothing when items is empty.
 */
export const EmptyState: Story = {
	args: {
		items: [],
	},
};
