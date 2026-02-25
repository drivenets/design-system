import { type Row } from '@tanstack/react-table';
import { type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';

export interface DsTableRowVirtualizedProps<TData> {
	row: Row<TData>;
	rowRefsMap: React.RefObject<Map<string, { height: number; node: HTMLTableRowElement }>>;
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	virtualRow: VirtualItem;
	isExpandedRowContent?: boolean;
}
