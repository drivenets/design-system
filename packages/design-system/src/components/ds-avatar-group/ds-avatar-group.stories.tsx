import type { Meta, StoryObj } from '@storybook/react-vite';
import { dsAvatarSizes, dsAvatarTypes } from '../ds-avatar';
import { DsStack } from '../ds-stack';
import { DsAvatarGroup } from './ds-avatar-group';

const meta: Meta<typeof DsAvatarGroup> = {
	title: 'Components/AvatarGroup',
	component: DsAvatarGroup,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: { control: 'select', options: dsAvatarSizes },
		type: { control: 'radio', options: dsAvatarTypes },
		className: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsAvatarGroup>;

/**
 * When the number of avatars is at or below `max`, every member is shown with no
 * overflow indicator. Use this for small, fixed-size groups such as assignees on
 * a card. Omit `src` to show initials until a profile picture is available.
 */
export const Default: Story = {
	args: {
		avatars: [{ name: 'Alice Freeman' }, { name: 'Bob Smith' }, { name: 'Charlie Davis' }],
	},
};

/**
 * When `avatars.length` exceeds `max`, the group collapses the remainder behind a
 * `+N` indicator. Hovering the indicator reveals the hidden names in a tooltip.
 */
export const Overflow: Story = {
	args: {
		max: 3,
		avatars: [
			{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
			{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
			{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
			{ name: 'Diana Prince', src: 'https://i.pravatar.cc/150?u=diana' },
			{ name: 'Edward Norton', src: 'https://i.pravatar.cc/150?u=edward' },
			{ name: 'Fiona Gallagher', src: 'https://i.pravatar.cc/150?u=fiona' },
		],
	},
};

/**
 * Use `size="sm"` in tighter layouts — for example table rows or compact metadata
 * lines. `regular` is the default.
 */
export const Small: Story = {
	args: {
		size: 'sm',
		avatars: [
			{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
			{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
			{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
		],
	},
};

/**
 * The `rounded` shape — useful for representing teams, organizations, or entities
 * rather than individual people. Combined with `max`, overflow uses the same rounded
 * indicator style.
 */
export const Rounded: Story = {
	args: {
		type: 'rounded',
		max: 3,
		avatars: [
			{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
			{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
			{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
			{ name: 'Diana Prince', src: 'https://i.pravatar.cc/150?u=diana' },
			{ name: 'Edward Norton', src: 'https://i.pravatar.cc/150?u=edward' },
		],
	},
};

/**
 * Visual reference for every size token, from `xsm` to `xl`. Pick the size that
 * matches the surrounding density; `regular` is the default.
 */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: (args) => (
		<DsStack direction="row" alignItems="center" gap="var(--standard)">
			<DsAvatarGroup
				{...args}
				size="xsm"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
			<DsAvatarGroup
				{...args}
				size="sm"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
			<DsAvatarGroup
				{...args}
				size="regular"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
			<DsAvatarGroup
				{...args}
				size="md"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
			<DsAvatarGroup
				{...args}
				size="lg"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
			<DsAvatarGroup
				{...args}
				size="xl"
				avatars={[
					{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
					{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
					{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
				]}
			/>
		</DsStack>
	),
};
