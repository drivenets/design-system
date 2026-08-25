import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsToggle from './ds-toggle';
import { toggleSizes } from './ds-toggle.types';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsToggle> = {
	title: 'Components/Toggle',
	component: DsToggle,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A switch for toggling a single boolean setting on or off, with an optional label and supporting info text.',
			},
		},
	},
	argTypes: {
		checked: {
			control: 'boolean',
			description: "Whether it's checked or not",
		},
		label: {
			control: 'text',
			description: 'The label text to display next to the toggle',
		},
		labelInfo: {
			control: 'text',
			description: 'The label info text to display below the label',
		},
		size: {
			control: 'select',
			options: toggleSizes,
			description: 'Size of the toggle',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the toggle is disabled',
		},
		className: { table: { disable: true }, control: false },
		style: { table: { disable: true }, control: false },
		onChange: { table: { disable: true }, control: false },
		onValueChange: { table: { disable: true }, control: false },
		ref: { table: { disable: true }, control: false },
	},
};

export default meta;
type Story = StoryObj<typeof DsToggle>;

/**
 * The default toggle with a label and supporting info text. Omit `checked` for
 * uncontrolled usage.
 */
export const Default: Story = {
	args: {
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
	},
};

/**
 * Controlled toggle where the parent owns `checked` and updates it via
 * `onValueChange`. Use for settings that sync with external state.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [checked, setChecked] = useState(true);

		return (
			<DsToggle
				label="Enable notifications"
				labelInfo="Receive email updates"
				checked={checked}
				onValueChange={setChecked}
			/>
		);
	},
};

/**
 * Compact size for dense settings lists and toolbars.
 */
export const Small: Story = {
	args: {
		size: 'small',
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
	},
};

/**
 * Disabled toggle that cannot be interacted with. Combine with `checked` to
 * show either inactive state.
 */
export const Disabled: Story = {
	args: {
		label: 'Enable notifications',
		labelInfo: 'Receive email updates',
		disabled: true,
	},
};

/**
 * Provide `children` instead of `label` to render a fully custom label, such as
 * styled or composed content.
 */
export const CustomLabel: Story = {
	render: () => (
		<DsToggle size="small">
			<DsTypography variant="body-xs-md" color="action">
				Custom label totally!
			</DsTypography>
		</DsToggle>
	),
};
