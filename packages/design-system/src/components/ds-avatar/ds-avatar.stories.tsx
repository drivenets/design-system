import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsAvatar } from './ds-avatar';
import { dsAvatarSizes, dsAvatarTypes } from './ds-avatar.types';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsAvatar> = {
	title: 'Components/Avatar',
	component: DsAvatar,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: { control: 'select', options: dsAvatarSizes },
		type: { control: 'radio', options: dsAvatarTypes },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsAvatar>;

/**
 * Without an image the avatar shows the initials derived from `name`, and the
 * full `name` appears in a tooltip on hover. This is the common state before a
 * profile picture is available.
 */
export const Default: Story = {
	args: {
		name: 'John Doe',
	},
};

/**
 * When `src` resolves, the image replaces the initials. Provide `alt` for
 * screen readers; it defaults to `name` when omitted.
 */
export const WithImage: Story = {
	args: {
		name: 'Jane Smith',
		src: 'https://i.pravatar.cc/150?u=jane',
		alt: 'Jane Smith',
	},
};

/**
 * If the image fails to load the component falls back to the initials, so a
 * broken `src` never leaves an empty avatar. `onStatusChange` fires with
 * `'error'` in this case.
 */
export const ImageFallback: Story = {
	args: {
		name: 'Ada Lovelace',
		src: 'https://invalid.example/missing.png',
	},
};

/**
 * The `rounded` shape — useful for representing teams, organizations,
 * or entities rather than individual people.
 */
export const Rounded: Story = {
	args: {
		name: 'Rose Oliver',
		type: 'rounded',
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
			<DsAvatar {...args} size="xsm" name="Extra Small" />
			<DsAvatar {...args} size="sm" name="Sam Mitchell" />
			<DsAvatar {...args} size="regular" name="Rachel Evans" />
			<DsAvatar {...args} size="md" name="Mike Edwards" />
			<DsAvatar {...args} size="lg" name="Laura Adams" />
			<DsAvatar {...args} size="xl" name="Xavier Lee" />
		</DsStack>
	),
};
