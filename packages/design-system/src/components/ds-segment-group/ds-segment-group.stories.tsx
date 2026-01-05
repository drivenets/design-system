import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DsSegmentGroup } from './ds-segment-group';
import { DsIcon } from '../ds-icon';
import styles from './ds-segment-group.stories.module.scss';

const meta: Meta = {
	title: 'Design System/SegmentGroup',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DsSegmentGroup>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('react');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue}>
				<DsSegmentGroup.Item value="react" label="React" />
				<DsSegmentGroup.Item value="vue" label="Vue" />
				<DsSegmentGroup.Item value="angular" label="Angular" />
				<DsSegmentGroup.Item value="svelte" label="Svelte" />
			</DsSegmentGroup.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the segment buttons by their role
		const react = await canvas.findByRole('radio', { name: /React/i });
		const vue = await canvas.findByRole('radio', { name: /Vue/i });
		const angular = await canvas.findByRole('radio', { name: /Angular/i });

		// Assert that React is initially selected
		await expect(react).toBeChecked();

		// Click on Vue
		await userEvent.click(vue);

		// Assert that React is no longer selected
		await expect(react).not.toBeChecked();

		// Assert that Vue is now selected
		await expect(vue).toBeChecked();

		// Click on Angular
		await userEvent.click(angular);

		// Assert that Angular is now selected
		await expect(angular).toBeChecked();
		await expect(vue).not.toBeChecked();
	},
};

export const Small: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Small size variant for compact UIs.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('list');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue} size="small">
				<DsSegmentGroup.Item value="list" label="List" />
				<DsSegmentGroup.Item value="grid" label="Grid" />
				<DsSegmentGroup.Item value="table" label="Table" />
			</DsSegmentGroup.Root>
		);
	},
};

export const WithIcons: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Segment groups can include icons alongside text for better visual communication. Icons are composable via children.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('day');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue}>
				<DsSegmentGroup.Item value="day">
					<DsIcon icon="wb_sunny" size="tiny" />
					<DsSegmentGroup.ItemText>Day</DsSegmentGroup.ItemText>
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="week">
					<DsIcon icon="date_range" size="tiny" />
					<DsSegmentGroup.ItemText>Week</DsSegmentGroup.ItemText>
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="month">
					<DsIcon icon="calendar_month" size="tiny" />
					<DsSegmentGroup.ItemText>Month</DsSegmentGroup.ItemText>
				</DsSegmentGroup.Item>
			</DsSegmentGroup.Root>
		);
	},
};

export const IconOnly: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Segment groups with only icons for a more compact design.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('list');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue} size="small">
				<DsSegmentGroup.Item value="list">
					<DsIcon icon="view_list" size="tiny" />
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="grid">
					<DsIcon icon="grid_view" size="tiny" />
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="kanban">
					<DsIcon icon="view_kanban" size="tiny" />
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="timeline">
					<DsIcon icon="timeline" size="tiny" />
				</DsSegmentGroup.Item>
			</DsSegmentGroup.Root>
		);
	},
};

export const WithDisabledItems: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Individual segment items can be disabled to prevent user interaction.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('option2');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue}>
				<DsSegmentGroup.Item value="option1" label="Disabled" disabled />
				<DsSegmentGroup.Item value="option2" label="Available" />
				<DsSegmentGroup.Item value="option3" label="Also Available" />
			</DsSegmentGroup.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the segment buttons
		const option1 = await canvas.findByRole('radio', { name: /Disabled/i });
		const option2 = await canvas.findByRole('radio', { name: /^Available$/i });

		// Assert that Option 2 is initially selected
		await expect(option2).toBeChecked();

		// Attempt to click the disabled Option 1
		await userEvent.click(option1, { pointerEventsCheck: 0 });

		// Assert that Option 1 remains unchecked
		await expect(option1).not.toBeChecked();
		// Assert that Option 2 is still selected
		await expect(option2).toBeChecked();
	},
};

export const Uncontrolled: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component.",
			},
		},
	},
	render: function Render() {
		return (
			<DsSegmentGroup.Root defaultValue="option2">
				<DsSegmentGroup.Item value="option1" label="Option 1" />
				<DsSegmentGroup.Item value="option2" label="Option 2" />
				<DsSegmentGroup.Item value="option3" label="Option 3" />
			</DsSegmentGroup.Root>
		);
	},
};

export const Controlled: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Fully controlled segment group where the parent component manages the selected value state.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('option2');

		return (
			<div className={styles.controlledContainer}>
				<DsSegmentGroup.Root value={value} onValueChange={setValue}>
					<DsSegmentGroup.Item value="option1" label="Option 1" />
					<DsSegmentGroup.Item value="option2" label="Option 2" />
					<DsSegmentGroup.Item value="option3" label="Option 3" />
				</DsSegmentGroup.Root>
				<div className={styles.selectedValue}>Selected: {value || 'None'}</div>
			</div>
		);
	},
};

export const TwoOptions: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Segment groups work well with just two options for binary choices.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('on');

		return (
			<DsSegmentGroup.Root value={value} onValueChange={setValue}>
				<DsSegmentGroup.Item value="on" label="On" />
				<DsSegmentGroup.Item value="off" label="Off" />
			</DsSegmentGroup.Root>
		);
	},
};
