import type { CSSProperties, ReactNode } from 'react';

export interface CommentAuthor {
	id: string;
	name: string;
	avatarSrc?: string;
}

export interface CommentMessage {
	id: string;
	author: CommentAuthor;
	content: string;
	createdAt: Date;
	isInitialMessage?: boolean;
}

export interface CommentData {
	id: string;
	numericId: number;
	author: CommentAuthor;
	createdAt: Date;
	isRead: boolean;
	isResolved: boolean;
	messages: CommentMessage[];
	participants: CommentAuthor[];
	labels?: string[];
}

export interface DsCommentCardProps {
	comment: CommentData;
	referenceTag?: ReactNode;
	disabled?: boolean;
	overflow?: 'hidden' | 'displayed';
	isActionRequired?: boolean;
	onClick?: () => void;
	onResolve?: () => void;
	onToggleActionRequired?: () => void;
	onForward?: () => void;
	onMarkUnread?: () => void;
	onCopyLink?: () => void;
	onDelete?: () => void;
	className?: string;
	style?: CSSProperties;
}
