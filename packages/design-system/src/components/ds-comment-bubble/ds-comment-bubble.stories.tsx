import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsCommentBubble } from './index';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import type { CommentData, CommentAuthor } from '../ds-comment-card';

const currentUser: CommentAuthor = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/40?img=1',
};

// Fixed timestamps keep the serialized docs snippets deterministic.
const createMockComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: 'comment-1',
	numericId: 63,
	author: currentUser,
	createdAt: new Date('2026-02-09T09:00:00Z'),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author: currentUser,
			content: 'We need to review the resource allocation for this project.',
			createdAt: new Date('2026-02-09T09:00:00Z'),
			isInitialMessage: true,
		},
		{
			id: 'msg-2',
			author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
			content: 'That makes sense. I can help coordinate with the team to identify blockers.',
			createdAt: new Date('2026-02-09T11:00:00Z'),
		},
	],
	...overrides,
});

const meta: Meta<typeof DsCommentBubble> = {
	title: 'Components/Comments/CommentBubble',
	component: DsCommentBubble,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		hideActionRequired: { control: 'boolean' },
		actionRequired: { control: 'boolean' },
		value: { control: 'text' },
		comment: { table: { disable: true } },
		currentUser: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
	args: {
		referenceTag: 'Resource allocation',
		onSend: fn(),
		onClose: fn(),
		onValueChange: fn(),
		onActionRequiredChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentBubble>;

/**
 * Empty bubble for composing a new comment. The send button stays disabled until
 * the viewer types.
 */
export const Initial: Story = {
	args: {
		value: '',
	},
};

/**
 * As the viewer types, the bubble expands and reveals the action-required checkbox
 * and an enabled send button.
 */
export const Typing: Story = {
	args: {
		value: 'This is a new comment...',
	},
};

/**
 * The composer with the action-required flag checked.
 */
export const TypingWithActionRequired: Story = {
	args: {
		value: 'This needs attention!',
		actionRequired: true,
	},
};

/**
 * Hide the action-required affordance entirely with `hideActionRequired` when the
 * flow does not use it.
 */
export const HiddenActionRequired: Story = {
	args: {
		value: 'This is a new comment...',
		hideActionRequired: true,
	},
};

/**
 * Existing thread view. Pass a `comment` and the `currentUser` to render messages
 * with a reply composer.
 */
export const Thread: Story = {
	args: {
		currentUser: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T09:00:00Z'),
			isResolved: false,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project.',
					createdAt: new Date('2026-02-09T09:00:00Z'),
					isInitialMessage: true,
				},
				{
					id: 'msg-2',
					author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
					content: 'That makes sense. I can help coordinate with the team to identify blockers.',
					createdAt: new Date('2026-02-09T11:00:00Z'),
				},
			],
		},
	},
};

/**
 * A thread flagged as requiring action shows the action-required treatment in the
 * header.
 */
export const ThreadWithActionRequired: Story = {
	args: {
		actionRequired: true,
		currentUser: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T09:00:00Z'),
			isResolved: false,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project.',
					createdAt: new Date('2026-02-09T09:00:00Z'),
					isInitialMessage: true,
				},
			],
		},
	},
};

/**
 * The main bubble states side by side for visual comparison.
 */
export const AllStates: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack gap="var(--xl)" alignItems="flex-start">
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-md" color="secondary">
					Initial
				</DsTypography>
				<DsCommentBubble value="" />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-md" color="secondary">
					Typing
				</DsTypography>
				<DsCommentBubble value="This is a comment..." />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="body-sm-md" color="secondary">
					Thread
				</DsTypography>
				<DsCommentBubble comment={createMockComment()} currentUser={currentUser} />
			</DsStack>
		</DsStack>
	),
};

/**
 * Fully interactive flow: type to compose, send to create a thread, then add replies
 * and edit or delete messages.
 */
export const Interactive: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: function InteractiveStory() {
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(false);
		const [comment, setComment] = useState<CommentData | undefined>(undefined);

		const handleSend = (content: string, isActionRequired: boolean) => {
			setComment((prev) => {
				const message = {
					id: `msg-${String(Date.now())}`,
					author: currentUser,
					content,
					createdAt: new Date(),
				};

				if (!prev) {
					setActionRequired(isActionRequired);
					return {
						id: 'comment-1',
						numericId: 63,
						author: currentUser,
						createdAt: new Date(),
						isResolved: false,
						messages: [{ ...message, isInitialMessage: true }],
					};
				}

				return { ...prev, messages: [...prev.messages, message] };
			});
			setValue('');
		};

		const handleEditMessage = (messageId: string, newContent: string) => {
			setComment((prev) =>
				prev
					? {
							...prev,
							messages: prev.messages.map((msg) =>
								msg.id === messageId ? { ...msg, content: newContent } : msg,
							),
						}
					: prev,
			);
		};

		const handleDeleteMessage = (messageId: string) => {
			setComment((prev) =>
				prev ? { ...prev, messages: prev.messages.filter((msg) => msg.id !== messageId) } : prev,
			);
		};

		const handleClose = () => {
			setComment(undefined);
			setValue('');
			setActionRequired(false);
		};

		return (
			<DsCommentBubble
				comment={comment}
				currentUser={currentUser}
				referenceTag="Resource allocation"
				value={value}
				onValueChange={setValue}
				actionRequired={actionRequired}
				onActionRequiredChange={setActionRequired}
				onSend={handleSend}
				onEditMessage={handleEditMessage}
				onDeleteMessage={handleDeleteMessage}
				onMessageMarkUnread={fn()}
				onMessageResolved={fn()}
				onClose={handleClose}
				onResolve={fn()}
				onToggleActionRequired={fn()}
				onForward={fn()}
				onMarkUnread={fn()}
				onCopyLink={fn()}
				onDelete={fn()}
			/>
		);
	},
};
