import type { Meta, StoryObj } from '@storybook/react-vite';
import DsSystemStatus from './ds-system-status';
import { systemStatuses } from './ds-system-status.types';

/**
 * @deprecated This component is deprecated. Use `DsStatusBadge` instead.
 * @see {@link ../ds-status-badge/ds-status-badge.stories} for examples of the replacement component.
 */
const meta: Meta<typeof DsSystemStatus> = {
	title: 'Design System/System Status (Deprecated)',
	component: DsSystemStatus,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'**Deprecated**: This component is deprecated. Please use `DsStatusBadge` instead. See the StatusBadge stories for the replacement component.',
			},
		},
	},
	tags: ['autodocs', 'deprecated'],
	argTypes: {
		status: {
			control: { type: 'select' },
			options: systemStatuses,
		},
		label: {
			control: 'text',
			description: 'Custom label text (optional)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSystemStatus>;

export const Default: Story = {
	args: {
		status: 'healthy',
	},
};

export const CustomLabel: Story = {
	args: {
		status: 'error',
		label: 'Critical Error',
	},
};
