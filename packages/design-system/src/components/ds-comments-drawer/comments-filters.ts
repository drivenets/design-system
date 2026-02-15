import type { CommentData } from '../ds-comment-card';
import type { FilterTag, CommentsFilterState } from './comments-filters.types';

export type { FilterTag, CommentsFilterState } from './comments-filters.types';

export const initialFilterState: CommentsFilterState = {
	authors: [],
	labels: [],
	statuses: [],
};

export const applyFilters = (
	comments: CommentData[],
	filters: CommentsFilterState,
	getIsActionRequired: (comment: CommentData) => boolean,
): CommentData[] => {
	return comments.filter((comment) => {
		if (filters.statuses.length > 0) {
			const commentStatuses: ('unresolved' | 'resolved' | 'action-required')[] = [];

			if (comment.isResolved) {
				commentStatuses.push('resolved');
			} else {
				commentStatuses.push('unresolved');
			}

			if (getIsActionRequired(comment)) {
				commentStatuses.push('action-required');
			}

			const hasMatchingStatus = filters.statuses.some((status) => commentStatuses.includes(status));
			if (!hasMatchingStatus) {
				return false;
			}
		}

		if (filters.authors.length > 0) {
			if (!filters.authors.includes(comment.author.id)) {
				return false;
			}
		}

		if (filters.dateFrom) {
			const fromDate = new Date(filters.dateFrom);
			if (comment.createdAt < fromDate) {
				return false;
			}
		}

		if (filters.dateTo) {
			const toDate = new Date(filters.dateTo);
			toDate.setHours(23, 59, 59, 999);
			if (comment.createdAt > toDate) {
				return false;
			}
		}
		if (filters.labels.length > 0) {
			if (!comment.labels || !filters.labels.some((label) => comment.labels?.includes(label))) {
				return false;
			}
		}

		return true;
	});
};

export const filtersToTags = (filters: CommentsFilterState, authorMap: Map<string, string>): FilterTag[] => {
	const tags: FilterTag[] = [];

	filters.statuses.forEach((status) => {
		const label =
			status === 'action-required' ? 'Action required' : status.charAt(0).toUpperCase() + status.slice(1);
		tags.push({
			id: `status-${status}`,
			label: `Status: ${label}`,
			filterId: 'statuses',
			value: status,
		});
	});

	filters.authors.forEach((authorId) => {
		const authorName = authorMap.get(authorId) || authorId;
		tags.push({
			id: `author-${authorId}`,
			label: `Author: ${authorName}`,
			filterId: 'authors',
			value: authorId,
		});
	});

	if (filters.dateFrom || filters.dateTo) {
		const from = filters.dateFrom || '...';
		const to = filters.dateTo || '...';
		tags.push({
			id: 'date-range',
			label: `Date: ${from} to ${to}`,
			filterId: 'date',
			value: 'range',
		});
	}

	filters.labels.forEach((label) => {
		tags.push({
			id: `label-${label}`,
			label: `Label: ${label}`,
			filterId: 'labels',
			value: label,
		});
	});

	return tags;
};

export const removeTag = (filters: CommentsFilterState, tag: FilterTag): CommentsFilterState => {
	const newFilters = { ...filters };

	switch (tag.filterId) {
		case 'statuses':
			newFilters.statuses = newFilters.statuses.filter((s) => s !== tag.value);
			break;
		case 'authors':
			newFilters.authors = newFilters.authors.filter((a) => a !== tag.value);
			break;
		case 'labels':
			newFilters.labels = newFilters.labels.filter((l) => l !== tag.value);
			break;
		case 'date':
			newFilters.dateFrom = undefined;
			newFilters.dateTo = undefined;
			break;
	}

	return newFilters;
};
