import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsButtonV3 } from '../ds-button-v3';
import { DsTooltip } from '../ds-tooltip';
import { DsCodeInput } from './index';
import { codeInputSizes } from './ds-code-input.types';

const meta: Meta<typeof DsCodeInput> = {
	title: 'Components/CodeInput',
	component: DsCodeInput,
	parameters: { layout: 'padded' },
	argTypes: {
		size: { control: 'select', options: codeInputSizes },
		locale: { table: { disable: true } },
		slots: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsCodeInput>;

/**
 * Empty field. The trailing button opens a larger overlay with search; both
 * viewports edit the same document.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter query',
	},
};

/**
 * A multiline value. While collapsed and unfocused the field shows logical line 1
 * and how many additional lines are hidden. Expand to review the full query.
 */
export const WithValue: Story = {
	args: {
		defaultValue:
			'Status = Active AND trigger = Scheduled\nAND site IN ("tel-aviv", "tokyo", "haifa")\nAND lastSeen > now() - 24h',
	},
};

/**
 * Open on mount. Type in the search box to highlight every occurrence — matching is
 * literal and case-insensitive, so `status` marks `Status` too. The compact field stays
 * visible as a one-line echo of the line that contains the caret.
 */
export const Expanded: Story = {
	args: {
		defaultExpanded: true,
		defaultValue:
			'Status = Active AND trigger = Scheduled\nAND site IN ("tel-aviv", "tokyo", "haifa")\nAND lastSeen > now() - 24h',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		defaultValue: 'Status = Active AND trigger = Scheduled',
	},
};

/**
 * The largest field chrome. The overlay still matches the field width.
 */
export const Large: Story = {
	args: {
		size: 'large',
		defaultValue: 'Status = Active AND trigger = Scheduled',
	},
};

/**
 * Read-only still expands, so a long value stays searchable, but neither surface accepts
 * edits.
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true,
		defaultValue: 'Status = Active AND trigger = Scheduled',
	},
};

/**
 * Disabled still expands, so a long value stays searchable, but neither surface accepts
 * edits.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: 'Status = Active\nAND trigger = Scheduled',
	},
};

/**
 * The component owns only the expand button. Anything else in the trailing slot — a
 * syntax-help tooltip, for instance — is passed by the consumer and renders after it.
 */
export const WithHelpAdornment: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => (
		<DsCodeInput
			defaultValue="Status = Active AND trigger = Scheduled"
			slots={{
				endAdornment: (
					<DsTooltip content="Query syntax">
						<DsButtonV3 variant="tertiary" size="small" icon="help" aria-label="Query syntax" />
					</DsTooltip>
				),
			}}
		/>
	),
};

/**
 * The parent owns the value via `value` and `onValueChange`. Use this when other UI
 * needs to react to edits.
 */
export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState('Status = Active AND trigger = Scheduled');

		return <DsCodeInput value={value} onValueChange={setValue} />;
	},
};

/**
 * Override built-in strings with `locale`. Omitted keys keep their defaults.
 */
export const Localized: Story = {
	args: {
		placeholder: 'Enter query',
		locale: {
			expand: 'Open editor',
			collapse: 'Close editor',
			searchPlaceholder: 'Find in code',
		},
	},
};
