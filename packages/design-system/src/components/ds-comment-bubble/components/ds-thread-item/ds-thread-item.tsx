import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ds-thread-item.module.scss';
import { DsAvatar } from '../../../ds-avatar';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { DsTextarea } from '../../../ds-textarea';
import { formatRelativeTime } from '../../../../utils/format-relative-time';
import type { DsThreadItemProps } from './ds-thread-item.types';

export const DsThreadItem = ({
	id,
	author,
	content,
	createdAt,
	isCommentAuthorMessage = false,
	canModify = false,
	onEdit,
	onDelete,
	onMarkUnread,
	onResolved,
	className,
}: DsThreadItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editContent, setEditContent] = useState(content);

	useEffect(() => {
		if (!isEditing) {
			setEditContent(content);
		}
	}, [content, isEditing]);

	const isSaveDisabled = !editContent.trim() || editContent === content;

	const handleSaveEdit = () => {
		if (isSaveDisabled) {
			return;
		}

		onEdit?.(id, editContent);
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setEditContent(content);
		setIsEditing(false);
	};

	const hasEditActions = canModify && (onEdit || onDelete);
	const showActions = !isEditing && (hasEditActions || onMarkUnread || onResolved);

	return (
		<div
			className={classNames(
				styles.threadItem,
				{
					[styles.alignRight]: !isCommentAuthorMessage,
				},
				className,
			)}
		>
			<div className={styles.avatarWrapper}>
				<DsAvatar name={author.name} src={author.avatarSrc} size="sm" />
			</div>

			<div className={styles.content}>
				<div className={styles.header}>
					<span className={styles.authorName}>{author.name}</span>
					<span className={styles.timestamp}>{formatRelativeTime(createdAt)}</span>
				</div>

				{isEditing ? (
					<div className={styles.editContainer}>
						<DsTextarea
							className={styles.editTextarea}
							value={editContent}
							onValueChange={setEditContent}
							rows={3}
						/>
						<div className={styles.editActions}>
							<DsButton design="v1.2" buttonType="tertiary" size="small" onClick={handleCancelEdit}>
								Cancel
							</DsButton>
							<DsButton design="v1.2" size="small" onClick={handleSaveEdit} disabled={isSaveDisabled}>
								Save
							</DsButton>
						</div>
					</div>
				) : (
					<p className={styles.message}>{content}</p>
				)}
			</div>

			{showActions && (
				<div className={styles.actions}>
					{hasEditActions && (
						<DsDropdownMenu.Root>
							<DsDropdownMenu.Trigger asChild>
								<DsButton
									design="v1.2"
									buttonType="tertiary"
									size="small"
									aria-label="More actions"
									className={styles.actionButton}
									contentClassName={styles.iconButtonContent}
								>
									<DsIcon icon="more_vert" size="tiny" />
								</DsButton>
							</DsDropdownMenu.Trigger>
							<DsDropdownMenu.Content className={styles.dropdownContent}>
								{onEdit && (
									<DsDropdownMenu.Item value="edit" onClick={() => setIsEditing(true)}>
										Edit
									</DsDropdownMenu.Item>
								)}
								{onMarkUnread && (
									<DsDropdownMenu.Item value="mark-unread" onClick={() => onMarkUnread(id)}>
										Mark as &apos;Unread&apos;
									</DsDropdownMenu.Item>
								)}
								{onDelete && (
									<DsDropdownMenu.Item value="delete" onClick={() => onDelete(id)}>
										Delete
									</DsDropdownMenu.Item>
								)}
							</DsDropdownMenu.Content>
						</DsDropdownMenu.Root>
					)}
					{onResolved && (
						<DsButton
							design="v1.2"
							buttonType="tertiary"
							size="small"
							onClick={() => onResolved(id)}
							aria-label="Mark message as resolved"
							className={styles.actionButton}
							contentClassName={styles.iconButtonContent}
						>
							<DsIcon icon="check_circle" size="tiny" />
						</DsButton>
					)}
				</div>
			)}
		</div>
	);
};
