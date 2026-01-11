import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DsAvatar } from './ds-avatar';
import { DsAvatarGroup } from './ds-avatar-group';

const meta: Meta<typeof DsAvatar> = {
	title: 'Design System/Avatar',
	component: DsAvatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xsm', 'sm', 'regular', 'md', 'lg', 'xl'],
		},
		type: {
			control: 'radio',
			options: ['circle', 'rounded'],
		},
	},
};

export default meta;

type AvatarStory = StoryObj<typeof DsAvatar>;

export const Default: AvatarStory = {
	args: {
		name: 'John Doe',
		size: 'regular',
		type: 'circle',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar = canvas.getByText('JD'); // Check for initials
		await expect(avatar).toBeInTheDocument();

		// Hover to check tooltip
		await userEvent.hover(avatar);
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent('John Doe');
	},
};

export const WithImage: AvatarStory = {
	args: {
		name: 'Jane Smith',
		src: 'https://i.pravatar.cc/150?u=jane',
		size: 'regular',
		type: 'circle',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const image = await canvas.findByRole('img', { name: 'Jane Smith' });
		await expect(image).toBeInTheDocument();
		await expect(image).toHaveAttribute('src', 'https://i.pravatar.cc/150?u=jane');
	},
};

export const Sizes: AvatarStory = {
	render: (args) => (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
			<DsAvatar {...args} size="xsm" name="XSmall" />
			<DsAvatar {...args} size="sm" name="Small" />
			<DsAvatar {...args} size="regular" name="Regular" />
			<DsAvatar {...args} size="md" name="Medium" />
			<DsAvatar {...args} size="lg" name="Large" />
			<DsAvatar {...args} size="xl" name="XLarge" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Check all sizes are rendered
		await expect(canvas.getByText('XS')).toBeInTheDocument();
		await expect(canvas.getByText('SM')).toBeInTheDocument();
		await expect(canvas.getByText('RE')).toBeInTheDocument();
		await expect(canvas.getByText('ME')).toBeInTheDocument();
		await expect(canvas.getByText('LA')).toBeInTheDocument();
		await expect(canvas.getByText('XL')).toBeInTheDocument();
	},
};

export const Shapes: AvatarStory = {
	render: (args) => (
		<div style={{ display: 'flex', gap: '16px' }}>
			<DsAvatar {...args} type="circle" name="Circle" />
			<DsAvatar {...args} type="rounded" name="Rounded" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Check both shapes are rendered
		await expect(canvas.getByText('CI')).toBeInTheDocument();
		await expect(canvas.getByText('RO')).toBeInTheDocument();
	},
};

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

export const AvatarGroup: GroupStory = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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

		// Get all +3 indicators and check the first one (Default Group with max 5: 8 total - 5 max = +3)
		const plusThreeIndicators = canvas.getAllByText('+3');
		await expect(plusThreeIndicators[0]).toBeInTheDocument();

		// Hover over the first +3 to check tooltip with names
		await userEvent.hover(plusThreeIndicators[0]);

		// Check that hidden avatar names appear in tooltip (tooltips render in document.body)
		const tooltip = await within(document.body).findByRole('tooltip');
		await expect(tooltip).toHaveTextContent('Fiona Gallagher');
		await expect(tooltip).toHaveTextContent('George Miller');
		await expect(tooltip).toHaveTextContent('Hannah Abbott');
	},
};
