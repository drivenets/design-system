import React, { CSSProperties } from 'react';
import { Cell } from '@tanstack/react-table';
import classnames from 'classnames';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DsButton, DsCheckbox, DsIcon } from '@design-system/ui';
import { TableCell, TableRow } from '../core-table';
import { DsTableCell } from '../ds-table-cell';
import { DsTableRowProps } from './ds-table-row.types';
import styles from './ds-table-row.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import { mergeRefs } from '../../utils/merge-refs';
import { getColumnStyle } from '../../utils/column-styling';

interface DsRowDragHandleProps {
	isDragging: boolean;
	attributes: ReturnType<typeof useSortable>['attributes'];
	listeners: ReturnType<typeof useSortable>['listeners'];
}

const DsRowDragHandle = ({ isDragging, attributes, listeners }: DsRowDragHandleProps) => {
	return (
		<TableCell
			className={classnames(styles.tableCell, styles.cellReorder, {
				[styles.isDragging]: isDragging,
			})}
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

const DsTableRow = <TData, TValue>({ ref, row, virtualRow }: DsTableRowProps<TData>) => {
	const {
		expandable,
		expandedRows,
		selectable,
		reorderable,
		onRowClick,
		onRowDoubleClick,
		renderExpandedRow,
		virtualized,
		bordered,
		highlightOnHover,
		rowSize,
		toggleRowExpanded,
		primaryRowActions,
		secondaryRowActions,
	} = useDsTableContext<TData, TValue>();
	const isExpanded = expandedRows[row.id];
	const isExpandable = typeof expandable === 'function' ? expandable(row.original) : expandable;

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: row.id,
		disabled: !reorderable,
	});
	const rowStyle: CSSProperties =
		virtualRow && virtualized
			? {
					transform: `translateY(${virtualRow.start}px)`,
				}
			: reorderable
				? {
						// Convert DND-kit's transform coordinates to CSS transform string
						transform: CSS.Transform.toString(transform),
						transition: transition,
						...(isDragging
							? {
									background: 'var(--action-active-light)',
									boxShadow: '0 0 12px 0 rgba(0, 102, 250, 0.60)',
									zIndex: 1,
								}
							: {}),
						position: 'relative',
					}
				: {};

	return (
		<React.Fragment key={row.id}>
			<TableRow
				ref={mergeRefs(reorderable ? setNodeRef : null, ref)}
				data-state={row.getIsSelected() && 'selected'}
				className={classnames(
					styles.tableRow,
					{
						[styles.sizeSmall]: rowSize === 'small',
						[styles.sizeMedium]: rowSize === 'medium',
						[styles.sizeLarge]: rowSize === 'large',
					},
					virtualized && styles.virtualizedRow,
					onRowClick && styles.clickableRow,
					highlightOnHover && styles.highlightHoverRow,
					!bordered && styles.rowNoBorder,
				)}
				style={rowStyle}
				onClick={() => onRowClick?.(row.original)}
				onDoubleClick={() => onRowDoubleClick?.(row.original)}
			>
				{selectable && (
					<TableCell className={classnames(styles.tableCell, styles.cellCheckbox)}>
						<DsCheckbox
							className={stylesShared.checkboxContainer}
							checked={row.getIsSelected()}
							onClick={(e) => {
								e.stopPropagation();
								const toggleHandler = row.getToggleSelectedHandler();
								toggleHandler(e);
							}}
							onDoubleClick={(e: React.MouseEvent) => {
								e.stopPropagation();
							}}
						/>
					</TableCell>
				)}
				{expandable && (
					<TableCell className={classnames(styles.tableCell, styles.cellButton)}>
						{isExpandable && (
							<DsButton
								variant={virtualized ? 'ghost' : 'borderless'}
								size="small"
								onClick={(e: React.MouseEvent) => {
									e.stopPropagation();
									toggleRowExpanded(row.id);
								}}
								onDoubleClick={(e: React.MouseEvent) => {
									e.stopPropagation();
								}}
								className={styles.expandToggleButton}
							>
								<DsIcon
									icon={virtualized ? (isExpanded ? 'arrow_drop_down' : 'arrow_right') : 'chevron_right'}
									className={classnames(
										stylesShared.pageButtonIcon,
										!virtualized && isExpanded && 'rotate-90',
									)}
								/>
							</DsButton>
						)}
					</TableCell>
				)}
				{reorderable && (
					<DsRowDragHandle isDragging={isDragging} attributes={attributes} listeners={listeners} />
				)}
				{row.getVisibleCells().map((cell, idx) => {
					const isLastColumn = idx === row.getVisibleCells().length - 1;
					const cellStyle = getColumnStyle(cell.column.getSize(), virtualized, isLastColumn);

					return (
						<TableCell key={cell.id} className={styles.tableCell} style={cellStyle}>
							{isLastColumn ? (
								<DsTableCell
									row={row}
									cell={cell as Cell<TData, TValue>}
									primaryRowActions={primaryRowActions}
									secondaryRowActions={secondaryRowActions}
								/>
							) : (
								<DsTableCell row={row} cell={cell as Cell<TData, TValue>} />
							)}
						</TableCell>
					);
				})}
			</TableRow>
			{isExpanded && renderExpandedRow && (
				<TableRow
					style={
						virtualRow && virtualized
							? {
									transform: `translateY(${virtualRow.start + virtualRow.size}px)`,
								}
							: undefined
					}
					className={styles.expandedRow}
				>
					<TableCell
						colSpan={
							row.getVisibleCells().length +
							(selectable ? 1 : 0) +
							(isExpandable ? 1 : 0) +
							(reorderable ? 1 : 0)
						}
						className={styles.tableCell}
					>
						{renderExpandedRow(row.original)}
					</TableCell>
				</TableRow>
			)}
		</React.Fragment>
	);
};

export default DsTableRow;
