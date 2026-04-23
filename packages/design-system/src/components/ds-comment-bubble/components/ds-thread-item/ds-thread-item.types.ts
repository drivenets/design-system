import type { CommentAuthor } from '../../../ds-comment-card';

export interface DsThreadItemProps {
	/**
	 * Stable identifier for the message. Passed to callbacks to identify which
	 * message the user acted on.
	 */
	id: string;
	/**
	 * Author of the message
	 */
	author: CommentAuthor;
	/**
	 * Text content of the message
	 */
	content: string;
	/**
	 * Timestamp when the message was created
	 */
	createdAt: Date;
	/**
	 * Whether this message was posted by the author of the top-level comment.
	 * Styled slightly differently from replies by other participants.
	 * @default false
	 */
	isCommentAuthorMessage?: boolean;
	/**
	 * Whether the current viewer can edit or delete this message. Typically true
	 * only when the viewer is the message's author.
	 * @default false
	 */
	canModify?: boolean;
	/**
	 * Called when the viewer saves an edit. Receives the message id and the new content.
	 */
	onEdit?: (messageId: string, newContent: string) => void;
	/**
	 * Called when the viewer deletes the message. Receives the message id.
	 */
	onDelete?: (messageId: string) => void;
	/**
	 * Called when the viewer marks the message as unread. Receives the message id.
	 */
	onMarkUnread?: (messageId: string) => void;
	/**
	 * Called when the viewer resolves the message. Receives the message id.
	 */
	onResolved?: (messageId: string) => void;
	/**
	 * Additional CSS class name applied to the item root
	 */
	className?: string;
}
