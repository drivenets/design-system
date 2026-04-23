import { describe, expect, it } from 'vitest';
import type { CommentData } from '../ds-comment-card';
import type { CommentsFilterState, FilterTag } from './comments-filters.types';
import { applyFilters, filtersToTags, removeTag } from './comments-filters';

const makeAuthor = (id: string, name: string) => ({ id, name });

const makeComment = (overrides: Partial<CommentData> = {}): CommentData => ({
	id: '1',
	numericId: 1,
	author: makeAuthor('user-1', 'Alice'),
	createdAt: new Date(2025, 5, 15),
	isResolved: false,
	messages: [],
	...overrides,
});

const emptyFilters: CommentsFilterState = {
	authors: [],
	labels: [],
	statuses: [],
};

const neverActionRequired = () => false;
const alwaysActionRequired = () => true;

describe('comments-filters', () => {
	describe('applyFilters', () => {
		it('should return all comments when no filters are set', () => {
			const comments = [makeComment({ id: '1' }), makeComment({ id: '2' })];

			const result = applyFilters(comments, emptyFilters, neverActionRequired);

			expect(result).toHaveLength(2);
		});

		it('should filter by resolved status', () => {
			const comments = [
				makeComment({ id: '1', isResolved: true }),
				makeComment({ id: '2', isResolved: false }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['resolved'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('1');
		});

		it('should filter by unresolved status', () => {
			const comments = [
				makeComment({ id: '1', isResolved: true }),
				makeComment({ id: '2', isResolved: false }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['unresolved'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('2');
		});

		it('should filter by action-required status using the callback', () => {
			const comments = [
				makeComment({ id: '1', isResolved: false }),
				makeComment({ id: '2', isResolved: false }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['action-required'] };
			const getIsActionRequired = (c: CommentData) => c.id === '1';

			const result = applyFilters(comments, filters, getIsActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('1');
		});

		it('should include comment matching any of multiple statuses', () => {
			const comments = [
				makeComment({ id: '1', isResolved: true }),
				makeComment({ id: '2', isResolved: false }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['resolved', 'unresolved'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(2);
		});

		it('should match an unresolved action-required comment for either status', () => {
			const comment = makeComment({ id: '1', isResolved: false });
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['action-required'] };

			const result = applyFilters([comment], filters, alwaysActionRequired);

			expect(result).toHaveLength(1);
		});

		it('should filter by author', () => {
			const comments = [
				makeComment({ id: '1', author: makeAuthor('user-1', 'Alice') }),
				makeComment({ id: '2', author: makeAuthor('user-2', 'Bob') }),
				makeComment({ id: '3', author: makeAuthor('user-1', 'Alice') }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, authors: ['user-1'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(2);
			expect(result.map((c) => c.id)).toEqual(['1', '3']);
		});

		it('should filter by multiple authors', () => {
			const comments = [
				makeComment({ id: '1', author: makeAuthor('user-1', 'Alice') }),
				makeComment({ id: '2', author: makeAuthor('user-2', 'Bob') }),
				makeComment({ id: '3', author: makeAuthor('user-3', 'Carol') }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, authors: ['user-1', 'user-3'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(2);
			expect(result.map((c) => c.id)).toEqual(['1', '3']);
		});

		it('should filter by dateFrom', () => {
			const comments = [
				makeComment({ id: '1', createdAt: new Date(2025, 0, 1) }),
				makeComment({ id: '2', createdAt: new Date(2025, 5, 15) }),
				makeComment({ id: '3', createdAt: new Date(2025, 11, 31) }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, dateFrom: new Date(2025, 5, 1) };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(2);
			expect(result.map((c) => c.id)).toEqual(['2', '3']);
		});

		it('should filter by dateTo (inclusive end of day)', () => {
			const comments = [
				makeComment({ id: '1', createdAt: new Date(2025, 0, 1) }),
				makeComment({ id: '2', createdAt: new Date(2025, 5, 15, 23, 59, 59, 999) }),
				makeComment({ id: '3', createdAt: new Date(2025, 11, 31) }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, dateTo: new Date(2025, 5, 15) };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(2);
			expect(result.map((c) => c.id)).toEqual(['1', '2']);
		});

		it('should filter by date range', () => {
			const comments = [
				makeComment({ id: '1', createdAt: new Date(2025, 0, 1) }),
				makeComment({ id: '2', createdAt: new Date(2025, 5, 15) }),
				makeComment({ id: '3', createdAt: new Date(2025, 11, 31) }),
			];
			const filters: CommentsFilterState = {
				...emptyFilters,
				dateFrom: new Date(2025, 2, 1),
				dateTo: new Date(2025, 8, 1),
			};

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('2');
		});

		it('should filter by labels', () => {
			const comments = [
				makeComment({ id: '1', labels: ['bug', 'critical'] }),
				makeComment({ id: '2', labels: ['feature'] }),
				makeComment({ id: '3' }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, labels: ['bug'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('1');
		});

		it('should match when comment has any of the filtered labels', () => {
			const comments = [
				makeComment({ id: '1', labels: ['bug'] }),
				makeComment({ id: '2', labels: ['feature', 'enhancement'] }),
			];
			const filters: CommentsFilterState = { ...emptyFilters, labels: ['enhancement', 'critical'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('2');
		});

		it('should exclude comments with no labels when filtering by labels', () => {
			const comments = [makeComment({ id: '1' }), makeComment({ id: '2', labels: undefined })];
			const filters: CommentsFilterState = { ...emptyFilters, labels: ['bug'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(0);
		});

		it('should combine multiple filter types (AND logic)', () => {
			const comments = [
				makeComment({ id: '1', author: makeAuthor('user-1', 'Alice'), labels: ['bug'], isResolved: false }),
				makeComment({
					id: '2',
					author: makeAuthor('user-1', 'Alice'),
					labels: ['feature'],
					isResolved: false,
				}),
				makeComment({ id: '3', author: makeAuthor('user-2', 'Bob'), labels: ['bug'], isResolved: false }),
			];
			const filters: CommentsFilterState = {
				authors: ['user-1'],
				labels: ['bug'],
				statuses: ['unresolved'],
			};

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.id).toBe('1');
		});

		it('should return empty array when no comments match', () => {
			const comments = [makeComment({ id: '1', isResolved: false })];
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['resolved'] };

			const result = applyFilters(comments, filters, neverActionRequired);

			expect(result).toHaveLength(0);
		});

		it('should handle empty comments array', () => {
			const filters: CommentsFilterState = { ...emptyFilters, statuses: ['resolved'] };

			const result = applyFilters([], filters, neverActionRequired);

			expect(result).toHaveLength(0);
		});
	});

	describe('filtersToTags', () => {
		const authorMap = new Map([
			['user-1', 'Alice'],
			['user-2', 'Bob'],
		]);

		it('should return empty array for empty filters', () => {
			const result = filtersToTags(emptyFilters, authorMap);

			expect(result).toEqual([]);
		});

		it('should create tags for statuses with proper label formatting', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				statuses: ['resolved', 'unresolved', 'action-required'],
			};

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(3);
			expect(result.at(0)).toEqual({
				id: 'status-resolved',
				label: 'Status: Resolved',
				filterId: 'statuses',
				value: 'resolved',
			});
			expect(result.at(1)).toEqual({
				id: 'status-unresolved',
				label: 'Status: Unresolved',
				filterId: 'statuses',
				value: 'unresolved',
			});
			expect(result.at(2)).toEqual({
				id: 'status-action-required',
				label: 'Status: Action required',
				filterId: 'statuses',
				value: 'action-required',
			});
		});

		it('should create tags for authors using authorMap names', () => {
			const filters: CommentsFilterState = { ...emptyFilters, authors: ['user-1', 'user-2'] };

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(2);
			expect(result.at(0)).toEqual({
				id: 'author-user-1',
				label: 'Author: Alice',
				filterId: 'authors',
				value: 'user-1',
			});
			expect(result.at(1)).toEqual({
				id: 'author-user-2',
				label: 'Author: Bob',
				filterId: 'authors',
				value: 'user-2',
			});
		});

		it('should fall back to author id when not found in authorMap', () => {
			const filters: CommentsFilterState = { ...emptyFilters, authors: ['unknown-user'] };

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.label).toBe('Author: unknown-user');
		});

		it('should create date range tag with both dates', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				dateFrom: new Date(2025, 0, 1),
				dateTo: new Date(2025, 11, 31),
			};

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(1);
			expect(result.at(0)).toEqual({
				id: 'date-range',
				label: 'Date: 2025-01-01 to 2025-12-31',
				filterId: 'date',
				value: 'range',
			});
		});

		it('should create date range tag with only dateFrom', () => {
			const filters: CommentsFilterState = { ...emptyFilters, dateFrom: new Date(2025, 0, 1) };

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.label).toBe('Date: 2025-01-01 to ...');
		});

		it('should create date range tag with only dateTo', () => {
			const filters: CommentsFilterState = { ...emptyFilters, dateTo: new Date(2025, 11, 31) };

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(1);
			expect(result.at(0)?.label).toBe('Date: ... to 2025-12-31');
		});

		it('should not create date tag when neither dateFrom nor dateTo is set', () => {
			const result = filtersToTags(emptyFilters, authorMap);

			expect(result.filter((t) => t.filterId === 'date')).toHaveLength(0);
		});

		it('should create tags for labels', () => {
			const filters: CommentsFilterState = { ...emptyFilters, labels: ['bug', 'feature'] };

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(2);
			expect(result.at(0)).toEqual({
				id: 'label-bug',
				label: 'Label: bug',
				filterId: 'labels',
				value: 'bug',
			});
			expect(result.at(1)).toEqual({
				id: 'label-feature',
				label: 'Label: feature',
				filterId: 'labels',
				value: 'feature',
			});
		});

		it('should create tags for all filter types in order: statuses, authors, date, labels', () => {
			const filters: CommentsFilterState = {
				statuses: ['resolved'],
				authors: ['user-1'],
				dateFrom: new Date(2025, 0, 1),
				dateTo: new Date(2025, 11, 31),
				labels: ['bug'],
			};

			const result = filtersToTags(filters, authorMap);

			expect(result).toHaveLength(4);
			expect(result.map((t) => t.filterId)).toEqual(['statuses', 'authors', 'date', 'labels']);
		});
	});

	describe('removeTag', () => {
		it('should remove a status tag', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				statuses: ['resolved', 'unresolved'],
			};
			const tag: FilterTag = {
				id: 'status-resolved',
				label: 'Status: Resolved',
				filterId: 'statuses',
				value: 'resolved',
			};

			const result = removeTag(filters, tag);

			expect(result.statuses).toEqual(['unresolved']);
		});

		it('should remove an author tag', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				authors: ['user-1', 'user-2'],
			};
			const tag: FilterTag = {
				id: 'author-user-1',
				label: 'Author: Alice',
				filterId: 'authors',
				value: 'user-1',
			};

			const result = removeTag(filters, tag);

			expect(result.authors).toEqual(['user-2']);
		});

		it('should remove a label tag', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				labels: ['bug', 'feature'],
			};
			const tag: FilterTag = { id: 'label-bug', label: 'Label: bug', filterId: 'labels', value: 'bug' };

			const result = removeTag(filters, tag);

			expect(result.labels).toEqual(['feature']);
		});

		it('should clear both dateFrom and dateTo when removing a date tag', () => {
			const filters: CommentsFilterState = {
				...emptyFilters,
				dateFrom: new Date(2025, 0, 1),
				dateTo: new Date(2025, 11, 31),
			};
			const tag: FilterTag = {
				id: 'date-range',
				label: 'Date: 2025-01-01 to 2025-12-31',
				filterId: 'date',
				value: 'range',
			};

			const result = removeTag(filters, tag);

			expect(result.dateFrom).toBeUndefined();
			expect(result.dateTo).toBeUndefined();
		});

		it('should not mutate the original filter object', () => {
			const filters: CommentsFilterState = {
				authors: ['user-1'],
				labels: ['bug'],
				statuses: ['resolved'],
			};
			const tag: FilterTag = {
				id: 'status-resolved',
				label: 'Status: Resolved',
				filterId: 'statuses',
				value: 'resolved',
			};

			const result = removeTag(filters, tag);

			expect(filters.statuses).toEqual(['resolved']);
			expect(result.statuses).toEqual([]);
			expect(result).not.toBe(filters);
		});
	});
});
