import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsToggleFilterData } from './index';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsToggleFilterData> = {
	title: 'Components/ToggleFilterData',
	component: DsToggleFilterData,
	// Internal part of the filters component, not exported from the package, so it stays out of the
	// MCP manifest that advertises the public API.
	tags: ['!manifest'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
A data pill that toggles on and off, pairing a \`label\` with its \`value\`, used in a filter row
above a table or list.

**Internal component.** Per design, the pill is always part of the filters component and is not
exported from \`@drivenets/design-system\`. These stories document it for internal review; consumers
get it through filters, never directly.

**Controlled only.** \`active\` is required and the pill keeps no state of its own: it reports the
next value through \`onActiveChange\` and re-renders from whatever the parent decides. Selection
rules — single-select, multi-select, clearing — belong to the row that owns the pills.

**Hover and focus are CSS states, not props.** The pill is a real \`<button type="button">\`, so
\`aria-pressed\`, Enter/Space activation, the disabled state and the focus ring are all native.
\`aria-pressed\` stays exposed while \`disabled\`, so a greyed pill still announces whether it is on.

There is no group component: \`DsToggleFiltersGroupV1\` is a plain row of pills — see the
**Filters Group** story.
				`,
			},
		},
	},
	argTypes: {
		label: {
			control: 'text',
			description: 'Emphasized leading segment naming the data the pill filters on',
		},
		value: {
			control: 'text',
			description: 'Secondary-colored trailing segment, typically a count',
		},
		active: {
			control: 'boolean',
			description: 'Whether the pill is toggled on. Controlled — surfaced as `aria-pressed`',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the pill is disabled. Neither callback fires while set',
		},
		onActiveChange: {
			action: 'activeChange',
			description: 'Called on click and on keyboard activation with the next `active` value',
		},
		onClick: {
			action: 'click',
			description: 'Called with the raw click event, before `onActiveChange`',
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
type Story = StoryObj<typeof DsToggleFilterData>;

/**
 * The resting pill: white background, grey border. This is the state a filter row starts in, before
 * the user narrows anything down.
 */
export const Default: Story = {
	args: {
		label: 'Toggle',
		value: '#',
		active: false,
	},
};

/**
 * The toggled-on pill. Reach for `active` to show that the filter it represents is currently
 * applied — the blue border and tinted background read as "this is narrowing the list".
 */
export const Active: Story = {
	args: {
		label: 'Toggle',
		value: '#',
		active: true,
	},
};

/**
 * Use `disabled` when the filter exists but cannot be applied yet — an empty bucket, or a dimension
 * the current query does not expose. The pill drops out of the tab order and neither callback fires.
 */
export const Disabled: Story = {
	args: {
		label: 'Toggle',
		value: '#',
		active: false,
		disabled: true,
	},
};

/**
 * The minimal wiring: hold `active` in the parent and feed it back through `onActiveChange`.
 */
export const Controlled: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: () => {
		const [active, setActive] = useState(false);

		return <DsToggleFilterData label="Errors" value="12" active={active} onActiveChange={setActive} />;
	},
};

/**
 * Single-select row: the parent holds the active id, so toggling one pill clears the others.
 * Selection coordination lives here rather than in the pill, which is why `active` is a required
 * prop instead of an internal state.
 */
export const ControlledSingleSelect: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: () => {
		const [activeId, setActiveId] = useState<string | null>('errors');

		return (
			<DsStack gap="var(--xs)" alignItems="center" flexWrap="wrap">
				{[
					{ id: 'errors', label: 'Errors', value: '12' },
					{ id: 'warnings', label: 'Warnings', value: '48' },
					{ id: 'healthy', label: 'Healthy', value: '1,204' },
				].map((item) => (
					<DsToggleFilterData
						key={item.id}
						label={item.label}
						value={item.value}
						active={activeId === item.id}
						onActiveChange={(next) => setActiveId(next ? item.id : null)}
					/>
				))}
			</DsStack>
		);
	},
};

/**
 * `DsToggleFiltersGroupV1` with `type=data` is a plain row of pills — there is no group component
 * to import. Multi-select is the parent tracking a set of active ids; each pill toggles
 * independently, and a pill whose bucket is empty is passed `disabled`.
 */
export const FiltersGroup: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: () => {
		const [activeIds, setActiveIds] = useState<string[]>(['region']);

		const toggle = (id: string, next: boolean) =>
			setActiveIds((ids) => (next ? [...ids, id] : ids.filter((current) => current !== id)));

		return (
			<DsStack gap="var(--xs)" alignItems="center" flexWrap="wrap">
				{[
					{ id: 'region', label: 'Region', value: '3' },
					{ id: 'tenant', label: 'Tenant', value: '17' },
					{ id: 'interface', label: 'Interface', value: '92' },
					{ id: 'archived', label: 'Archived', value: '0', disabled: true },
				].map((item) => (
					<DsToggleFilterData
						key={item.id}
						label={item.label}
						value={item.value}
						active={activeIds.includes(item.id)}
						disabled={item.disabled}
						onActiveChange={(next) => toggle(item.id, next)}
					/>
				))}
			</DsStack>
		);
	},
};
