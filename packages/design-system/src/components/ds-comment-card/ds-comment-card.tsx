import classNames from 'classnames';
import styles from './ds-comment-card.module.scss';
import type { DsCommentCardProps } from './ds-comment-card.types';
import { DsAvatarGroup } from '../ds-avatar-group';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { DsTag } from '../ds-tag';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { formatRelativeTime } from '../../utils/format-relative-time';

export const DsCommentCard = ({
	ref,
	comment,
	disabled = false,
	overflow = 'hidden',
	onClick,
	onResolve,
	onToggleActionRequired,
	onForward,
	onMarkUnread,
	onCopyLink,
	onDelete,
	formatTimestamp = formatRelativeTime,
	className,
	style,
}: DsCommentCardProps) => {
	const { numericId, author, createdAt, messages, referenceTag, isActionRequired } = comment;

	const initialMessage = messages.find((m) => m.isInitialMessage) || messages[0];
	const replyCount = messages.length - 1;

	const participants = Array.from(new Map(messages.map((m) => [m.author.id, m.author])).values());

	const renderReferenceTag = () => {
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
	};

	const avatars = participants.map((p) => ({
		name: p.name,
		src: p.avatarSrc,
	}));

	const handleResolve = (e: React.MouseEvent) => {
		e.stopPropagation();
		onResolve?.();
	};

	const showMoreMenu = onToggleActionRequired || onForward || onMarkUnread || onCopyLink || onDelete;

	return (
		<button
			ref={ref}
			type="button"
			className={classNames(styles.card, className)}
			style={style}
			onClick={onClick}
			disabled={disabled}
			data-disabled={disabled ? '' : undefined}
			aria-label={`Comment #${String(numericId)} by ${author.name}${isActionRequired ? ', action required' : ''}`}
		>
			<div
				className={classNames(styles.sideColor, {
					[styles.actionRequired]: isActionRequired,
				})}
			/>

			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.headerTop}>
						<div className={styles.headerLeft}>
							<DsAvatarGroup avatars={avatars} size="sm" max={4} />

							<div className={styles.commentInfo}>
								<span className={styles.commentId}>#{numericId}</span>
								{renderReferenceTag()}
							</div>

							<div className={styles.authorInfo}>
								<span className={styles.authorName}>{author.name}</span>
								<span className={styles.timestamp}>{formatTimestamp(createdAt)}</span>
							</div>
						</div>

						<div className={styles.actions}>
							{showMoreMenu && (
								<DsDropdownMenu.Root>
									<DsDropdownMenu.Trigger asChild>
										<DsButton design="v1.2" buttonType="tertiary" size="small" aria-label="More actions">
											<DsIcon icon="more_vert" size="tiny" />
										</DsButton>
									</DsDropdownMenu.Trigger>
									<DsDropdownMenu.Content className={styles.dropdownContent}>
										{onToggleActionRequired && (
											<DsDropdownMenu.Item value="toggle-action" onClick={() => onToggleActionRequired()}>
												{isActionRequired ? 'Remove action requirement' : 'Require action'}
											</DsDropdownMenu.Item>
										)}
										{onForward && (
											<DsDropdownMenu.Item value="forward" onClick={() => onForward()}>
												Forward
											</DsDropdownMenu.Item>
										)}
										{onMarkUnread && (
											<DsDropdownMenu.Item value="mark-unread" onClick={() => onMarkUnread()}>
												Mark as &apos;Unread&apos;
											</DsDropdownMenu.Item>
										)}
										{onCopyLink && (
											<DsDropdownMenu.Item value="copy-link" onClick={() => onCopyLink()}>
												Copy link
											</DsDropdownMenu.Item>
										)}
										{onDelete && (
											<DsDropdownMenu.Item value="delete" onClick={() => onDelete()}>
												Delete
											</DsDropdownMenu.Item>
										)}
									</DsDropdownMenu.Content>
								</DsDropdownMenu.Root>
							)}

							{onResolve && (
								<DsButton
									design="v1.2"
									buttonType="tertiary"
									size="small"
									onClick={handleResolve}
									aria-label="Resolve comment"
								>
									<DsIcon icon="check_circle" size="tiny" />
								</DsButton>
							)}
						</div>
					</div>
				</div>

				<div className={styles.body}>
					<p
						className={classNames(styles.message, {
							[styles.truncated]: overflow === 'hidden',
						})}
					>
						{initialMessage?.content}
					</p>

					{replyCount > 0 && (
						<span className={styles.replyCount}>
							{replyCount} {replyCount === 1 ? 'reply' : 'replies'}
						</span>
					)}
				</div>
			</div>
		</button>
	);
};
