import type { CommentsFilterState } from '../../comments-filters.types';

export interface CommentsFilterModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	filters: CommentsFilterState;
	onFiltersChange: (filters: CommentsFilterState) => void;
	onApply: () => void;
	onClearAll: () => void;
	availableAuthors: Array<{ id: string; name: string }>;
	availableLabels: string[];
}
