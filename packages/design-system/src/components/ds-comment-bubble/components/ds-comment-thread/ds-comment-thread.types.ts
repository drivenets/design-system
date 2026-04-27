import type { CommentMessage, CommentAuthor } from '../../../ds-comment-card';

export interface DsCommentThreadProps {
	/**
	 * Ordered list of messages in the thread, from oldest to newest.
	 */
	messages: CommentMessage[];
	/**
	 * Author of the top-level comment. Used to visually distinguish their messages
	 * from replies by other participants.
	 */
	commentAuthor: CommentAuthor;
	/**
	 * The user currently viewing the thread. Used to decide which messages the viewer
	 * can edit or delete.
	 */
	currentUser?: CommentAuthor;
	/**
	 * Called when a message is edited. Receives the message id and the new content.
	 */
	onEditMessage?: (messageId: string, newContent: string) => void;
	/**
	 * Called when a message is deleted. Receives the message id.
	 */
	onDeleteMessage?: (messageId: string) => void;
	/**
	 * Called when a message is marked as unread. Receives the message id.
	 */
	onMarkUnread?: (messageId: string) => void;
	/**
	 * Called when a message is resolved. Receives the message id.
	 */
	onResolved?: (messageId: string) => void;
	/**
	 * Additional CSS class name applied to the thread root
	 */
	className?: string;
}
