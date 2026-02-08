import type { CSSProperties } from 'react';

export type CommentIndicatorType = 'placeholder' | 'default' | 'action-required';

export interface DsCommentIndicatorProps {
	type?: CommentIndicatorType;
	avatarSrc?: string;
	onClick?: () => void;
	className?: string;
	style?: CSSProperties;
}
