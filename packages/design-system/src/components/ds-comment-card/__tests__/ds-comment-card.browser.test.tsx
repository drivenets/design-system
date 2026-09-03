import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsCommentCard } from '../index';
import type { CommentData } from '../ds-comment-card.types';

const author = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/40?img=1',
};

const createMockComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: 'comment-1',
	numericId: 63,
	author,
	createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
	isResolved: false,
	messages: [
		{
			id: 'msg-1',
			author,
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
			author,
			content: 'Great, let us proceed then.',
			createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
		},
	],
	...overrides,
});

describe('DsCommentCard', () => {
	it('should render the card button with an aria-label, comment text, and reply count', async () => {
		await page.render(<DsCommentCard comment={createMockComment()} overflow="hidden" />);

		const card = page.getByRole('button', { name: /Comment #/i });

		await expect.element(card).toBeInTheDocument();
		await expect.element(card).toHaveAttribute('aria-label');
		await expect.element(page.getByText(/resource allocation/)).toBeInTheDocument();
		await expect.element(page.getByText(/3 replies/i)).toBeInTheDocument();
	});

	it('should render the action required affordance when isActionRequired is set', async () => {
		await page.render(
			<DsCommentCard comment={createMockComment({ isActionRequired: true })} overflow="hidden" />,
		);

		const card = page.getByRole('button', { name: /action required/i });

		await expect.element(card).toBeInTheDocument();
	});

	it('should disable the card button when disabled', async () => {
		await page.render(<DsCommentCard comment={createMockComment()} disabled overflow="hidden" />);

		const card = page.getByRole('button', { name: /Comment #/i });

		await expect.element(card).toBeDisabled();
	});

	it('should render the full comment text when overflow is displayed', async () => {
		await page.render(<DsCommentCard comment={createMockComment()} overflow="displayed" />);

		const card = page.getByRole('button', { name: /Comment #/i });

		await expect.element(card).toBeInTheDocument();
		await expect.element(page.getByText(/resource allocation/)).toBeInTheDocument();
	});

	it('should render a single-message comment', async () => {
		await page.render(
			<DsCommentCard
				comment={createMockComment({
					messages: [
						{
							id: 'msg-1',
							author,
							content: 'This is a short single message comment.',
							createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
							isInitialMessage: true,
						},
					],
				})}
				overflow="hidden"
			/>,
		);

		const card = page.getByRole('button', { name: /Comment #/i });

		await expect.element(card).toBeInTheDocument();
		await expect.element(page.getByText(/This is a short single message comment/)).toBeInTheDocument();
	});

	it('should render the reference tag text', async () => {
		await page.render(
			<DsCommentCard
				comment={createMockComment({ referenceTag: 'Resource allocation' })}
				overflow="hidden"
			/>,
		);

		await expect.element(page.getByText('Resource allocation', { exact: true })).toBeInTheDocument();
	});

	it('should call onClick once when the card is clicked', async () => {
		const onClick = vi.fn();

		await page.render(<DsCommentCard comment={createMockComment()} overflow="hidden" onClick={onClick} />);

		await page.getByRole('button', { name: /Comment #63/i }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('should render "1 reply" (singular) for a comment with exactly one reply', async () => {
		await page.render(
			<DsCommentCard
				comment={createMockComment({
					messages: [
						{
							id: 'msg-1',
							author: { id: 'user-1', name: 'Karen J.' },
							content: 'Initial message',
							createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
							isInitialMessage: true,
						},
						{
							id: 'msg-2',
							author: { id: 'user-2', name: 'John D.' },
							content: 'One reply',
							createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
						},
					],
				})}
				overflow="hidden"
			/>,
		);

		await expect.element(page.getByText('1 reply')).toBeInTheDocument();
	});

	it('should use a custom timestamp formatter to render an absolute date', async () => {
		const formatTimestamp = (date: Date): string =>
			date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			});

		await page.render(
			<DsCommentCard comment={createMockComment()} overflow="hidden" formatTimestamp={formatTimestamp} />,
		);

		const card = page.getByRole('button', { name: /Comment #/i });

		await expect.element(card).toBeInTheDocument();

		const cardText = card.element().textContent;

		expect(cardText).toMatch(/\d{4}/);
		expect(cardText).not.toMatch(/ago/i);
	});
});
