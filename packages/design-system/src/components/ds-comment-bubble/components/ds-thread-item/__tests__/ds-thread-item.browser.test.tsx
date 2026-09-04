import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsThreadItem, type DsThreadItemProps } from '../index';
import { DsButton } from '../../../../ds-button';

const mockAuthor = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/150?img=1',
};

const INITIAL_CONTENT = 'Initial message content.';
const UPDATED_CONTENT = 'Content updated from outside.';

const getDefaultArgs = (overrides: Partial<DsThreadItemProps> = {}): DsThreadItemProps => ({
	id: 'msg-1',
	author: mockAuthor,
	content: 'This is a sample message in the comment thread.',
	createdAt: new Date(Date.now() - 3600000),
	isCommentAuthorMessage: true,
	canModify: true,
	onEdit: vi.fn(),
	onDelete: vi.fn(),
	onMarkUnread: vi.fn(),
	onResolved: vi.fn(),
	...overrides,
});

describe('DsThreadItem', () => {
	it('should render author name, content, and timestamp', async () => {
		await page.render(<DsThreadItem {...getDefaultArgs()} />);

		await expect.element(page.getByText('Karen J.')).toBeInTheDocument();
		await expect
			.element(page.getByText('This is a sample message in the comment thread.'))
			.toBeInTheDocument();
		await expect.element(page.getByText(/ago/i)).toBeInTheDocument();
	});

	it('should render content for a current user message', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-2',
					isCommentAuthorMessage: false,
					canModify: false,
					content: 'This is my message, so it appears aligned to the right.',
				})}
			/>,
		);

		await expect
			.element(page.getByText('This is my message, so it appears aligned to the right.'))
			.toBeInTheDocument();
	});

	it('should render a long message', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-3',
					content:
						'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.',
				})}
			/>,
		);

		await expect.element(page.getByText(/adjusting the timeline/i)).toBeInTheDocument();
	});

	it('should show initials and name when author has no avatar', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-4',
					author: { id: 'user-2', name: 'John Doe', avatarSrc: undefined },
					content: 'Message from a user without an avatar.',
				})}
			/>,
		);

		await expect.element(page.getByText('JD')).toBeInTheDocument();
		await expect.element(page.getByText('John Doe')).toBeInTheDocument();
	});

	it('should show a recent timestamp for a message posted seconds ago', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-5',
					createdAt: new Date(Date.now() - 30000),
					content: 'Just posted this message.',
				})}
			/>,
		);

		await expect.element(page.getByText(/just now|ago/i)).toBeInTheDocument();
	});

	it('should show a day-based timestamp for an old message', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-6',
					createdAt: new Date(Date.now() - 86400000 * 3),
					content: 'This message was posted a few days ago.',
				})}
			/>,
		);

		await expect.element(page.getByText(/\d+d ago/i)).toBeInTheDocument();
	});

	it('should render a multiline message', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					id: 'msg-7',
					content: `Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion`,
				})}
			/>,
		);

		await expect.element(page.getByText(/Line 1: First line/i)).toBeInTheDocument();
	});

	it('should call onEdit with the message id and new content when saving an edit', async () => {
		const onEdit = vi.fn();

		await page.render(<DsThreadItem {...getDefaultArgs({ onEdit })} />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		const textarea = page.getByRole('textbox');
		await expect.element(textarea).toHaveValue('This is a sample message in the comment thread.');

		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'Updated message content');

		await userEvent.click(page.getByRole('button', { name: /save/i }));

		expect(onEdit).toHaveBeenCalledWith('msg-1', 'Updated message content');
	});

	it('should disable the save button when the edited content is empty', async () => {
		await page.render(<DsThreadItem {...getDefaultArgs()} />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		const textarea = page.getByRole('textbox');
		await userEvent.clear(textarea);

		await expect.element(page.getByRole('button', { name: /save/i })).toBeDisabled();
	});

	it('should disable the save button when the content is unchanged', async () => {
		await page.render(<DsThreadItem {...getDefaultArgs()} />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		await expect.element(page.getByRole('button', { name: /save/i })).toBeDisabled();
	});

	it('should call onDelete with the message id when the delete action is clicked', async () => {
		const onDelete = vi.fn();

		await page.render(<DsThreadItem {...getDefaultArgs({ onDelete })} />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /delete/i }));

		expect(onDelete).toHaveBeenCalledWith('msg-1');
	});

	it('should call onMarkUnread with the message id when the mark as action is clicked', async () => {
		const onMarkUnread = vi.fn();

		await page.render(<DsThreadItem {...getDefaultArgs({ onMarkUnread })} />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /mark as/i }));

		expect(onMarkUnread).toHaveBeenCalledWith('msg-1');
	});

	it('should call onResolved with the message id when the resolve button is clicked', async () => {
		const onResolved = vi.fn();

		await page.render(<DsThreadItem {...getDefaultArgs({ onResolved })} />);

		await userEvent.click(page.getByRole('button', { name: /mark message as resolved/i }));

		expect(onResolved).toHaveBeenCalledWith('msg-1');
	});

	it('should not render action buttons when the viewer cannot modify', async () => {
		await page.render(
			<DsThreadItem
				{...getDefaultArgs({
					canModify: false,
					onEdit: undefined,
					onDelete: undefined,
					onMarkUnread: undefined,
					onResolved: undefined,
				})}
			/>,
		);

		await expect.element(page.getByText('Karen J.')).toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: /more actions/i })).not.toBeInTheDocument();
		await expect
			.element(page.getByRole('button', { name: /mark message as resolved/i }))
			.not.toBeInTheDocument();
	});

	it('should reflect external content changes while not editing', async () => {
		function Wrapper() {
			const [content, setContent] = useState(INITIAL_CONTENT);

			return (
				<>
					<DsThreadItem
						id="msg-ext-1"
						author={mockAuthor}
						content={content}
						createdAt={new Date(Date.now() - 3600000)}
						isCommentAuthorMessage
						canModify
						onEdit={vi.fn()}
						onDelete={vi.fn()}
					/>

					<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
						Simulate external update
					</DsButton>
				</>
			);
		}

		await page.render(<Wrapper />);

		await expect.element(page.getByText(INITIAL_CONTENT)).toBeInTheDocument();

		await userEvent.click(page.getByRole('button', { name: /simulate external update/i }));

		await expect.element(page.getByText(UPDATED_CONTENT)).toBeInTheDocument();
		await expect.element(page.getByText(INITIAL_CONTENT)).not.toBeInTheDocument();

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		await expect.element(page.getByRole('textbox')).toHaveValue(UPDATED_CONTENT);
	});

	it('should keep the in-progress edit when content changes while editing', async () => {
		function Wrapper() {
			const [content, setContent] = useState(INITIAL_CONTENT);

			return (
				<>
					<DsThreadItem
						id="msg-ext-2"
						author={mockAuthor}
						content={content}
						createdAt={new Date(Date.now() - 3600000)}
						isCommentAuthorMessage
						canModify
						onEdit={vi.fn()}
						onDelete={vi.fn()}
					/>

					<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
						Simulate external update
					</DsButton>
				</>
			);
		}

		await page.render(<Wrapper />);

		await expect.element(page.getByText(INITIAL_CONTENT)).toBeInTheDocument();

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		const textarea = page.getByRole('textbox');
		await expect.element(textarea).toHaveValue(INITIAL_CONTENT);

		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'My custom edit');

		await expect.element(textarea).toHaveValue('My custom edit');

		await userEvent.click(page.getByRole('button', { name: /simulate external update/i }));

		await expect.element(textarea).toHaveValue('My custom edit');
	});

	it('should revert to the updated content after cancelling an edit that overlapped an external change', async () => {
		function Wrapper() {
			const [content, setContent] = useState(INITIAL_CONTENT);

			return (
				<>
					<DsThreadItem
						id="msg-ext-3"
						author={mockAuthor}
						content={content}
						createdAt={new Date(Date.now() - 3600000)}
						isCommentAuthorMessage
						canModify
						onEdit={vi.fn()}
						onDelete={vi.fn()}
					/>

					<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
						Simulate external update
					</DsButton>
				</>
			);
		}

		await page.render(<Wrapper />);

		await userEvent.click(page.getByRole('button', { name: /more actions/i }));
		await userEvent.click(page.getByRole('menuitem', { name: /edit/i }));

		const textarea = page.getByRole('textbox');
		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'My custom edit');

		await userEvent.click(page.getByRole('button', { name: /simulate external update/i }));

		await expect.element(textarea).toHaveValue('My custom edit');

		await userEvent.click(page.getByRole('button', { name: /cancel/i }));

		await expect.element(page.getByText(UPDATED_CONTENT)).toBeInTheDocument();
		await expect.element(page.getByText(INITIAL_CONTENT)).not.toBeInTheDocument();
	});
});
