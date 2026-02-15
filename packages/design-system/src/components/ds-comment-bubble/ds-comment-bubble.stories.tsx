import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';
import { useState } from 'react';
import { DsCommentBubble } from './index';
import type { CommentData, CommentAuthor } from '../ds-comment-card';
import styles from './ds-comment-bubble.stories.module.scss';

const currentUser: CommentAuthor = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/40?img=1',
};

const createMockComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: 'comment-1',
	numericId: 63,
	author: currentUser,
	createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author: currentUser,
			content: 'We need to review the resource allocation for this project.',
			createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
			isInitialMessage: true,
		},
		{
			id: 'msg-2',
			author: currentUser,
			content:
				'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards.',
			createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
		},
		{
			id: 'msg-3',
			author: {
				id: 'user-2',
				name: 'John D.',
				avatarSrc: 'https://i.pravatar.cc/40?img=2',
			},
			content:
				'That makes sense. I can help coordinate with the team to identify any potential blockers. We should also check with stakeholders about priority.',
			createdAt: new Date(Date.now() - 16 * 60 * 60 * 1000),
		},
		{
			id: 'msg-4',
			author: currentUser,
			content:
				'Great idea. Let me schedule a meeting with the stakeholders for next week. We can discuss the timeline and resource requirements in detail.',
			createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
		},
		{
			id: 'msg-5',
			author: {
				id: 'user-3',
				name: 'Jane S.',
				avatarSrc: 'https://i.pravatar.cc/40?img=3',
			},
			content:
				'I can prepare a summary of our current resource usage and projected needs for the meeting. This will help us make informed decisions.',
			createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
		},
	],
	...overrides,
});

const meta: Meta<typeof DsCommentBubble> = {
	title: 'Design System/Comments/CommentBubble',
	component: DsCommentBubble,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
Floating bubble component for creating new comments and viewing/replying to existing threads.

**Behavior-driven states:**
- **Initial**: Empty bubble (240px) with placeholder "Add a comment" and disabled send button
- **Typing**: Expands to 320px when user focuses or types, shows footer with action required checkbox
- **Thread**: Full thread view (420px) with messages, header, and reply input

**Features:**
- Auto-resizing textarea (min 40px, max 480px)
- Action required checkbox with orange styling
- Thread view with scrollable messages (max 540px)
- Edit/delete message actions on hover
- More actions dropdown menu
- Keyboard support (Enter to send, Shift+Enter for new line)
- Automatic state transitions based on user interaction
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		actionRequired: {
			control: 'boolean',
			description: 'Whether action required is checked',
		},
		value: {
			control: 'text',
			description: 'Current input value',
		},
		comment: {
			table: { disable: true },
		},
		currentUser: {
			table: { disable: true },
		},
	},
	args: {
		referenceTag: 'Resource allocation',
		onSend: fn(),
		onClose: fn(),
		onResolve: fn(),
		onToggleActionRequired: fn(),
		onForward: fn(),
		onMarkUnread: fn(),
		onCopyLink: fn(),
		onDelete: fn(),
		onActionRequiredChange: fn(),
		onValueChange: fn(),
		onEditMessage: fn(),
		onDeleteMessage: fn(),
		onMessageMarkUnread: fn(),
		onMessageResolved: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentBubble>;

export const Initial: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: /add a comment/i });

		await expect(textarea).toBeInTheDocument();
		await expect(textarea).toHaveAttribute('placeholder', 'Add a comment');
	},
};

export const Typing: Story = {
	args: {
		value: 'This is a new comment...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: /action required/i });
		const sendButton = canvas.getByRole('button', { name: /send/i });

		await expect(checkbox).toBeInTheDocument();
		await expect(sendButton).toBeEnabled();
	},
};

export const TypingWithActionRequired: Story = {
	args: {
		value: 'This needs attention!',
		actionRequired: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: /action required/i });
		const sendButton = canvas.getByRole('button', { name: /send/i });

		await expect(checkbox).toBeChecked();
		await expect(sendButton).toBeEnabled();
	},
};

