import { type RefObject } from 'react';
import { type Row } from '@tanstack/react-table';
import { type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';

export interface DsTableRowVirtualizedProps<TData> {
	row: Row<TData>;
	isSelected: boolean;
	rowsMapRef: RefObject<Map<string, HTMLTableRowElement>>;
	rowHeightsMapRef: RefObject<Map<string, number>>;
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	virtualRow: VirtualItem;
	isExpandedRowContent?: boolean;
}
