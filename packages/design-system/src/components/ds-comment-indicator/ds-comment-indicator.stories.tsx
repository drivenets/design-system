import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';
import { useState } from 'react';
import { DsCommentIndicator } from './index';
import { DsCommentBubble } from '../ds-comment-bubble';
import type { CommentData, CommentAuthor } from '../ds-comment-card';
import styles from './ds-comment-indicator.stories.module.scss';

const meta: Meta<typeof DsCommentIndicator> = {
	title: 'Design System/Comments/CommentIndicator',
	component: DsCommentIndicator,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['placeholder', 'default', 'action-required'],
			description: 'Type of indicator',
		},
		avatarSrc: {
			control: 'text',
			description: 'Avatar image URL for default/action-required types',
		},
		onClick: {
			action: 'clicked',
			description: 'Click handler',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentIndicator>;

/**
 * Placeholder indicator shows a "+" icon for adding new comments.
 * This appears when hovering over entities that can have comments.
 */
export const Placeholder: Story = {
	args: {
		type: 'placeholder',
		onClick: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const indicator = canvas.getByRole('button', { name: /add comment/i });

		await expect(indicator).toBeInTheDocument();
		await expect(indicator).toHaveAttribute('aria-label', 'Add comment');
	},
};

/**
 * Default indicator shows the avatar of the comment initiator.
 * Used when there are comments but no action is required.
 */
export const DefaultIndicator: Story = {
	args: {
		type: 'default',
		avatarSrc: 'https://i.pravatar.cc/40?img=1',
		onClick: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const indicator = canvas.getByRole('button', { name: /view comment/i });

		await expect(indicator).toBeInTheDocument();
		await expect(indicator).toHaveAttribute('aria-label', 'View comment');
	},
};

/**
 * Action required indicator shows the avatar with an orange/red background.
 * Used when a comment requires user action or response.
 */
export const ActionRequired: Story = {
	args: {
		type: 'action-required',
		avatarSrc: 'https://i.pravatar.cc/40?img=2',
		onClick: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const indicator = canvas.getByRole('button', { name: /view comment/i });

		await expect(indicator).toBeInTheDocument();
		await expect(indicator).toHaveClass(/actionRequired/);
	},
};

export const Default: Story = {
	render: () => (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headerCell}>Placeholder</div>
				<div className={styles.headerCell}>No action required</div>
				<div className={styles.headerCell}>Action Required</div>
			</div>
			<div className={styles.row}>
				<DsCommentIndicator type="placeholder" onClick={fn()} />
				<DsCommentIndicator type="default" avatarSrc="https://i.pravatar.cc/40?img=1" onClick={fn()} />
				<DsCommentIndicator
					type="action-required"
					avatarSrc="https://i.pravatar.cc/40?img=2"
					onClick={fn()}
				/>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const indicators = canvas.getAllByRole('button');

		await expect(indicators).toHaveLength(3);

		await expect(indicators[0]).toHaveAttribute('aria-label', 'Add comment');
		await expect(indicators[1]).toHaveAttribute('aria-label', 'View comment');
		await expect(indicators[2]).toHaveAttribute('aria-label', 'View comment');
	},
};

const currentUser: CommentAuthor = {
	id: 'user-1',
	name: 'You',
	avatarSrc: 'https://i.pravatar.cc/40?img=1',
};

const createMockComment = (): CommentData => ({
	id: 'comment-1',
	numericId: 42,
	author: {
		id: 'user-2',
		name: 'Karen J.',
		avatarSrc: 'https://i.pravatar.cc/40?img=2',
	},
	createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author: {
				id: 'user-2',
				name: 'Karen J.',
				avatarSrc: 'https://i.pravatar.cc/40?img=2',
			},
			content: 'This is the initial comment message.',
			createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
			isInitialMessage: true,
		},
		{
			id: 'msg-2',
			author: currentUser,
			content: 'Thank you for the feedback!',
			createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
		},
	],
});

/**
 * Interactive story showing a placeholder indicator that opens an empty comment bubble
 * when clicked. Demonstrates the complete flow from empty bubble to thread with multiple messages.
 * Click the "+" icon to add a new comment, then add replies to see the full thread.
 */
