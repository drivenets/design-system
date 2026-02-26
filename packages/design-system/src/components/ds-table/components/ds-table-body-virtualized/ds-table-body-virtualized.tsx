import { type Row } from '@tanstack/react-table';
import { useVirtualizer, type Virtualizer } from '@tanstack/react-virtual';
import { useLayoutEffect, useRef } from 'react';
import styles from './ds-table-body-virtualized.module.scss';
import { DsTableRowVirtualized } from '../ds-table-row-virtualized';
import type { DsTableBodyVirtualizedProps } from './ds-table-body-virtualized.types';
import { TableBody } from '../core-table';
import { EMPTY_TABLE_STATE_TEXT } from '../../utils/constants';

export const DsTableBodyVirtualized = <TData,>({
	table,
	tableContainerRef,
	emptyState,
	estimateSize,
	overscan,
	onScroll,
}: DsTableBodyVirtualizedProps<TData>) => {
	const rowsMapRef = useRef<Map<string, HTMLTableRowElement>>(new Map());
	const rowHeightsMapRef = useRef<Map<string, number>>(new Map());

	const { rows } = table.getRowModel();

	const rowsAndExpandedRowContent = rows.flatMap((row) =>
		row.getIsExpanded() ? [{ row }, { row, isExpandedRowContent: true }] : [{ row }],
	);

	const getItemKey = (index: number) => {
		const item = rowsAndExpandedRowContent[index];
		return item ? `${item.row.id}${item.isExpandedRowContent ? '-expanded-content' : ''}` : String(index);
	};

	const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
		count: rowsAndExpandedRowContent.length,
		estimateSize: (index) => {
			const cachedHeight = rowHeightsMapRef.current.get(getItemKey(index));
			return cachedHeight || estimateSize;
		}, // estimate row height for accurate scrollbar dragging
		getItemKey,
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
					const row = rowsMapRef.current.get(String(virtualRow.key));
					if (!row) {
						return;
					}

					row.style.transform = `translateY(${virtualRow.start.toString()}px)`;
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
			rowsMapRef={rowsMapRef}
			rowHeightsMapRef={rowHeightsMapRef}
			rowVirtualizer={rowVirtualizer}
			rowsAndExpandedRowContent={rowsAndExpandedRowContent}
			emptyState={emptyState}
		/>
	);
};

interface DsTableBodyProps<TData> {
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	rowsMapRef: React.RefObject<Map<string, HTMLTableRowElement>>;
	rowHeightsMapRef: React.RefObject<Map<string, number>>;
	rowsAndExpandedRowContent: {
		row: Row<TData>;
		isExpandedRowContent?: boolean;
	}[];
	emptyState?: React.ReactNode;
}

function DsTableBody<TData>({
	rowVirtualizer,
	rowsMapRef,
	rowHeightsMapRef,
	rowsAndExpandedRowContent,
	emptyState,
}: DsTableBodyProps<TData>) {
	const virtualRows = rowVirtualizer.getVirtualItems();

	return (
		<TableBody
			className={styles.body}
			style={{
				height: `${rowVirtualizer.getTotalSize().toString()}px`, // tells scrollbar how big the table is
			}}
		>
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
							isExpandedRowContent={row.isExpandedRowContent}
							rowsMapRef={rowsMapRef}
							rowHeightsMapRef={rowHeightsMapRef}
							rowVirtualizer={rowVirtualizer}
							virtualRow={virtualRow}
						/>
					);
				})
			) : (
				<div className={styles.emptyState}>{emptyState || EMPTY_TABLE_STATE_TEXT}</div>
			)}
		</TableBody>
	);
}
