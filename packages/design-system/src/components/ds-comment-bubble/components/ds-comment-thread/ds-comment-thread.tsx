import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ds-comment-thread.module.scss';
import { DsThreadItem } from '../ds-thread-item';
import { useScrollOverflow } from '../../hooks';
import type { CommentMessage, CommentAuthor } from '../../../ds-comment-card';

interface DsCommentThreadProps {
	messages: CommentMessage[];
	commentAuthor: CommentAuthor;
	currentUser?: CommentAuthor;
	onEditMessage?: (messageId: string, newContent: string) => void;
	onDeleteMessage?: (messageId: string) => void;
	onMarkUnread?: (messageId: string) => void;
	onResolved?: (messageId: string) => void;
	className?: string;
}

const DsCommentThread = ({
	messages,
	commentAuthor,
	currentUser,
	onEditMessage,
	onDeleteMessage,
	onMarkUnread,
	onResolved,
	className,
}: DsCommentThreadProps) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const initialMessage = messages.find((m) => m.isInitialMessage) || messages[0];
	const followingMessages = messages.filter((m) => m.id !== initialMessage?.id);

	const hasOverflow = useScrollOverflow(scrollContainerRef, messages.length);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (container) {
			container.scrollTop = container.scrollHeight;
		}
	}, [messages.length]);

	const isCurrentUserMessage = (author: CommentAuthor) => currentUser?.id === author.id;
	const isCommentAuthorMessage = (author: CommentAuthor) => commentAuthor.id === author.id;
	const canModify = (author: CommentAuthor) => isCurrentUserMessage(author);

	return (
		<div className={classNames(styles.thread, className)}>
			{initialMessage && (
				<div className={styles.initialComment}>
					<DsThreadItem
						id={initialMessage.id}
						author={initialMessage.author}
						content={initialMessage.content}
						createdAt={initialMessage.createdAt}
						isAuthorMessage={isCommentAuthorMessage(initialMessage.author)}
						onEdit={canModify(initialMessage.author) ? onEditMessage : undefined}
						onDelete={canModify(initialMessage.author) ? onDeleteMessage : undefined}
						onMarkUnread={onMarkUnread}
						onResolved={onResolved}
					/>
				</div>
			)}

			{followingMessages.length > 0 && (
				<>
					<div
						className={classNames(styles.overflowShadow, {
							[styles.visible]: hasOverflow,
						})}
					/>
					<div ref={scrollContainerRef} className={styles.followingComments}>
						{followingMessages.map((message) => (
							<DsThreadItem
								key={message.id}
								id={message.id}
								author={message.author}
								content={message.content}
								createdAt={message.createdAt}
								isAuthorMessage={isCommentAuthorMessage(message.author)}
								onEdit={canModify(message.author) ? onEditMessage : undefined}
								onDelete={canModify(message.author) ? onDeleteMessage : undefined}
								onMarkUnread={onMarkUnread}
								onResolved={onResolved}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default DsCommentThread;
