import type { CSSProperties, ReactNode } from 'react';
import type { CommentData } from '../ds-comment-card';

export interface DsCommentsDrawerProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	comments: CommentData[];
	showResolved?: boolean;
	onShowResolvedChange?: (show: boolean) => void;
	searchQuery?: string;
	onSearchChange?: (query: string) => void;
	onCommentClick?: (comment: CommentData) => void;
	onResolveComment?: (commentId: string) => void;
	onToggleActionRequired?: (commentId: string) => void;
	onForward?: (commentId: string) => void;
	onMarkUnread?: (commentId: string) => void;
	onCopyLink?: (commentId: string) => void;
	onDelete?: (commentId: string) => void;
	noCommentsMessage?: ReactNode;
	className?: string;
	style?: CSSProperties;
}
