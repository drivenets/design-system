import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsCommentBubble } from '../index';
import type { CommentData, CommentAuthor } from '../../ds-comment-card';

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
			content: 'I think we should consider adjusting the timeline.',
			createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
		},
	],
	...overrides,
});

describe('DsCommentBubble', () => {
	it('should render initial state with placeholder', async () => {
		await page.render(<DsCommentBubble />);

		const textarea = page.getByRole('textbox', { name: /add a comment/i });

		await expect.element(textarea).toBeInTheDocument();
		await expect.element(textarea).toHaveAttribute('placeholder', 'Add a comment');
	});

	it('should show action required checkbox and enabled send button when typing', async () => {
		await page.render(<DsCommentBubble value="This is a new comment..." />);

		const checkbox = page.getByRole('checkbox', { name: /action required/i });
		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(checkbox).toBeInTheDocument();
		await expect.element(sendButton).toBeEnabled();
	});

	it('should show checked action required checkbox', async () => {
		await page.render(<DsCommentBubble value="This needs attention!" actionRequired />);

		const checkbox = page.getByRole('checkbox', { name: /action required/i });
		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(checkbox).toBeChecked();
		await expect.element(sendButton).toBeEnabled();
	});

	it('should hide action required checkbox when hideActionRequired is set', async () => {
		await page.render(<DsCommentBubble value="This is a new comment..." hideActionRequired />);

		const checkbox = page.getByRole('checkbox', { name: /action required/i });
		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(checkbox).not.toBeInTheDocument();
		await expect.element(sendButton).toBeEnabled();
	});

	it('should render thread dialog', async () => {
		await page.render(<DsCommentBubble comment={createMockComment()} currentUser={currentUser} />);

		const dialog = page.getByRole('dialog', { name: /comment thread #63/i });

		await expect.element(dialog).toBeInTheDocument();
	});

	it('should render thread with action required badge', async () => {
		await page.render(
			<DsCommentBubble comment={createMockComment()} currentUser={currentUser} actionRequired />,
		);

		const dialog = page.getByRole('dialog', { name: /comment thread #63/i });

		await expect.element(dialog).toBeInTheDocument();
	});

	it('should hide action required badge in thread when hideActionRequired is set', async () => {
		await page.render(
			<DsCommentBubble
				comment={createMockComment()}
				currentUser={currentUser}
				hideActionRequired
				actionRequired
			/>,
		);

		const dialog = page.getByRole('dialog', { name: /comment thread #63/i });
		const badge = page.getByText('Action required');

		await expect.element(dialog).toBeInTheDocument();
		await expect.element(badge).not.toBeInTheDocument();
	});

	it('should call onSend when send button is clicked', async () => {
		const onSend = vi.fn();

		await page.render(<DsCommentBubble value="Test message to send" onSend={onSend} />);

		await page.getByRole('button', { name: /send/i }).click();

		expect(onSend).toHaveBeenCalledWith('Test message to send', false);
	});

	it('should call onSend when Enter key is pressed', async () => {
		const onSend = vi.fn();

		await page.render(<DsCommentBubble value="Enter key message" onSend={onSend} />);

		const textarea = page.getByRole('textbox');

		await textarea.click();
		await userEvent.keyboard('{Enter}');

		expect(onSend).toHaveBeenCalledWith('Enter key message', false);
	});

	it('should disable send button when value is empty', async () => {
		await page.render(<DsCommentBubble value="" />);

		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(sendButton).toBeDisabled();
	});

	it('should disable send button in thread when value is empty', async () => {
		await page.render(<DsCommentBubble comment={createMockComment()} currentUser={currentUser} value="" />);

		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(sendButton).toBeDisabled();
	});

	it('should enable send button in thread and call onSend on click', async () => {
		const onSend = vi.fn();

		await page.render(
			<DsCommentBubble
				comment={createMockComment()}
				currentUser={currentUser}
				value="A reply"
				onSend={onSend}
			/>,
		);

		const sendButton = page.getByRole('button', { name: /send/i });

		await expect.element(sendButton).toBeEnabled();

		await sendButton.click();

		expect(onSend).toHaveBeenCalledWith('A reply', false);
	});

	it('should call onClose when close button is clicked in thread', async () => {
		const onClose = vi.fn();

		await page.render(
			<DsCommentBubble comment={createMockComment()} currentUser={currentUser} onClose={onClose} />,
		);

		await page.getByRole('button', { name: /close/i }).click();

		expect(onClose).toHaveBeenCalledOnce();
	});

	it('should call onResolve when resolve button is clicked in thread', async () => {
		const onResolve = vi.fn();

		await page.render(
			<DsCommentBubble comment={createMockComment()} currentUser={currentUser} onResolve={onResolve} />,
		);

		await page.getByRole('button', { name: 'Resolve' }).click();

		expect(onResolve).toHaveBeenCalledOnce();
	});

	it('should call onValueChange when typing in textarea', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsCommentBubble
				comment={createMockComment()}
				currentUser={currentUser}
				value=""
				onValueChange={onValueChange}
			/>,
		);

		const textarea = page.getByRole('textbox', { name: /reply/i });

		await textarea.fill('new text');

		expect(onValueChange).toHaveBeenCalled();
	});

	it('should render initial state as dialog with correct label', async () => {
		await page.render(<DsCommentBubble referenceTag="My tag" />);

		const dialog = page.getByRole('dialog', { name: /add new comment/i });

		await expect.element(dialog).toBeInTheDocument();
	});

	it('should show reference tag and comment id in thread', async () => {
		await page.render(
			<DsCommentBubble
				comment={createMockComment()}
				currentUser={currentUser}
				referenceTag="Resource allocation"
			/>,
		);

		await expect.element(page.getByText('Resource allocation', { exact: true })).toBeInTheDocument();
		await expect.element(page.getByText('#63')).toBeInTheDocument();
	});
});
