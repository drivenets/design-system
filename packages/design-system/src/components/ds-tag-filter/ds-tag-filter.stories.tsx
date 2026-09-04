import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsTagFilter from './ds-tag-filter';
import type { TagFilterItem } from './ds-tag-filter.types';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

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
		className: {
			table: { disable: true },
			control: false,
		},
		style: {
			table: { disable: true },
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTagFilter>;

/**
 * Active filters render as tags that users can select or remove, with a "Clear all" action.
 * Wire `onItemSelect`, `onItemDelete`, and `onClearAll` to your filter state.
 */
export const Default: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: 'status', label: 'Status: Active' },
			{ id: 'running', label: 'Running: 100 to 10,000' },
			{ id: 'completed', label: 'Completed: 20,000 to 100,000' },
			{ id: 'executor', label: 'Executor: Category 1, Layer 1' },
			{ id: 'version', label: 'Version: 000.0001-3' },
			{ id: 'editor', label: 'Last editor: Kevin Levin' },
		]);

		return (
			<DsTagFilter
				items={items}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
				onItemSelect={(item) =>
					setItems((prev) => prev.map((f) => (f.id === item.id ? { ...f, selected: !f.selected } : f)))
				}
			/>
		);
	},
};

/**
 * Interactive demo wiring add / remove / select handlers to local state, with live counters.
 * Human-facing playground — excluded from the manifest.
 */
export const Interactive: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Running: 100 to 10,000' },
			{ id: '3', label: 'Completed: 20,000 to 100,000' },
			{ id: '4', label: 'Executor: Category 1, Layer 1' },
			{ id: '5', label: 'Version: 000.0001-3' },
			{ id: '6', label: 'Last editor: Kevin Levin' },
		]);

		const selectedCount = items.filter((item) => item.selected).length;

		return (
			<DsStack direction="column" gap="var(--standard)">
				<DsTagFilter
					items={items}
					onClearAll={() => setItems([])}
					onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
					onItemSelect={(item) =>
						setItems((prev) => prev.map((f) => (f.id === item.id ? { ...f, selected: !f.selected } : f)))
					}
				/>
				<DsStack direction="row" gap="var(--xs)" alignItems="center">
					<DsButtonV3
						variant="secondary"
						size="small"
						icon="add"
						onClick={() =>
							setItems((prev) => [
								...prev,
								{ id: `new-${String(Date.now())}`, label: `New Filter ${String(prev.length + 1)}` },
							])
						}
					>
						Add Filter
					</DsButtonV3>
					<DsTypography variant="body-sm-reg" color="secondary">
						Total: {items.length} · Selected: {selectedCount}
					</DsTypography>
				</DsStack>
			</DsStack>
		);
	},
};

/**
 * A short list that fits on one row without overflow — no "Show more" toggle appears.
 */
export const FewFilters: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Version: 1.0.0' },
			{ id: '3', label: 'Author: John Doe' },
		]);

		return (
			<DsTagFilter
				items={items}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
				onItemSelect={(item) =>
					setItems((prev) => prev.map((f) => (f.id === item.id ? { ...f, selected: !f.selected } : f)))
				}
			/>
		);
	},
};

/**
 * Omit `onClearAll` to hide the "Clear all" button — useful when clearing is handled elsewhere.
 */
export const WithoutClearAll: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Running: 100 to 10,000' },
			{ id: '3', label: 'Completed: 20,000 to 100,000' },
			{ id: '4', label: 'Executor: Category 1, Layer 1' },
			{ id: '5', label: 'Version: 000.0001-3' },
		]);

		return (
			<DsTagFilter
				items={items}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
			/>
		);
	},
};

/**
 * Omit all callbacks to render non-interactive, read-only tags.
 */
export const ReadOnly: Story = {
	render: () => (
		<DsTagFilter
			items={[
				{ id: '1', label: 'Status: Active' },
				{ id: '2', label: 'Running: 100 to 10,000' },
				{ id: '3', label: 'Completed: 20,000 to 100,000' },
				{ id: '4', label: 'Executor: Category 1, Layer 1' },
				{ id: '5', label: 'Version: 000.0001-3' },
			]}
		/>
	),
};

/**
 * Pass `locale` to translate the action buttons (clear, show more, show less).
 */
export const CustomLocale: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Running: 100 to 10,000' },
			{ id: '3', label: 'Completed: 20,000 to 100,000' },
			{ id: '4', label: 'Executor: Category 1, Layer 1' },
			{ id: '5', label: 'Version: 000.0001-3' },
		]);

		return (
			<DsTagFilter
				items={items}
				locale={{
					// cspell:disable-next-line
					clearButton: 'Zresetuj',
					// cspell:disable-next-line
					showMore: 'Pokaż więcej',
					// cspell:disable-next-line
					showLess: 'Pokaż mniej',
				}}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
			/>
		);
	},
};

/**
 * When tags overflow the first row, a "Show more (N)" toggle reveals the rest; the hidden
 * count stays stable between "Show more (N)" and "Show less (N)".
 */
export const ExpandCollapse: Story = {
	args: {
		items: [
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
			{ id: '11', label: 'Last editor: Kevin Levin' },
			{ id: '12', label: 'Last editor: Emery Dance' },
		],
	},
};

/**
 * Set `slotProps.tag.size` per item to render compact tags.
 */
export const SmallSize: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active', slotProps: { tag: { size: 'small' } } },
			{ id: '2', label: 'Running: 100 to 10,000', slotProps: { tag: { size: 'small' } } },
			{ id: '3', label: 'Completed: 20,000 to 100,000', slotProps: { tag: { size: 'small' } } },
			{ id: '4', label: 'Executor: Category 1, Layer 1', slotProps: { tag: { size: 'small' } } },
			{ id: '5', label: 'Version: 000.0001-3', slotProps: { tag: { size: 'small' } } },
			{ id: '6', label: 'Last editor: Kevin Levin', slotProps: { tag: { size: 'small' } } },
		]);

		return (
			<DsTagFilter
				items={items}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
			/>
		);
	},
};

/**
 * Mark items `selected` to render them in a pressed state on first paint.
 */
export const WithPreSelectedItems: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active', selected: true },
			{ id: '2', label: 'Running: 100 to 10,000', selected: false },
			{ id: '3', label: 'Completed: 20,000 to 100,000', selected: true },
			{ id: '4', label: 'Executor: Category 1', selected: false },
			{ id: '5', label: 'Version: 1.0.0', selected: true },
		]);

		return (
			<DsTagFilter
				items={items}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
				onItemSelect={(item) =>
					setItems((prev) => prev.map((f) => (f.id === item.id ? { ...f, selected: !f.selected } : f)))
				}
			/>
		);
	},
};

/**
 * `locale.label` is deprecated and never rendered — passing it has no visible effect.
 */
export const DeprecatedLabelIgnored: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [items, setItems] = useState<TagFilterItem[]>([
			{ id: '1', label: 'Status: Active' },
			{ id: '2', label: 'Running: 100 to 10,000' },
			{ id: '3', label: 'Completed: 20,000 to 100,000' },
			{ id: '4', label: 'Executor: Category 1, Layer 1' },
			{ id: '5', label: 'Version: 000.0001-3' },
		]);

		return (
			<DsTagFilter
				items={items}
				locale={{ label: 'This heading is ignored' }}
				onClearAll={() => setItems([])}
				onItemDelete={(item) => setItems((prev) => prev.filter((f) => f.id !== item.id))}
			/>
		);
	},
};

/**
 * The component renders nothing when `items` is empty.
 */
export const EmptyState: Story = {
	args: {
		items: [],
	},
};
