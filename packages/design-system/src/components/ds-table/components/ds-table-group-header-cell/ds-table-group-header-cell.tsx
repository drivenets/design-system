import { FlexRender, type RowData } from '@tanstack/react-table';
import { DsButtonV3 } from '../../../ds-button-v3';
import { TableHead } from '../core-table';
import { useDsTableContext } from '../../context/ds-table-context';
import { getGroupColumnSizeStyle } from '../../grouping';
import { getColumnSizeStyle, getResizableHeaderStyle } from '../../utils/column-size';
import { getStickyCellProps, isStickyCell } from '../../utils/sticky-columns';
import { defaultDsTableLocale } from '../../ds-table.types';
import { DsTableHeaderLabel } from '../ds-table-header-label';
import { DsTableResizeHandle } from '../ds-table-resize-handle';
import type { DsTableGroupHeaderCellProps } from './ds-table-group-header-cell.types';
import styles from './ds-table-group-header-cell.module.scss';

export const DsTableGroupHeaderCell = <TData extends RowData, TValue>({
	header,
}: DsTableGroupHeaderCellProps<TData, TValue>) => {
	const { collapsedColumnGroups, onToggleColumnGroup, locale, resizableColumns, resizeSizingReady } =
		useDsTableContext<TData, TValue>();

	const groupId = header.column.id;
	const visibleLeafColumns = header.column.getLeafColumns().filter((leaf) => leaf.getIsVisible());
	const { style: stickyStyle, ...stickyAttributes } = getStickyCellProps(
		header.getContext().table,
		visibleLeafColumns.map((leaf) => leaf.id),
		!!resizeSizingReady,
	);
	const getSizeStyle = () => {
		if (resizeSizingReady) {
			return getResizableHeaderStyle(header.id);
		}

		// Sticky leaves render at a fixed width, so the group does too.
		if (isStickyCell(stickyAttributes)) {
			return getColumnSizeStyle(
				visibleLeafColumns.reduce((sum, leaf) => sum + leaf.getSize(), 0),
				true,
			);
		}

		return getGroupColumnSizeStyle(visibleLeafColumns, {});
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
					<FlexRender header={header} />
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
