import { flexRender } from '@tanstack/react-table';
import { DsButtonV3 } from '../../../ds-button-v3';
import { TableHead } from '../core-table';
import { useDsTableContext } from '../../context/ds-table-context';
import { getGroupColumnSizeStyle } from '../../grouping';
import { getResizableHeaderStyle } from '../../utils/column-size';
import { defaultDsTableLocale } from '../../ds-table.types';
import { DsTableResizeHandle } from '../ds-table-resize-handle';
import type { DsTableGroupHeaderCellProps } from './ds-table-group-header-cell.types';
import styles from './ds-table-group-header-cell.module.scss';

export const DsTableGroupHeaderCell = <TData, TValue>({
	header,
}: DsTableGroupHeaderCellProps<TData, TValue>) => {
	const { collapsedColumnGroups, onToggleColumnGroup, locale, resizableColumns, resizeSizingReady } =
		useDsTableContext<TData, TValue>();

	const groupId = header.column.id;
	const visibleLeafColumns = header.column.getLeafColumns().filter((leaf) => leaf.getIsVisible());
	const groupStyle = resizeSizingReady
		? getResizableHeaderStyle(header.id)
		: getGroupColumnSizeStyle(visibleLeafColumns, {});

	const isCollapsible = header.column.columnDef.meta?.group?.collapsible ?? false;
	const isCollapsed = collapsedColumnGroups?.includes(groupId) ?? false;
	const canResize = resizableColumns && !isCollapsed && header.column.getCanResize();

	const mergedLocale = { ...defaultDsTableLocale, ...locale };
	const toggleLabel = isCollapsed ? mergedLocale.expandColumnGroup : mergedLocale.collapseColumnGroup;

	const handleToggle = () => onToggleColumnGroup?.(groupId);

	return (
		<TableHead
			data-column-id={groupId}
			className={styles.groupHeaderCell}
			style={groupStyle}
			colSpan={header.colSpan}
		>
			<div className={styles.groupHeaderContent}>
				<span className={styles.groupLabel}>
					{flexRender(header.column.columnDef.header, header.getContext())}
				</span>
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
