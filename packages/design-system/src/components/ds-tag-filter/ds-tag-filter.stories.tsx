import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import DsTagFilter from './ds-tag-filter';
import type { TagFilterItem } from './ds-tag-filter.types';
import styles from './ds-tag-filter.stories.module.scss';

const meta: Meta<typeof DsTagFilter> = {
	title: 'Design System/Tag Filter',
	component: DsTagFilter,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'A component for displaying active filters as tags with overflow handling. Shows visible tags in up to 2 rows, with an expand button to show hidden items in a dialog.',
			},
		},
	},
	tags: ['autodocs'],
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
	render: function Render() {
		const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters);

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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		await expect(canvas.getByText('Filtered by:')).toBeInTheDocument();
		await expect(canvas.getByRole('button', { name: /Clear all filters/ })).toBeInTheDocument();

		const firstTag = canvas.getByRole('button', { name: 'Status: Active' });
		await userEvent.click(firstTag);

		await waitFor(async () => {
			await expect(firstTag).toHaveAttribute('aria-pressed', 'true');
		});

		// Verify selection is reflected in the info text
		await expect(canvas.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument();

		// Click again to deselect
		await userEvent.click(firstTag);

		await waitFor(async () => {
			await expect(firstTag).not.toHaveAttribute('aria-pressed');
		});

		firstTag.focus();

		// Wait for delete button to become visible after focus
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Delete tag' })).toBeVisible();
		});

		const deleteButton = canvas.getByRole('button', { name: 'Delete tag' });
		await userEvent.click(deleteButton);

		await waitFor(async () => {
			await expect(canvas.queryByRole('button', { name: 'Status: Active' })).not.toBeInTheDocument();
			await expect(canvas.getByText('Total filters: 12')).toBeInTheDocument();
		});

		// Test clear all functionality
		const clearAllButton = canvas.getByRole('button', { name: /Clear all filters/ });
		await userEvent.click(clearAllButton);

		await waitFor(async () => {
			await expect(canvas.getByText('Total filters: 0')).toBeInTheDocument();
		});
	},
};

/**
 * Story showing fewer filters that fit within the visible area without overflow.
 */
export const FewFilters: Story = {
	render: function Render() {
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
				items={filters}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
				onItemSelect={handleFilterSelect}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		// Verify all filters are visible
		await expect(canvas.getByRole('button', { name: 'Version: 1.0.0' })).toBeInTheDocument();
		await expect(canvas.getByRole('button', { name: 'Author: John Doe' })).toBeInTheDocument();

		// Test selection interaction
		const statusTag = canvas.getByRole('button', { name: 'Status: Active' });
		await userEvent.click(statusTag);

		await waitFor(async () => {
			await expect(statusTag).toHaveAttribute('aria-pressed', 'true');
		});

		// Test deletion interaction - focus the tag to reveal delete button
		statusTag.focus();

		// Wait for delete button to become visible after focus
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Delete tag' })).toBeVisible();
		});

		const deleteButton = canvas.getByRole('button', { name: 'Delete tag' });
		await userEvent.click(deleteButton);

		await waitFor(async () => {
			await expect(canvas.queryByRole('button', { name: 'Status: Active' })).not.toBeInTheDocument();
		});

		// Verify remaining filters
		await expect(canvas.getByRole('button', { name: 'Version: 1.0.0' })).toBeInTheDocument();
		await expect(canvas.getByRole('button', { name: 'Author: John Doe' })).toBeInTheDocument();
	},
};

/**
 * Story showing TagFilter without the "Clear all" button.
 */
export const WithoutClearAll: Story = {
	render: function Render() {
		const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return <DsTagFilter items={filters} onItemDelete={handleFilterDelete} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		// Verify "Clear all filters" button is NOT present
		await expect(canvas.queryByRole('button', { name: /Clear all filters/ })).not.toBeInTheDocument();

		// Verify deletion still works - focus the tag to reveal delete button
		const firstTag = canvas.getByRole('button', { name: 'Status: Active' });
		firstTag.focus();

		// Wait for delete button to become visible after focus
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Delete tag' })).toBeVisible();
		});

		const deleteButton = canvas.getByRole('button', { name: 'Delete tag' });
		await userEvent.click(deleteButton);

		await waitFor(async () => {
			await expect(canvas.queryByRole('button', { name: 'Status: Active' })).not.toBeInTheDocument();
		});
	},
};

/**
 * Story showing TagFilter without delete functionality (read-only tags).
 */
export const ReadOnly: Story = {
	render: function Render() {
		const filters: TagFilterItem[] = sampleFilters.slice(0, 5);

		return <DsTagFilter items={filters} locale={{ label: 'Applied filters:' }} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByText('Status: Active')).toBeInTheDocument();
		});

		// Verify custom label is shown
		await expect(canvas.getByText('Applied filters:')).toBeInTheDocument();

		// Verify delete buttons are NOT visible (read-only)
		await expect(canvas.queryByRole('button', { name: 'Delete tag' })).not.toBeInTheDocument();

		// Verify "Clear all filters" button is NOT present
		await expect(canvas.queryByRole('button', { name: /Clear all filters/ })).not.toBeInTheDocument();
	},
};

