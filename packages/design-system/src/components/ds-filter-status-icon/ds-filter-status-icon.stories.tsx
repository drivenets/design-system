import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DsFilterStatusIcon } from './ds-filter-status-icon';
import { filterStatuses } from './ds-filter-status-icon.types';
import styles from './ds-filter-status-icon.stories.module.scss';

const meta: Meta<typeof DsFilterStatusIcon> = {
	title: 'Design System/FilterStatusIcon',
	component: DsFilterStatusIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: filterStatuses,
			description: 'The workflow status type',
		},
		active: {
			control: 'boolean',
			description: 'Whether the status icon is active or non-active',
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
type Story = StoryObj<typeof DsFilterStatusIcon>;

export const Default: Story = {
	args: {
		status: 'running',
		active: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const icon = canvas.getByLabelText(/running status/i);
		await expect(icon).toBeInTheDocument();
		await expect(icon).toHaveAccessibleName('running status');
	},
};

export const All: Story = {
	render: () => {
		return (
			<div className={styles.storiesContainer}>
				<div className={styles.row}>
					<div className={styles.label}></div>
					{filterStatuses.map((status) => (
						<div key={status} className={styles.label}>
							{status}
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label}>active</div>
					{filterStatuses.map((status) => (
						<div key={`active-${status}`} className={styles.cell}>
							<DsFilterStatusIcon status={status} active />
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label}>non-active</div>
					{filterStatuses.map((status) => (
						<div key={`inactive-${status}`} className={styles.cell}>
							<DsFilterStatusIcon status={status} active={false} />
						</div>
					))}
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check active icons
		const runningIcon = canvas.getByLabelText('running status');
		await expect(runningIcon).toBeInTheDocument();

		const warningIcon = canvas.getByLabelText('warning status');
		await expect(warningIcon).toBeInTheDocument();

		const failedIcon = canvas.getByLabelText('failed status');
		await expect(failedIcon).toBeInTheDocument();

		const pausedIcon = canvas.getByLabelText('paused status');
		await expect(pausedIcon).toBeInTheDocument();

		// Check inactive icons
		const inactiveRunning = canvas.getByLabelText('running status (inactive)');
		await expect(inactiveRunning).toBeInTheDocument();

		const inactiveWarning = canvas.getByLabelText('warning status (inactive)');
		await expect(inactiveWarning).toBeInTheDocument();

		const inactiveFailed = canvas.getByLabelText('failed status (inactive)');
		await expect(inactiveFailed).toBeInTheDocument();

		const inactivePaused = canvas.getByLabelText('paused status (inactive)');
		await expect(inactivePaused).toBeInTheDocument();
	},
};
