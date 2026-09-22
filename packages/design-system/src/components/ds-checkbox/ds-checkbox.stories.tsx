import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsCheckbox } from './index';
import { DsCheckboxGroup, useCheckboxSelectAll } from '../ds-checkbox-group';
import { DsPinToggle } from '../ds-pin-toggle';
import { DsStack } from '../ds-stack';
import styles from './ds-checkbox.stories.module.scss';
import { checkboxSizes, checkboxVariants } from './ds-checkbox.types';

const meta: Meta<typeof DsCheckbox> = {
	title: 'Components/Checkbox',
	component: DsCheckbox,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: checkboxVariants,
		},
		size: {
			control: 'select',
			options: checkboxSizes,
			description: 'Row padding only — typography and control size are identical across sizes',
		},
		checked: {
			control: 'radio',
			options: [true, false, 'indeterminate'],
			description: 'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`',
		},
		onCheckedChange: {
			description: 'Callback invoked when the checked state changes',
		},
		label: {
			control: 'text',
			description: 'Label for the checkbox',
		},
		labelInfo: {
			control: 'text',
			description: 'Additional label info for the checkbox',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the checkbox, preventing user interaction',
		},
		actions: {
			control: false,
			description: 'Trailing slot for interactive content, rendered outside the checkbox label',
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
type Story = StoryObj<typeof DsCheckbox>;

/**
 * Standalone checkbox with a primary label and supporting info text. Omit
 * `checked` for uncontrolled usage; pair with `onCheckedChange` when the
 * parent owns state.
 */
export const Default: Story = {
	args: {
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
	},
};

/**
 * Controlled checkbox where the parent holds `checked` and updates it via
 * `onCheckedChange`. Use this pattern for forms and settings that sync with
 * external state.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [checked, setChecked] = useState(false);

		return (
			<DsCheckbox
				label="Enable notifications"
				labelInfo="Receive email updates"
				checked={checked}
				onCheckedChange={(newState) => {
					if (typeof newState === 'boolean') {
						setChecked(newState);
					}
				}}
			/>
		);
	},
};

/**
 * Controlled checkbox in indeterminate state. Use when a parent represents a
 * partial selection, such as a "select all" row with only some children
 * checked.
 */
export const Indeterminate: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				label="Enable notifications"
				labelInfo="Receive email updates"
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
};

/**
 * Disabled checkbox that cannot be interacted with. Combine with `checked` or
 * `checked="indeterminate"` to show how each visual state appears when inactive.
 */
export const Disabled: Story = {
	args: {
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
		disabled: true,
		checked: true,
	},
};

export const DisabledStates: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
		},
	},
	render: () => (
		<DsStack gap="var(--3xs)">
			<DsCheckbox label="Enable notifications" labelInfo="Receive email updates" disabled />
			<DsCheckbox label="Enable notifications" labelInfo="Receive email updates" disabled checked />
			<DsCheckbox
				label="Enable notifications"
				labelInfo="Receive email updates"
				disabled
				checked="indeterminate"
			/>
		</DsStack>
	),
};

/**
 * Read-only checkbox displays its state without allowing user changes. Use when
 * the value is informational and must not be toggled inline.
 */
export const ReadOnly: Story = {
	args: {
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
		readOnly: true,
		checked: true,
	},
};

/**
 * Warning variant for checkboxes that need elevated visual attention, such as
 * destructive or high-impact opt-ins.
 */
export const Warning: Story = {
	args: {
		variant: 'warning',
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
	},
};

/**
 * Warning variant in a controlled indeterminate state for partial selections
 * that also need elevated visual attention.
 */
export const WarningIndeterminate: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				variant="warning"
				label="Enable notifications"
				labelInfo="Receive email updates"
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
	},
};

export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
		},
	},
	render: () => (
		<DsStack gap="var(--3xs)">
			<DsCheckbox size="medium" label="Medium" labelInfo="Receive email updates" />
			<DsCheckbox size="large" label="Large" labelInfo="Receive email updates" />
		</DsStack>
	),
};

