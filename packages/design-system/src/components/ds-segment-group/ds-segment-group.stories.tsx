import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsSegmentGroup } from './ds-segment-group';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta = {
	title: 'Components/SegmentGroup',
	component: DsSegmentGroup.Root,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A single-select control that shows every option inline as connected segments. Use it for a small set of mutually exclusive choices, such as a view or range switcher.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSegmentGroup>;

/**
 * A basic segment group with text labels. Compose `Root` with `Item` children
 * and seed the initial choice with `defaultValue` for uncontrolled usage.
 */
export const Default: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="react">
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
			<DsSegmentGroup.Item value="list" label="List" />
			<DsSegmentGroup.Item value="grid" label="Grid" />
			<DsSegmentGroup.Item value="table" label="Table" />
		</DsSegmentGroup.Root>
	),
};

/**
 * Pair an icon with a label by composing `DsIcon` and `Item.ItemText` inside an
 * `Item`. Use icons to reinforce the meaning of each option.
 */
export const WithIcons: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="day">
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
	),
};

/**
 * Icon-only segments for a compact switcher where the glyphs are self-explanatory.
 */
export const IconOnly: Story = {
	render: () => (
		<DsSegmentGroup.Root defaultValue="list" size="small">
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
