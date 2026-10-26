import type { RowData } from '@tanstack/react-table';
import type React from 'react';
import classnames from 'classnames';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DsIcon } from '../../../ds-icon';
import { TableCell, TableRow } from '../core-table';
import { DsTableCell } from '../ds-table-cell';
import type { DsTableRowProps } from './ds-table-row.types';
import styles from './ds-table-row.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import { mergeRefs } from '../../../../utils/merge-refs';
import { isEditingCell } from '../../utils/editing';
import { getBodyCellLayoutProps, type BodyCellLayoutProps } from '../../utils/sticky-columns';
import { isFirstLeafColumnOfGroup } from '../../grouping';
import {
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from '../../utils/constants';

interface DsRowDragHandleProps {
	isDragging: boolean;
	attributes: ReturnType<typeof useSortable>['attributes'];
	listeners: ReturnType<typeof useSortable>['listeners'];
	style?: React.CSSProperties;
	stickyAttributes?: BodyCellLayoutProps['stickyAttributes'];
}

const DsRowDragHandle = ({
	isDragging,
	attributes,
	listeners,
	style,
	stickyAttributes,
}: DsRowDragHandleProps) => {
	return (
		<TableCell
			{...stickyAttributes}
			className={classnames(styles.tableCell, styles.cellReorder, {
				[styles.isDragging]: isDragging,
			})}
			style={style}
		>
			<DsIcon
				className={styles.rowDragHandle}
				icon={isDragging ? 'drag_indicator' : 'arrow_downward'}
				size={isDragging ? 'medium' : 'small'}
				onClick={(e: React.MouseEvent) => e.stopPropagation()}
				{...attributes}
				{...listeners}
			></DsIcon>
		</TableCell>
	);
};

const DsTableRow = <TData extends RowData>({ ref, row, isSelected }: DsTableRowProps<TData>) => {
	const {
		reorderable,
		onRowClick,
		onRowDoubleClick,
		renderExpandedRow,
		bordered,
		rowSize,
		activeRowId,
		loading,
		resizeSizingReady,
		editing,
	} = useDsTableContext<TData, unknown>();
	const isExpanded = row.getIsExpanded();
	const isActive = activeRowId === row.id;

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: row.id,
		disabled: !reorderable,
	});
	const rowStyle: React.CSSProperties = reorderable
		? {
				// Convert DND-kit's transform coordinates to CSS transform string
				transform: CSS.Transform.toString(transform),
				transition,
				...(isDragging
					? {
							background: 'var(--color-dap-purple-200)',
							boxShadow: '0 0 12px 0 rgba(0, 102, 250, 0.60)',
							zIndex: 1,
						}
					: {}),
				position: 'relative',
			}
		: {};

	return (
		<>
			<TableRow
				ref={mergeRefs(reorderable ? setNodeRef : null, ref)}
				data-state={isActive ? 'active' : isSelected ? 'selected' : undefined}
				className={classnames(
					styles.tableRow,
					{
						[styles.sizeSmall]: rowSize === 'small',
						[styles.sizeMedium]: rowSize === 'medium',
						[styles.sizeLarge]: rowSize === 'large',
					},
					onRowClick && styles.clickableRow,
					!bordered && styles.rowNoBorder,
					isExpanded && styles.expanded,
					loading && styles.loadingRow,
				)}
				style={rowStyle}
				onClick={() => onRowClick?.(row.original)}
				onDoubleClick={() => onRowDoubleClick?.(row.original)}
			>
				{row.getVisibleCells().map((cell) => {
					const { style: cellStyle, stickyAttributes } = getBodyCellLayoutProps(cell, !!resizeSizingReady);

					if (cell.column.id === REORDER_COLUMN_ID) {
						return (
							<DsRowDragHandle
								key={cell.id}
								isDragging={isDragging}
								attributes={attributes}
								listeners={listeners}
								style={cellStyle}
								stickyAttributes={stickyAttributes}
							/>
						);
					}

					return (
						<TableCell
							key={cell.id}
							className={classnames(
								styles.tableCell,
								cell.column.id === EXPANDER_COLUMN_ID && styles.expandableCell,
								cell.column.id === SELECT_COLUMN_ID && styles.selectableCell,
								cell.column.id === ROW_ACTIONS_COLUMN_ID && styles.rowActionsCell,
								isFirstLeafColumnOfGroup(cell.column) && styles.groupStart,
								typeof cell.column.columnDef.editCell === 'function' && styles.editableCell,
							)}
							style={cellStyle}
							{...stickyAttributes}
							data-editing={isEditingCell(editing, cell) || undefined}
						>
							<DsTableCell row={row} cell={cell} />
						</TableCell>
					);
				})}
			</TableRow>

			{isExpanded && renderExpandedRow && (
				<TableRow className={styles.expandedRow}>
					<TableCell colSpan={row.getVisibleCells().length} className={styles.tableCell}>
						<div data-expanded-content>{renderExpandedRow(row.original)}</div>
					</TableCell>
				</TableRow>
			)}
		</>
	);
};

export default DsTableRow;
