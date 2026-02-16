import type { CommentMessage, CommentAuthor } from '../../../ds-comment-card';

export interface DsCommentThreadProps {
	messages: CommentMessage[];
	commentAuthor: CommentAuthor;
	currentUser?: CommentAuthor;
	onEditMessage?: (messageId: string, newContent: string) => void;
	onDeleteMessage?: (messageId: string) => void;
	onMarkUnread?: (messageId: string) => void;
	onResolved?: (messageId: string) => void;
	className?: string;
}
