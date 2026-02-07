import type { CSSProperties, ReactNode } from 'react';
import type { CommentData } from '../ds-comment-card';

export interface CommentFilter {
	author?: string[];
	dateRange?: { start: Date; end: Date };
	labels?: string[];
	status?: ('action-required' | 'resolved' | 'unresolved')[];
}

export interface DsCommentsDrawerProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	comments: CommentData[];
	getReferenceTag?: (comment: CommentData) => ReactNode;
	getIsActionRequired?: (comment: CommentData) => boolean;
	resolvedCount?: number;
	showResolved?: boolean;
	onShowResolvedChange?: (show: boolean) => void;
	searchQuery?: string;
	onSearchChange?: (query: string) => void;
	filters?: CommentFilter;
	onFiltersChange?: (filters: CommentFilter) => void;
	onCommentClick?: (comment: CommentData) => void;
	onResolveComment?: (commentId: string) => void;
	onToggleActionRequired?: (commentId: string) => void;
	onForward?: (commentId: string) => void;
	onMarkUnread?: (commentId: string) => void;
	onCopyLink?: (commentId: string) => void;
	onDelete?: (commentId: string) => void;
	className?: string;
	style?: CSSProperties;
}
