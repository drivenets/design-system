import { useRef, useMemo } from 'react';
import classNames from 'classnames';
import styles from './ds-comment-bubble.module.scss';
import type { DsCommentBubbleProps } from './ds-comment-bubble.types';
import { DsCommentThread } from './components/ds-comment-thread';
import { DsButton } from '../ds-button';
import { DsCheckbox } from '../ds-checkbox';
import { DsIcon } from '../ds-icon';
import { DsTag } from '../ds-tag';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { useClickOutside, useAutoResize } from './hooks';

const DsCommentBubble = ({
	comment,
	currentUser,
	actionRequired = false,
	onActionRequiredChange,
	value = '',
	onValueChange,
	onSend,
	onClose,
	onResolve,
	onToggleActionRequired,
	onForward,
	onMarkUnread,
	onCopyLink,
	onDelete,
	onEditMessage,
	onDeleteMessage,
	onMessageMarkUnread,
	onMessageResolved,
	referenceTag,
	className,
	style,
}: DsCommentBubbleProps) => {
	const bubbleRef = useRef<HTMLDivElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const hasThread = Boolean(comment?.messages.length);
	const hasContent = value.trim().length > 0;
	const isThreadMode = hasThread;
	const isTypingMode = !hasThread && hasContent;
	const isInitialMode = !hasThread && !hasContent;

	const handleClickOutside = () => {
		if (isInitialMode) {
			onValueChange?.('');
		}
	};

	useClickOutside(bubbleRef, handleClickOutside, isInitialMode);
	useAutoResize(textareaRef, value);

	const handleSend = () => {
		if (hasContent && onSend) {
			onSend(value, actionRequired);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const placeholder = isThreadMode ? 'Reply' : 'Add a comment';
	const showFooter = isTypingMode;
	const showHeader = isThreadMode && Boolean(comment);
	const isActionRequiredActive = actionRequired;

	const renderedReferenceTag = useMemo(() => {
		if (!referenceTag) {
			return null;
		}

		if (typeof referenceTag === 'string') {
			return (
				<DsTag
					size="small"
					label={referenceTag}
					slots={{
						icon: <DsIcon icon="sell" size="tiny" />,
					}}
				/>
			);
		}

		return referenceTag;
	}, [referenceTag]);

	return (
		<div
			ref={bubbleRef}
			className={classNames(
				styles.bubble,
				{
					[styles.actionRequired]: isActionRequiredActive,
					[styles.initial]: isInitialMode,
					[styles.typing]: isTypingMode,
					[styles.thread]: isThreadMode,
				},
				className,
			)}
			style={style}
			role="dialog"
			aria-label={isInitialMode ? 'Add new comment' : `Comment thread #${String(comment?.numericId ?? '')}`}
		>
			{showHeader && comment && (
				<div className={styles.header}>
					<div className={styles.headerLeft}>
						<div className={styles.headerInfo}>
							<span className={styles.commentId}>#{comment.numericId}</span>
							{renderedReferenceTag}
							{isActionRequiredActive && <span className={styles.actionRequiredBadge}>Action required</span>}
						</div>
					</div>

					<div className={styles.headerRight}>
						<div className={styles.headerActions}>
							<DsDropdownMenu.Root>
								<DsDropdownMenu.Trigger asChild>
									<DsButton design="v1.2" buttonType="tertiary" size="small" aria-label="More actions">
										<DsIcon icon="more_vert" size="tiny" />
									</DsButton>
								</DsDropdownMenu.Trigger>
								<DsDropdownMenu.Content className={styles.dropdownContent}>
									<DsDropdownMenu.Item value="toggle-action" onClick={onToggleActionRequired}>
										{actionRequired ? 'Remove action requirement' : 'Require action'}
									</DsDropdownMenu.Item>
									<DsDropdownMenu.Item value="forward" onClick={onForward}>
										Forward
									</DsDropdownMenu.Item>
									<DsDropdownMenu.Item value="mark-unread" onClick={onMarkUnread}>
										Mark as &apos;Unread&apos;
									</DsDropdownMenu.Item>
									<DsDropdownMenu.Item value="copy-link" onClick={onCopyLink}>
										Copy link
									</DsDropdownMenu.Item>
									<DsDropdownMenu.Item value="delete" onClick={onDelete} className={styles.danger}>
										Delete
									</DsDropdownMenu.Item>
								</DsDropdownMenu.Content>
							</DsDropdownMenu.Root>

							<DsButton
								design="v1.2"
								buttonType="tertiary"
								size="small"
								onClick={onResolve}
								aria-label="Resolve"
							>
								<DsIcon icon="check_circle" size="tiny" />
							</DsButton>
						</div>

						<DsButton
							design="v1.2"
							buttonType="tertiary"
							size="small"
							onClick={onClose}
							className={styles.closeButton}
							aria-label="Close"
						>
							<DsIcon icon="close" size="tiny" />
						</DsButton>
					</div>
				</div>
			)}

			{isThreadMode && comment && (
				<DsCommentThread
					messages={comment.messages}
					commentAuthor={comment.author}
					currentUser={currentUser}
					onEditMessage={onEditMessage}
					onDeleteMessage={onDeleteMessage}
					onMarkUnread={onMessageMarkUnread}
					onResolved={onMessageResolved}
				/>
			)}

			<div className={styles.inputArea}>
				<div className={styles.inputWrapper}>
					<textarea
						ref={textareaRef}
						className={styles.textarea}
						placeholder={placeholder}
						value={value}
						onChange={(e) => onValueChange?.(e.target.value)}
						onKeyDown={handleKeyDown}
						rows={1}
						aria-label={placeholder}
					/>
				</div>

				{(isInitialMode || isThreadMode) && (
					<DsButton design="v1.2" size="small" disabled={!hasContent} onClick={handleSend} aria-label="Send">
						<DsIcon icon="send" size="tiny" />
					</DsButton>
				)}
			</div>

			{showFooter && (
				<div className={styles.footer}>
					<DsCheckbox
						label="Action required"
						checked={actionRequired}
						onCheckedChange={(checked) => onActionRequiredChange?.(checked === true)}
						className={classNames(styles.actionRequiredCheckbox, {
							[styles.checked]: actionRequired,
						})}
					/>

					<DsButton design="v1.2" size="small" disabled={!hasContent} onClick={handleSend} aria-label="Send">
						<DsIcon icon="send" size="tiny" />
					</DsButton>
				</div>
			)}
		</div>
	);
};

export default DsCommentBubble;
