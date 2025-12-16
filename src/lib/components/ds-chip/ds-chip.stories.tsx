import type { Meta, StoryObj } from '@storybook/react-vite';
import DsChip from './ds-chip';
import { chipSizes } from './ds-chip.types';

const meta: Meta<typeof DsChip> = {
	title: 'Design System/Chip',
	component: DsChip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
