import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsUserCard } from './ds-user-card';

const meta: Meta<typeof DsUserCard> = {
	title: 'Components/UserCard',
	component: DsUserCard,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
	decorators: [
		(Story) => (
			<div style={{ width: 280 }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DsUserCard>;

/**
 * The identity header of a user menu: a medium avatar (initials fallback from
 * `name`) beside the name and an optional `subtitle` such as an email or role.
 */
export const Default: Story = {
	args: {
		name: 'Mockup Developer',
		subtitle: 'developer@mock.local',
	},
};

/**
 * When `src` resolves, the avatar shows the photo instead of initials. The `name`
 * is still used for the image alt text and hover tooltip.
 */
export const WithImage: Story = {
	args: {
		name: 'Jane Smith',
		subtitle: 'jane.smith@drivenets.com',
		src: 'https://i.pravatar.cc/150?u=jane',
	},
};

/**
 * Both rows are single-line and truncate with an ellipsis when they exceed the
 * available width, keeping the header height stable regardless of content length.
 */
export const LongTextOverflow: Story = {
	args: {
		name: 'A very long one. We need to think of some natural text in here.',
		subtitle: 'A very long one. Maybe a little longer? We need to think of some natural text in here.',
	},
};