export const WithActions: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [pinned, setPinned] = useState(false);

		return (
			<DsCheckbox
				label="Enable notifications"
				actions={<DsPinToggle itemLabel="notifications" pinned={pinned} onPinnedChange={setPinned} />}
			/>
		);
	},
};

/**
 * `actions` stays centred on the label row regardless of size or `labelInfo`, so
 * a pinned `large` row lines up with its unpinned neighbors.
 */
export const LargeWithActions: Story = {
	args: {
		size: 'large',
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
		actions: <DsPinToggle itemLabel="notifications" pinned />,
	},
};

export const PinnedFilterList: Story = {
	parameters: {
		layout: 'padded',
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const interfaces = [
			'ge-0/0/0',
			'ge-0/0/1',
			'ge-0/0/2',
			'ge-0/0/3',
			'xe-0/1/0',
			'xe-0/1/1',
			'xe-0/1/2',
			'et-0/2/0',
			'et-0/2/1',
			'et-0/2/2',
			'lo0',
			'bundle-1',
			'bundle-2',
			'mgmt-0',
			'mgmt-1',
		];
		const [pinned, setPinned] = useState<string[]>(['xe-0/1/1', 'lo0']);
		const [selected, setSelected] = useState<string[]>([]);

		const isPinned = (name: string) => pinned.includes(name);

		// Stable partition, so pinning a row lifts it to the top without
		// reshuffling the rows around it.
		const ordered = [...interfaces.filter(isPinned), ...interfaces.filter((name) => !isPinned(name))];

		return (
			<div className={styles.filterList}>
				<DsCheckboxGroup value={selected} onValueChange={setSelected} name="interfaces">
					{ordered.map((name) => (
						<DsCheckbox
							key={name}
							label={name}
							value={name}
							actions={
								<DsPinToggle
									itemLabel={name}
									pinned={isPinned(name)}
									onPinnedChange={(next) =>
										setPinned((current) =>
											next ? [...current, name] : current.filter((pin) => pin !== name),
										)
									}
								/>
							}
						/>
					))}
				</DsCheckboxGroup>
			</div>
		);
	},
};

/**
 * Multi-select checkbox group. Compose `DsCheckbox` children inside
 * `DsCheckboxGroup`, pass each item a `value`, and control selection with
 * `value` / `onValueChange` on the group.
 */
export const Group: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string[]>(['react']);
		const frameworkItems = [
			{ label: 'React', value: 'react' },
			{ label: 'Solid', value: 'solid' },
			{ label: 'Vue', value: 'vue' },
		];

		return (
			<DsCheckboxGroup orientation="vertical" value={value} onValueChange={setValue} name="framework">
				{frameworkItems.map((item) => (
					<DsCheckbox key={item.value} label={item.label} value={item.value} />
				))}
			</DsCheckboxGroup>
		);
	},
};

/**
 * Select-all pattern for a checkbox group. Use `useCheckboxSelectAll` from
 * `ds-checkbox-group` to derive the parent checkbox state and toggle every item.
 */
export const SelectAll: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string[]>([]);
		const frameworkItems = [
			{ label: 'React', value: 'react' },
			{ label: 'Solid', value: 'solid' },
			{ label: 'Vue', value: 'vue' },
		];
		const { selectAllState, onSelectAllChange } = useCheckboxSelectAll({
			value,
			allValues: frameworkItems.map((item) => item.value),
			onValueChange: setValue,
		});

		return (
			<DsStack gap="var(--3xs)">
				<DsCheckbox label="Select all" checked={selectAllState} onCheckedChange={onSelectAllChange} />
				<DsCheckboxGroup value={value} onValueChange={setValue} name="framework">
					{frameworkItems.map((item) => (
						<DsCheckbox key={item.value} label={item.label} value={item.value} />
					))}
				</DsCheckboxGroup>
			</DsStack>
		);
	},
};