/**
 * Story showing TagFilter without a label.
 */
export const WithoutLabel: Story = {
	render: function Render() {
		const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return (
			<DsTagFilter
				items={filters}
				locale={{ label: '' }}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		// Verify "Filtered by:" label is NOT present
		await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();

		// Verify "Clear all filters" button is still present and works
		await expect(canvas.getByRole('button', { name: /Clear all filters/ })).toBeInTheDocument();

		// Verify deletion still works - focus the tag to reveal delete button
		const firstTag = canvas.getByRole('button', { name: 'Status: Active' });
		firstTag.focus();

		// Wait for delete button to become visible after focus
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Delete tag' })).toBeVisible();
		});

		const deleteButton = canvas.getByRole('button', { name: 'Delete tag' });
		await userEvent.click(deleteButton);

		await waitFor(async () => {
			await expect(canvas.queryByRole('button', { name: 'Status: Active' })).not.toBeInTheDocument();
		});
	},
};

/**
 * Story demonstrating full locale customization with both label and clearButton.
 */
export const CustomLocale: Story = {
	render: function Render() {
		const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));

		const handleClearAll = () => {
			setFilters([]);
		};

		const handleFilterDelete = (filter: TagFilterItem) => {
			setFilters((prev) => prev.filter((f) => f.id !== filter.id));
		};

		return (
			<DsTagFilter
				items={filters}
				locale={{
					// cspell:disable-next-line
					label: 'Aktywne filtry:',
					// cspell:disable-next-line
					clearButton: 'Zresetuj',
				}}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		// Verify custom label is rendered
		// cspell:disable-next-line
		await expect(canvas.getByText('Aktywne filtry:')).toBeInTheDocument();

		// cspell:disable-next-line
		await expect(canvas.getByRole('button', { name: /Zresetuj/ })).toBeInTheDocument();

		await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
		await expect(canvas.queryByRole('button', { name: /Clear all filters/ })).not.toBeInTheDocument();
	},
};

/**
 * Story testing the expand/collapse functionality and onExpand callback.
 */
export const ExpandCollapse: Story = {
	args: {
		items: sampleFilters,
		onExpand: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and overflow tag to appear
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: /\+\d+ filters?/ })).toBeInTheDocument();
		});

		const expandButton = canvas.getByRole('button', { name: /\+\d+ filters?/ });

		// Click expand button
		await userEvent.click(expandButton);

		// Verify onExpand was called with true (expanded)
		await waitFor(async () => {
			await expect(args.onExpand).toHaveBeenCalledWith(true);
		});

		// Verify the button now shows "Collapse"
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Collapse' })).toBeInTheDocument();
		});

		const collapseButton = canvas.getByRole('button', { name: 'Collapse' });

		// Click collapse button
		await userEvent.click(collapseButton);

		// Verify onExpand was called with false (collapsed)
		await waitFor(async () => {
			await expect(args.onExpand).toHaveBeenCalledWith(false);
		});

		// Verify the expand button is back
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: /\+\d+ filters?/ })).toBeInTheDocument();
		});
	},
};

/**
 * Story showing TagFilter with pre-selected items.
 */
export const WithPreSelectedItems: Story = {
	render: function Render() {
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
				items={filters}
				onClearAll={handleClearAll}
				onItemDelete={handleFilterDelete}
				onItemSelect={handleFilterSelect}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for layout calculation to complete and tags to be rendered
		await waitFor(async () => {
			await expect(canvas.getByRole('button', { name: 'Status: Active' })).toBeInTheDocument();
		});

		// Verify pre-selected tags have aria-pressed="true"
		const activeTag = canvas.getByRole('button', { name: 'Status: Active' });
		const completedTag = canvas.getByRole('button', { name: 'Completed from 20,000 to 100,000' });
		const versionTag = canvas.getByRole('button', { name: 'Version: 1.0.0' });

		await expect(activeTag).toHaveAttribute('aria-pressed', 'true');
		await expect(completedTag).toHaveAttribute('aria-pressed', 'true');
		await expect(versionTag).toHaveAttribute('aria-pressed', 'true');

		// Verify non-selected tags do not have aria-pressed
		const runningTag = canvas.getByRole('button', { name: 'Running: From 100 to 10,000' });
		const executorTag = canvas.getByRole('button', { name: 'Executor: Category 1' });

		await expect(runningTag).not.toHaveAttribute('aria-pressed');
		await expect(executorTag).not.toHaveAttribute('aria-pressed');

		// Test toggling selection on a pre-selected tag
		await userEvent.click(activeTag);

		await waitFor(async () => {
			await expect(activeTag).not.toHaveAttribute('aria-pressed');
		});

		// Test toggling selection on a non-selected tag
		await userEvent.click(runningTag);

		await waitFor(async () => {
			await expect(runningTag).toHaveAttribute('aria-pressed', 'true');
		});
	},
};
