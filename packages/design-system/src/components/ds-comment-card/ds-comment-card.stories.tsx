import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';
import { DsCommentCard } from './index';
import type { CommentData } from './ds-comment-card.types';
import styles from './ds-comment-card.stories.module.scss';

const createMockComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: 'comment-1',
	numericId: 63,
	author: {
		id: 'user-1',
		name: 'Karen J.',
		avatarSrc: 'https://i.pravatar.cc/40?img=1',
	},
	createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author: {
				id: 'user-1',
				name: 'Karen J.',
				avatarSrc: 'https://i.pravatar.cc/40?img=1',
			},
			content:
				'We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements efficiently.',
			createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
			isInitialMessage: true,
		},
		{
			id: 'msg-2',
			author: {
				id: 'user-2',
				name: 'John D.',
				avatarSrc: 'https://i.pravatar.cc/40?img=2',
			},
			content: 'Thanks for the feedback!',
			createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
		},
		{
			id: 'msg-3',
			author: {
				id: 'user-3',
				name: 'Jane S.',
				avatarSrc: 'https://i.pravatar.cc/40?img=3',
			},
			content: 'I agree with this approach.',
			createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
		},
		{
			id: 'msg-4',
			author: {
				id: 'user-1',
				name: 'Karen J.',
				avatarSrc: 'https://i.pravatar.cc/40?img=1',
			},
			content: 'Great, let us proceed then.',
			createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
		},
	],
	...overrides,
});

const meta: Meta<typeof DsCommentCard> = {
	title: 'Design System/Comments/CommentCard',
	component: DsCommentCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className={styles.decorator}>
				<Story />
			</div>
		),
	],
	argTypes: {
		comment: {
			description: 'Comment data including author, messages, participants, and metadata',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the card is disabled',
		},
		overflow: {
			control: 'select',
			options: ['hidden', 'displayed'],
			description: 'Whether to truncate long messages or show them in full',
		},
		onClick: {
			action: 'clicked',
			description: 'Callback when card is clicked',
		},
		onResolve: {
			action: 'resolved',
			description: 'Callback when resolve button is clicked',
		},
		onToggleActionRequired: {
			action: 'toggle-action-required',
			description: 'Callback when action required is toggled',
		},
		onForward: {
			action: 'forward',
			description: 'Callback when forward action is triggered',
		},
		onMarkUnread: {
			action: 'mark-unread',
			description: 'Callback when mark as unread is triggered',
		},
		onCopyLink: {
			action: 'copy-link',
			description: 'Callback when copy link is triggered',
		},
		onDelete: {
			action: 'delete',
			description: 'Callback when delete is triggered',
		},
		formatTimestamp: {
			description:
				'Custom formatter for timestamps. Defaults to relative time format (e.g., "2d ago"). Can be overridden for custom formats like absolute dates.',
			table: {
				type: { summary: '(date: Date) => string' },
				defaultValue: { summary: 'formatRelativeTime' },
			},
		},
	},
	args: {
		onClick: fn(),
		onResolve: fn(),
		onToggleActionRequired: fn(),
		onForward: fn(),
		onMarkUnread: fn(),
		onCopyLink: fn(),
		onDelete: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentCard>;

export const DefaultCard: Story = {
	args: {
		comment: createMockComment(),
		overflow: 'hidden',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button', { name: /Comment #/i });

		await expect(card).toBeInTheDocument();
		await expect(card).toHaveAttribute('aria-label');

		const commentText = canvas.getByText(/resource allocation/);
		await expect(commentText).toBeInTheDocument();

		const replyCount = canvas.getByText(/3 replies/i);
		await expect(replyCount).toBeInTheDocument();
	},
};

export const ActionRequired: Story = {
	args: {
		comment: createMockComment({ isActionRequired: true }),
		overflow: 'hidden',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button', { name: /action required/i });

		await expect(card).toBeInTheDocument();
	},
};

export const DisabledState: Story = {
	args: {
		comment: createMockComment(),
		disabled: true,
		overflow: 'hidden',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button', { name: /Comment #/i });

		await expect(card).toBeInTheDocument();
		await expect(card).toBeDisabled();
	},
};

export const FullMessage: Story = {
	args: {
		comment: createMockComment(),
		overflow: 'displayed',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button');
		const commentText = canvas.getByText(/resource allocation/);

		await expect(card).toBeInTheDocument();
		await expect(commentText).toBeInTheDocument();
	},
};

export const SingleMessage: Story = {
	args: {
		comment: createMockComment({
			messages: [
				{
					id: 'msg-1',
					author: {
						id: 'user-1',
						name: 'Karen J.',
						avatarSrc: 'https://i.pravatar.cc/40?img=1',
					},
					content: 'This is a short single message comment.',
					createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
					isInitialMessage: true,
				},
			],
		}),
		overflow: 'hidden',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button');
		const commentText = canvas.getByText(/This is a short single message comment/);

		await expect(card).toBeInTheDocument();
		await expect(commentText).toBeInTheDocument();
	},
};

export const Default: Story = {
	render: () => (
		<div className={styles.grid}>
			<div className={styles.column}>
				<h4 className={styles.heading}>Default</h4>
				<DsCommentCard comment={createMockComment()} overflow="hidden" />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Action Required</h4>
				<DsCommentCard comment={createMockComment()} overflow="hidden" />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Disabled</h4>
				<DsCommentCard comment={createMockComment()} disabled={true} overflow="hidden" />
			</div>

			<div className={styles.column}>
				<h4 className={styles.heading}>Full Message</h4>
				<DsCommentCard comment={createMockComment()} overflow="displayed" />
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const cards = canvas.getAllByRole('button', { name: /Comment #/i });

		await expect(cards.length).toBeGreaterThan(0);
	},
};

export const CustomFormatter: Story = {
	args: {
		comment: createMockComment(),
		overflow: 'hidden',
		formatTimestamp: (date: Date) => {
			const options: Intl.DateTimeFormatOptions = {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			};
			return date.toLocaleDateString('en-US', options);
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const card = canvas.getByRole('button', { name: /Comment #/i });

		await expect(card).toBeInTheDocument();

		// Verify the formatted timestamp is present (should be in format like "Feb 9, 2026, 05:11 PM")
		// and does not contain "ago"
		const cardText = card.textContent || '';
		await expect(cardText).toMatch(/\d{4}/); // Should contain year
		await expect(cardText).not.toMatch(/ago/i); // Should not contain "ago"
	},
};
