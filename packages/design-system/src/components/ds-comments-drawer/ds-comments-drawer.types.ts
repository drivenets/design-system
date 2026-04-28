import type { CSSProperties, ReactNode, Ref } from 'react';
import type { CommentData } from '../ds-comment-card';

export interface DsCommentsDrawerProps {
	/**
	 * Ref forwarded to the drawer root element
	 */
	ref?: Ref<HTMLElement>;
	/**
	 * Whether the drawer is visible
	 */
	open: boolean;
	/**
	 * Called when the drawer should open or close (e.g., backdrop click, close button,
	 * escape key). Receives the next `open` state.
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * List of comment threads to render in the drawer
	 */
	comments: CommentData[];
	/**
	 * Whether resolved comments are currently included in the visible list.
	 * @default false
	 */
	showResolved?: boolean;
	/**
	 * Called when the "show resolved" toggle changes. Receives the new boolean value.
	 */
	onShowResolvedChange?: (show: boolean) => void;
	/**
	 * Current value of the search input (controlled)
	 */
	searchQuery?: string;
	/**
	 * Called when the search query changes. Receives the new query string.
	 */
	onSearchChange?: (query: string) => void;
	/**
	 * Called when a comment card is clicked. Receives the full comment so consumers
	 * can open the thread in a bubble or scroll to its anchor.
	 */
	onCommentClick?: (comment: CommentData) => void;
	/**
	 * Called when a comment is resolved from its card overflow menu. Receives the
	 * comment id.
	 */
	onResolveComment?: (commentId: string) => void;
	/**
	 * Called when a comment's action-required flag is toggled from its card overflow
	 * menu. Receives the comment id.
	 */
	onToggleActionRequired?: (commentId: string) => void;
	/**
	 * Called when a comment is forwarded from its card overflow menu. Receives the
	 * comment id.
	 */
	onForward?: (commentId: string) => void;
	/**
	 * Called when a comment is marked as unread from its card overflow menu. Receives
	 * the comment id.
	 */
	onMarkUnread?: (commentId: string) => void;
	/**
	 * Called when a link to the comment is copied from its card overflow menu.
	 * Receives the comment id.
	 */
	onCopyLink?: (commentId: string) => void;
	/**
	 * Called when a comment is deleted from its card overflow menu. Receives the
	 * comment id.
	 */
	onDelete?: (commentId: string) => void;
	/**
	 * Custom empty-state content shown when the comments list is empty after
	 * applying filters and search. Defaults to a built-in placeholder when omitted.
	 */
	noCommentsMessage?: ReactNode;
	/**
	 * Additional CSS class name applied to the drawer root
	 */
	className?: string;
	/**
	 * Inline styles applied to the drawer root
	 */
	style?: CSSProperties;
}