export const WithEmptyBubble: Story = {
	render: function WithEmptyBubbleStory() {
		const [isOpen, setIsOpen] = useState(false);
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(false);
		const [comment, setComment] = useState<CommentData | undefined>(undefined);

		const handleSend = (content: string, isActionRequired: boolean) => {
			if (!comment) {
				const newComment: CommentData = {
					id: 'comment-1',
					numericId: 42,
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
					Click the <strong>+</strong> icon to open an empty comment bubble, then follow the complete flow:
					<br />
					1. Type a message → Typing mode appears
					<br />
					2. Send → Creates thread with your first comment
					<br />
					3. Add replies → Thread grows with multiple messages
				</p>

				<div className={styles.indicatorWrapper}>
					<DsCommentIndicator type="placeholder" onClick={() => setIsOpen(!isOpen)} />

					{isOpen && (
						<div className={styles.bubbleWrapper}>
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
								onMessageMarkUnread={(id) => console.log('Mark unread:', id)}
								onMessageResolved={(id) => console.log('Resolved:', id)}
								onClose={comment ? handleClose : () => setIsOpen(false)}
								onResolve={() => console.log('Resolve clicked')}
								onToggleActionRequired={() => console.log('Toggle action required')}
								onForward={() => console.log('Forward')}
								onMarkUnread={() => console.log('Mark unread')}
								onCopyLink={() => console.log('Copy link')}
								onDelete={() => console.log('Delete')}
							/>
						</div>
					)}
				</div>
			</div>
		);
	},
};

/**
 * Interactive story showing an indicator with an avatar that opens a comment bubble
 * with existing comments when clicked. The bubble displays a full comment thread.
 */
export const WithExistingComments: Story = {
	render: function WithExistingCommentsStory() {
		const [isOpen, setIsOpen] = useState(false);
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
			<div className={styles.interactiveContainer}>
				<p className={styles.instructions}>
					Click the <strong>avatar</strong> to view existing comments and add replies
				</p>

				<div className={styles.indicatorWrapper}>
					<DsCommentIndicator
						type="default"
						avatarSrc={comment.author.avatarSrc}
						onClick={() => setIsOpen(!isOpen)}
					/>

					{isOpen && (
						<div className={styles.bubbleWrapper}>
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
								onMessageMarkUnread={(id) => console.log('Mark unread:', id)}
								onMessageResolved={(id) => console.log('Resolved:', id)}
								onClose={() => setIsOpen(false)}
								onResolve={() => console.log('Resolve clicked')}
								onToggleActionRequired={() => console.log('Toggle action required')}
								onForward={() => console.log('Forward')}
								onMarkUnread={() => console.log('Mark unread')}
								onCopyLink={() => console.log('Copy link')}
								onDelete={() => console.log('Delete')}
							/>
						</div>
					)}
				</div>
			</div>
		);
	},
};

/**
 * Interactive story showing an action-required indicator that opens a comment bubble
 * with existing comments marked as requiring action.
 */
export const WithActionRequired: Story = {
	render: function WithActionRequiredStory() {
		const [isOpen, setIsOpen] = useState(false);
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(true);
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

		return (
			<div className={styles.interactiveContainer}>
				<p className={styles.instructions}>
					Click the <strong>action required avatar</strong> to view urgent comments
				</p>

				<div className={styles.indicatorWrapper}>
					<DsCommentIndicator
						type="action-required"
						avatarSrc={comment.author.avatarSrc}
						onClick={() => setIsOpen(!isOpen)}
					/>

					{isOpen && (
						<div className={styles.bubbleWrapper}>
							<DsCommentBubble
								comment={comment}
								currentUser={currentUser}
								referenceTag="Resource allocation"
								value={value}
								onValueChange={setValue}
								actionRequired={actionRequired}
								onActionRequiredChange={setActionRequired}
								onSend={handleSend}
								onClose={() => setIsOpen(false)}
								onResolve={() => console.log('Resolve clicked')}
								onToggleActionRequired={() => console.log('Toggle action required')}
								onForward={() => console.log('Forward')}
								onMarkUnread={() => console.log('Mark unread')}
								onCopyLink={() => console.log('Copy link')}
								onDelete={() => console.log('Delete')}
							/>
						</div>
					)}
				</div>
			</div>
		);
	},
};
