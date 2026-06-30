import type { Meta, StoryObj } from '@storybook/react-vite';

import { DsProgressTaskBar } from './index';
import styles from './ds-progress-task-bar.stories.module.scss';

const meta: Meta<typeof DsProgressTaskBar> = {
	title: 'Components/ProgressTaskBar',
	component: DsProgressTaskBar,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className={styles.wrapper}>
				<Story />
			</div>
		),
	],
	argTypes: {
		completed: { control: { type: 'number', min: 0 } },
		running: { control: { type: 'number', min: 0 } },
		failed: { control: { type: 'number', min: 0 } },
		total: { control: { type: 'number', min: 0 } },
		locale: { control: 'object' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsProgressTaskBar>;

export const Default: Story = {
	args: {
		completed: 300,
		running: 100,
		failed: 100,
		total: 1000,
	},
};

export const Zero: Story = {
	args: {
		completed: 0,
		running: 0,
		failed: 0,
		total: 999,
	},
};

export const RunningOnly: Story = {
	args: {
		running: 300,
		total: 1000,
	},
};

export const CompletedAndFailed: Story = {
	args: {
		completed: 300,
		failed: 100,
		total: 1000,
	},
};

export const AllStatuses: Story = {
	args: {
		completed: 300,
		running: 100,
		failed: 100,
		total: 1000,
	},
};

export const FullyDone: Story = {
	args: {
		completed: 1000,
		total: 1000,
	},
};

export const MinWidth: Story = {
	args: {
		running: 3,
		total: 999,
	},
};

export const AbbreviatedValues: Story = {
	args: {
		completed: 1_000_000,
		running: 125_000,
		failed: 9_500,
		total: 1_400_000,
	},
};

/** Status tooltips and the total label are overridable through `locale`. */
export const Localized: Story = {
	args: {
		completed: 300,
		running: 100,
		failed: 100,
		total: 1000,
		locale: {
			// cspell:disable-next-line
			completed: 'Terminé',
			// cspell:disable-next-line
			running: 'En cours',
			// cspell:disable-next-line
			failed: 'Échoué',
			total: (value) => `sur ${value}`,
		},
	},
};
