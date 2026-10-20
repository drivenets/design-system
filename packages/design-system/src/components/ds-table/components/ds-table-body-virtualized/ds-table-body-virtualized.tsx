import { useLayoutEffect, useRef, type RefObject, type ReactNode } from 'react';
import { type Row, type RowSelectionState } from '@tanstack/react-table';
import { useVirtualizer, type Virtualizer } from '@tanstack/react-virtual';
import styles from './ds-table-body-virtualized.module.scss';
import { DsTableRowVirtualized } from '../ds-table-row-virtualized';
import type { DsTableBodyVirtualizedProps } from './ds-table-body-virtualized.types';
import { TableBody, TableRow, TableCell } from '../core-table';
import { useInfiniteScroll } from './use-infinite-scroll';
import { useBodyOffsetTop } from './use-body-offset-top';
import { useDsTableContext } from '../../context/ds-table-context';

export const DsTableBodyVirtualized = <TData,>({
	table,
	emptyState,
	estimateSize,
	overscan,
	onScroll,
	rowSelection,
	infiniteScroll,
}: DsTableBodyVirtualizedProps<TData>) => {
	const rowsMapRef = useRef(new Map<string, HTMLTableRowElement>());
	const rowHeightsMapRef = useRef(new Map<string, number>());
	const tbodyRef = useRef<HTMLTableSectionElement>(null);
	const { scrollContainerRef } = useDsTableContext<TData, unknown>();
	const scrollMargin = useBodyOffsetTop(tbodyRef);

	const { rows } = table.getRowModel();

	const rowsAndExpandedRowContent = rows.flatMap((row) =>
		row.getIsExpanded() ? [{ row }, { row, isExpandedRowContent: true }] : [{ row }],
	);

	const getItemKey = (index: number) => {
		const item = rowsAndExpandedRowContent[index];
		return item ? `${item.row.id}${item.isExpandedRowContent ? '-expanded-content' : ''}` : String(index);
	};

	const { loadDataIfNeeded } = useInfiniteScroll(scrollContainerRef, rows.length, infiniteScroll);

	const rowVirtualizer = useVirtualizer<HTMLElement, HTMLTableRowElement>({
		count: rowsAndExpandedRowContent.length,
		estimateSize: (index) => {
			const cachedHeight = rowHeightsMapRef.current.get(getItemKey(index));
			return cachedHeight || estimateSize;
		}, // estimate row height for accurate scrollbar dragging
		getItemKey,
		getScrollElement: () => scrollContainerRef.current,
		// Rows start below the sticky header inside the scroll container.
		scrollMargin,
		// measure dynamic row height, except in firefox because it measures table border height incorrectly
		measureElement:
			typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
				? (element) => element.getBoundingClientRect().height
				: undefined,
		overscan: overscan ?? 5,
		onChange: (instance, sync) => {
			requestAnimationFrame(() => {
				instance.getVirtualItems().forEach((virtualRow) => {
					const row = rowsMapRef.current.get(String(virtualRow.key));
					if (!row) {
						return;
					}

					const start = virtualRow.start - instance.options.scrollMargin;
					row.style.transform = `translateY(${start.toString()}px)`;
				});
			});

			if (sync) {
				if (onScroll) {
					const scrollOffset = instance.scrollOffset || 0;
					// Rows only: the sticky header (`scrollMargin`) is not part of the
					// scrolled content or of the area rows are visible in.
					const totalContentHeight = instance.getTotalSize();
					const viewportHeight = (instance.scrollElement?.clientHeight ?? 0) - instance.options.scrollMargin;
					const scrollDirection = instance.scrollDirection;

					if (viewportHeight > 0) {
						const bottomOffset = totalContentHeight - (scrollOffset + viewportHeight);

						onScroll({ scrollOffset, totalContentHeight, viewportHeight, bottomOffset, scrollDirection });
					}
				}

				loadDataIfNeeded();
			}
		},
	});

	useLayoutEffect(() => {
		rowVirtualizer.measure();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [table.getState()]);

	return (
		<DsTableBody
			ref={tbodyRef}
			rowsMapRef={rowsMapRef}
			rowHeightsMapRef={rowHeightsMapRef}
			rowVirtualizer={rowVirtualizer}
			rowsAndExpandedRowContent={rowsAndExpandedRowContent}
			emptyState={emptyState}
			rowSelection={rowSelection}
		/>
	);
};

interface DsTableBodyProps<TData> {
	ref: RefObject<HTMLTableSectionElement | null>;
	rowVirtualizer: Virtualizer<HTMLElement, HTMLTableRowElement>;
	rowsMapRef: RefObject<Map<string, HTMLTableRowElement>>;
	rowHeightsMapRef: RefObject<Map<string, number>>;
	rowsAndExpandedRowContent: {
		row: Row<TData>;
		isExpandedRowContent?: boolean;
	}[];
	emptyState?: ReactNode;
	rowSelection: RowSelectionState;
}

export function DsTableBody<TData>({
	ref,
	rowVirtualizer,
	rowsMapRef,
	rowHeightsMapRef,
	rowsAndExpandedRowContent,
	emptyState,
	rowSelection,
}: DsTableBodyProps<TData>) {
	const virtualRows = rowVirtualizer.getVirtualItems();
	const totalSize = rowVirtualizer.getTotalSize();

	// Gate the empty state on real data count, not on rendered virtual rows.
	// getVirtualItems() transiently returns [] while the virtualizer re-measures
	// after a `data` swap; rendering nothing for that frame avoids an empty-state flash.
	const hasNoData = rowsAndExpandedRowContent.length === 0;

	return (
		// The body takes the full virtual height so the scroll container (and the
		// sticky header in it) scrolls the whole list. Without data it fills the
		// container for the Empty state.
		<TableBody ref={ref} className={styles.body} style={hasNoData ? undefined : { height: totalSize }}>
			{virtualRows.length > 0 ? (
				virtualRows.map((virtualRow) => {
					const row = rowsAndExpandedRowContent[virtualRow.index];
					if (!row) {
						return null;
					}

					return (
						<DsTableRowVirtualized
							key={virtualRow.key}
							row={row.row}
							isSelected={!!rowSelection[row.row.id]}
							isExpandedRowContent={row.isExpandedRowContent}
							rowsMapRef={rowsMapRef}
							rowHeightsMapRef={rowHeightsMapRef}
							rowVirtualizer={rowVirtualizer}
							virtualRow={virtualRow}
						/>
					);
				})
			) : hasNoData ? (
				<TableRow className={styles.emptyStateRow}>
					<TableCell className={styles.emptyState}>{emptyState}</TableCell>
				</TableRow>
			) : null}
		</TableBody>
	);
}
