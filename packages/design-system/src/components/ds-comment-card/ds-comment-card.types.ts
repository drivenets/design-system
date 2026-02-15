import type { CSSProperties, ReactNode, Ref } from 'react';

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
	isResolved?: boolean;
}

export interface CommentData {
	id: string;
	numericId: number;
	author: CommentAuthor;
	createdAt: Date;
	isResolved: boolean;
	messages: CommentMessage[];
	labels?: string[];
	referenceTag?: ReactNode;
	isActionRequired?: boolean;
}

export interface DsCommentCardProps {
	ref?: Ref<HTMLButtonElement>;
	comment: CommentData;
	disabled?: boolean;
	overflow?: 'hidden' | 'displayed';
	onClick?: () => void;
	onResolve?: () => void;
	onToggleActionRequired?: () => void;
	onForward?: () => void;
	onMarkUnread?: () => void;
	onCopyLink?: () => void;
	onDelete?: () => void;
	formatTimestamp?: (date: Date) => string;
	className?: string;
	style?: CSSProperties;
}
