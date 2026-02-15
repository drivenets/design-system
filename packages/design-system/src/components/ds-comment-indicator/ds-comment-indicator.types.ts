import type { CSSProperties, Ref } from 'react';

export type CommentIndicatorType = 'placeholder' | 'default' | 'action-required';

export interface DsCommentIndicatorProps {
	type?: CommentIndicatorType;
	avatarSrc?: string;
	avatarName?: string;
	onClick?: () => void;
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	style?: CSSProperties;
}
