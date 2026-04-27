import type { CommentsFilterState } from '../../comments-filters.types';

export interface CommentsFilterModalProps {
	/**
	 * Whether the filter modal is visible
	 */
	open: boolean;
	/**
	 * Called when the modal should open or close (e.g., backdrop click, close button,
	 * escape key). Receives the next `open` state.
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Current filter state rendered by the modal inputs (controlled)
	 */
	filters: CommentsFilterState;
	/**
	 * Called whenever the user edits a filter input. Receives the next filter state.
	 */
	onFiltersChange: (filters: CommentsFilterState) => void;
	/**
	 * Called when the user confirms the current filter state via the Apply button.
	 */
	onApply: () => void;
	/**
	 * Called when the user resets all filters via the "Clear all" affordance.
	 */
	onClearAll: () => void;
	/**
	 * All authors selectable in the "Authors" filter input. Typically derived from
	 * the visible comment list.
	 */
	availableAuthors: Array<{
		/**
		 * Stable author id, used as the filter value.
		 */
		id: string;
		/**
		 * Display name shown in the filter option.
		 */
		name: string;
	}>;
	/**
	 * All labels selectable in the "Labels" filter input. Typically derived from
	 * the visible comment list.
	 */
	availableLabels: string[];
}
