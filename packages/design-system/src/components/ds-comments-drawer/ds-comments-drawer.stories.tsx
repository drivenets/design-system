import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsCommentsDrawer } from './index';
import { DsButtonV3 } from '../ds-button-v3';
import type { CommentData } from '../ds-comment-card';

const karen = { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' };
const john = { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' };
const jane = { id: 'user-3', name: 'Jane S.', avatarSrc: 'https://i.pravatar.cc/40?img=3' };

// Fixed timestamps keep the serialized docs snippets deterministic.
const createSampleComments = (): CommentData[] => [
	{
		id: 'comment-1',
		numericId: 63,
		author: karen,
		createdAt: new Date('2026-02-08T10:00:00Z'),
		isResolved: false,
		labels: ['Bug', 'High Priority'],
		messages: [
			{
				id: 'msg-1',
				author: karen,
				content: 'We need to review the resource allocation for this project before the next sprint.',
				createdAt: new Date('2026-02-08T10:00:00Z'),
				isInitialMessage: true,
			},
			{
				id: 'msg-2',
				author: john,
				content: 'Thanks for the feedback!',
				createdAt: new Date('2026-02-08T12:00:00Z'),
			},
		],
	},
	{
		id: 'comment-2',
		numericId: 64,
		author: john,
		createdAt: new Date('2026-02-07T10:00:00Z'),
		isResolved: false,
		labels: ['Feature Request'],
		messages: [
			{
				id: 'msg-3',
				author: john,
				content: 'Could we add a dark mode feature to improve usability in low-light environments?',
				createdAt: new Date('2026-02-07T10:00:00Z'),
				isInitialMessage: true,
			},
		],
	},
	{
		id: 'comment-3',
		numericId: 65,
		author: jane,
		createdAt: new Date('2026-02-06T10:00:00Z'),
		isResolved: true,
		labels: ['Documentation'],
		messages: [
			{
				id: 'msg-4',
				author: jane,
				content: 'The API documentation has been updated to reflect the new authentication flow.',
				createdAt: new Date('2026-02-06T10:00:00Z'),
				isInitialMessage: true,
			},
		],
	},
];

const meta: Meta<typeof DsCommentsDrawer> = {
	title: 'Components/Comments/CommentsDrawer',
	component: DsCommentsDrawer,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		open: { control: 'boolean' },
		showResolved: { control: 'boolean' },
		searchQuery: { control: 'text' },
		comments: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
	args: {
		onOpenChange: fn(),
		onSearchChange: fn(),
		onShowResolvedChange: fn(),
		onCommentClick: fn(),
		onResolveComment: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentsDrawer>;

/**
 * Open drawer listing comment cards. The header shows the count of currently visible
 * (unresolved) comments. Drive `searchQuery` and `showResolved` as controlled props.
 */
export const Default: Story = {
	args: {
		open: true,
		comments: [
			{
				id: 'comment-1',
				numericId: 63,
				author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
				createdAt: new Date('2026-02-08T10:00:00Z'),
				isResolved: false,
				labels: ['Bug', 'High Priority'],
				messages: [
					{
						id: 'msg-1',
						author: { id: 'user-1', name: 'Karen J.', avatarSrc: 'https://i.pravatar.cc/40?img=1' },
						content: 'We need to review the resource allocation for this project before the next sprint.',
						createdAt: new Date('2026-02-08T10:00:00Z'),
						isInitialMessage: true,
					},
				],
			},
			{
				id: 'comment-2',
				numericId: 64,
				author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
				createdAt: new Date('2026-02-07T10:00:00Z'),
				isResolved: false,
				labels: ['Feature Request'],
				messages: [
					{
						id: 'msg-2',
						author: { id: 'user-2', name: 'John D.', avatarSrc: 'https://i.pravatar.cc/40?img=2' },
						content: 'Could we add a dark mode feature to improve usability in low-light environments?',
						createdAt: new Date('2026-02-07T10:00:00Z'),
						isInitialMessage: true,
					},
				],
			},
		],
	},
};

/**
 * Empty state shown when there are no comments to display.
 */
export const Empty: Story = {
	args: {
		open: true,
		comments: [],
	},
};

/**
 * Replace the built-in empty state with your own copy via `noCommentsMessage`.
 */
export const CustomEmptyMessage: Story = {
	args: {
		open: true,
		comments: [],
		noCommentsMessage: 'Nothing to see here!',
	},
};

/**
 * Fully controlled drawer opened from a trigger button, with live search, resolve,
 * and show-resolved state.
 */
export const Interactive: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: function InteractiveStory() {
		const [open, setOpen] = useState(false);
		const [searchQuery, setSearchQuery] = useState('');
		const [showResolved, setShowResolved] = useState(false);
		const [comments, setComments] = useState(createSampleComments());

		const handleResolve = (commentId: string) => {
			setComments((prev) => prev.map((c) => (c.id === commentId ? { ...c, isResolved: true } : c)));
		};

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open comments drawer</DsButtonV3>
				<DsCommentsDrawer
					open={open}
					onOpenChange={setOpen}
					comments={comments}
					searchQuery={searchQuery}
					onSearchChange={setSearchQuery}
					showResolved={showResolved}
					onShowResolvedChange={setShowResolved}
					onCommentClick={fn()}
					onResolveComment={handleResolve}
					onToggleActionRequired={fn()}
					onForward={fn()}
					onMarkUnread={fn()}
					onCopyLink={fn()}
					onDelete={fn()}
				/>
			</>
		);
	},
};
