import type { Meta, StoryObj } from '@storybook/react-vite';
import DsChip from './ds-chip';
import { chipSizes } from './ds-chip.types';

/**
 * @deprecated This component is deprecated. Use `DsTag` instead.
 * @see {@link ../ds-tag/ds-tag.stories} for examples of the replacement component.
 */
const meta: Meta<typeof DsChip> = {
	title: 'Design System/Chip (Deprecated)',
	component: DsChip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'**Deprecated**: This component is deprecated. Please use `DsTag` instead. See the Tag stories for the replacement component.',
			},
		},
	},
	tags: ['autodocs', 'deprecated'],
	argTypes: {
		label: {
			control: 'text',
			description: 'The label text to display in the chip',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when component is clicked',
		},
		onDelete: {
			action: 'deleted',
			description: 'Function called when delete icon is clicked',
		},
		size: {
			control: 'select',
			options: chipSizes,
			description: 'Size of the chip',
		},
		deleteIcon: {
			control: false,
			description: 'Custom delete icon element',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsChip>;

export const Default: Story = {
	args: {
		label: 'Default Label',
	},
};
