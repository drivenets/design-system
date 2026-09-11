import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTag from './ds-tag';
import { tagShapes, tagSizes, tagVariants } from './ds-tag.types';
import { DsIcon } from '../ds-icon';
import { DsSelect } from '../ds-select';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsTag> = {
	title: 'Components/Tag',
	component: DsTag,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
A compact, labelled token for attributes, filters and selections.

**\`shape="round"\` vs \`DsChip\`** — \`DsChip\` is the only other pill-shaped token in the system
and it is **deprecated in favour of \`DsTag\`**, so there is no "pick by role" decision here:

- Always reach for \`DsTag\`. \`shape="round"\` gives the pill radius (\`9999px\`, the same pill shape
  \`DsChip\` used) on any variant at any size, so a round \`DsTag\` is the drop-in replacement when
  migrating a \`DsChip\` — plus you keep the \`key-value\` / \`operator-filter\` / \`query-filter\`
  variants, include/exclude, the warning dot and the expand chevron, none of which \`DsChip\` has.
- Do not add new \`DsChip\` usages to get a pill, and do not fork a component for the radius.
- \`shape="default"\` (4px) stays the default: use \`round\` only to match a surface whose other
  tokens are already round.
				`,
			},
		},
	},
	argTypes: {
		label: {
			control: 'text',
			description: 'The label text to display in the tag',
		},
		value: {
			control: 'text',
			description:
				'Value rendered after the label. Required for the `key-value`, `operator-filter` and `query-filter` variants',
		},
		size: {
			control: 'select',
			options: tagSizes,
			description: 'Size of the tag',
		},
		variant: {
			control: 'select',
			options: tagVariants,
			description: 'Variant of the tag',
		},
		shape: {
			control: 'select',
			options: tagShapes,
			description: 'Border radius of the tag: `default` (4px) or `round` (pill)',
		},
		warning: {
			control: 'boolean',
			description: 'Whether to render a trailing warning dot',
		},
		onExpandClick: {
			description: 'Function called when the expand chevron is clicked. Providing it renders the chevron',
		},
		selected: {
			control: 'boolean',
			description: 'Whether the tag is in a selected state',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the tag is disabled',
		},
		onClick: {
			action: 'changed',
			description: 'Function called when clicked',
		},
		className: {
			table: { disable: true },
			control: false,
		},
		style: {
			table: { disable: true },
			control: false,
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof DsTag>;

export const Default: Story = {
	args: {
		label: 'Default Tag',
	},
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Tag',
		onClick: fn(),
	},
};

export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [deleted, setDeleted] = useState(false);
		const [selected, setSelected] = useState(true);

		if (deleted) {
			return <DsTypography variant="body-md-reg">Poof! Deleted!</DsTypography>;
		}

		return (
			<DsTag
				selected={selected}
				label="Controlled"
				onDelete={() => setDeleted(true)}
				onClick={() => setSelected(!selected)}
			/>
		);
	},
};

export const Include: Story = {
	args: {
		label: 'Include Tag',
		variant: 'include',
		onDelete: fn(),
	},
};

export const Exclude: Story = {
	args: {
		label: 'Exclude Tag',
		variant: 'exclude',
		onDelete: fn(),
	},
};

export const Small: Story = {
	args: {
		label: 'Small Tag',
		size: 'small',
	},
};

/**
 * Use the `key-value` variant to display a labeled attribute, e.g. `Category: Networking`.
 * The `label` is the bold key (`--font-main`); `value` is the secondary-colored value
 * (`--font-secondary`). The colon is appended automatically — pass `label="Category"`, not
 * `label="Category:"`.
 */
export const KeyValue: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
	},
};

export const KeyValueSelected: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		selected: true,
		onClick: fn(),
	},
};

export const KeyValueDisabled: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		disabled: true,
	},
};

export const KeyValueWithDelete: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		onDelete: fn(),
	},
};

export const KeyValueSmall: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		size: 'small',
	},
};

/**
 * Use the `operator-filter` variant for a `field ≠ value` filter chip. The comparison control is
 * yours: pass a fully wired `DsSelect` (or `DsDropdownMenu`) through `slots.operator` so the tag
 * stays a layout primitive and the operator set can follow the field's type. Clicks and keystrokes
 * inside the slot never reach the tag's own `onClick` / delete shortcuts.
 *
 * The tag cannot disable a node it does not own, so `disabled` leaves a slotted control live —
 * pass `disabled` to the control as well.
 */
