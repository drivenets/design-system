import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import DsStatusBadge from './ds-status-badge';
import { type DsStatus, dsStatuses, statusBadgeSizes } from './ds-status-badge.types';
import type { IconType } from '../ds-icon';
import styles from './ds-status-badge.stories.module.scss';

const meta: Meta<typeof DsStatusBadge> = {
	title: 'Design System/StatusBadge',
	component: DsStatusBadge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsStatusBadge>;

export const Default: Story = {
	args: {
		icon: 'check_circle',
		status: 'active',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Verify component renders correctly
		const component = canvas.getByText('active');
		await expect(component).toBeTruthy();
	},
};

export const All: Story = {
	render: () => {
		const statuses: Record<DsStatus, IconType> = {
			active: 'check_circle',
			running: 'change_circle',
			pending: 'pause_circle',
			draft: 'stylus_note',
			inactive: 'stop_circle',
			warning: 'warning',
			failed: 'cancel',
		};

		return (
			<div className={styles.storiesContainer}>
				<div className={styles.storiesRow}>
					{/* Filled variants - Default */}
					<div>
						<div className={styles.sectionTitle}>Filled</div>
						<div className={styles.storiesList}>
							{dsStatuses.map((status) => (
								<DsStatusBadge key={`filled-24-${status}`} icon={statuses[status]} status={status} />
							))}
						</div>
					</div>

					{/* Ghost variants - Default */}
					<div>
						<div className={styles.sectionTitle}>Ghost</div>
						<div className={styles.storiesList}>
							{dsStatuses.map((status) => (
								<DsStatusBadge
									key={`ghost-24-${status}`}
									icon={statuses[status]}
									status={status}
									ghost={true}
								/>
							))}
						</div>
					</div>
				</div>

				<div className={styles.storiesRow}>
					{/* Filled variants - Small */}
					<div>
						<div className={styles.sectionTitle}>Filled - Small</div>
						<div className={styles.storiesList}>
							{dsStatuses.map((status) => (
								<DsStatusBadge
									key={`filled-20-${status}`}
									icon={statuses[status]}
									status={status}
									size="small"
								/>
							))}
						</div>
					</div>

					{/* Ghost variants - Small */}
					<div>
						<div className={styles.sectionTitle}>Ghost - Small</div>
						<div className={styles.storiesList}>
							{dsStatuses.map((status) => (
								<DsStatusBadge
									key={`ghost-20-${status}`}
									icon={statuses[status]}
									status={status}
									ghost={true}
									size="small"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	},
};
