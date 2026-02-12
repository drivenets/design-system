import { useState } from 'react';
import styles from './ds-comments-drawer.module.scss';
import type { DsCommentsDrawerProps } from './ds-comments-drawer.types';
import { DsDrawer } from '../ds-drawer';
import { DsCommentCard } from '../ds-comment-card';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { DsTextInput } from '../ds-text-input';
import { DsTagFilter, type TagFilterItem } from '../ds-tag-filter';
import {
	type CommentsFilterState,
	initialFilterState,
	applyFilters,
	filtersToTags,
	removeTag,
} from './comments-filters';
import { CommentsFilterModal } from './components/comments-filter-modal';

export const DsCommentsDrawer = ({
	open,
	onOpenChange,
	comments,
	showResolved = false,
	onShowResolvedChange,
	searchQuery = '',
	onSearchChange,
	onCommentClick,
	onResolveComment,
	onToggleActionRequired,
	onForward,
	onMarkUnread,
	onCopyLink,
	onDelete,
	noCommentsMessage,
	className,
	style,
}: DsCommentsDrawerProps) => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [pendingFilters, setPendingFilters] = useState<CommentsFilterState>(initialFilterState);
	const [appliedFilters, setAppliedFilters] = useState<CommentsFilterState>(initialFilterState);

	const authorsMap = new Map<string, string>();
	const labelsSet = new Set<string>();

	comments.forEach((comment) => {
		authorsMap.set(comment.author.id, comment.author.name);
		comment.labels?.forEach((label) => labelsSet.add(label));
	});

	const availableAuthors = Array.from(authorsMap.entries()).map(([id, name]) => ({ id, name }));
	const availableLabels = Array.from(labelsSet);

	let filteredComments = comments;

	if (!showResolved) {
		filteredComments = filteredComments.filter((c) => !c.isResolved);
	}

	filteredComments = applyFilters(
		filteredComments,
		appliedFilters,
		(comment) => comment.isActionRequired || false,
	);

	if (searchQuery) {
		const query = searchQuery.toLowerCase();
		filteredComments = filteredComments.filter((comment) => {
			const matchesContent = comment.messages.some((m) => m.content.toLowerCase().includes(query));
			const matchesAuthor = comment.author.name.toLowerCase().includes(query);
			const matchesId = `#${String(comment.numericId)}`.includes(query);
			return matchesContent || matchesAuthor || matchesId;
		});
	}

	const commentCount = comments.filter((c) => !c.isResolved).length;
	const resolvedCount = comments.filter((c) => c.isResolved).length;
	const hasResolved = resolvedCount > 0;

	const filterTags = filtersToTags(appliedFilters, authorsMap);

	const handleShowResolvedToggle = () => {
		onShowResolvedChange?.(!showResolved);
	};

	const handleFilterClick = () => {
		setPendingFilters(appliedFilters);
		setIsFilterModalOpen(true);
	};

	const handleApplyFilters = () => {
		setAppliedFilters(pendingFilters);
		setIsFilterModalOpen(false);
	};

	const handleClearAllFilters = () => {
		setPendingFilters(initialFilterState);
		setAppliedFilters(initialFilterState);
		setIsFilterModalOpen(false);
	};

	const handleDeleteTag = (item: TagFilterItem) => {
		const tag = filterTags.find((c) => c.id === item.id);
		if (tag) {
			const newFilters = removeTag(appliedFilters, tag);
			setAppliedFilters(newFilters);
		}
	};

	return (
		<>
			<DsDrawer
				open={open}
				onOpenChange={onOpenChange}
				position="start"
				columns={4}
				className={className}
				style={style}
			>
				<DsDrawer.Header>
					<DsDrawer.Title>{commentCount} Comments</DsDrawer.Title>

					<div className={styles.headerActions}>
						<DsButton design="v1.2" buttonType="tertiary" size="small" aria-label="More actions">
							<DsIcon icon="more_vert" size="tiny" />
						</DsButton>

						<div className={styles.divider} />

						<DsDrawer.CloseTrigger />
					</div>
				</DsDrawer.Header>

				<DsDrawer.Toolbar>
					<DsTextInput
						placeholder="Search"
						value={searchQuery}
						onValueChange={onSearchChange}
						className={styles.searchInput}
						slots={{
							startAdornment: <DsIcon icon="search" size="tiny" />,
						}}
					/>

					<DsButton
						design="v1.2"
						buttonType="tertiary"
						size="small"
						aria-label="Filter"
						onClick={handleFilterClick}
					>
						<DsIcon icon="filter_list" size="tiny" />
					</DsButton>
				</DsDrawer.Toolbar>

				{hasResolved && (
					<DsDrawer.Toolbar>
						<DsButton design="v1.2" buttonType="tertiary" size="small" onClick={handleShowResolvedToggle}>
							{showResolved ? 'Hide' : 'Show'} resolved ({resolvedCount})
						</DsButton>
					</DsDrawer.Toolbar>
				)}

				{filterTags.length > 0 && (
					<DsDrawer.Toolbar className={styles.filterTagsToolbar}>
						<DsTagFilter
							items={filterTags}
							onClearAll={handleClearAllFilters}
							onItemDelete={handleDeleteTag}
							className={styles.tagFilter}
						/>
					</DsDrawer.Toolbar>
				)}

				<DsDrawer.Body className={styles.body}>
					{filteredComments.length === 0 ? (
						<div className={styles.emptyState}>
							{noCommentsMessage || (
								<>
									<DsIcon icon="chat_bubble_outline" size="large" className={styles.emptyIcon} />
									<span>No comments yet</span>
								</>
							)}
						</div>
					) : (
						filteredComments.map((comment) => (
							<DsCommentCard
								key={comment.id}
								comment={comment}
								overflow="displayed"
								onClick={() => onCommentClick?.(comment)}
								onResolve={() => onResolveComment?.(comment.id)}
								onToggleActionRequired={() => onToggleActionRequired?.(comment.id)}
								onForward={() => onForward?.(comment.id)}
								onMarkUnread={() => onMarkUnread?.(comment.id)}
								onCopyLink={() => onCopyLink?.(comment.id)}
								onDelete={() => onDelete?.(comment.id)}
							/>
						))
					)}
				</DsDrawer.Body>
			</DsDrawer>

			<CommentsFilterModal
				open={isFilterModalOpen}
				onOpenChange={setIsFilterModalOpen}
				filters={pendingFilters}
				onFiltersChange={setPendingFilters}
				onApply={handleApplyFilters}
				onClearAll={handleClearAllFilters}
				availableAuthors={availableAuthors}
				availableLabels={availableLabels}
			/>
		</>
	);
};
