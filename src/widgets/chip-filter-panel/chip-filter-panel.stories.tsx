// AI Generated file
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ChipFilterPanel from './chip-filter-panel';
import { FilterChipItem } from './chip-filter-panel.types';

const meta: Meta<typeof ChipFilterPanel> = {
	title: 'Widgets/ChipFilterPanel',
	component: ChipFilterPanel,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		filters: {
			control: 'object',
			description: 'Array of filter chip items to display',
		},
		onClearAll: {
			action: 'clear-all',
			description: 'Callback when "Clear all filters" is clicked',
		},
		maxVisibleFilters: {
			control: 'number',
			description: 'Maximum number of filters to show before collapsing',
		},
		expanded: {
			control: 'boolean',
			description: 'Whether the panel is expanded to show all filters (controlled)',
		},
		onExpandToggle: {
			action: 'expand-toggle',
			description: 'Callback when expand/collapse is toggled',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChipFilterPanel>;

const sampleFilters: FilterChipItem[] = [
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
	{ id: '12', label: 'Last editor: Maren Levin' },
	{ id: '13', label: 'Last editor: Emery Franci' },
];

export const Default: Story = {
	args: {
		filters: sampleFilters.slice(0, 3).map((filter) => ({
			...filter,
			onDelete: () => console.log('Delete', filter.label),
		})),
		onClearAll: () => console.log('Clear all filters'),
	},
};

export const WithManyFilters: Story = {
	args: {
		filters: sampleFilters.map((filter) => ({
			...filter,
			onDelete: () => console.log('Delete', filter.label),
		})),
		maxVisibleFilters: 5,
		onClearAll: () => console.log('Clear all filters'),
	},
};

export const WithDialog: Story = {
	render: () => {
		const [filters, setFilters] = useState<FilterChipItem[]>(
			sampleFilters.map((filter) => ({
				...filter,
				onDelete: () => {
					setFilters((prev) => prev.filter((f) => f.id !== filter.id));
				},
			})),
		);

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<ChipFilterPanel filters={filters} maxVisibleFilters={5} onClearAll={() => setFilters([])} />
				<p style={{ fontSize: '12px', color: '#666' }}>
					Total filters: {filters.length}
					<br />
					Click "+X filters show all" to open the dialog
				</p>
			</div>
		);
	},
};

export const Interactive: Story = {
	render: () => {
		const [filters, setFilters] = useState<FilterChipItem[]>(
			sampleFilters.map((filter) => ({
				...filter,
				onDelete: () => {
					setFilters((prev) => prev.filter((f) => f.id !== filter.id));
				},
			})),
		);

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleAddFilter = () => {
			const newId = `new-${Date.now()}`;
			setFilters((prev) => [
				...prev,
				{
					id: newId,
					label: `New Filter ${prev.length + 1}`,
					onDelete: () => {
						setFilters((current) => current.filter((f) => f.id !== newId));
					},
				},
			]);
		};

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<ChipFilterPanel filters={filters} maxVisibleFilters={5} onClearAll={handleClearAll} />
				<div style={{ display: 'flex', gap: '8px' }}>
					<button
						onClick={handleAddFilter}
						style={{
							padding: '8px 16px',
							borderRadius: '4px',
							border: '1px solid #ccc',
							background: 'white',
							cursor: 'pointer',
						}}
					>
						Add Filter
					</button>
					<p style={{ fontSize: '12px', color: '#666', alignSelf: 'center' }}>
						Total filters: {filters.length}
					</p>
				</div>
			</div>
		);
	},
};