export const Thread: Story = {
	args: {
		comment: createMockComment(),
		currentUser,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const dialog = canvas.getByRole('dialog', { name: /comment thread #63/i });

		await expect(dialog).toBeInTheDocument();
	},
};

export const ThreadWithActionRequired: Story = {
	args: {
		comment: createMockComment(),
		actionRequired: true,
		currentUser,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const dialog = canvas.getByRole('dialog', { name: /comment thread #63/i });

		await expect(dialog).toBeInTheDocument();
	},
};

export const FullInteractiveFlow: Story = {
	render: function FullFlowStory() {
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(false);
		const [comment, setComment] = useState<CommentData | undefined>(undefined);

		const handleSend = (content: string, isActionRequired: boolean) => {
			if (!comment) {
				const newComment: CommentData = {
					id: 'comment-1',
					numericId: 63,
					author: currentUser,
					createdAt: new Date(),
					isResolved: false,
					messages: [
						{
							id: 'msg-1',
							author: currentUser,
							content,
							createdAt: new Date(),
							isInitialMessage: true,
						},
					],
				};
				setComment(newComment);
				setActionRequired(isActionRequired);
			} else {
				const newMessage = {
					id: `msg-${String(Date.now())}`,
					author: currentUser,
					content,
					createdAt: new Date(),
				};

				setComment((prev) => {
					if (!prev) {
						return prev;
					}
					return {
						...prev,
						messages: [...prev.messages, newMessage],
					};
				});
			}
			setValue('');
		};

		const handleEditMessage = (messageId: string, newContent: string) => {
			if (!comment) {
				return;
			}
			setComment((prev) => {
				if (!prev) {
					return prev;
				}
				return {
					...prev,
					messages: prev.messages.map((msg) =>
						msg.id === messageId ? { ...msg, content: newContent } : msg,
					),
				};
			});
		};

		const handleDeleteMessage = (messageId: string) => {
			if (!comment) {
				return;
			}
			setComment((prev) => {
				if (!prev) {
					return prev;
				}
				return {
					...prev,
					messages: prev.messages.filter((msg) => msg.id !== messageId),
				};
			});
		};

		const handleClose = () => {
			setComment(undefined);
			setValue('');
			setActionRequired(false);
		};

		return (
			<div className={styles.interactiveContainer}>
				<p className={styles.instructions}>
					<strong>Full Flow Test:</strong>
					<br />
					1. Start by typing in the bubble - it will expand and show the footer
					<br />
					2. Send your first comment to create a thread
					<br />
					3. Add more replies to see the thread grow
					<br />
					4. Close to reset and start over
				</p>
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
					onMessageMarkUnread={(id) => console.log('Mark unread message:', id)}
					onMessageResolved={(id) => console.log('Resolved message:', id)}
					onClose={handleClose}
					onResolve={() => console.log('Resolve clicked')}
					onToggleActionRequired={() => console.log('Toggle action required')}
					onForward={() => console.log('Forward')}
					onMarkUnread={() => console.log('Mark unread')}
					onCopyLink={() => console.log('Copy link')}
					onDelete={() => console.log('Delete')}
				/>
			</div>
		);
	},
};

export const InteractiveThread: Story = {
	render: function InteractiveThreadStory() {
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(false);
		const [comment, setComment] = useState(createMockComment());

		const handleSend = (content: string) => {
			const newMessage = {
				id: `msg-${String(Date.now())}`,
				author: currentUser,
				content,
				createdAt: new Date(),
			};

			setComment((prev) => ({
				...prev,
				messages: [...prev.messages, newMessage],
			}));
			setValue('');
		};

		const handleEditMessage = (messageId: string, newContent: string) => {
			setComment((prev) => ({
				...prev,
				messages: prev.messages.map((msg) => (msg.id === messageId ? { ...msg, content: newContent } : msg)),
			}));
		};

		const handleDeleteMessage = (messageId: string) => {
			setComment((prev) => ({
				...prev,
				messages: prev.messages.filter((msg) => msg.id !== messageId),
			}));
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
				onMessageMarkUnread={(id) => console.log('Mark unread message:', id)}
				onMessageResolved={(id) => console.log('Resolved message:', id)}
				onClose={() => console.log('Close clicked')}
				onResolve={() => console.log('Resolve clicked')}
				onToggleActionRequired={() => console.log('Toggle action required')}
				onForward={() => console.log('Forward')}
				onMarkUnread={() => console.log('Mark unread')}
				onCopyLink={() => console.log('Copy link')}
				onDelete={() => console.log('Delete')}
			/>
		);
	},
};

export const AllTypes: Story = {
	render: () => (
		<div className={styles.grid}>
			<div className={styles.column}>
				<h4 className={styles.heading}>Initial</h4>
				<DsCommentBubble />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Typing</h4>
				<DsCommentBubble value="This is a comment..." />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Typing (Action Required)</h4>
				<DsCommentBubble value="This needs attention!" actionRequired />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Thread</h4>
				<DsCommentBubble comment={createMockComment()} currentUser={currentUser} />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Thread (Action Required)</h4>
				<DsCommentBubble comment={createMockComment()} currentUser={currentUser} actionRequired />
			</div>
		</div>
	),
};
