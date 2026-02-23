import { type Row } from '@tanstack/react-table';
import { useVirtualizer, type Virtualizer } from '@tanstack/react-virtual';
import { useLayoutEffect, useRef } from 'react';
import styles from './ds-table-body-virtualized.module.scss';
import { DsTableRowVirtualized } from '../ds-table-row-virtualized';
import type { DsTableBodyVirtualizedProps } from './ds-table-body-virtualized.types';
import { TableBody } from '../core-table';

export function DsTableBodyVirtualized<TData>({
	table,
	tableContainerRef,
	emptyState,
	estimateSize,
	overscan,
	onScroll,
}: DsTableBodyVirtualizedProps<TData>) {
	const rowRefsMap = useRef<Map<number, HTMLTableRowElement>>(new Map());

	const { rows } = table.getRowModel();

	const rowsAndExpandedRowContent = rows.flatMap((row) =>
		row.getIsExpanded()
			? [
					{ row, isExpandedRowContent: false },
					{ row, isExpandedRowContent: true },
				]
			: [{ row, isExpandedRowContent: false }],
	);

	const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
		count: rowsAndExpandedRowContent.length,
		estimateSize: () => estimateSize, // estimate row height for accurate scrollbar dragging
		getScrollElement: () => tableContainerRef.current,
		// measure dynamic row height, except in firefox because it measures table border height incorrectly
		measureElement:
			typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
				? (element) => element.getBoundingClientRect().height
				: undefined,
		overscan: overscan ?? 5,
		onChange: (instance, sync) => {
			requestAnimationFrame(() => {
				instance.getVirtualItems().forEach((virtualRow) => {
					const rowRef = rowRefsMap.current.get(virtualRow.index);
					if (!rowRef) {
						return;
					}

					rowRef.style.transform = `translateY(${virtualRow.start.toString()}px)`;
				});
			});

			if (sync && onScroll) {
				const scrollOffset = instance.scrollOffset || 0;
				const totalContentHeight = instance.getTotalSize();
				const viewportHeight = instance.scrollElement?.clientHeight;

				if (viewportHeight) {
					onScroll({ scrollOffset, totalContentHeight, viewportHeight });
				}
			}
		},
	});

	useLayoutEffect(() => {
		rowVirtualizer.measure();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [table.getState()]);

	return (
		<DsTableBody
			rowRefsMap={rowRefsMap}
			rowVirtualizer={rowVirtualizer}
			rowsAndExpandedRowContent={rowsAndExpandedRowContent}
			emptyState={emptyState}
		/>
	);
}

interface DsTableBodyProps<TData> {
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	rowRefsMap: React.RefObject<Map<number, HTMLTableRowElement>>;
	rowsAndExpandedRowContent: {
		isExpandedRowContent: boolean;
		row: Row<TData>;
	}[];
	emptyState?: React.ReactNode;
}

function DsTableBody<TData>({
	rowVirtualizer,
	rowRefsMap,
	rowsAndExpandedRowContent,
	emptyState,
}: DsTableBodyProps<TData>) {
	const virtualRowIndexes = rowVirtualizer.getVirtualIndexes();

	return (
		<TableBody
			className={styles.body}
			style={{
				height: `${rowVirtualizer.getTotalSize().toString()}px`, // tells scrollbar how big the table is
			}}
		>
			{virtualRowIndexes.length > 0 ? (
				virtualRowIndexes.map((virtualRowIndex) => {
					const row = rowsAndExpandedRowContent[virtualRowIndex];
					if (!row) {
						return null;
					}

					return (
						<DsTableRowVirtualized
							key={`${row.row.id}${row.isExpandedRowContent ? '-expanded-content' : ''}`}
							row={row.row}
							isExpandedRowContent={row.isExpandedRowContent}
							rowRefsMap={rowRefsMap}
							rowVirtualizer={rowVirtualizer}
							virtualRowIndex={virtualRowIndex}
						/>
					);
				})
			) : (
				<div className={styles.emptyState}>{emptyState || 'No results.'}</div>
			)}
		</TableBody>
	);
}
