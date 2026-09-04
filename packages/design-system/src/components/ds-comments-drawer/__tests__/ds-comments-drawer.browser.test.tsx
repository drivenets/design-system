import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsCommentsDrawer } from '../index';
import type { CommentData } from '../../ds-comment-card';

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

describe('DsCommentsDrawer', () => {
	it('should show comment count in header for unresolved comments', async () => {
		await page.render(<DsCommentsDrawer open onOpenChange={vi.fn()} comments={createMockComments()} />);

		await expect.element(page.getByText(/4 Comments/i)).toBeInTheDocument();
	});

	it('should render a search input', async () => {
		await page.render(
			<DsCommentsDrawer open onOpenChange={vi.fn()} comments={createMockComments()} searchQuery="Karen" />,
		);

		await expect.element(page.getByPlaceholder(/search/i)).toBeInTheDocument();
	});

	it('should show empty state when there are no comments', async () => {
		await page.render(<DsCommentsDrawer open onOpenChange={vi.fn()} comments={[]} />);

		await expect.element(page.getByText(/no comments yet/i)).toBeInTheDocument();
	});

	it('should show resolved toggle with resolved count and call onShowResolvedChange with true', async () => {
		const onShowResolvedChange = vi.fn();

		await page.render(
			<DsCommentsDrawer
				open
				onOpenChange={vi.fn()}
				comments={createMockComments()}
				showResolved={false}
				onShowResolvedChange={onShowResolvedChange}
			/>,
		);

		const toggleButton = page.getByRole('button', { name: /show resolved/i });

		await expect.element(toggleButton).toBeInTheDocument();
		await expect.element(toggleButton).toHaveTextContent(/\(2\)/);

		await toggleButton.click();

		expect(onShowResolvedChange).toHaveBeenCalledWith(true);
	});

	it('should show hide resolved toggle and call onShowResolvedChange with false', async () => {
		const onShowResolvedChange = vi.fn();

		await page.render(
			<DsCommentsDrawer
				open
				onOpenChange={vi.fn()}
				comments={createMockComments()}
				showResolved
				onShowResolvedChange={onShowResolvedChange}
			/>,
		);

		const toggleButton = page.getByRole('button', { name: /hide resolved/i });

		await expect.element(toggleButton).toBeInTheDocument();

		await toggleButton.click();

		expect(onShowResolvedChange).toHaveBeenCalledWith(false);
	});

	it('should call onCommentClick when a comment card is clicked', async () => {
		const onCommentClick = vi.fn();

		await page.render(
			<DsCommentsDrawer
				open
				onOpenChange={vi.fn()}
				comments={createMockComments()}
				onCommentClick={onCommentClick}
			/>,
		);

		const cards = page.getByRole('button', { name: /comment #/i });

		await cards.first().click();

		expect(onCommentClick).toHaveBeenCalledOnce();
	});

	it('should filter comments by search text', async () => {
		await page.render(
			<DsCommentsDrawer
				open
				onOpenChange={vi.fn()}
				comments={createMockComments()}
				searchQuery="dark mode"
			/>,
		);

		await expect.element(page.getByText(/dark mode/i)).toBeInTheDocument();
		expect(page.getByRole('button', { name: /comment #/i }).elements()).toHaveLength(1);
	});

	it('should filter comments by id search', async () => {
		await page.render(
			<DsCommentsDrawer open onOpenChange={vi.fn()} comments={createMockComments()} searchQuery="#65" />,
		);

		expect(page.getByRole('button', { name: /comment #/i }).elements()).toHaveLength(1);
	});

	it('should render a custom empty message', async () => {
		await page.render(
			<DsCommentsDrawer open onOpenChange={vi.fn()} comments={[]} noCommentsMessage="Nothing to see here!" />,
		);

		await expect.element(page.getByText('Nothing to see here!')).toBeInTheDocument();
	});

	it('should not show resolved toggle when there are no resolved comments', async () => {
		const unresolvedComments: CommentData[] = createMockComments().filter((comment) => !comment.isResolved);

		await page.render(<DsCommentsDrawer open onOpenChange={vi.fn()} comments={unresolvedComments} />);

		await expect.element(page.getByRole('button', { name: /show resolved/i })).not.toBeInTheDocument();
	});
});
