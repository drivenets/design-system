import type { CSSProperties, ReactNode, Ref } from 'react';
import type { CommentAuthor, CommentData } from '../ds-comment-card';

export interface DsCommentBubbleProps {
	/**
	 * Ref forwarded to the bubble root element
	 */
	ref?: Ref<HTMLDivElement>;
	/**
	 * Existing comment thread rendered inside the bubble. Omit to render an empty
	 * bubble for composing a new comment.
	 */
	comment?: CommentData;
	/**
	 * The user currently viewing the bubble. Used to decide whether thread messages
	 * can be edited or deleted by the viewer.
	 */
	currentUser?: CommentAuthor;
	/**
	 * Hide the "action required" checkbox and the associated visual highlight.
	 * @default false
	 */
	hideActionRequired?: boolean;
	/**
	 * Whether the comment is flagged as requiring action. Drives the action-required
	 * highlight and the checkbox state.
	 * @default false
	 */
	actionRequired?: boolean;
	/**
	 * Called when the "action required" checkbox is toggled. Receives the new checked state.
	 */
	onActionRequiredChange?: (checked: boolean) => void;
	/**
	 * Current value of the reply / new-comment textarea (controlled)
	 */
	value?: string;
	/**
	 * Called whenever the textarea value changes. Receives the new string value.
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Called when the user submits the textarea content (clicks send or presses Enter).
	 * Receives the message content and the current action-required flag.
	 */
	onSend?: (content: string, actionRequired: boolean) => void;
	/**
	 * Called when the bubble should be dismissed (e.g., clicking outside an empty bubble
	 * or pressing the close affordance).
	 */
	onClose?: () => void;
	/**
	 * Called when the user resolves the top-level comment from the bubble header menu.
	 */
	onResolve?: () => void;
	/**
	 * Called when the user toggles the top-level comment's action-required flag from
	 * the bubble header menu.
	 */
	onToggleActionRequired?: () => void;
	/**
	 * Called when the user forwards the top-level comment from the bubble header menu.
	 */
	onForward?: () => void;
	/**
	 * Called when the user marks the top-level comment as unread from the bubble header menu.
	 */
	onMarkUnread?: () => void;
	/**
	 * Called when the user copies a link to the top-level comment.
	 */
	onCopyLink?: () => void;
	/**
	 * Called when the user deletes the top-level comment.
	 */
	onDelete?: () => void;
	/**
	 * Called when a thread message is edited. Receives the message id and the new content.
	 */
	onEditMessage?: (messageId: string, newContent: string) => void;
	/**
	 * Called when a thread message is deleted. Receives the message id.
	 */
	onDeleteMessage?: (messageId: string) => void;
	/**
	 * Called when a thread message is marked as unread. Receives the message id.
	 */
	onMessageMarkUnread?: (messageId: string) => void;
	/**
	 * Called when a thread message is resolved. Receives the message id.
	 */
	onMessageResolved?: (messageId: string) => void;
	/**
	 * Optional reference chip shown in the bubble header. A string is rendered as a
	 * `DsTag` with a sell icon; any other `ReactNode` is rendered verbatim.
	 */
	referenceTag?: ReactNode;
	/**
	 * Additional CSS class name applied to the bubble root
	 */
	className?: string;
	/**
	 * Inline styles applied to the bubble root
	 */
	style?: CSSProperties;
}
