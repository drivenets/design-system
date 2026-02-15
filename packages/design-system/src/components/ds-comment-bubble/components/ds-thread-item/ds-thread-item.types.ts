import type { CommentAuthor } from '../../../ds-comment-card';

export interface DsThreadItemProps {
	id: string;
	author: CommentAuthor;
	content: string;
	createdAt: Date;
	isCommentAuthorMessage?: boolean;
	canModify?: boolean;
	onEdit?: (messageId: string, newContent: string) => void;
	onDelete?: (messageId: string) => void;
	onMarkUnread?: (messageId: string) => void;
	onResolved?: (messageId: string) => void;
	className?: string;
}
