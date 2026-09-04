import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsFilterStatusIcon } from './ds-filter-status-icon';
import { filterStatuses } from './ds-filter-status-icon.types';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsFilterStatusIcon> = {
	title: 'Components/FilterStatusIcon',
	component: DsFilterStatusIcon,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		status: {
			control: 'select',
			options: filterStatuses,
			description: 'The filter status type',
		},
		active: {
			control: 'boolean',
			description: 'Whether the status icon is active or non-active',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFilterStatusIcon>;

/** Active running status icon — the default state for a toggled-on filter button. */
export const Default: Story = {
	args: {
		status: 'running',
		active: true,
	},
};

/** Every status in both active and non-active states, side by side for comparison. */
export const All: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-md" color="secondary">
					Active
				</DsTypography>
				<DsStack direction="row" gap="var(--lg)" alignItems="center">
					{filterStatuses.map((status) => (
						<DsStack key={`active-${status}`} direction="column" gap="var(--2xs)" alignItems="center">
							<DsFilterStatusIcon status={status} active />
							<DsTypography variant="body-sm-reg" color="secondary">
								{status}
							</DsTypography>
						</DsStack>
					))}
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-md" color="secondary">
					Non-active
				</DsTypography>
				<DsStack direction="row" gap="var(--lg)" alignItems="center">
					{filterStatuses.map((status) => (
						<DsStack key={`inactive-${status}`} direction="column" gap="var(--2xs)" alignItems="center">
							<DsFilterStatusIcon status={status} active={false} />
							<DsTypography variant="body-sm-reg" color="secondary">
								{status}
							</DsTypography>
						</DsStack>
					))}
				</DsStack>
			</DsStack>
		</DsStack>
	),
};
