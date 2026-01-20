import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DsAvatarGroup } from './ds-avatar-group';
import styles from './ds-avatar-group.stories.module.scss';

const meta: Meta<typeof DsAvatarGroup> = {
	title: 'Design System/Avatar Group',
	component: DsAvatarGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type GroupStory = StoryObj<typeof DsAvatarGroup>;

const sampleAvatars = [
	{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
	{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
	{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
	{ name: 'Diana Prince', src: 'https://i.pravatar.cc/150?u=diana' },
	{ name: 'Edward Norton', src: 'https://i.pravatar.cc/150?u=edward' },
	{ name: 'Fiona Gallagher', src: 'https://i.pravatar.cc/150?u=fiona' },
	{ name: 'George Miller', src: 'https://i.pravatar.cc/150?u=george' },
	{ name: 'Hannah Abbott', src: 'https://i.pravatar.cc/150?u=hannah' },
];

export const Default: GroupStory = {
	args: {
		avatars: sampleAvatars,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that overflow indicator is present (8 total - 5 max = +3)
		const overflowIndicator = canvas.getByText('+3');
		await expect(overflowIndicator).toBeInTheDocument();

		// Hover over the +3 to check tooltip with names
		await userEvent.hover(overflowIndicator);

		// Check that hidden avatar names appear in tooltip (tooltips render in document.body)
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent('Fiona Gallagher');
		await expect(tooltip).toHaveTextContent('George Miller');
		await expect(tooltip).toHaveTextContent('Hannah Abbott');
	},
};

export const Variants: GroupStory = {
	render: () => (
		<div className={styles.variantsContainer}>
			<div>
				<h3>Default Group (max 5)</h3>
				<DsAvatarGroup avatars={sampleAvatars} />
			</div>
			<div>
				<h3>Small Rounded Group</h3>
				<DsAvatarGroup avatars={sampleAvatars} size="sm" type="rounded" />
			</div>
			<div>
				<h3>Large Group (max 3)</h3>
				<DsAvatarGroup avatars={sampleAvatars} size="lg" max={3} />
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that overflow indicators are present
		const overflowIndicators = canvas.getAllByText(/^\+\d+$/);
		await expect(overflowIndicators.length).toBeGreaterThan(0);
	},
};
