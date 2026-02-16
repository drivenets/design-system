import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';
import { useState } from 'react';
import { DsCommentsDrawer } from './index';
import { DsButton } from '../ds-button';
import type { CommentData } from '../ds-comment-card';
import styles from './ds-comments-drawer.stories.module.scss';

const createMockComments = (): CommentData[] => [
	{
		id: 'comment-1',
		numericId: 63,
		author: {
			id: 'user-1',
			name: 'Karen J.',
			avatarSrc: 'https://i.pravatar.cc/40?img=1',
		},
		createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
		isResolved: false,
		labels: ['Bug', 'High Priority'],
		messages: [
			{
				id: 'msg-1',
				author: {
					id: 'user-1',
					name: 'Karen J.',
					avatarSrc: 'https://i.pravatar.cc/40?img=1',
				},
				content:
					'We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase.',
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
		],
	},
	{
		id: 'comment-2',
		numericId: 64,
		author: {
			id: 'user-2',
			name: 'John D.',
			avatarSrc: 'https://i.pravatar.cc/40?img=2',
		},
		createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
		isResolved: false,
		labels: ['Feature Request'],
		messages: [
			{
				id: 'msg-4',
				author: {
					id: 'user-2',
					name: 'John D.',
					avatarSrc: 'https://i.pravatar.cc/40?img=2',
				},
				content:
					'Could we add a dark mode feature to the application? This would improve usability for users working in low-light environments.',
				createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
				isInitialMessage: true,
			},
		],
	},
	{
		id: 'comment-3',
		numericId: 65,
		author: {
			id: 'user-3',
			name: 'Jane S.',
			avatarSrc: 'https://i.pravatar.cc/40?img=3',
		},
		createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
		isResolved: false,
		labels: ['Documentation', 'Enhancement'],
		messages: [
			{
				id: 'msg-5',
				author: {
					id: 'user-3',
					name: 'Jane S.',
					avatarSrc: 'https://i.pravatar.cc/40?img=3',
				},
				content:
					'The API documentation needs to be updated to reflect the recent changes we made to the authentication system. This will help developers integrate with our service more easily.',
				createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
				isInitialMessage: true,
			},
			{
				id: 'msg-6',
				author: {
					id: 'user-1',
					name: 'Karen J.',
					avatarSrc: 'https://i.pravatar.cc/40?img=1',
				},
				content: 'Good point!',
				createdAt: new Date(Date.now() - 60 * 60 * 60 * 1000),
			},
			{
				id: 'msg-7',
				author: {
					id: 'user-4',
					name: 'Bob M.',
					avatarSrc: 'https://i.pravatar.cc/40?img=4',
				},
				content: 'I will look into this.',
				createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
			},
			{
				id: 'msg-8',
				author: {
					id: 'user-3',
					name: 'Jane S.',
					avatarSrc: 'https://i.pravatar.cc/40?img=3',
				},
				content: 'Thanks everyone!',
				createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
			},
		],
	},
	{
		id: 'comment-4',
		numericId: 66,
		author: {
			id: 'user-4',
			name: 'Bob M.',
			avatarSrc: 'https://i.pravatar.cc/40?img=4',
		},
		createdAt: new Date(Date.now() - 96 * 60 * 60 * 1000),
		isResolved: false,
		labels: ['Question'],
		messages: [
			{
				id: 'msg-9',
				author: {
					id: 'user-4',
					name: 'Bob M.',
					avatarSrc: 'https://i.pravatar.cc/40?img=4',
				},
				content:
					'Should we consider migrating to the new version of the framework? It offers better performance and security features that could benefit our application.',
				createdAt: new Date(Date.now() - 96 * 60 * 60 * 1000),
				isInitialMessage: true,
			},
		],
	},
	{
		id: 'comment-5',
		numericId: 67,
		author: {
			id: 'user-1',
			name: 'Karen J.',
			avatarSrc: 'https://i.pravatar.cc/40?img=1',
		},
		createdAt: new Date(Date.now() - 120 * 60 * 60 * 1000),
		isResolved: true,
		labels: ['Bug'],
		messages: [
			{
				id: 'msg-10',
				author: {
					id: 'user-1',
					name: 'Karen J.',
					avatarSrc: 'https://i.pravatar.cc/40?img=1',
				},
				content: 'This has been resolved.',
				createdAt: new Date(Date.now() - 120 * 60 * 60 * 1000),
				isInitialMessage: true,
			},
		],
	},
	{
		id: 'comment-6',
		numericId: 68,
		author: {
			id: 'user-2',
			name: 'John D.',
			avatarSrc: 'https://i.pravatar.cc/40?img=2',
		},
		createdAt: new Date(Date.now() - 144 * 60 * 60 * 1000),
		isResolved: true,
		labels: ['Documentation'],
		messages: [
			{
				id: 'msg-11',
				author: {
					id: 'user-2',
					name: 'John D.',
					avatarSrc: 'https://i.pravatar.cc/40?img=2',
				},
				content: 'Documentation updated.',
				createdAt: new Date(Date.now() - 144 * 60 * 60 * 1000),
				isInitialMessage: true,
			},
		],
	},
];

const meta: Meta<typeof DsCommentsDrawer> = {
	title: 'Design System/Comments/CommentsDrawer',
	component: DsCommentsDrawer,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
Side panel for viewing and managing all comments.

**Features:**
- Displays list of comment cards
- Search functionality
- Filter button (integration point)
- Show/hide resolved comments
- Comment count in header
- Click to open comment bubble
- Hover syncs with indicators on screen
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether drawer is open',
		},
		showResolved: {
			control: 'boolean',
			description: 'Whether to show resolved comments',
		},
		searchQuery: {
			control: 'text',
			description: 'Search query',
		},
	},
	args: {
		onOpenChange: fn(),
		onShowResolvedChange: fn(),
		onSearchChange: fn(),
		onCommentClick: fn(),
		onResolveComment: fn(),
		onToggleActionRequired: fn(),
		onForward: fn(),
		onMarkUnread: fn(),
		onCopyLink: fn(),
		onDelete: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsCommentsDrawer>;

export const Default: Story = {
	args: {
		open: true,
		comments: createMockComments(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const title = canvas.getByText(/4 Comments/i);

		await expect(title).toBeInTheDocument();
	},
};

export const WithSearch: Story = {
	args: {
		open: true,
		comments: createMockComments(),
		searchQuery: 'Karen',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const searchInput = canvas.getByPlaceholderText(/search/i);

		await expect(searchInput).toBeInTheDocument();
	},
};

export const Empty: Story = {
	args: {
		open: true,
		comments: [],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const emptyMessage = canvas.getByText(/no comments yet/i);

		await expect(emptyMessage).toBeInTheDocument();
	},
};

export const Interactive: Story = {
	render: function InteractiveStory() {
		const [open, setOpen] = useState(false);
		const [searchQuery, setSearchQuery] = useState('');
		const [showResolved, setShowResolved] = useState(false);
		const [comments, setComments] = useState(createMockComments());

		const handleResolve = (commentId: string) => {
			setComments((prev) => prev.map((c) => (c.id === commentId ? { ...c, isResolved: true } : c)));
		};

		return (
			<div className={styles.storyWrapper}>
				<DsButton onClick={() => setOpen(true)}>Open Comments Drawer</DsButton>

				<DsCommentsDrawer
					open={open}
					onOpenChange={setOpen}
					comments={comments}
					searchQuery={searchQuery}
					onSearchChange={setSearchQuery}
					showResolved={showResolved}
					onShowResolvedChange={setShowResolved}
					onCommentClick={(comment) => console.log('Comment clicked:', comment.id)}
					onResolveComment={handleResolve}
					onToggleActionRequired={(commentId) => console.log('Toggle action required:', commentId)}
					onForward={(commentId) => console.log('Forward:', commentId)}
					onMarkUnread={(commentId) => console.log('Mark unread:', commentId)}
					onCopyLink={(commentId) => console.log('Copy link:', commentId)}
					onDelete={(commentId) => console.log('Delete:', commentId)}
				/>
			</div>
		);
	},
};

export const WithFilters: Story = {
	name: 'With Filters (Interactive)',
	parameters: {
		docs: {
			description: {
				story: `
Interactive story demonstrating the filter functionality. 

**Try these interactions:**
1. Click the **Filter** button to open the filter modal
2. Select filters from different categories:
   - **Status**: Filter by Unresolved, Resolved, or Action required
   - **Author**: Filter by specific comment authors (Karen J., John D., Jane S., Bob M.)
   - **Date range**: Filter by creation date
   - **Labels**: Filter by tags (Bug, High Priority, Feature Request, Documentation, Enhancement, Question)
3. Click **Apply** to see the filtered results
4. Selected filters appear as chips below the toolbar
5. Click on a chip to remove that filter, or use **Clear all** to remove all filters

**Current mock data:**
- 4 unresolved comments with various authors and labels
- 2 resolved comments
- Comment #63 has "Action required" status
				`,
			},
		},
	},
	render: function WithFiltersStory() {
		const [open, setOpen] = useState(true);
		const [searchQuery, setSearchQuery] = useState('');
		const [showResolved, setShowResolved] = useState(false);
		const [comments] = useState(createMockComments());

		return (
			<div className={styles.storyWrapper}>
				<div className={styles.filterDemo}>
					<h3 className={styles.filterDemoTitle}>Filter Demonstration</h3>
					<p className={styles.filterDemoText}>
						The drawer is open by default. Click the filter icon to explore filtering options.
					</p>
					<p className={styles.filterDemoText}>
						<strong>Try filtering by:</strong>
					</p>
					<ul className={styles.filterDemoList}>
						<li>Author: &quot;Karen J.&quot; to see 2 comments</li>
						<li>Label: &quot;Bug&quot; to see 2 comments</li>
						<li>Status: &quot;Action required&quot; to see 1 comment</li>
						<li>Multiple filters at once (e.g., Author + Label)</li>
					</ul>
				</div>

				<DsCommentsDrawer
					open={open}
					onOpenChange={setOpen}
					comments={comments}
					searchQuery={searchQuery}
					onSearchChange={setSearchQuery}
					showResolved={showResolved}
					onShowResolvedChange={setShowResolved}
					onCommentClick={(comment) => console.log('Comment clicked:', comment.id)}
					onResolveComment={(commentId) => console.log('Resolve:', commentId)}
					onToggleActionRequired={(commentId) => console.log('Toggle action required:', commentId)}
					onForward={(commentId) => console.log('Forward:', commentId)}
					onMarkUnread={(commentId) => console.log('Mark unread:', commentId)}
					onCopyLink={(commentId) => console.log('Copy link:', commentId)}
					onDelete={(commentId) => console.log('Delete:', commentId)}
				/>
			</div>
		);
	},
};
