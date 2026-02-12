import type { CSSProperties, ReactNode, Ref } from 'react';
import type { CommentAuthor, CommentData } from '../ds-comment-card';

export interface DsCommentBubbleProps {
	ref?: Ref<HTMLDivElement>;
	comment?: CommentData;
	currentUser?: CommentAuthor;
	actionRequired?: boolean;
	onActionRequiredChange?: (checked: boolean) => void;
	value?: string;
	onValueChange?: (value: string) => void;
	onSend?: (content: string, actionRequired: boolean) => void;
	onClose?: () => void;
	onResolve?: () => void;
	onToggleActionRequired?: () => void;
	onForward?: () => void;
	onMarkUnread?: () => void;
	onCopyLink?: () => void;
	onDelete?: () => void;
	onEditMessage?: (messageId: string, newContent: string) => void;
	onDeleteMessage?: (messageId: string) => void;
	onMessageMarkUnread?: (messageId: string) => void;
	onMessageResolved?: (messageId: string) => void;
	referenceTag?: ReactNode;
	className?: string;
	style?: CSSProperties;
}
