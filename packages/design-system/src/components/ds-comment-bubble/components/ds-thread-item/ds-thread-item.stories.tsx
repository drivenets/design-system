import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { DsThreadItem, type DsThreadItemProps } from './index';
import { DsButton } from '../../../ds-button';

const meta: Meta<typeof DsThreadItem> = {
	title: 'Design System/Comments/Thread Item',
	component: DsThreadItem,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
Individual message item within a comment thread.
Displays the author, timestamp, message content, and action buttons.
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		id: {
			control: 'text',
			description: 'Unique identifier for the message',
		},
		author: {
			control: 'object',
			description: 'Message author information (name, avatar)',
		},
		content: {
			control: 'text',
			description: 'Message content text',
		},
		createdAt: {
			control: 'date',
			description: 'When the message was created',
		},
		isCommentAuthorMessage: {
			control: 'boolean',
			description: 'Whether this message is from the comment author (left-aligned)',
		},
		canModify: {
			control: 'boolean',
			description: 'Whether the current user can modify this message',
		},
		onEdit: {
			description: 'Callback when message is edited',
		},
		onDelete: {
			description: 'Callback when message is deleted',
		},
		onMarkUnread: {
			description: 'Callback for mark as unread action',
		},
		onResolved: {
			description: 'Callback for resolved action (check circle)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsThreadItem>;

const mockAuthor = {
	id: 'user-1',
	name: 'Karen J.',
	avatarSrc: 'https://i.pravatar.cc/150?img=1',
};

const INITIAL_CONTENT = 'Initial message content.';
const UPDATED_CONTENT = 'Content updated from outside.';

const defaultArgs: Partial<DsThreadItemProps> = {
	id: 'msg-1',
	author: mockAuthor,
	content: 'This is a sample message in the comment thread.',
	createdAt: new Date(Date.now() - 3600000),
	isCommentAuthorMessage: true,
	canModify: true,
	onEdit: fn(),
	onDelete: fn(),
	onMarkUnread: fn(),
	onResolved: fn(),
};

export const Default: Story = {
	args: defaultArgs,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Karen J.')).toBeInTheDocument();

		await expect(canvas.getByText('This is a sample message in the comment thread.')).toBeInTheDocument();

		const timestamp = canvas.getByText(/ago/i);
		await expect(timestamp).toBeInTheDocument();
	},
};

export const CurrentUserMessage: Story = {
	args: {
		...defaultArgs,
		id: 'msg-2',
		isCommentAuthorMessage: false,
		canModify: false,
		content: 'This is my message, so it appears aligned to the right.',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(
			canvas.getByText('This is my message, so it appears aligned to the right.'),
		).toBeInTheDocument();
	},
};

export const LongMessage: Story = {
	args: {
		...defaultArgs,
		id: 'msg-3',
		content:
			'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText(/adjusting the timeline/i)).toBeInTheDocument();
	},
};

export const NoAvatar: Story = {
	args: {
		...defaultArgs,
		id: 'msg-4',
		author: {
			id: 'user-2',
			name: 'John Doe',
			avatarSrc: undefined,
		},
		content: 'Message from a user without an avatar.',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('JD')).toBeInTheDocument();

		await expect(canvas.getByText('John Doe')).toBeInTheDocument();
	},
};

export const RecentMessage: Story = {
	args: {
		...defaultArgs,
		id: 'msg-5',
		createdAt: new Date(Date.now() - 30000),
		content: 'Just posted this message.',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const timestamp = canvas.getByText(/just now|ago/i);
		await expect(timestamp).toBeInTheDocument();
	},
};

export const OldMessage: Story = {
	args: {
		...defaultArgs,
		id: 'msg-6',
		createdAt: new Date(Date.now() - 86400000 * 3),
		content: 'This message was posted a few days ago.',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const timestamp = canvas.getByText(/\d+d ago/i);
		await expect(timestamp).toBeInTheDocument();
	},
};

export const MultilineMessage: Story = {
	args: {
		...defaultArgs,
		id: 'msg-7',
		content: `Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion`,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText(/Line 1: First line/i)).toBeInTheDocument();
	},
};

export const InteractiveActions: Story = {
	args: defaultArgs,
	parameters: {
		docs: {
			description: {
				story: 'Hover over the message to see the action buttons (More actions menu and Mark button).',
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('This is a sample message in the comment thread.')).toBeInTheDocument();
	},
};

export const ContentChangeWhileNotEditing: Story = {
	render: function Render() {
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
					onEdit={fn()}
					onDelete={fn()}
				/>

				<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
					Simulate external update
				</DsButton>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText(INITIAL_CONTENT)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /simulate external update/i }));

		await expect(canvas.getByText(UPDATED_CONTENT)).toBeInTheDocument();
		await expect(canvas.queryByText(INITIAL_CONTENT)).not.toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /more actions/i }));
		await userEvent.click(screen.getByRole('menuitem', { name: /edit/i }));

		const textarea = canvas.getByRole('textbox');
		await expect(textarea).toHaveValue(UPDATED_CONTENT);
	},
};

export const ContentChangeWhileEditing: Story = {
	render: function Render() {
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
					onEdit={fn()}
					onDelete={fn()}
				/>

				<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
					Simulate external update
				</DsButton>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText(INITIAL_CONTENT)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /more actions/i }));
		await userEvent.click(screen.getByRole('menuitem', { name: /edit/i }));

		const textarea = canvas.getByRole('textbox');
		await expect(textarea).toHaveValue(INITIAL_CONTENT);

		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'My custom edit');

		await expect(textarea).toHaveValue('My custom edit');

		await userEvent.click(canvas.getByRole('button', { name: /simulate external update/i }));

		await expect(textarea).toHaveValue('My custom edit');
	},
};

export const ContentChangeWhileEditingThenCancel: Story = {
	render: function Render() {
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
					onEdit={fn()}
					onDelete={fn()}
				/>

				<DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
					Simulate external update
				</DsButton>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: /more actions/i }));
		await userEvent.click(screen.getByRole('menuitem', { name: /edit/i }));

		const textarea = canvas.getByRole('textbox');
		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'My custom edit');

		await userEvent.click(canvas.getByRole('button', { name: /simulate external update/i }));

		await expect(textarea).toHaveValue('My custom edit');

		await userEvent.click(canvas.getByRole('button', { name: /cancel/i }));

		await waitFor(async () => {
			await expect(canvas.getByText(UPDATED_CONTENT)).toBeInTheDocument();
		});
		await expect(canvas.queryByText(INITIAL_CONTENT)).not.toBeInTheDocument();
	},
};
