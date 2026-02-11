import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DsWfStatusIcon } from './ds-wf-status-icon';
import { wfStatuses } from './ds-wf-status-icon.types';
import styles from './ds-wf-status-icon.stories.module.scss';

const meta: Meta<typeof DsWfStatusIcon> = {
	title: 'Design System/WfStatusIcon',
	component: DsWfStatusIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: wfStatuses,
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
type Story = StoryObj<typeof DsWfStatusIcon>;

export const Default: Story = {
	args: {
		status: 'running',
		active: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const icon = canvas.getByRole('img', { name: /running status/i });
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
					{wfStatuses.map((status) => (
						<div key={status} className={styles.label}>
							{status}
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label}>active</div>
					{wfStatuses.map((status) => (
						<div key={`active-${status}`} className={styles.cell}>
							<DsWfStatusIcon status={status} active />
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label}>non-active</div>
					{wfStatuses.map((status) => (
						<div key={`inactive-${status}`} className={styles.cell}>
							<DsWfStatusIcon status={status} active={false} />
						</div>
					))}
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check active icons
		const runningIcon = canvas.getByRole('img', { name: 'running status' });
		await expect(runningIcon).toBeInTheDocument();

		const warningIcon = canvas.getByRole('img', { name: 'warning status' });
		await expect(warningIcon).toBeInTheDocument();

		const failedIcon = canvas.getByRole('img', { name: 'failed status' });
		await expect(failedIcon).toBeInTheDocument();

		const pausedIcon = canvas.getByRole('img', { name: 'paused status' });
		await expect(pausedIcon).toBeInTheDocument();

		// Check inactive icons
		const inactiveRunning = canvas.getByRole('img', { name: 'running status (inactive)' });
		await expect(inactiveRunning).toBeInTheDocument();

		const inactiveWarning = canvas.getByRole('img', { name: 'warning status (inactive)' });
		await expect(inactiveWarning).toBeInTheDocument();

		const inactiveFailed = canvas.getByRole('img', { name: 'failed status (inactive)' });
		await expect(inactiveFailed).toBeInTheDocument();

		const inactivePaused = canvas.getByRole('img', { name: 'paused status (inactive)' });
		await expect(inactivePaused).toBeInTheDocument();
	},
};
