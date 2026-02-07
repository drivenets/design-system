import { useState } from 'react';
import classNames from 'classnames';
import styles from './ds-thread-item.module.scss';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { DsTextarea } from '../../../ds-textarea';
import { formatRelativeTime, getInitials } from '../../utils';
import type { DsThreadItemProps } from './ds-thread-item.types';

const DsThreadItem = ({
	id,
	author,
	content,
	createdAt,
	isAuthorMessage = false,
	onEdit,
	onDelete,
	onMarkUnread,
	onResolved,
	className,
}: DsThreadItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editContent, setEditContent] = useState(content);

	const handleSaveEdit = () => {
		if (editContent.trim() && editContent !== content) {
			onEdit?.(id, editContent);
		}
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setEditContent(content);
		setIsEditing(false);
	};

	const showActions = !isEditing && (onEdit || onDelete || onMarkUnread || onResolved);

	return (
		<div
			className={classNames(
				styles.threadItem,
				{
					[styles.alignRight]: !isAuthorMessage,
				},
				className,
			)}
		>
			<div className={styles.avatarWrapper}>
				{author.avatarSrc ? (
					<img src={author.avatarSrc} alt={author.name} className={styles.avatar} />
				) : (
					<span className={styles.avatarFallback}>{getInitials(author.name)}</span>
				)}
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
							<DsButton design="v1.2" size="small" onClick={handleSaveEdit}>
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
					{(onEdit || onDelete || onMarkUnread) && (
						<DsDropdownMenu.Root>
							<DsDropdownMenu.Trigger asChild>
								<DsButton design="v1.2" buttonType="tertiary" size="small" aria-label="More actions">
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
						>
							<DsIcon icon="check_circle" size="tiny" />
						</DsButton>
					)}
				</div>
			)}
		</div>
	);
};

export default DsThreadItem;
