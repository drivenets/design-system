import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsSegmentGroup } from './ds-segment-group';
import { segmentGroupSizes } from './ds-segment-group.types';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsSegmentGroup.Root> = {
	title: 'Components/SegmentGroup',
	component: DsSegmentGroup.Root,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A single-select control that shows every option inline as connected segments. Use it for 2–4 mutually exclusive choices that should stay visible at once (view toggle, unit switch) as a compact alternative to a radio group. Prefer Tabs for more than about five options or long labels, and Select for large or searchable lists. Icon-only items need an aria-label.',
			},
		},
	},
	argTypes: {
		size: {
			control: 'select',
			options: segmentGroupSizes,
		},
		disabled: {
			control: 'boolean',
		},
		defaultValue: { table: { disable: true } },
		name: { table: { disable: true } },
		value: { table: { disable: true } },
		onValueChange: { table: { disable: true } },
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsSegmentGroup.Root>;

/**
 * A basic segment group with text labels. Compose `Root` with `Item` children
 * and seed the initial choice with `defaultValue` for uncontrolled usage.
 */
export const Default: Story = {
	render: (args) => (
		<DsSegmentGroup.Root {...args} defaultValue="react">
			<DsSegmentGroup.Item value="react" label="React" />
			<DsSegmentGroup.Item value="vue" label="Vue" />
			<DsSegmentGroup.Item value="angular" label="Angular" />
			<DsSegmentGroup.Item value="svelte" label="Svelte" />
		</DsSegmentGroup.Root>
	),
};

/**
 * Compact size for toolbars and dense layouts where vertical space is limited.
 */
export const Small: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="list" size="small">
			<DsSegmentGroup.Item value="list" label="List" size="small" />
			<DsSegmentGroup.Item value="grid" label="Grid" size="small" />
			<DsSegmentGroup.Item value="table" label="Table" size="small" />
		</DsSegmentGroup.Root>
	),
};

/**
 * Pair an icon with a label by composing `DsIcon` and `Item.ItemText` inside an
 * `Item`. Use icons to reinforce the meaning of each option.
 */
export const WithIcons: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="day" size="small">
			<DsSegmentGroup.Item value="day">
				<DsIcon icon="wb_sunny" size="tiny" color="main" />
				<DsSegmentGroup.ItemText size="small">Day</DsSegmentGroup.ItemText>
			</DsSegmentGroup.Item>
			<DsSegmentGroup.Item value="week">
				<DsIcon icon="date_range" size="tiny" color="main" />
				<DsSegmentGroup.ItemText size="small">Week</DsSegmentGroup.ItemText>
			</DsSegmentGroup.Item>
			<DsSegmentGroup.Item value="month">
				<DsIcon icon="calendar_month" size="tiny" color="main" />
				<DsSegmentGroup.ItemText size="small">Month</DsSegmentGroup.ItemText>
			</DsSegmentGroup.Item>
		</DsSegmentGroup.Root>
	),
};

/**
 * Icon-only segments for a compact switcher where the glyphs are self-explanatory.
 */
export const IconOnly: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="list" size="small">
			<DsSegmentGroup.Item value="list" aria-label="List">
				<DsIcon icon="view_list" size="tiny" color="main" />
			</DsSegmentGroup.Item>
			<DsSegmentGroup.Item value="grid" aria-label="Grid">
				<DsIcon icon="grid_view" size="tiny" color="main" />
			</DsSegmentGroup.Item>
			<DsSegmentGroup.Item value="kanban" aria-label="Kanban">
				<DsIcon icon="view_kanban" size="tiny" color="main" />
			</DsSegmentGroup.Item>
			<DsSegmentGroup.Item value="timeline" aria-label="Timeline">
				<DsIcon icon="timeline" size="tiny" color="main" />
			</DsSegmentGroup.Item>
		</DsSegmentGroup.Root>
	),
};

/**
 * Disable the entire group when no option can be changed.
 */
export const Disabled: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="react" disabled>
			<DsSegmentGroup.Item value="react" label="React" />
			<DsSegmentGroup.Item value="vue" label="Vue" />
			<DsSegmentGroup.Item value="angular" label="Angular" />
		</DsSegmentGroup.Root>
	),
};

/**
 * Disable individual segments with the `disabled` prop on an `Item` to prevent
 * selecting an unavailable option.
 */
export const WithDisabledItems: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="option2">
			<DsSegmentGroup.Item value="option1" label="Disabled" disabled />
			<DsSegmentGroup.Item value="option2" label="Available" />
			<DsSegmentGroup.Item value="option3" label="Also Available" />
		</DsSegmentGroup.Root>
	),
};

/**
 * A two-option segment group works well for binary choices as a labelled
 * alternative to a toggle.
 */
export const TwoOptions: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="on">
			<DsSegmentGroup.Item value="on" label="On" />
			<DsSegmentGroup.Item value="off" label="Off" />
		</DsSegmentGroup.Root>
	),
};

/**
 * Fully controlled segment group where the parent owns the value via
 * `value`/`onValueChange`. Use when other UI must react to the selection.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('option2');

		return (
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSegmentGroup.Root value={value} onValueChange={setValue}>
					<DsSegmentGroup.Item value="option1" label="Option 1" />
					<DsSegmentGroup.Item value="option2" label="Option 2" />
					<DsSegmentGroup.Item value="option3" label="Option 3" />
				</DsSegmentGroup.Root>
				<DsTypography variant="body-sm-reg" color="secondary">
					Selected: {value ?? 'None'}
				</DsTypography>
			</DsStack>
		);
	},
};
