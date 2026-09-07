import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsCommentIndicator } from './index';
import { DsCommentBubble } from '../ds-comment-bubble';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import type { CommentData, CommentAuthor } from '../ds-comment-card';
import styles from './ds-comment-indicator.stories.module.scss';

const meta: Meta<typeof DsCommentIndicator> = {
	title: 'Components/Comments/CommentIndicator',
	component: DsCommentIndicator,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['placeholder', 'default', 'action-required'],
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
	args: {
		onClick: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentIndicator>;

/**
 * Filled pin showing the avatar of an existing comment's author. Use when an entity
 * already has a comment thread and no action is pending.
 */
export const Default: Story = {
	args: {
		type: 'default',
		avatarSrc: 'https://i.pravatar.cc/40?img=1',
	},
};

/**
 * Dashed "+" affordance inviting the user to start a new comment. Typically revealed
 * on hover over an entity that supports comments.
 */
export const Placeholder: Story = {
	args: {
		type: 'placeholder',
	},
};

/**
 * Emphasized pin for comments flagged as requiring action, so they stand out from
 * regular threads.
 */
export const ActionRequired: Story = {
	args: {
		type: 'action-required',
		avatarSrc: 'https://i.pravatar.cc/40?img=2',
	},
};

/**
 * All indicator types side by side for visual comparison.
 */
export const AllTypes: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack gap="var(--2xl)" alignItems="flex-start">
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsTypography variant="body-sm-md" color="secondary">
					Placeholder
				</DsTypography>
				<DsCommentIndicator type="placeholder" onClick={fn()} />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsTypography variant="body-sm-md" color="secondary">
					Default
				</DsTypography>
				<DsCommentIndicator type="default" avatarSrc="https://i.pravatar.cc/40?img=1" onClick={fn()} />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsTypography variant="body-sm-md" color="secondary">
					Action required
				</DsTypography>
				<DsCommentIndicator
					type="action-required"
					avatarSrc="https://i.pravatar.cc/40?img=2"
					onClick={fn()}
				/>
			</DsStack>
		</DsStack>
	),
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
 * Integration demo: a placeholder indicator opens an empty bubble on click, then the
 * bubble transitions from typing to a live thread as messages are sent.
 */
export const WithEmptyBubble: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: function WithEmptyBubbleStory() {
		const [isOpen, setIsOpen] = useState(false);
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
						numericId: 42,
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

		const handleClose = () => {
			setComment(undefined);
			setValue('');
			setActionRequired(false);
			setIsOpen(false);
		};

		return (
			<DsStack direction="column" gap="var(--standard)" alignItems="center">
				<DsTypography variant="body-sm-reg" color="secondary">
					{'Click the "+" indicator to open an empty bubble, then send a message to create a thread.'}
				</DsTypography>
				<div className={styles.indicatorWrapper}>
					<DsCommentIndicator type="placeholder" onClick={() => setIsOpen((open) => !open)} />
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
								onClose={handleClose}
								onResolve={fn()}
								onForward={fn()}
								onMarkUnread={fn()}
								onCopyLink={fn()}
								onDelete={fn()}
							/>
						</div>
					)}
				</div>
			</DsStack>
		);
	},
};

/**
 * Integration demo: a default indicator opens a bubble with an existing thread on
 * click. Replies append to the thread live.
 */
export const WithExistingComments: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: function WithExistingCommentsStory() {
		const [isOpen, setIsOpen] = useState(false);
		const [value, setValue] = useState('');
		const [actionRequired, setActionRequired] = useState(false);
		const [comment, setComment] = useState(createMockComment());

		const handleSend = (content: string) => {
			setComment((prev) => ({
				...prev,
				messages: [
					...prev.messages,
					{ id: `msg-${String(Date.now())}`, author: currentUser, content, createdAt: new Date() },
				],
			}));
			setValue('');
		};

		return (
			<DsStack direction="column" gap="var(--standard)" alignItems="center">
				<DsTypography variant="body-sm-reg" color="secondary">
					Click the avatar indicator to view the existing thread and add replies.
				</DsTypography>
				<div className={styles.indicatorWrapper}>
					<DsCommentIndicator
						type="default"
						avatarSrc={comment.author.avatarSrc}
						onClick={() => setIsOpen((open) => !open)}
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
								onResolve={fn()}
								onForward={fn()}
								onMarkUnread={fn()}
								onCopyLink={fn()}
								onDelete={fn()}
							/>
						</div>
					)}
				</div>
			</DsStack>
		);
	},
};