export const OperatorFilter: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [operator, setOperator] = useState('ne');

		return (
			<DsTag
				variant="operator-filter"
				label="Latency"
				value="120 ms"
				slots={{
					operator: (
						<DsSelect
							size="small"
							value={operator}
							onValueChange={setOperator}
							options={[
								{ label: '=', value: 'eq' },
								{ label: '≠', value: 'ne' },
								{ label: '>', value: 'gt' },
								{ label: '<', value: 'lt' },
							]}
						/>
					),
				}}
			/>
		);
	},
};

/**
 * The same variant at `size="small"`. Size the slotted control to match — a `small` `DsSelect`
 * inside a `small` tag.
 */
export const OperatorFilterSmall: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [operator, setOperator] = useState('ne');

		return (
			<DsTag
				variant="operator-filter"
				label="Latency"
				value="120 ms"
				size="small"
				slots={{
					operator: (
						<DsSelect
							size="small"
							value={operator}
							onValueChange={setOperator}
							options={[
								{ label: '=', value: 'eq' },
								{ label: '≠', value: 'ne' },
								{ label: '>', value: 'gt' },
								{ label: '<', value: 'lt' },
							]}
						/>
					),
				}}
			/>
		);
	},
};

/**
 * `slots.operator` is optional. With no operator the tag renders no wrapper for it, so the layout
 * reserves no gap for a control that is not there — useful while the operator is still being
 * resolved, or for a filter whose comparison is implicit.
 */
export const OperatorFilterWithoutOperator: Story = {
	args: {
		variant: 'operator-filter',
		label: 'Latency',
		value: '120 ms',
	},
};

/**
 * Use the `query-filter` variant for a drill-down path, e.g. `Region › Site`. The emphasis is
 * inverted compared with `key-value`: the leaf (`value`) is the semi-bold segment the user is
 * looking at, and `label` is the regular-weight context it came from.
 */
export const QueryFilter: Story = {
	args: {
		variant: 'query-filter',
		label: 'Region',
		value: 'us-east-1',
	},
};

export const QueryFilterSmall: Story = {
	args: {
		variant: 'query-filter',
		label: 'Region',
		value: 'us-east-1',
		size: 'small',
	},
};

/**
 * `shape="round"` swaps the 4px radius for a pill on any variant at any size. Reach for it to match
 * a surface whose other tokens are round, or when migrating a deprecated `DsChip` — it is the same
 * pill shape that component used.
 */
export const Round: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		shape: 'round',
	},
};

export const RoundSmall: Story = {
	args: {
		label: 'Round Tag',
		shape: 'round',
		size: 'small',
	},
};

/**
 * `warning` marks a tag whose value needs attention — an out-of-range threshold, a filter that
 * matches nothing. The dot is presentation plus an accessible name only; wrap the tag in
 * `DsTooltip` and own the copy yourself.
 */
export const Warning: Story = {
	args: {
		variant: 'query-filter',
		label: 'Region',
		value: 'us-east-1',
		warning: true,
	},
};

/**
 * Override the dot's accessible name through `locale.warningAriaLabel` so screen-reader users hear
 * what is wrong instead of a bare "Warning".
 */
export const WarningLocalized: Story = {
	args: {
		variant: 'key-value',
		label: 'Threshold',
		value: '95%',
		warning: true,
		locale: { warningAriaLabel: 'Threshold is above the configured limit' },
	},
};

/**
 * Passing `onExpandClick` renders the chevron — the same contract as `onDelete`. The tag keeps no
 * expanded state, so the consumer decides what the chevron reveals; `disabled` suppresses it.
 */
export const Expandable: Story = {
	args: {
		variant: 'operator-filter',
		label: 'Latency',
		value: '120 ms',
		onExpandClick: fn(),
	},
};

export const ExpandableSmall: Story = {
	args: {
		label: 'Expandable Tag',
		size: 'small',
		warning: true,
		onExpandClick: fn(),
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Tag',
		selected: true,
		disabled: true,
		onClick: fn(),
		onDelete: fn(),
	},
};

export const CustomIcon: Story = {
	args: {
		label: 'Custom Icon Tag',
		variant: 'include',
		slots: {
			icon: <DsIcon icon="star" size="tiny" />,
		},
	},
};
