import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsChipGroup from './ds-chip-group';
import type { ChipItem } from './ds-chip-group.types';
import styles from './ds-chip-group.stories.module.scss';

/**
 * @deprecated This component is deprecated. Use `DsTagFilter` instead.
 * @see {@link ../ds-tag-filter/ds-tag-filter.stories} for examples of the replacement component.
 */
const meta: Meta<typeof DsChipGroup> = {
	title: 'Design System/Chip Group (Deprecated)',
	component: DsChipGroup,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'**Deprecated**: This component is deprecated. Please use `DsTagFilter` instead. See the TagGroup stories for the replacement component.',
			},
		},
	},
	tags: ['autodocs', 'deprecated'],
	argTypes: {
		items: {
			control: 'object',
			description: 'Array of chip items to display',
		},
		onClearAll: {
			action: 'clear-all',
			description: 'Callback when "Clear all" is clicked',
		},
		onItemDelete: {
			action: 'delete-item',
			description: 'Callback when item is deleted',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsChipGroup>;

const sampleFilters: ChipItem[] = [
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
	{ id: '12', label: 'Last editor: Mary Levin' },
	{ id: '13', label: 'Last editor: Emery Franco' },
];

export const Default: Story = {
	render: function Render() {
		const [filters, setFilters] = useState<ChipItem[]>(sampleFilters);

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

		const handleFilterDelete = (filter: ChipItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		const handleFilterSelect = (filter: ChipItem) => {
			setFilters((prev) => prev.map((f) => (f.id === filter.id ? { ...f, selected: !f.selected } : f)));
		};

		return (
			<div className={styles.container}>
				<DsChipGroup
					items={filters}
					onClearAll={handleClearAll}
					onItemDelete={handleFilterDelete}
					onItemSelect={handleFilterSelect}
				/>
				<div className={styles.controlsContainer}>
					<button onClick={handleAddFilter} className={styles.addButton}>
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
