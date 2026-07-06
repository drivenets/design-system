export interface FilterTag {
	/**
	 * Stable identifier for the tag, used when removing it from the filter state
	 */
	id: string;
	/**
	 * Human-readable label rendered inside the tag
	 */
	label: string;
	/**
	 * Identifier of the filter category this tag belongs to (e.g., `authors`,
	 * `labels`, `statuses`). Maps to a key on `CommentsFilterState`.
	 */
	filterId: string;
	/**
	 * Underlying filter value this tag represents (e.g., an author id or a status
	 * value). Used to remove the value from the corresponding array in
	 * `CommentsFilterState`.
	 */
	value: string;
}

export interface CommentsFilterState {
	/**
	 * Author ids currently included in the filter. Empty array means no author
	 * filter is applied.
	 */
	authors: string[];
	/**
	 * Lower bound of the createdAt range as an ISO date string, inclusive.
	 */
	dateFrom?: Date;
	/**
	 * Upper bound of the createdAt range as an ISO date string, inclusive.
	 */
	dateTo?: Date;
	/**
	 * Label strings currently included in the filter. Empty array means no label
	 * filter is applied.
	 */
	labels: string[];
	/**
	 * Status buckets currently included in the filter. Empty array means all
	 * statuses are shown.
	 */
	statuses: ('unresolved' | 'resolved' | 'action-required')[];
}
