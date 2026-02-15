import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ds-comment-thread.module.scss';
import { DsThreadItem } from '../ds-thread-item';
import { useScrollOverflow } from '../../hooks';
import type { DsCommentThreadProps } from './ds-comment-thread.types';
import type { CommentAuthor } from '../../../ds-comment-card';

export const DsCommentThread = ({
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
	const bottomRef = useRef<HTMLDivElement>(null);

	const initialMessage = messages.find((m) => m.isInitialMessage) || messages[0];
	const followingMessages = messages.filter((m) => m.id !== initialMessage?.id);

	const hasOverflow = useScrollOverflow(scrollContainerRef, messages.length);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages.length]);

	const isCurrentUserMessage = (author: CommentAuthor): boolean => currentUser?.id === author.id;
	const isCommentAuthorMessage = (author: CommentAuthor): boolean => commentAuthor.id === author.id;
	const canModify = (author: CommentAuthor): boolean => isCurrentUserMessage(author);

	if (!initialMessage) {
		return null;
	}

	return (
		<div className={classNames(styles.thread, className)}>
			<div className={styles.initialComment}>
				<DsThreadItem
					id={initialMessage.id}
					author={initialMessage.author}
					content={initialMessage.content}
					createdAt={initialMessage.createdAt}
					isCommentAuthorMessage={isCommentAuthorMessage(initialMessage.author)}
					canModify={canModify(initialMessage.author)}
					onEdit={canModify(initialMessage.author) ? onEditMessage : undefined}
					onDelete={canModify(initialMessage.author) ? onDeleteMessage : undefined}
					onMarkUnread={onMarkUnread}
					onResolved={onResolved}
				/>
				<div
					className={classNames(styles.overflowShadow, {
						[styles.visible]: hasOverflow,
					})}
				/>
			</div>

			{followingMessages.length > 0 && (
				<div ref={scrollContainerRef} className={styles.followingComments}>
					{followingMessages.map((message) => (
						<DsThreadItem
							key={message.id}
							id={message.id}
							author={message.author}
							content={message.content}
							createdAt={message.createdAt}
							isCommentAuthorMessage={isCommentAuthorMessage(message.author)}
							canModify={canModify(message.author)}
							onEdit={canModify(message.author) ? onEditMessage : undefined}
							onDelete={canModify(message.author) ? onDeleteMessage : undefined}
							onMarkUnread={onMarkUnread}
							onResolved={onResolved}
						/>
					))}
					<div ref={bottomRef} />
				</div>
			)}
		</div>
	);
};
