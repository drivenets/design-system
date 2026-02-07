import { useMemo, useCallback, useState } from 'react';
import styles from './ds-comments-drawer.module.scss';
import type { DsCommentsDrawerProps } from './ds-comments-drawer.types';
import { DsDrawer } from '../ds-drawer';
import { DsCommentCard } from '../ds-comment-card';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { DsTextInput } from '../ds-text-input';
import { DsModal } from '../ds-modal';
import { DsVerticalTabs } from '../ds-vertical-tabs';
import { DsTypography } from '../ds-typography';
import { DsTagFilter } from '../ds-tag-filter';
import { DsCheckbox } from '../ds-checkbox';
import {
	type CommentsFilterState,
	initialFilterState,
	applyFilters,
	filtersToChips,
	removeChip,
	getFilterCounts,
} from './comments-filters';

const DsCommentsDrawer = ({
	open,
	onOpenChange,
	comments,
	getReferenceTag,
	getIsActionRequired,
	resolvedCount = 0,
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
	className,
	style,
}: DsCommentsDrawerProps) => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [pendingFilters, setPendingFilters] = useState<CommentsFilterState>(initialFilterState);
	const [appliedFilters, setAppliedFilters] = useState<CommentsFilterState>(initialFilterState);
	const [selectedFilterTab, setSelectedFilterTab] = useState<string>('statuses');

	const { availableAuthors, availableLabels, authorMap } = useMemo(() => {
		const authorsMap = new Map<string, string>();
		const labelsSet = new Set<string>();

		comments.forEach((comment) => {
			authorsMap.set(comment.author.id, comment.author.name);
			comment.labels?.forEach((label) => labelsSet.add(label));
		});

		return {
			availableAuthors: Array.from(authorsMap.entries()).map(([id, name]) => ({ id, name })),
			availableLabels: Array.from(labelsSet),
			authorMap: authorsMap,
		};
	}, [comments]);

	const displayedComments = useMemo(() => {
		let filtered = comments;

		if (!showResolved) {
			filtered = filtered.filter((c) => !c.isResolved);
		}

		filtered = applyFilters(filtered, appliedFilters, getIsActionRequired || (() => false));

		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter((comment) => {
				const matchesContent = comment.messages.some((m) => m.content.toLowerCase().includes(query));
				const matchesAuthor = comment.author.name.toLowerCase().includes(query);
				const matchesId = `#${String(comment.numericId)}`.includes(query);
				return matchesContent || matchesAuthor || matchesId;
			});
		}

		return filtered;
	}, [comments, showResolved, appliedFilters, searchQuery, getIsActionRequired]);

	const commentCount = useMemo(() => comments.filter((c) => !c.isResolved).length, [comments]);
	const hasResolved = resolvedCount > 0;

	const filterChips = useMemo(() => {
		return filtersToChips(appliedFilters, authorMap);
	}, [appliedFilters, authorMap]);

	const filterCounts = useMemo(() => getFilterCounts(pendingFilters), [pendingFilters]);

	const handleShowResolvedToggle = useCallback(() => {
		onShowResolvedChange?.(!showResolved);
	}, [onShowResolvedChange, showResolved]);

	const handleFilterClick = useCallback(() => {
		setPendingFilters(appliedFilters);
		setIsFilterModalOpen(true);
	}, [appliedFilters]);

	const handleApplyFilters = useCallback(() => {
		setAppliedFilters(pendingFilters);
		setIsFilterModalOpen(false);
	}, [pendingFilters]);

	const handleClearAllFilters = useCallback(() => {
		setPendingFilters(initialFilterState);
		setAppliedFilters(initialFilterState);
		setIsFilterModalOpen(false);
	}, []);

	const handleDeleteChip = useCallback(
		(item: { id: string }) => {
			const chip = filterChips.find((c) => c.id === item.id);
			if (chip) {
				const newFilters = removeChip(appliedFilters, chip);
				setAppliedFilters(newFilters);
			}
		},
		[filterChips, appliedFilters],
	);

	const handleStatusToggle = useCallback(
		(status: 'unresolved' | 'resolved' | 'action-required', checked: boolean) => {
			setPendingFilters((prev) => ({
				...prev,
				statuses: checked ? [...prev.statuses, status] : prev.statuses.filter((s) => s !== status),
			}));
		},
		[],
	);

	const handleAuthorToggle = useCallback((authorId: string, checked: boolean) => {
		setPendingFilters((prev) => ({
			...prev,
			authors: checked ? [...prev.authors, authorId] : prev.authors.filter((a) => a !== authorId),
		}));
	}, []);

	const handleLabelToggle = useCallback((label: string, checked: boolean) => {
		setPendingFilters((prev) => ({
			...prev,
			labels: checked ? [...prev.labels, label] : prev.labels.filter((l) => l !== label),
		}));
	}, []);

	const handleDateFromChange = useCallback((value: string) => {
		setPendingFilters((prev) => ({ ...prev, dateFrom: value || undefined }));
	}, []);

	const handleDateToChange = useCallback((value: string) => {
		setPendingFilters((prev) => ({ ...prev, dateTo: value || undefined }));
	}, []);

	const filterTabs = [
		{ id: 'statuses', label: 'Status', count: filterCounts.statuses },
		{ id: 'authors', label: 'Author', count: filterCounts.authors },
		{ id: 'dateRange', label: 'Date range', count: filterCounts.dateRange },
		{ id: 'labels', label: 'Labels', count: filterCounts.labels },
	];

	const renderFilterContent = () => {
		switch (selectedFilterTab) {
			case 'statuses':
				return (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
						<DsCheckbox
							label="Unresolved"
							checked={pendingFilters.statuses.includes('unresolved')}
							onCheckedChange={(checked) => handleStatusToggle('unresolved', checked === true)}
						/>
						<DsCheckbox
							label="Resolved"
							checked={pendingFilters.statuses.includes('resolved')}
							onCheckedChange={(checked) => handleStatusToggle('resolved', checked === true)}
						/>
						<DsCheckbox
							label="Action required"
							checked={pendingFilters.statuses.includes('action-required')}
							onCheckedChange={(checked) => handleStatusToggle('action-required', checked === true)}
						/>
					</div>
				);

			case 'authors':
				return (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
						{availableAuthors.length === 0 ? (
							<DsTypography variant="body-sm-reg" style={{ color: 'var(--color-font-secondary)' }}>
								No authors available
							</DsTypography>
						) : (
							availableAuthors.map((author) => (
								<DsCheckbox
									key={author.id}
									label={author.name}
									checked={pendingFilters.authors.includes(author.id)}
									onCheckedChange={(checked) => handleAuthorToggle(author.id, checked === true)}
								/>
							))
						)}
					</div>
				);

			case 'dateRange':
				return (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-standard)' }}>
						<div>
							<DsTypography
								variant="body-sm-md"
								style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}
							>
								From
							</DsTypography>
							<input
								type="date"
								value={pendingFilters.dateFrom || ''}
								onChange={(e) => handleDateFromChange(e.target.value)}
								style={{
									width: '100%',
									padding: 'var(--spacing-sm)',
									border: '1px solid var(--color-border-primary)',
									borderRadius: '4px',
									fontFamily: 'inherit',
									fontSize: 'var(--font-size-sm)',
								}}
							/>
						</div>
						<div>
							<DsTypography
								variant="body-sm-md"
								style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}
							>
								To
							</DsTypography>
							<input
								type="date"
								value={pendingFilters.dateTo || ''}
								onChange={(e) => handleDateToChange(e.target.value)}
								style={{
									width: '100%',
									padding: 'var(--spacing-sm)',
									border: '1px solid var(--color-border-primary)',
									borderRadius: '4px',
									fontFamily: 'inherit',
									fontSize: 'var(--font-size-sm)',
								}}
							/>
						</div>
					</div>
				);

			case 'labels':
				return (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
						{availableLabels.length === 0 ? (
							<DsTypography variant="body-sm-reg" style={{ color: 'var(--color-font-secondary)' }}>
								No labels available
							</DsTypography>
						) : (
							availableLabels.map((label) => (
								<DsCheckbox
									key={label}
									label={label}
									checked={pendingFilters.labels.includes(label)}
									onCheckedChange={(checked) => handleLabelToggle(label, checked === true)}
								/>
							))
						)}
					</div>
				);

			default:
				return null;
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
						<DsButton
							design="v1.2"
							buttonType="tertiary"
							size="small"
							onClick={handleShowResolvedToggle}
							disabled={resolvedCount === 0}
						>
							Show resolved ({resolvedCount})
						</DsButton>
					</DsDrawer.Toolbar>
				)}

				{filterChips.length > 0 && (
					<DsDrawer.Toolbar className={styles.filterChipsToolbar}>
						<DsTagFilter
							items={filterChips}
							onClearAll={handleClearAllFilters}
							onItemDelete={handleDeleteChip}
						/>
					</DsDrawer.Toolbar>
				)}

				<DsDrawer.Body className={styles.body}>
					{displayedComments.length === 0 ? (
						<div className={styles.emptyState}>
							<DsIcon icon="chat_bubble_outline" size="large" className={styles.emptyIcon} />
							<span>No comments yet</span>
						</div>
					) : (
						displayedComments.map((comment) => (
							<DsCommentCard
								key={comment.id}
								comment={comment}
								referenceTag={getReferenceTag?.(comment)}
								isActionRequired={getIsActionRequired?.(comment)}
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

			{/* Filter Modal */}
			<DsModal style={{ height: '600px' }} open={isFilterModalOpen} onOpenChange={setIsFilterModalOpen}>
				<DsModal.Header className={styles.filterHeader}>
					<div className={styles.headerLeft}>
						<DsIcon icon="filter_list" size="small" />
						<DsModal.Title>Filters</DsModal.Title>
					</div>
					<DsModal.CloseTrigger />
				</DsModal.Header>

				<DsModal.Body className={styles.filterBody}>
					<DsVerticalTabs
						className={styles.filterTabs}
						value={selectedFilterTab}
						onValueChange={(v) => v && setSelectedFilterTab(v)}
					>
						<DsVerticalTabs.List className={styles.filterTabList}>
							{filterTabs.map((tab) => (
								<DsVerticalTabs.Tab key={tab.id} value={tab.id}>
									<DsTypography variant="body-sm-md" className={styles.filterTabLabel}>
										{tab.label}
									</DsTypography>
									{tab.count > 0 && (
										<div className={styles.filterTabBadge}>
											<span className={styles.filterTabDot} />
											<DsTypography variant="body-sm-reg" className={styles.filterTabCount}>
												{tab.count}
											</DsTypography>
										</div>
									)}
								</DsVerticalTabs.Tab>
							))}
						</DsVerticalTabs.List>
						{filterTabs.map((tab) => (
							<DsVerticalTabs.Content key={tab.id} value={tab.id} className={styles.filterContent}>
								{renderFilterContent()}
							</DsVerticalTabs.Content>
						))}
					</DsVerticalTabs>
				</DsModal.Body>

				<DsModal.Footer className={styles.filterFooter}>
					<DsButton design="v1.2" variant="filled" buttonType="secondary" onClick={handleClearAllFilters}>
						<DsIcon icon="close" size="tiny" />
						Clear all
					</DsButton>
					<DsModal.Actions>
						<DsButton design="v1.2" variant="filled" buttonType="primary" onClick={handleApplyFilters}>
							Apply
						</DsButton>
					</DsModal.Actions>
				</DsModal.Footer>
			</DsModal>
		</>
	);
};

export default DsCommentsDrawer;
