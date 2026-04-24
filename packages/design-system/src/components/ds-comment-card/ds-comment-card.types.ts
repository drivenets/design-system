import type { CSSProperties, ReactNode, Ref } from 'react';

export interface CommentAuthor {
	/**
	 * Stable identifier for the user. Used to compare authors (e.g. to determine
	 * whether the current viewer can edit a message).
	 */
	id: string;
	/**
	 * Display name shown next to the avatar
	 */
	name: string;
	/**
	 * Optional URL to the user's avatar image. When omitted, the avatar falls back
	 * to initials derived from `name`.
	 */
	avatarSrc?: string;
}

export interface CommentMessage {
	/**
	 * Stable identifier for the message. Passed to callbacks to identify which
	 * message was acted on.
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
	 * Whether this message is the first message in a thread (i.e., the top-level
	 * comment body). Used to render it differently from replies.
	 * @default false
	 */
	isInitialMessage?: boolean;
	/**
	 * Whether this message has been marked resolved
	 * @default false
	 */
	isResolved?: boolean;
}

export interface CommentData {
	/**
	 * Stable identifier for the comment thread. Passed to drawer/bubble callbacks
	 * to identify which comment was acted on.
	 */
	id: string;
	/**
	 * Short, user-facing numeric identifier (e.g., "#42") shown in the card header
	 * for quick reference in conversations.
	 */
	numericId: number;
	/**
	 * Author of the top-level comment
	 */
	author: CommentAuthor;
	/**
	 * Timestamp when the top-level comment was created
	 */
	createdAt: Date;
	/**
	 * Whether the entire comment thread is resolved. When true, the card is rendered
	 * in its resolved (muted) state.
	 */
	isResolved: boolean;
	/**
	 * Ordered list of messages in the thread, from oldest to newest. The first
	 * message is typically the top-level comment body.
	 */
	messages: CommentMessage[];
	/**
	 * Optional tag labels used for filtering and grouping in the comments drawer.
	 */
	labels?: string[];
	/**
	 * Optional reference chip shown in the card header. A string renders as a tag;
	 * any other `ReactNode` renders verbatim.
	 */
	referenceTag?: ReactNode;
	/**
	 * Whether the comment is flagged as requiring action. Drives the action-required
	 * highlight.
	 * @default false
	 */
	isActionRequired?: boolean;
}

export interface DsCommentCardProps {
	/**
	 * Ref forwarded to the card root button element
	 */
	ref?: Ref<HTMLButtonElement>;
	/**
	 * The comment thread rendered by the card
	 */
	comment: CommentData;
	/**
	 * Whether the card is disabled and cannot be clicked
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * How long message content is rendered:
	 * - `hidden` (default): truncate to a preview with ellipsis
	 * - `displayed`: show the full message content without truncation
	 * @default hidden
	 */
	overflow?: 'hidden' | 'displayed';
	/**
	 * Called when the card body is clicked (typically opens the thread in a bubble/drawer).
	 */
	onClick?: () => void;
	/**
	 * Called when the user resolves the comment from the card's overflow menu.
	 */
	onResolve?: () => void;
	/**
	 * Called when the user toggles the comment's action-required flag from the overflow menu.
	 */
	onToggleActionRequired?: () => void;
	/**
	 * Called when the user forwards the comment from the overflow menu.
	 */
	onForward?: () => void;
	/**
	 * Called when the user marks the comment as unread from the overflow menu.
	 */
	onMarkUnread?: () => void;
	/**
	 * Called when the user copies a link to the comment from the overflow menu.
	 */
	onCopyLink?: () => void;
	/**
	 * Called when the user deletes the comment from the overflow menu.
	 */
	onDelete?: () => void;
	/**
	 * Formatter for the card's timestamp. Receives the `createdAt` Date and returns
	 * the string to display. Lets consumers localize or swap the relative/absolute format.
	 */
	formatTimestamp?: (date: Date) => string;
	/**
	 * Additional CSS class name applied to the card root
	 */
	className?: string;
	/**
	 * Inline styles applied to the card root
	 */
	style?: CSSProperties;
}
