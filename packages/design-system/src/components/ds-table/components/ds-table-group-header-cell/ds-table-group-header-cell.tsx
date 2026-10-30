import { flexRender } from '@tanstack/react-table';
import { DsButtonV3 } from '../../../ds-button-v3';
import { TableHead } from '../core-table';
import { useDsTableContext } from '../../context/ds-table-context';
import { getGroupColumnSizeStyle } from '../../grouping';
import { getColumnSizeStyle, getResizableHeaderStyle } from '../../utils/column-size';
import { getStickyCellProps, getStickyFillColumnId, isStickyCell } from '../../utils/sticky-columns';
import { defaultDsTableLocale } from '../../ds-table.types';
import { DsTableHeaderLabel } from '../ds-table-header-label';
import { DsTableResizeHandle } from '../ds-table-resize-handle';
import type { DsTableGroupHeaderCellProps } from './ds-table-group-header-cell.types';
import styles from './ds-table-group-header-cell.module.scss';

export const DsTableGroupHeaderCell = <TData, TValue>({
	header,
	groupBoundaryIds,
}: DsTableGroupHeaderCellProps<TData, TValue>) => {
	const { collapsedColumnGroups, onToggleColumnGroup, locale, resizableColumns, resizeSizingReady } =
		useDsTableContext<TData, TValue>();

	const groupId = header.column.id;
	const visibleLeafColumns = header.column.getLeafColumns().filter((leaf) => leaf.getIsVisible());
	const table = header.getContext().table;
	const { style: stickyStyle, ...stickyAttributes } = getStickyCellProps(
		table,
		visibleLeafColumns.map((leaf) => leaf.id),
		!!resizeSizingReady,
	);
	const getSizeStyle = () => {
		if (resizeSizingReady) {
			return getResizableHeaderStyle(header.id);
		}

		if (!isStickyCell(stickyAttributes)) {
			return getGroupColumnSizeStyle(visibleLeafColumns, {}, groupBoundaryIds);
		}

		const fillColumnId = getStickyFillColumnId(table, false);

		// Sticky leaves render at a fixed width, so the group does too, unless it holds the sticky fill column.
		if (!visibleLeafColumns.some((leaf) => leaf.id === fillColumnId)) {
			return getColumnSizeStyle(
				visibleLeafColumns.reduce((sum, leaf) => sum + leaf.getSize(), 0),
				true,
			);
		}

		const fixedLeafSizing = Object.fromEntries(
			visibleLeafColumns.filter((leaf) => leaf.id !== fillColumnId).map((leaf) => [leaf.id, leaf.getSize()]),
		);

		return getGroupColumnSizeStyle(visibleLeafColumns, fixedLeafSizing, groupBoundaryIds);
	};
	const groupStyle = { ...getSizeStyle(), ...stickyStyle };

	const isCollapsible = header.column.columnDef.meta?.group?.collapsible ?? false;
	const isCollapsed = collapsedColumnGroups?.includes(groupId) ?? false;
	const canResize = resizableColumns && !isCollapsed && header.column.getCanResize();

	const mergedLocale = { ...defaultDsTableLocale, ...locale };
	const toggleLabel = isCollapsed ? mergedLocale.expandColumnGroup : mergedLocale.collapseColumnGroup;

	const handleToggle = () => onToggleColumnGroup?.(groupId);
	const headerDef = header.column.columnDef.header;
	const tooltipText = typeof headerDef === 'string' ? headerDef : undefined;

	return (
		<TableHead
			data-column-id={groupId}
			className={styles.groupHeaderCell}
			style={groupStyle}
			colSpan={header.colSpan}
			{...stickyAttributes}
		>
			<div className={styles.groupHeaderContent}>
				<DsTableHeaderLabel tooltipText={tooltipText}>
					{flexRender(headerDef, header.getContext())}
				</DsTableHeaderLabel>
				{isCollapsible && (
					<DsButtonV3
						variant="secondary"
						size="tiny"
						icon={isCollapsed ? 'chevron_right' : 'chevron_left'}
						className={styles.collapseToggle}
						aria-label={toggleLabel}
						aria-expanded={!isCollapsed}
						title={toggleLabel}
						onClick={handleToggle}
					/>
				)}
			</div>
			{canResize && <DsTableResizeHandle header={header} />}
		</TableHead>
	);
};
