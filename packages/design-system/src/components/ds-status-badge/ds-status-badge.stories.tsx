import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsStatusBadge } from './index';
import { type DsStatus, dsStatuses, statusBadgeSizes } from './ds-status-badge.types';
import type { IconType } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsStatusBadge> = {
	title: 'Components/StatusBadge',
	component: DsStatusBadge,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		icon: {
			control: 'text',
			description: 'Icon to display in the badge',
		},
		status: {
			control: 'select',
			options: dsStatuses,
			description: 'Status type of the badge',
		},
		label: {
			control: 'text',
			description: 'Optional label to display instead of the default status text',
		},
		ghost: {
			control: 'boolean',
			description: 'Whether the badge should use ghost style (light background)',
		},
		size: {
			control: 'select',
			options: statusBadgeSizes,
			description: 'Size of the status badge',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsStatusBadge>;

/** Standard filled badge — pair a status with a matching icon. */
export const Default: Story = {
	args: {
		icon: 'check_circle',
		status: 'active',
	},
};

/** Ghost style uses a light background for lower-emphasis contexts like dense tables. */
export const Ghost: Story = {
	args: {
		icon: 'check_circle',
		status: 'active',
		ghost: true,
	},
};

/** Small size for compact rows and tight layouts. */
export const Small: Story = {
	args: {
		icon: 'check_circle',
		status: 'active',
		size: 'small',
	},
};

/** Every status across filled/ghost styles and both sizes, for visual comparison. */
export const All: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => {
		const iconForStatus: Record<DsStatus, IconType> = {
			active: 'check_circle',
			running: 'change_circle',
			pending: 'pause_circle',
			draft: 'stylus_note',
			inactive: 'stop_circle',
			warning: 'warning',
			failed: 'cancel',
		};

		return (
			<DsStack direction="column" gap="var(--xl)">
				<DsStack direction="row" gap="var(--3xl)">
					<DsStack direction="column" gap="var(--sm)">
						<DsTypography variant="body-sm-md" color="secondary">
							Filled
						</DsTypography>
						<DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
							{dsStatuses.map((status) => (
								<DsStatusBadge key={`filled-${status}`} icon={iconForStatus[status]} status={status} />
							))}
						</DsStack>
					</DsStack>

					<DsStack direction="column" gap="var(--sm)">
						<DsTypography variant="body-sm-md" color="secondary">
							Ghost
						</DsTypography>
						<DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
							{dsStatuses.map((status) => (
								<DsStatusBadge key={`ghost-${status}`} icon={iconForStatus[status]} status={status} ghost />
							))}
						</DsStack>
					</DsStack>
				</DsStack>

				<DsStack direction="row" gap="var(--3xl)">
					<DsStack direction="column" gap="var(--sm)">
						<DsTypography variant="body-sm-md" color="secondary">
							Filled — Small
						</DsTypography>
						<DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
							{dsStatuses.map((status) => (
								<DsStatusBadge
									key={`filled-small-${status}`}
									icon={iconForStatus[status]}
									status={status}
									size="small"
								/>
							))}
						</DsStack>
					</DsStack>

					<DsStack direction="column" gap="var(--sm)">
						<DsTypography variant="body-sm-md" color="secondary">
							Ghost — Small
						</DsTypography>
						<DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
							{dsStatuses.map((status) => (
								<DsStatusBadge
									key={`ghost-small-${status}`}
									icon={iconForStatus[status]}
									status={status}
									ghost
									size="small"
								/>
							))}
						</DsStack>
					</DsStack>
				</DsStack>
			</DsStack>
		);
	},
};
