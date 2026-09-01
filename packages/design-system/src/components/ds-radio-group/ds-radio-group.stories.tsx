import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsRadioGroup } from './ds-radio-group';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta = {
	title: 'Components/RadioGroup',
	component: DsRadioGroup.Root,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A single-select group of radio options. Compose `Root` with `Item` children; each item submits its `value` when selected.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsRadioGroup>;

/**
 * A basic radio group with labels. Seed the initial choice with `defaultValue`
 * for uncontrolled usage where the group manages its own state.
 */
export const Default: Story = {
	render: () => (
		<DsRadioGroup.Root defaultValue="option2">
			<DsRadioGroup.Item value="option1" label="Option 1" />
			<DsRadioGroup.Item value="option2" label="Option 2" />
			<DsRadioGroup.Item value="option3" label="Option 3" />
		</DsRadioGroup.Root>
	),
};

/**
 * Disable individual items with the `disabled` prop to prevent selecting an
 * unavailable option. Use `labelInfo` for supporting text under a label.
 */
export const WithDisabledItems: Story = {
	render: () => (
		<DsRadioGroup.Root defaultValue="option2">
			<DsRadioGroup.Item
				value="option1"
				label="Disabled Option"
				labelInfo="This option is disabled"
				disabled
			/>
			<DsRadioGroup.Item value="option2" label="Option 2" labelInfo="Available option" />
			<DsRadioGroup.Item value="option3" label="Option 3" />
		</DsRadioGroup.Root>
	),
};

/**
 * Controlled radio group where the parent owns the value via
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
			<DsRadioGroup.Root value={value} onValueChange={setValue}>
				<DsRadioGroup.Item value="option1" label="Option 1" />
				<DsRadioGroup.Item value="option2" label="Option 2" />
				<DsRadioGroup.Item value="option3" label="Option 3" />
			</DsRadioGroup.Root>
		);
	},
};

/**
 * For richer options, pass custom `children` to an `Item` instead of `label`.
 * Compose layout with `DsStack` and `DsTypography` for full control over each row.
 */
export const CustomComposition: Story = {
	render: () => (
		<DsRadioGroup.Root defaultValue="custom2">
			<DsRadioGroup.Item value="custom1">
				<DsStack direction="column">
					<DsTypography variant="body-sm-semi-bold">Custom Layout 1</DsTypography>
					<DsTypography variant="body-xs-reg" color="secondary">
						With custom composed content
					</DsTypography>
				</DsStack>
			</DsRadioGroup.Item>
			<DsRadioGroup.Item value="custom2">
				<DsStack direction="column">
					<DsTypography variant="body-sm-semi-bold">Custom Layout 2</DsTypography>
					<DsTypography variant="body-xs-reg" color="secondary">
						Complete control over rendering
					</DsTypography>
				</DsStack>
			</DsRadioGroup.Item>
		</DsRadioGroup.Root>
	),
};
