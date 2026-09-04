import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsThreadItem } from './index';

const meta: Meta<typeof DsThreadItem> = {
	title: 'Components/Comments/ThreadItem',
	component: DsThreadItem,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		isCommentAuthorMessage: { control: 'boolean' },
		canModify: { control: 'boolean' },
		content: { control: 'text' },
		className: { table: { disable: true } },
	},
	args: {
		id: 'msg-1',
		author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/150?img=1' },
		content: 'This is a sample message in the comment thread.',
		// Fixed timestamp keeps the serialized docs snippets deterministic.
		createdAt: new Date('2026-02-09T09:00:00Z'),
		isCommentAuthorMessage: true,
		canModify: true,
		onEdit: fn(),
		onDelete: fn(),
		onMarkUnread: fn(),
		onResolved: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsThreadItem>;

/**
 * A message from the thread's comment author, left-aligned. With `canModify` the
 * viewer sees the more-actions menu and resolve control.
 */
export const Default: Story = {
	args: {
		isCommentAuthorMessage: true,
	},
};

/**
 * A message from the current viewer is right-aligned. Set `isCommentAuthorMessage`
 * to `false` for replies that are not from the top-level comment author.
 */
export const CurrentUserMessage: Story = {
	args: {
		id: 'msg-2',
		isCommentAuthorMessage: false,
		content: 'This is my reply, so it appears aligned to the right.',
	},
};

/**
 * Long content wraps within the item's width.
 */
export const LongMessage: Story = {
	args: {
		id: 'msg-3',
		content:
			'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.',
	},
};

/**
 * Multi-line content preserves its line breaks.
 */
export const MultilineMessage: Story = {
	args: {
		id: 'msg-4',
		content: 'Line 1: First line of the message\nLine 2: Second line with more details\nLine 3: Final line',
	},
};

/**
 * When the author has no `avatarSrc`, the avatar falls back to initials derived
 * from the name.
 */
export const NoAvatar: Story = {
	args: {
		id: 'msg-5',
		author: { id: 'user-2', name: 'John Doe' },
		content: 'Message from a user without an avatar.',
	},
};

/**
 * A read-only message: without `canModify` and action callbacks, neither the
 * more-actions menu nor the resolve control is rendered.
 */
export const ReadOnly: Story = {
	render: () => (
		<DsThreadItem
			id="msg-6"
			author={{ id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/150?img=2' }}
			content="A reply the current viewer cannot modify."
			createdAt={new Date('2026-02-09T09:00:00Z')}
			isCommentAuthorMessage={false}
		/>
	),
};
