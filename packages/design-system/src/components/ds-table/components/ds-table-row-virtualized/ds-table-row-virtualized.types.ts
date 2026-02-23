import { type Row } from '@tanstack/react-table';
import { type Virtualizer } from '@tanstack/react-virtual';

export interface DsTableRowVirtualizedProps<TData> {
	row: Row<TData>;
	rowRefsMap: React.RefObject<Map<number, HTMLTableRowElement>>;
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	virtualRowIndex: number;
	isExpandedRowContent: boolean;
}
