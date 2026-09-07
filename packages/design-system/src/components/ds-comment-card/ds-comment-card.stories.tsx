import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsCommentCard } from './index';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import type { CommentData } from './ds-comment-card.types';

const author = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/40?img=1',
};

// Shared builder for the visual-only showcase (excluded from docs snippets). Manifest
// stories inline their comment literal instead so the snippets stay ready to copy.
const createMockComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: 'comment-1',
	numericId: 63,
	author,
	createdAt: new Date('2026-02-09T10:00:00Z'),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author,
			content: 'We need to review the resource allocation for this project before the next sprint.',
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isInitialMessage: true,
		},
		{
			id: 'msg-2',
			author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
			content: 'Thanks for the feedback!',
			createdAt: new Date('2026-02-09T12:00:00Z'),
		},
	],
	...overrides,
});

const meta: Meta<typeof DsCommentCard> = {
	title: 'Components/Comments/CommentCard',
	component: DsCommentCard,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<DsStack width="484px">
				<Story />
			</DsStack>
		),
	],
	argTypes: {
		overflow: {
			control: 'select',
			options: ['hidden', 'displayed'],
		},
		comment: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
	args: {
		onClick: fn(),
		onResolve: fn(),
		onDelete: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentCard>;

/**
 * Standard card summarizing a thread: author, relative timestamp, message preview,
 * and reply count. Long previews truncate by default.
 */
export const Default: Story = {
	args: {
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isResolved: false,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project before the next sprint.',
					createdAt: new Date('2026-02-09T10:00:00Z'),
					isInitialMessage: true,
				},
				{
					id: 'msg-2',
					author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
					content: 'Thanks for the feedback!',
					createdAt: new Date('2026-02-09T12:00:00Z'),
				},
			],
		},
	},
};

/**
 * Flagged card. Set `isActionRequired` on the comment to surface the action-required
 * treatment so it stands out in a list.
 */
export const ActionRequired: Story = {
	args: {
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isResolved: false,
			isActionRequired: true,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project before the next sprint.',
					createdAt: new Date('2026-02-09T10:00:00Z'),
					isInitialMessage: true,
				},
			],
		},
	},
};

/**
 * Non-interactive card. Use while an operation is in flight or when the thread is
 * read-only.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isResolved: false,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project before the next sprint.',
					createdAt: new Date('2026-02-09T10:00:00Z'),
					isInitialMessage: true,
				},
			],
		},
	},
};

/**
 * Show the full message body instead of a truncated preview with `overflow="displayed"`.
 */
export const FullMessage: Story = {
	args: {
		overflow: 'displayed',
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isResolved: false,
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content:
						'We need to review the resource allocation for this project. Adjusting the timeline will ensure we have enough resources for the development phase and keep quality high.',
					createdAt: new Date('2026-02-09T10:00:00Z'),
					isInitialMessage: true,
				},
			],
		},
	},
};

/**
 * A reference chip in the header links the thread back to the entity it annotates.
 */
export const WithReferenceTag: Story = {
	args: {
		comment: {
			id: 'comment-1',
			numericId: 63,
			author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
			createdAt: new Date('2026-02-09T10:00:00Z'),
			isResolved: false,
			referenceTag: 'Resource allocation',
			messages: [
				{
					id: 'msg-1',
					author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
					content: 'We need to review the resource allocation for this project before the next sprint.',
					createdAt: new Date('2026-02-09T10:00:00Z'),
					isInitialMessage: true,
				},
			],
		},
	},
};

/**
 * Override the default relative time via `formatTimestamp` — here an absolute date.
 */
export const CustomFormatter: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => (
		<DsCommentCard
			{...args}
			comment={{
				id: 'comment-1',
				numericId: 63,
				author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
				createdAt: new Date('2026-02-09T10:00:00Z'),
				isResolved: false,
				messages: [
					{
						id: 'msg-1',
						author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
						content: 'We need to review the resource allocation for this project.',
						createdAt: new Date('2026-02-09T10:00:00Z'),
						isInitialMessage: true,
					},
				],
			}}
			formatTimestamp={(date) =>
				date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
			}
		/>
	),
};

/**
 * The main states side by side for visual comparison.
 */
export const AllStates: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack direction="column" gap="var(--lg)" width="484px">
			<DsStack direction="column" gap="var(--xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Default
				</DsTypography>
				<DsCommentCard comment={createMockComment()} />
			</DsStack>
			<DsStack direction="column" gap="var(--xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Action required
				</DsTypography>
				<DsCommentCard comment={createMockComment({ isActionRequired: true })} />
			</DsStack>
			<DsStack direction="column" gap="var(--xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Disabled
				</DsTypography>
				<DsCommentCard comment={createMockComment()} disabled />
			</DsStack>
			<DsStack direction="column" gap="var(--xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					Full message
				</DsTypography>
				<DsCommentCard comment={createMockComment()} overflow="displayed" />
			</DsStack>
		</DsStack>
	),
};
