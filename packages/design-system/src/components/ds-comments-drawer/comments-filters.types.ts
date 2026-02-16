export interface FilterTag {
	id: string;
	label: string;
	filterId: string;
	value: string;
}

export interface CommentsFilterState {
	authors: string[];
	dateFrom?: string;
	dateTo?: string;
	labels: string[];
	statuses: ('unresolved' | 'resolved' | 'action-required')[];
}
